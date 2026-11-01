--!strict
-- Ranked Play's look, as plain data (no Roblox dependencies, tested with Lune): each tier's emblem as layers of simple
-- shapes, its metal, its shimmer and glow, the rank-up cinematic's beats, and the end-of-match progress reveal.
-- client/RankEmblem draws the layers with Frames, client/RankedReveal plays the cinematic and the reveal.
-- A playtest: "RANKED IS ALSO BORING. I WANT THE BADGES TO BE REAL COOL EMBLEMS ... LIKE IRIDESCENT. MINE ARE FLAT
-- PLAIN SQUARES AND THE RANK UP SCREEN IS JUST PLAIN TEXT", then "RANKED NEEDS TO FEEL FUN AND REWARDING". So every
-- tier climbs a step: Bronze is a plain bevelled shield, Gold grows wings and a gloss, Diamond turns into a gem with
-- an iridescent film, and Apex is a crowned, winged star in an orbit ring with rays turning behind it.
-- 21 ranks (27 Oct, the user: "i would like 21 raNKS"), seven tiers of three: every division III wears a laurel
-- wreath (one step from the next metal), Gold and up twinkle with sparkles, and Apex's divisions are the jewels on
-- its crown (Apex III, the top, gets a second orbit ring too).
local Ranked = require("./Ranked")

local RankStyle = {}

export type RGB = { number }
export type Stop = { t: number, c: RGB }
-- One shape in emblem space: centre x, y and size w, h as fractions of the emblem (y down), rotation in degrees
-- clockwise, corner rounding (a UICorner scale, 1 = round) and transparency.
export type Piece = { x: number, y: number, w: number, h: number, rot: number, round: number, alpha: number }
-- fill: how client/RankEmblem paints the layer's pieces
--   glow     soft discs in the glow colour (they pulse)
--   rays     thin bars through the centre in the glow colour, fading out at the ends (they turn)
--   ring     a stroke-only circle, in the iridescent film's colours (it turns)
--   burst    flat accent spikes behind the body
--   rim      the dark outline
--   metal    the tier's metal ramp, light at the top (glinting; iridescent on the high tiers)
--   bevel    the ramp upside down, so an inset face looks pressed in (glinting, iridescent like metal)
--   accent   the device on the face, a lighter metal
--   core     the gem or boss in the middle
--   light    a thin highlight
--   pip      a division earned; pipOff one still to earn
--   leaf     the division III laurel, in the accent metal
--   sparkle  a twinkling four-point star (client/RankEmblem draws a cross of two bars in the piece's box and makes
--            it twinkle by RankStyle.sparkleAt)
export type Layer = { name: string, fill: string, pieces: { Piece } }
export type Style = {
	tier: string,
	level: number,
	shape: string,
	ramp: { Stop },
	rim: RGB,
	accent: RGB,
	core: RGB,
	glow: RGB,
	light: RGB,
	-- the shimmer: "none" (sweeps only on a rank-up), "gloss" (a white glint now and then), "iridescent" (a colour
	-- film turning over the metal, and the glint)
	sheen: string,
	film: { RGB },
	-- degrees a second the film turns
	filmSpin: number,
	glintPeriod: number,
	-- how strongly and how fast the glow breathes (0 = still)
	pulse: number,
	pulsePeriod: number,
	-- the glow's resting transparency
	glowAlpha: number,
	wings: number,
	rays: number,
	-- degrees a second the rays turn
	raySpin: number,
	-- twinkling stars around the emblem
	sparkles: number,
}

RankStyle.TIERS = table.clone(Ranked.TIERS)
RankStyle.SHEEN_LEVEL = { none = 0, gloss = 1, iridescent = 2 } :: { [string]: number }

-- a chrome-like ramp: bright top, a dark horizon just under the middle, a lighter reflection below it
local function chrome(light: RGB, mid: RGB, dark: RGB): { Stop }
	return {
		{ t = 0, c = light },
		{ t = 0.32, c = mid },
		{ t = 0.5, c = dark },
		{ t = 0.56, c = mid },
		{ t = 0.82, c = light },
		{ t = 1, c = dark },
	}
end

local STYLES: { [string]: Style } = {
	Bronze = {
		tier = "Bronze",
		level = 1,
		shape = "shield",
		ramp = chrome({ 255, 205, 160 }, { 192, 112, 58 }, { 92, 46, 20 }),
		rim = { 38, 18, 8 },
		accent = { 232, 156, 96 },
		core = { 132, 66, 30 },
		glow = { 220, 130, 60 },
		light = { 255, 226, 196 },
		sheen = "none",
		film = {},
		filmSpin = 0,
		glintPeriod = 6,
		pulse = 0,
		pulsePeriod = 3,
		glowAlpha = 0.9,
		wings = 0,
		rays = 0,
		raySpin = 0,
		sparkles = 0,
	},
	Silver = {
		tier = "Silver",
		level = 2,
		shape = "crestShield",
		ramp = chrome({ 255, 255, 255 }, { 178, 188, 204 }, { 74, 82, 98 }),
		rim = { 22, 26, 36 },
		accent = { 226, 234, 248 },
		core = { 96, 118, 150 },
		glow = { 190, 206, 232 },
		light = { 255, 255, 255 },
		sheen = "none",
		film = {},
		filmSpin = 0,
		glintPeriod = 6,
		pulse = 0,
		pulsePeriod = 3,
		glowAlpha = 0.86,
		wings = 0,
		rays = 0,
		raySpin = 0,
		sparkles = 0,
	},
	Gold = {
		tier = "Gold",
		level = 3,
		shape = "wingedShield",
		ramp = chrome({ 255, 250, 196 }, { 238, 178, 42 }, { 124, 74, 8 }),
		rim = { 54, 30, 4 },
		accent = { 255, 228, 128 },
		core = { 206, 36, 48 },
		glow = { 255, 200, 70 },
		light = { 255, 252, 220 },
		sheen = "gloss",
		film = {},
		filmSpin = 0,
		glintPeriod = 5,
		pulse = 0.1,
		pulsePeriod = 3,
		glowAlpha = 0.8,
		wings = 3,
		rays = 0,
		raySpin = 0,
		sparkles = 2,
	},
	Platinum = {
		tier = "Platinum",
		level = 4,
		shape = "crestedWingedShield",
		ramp = chrome({ 236, 255, 250 }, { 118, 212, 200 }, { 34, 96, 102 }),
		rim = { 8, 38, 44 },
		accent = { 204, 255, 246 },
		core = { 70, 224, 255 },
		glow = { 120, 240, 225 },
		light = { 240, 255, 252 },
		sheen = "gloss",
		film = {},
		filmSpin = 0,
		glintPeriod = 4.5,
		pulse = 0.15,
		pulsePeriod = 2.8,
		glowAlpha = 0.76,
		wings = 4,
		rays = 6,
		raySpin = 0,
		sparkles = 3,
	},
	Diamond = {
		tier = "Diamond",
		level = 5,
		shape = "gem",
		ramp = chrome({ 240, 250, 255 }, { 112, 172, 255 }, { 28, 58, 150 }),
		rim = { 10, 20, 64 },
		accent = { 204, 236, 255 },
		core = { 236, 250, 255 },
		glow = { 120, 190, 255 },
		light = { 255, 255, 255 },
		sheen = "iridescent",
		film = { { 120, 240, 255 }, { 255, 255, 255 }, { 255, 150, 230 }, { 190, 160, 255 }, { 120, 240, 255 } },
		filmSpin = 40,
		glintPeriod = 4,
		pulse = 0.2,
		pulsePeriod = 2.6,
		glowAlpha = 0.7,
		wings = 4,
		rays = 10,
		raySpin = 8,
		sparkles = 4,
	},
	Obsidian = {
		tier = "Obsidian",
		level = 6,
		shape = "star",
		ramp = chrome({ 196, 156, 255 }, { 54, 36, 86 }, { 12, 8, 22 }),
		rim = { 150, 90, 255 },
		accent = { 104, 52, 180 },
		core = { 255, 84, 206 },
		glow = { 160, 80, 255 },
		light = { 236, 200, 255 },
		sheen = "iridescent",
		film = {
			{ 160, 90, 255 },
			{ 60, 230, 220 },
			{ 255, 90, 210 },
			{ 255, 210, 120 },
			{ 160, 90, 255 },
		},
		filmSpin = 55,
		glintPeriod = 3.5,
		pulse = 0.3,
		pulsePeriod = 2.2,
		glowAlpha = 0.62,
		wings = 4,
		rays = 12,
		raySpin = 12,
		sparkles = 5,
	},
	Apex = {
		tier = "Apex",
		level = 7,
		shape = "crownedStar",
		ramp = chrome({ 255, 252, 224 }, { 255, 172, 62 }, { 150, 48, 18 }),
		rim = { 64, 12, 10 },
		accent = { 255, 216, 120 },
		core = { 255, 255, 255 },
		glow = { 255, 156, 60 },
		light = { 255, 250, 230 },
		sheen = "iridescent",
		film = {
			{ 255, 90, 90 },
			{ 255, 210, 90 },
			{ 120, 255, 140 },
			{ 90, 210, 255 },
			{ 200, 120, 255 },
			{ 255, 90, 90 },
		},
		filmSpin = 70,
		glintPeriod = 3,
		pulse = 0.4,
		pulsePeriod = 1.8,
		glowAlpha = 0.55,
		wings = 5,
		rays = 16,
		raySpin = 16,
		sparkles = 6,
	},
}

function RankStyle.forTier(tier: string): Style
	return STYLES[tier] or STYLES.Bronze
end

local function clampRank(rank: number): number
	return math.clamp(math.floor(rank), 1, #Ranked.RANKS)
end

function RankStyle.forRank(rank: number): Style
	return RankStyle.forTier(Ranked.RANKS[clampRank(rank)].tier)
end

-- the first rank of a tier (Bronze I is 1, Apex 19)
function RankStyle.firstRank(tier: string): number
	for i, r in Ranked.RANKS do
		if r.tier == tier then
			return i
		end
	end
	return 1
end

-- a colour along a ramp, 0 at the top
function RankStyle.sample(ramp: { Stop }, t: number): RGB
	t = math.clamp(t, 0, 1)
	for i = 2, #ramp do
		local a, b = ramp[i - 1], ramp[i]
		if t <= b.t then
			local k = if b.t > a.t then (t - a.t) / (b.t - a.t) else 0
			return {
				a.c[1] + (b.c[1] - a.c[1]) * k,
				a.c[2] + (b.c[2] - a.c[2]) * k,
				a.c[3] + (b.c[3] - a.c[3]) * k,
			}
		end
	end
	return table.clone(ramp[#ramp].c)
end

-- Divisions earned: Bronze I one pip, III three (Apex's are the jewels on its crown)
function RankStyle.pips(rank: number): number
	return Ranked.RANKS[clampRank(rank)].division
end

-- The shapes. Everything is built from rectangles, rotated squares and circles, so it needs no art.

local function piece(x: number, y: number, w: number, h: number, rot: number?, round: number?, alpha: number?): Piece
	return { x = x, y = y, w = w, h = h, rot = rot or 0, round = round or 0, alpha = alpha or 0 }
end

-- a shield of width w and height h centred on cx, cy: a straight-sided top and a point made from a square turned 45°
-- whose side corners meet the top's bottom corners
local function shield(cx: number, cy: number, w: number, h: number): { Piece }
	local top = cy - h / 2
	local dc = cy + h / 2 - w / 2
	local side = w / math.sqrt(2)
	return {
		piece(cx, (top + dc) / 2, w, dc - top, 0, 0.12),
		piece(cx, dc, side, side, 45, 0.06),
	}
end

-- an up-pointing chevron (^) of width w and bar thickness th, its arms at angle a degrees
local function chevron(cx: number, cy: number, w: number, th: number, a: number): { Piece }
	local len = (w / 2) / math.cos(math.rad(a)) + th * 0.6
	return {
		piece(cx - w / 4, cy, len, th, -a, 0.2),
		piece(cx + w / 4, cy, len, th, a, 0.2),
	}
end

-- a star of 4 x squares points: squares turned evenly, s their side
local function star(cx: number, cy: number, s: number, squares: number, round: number?): { Piece }
	local out = {}
	for i = 0, squares - 1 do
		table.insert(out, piece(cx, cy, s, s, 45 + i * 90 / squares, round or 0.06))
	end
	return out
end

local function disc(cx: number, cy: number, d: number, alpha: number?): Piece
	return piece(cx, cy, d, d, 0, 1, alpha)
end

-- feathers fanned out from both sides: n pills, the top one steepest and longest
local function wings(n: number, ax: number, ay: number, len: number, th: number, spread: number): { Piece }
	local out = {}
	for i = 0, n - 1 do
		local theta = math.rad(42 - i * (spread / math.max(1, n - 1)))
		local l = len * (1 - i * 0.13)
		for _, s in { -1, 1 } do
			local x0, y0 = 0.5 + s * ax, ay + i * th * 1.25
			local cx = x0 + s * math.cos(theta) * l / 2
			local cy = y0 - math.sin(theta) * l / 2
			table.insert(out, piece(cx, cy, l, th, -s * math.deg(theta), 1))
		end
	end
	return out
end

-- grow every piece by m (an outline) or shrink it (an inset)
local function grown(pieces: { Piece }, m: number): { Piece }
	local out = {}
	for _, p in pieces do
		table.insert(out, piece(p.x, p.y, p.w + m * 2, p.h + m * 2, p.rot, p.round, p.alpha))
	end
	return out
end

local function join(...: { Piece }): { Piece }
	local out = {}
	for _, list in { ... } do
		for _, p in list do
			table.insert(out, p)
		end
	end
	return out
end

-- soft glow: discs stacked, fainter as they widen
local function glowDiscs(cx: number, cy: number, d: number, count: number): { Piece }
	local out = {}
	for i = count, 1, -1 do
		table.insert(out, disc(cx, cy, d * (0.62 + 0.38 * i / count), 0.5 + 0.4 * i / count))
	end
	return out
end

-- the division III laurel: leaves up both sides from the bottom, on an arc about (0.5, cy) of radius r
local function laurel(cy: number, r: number): { Piece }
	local out = {}
	for i, deg in { 28, 48, 68, 86 } do
		local a = math.rad(deg)
		local size = 1 - (i - 1) * 0.1
		for _, side in { -1, 1 } do
			-- each leaf lies along the arc (a bar turned deg clockwise runs along the left side's tangent), tipped a
			-- little further up
			local x, y = 0.5 + side * r * math.sin(a), cy + r * math.cos(a)
			table.insert(out, piece(x, y, 0.11 * size, 0.055 * size, -side * (deg + 10), 1))
		end
	end
	return out
end

-- the sparkles: n twinkle stars spread round the emblem by the golden angle, kept inside it
local function sparkles(cy: number, n: number): { Piece }
	local out = {}
	for i = 1, n do
		local a = math.rad(i * 137.5 + 20)
		local r = if i % 2 == 0 then 0.36 else 0.42
		local x = math.clamp(0.5 + math.cos(a) * r, 0.07, 0.93)
		local y = math.clamp(cy + math.sin(a) * r, 0.07, 0.93)
		local d = if i % 3 == 0 then 0.08 else 0.11
		table.insert(out, piece(x, y, d, d))
	end
	return out
end

local function rays(cx: number, cy: number, n: number, len: number, th: number): { Piece }
	local out = {}
	for i = 0, n - 1 do
		table.insert(out, piece(cx, cy, len, th, i * 180 / n, 1))
	end
	return out
end

-- the division pips under the emblem: three diamonds, the d earned ones lit
local function divisionPips(d: number, y: number): { Layer }
	if d == 0 then
		return {}
	end
	local lit, off, rim = {}, {}, {}
	for i = 1, 3 do
		local x = 0.5 + (i - 2) * 0.14
		table.insert(rim, piece(x, y, 0.11, 0.11, 45, 0.15))
		table.insert(if i <= d then lit else off, piece(x, y, 0.075, 0.075, 45, 0.1))
	end
	return {
		{ name = "pipRim", fill = "rim", pieces = rim },
		{ name = "pipOff", fill = "pipOff", pieces = off },
		{ name = "pips", fill = "pip", pieces = lit },
	}
end

local function pipLayers(rank: number, y: number): { Layer }
	return divisionPips(RankStyle.pips(rank), y)
end

-- The shape kit, for other emblem sets drawn the same way (Rules/ZombieRankStyle)
RankStyle.shapes = {
	chrome = chrome,
	piece = piece,
	shield = shield,
	chevron = chevron,
	star = star,
	disc = disc,
	wings = wings,
	grown = grown,
	join = join,
	glowDiscs = glowDiscs,
	laurel = laurel,
	sparkles = sparkles,
	rays = rays,
	divisionPips = divisionPips,
}

-- A rank's emblem, back to front
function RankStyle.layout(rank: number): { Layer }
	rank = clampRank(rank)
	local s = RankStyle.forRank(rank)
	local layers: { Layer } = {}
	local function add(name: string, fill: string, pieces: { Piece })
		table.insert(layers, { name = name, fill = fill, pieces = pieces })
	end
	local tier = s.tier
	if tier == "Bronze" or tier == "Silver" or tier == "Gold" or tier == "Platinum" then
		local winged = s.wings > 0
		local w, h, cy = if winged then 0.46 else 0.54, if winged then 0.64 else 0.68, 0.44
		add("glow", "glow", glowDiscs(0.5, cy, if winged then 0.98 else 0.86, s.level))
		if s.rays > 0 then
			add("rays", "rays", rays(0.5, cy, s.rays, 1.05, 0.035))
		end
		if winged then
			local feathers = wings(s.wings, 0.17, 0.3, 0.36, 0.075, 34)
			add("wingRim", "rim", grown(feathers, 0.018))
			add("wings", "metal", feathers)
		end
		local body = shield(0.5, cy, w, h)
		local crest: { Piece } = {}
		if tier ~= "Bronze" then
			-- a point on top; Platinum's is a crown of three
			crest = { piece(0.5, cy - h / 2 + 0.02, 0.12, 0.12, 45, 0.1) }
			if tier == "Platinum" then
				table.insert(crest, piece(0.5 - w * 0.33, cy - h / 2 + 0.02, 0.09, 0.09, 45, 0.1))
				table.insert(crest, piece(0.5 + w * 0.33, cy - h / 2 + 0.02, 0.09, 0.09, 45, 0.1))
			end
		end
		add("rim", "rim", grown(join(body, crest), 0.03))
		add("body", "metal", join(body, crest))
		add("face", "bevel", shield(0.5, cy + 0.005, w - 0.12, h - 0.15))
		add("highlight", "light", { piece(0.5, cy - h / 2 + 0.06, w * 0.62, 0.022, 0, 1, 0.35) })
		if tier == "Bronze" then
			add("bossRim", "rim", { disc(0.5, cy - 0.04, 0.24) })
			add("boss", "core", { disc(0.5, cy - 0.04, 0.18) })
		elseif tier == "Silver" then
			add("deviceRim", "rim", join(chevron(0.5, cy + 0.08, 0.3, 0.1, 34), chevron(0.5, cy + 0.17, 0.3, 0.1, 34)))
			add(
				"device",
				"accent",
				join(chevron(0.5, cy + 0.08, 0.27, 0.065, 34), chevron(0.5, cy + 0.17, 0.27, 0.065, 34))
			)
			add("coreRim", "rim", { disc(0.5, cy - 0.1, 0.15) })
			add("core", "core", { disc(0.5, cy - 0.1, 0.1) })
		elseif tier == "Gold" then
			add("deviceRim", "rim", star(0.5, cy - 0.03, 0.3, 2))
			add("device", "accent", star(0.5, cy - 0.03, 0.25, 2))
			add("core", "core", { disc(0.5, cy - 0.03, 0.13) })
			add("spark", "light", { disc(0.47, cy - 0.06, 0.04, 0.2) })
		else
			add("deviceRim", "rim", star(0.5, cy - 0.02, 0.32, 2))
			add("device", "accent", star(0.5, cy - 0.02, 0.27, 2))
			add("coreRim", "rim", { piece(0.5, cy - 0.02, 0.17, 0.17, 45, 0.1) })
			add("core", "core", { piece(0.5, cy - 0.02, 0.12, 0.12, 45, 0.08) })
			add("spark", "light", { piece(0.48, cy - 0.05, 0.045, 0.045, 45, 0.2, 0.15) })
		end
		for _, l in pipLayers(rank, 0.91) do
			table.insert(layers, l)
		end
	elseif tier == "Diamond" then
		local cy = 0.44
		add("glow", "glow", glowDiscs(0.5, cy, 1.0, 6))
		add("rays", "rays", rays(0.5, cy, s.rays, 1.1, 0.03))
		local feathers = wings(s.wings, 0.2, 0.3, 0.3, 0.07, 30)
		add("wingRim", "rim", grown(feathers, 0.016))
		add("wings", "metal", feathers)
		-- crystal shards behind the gem
		add("burst", "burst", star(0.5, cy, 0.44, 2, 0.04))
		add("rim", "rim", { piece(0.5, cy, 0.58, 0.58, 45, 0.06) })
		add("body", "metal", { piece(0.5, cy, 0.52, 0.52, 45, 0.05) })
		add("face", "bevel", { piece(0.5, cy, 0.34, 0.34, 45, 0.04) })
		-- the facets: the gem's cross-lines and a bright table
		add("facets", "light", {
			piece(0.5, cy, 0.7, 0.018, 0, 0, 0.45),
			piece(0.5, cy, 0.018, 0.7, 0, 0, 0.45),
			piece(0.5, cy, 0.48, 0.016, 45, 0, 0.6),
			piece(0.5, cy, 0.48, 0.016, -45, 0, 0.6),
			piece(0.5, cy - 0.09, 0.26, 0.016, 0, 0, 0.5),
			piece(0.5, cy + 0.09, 0.26, 0.016, 0, 0, 0.5),
		})
		add("coreRim", "rim", { piece(0.5, cy, 0.19, 0.19, 45, 0.1) })
		add("core", "core", { piece(0.5, cy, 0.14, 0.14, 45, 0.1) })
		add("highlight", "light", { piece(0.4, cy - 0.12, 0.2, 0.022, -45, 1, 0.3) })
		add("spark", "light", { disc(0.46, cy - 0.12, 0.05, 0.1) })
		for _, l in pipLayers(rank, 0.91) do
			table.insert(layers, l)
		end
	elseif tier == "Obsidian" then
		local cy = 0.45
		add("glow", "glow", glowDiscs(0.5, cy, 1.0, 6))
		add("rays", "rays", rays(0.5, cy, s.rays, 1.15, 0.028))
		local feathers = wings(s.wings, 0.18, 0.28, 0.34, 0.07, 36)
		add("wingRim", "rim", grown(feathers, 0.016))
		add("wings", "metal", feathers)
		add("burst", "burst", star(0.5, cy, 0.52, 4, 0.04))
		add("rim", "rim", star(0.5, cy, 0.58, 2))
		add("body", "metal", star(0.5, cy, 0.52, 2))
		add("face", "bevel", star(0.5, cy, 0.34, 2))
		add("coreRim", "rim", { disc(0.5, cy, 0.22) })
		add("core", "core", { disc(0.5, cy, 0.16) })
		add("gem", "light", { piece(0.5, cy, 0.08, 0.08, 45, 0.1, 0.1) })
		add("highlight", "light", { piece(0.42, cy - 0.1, 0.18, 0.02, -45, 1, 0.35) })
		-- the star's ridges, catching the light
		add("facets", "light", {
			piece(0.5, cy, 0.56, 0.016, 0, 0, 0.55),
			piece(0.5, cy, 0.016, 0.56, 0, 0, 0.55),
			piece(0.5, cy, 0.56, 0.016, 45, 0, 0.6),
			piece(0.5, cy, 0.56, 0.016, -45, 0, 0.6),
		})
		for _, l in pipLayers(rank, 0.91) do
			table.insert(layers, l)
		end
	else
		-- Apex: its divisions are the crown's jewels, so the star sits lower and the crown takes the top
		local cy = 0.54
		add("glow", "glow", glowDiscs(0.5, cy, 1.06, 7))
		add("rays", "rays", rays(0.5, cy, s.rays, 1.2, 0.026))
		local rings = { disc(0.5, cy, 0.84) }
		if RankStyle.pips(rank) >= 3 then
			-- the top: a second orbit
			table.insert(rings, disc(0.5, cy, 0.97))
		end
		add("ring", "ring", rings)
		local feathers = wings(s.wings, 0.17, 0.4, 0.36, 0.066, 44)
		add("wingRim", "rim", grown(feathers, 0.016))
		add("wings", "metal", feathers)
		add("burst", "burst", star(0.5, cy, 0.5, 4, 0.04))
		add("rim", "rim", star(0.5, cy, 0.56, 2))
		add("body", "metal", star(0.5, cy, 0.5, 2))
		local inner = shield(0.5, cy + 0.005, 0.3, 0.36)
		add("faceRim", "rim", grown(inner, 0.02))
		add("face", "bevel", inner)
		add("coreRim", "rim", { piece(0.5, cy - 0.03, 0.15, 0.15, 45, 0.1) })
		add("core", "core", { piece(0.5, cy - 0.03, 0.1, 0.1, 45, 0.08) })
		-- the crown: a band and three points, a jewel on each
		local crown = {
			piece(0.5, 0.2, 0.32, 0.06, 0, 0.3),
			piece(0.4, 0.15, 0.08, 0.08, 45, 0.1),
			piece(0.5, 0.12, 0.11, 0.11, 45, 0.1),
			piece(0.6, 0.15, 0.08, 0.08, 45, 0.1),
		}
		add("crownRim", "rim", grown(crown, 0.016))
		add("crown", "metal", crown)
		-- the jewels are the divisions: the middle one first, then left, then right
		local jewels = { disc(0.5, 0.065, 0.06), disc(0.4, 0.1, 0.05), disc(0.6, 0.1, 0.05) }
		local lit, off = {}, {}
		for i, j in jewels do
			table.insert(if i <= RankStyle.pips(rank) then lit else off, j)
		end
		add("pipRim", "rim", grown(jewels, 0.012))
		if #off > 0 then
			add("pipOff", "pipOff", off)
		end
		add("pips", "pip", lit)
		add("facets", "light", {
			piece(0.5, cy, 0.5, 0.016, 45, 0, 0.6),
			piece(0.5, cy, 0.5, 0.016, -45, 0, 0.6),
		})
		add("spark", "light", { disc(0.47, cy - 0.07, 0.04, 0.1) })
	end
	-- division III: the laurel, behind everything but the glow, rays and rings
	if RankStyle.pips(rank) >= 3 then
		local at = 1
		for i, l in layers do
			if l.fill == "glow" or l.fill == "rays" or l.fill == "ring" then
				at = i + 1
			end
		end
		local leaves = laurel(if tier == "Apex" then 0.56 else 0.47, 0.4)
		table.insert(layers, at, { name = "laurel", fill = "leaf", pieces = leaves })
		table.insert(layers, at, { name = "laurelRim", fill = "rim", pieces = grown(leaves, 0.014) })
	end
	if s.sparkles > 0 then
		add("sparkles", "sparkle", sparkles(if tier == "Apex" then 0.54 else 0.45, s.sparkles))
	end
	return layers
end

-- A sparkle's twinkle at clock t: its scale (0 hidden .. 1) and its turn (degrees). Each star blinks on its own beat,
-- quickly in and out, so they never all flash together.
RankStyle.SPARKLE_PERIOD = 2.2
function RankStyle.sparkleAt(i: number, t: number): (number, number)
	local phase = (t / RankStyle.SPARKLE_PERIOD + i * 0.382) % 1
	-- lit for the first 40% of its beat, a sharp bump
	local scale = if phase < 0.4 then math.sin(phase / 0.4 * math.pi) ^ 2 else 0
	return scale, phase * 90
end

-- The shimmer, as functions of the clock (seconds), so client/RankEmblem only copies numbers each frame.

-- The glint: a bright band sweeping across, (angle in degrees, offset -1.3..1.3 across the emblem). A flare (the
-- rank-up's sweep, flaredAt a clock time) sweeps any tier; otherwise only gloss and iridescent tiers sweep, now and then.
local SWEEP = 0.7
function RankStyle.glintAt(s: Style, t: number, flaredAt: number?): (number, number)
	local angle = 105
	if flaredAt and t >= flaredAt and t < flaredAt + SWEEP then
		return angle, -1.3 + 2.6 * (t - flaredAt) / SWEEP
	end
	if s.sheen == "none" then
		return angle, 1.3
	end
	local phase = t % s.glintPeriod
	if phase < SWEEP then
		return angle, -1.3 + 2.6 * phase / SWEEP
	end
	return angle, 1.3
end

-- The iridescent film's angle (degrees): it turns steadily, so the colours slide over the metal as you watch
function RankStyle.filmAt(s: Style, t: number): number
	return (t * s.filmSpin + 25 * math.sin(t * 0.9)) % 360
end

-- The glow's transparency: its resting value, breathing brighter by the tier's pulse
function RankStyle.glowAt(s: Style, t: number): number
	local wave = 0.5 + 0.5 * math.sin(t * 2 * math.pi / s.pulsePeriod)
	return math.clamp(s.glowAlpha - s.pulse * 0.5 * wave, 0, 1)
end

-- Rank changes

-- "tier" (a new metal), "division" (a step within one), "down", or nil for none
function RankStyle.change(before: number, after: number): string?
	before, after = clampRank(before), clampRank(after)
	if after == before then
		return nil
	elseif after < before then
		return "down"
	end
	return if Ranked.RANKS[after].tier ~= Ranked.RANKS[before].tier then "tier" else "division"
end

export type Cinematic = {
	kind: string,
	kicker: string,
	total: number,
	-- when each beat starts (seconds): the dim comes in, the old emblem shatters, the new one scales in with the
	-- flash and rays, the title lands, then it all shrinks away
	beats: { dim: number, old: number, reveal: number, title: number, out: number },
	outTime: number,
	dim: number,
	flash: number,
	rays: number,
	shatter: boolean,
	-- the emblem's size at its peak (px) and where its centre sits (fraction of the screen's height)
	size: number,
	y: number,
	-- sparks flying out of the reveal (RankStyle.burst), the new emblem spinning in like a coin, the stage shaking
	-- (px), and the tier ladder lighting its new step under the title
	particles: number,
	flip: boolean,
	shake: number,
	ladder: boolean,
}

local CINEMATICS: { [string]: Cinematic } = {
	tier = {
		kind = "tier",
		kicker = "RANK UP",
		total = 3.8,
		beats = { dim = 0, old = 0.15, reveal = 0.6, title = 0.95, out = 3.2 },
		outTime = 0.55,
		dim = 0.55,
		flash = 0.55,
		rays = 18,
		shatter = true,
		size = 260,
		y = 0.42,
		particles = 36,
		flip = true,
		shake = 7,
		ladder = true,
	},
	division = {
		kind = "division",
		kicker = "DIVISION UP",
		total = 2.8,
		beats = { dim = 0, old = 0.1, reveal = 0.35, title = 0.6, out = 2.3 },
		outTime = 0.45,
		dim = 0.35,
		flash = 0.3,
		rays = 10,
		shatter = false,
		size = 210,
		y = 0.42,
		particles = 16,
		flip = false,
		shake = 0,
		ladder = false,
	},
	-- subdued: no flash or rays, a grey kicker, quick
	down = {
		kind = "down",
		kicker = "RANK DOWN",
		total = 2.2,
		beats = { dim = 0, old = 0.1, reveal = 0.4, title = 0.55, out = 1.8 },
		outTime = 0.4,
		dim = 0.25,
		flash = 0,
		rays = 0,
		shatter = false,
		size = 150,
		y = 0.42,
		particles = 0,
		flip = false,
		shake = 0,
		ladder = false,
	},
}

-- A rank change's cinematic. context "reveal" (after a match, centre stage) or "match" (mid-fight: lighter, smaller
-- and up high, so it never covers the crosshair)
function RankStyle.cinematic(kind: string, context: string): Cinematic
	local c = table.clone(CINEMATICS[kind] or CINEMATICS.division)
	c.beats = table.clone(c.beats)
	if context == "match" then
		c.dim *= 0.35
		c.flash *= 0.5
		c.size = math.max(120, math.floor(c.size * 0.62))
		c.y = 0.27
		-- mid-fight: fewer sparks, no shake, no ladder
		c.particles = math.floor(c.particles * 0.5)
		c.shake = 0
		c.ladder = false
	end
	return c
end

-- The kicker over the title: reaching the very top says so
function RankStyle.kicker(kind: string, to: number): string
	if kind ~= "down" and clampRank(to) == Ranked.TOP then
		return "TOP RANK"
	end
	return (CINEMATICS[kind] or CINEMATICS.division).kicker
end

export type Spark = {
	angle: number,
	dist: number,
	size: number,
	delay: number,
	spin: number,
	life: number,
	light: boolean,
}

-- The sparks out of a reveal: n of them round the full circle at set but uneven angles, distances and sizes (no
-- randomness, so it looks the same every time and the tests can check it). dist and size are fractions of the
-- emblem's size, angle in radians, delay and life in seconds.
function RankStyle.burst(n: number): { Spark }
	local out = {}
	for i = 1, n do
		local h = (math.sin(i * 12.9898) * 43758.5453) % 1
		local h2 = (math.sin(i * 78.233) * 12543.123) % 1
		table.insert(out, {
			angle = (i / n) * math.pi * 2 + (h - 0.5) * 0.5,
			dist = 0.75 + 0.75 * h2,
			size = 0.025 + 0.035 * h,
			delay = 0.08 * h2,
			spin = (h - 0.5) * 540,
			life = 0.7 + 0.5 * h,
			light = i % 3 == 0,
		})
	end
	return out
end

-- The rank ladder (the lobby's rank card, the PLAY tab, a tier-up): all 21 ranks as a grid, a column per tier (Bronze
-- left, Apex right) and a row per division (III on top, so it climbs up and to the right), each behind you, yours now,
-- or still ahead. The user (27 Oct), seeing only the seven tiers: "Y DO I ONLY SEE SEVEN RANKS".
export type Cell = { rank: number, tier: string, division: number, col: number, row: number, state: string }
function RankStyle.ladder(rank: number): { Cell }
	rank = clampRank(rank)
	local out: { Cell } = {}
	for i, r in Ranked.RANKS do
		table.insert(out, {
			rank = i,
			tier = r.tier,
			division = r.division,
			col = RankStyle.forTier(r.tier).level,
			row = 4 - r.division,
			state = if i < rank then "earned" elseif i == rank then "current" else "locked",
		})
	end
	return out
end

-- "GOLD II" as "G O L D   I I": the title's letter-spacing (TextLabels have none)
function RankStyle.spaced(text: string): string
	local words = {}
	for word in string.gmatch(text, "%S+") do
		local letters = {}
		for _, code in utf8.codes(word) do
			table.insert(letters, utf8.char(code))
		end
		table.insert(words, table.concat(letters, " "))
	end
	return table.concat(words, "   ")
end

-- The end-of-match reveal

RankStyle.REVEAL = {
	-- the end screens it waits for (seconds of nothing on screen before it shows, and the most it waits)
	quiet = 1.6,
	maxWait = 60,
	-- the panel fades in, then each line ticks in, then the bar fills
	intro = 0.45,
	lineStart = 0.55,
	lineStep = 0.45,
	lineCount = 0.35,
	-- the bar's fill: seconds for a whole bar, never shorter than minSegment, the whole fill capped
	perBar = 1.5,
	minSegment = 0.35,
	maxFill = 5,
	-- a crossing's flash, and the hold after the bar settles before it closes (or hands off to the rank-up)
	flash = 0.4,
	hold = 1.8,
	outro = 0.45,
}
-- the end-of-match screens' ScreenGuis (client/Killcam, client/ProgressSummary): the reveal waits until they're shut
RankStyle.WAIT_FOR = { "MpFfaKillcam", "MpFfaPodium", "EMXProgressSummary" }

export type Segment = { rank: number, from: number, to: number, crosses: boolean, at: number, dur: number }
export type RevealPlan = {
	lines: { { label: string, amount: number } },
	fromRank: number,
	toRank: number,
	crossed: number,
	segments: { Segment },
	fillEnd: number,
	total: number,
}

-- From one total of ranked kills to another: the lines (what earned it) and the bar's run, a segment per rank it
-- passes through, each crossing flashing before the next starts from empty
function RankStyle.revealPlan(before: number, after: number, kills: number, bonus: number): RevealPlan
	local R = RankStyle.REVEAL
	local lines = { { label = "RANKED KILLS", amount = math.max(0, math.floor(kills)) } }
	if bonus > 0 then
		table.insert(lines, { label = "PLACEMENT BONUS", amount = math.floor(bonus) })
	end
	-- anything else the server added (it shouldn't happen, but the lines must add up)
	local rest = math.floor(after - before) - lines[1].amount - (if bonus > 0 then math.floor(bonus) else 0)
	if rest > 0 then
		table.insert(lines, { label = "OTHER", amount = rest })
	end
	local a, b = Ranked.progress(before), Ranked.progress(math.max(before, after))
	local raw: { { rank: number, from: number, to: number, crosses: boolean } } = {}
	for rank = a.rank, b.rank do
		local from = if rank == a.rank then a.fraction else 0
		local to = if rank == b.rank then b.fraction else 1
		table.insert(raw, { rank = rank, from = from, to = to, crosses = rank < b.rank })
	end
	-- how long each segment fills, squeezed if the whole run would drag
	local length = 0
	for _, r in raw do
		length += math.max(R.minSegment, (r.to - r.from) * R.perBar)
	end
	local squeeze = if length > R.maxFill then R.maxFill / length else 1
	local segments: { Segment } = {}
	local t = R.lineStart + #lines * R.lineStep
	for _, r in raw do
		local dur = math.max(0.3, math.max(R.minSegment, (r.to - r.from) * R.perBar) * squeeze)
		table.insert(segments, { rank = r.rank, from = r.from, to = r.to, crosses = r.crosses, at = t, dur = dur })
		t += dur + (if r.crosses then R.flash else 0)
	end
	return {
		lines = lines,
		fromRank = a.rank,
		toRank = b.rank,
		crossed = b.rank - a.rank,
		segments = segments,
		fillEnd = t,
		total = t + R.hold + R.outro,
	}
end

-- The HUD's pop by the rank bar on a ranked kill: how far it rises (px) and how long it lasts
RankStyle.POP = { rise = 26, time = 0.75 }
function RankStyle.popText(n: number): string
	return "+" .. math.floor(n)
end

return RankStyle
