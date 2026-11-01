--!strict
-- Ranked Play's emblems (Rules/Ranked), drawn from plain GUI pieces so they need no uploaded art. A playtest: "I WANT
-- THE BADGES TO BE REAL COOL EMBLEMS ... LIKE IRIDESCENT. MINE ARE FLAT PLAIN SQUARES". The shapes, metals and timings
-- are data in Rules/RankStyle (tested with Lune); this draws them: layers of rotated Frames with UICorner, the metal
-- as a UIGradient shaded top to bottom across the whole emblem (so the pieces read as one cast shape, not tiles), a
-- dark rim layer under the metal for the outline (a UIStroke per piece would draw seams where pieces overlap), the
-- division pips, and the shine:
--   Bronze    a bevelled shield with a round boss                 Silver   a crested shield with double chevrons
--   Gold      a winged shield, gold star and ruby, a gloss glint   Platinum bigger wings, a triple crest, a teal gem
--   Diamond   a faceted gem with crystal wings and turning rays, an iridescent film
--   Obsidian  a dark eight-point star with violet edges, a magenta core, a 16-point burst and rays
--   Apex      a crowned, winged star in an orbit ring, rainbow iridescence and a fast-breathing glow; its divisions
--             light the crown's jewels, and Apex III, the top, has a second orbit
-- Every division III wears a laurel, and Gold and up twinkle with sparkle stars (Rules/RankStyle.sparkleAt).
-- Two sets of emblems: Ranked Play's (the default) and zombies' undead ranks ({ set = "zombies" }: Rules/ZombieRank,
-- Rules/ZombieRankStyle), drawn the same way; every helper here takes the set too. A rank with a painted emblem
-- (shared/RankArt, from tools/rank_art.py: the user's own art) shows that picture in place of the drawn body, over
-- its tier's breathing glow and turning rays, with its twinkles on top.
-- RankEmblem.new(rank, size, parent?, options?) builds one ({ animated = false } draws it still);
-- RankEmblem.set(emblem, rank) redraws it; RankEmblem.flare(emblem) sweeps a glint across it now (the rank-up);
-- RankEmblem.destroy(emblem). The shine runs on one RenderStepped connection shared by every live emblem, made when
-- the first appears and dropped when the last is destroyed.
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local RunService = game:GetService("RunService")
local Workspace = game:GetService("Workspace")

local Rules = ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Rules")
local Ranked = require(Rules:WaitForChild("Ranked"))
local RankStyle = require(Rules:WaitForChild("RankStyle"))
local ZombieRank = require(Rules:WaitForChild("ZombieRank"))
local ZombieRankStyle = require(Rules:WaitForChild("ZombieRankStyle"))
local RankArt = require(ReplicatedStorage:WaitForChild("Shared"):WaitForChild("RankArt")) :: { [string]: { [number]: string } }

local RankEmblem = {}

export type Emblem = { frame: Frame, rank: number, size: number, animated: boolean, set: string? }
export type Options = { animated: boolean?, set: string? }

-- what moves on one emblem, each with the rotation of the piece it sits on (gradients turn with their piece)
type Anim = {
	style: RankStyle.Style,
	glows: { { f: Frame, alpha: number } },
	spins: { { f: Frame, speed: number } },
	films: { { g: UIGradient, rot: number } },
	glints: { { g: UIGradient, rot: number } },
	rings: { UIGradient },
	sparkles: { { f: Frame, scale: UIScale } },
	flaredAt: number?,
	animated: boolean,
	orphanSince: number?,
}

local live: { [Frame]: Anim } = {}
local stepper: RBXScriptConnection? = nil

-- the metal's ramp runs over the body, top to bottom (fractions of the emblem)
local BODY_TOP, BODY_SPAN = 0.06, 0.8

local function rgb(c: { number }): Color3
	return Color3.fromRGB(math.floor(c[1] + 0.5), math.floor(c[2] + 0.5), math.floor(c[3] + 0.5))
end

local function clampRank(rank: number): number
	return math.clamp(math.floor(rank), 1, #Ranked.RANKS)
end

-- a set's rules (its RANKS and names) and its look
function RankEmblem.rules(set: string?): any
	return if set == "zombies" then ZombieRank else Ranked
end

local function styleOf(set: string?): any
	return if set == "zombies" then ZombieRankStyle else RankStyle
end

local function glowTransparency(alpha: number, s: RankStyle.Style, t: number): number
	-- the piece's own softness times the tier's glow, which breathes
	return math.clamp(1 - (1 - alpha) * (1 - RankStyle.glowAt(s, t)) * 2.5, 0, 1)
end

local function animate(a: Anim, t: number)
	local s = a.style
	for _, g in a.glows do
		g.f.BackgroundTransparency = glowTransparency(g.alpha, s, t)
	end
	for _, sp in a.spins do
		sp.f.Rotation = (t * sp.speed) % 360
	end
	if #a.films > 0 then
		local film = RankStyle.filmAt(s, t)
		for _, f in a.films do
			f.g.Rotation = film - f.rot
		end
	end
	local angle, offset = RankStyle.glintAt(s, t, a.flaredAt)
	for _, gl in a.glints do
		-- the band runs along the gradient's own axis, which turns with the piece
		local local_ = angle - gl.rot
		local r = math.rad(local_)
		gl.g.Rotation = local_
		gl.g.Offset = Vector2.new(math.cos(r) * offset, math.sin(r) * offset)
	end
	for _, g in a.rings do
		g.Rotation = (t * 90) % 360
	end
	for i, sp in a.sparkles do
		local scale, rot = RankStyle.sparkleAt(i, t)
		sp.scale.Scale = scale
		sp.f.Rotation = rot
	end
end

local function step()
	local t = os.clock()
	for root, a in live do
		if root.Parent == nil then
			-- dropped without Destroy: forget it after a while (Destroying clears it at once)
			a.orphanSince = a.orphanSince or t
			if t - (a.orphanSince :: number) > 10 then
				live[root] = nil
			end
		else
			a.orphanSince = nil
			animate(a, t)
		end
	end
	if next(live) == nil and stepper then
		stepper:Disconnect()
		stepper = nil
	end
end

local function register(root: Frame, a: Anim)
	live[root] = a
	if not stepper then
		stepper = RunService.RenderStepped:Connect(step)
	end
end

local function unregister(root: Frame)
	live[root] = nil
	if next(live) == nil and stepper then
		stepper:Disconnect()
		stepper = nil
	end
end

local function corner(f: GuiObject, round: number)
	if round > 0 then
		local c = Instance.new("UICorner")
		-- a UICorner's scale is half the short side at most, so round 1 is a pill or a circle
		c.CornerRadius = UDim.new(round * 0.5, 0)
		c.Parent = f
	end
end

-- a gradient whose axis points down the screen however the piece is turned
local function vertical(f: GuiObject, rot: number, colors: ColorSequence): UIGradient
	local g = Instance.new("UIGradient")
	g.Rotation = 90 - rot
	g.Color = colors
	g.Parent = f
	return g
end

-- how far a turned piece reaches up and down (fractions of the emblem)
local function reachY(p: RankStyle.Piece): number
	local r = math.rad(p.rot)
	return (math.abs(p.w * math.sin(r)) + math.abs(p.h * math.cos(r))) / 2
end

-- the ramp's colours over the stretch of screen the piece covers, so neighbouring pieces shade as one
local function rampOver(s: RankStyle.Style, p: RankStyle.Piece, flip: boolean, shade: number): ColorSequence
	local ey = reachY(p)
	local keys = {}
	for k = 0, 8 do
		local y = p.y - ey + 2 * ey * k / 8
		local t = (y - BODY_TOP) / BODY_SPAN
		local c = RankStyle.sample(s.ramp, if flip then 1 - t else t)
		table.insert(keys, ColorSequenceKeypoint.new(k / 8, rgb(c):Lerp(Color3.new(0, 0, 0), shade)))
	end
	return ColorSequence.new(keys)
end

local function lit(base: Color3, top: number, bottom: number): ColorSequence
	return ColorSequence.new({
		ColorSequenceKeypoint.new(0, base:Lerp(Color3.new(1, 1, 1), top)),
		ColorSequenceKeypoint.new(0.5, base),
		ColorSequenceKeypoint.new(1, base:Lerp(Color3.new(0, 0, 0), bottom)),
	})
end

local function filmColors(s: RankStyle.Style): ColorSequence
	local keys = {}
	local n = #s.film
	for i, c in s.film do
		table.insert(keys, ColorSequenceKeypoint.new((i - 1) / math.max(1, n - 1), rgb(c)))
	end
	return ColorSequence.new(keys)
end

local GLINT_BAND = NumberSequence.new({
	NumberSequenceKeypoint.new(0, 1),
	NumberSequenceKeypoint.new(0.38, 1),
	NumberSequenceKeypoint.new(0.47, 0.55),
	NumberSequenceKeypoint.new(0.5, 0.15),
	NumberSequenceKeypoint.new(0.53, 0.55),
	NumberSequenceKeypoint.new(0.62, 1),
	NumberSequenceKeypoint.new(1, 1),
})

-- a full-size child over a piece with the same corners, for the film and the glint
local function overlay(f: Frame, round: number, z: number): Frame
	local o = Instance.new("Frame")
	o.Name = "Shine"
	o.BorderSizePixel = 0
	o.BackgroundColor3 = Color3.new(1, 1, 1)
	o.Size = UDim2.fromScale(1, 1)
	o.ZIndex = z
	corner(o, round)
	o.Parent = f
	return o
end

-- the layers live in one Art frame, so a redraw clears only them and keeps what callers hung on the emblem (a
-- UIScale for a pop, a button over it)
local function draw(root: Frame, rank: number, size: number, animated: boolean, set: string?)
	local old = root:FindFirstChild("Art")
	if old then
		old:Destroy()
	end
	local art = Instance.new("Frame")
	art.Name = "Art"
	art.BackgroundTransparency = 1
	art.Size = UDim2.fromScale(1, 1)
	art.ZIndex = root.ZIndex
	art.Parent = root
	rank = clampRank(rank)
	local look = styleOf(set)
	local s: RankStyle.Style = look.forRank(rank)
	local a: Anim = {
		style = s,
		glows = {},
		spins = {},
		films = {},
		glints = {},
		rings = {},
		sparkles = {},
		flaredAt = nil,
		animated = animated,
		orphanSince = nil,
	}
	local base = root.ZIndex
	-- a painted emblem replaces the drawn body; its glow, rays and twinkles stay
	local paintedSet = RankArt[set or "mp"]
	local image: string? = paintedSet and paintedSet[rank]
	local layers: { RankStyle.Layer } = look.layout(rank)
	if image then
		local kept = {}
		for _, l in layers do
			if l.fill == "glow" or l.fill == "rays" or l.fill == "sparkle" then
				table.insert(kept, l)
			end
		end
		layers = kept
	end
	local function placeImage(z: number)
		local pic = Instance.new("ImageLabel")
		pic.Name = "Painted"
		pic.BackgroundTransparency = 1
		pic.Image = image :: string
		pic.ScaleType = Enum.ScaleType.Fit
		pic.Size = UDim2.fromScale(1, 1)
		pic.ZIndex = z
		pic.Parent = art
	end
	local shift = 0
	for i, layer in layers do
		if image and shift == 0 and layer.fill == "sparkle" then
			placeImage(base + i)
			shift = 1
		end
		local z = base + i + shift
		local holder = Instance.new("Frame")
		holder.Name = layer.name
		holder.BackgroundTransparency = 1
		holder.AnchorPoint = Vector2.new(0.5, 0.5)
		holder.Position = UDim2.fromScale(0.5, 0.5)
		holder.Size = UDim2.fromScale(1, 1)
		holder.ZIndex = z
		holder.Parent = art
		if layer.fill == "rays" and s.raySpin ~= 0 then
			-- a Frame turns about its own centre, so the rays' layer is moved to centre on the body and turned
			local cy = layer.pieces[1].y
			holder.Position = UDim2.fromScale(0.5, cy)
			table.insert(a.spins, { f = holder, speed = s.raySpin })
		end
		for _, p in layer.pieces do
			local f = Instance.new("Frame")
			f.BorderSizePixel = 0
			f.AnchorPoint = Vector2.new(0.5, 0.5)
			f.Position = UDim2.fromScale(p.x, p.y)
			f.Size = UDim2.fromScale(p.w, p.h)
			f.Rotation = p.rot
			f.BackgroundTransparency = p.alpha
			f.ZIndex = z
			corner(f, p.round)
			local fill = layer.fill
			if fill == "glow" then
				f.BackgroundColor3 = rgb(s.glow)
				f.BackgroundTransparency = glowTransparency(p.alpha, s, 0)
				table.insert(a.glows, { f = f, alpha = p.alpha })
			elseif fill == "rays" then
				f.BackgroundColor3 = rgb(s.glow):Lerp(Color3.new(1, 1, 1), 0.3)
				local g = Instance.new("UIGradient")
				g.Transparency = NumberSequence.new({
					NumberSequenceKeypoint.new(0, 1),
					NumberSequenceKeypoint.new(0.3, 0.75),
					NumberSequenceKeypoint.new(0.5, 0.35),
					NumberSequenceKeypoint.new(0.7, 0.75),
					NumberSequenceKeypoint.new(1, 1),
				})
				g.Parent = f
				if s.raySpin ~= 0 then
					-- inside the turning layer, about its centre
					f.Position = UDim2.fromScale(p.x, 0.5)
				end
			elseif fill == "ring" then
				f.BackgroundTransparency = 1
				local stroke = Instance.new("UIStroke")
				stroke.Thickness = math.max(1, size * 0.014)
				stroke.Color = Color3.new(1, 1, 1)
				stroke.Transparency = 0.1
				stroke.Parent = f
				local g = Instance.new("UIGradient")
				g.Color = if #s.film > 0 then filmColors(s) else ColorSequence.new(rgb(s.light))
				g.Parent = stroke
				table.insert(a.rings, g)
			elseif fill == "burst" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				f.BackgroundTransparency = 0.15
				vertical(f, p.rot, lit(rgb(s.accent), 0.35, 0.5))
			elseif fill == "rim" then
				f.BackgroundColor3 = rgb(s.rim)
			elseif fill == "metal" or fill == "bevel" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				local bevel = fill == "bevel"
				vertical(f, p.rot, rampOver(s, p, bevel, if bevel then 0.18 else 0))
				if #s.film > 0 then
					local o = overlay(f, p.round, z)
					o.BackgroundTransparency = if bevel then 0.72 else 0.62
					local g = Instance.new("UIGradient")
					g.Color = filmColors(s)
					g.Parent = o
					table.insert(a.films, { g = g, rot = p.rot })
				end
				local o = overlay(f, p.round, z)
				local g = Instance.new("UIGradient")
				g.Transparency = GLINT_BAND
				g.Offset = Vector2.new(1.3, 0)
				g.Parent = o
				table.insert(a.glints, { g = g, rot = p.rot })
			elseif fill == "accent" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				vertical(f, p.rot, lit(rgb(s.accent), 0.5, 0.35))
			elseif fill == "core" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				vertical(f, p.rot, lit(rgb(s.core), 0.55, 0.45))
			elseif fill == "light" then
				f.BackgroundColor3 = rgb(s.light)
			elseif fill == "pip" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				vertical(f, p.rot, lit(rgb(s.accent), 0.6, 0.2))
			elseif fill == "pipOff" then
				f.BackgroundColor3 = rgb(RankStyle.sample(s.ramp, 0.5)):Lerp(Color3.new(0, 0, 0), 0.4)
			elseif fill == "leaf" then
				f.BackgroundColor3 = Color3.new(1, 1, 1)
				vertical(f, p.rot, lit(rgb(s.accent), 0.45, 0.4))
			elseif fill == "sparkle" then
				-- a four-point star: two thin pills crossed over a bright dot, in the tier's light
				f.BackgroundTransparency = 1
				local starColor = rgb(s.light):Lerp(Color3.new(1, 1, 1), 0.5)
				for _, dims in { { 1, 0.16 }, { 0.16, 1 }, { 0.34, 0.34 } } do
					local bar = Instance.new("Frame")
					bar.BorderSizePixel = 0
					bar.BackgroundColor3 = starColor
					bar.AnchorPoint = Vector2.new(0.5, 0.5)
					bar.Position = UDim2.fromScale(0.5, 0.5)
					bar.Size = UDim2.fromScale(dims[1], dims[2])
					bar.Rotation = if dims[1] == dims[2] then 45 else 0
					bar.ZIndex = z
					corner(bar, 1)
					bar.Parent = f
				end
				local scale = Instance.new("UIScale")
				scale.Scale = 0
				scale.Parent = f
				table.insert(a.sparkles, { f = f, scale = scale })
			end
			f.Parent = holder
		end
	end
	if image and shift == 0 then
		placeImage(base + #layers + 1)
	end
	if animated then
		register(root, a)
	else
		-- a still emblem: the film at a flattering angle, no glint, every other sparkle lit
		animate(a, 0.6)
		for i, sp in a.sparkles do
			sp.scale.Scale = if i % 2 == 1 then 0.85 else 0
			sp.f.Rotation = 0
		end
		unregister(root)
	end
end

function RankEmblem.new(rank: number, size: number, parent: Instance?, options: Options?): Emblem
	local animated = not (options and options.animated == false)
	local root = Instance.new("Frame")
	root.Name = "RankEmblem"
	root.BackgroundTransparency = 1
	root.Size = UDim2.fromOffset(size, size)
	root.Destroying:Connect(function()
		unregister(root)
	end)
	local set = options and options.set
	local e: Emblem = { frame = root, rank = clampRank(rank), size = size, animated = animated, set = set }
	draw(root, e.rank, size, animated, set)
	root.Parent = parent
	return e
end

function RankEmblem.set(e: Emblem, rank: number)
	rank = clampRank(rank)
	if e.rank ~= rank then
		e.rank = rank
		draw(e.frame, rank, e.size, e.animated, e.set)
	end
end

-- a glint across the emblem now, even on the plain tiers: the rank-up's sweep
function RankEmblem.flare(e: Emblem)
	local a = live[e.frame]
	if a then
		a.flaredAt = os.clock()
	end
end

function RankEmblem.destroy(e: Emblem)
	unregister(e.frame)
	e.frame:Destroy()
end

-- A rank still ahead of you: the emblem drawn in dull grey steel, dimmed, with no sparkles, so it reads as locked
-- (a CanvasGroup tint was too faint to tell apart from the earned ones)
function RankEmblem.greyOut(root: Frame)
	local function grey(c: Color3): Color3
		local l = (c.R * 0.3 + c.G * 0.59 + c.B * 0.11) * 0.55 + 0.08
		return Color3.new(l, l, l * 1.08)
	end
	for _, d in root:GetDescendants() do
		if d:IsA("Frame") then
			d.BackgroundColor3 = grey(d.BackgroundColor3)
			if d.BackgroundTransparency < 1 then
				d.BackgroundTransparency = 1 - (1 - d.BackgroundTransparency) * 0.75
			end
		elseif d:IsA("UIGradient") then
			local keys = {}
			for _, k in d.Color.Keypoints do
				table.insert(keys, ColorSequenceKeypoint.new(k.Time, grey(k.Value)))
			end
			d.Color = ColorSequence.new(keys)
		elseif d:IsA("UIStroke") then
			d.Color = grey(d.Color)
		elseif d:IsA("ImageLabel") and d.Name == "Painted" then
			d.ImageColor3 = Color3.fromRGB(105, 110, 118)
			d.ImageTransparency = 0.3
		elseif d:IsA("UIScale") and d.Parent and d.Parent.Parent and d.Parent.Parent.Name == "sparkles" then
			d.Scale = 0
		end
	end
end

-- The rank ladder (Rules/RankStyle.ladder): all 21 ranks as still emblems, size px each, a column per tier and a row
-- per division (III on top), with I, II, III down the left. Ranks behind you are in colour, yours is bigger with a
-- ring in its glow, and the ones ahead are greyed out. Returns the grid and each rank's holder (by rank) so a caller
-- can animate yours.
function RankEmblem.ladder(rank: number, size: number, parent: Instance?, set: string?): (Frame, { [number]: Frame })
	rank = clampRank(rank)
	local grid = Instance.new("Frame")
	grid.Name = "RankLadder"
	grid.BackgroundTransparency = 1
	local gapX, gapY = math.floor(size * 0.3), math.floor(size * 0.12)
	local labelW = math.floor(size * 0.8)
	grid.Size = UDim2.fromOffset(labelW + 7 * size + 6 * gapX, 3 * size + 2 * gapY)
	for row, numeral in { "III", "II", "I" } do
		local l = Instance.new("TextLabel")
		l.BackgroundTransparency = 1
		l.Position = UDim2.fromOffset(0, (row - 1) * (size + gapY))
		l.Size = UDim2.fromOffset(labelW - 4, size)
		l.Font = Enum.Font.GothamBold
		l.TextSize = math.max(9, math.floor(size * 0.4))
		l.TextColor3 = Color3.fromRGB(140, 150, 162)
		l.TextXAlignment = Enum.TextXAlignment.Right
		l.Text = numeral
		l.Parent = grid
	end
	local holders: { [number]: Frame } = {}
	for _, cell in styleOf(set).ladder(rank) :: { RankStyle.Cell } do
		local holder = Instance.new("Frame")
		holder.Name = "Rank" .. cell.rank
		holder.BackgroundTransparency = 1
		holder.AnchorPoint = Vector2.new(0.5, 0.5)
		holder.Position = UDim2.fromOffset(
			labelW + (cell.col - 1) * (size + gapX) + size / 2,
			(cell.row - 1) * (size + gapY) + size / 2
		)
		holder.Size = UDim2.fromOffset(size, size)
		holder.Parent = grid
		local e = RankEmblem.new(cell.rank, size, holder, { animated = false, set = set })
		e.frame.Position = UDim2.fromScale(0, 0)
		if cell.state == "locked" then
			RankEmblem.greyOut(e.frame)
		elseif cell.state == "current" then
			holder.ZIndex = 5
			local grow = Instance.new("UIScale")
			grow.Scale = 1.3
			grow.Parent = holder
			local ring = Instance.new("Frame")
			ring.BackgroundTransparency = 1
			ring.AnchorPoint = Vector2.new(0.5, 0.5)
			ring.Position = UDim2.fromScale(0.5, 0.5)
			ring.Size = UDim2.fromScale(1.15, 1.15)
			local rc = Instance.new("UICorner")
			rc.CornerRadius = UDim.new(0.5, 0)
			rc.Parent = ring
			local stroke = Instance.new("UIStroke")
			stroke.Color = RankEmblem.glow(rank, set)
			stroke.Thickness = 1.5
			stroke.Parent = ring
			ring.Parent = holder
		end
		holders[cell.rank] = holder
	end
	grid.Parent = parent
	return grid, holders
end

-- The ranks of everyone in a match by score id (server/Ffa: "p" .. UserId for players, anything else a bot), from
-- each player's RankedKills (vs bots) or RankedKillsPlayers (vs players) attribute (server/Progress), whichever ladder
-- the match is on (workspace RankedLadder; vs bots outside Ranked Play); bots show one only in Ranked Play
-- (Rules/Ranked.boardRanks)
function RankEmblem.boardRanks(ids: { string }): { [string]: number }
	local totals = {}
	for _, player in Players:GetPlayers() do
		local kills = player:GetAttribute(
			if Workspace:GetAttribute("RankedLadder") == "players" then "RankedKillsPlayers" else "RankedKills"
		)
		if typeof(kills) == "number" then
			totals["p" .. player.UserId] = kills
		end
	end
	return Ranked.boardRanks(ids, totals, Workspace:GetAttribute("FfaMode") == "ranked")
end

-- a tier's glow colour, for things drawn around an emblem (the ranked bar, the rank-up burst)
function RankEmblem.glow(rank: number, set: string?): Color3
	return rgb(styleOf(set).forRank(rank).glow)
end

-- a rank's colours for text and trim around it: its glow, highlight, rim, and its metal and (high tiers) film as
-- gradients for a title
function RankEmblem.palette(
	rank: number,
	set: string?
): {
	glow: Color3,
	light: Color3,
	rim: Color3,
	metal: ColorSequence,
	film: ColorSequence?,
}
	local s: RankStyle.Style = styleOf(set).forRank(rank)
	local keys = {}
	for _, stop in s.ramp do
		table.insert(keys, ColorSequenceKeypoint.new(stop.t, rgb(stop.c)))
	end
	return {
		glow = rgb(s.glow),
		light = rgb(s.light),
		rim = rgb(s.rim),
		metal = ColorSequence.new(keys),
		film = if #s.film > 0 then filmColors(s) else nil,
	}
end

return RankEmblem
