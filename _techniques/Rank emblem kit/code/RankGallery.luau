--!strict
-- The RANKS screen: every Ranked Play rank big enough to see. A playtest, looking at the PLAY tab's little grid: "IS
-- THEIR A WAY WE CAN MAKE IT SO PLAYERS CAN VIEW THEM IN THEIR OWN TAB WHEN CLICKING ON". It opens from the PLAY tab's
-- YOUR RANK card (client/LobbyPlay) and the top bar's rank card (client/RankCard), over the lobby menu.
-- On the right, all 21 ranks (Rules/RankStyle.ladder): a column per tier with its name in its metal, a row per
-- division (III on top), each emblem named under it; yours ringed, the ones ahead greyed out. Click one and the left
-- side shows it big and moving, with its name in its metal, whether you have it, and the ranked kills it takes. Your
-- bar runs along the bottom. Each tier's live ranked camo (Rules/Camos.RANKED) plays under its emblem as the reward.
-- CLOSE, Esc or a click outside shuts it.
-- Two sets: Ranked Play's (with its two ladders) and the zombies rank's undead ones (Rules/ZombieRank), switched
-- with the button at the top.
-- RankGallery.open(rank?, ladder?, set?) opens it (on your rank, or the one given); RankGallery.close().
local ContentProvider = game:GetService("ContentProvider")
local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")
local TweenService = game:GetService("TweenService")
local UserInputService = game:GetService("UserInputService")

local Rules = ReplicatedStorage:WaitForChild("Shared"):WaitForChild("Rules")
local Ranked = require(Rules:WaitForChild("Ranked"))
local RankStyle = require(Rules:WaitForChild("RankStyle"))
local HoloUi = require(script.Parent:WaitForChild("HoloUi"))
local ProgressClient = require(script.Parent:WaitForChild("ProgressClient"))
local RankEmblem = require(script.Parent:WaitForChild("RankEmblem"))
local WrapSkin = require(script.Parent:WaitForChild("WrapSkin"))
local Camos = require(Rules:WaitForChild("Camos"))
local Settings = require(Rules:WaitForChild("Settings"))
local ZombieRank = require(Rules:WaitForChild("ZombieRank"))
local ZombieRankStyle = require(Rules:WaitForChild("ZombieRankStyle"))

local RankGallery = {}

-- your settings (wraps per gun) and how to save them, from client/LobbyMenu, so an earned tier camo can go on your
-- guns from here: EQUIP ON ALL GUNS (or REMOVE FROM ALL GUNS once it's on every one), or PICK A GUN, which opens
-- Camos. A playtest: "make it so cam can be equiped to all guns or allow picking from this screen".
local bound: { data: Settings.Data, changed: () -> (), openCamos: (string) -> () }? = nil
function RankGallery.bind(data: Settings.Data, changed: () -> (), openCamos: (string) -> ())
	bound = { data = data, changed = changed, openCamos = openCamos }
end

local CELL, GAP_X, GAP_Y, NAME_H = 64, 30, 10, 16
local GRID_W = 7 * CELL + 6 * GAP_X
local W, H = 1120, 600

local gui: ScreenGui? = nil
-- A playtest: "WHEN CLIKING ON THE RANKS THEIR ANIMATED CAMO FLASHES THEN IT LOOKS NORMAL", then "IT STILL FLASHES":
-- each camo frame is its own texture, and showing one not yet loaded is a black square. So the swatch is a flipbook:
-- every frame its own ImageLabel stacked in it, only the current one visible (switching visibility never blanks),
-- the camo's thumbnail showing until every frame has loaded. Opening the screen starts all the ranked camos loading.
local escape: RBXScriptConnection? = nil

local function totalKills(ladder: string): number
	return Ranked.total(ProgressClient.get(), ladder)
end

local function tween(o: Instance, time: number, goal: { [string]: any }, style: Enum.EasingStyle?)
	TweenService:Create(o, TweenInfo.new(time, style or Enum.EasingStyle.Quart), goal):Play()
end

function RankGallery.close()
	if escape then
		escape:Disconnect()
		escape = nil
	end
	if gui then
		gui:Destroy()
		gui = nil
	end
end

function RankGallery.open(show: number?, ladderPick: string?, setPick: string?)
	local ladder = if ladderPick == "players" then "players" else "bots"
	local set = if setPick == "zombies" then "zombies" else nil
	local zombies = set == "zombies"
	-- the set's ranks and look, and what it counts
	local R: any = RankEmblem.rules(set)
	local Look: any = if zombies then ZombieRankStyle else RankStyle
	local camoList = if zombies then Camos.ZOMBIE_RANKED else Camos.RANKED
	local unit = if zombies then "POINTS" else "KILLS"
	local function reachOf(rank: number): number
		return if zombies then ZombieRank.pointsToReach(rank) else Ranked.killsToReach(rank)
	end
	RankGallery.close()
	local total = if zombies then ZombieRank.total(ProgressClient.get()) else totalKills(ladder)
	local p = R.progress(total)
	local mine = p.rank

	local screen = Instance.new("ScreenGui")
	screen.Name = "EMXRankGallery"
	screen.ResetOnSpawn = false
	screen.IgnoreGuiInset = true
	screen.DisplayOrder = 12
	screen.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
	gui = screen

	-- a click outside the panel closes it
	local shade = Instance.new("TextButton")
	shade.AutoButtonColor = false
	shade.Text = ""
	shade.BorderSizePixel = 0
	shade.BackgroundColor3 = Color3.fromHex("020612")
	shade.BackgroundTransparency = 1
	shade.Size = UDim2.fromScale(1, 1)
	shade.Parent = screen
	shade.Activated:Connect(RankGallery.close)
	tween(shade, 0.25, { BackgroundTransparency = 0.35 })

	local panel = HoloUi.panel(UDim2.fromOffset(W, H), screen)
	panel.AnchorPoint = Vector2.new(0.5, 0.5)
	panel.Position = UDim2.fromScale(0.5, 0.52)
	panel.Active = true
	panel.BackgroundTransparency = 0.04
	local fit = Instance.new("UIScale")
	fit.Parent = panel
	-- shrink to fit small screens, and pop in
	local function fitScale(): number
		local view = (workspace.CurrentCamera :: Camera).ViewportSize
		return math.min(1, (view.X - 40) / W, (view.Y - 40) / H)
	end
	fit.Scale = fitScale() * 0.94
	tween(fit, 0.3, { Scale = fitScale() }, Enum.EasingStyle.Back)

	local head = HoloUi.title(if zombies then "Zombies ranks" else "Ranks", 16, panel)
	head.Position = UDim2.fromOffset(28, 22)
	head.Size = UDim2.fromOffset(300, 24)
	local sub = HoloUi.text(
		if zombies
			then "21 undead ranks, climbed on rank points: kills, rounds, revives, the power and upgrades."
			else "21 ranks on two ladders: vs bots, and vs players (where only kills on players count).",
		13,
		HoloUi.BODY,
		HoloUi.MUTED,
		panel
	)
	sub.Position = UDim2.fromOffset(28, 48)
	sub.Size = UDim2.fromOffset(640, 18)
	local close = HoloUi.button("Close", RankGallery.close, panel)
	close.AnchorPoint = Vector2.new(1, 0)
	close.Position = UDim2.new(1, -24, 0, 20)
	close.Size = UDim2.fromOffset(110, 32)
	-- the other set: zombies' ranks or Ranked Play's
	local other = HoloUi.button(if zombies then "Multiplayer" else "Zombies", function()
		RankGallery.open(nil, nil, if zombies then nil else "zombies")
	end, panel)
	other.AnchorPoint = Vector2.new(1, 0)
	other.Position = UDim2.new(1, -24 - 110 - 12 - (if zombies then 0 else 2 * 142), 0, 20)
	other.Size = UDim2.fromOffset(130, 32)
	-- your two ladders (Rules/Ranked.LADDERS): vs bots and vs players, each its own rank
	for i, l in if zombies then {} else { "players", "bots" } do
		local b = HoloUi.button(Ranked.LADDER_LABELS[l], function()
			if l ~= ladder then
				RankGallery.open(nil, l)
			end
		end, panel, l == ladder)
		b.AnchorPoint = Vector2.new(1, 0)
		b.Position = UDim2.new(1, -24 - 110 - 12 - (i - 1) * 142, 0, 20)
		b.Size = UDim2.fromOffset(130, 32)
	end

	-- the left: the picked rank, big
	local stage = Instance.new("Frame")
	stage.BackgroundTransparency = 1
	stage.Position = UDim2.fromOffset(24, 86)
	stage.Size = UDim2.fromOffset(360, 420)
	stage.Parent = panel

	-- the right: the grid
	local gridBox = Instance.new("Frame")
	gridBox.BackgroundTransparency = 1
	gridBox.Position = UDim2.new(1, -(GRID_W + 64), 0, 92)
	gridBox.Size = UDim2.fromOffset(GRID_W + 40, 24 + 3 * (CELL + NAME_H + GAP_Y))
	gridBox.Parent = panel

	local picked = 0
	local cells: { [number]: Frame } = {}
	local pick: (number) -> ()

	for i, tier in Look.TIERS do
		local first = Look.firstRank(tier)
		local pal = RankEmblem.palette(first, set)
		local name = HoloUi.text(string.upper(tier), 11, HoloUi.HEAD, Color3.new(1, 1, 1), gridBox)
		name.TextXAlignment = Enum.TextXAlignment.Center
		name.AnchorPoint = Vector2.new(0.5, 0)
		name.Position = UDim2.fromOffset(40 + (i - 1) * (CELL + GAP_X) + CELL / 2, 0)
		name.Size = UDim2.fromOffset(CELL + GAP_X, 16)
		local g = Instance.new("UIGradient")
		g.Color = pal.film or pal.metal
		g.Rotation = if pal.film then 0 else 90
		g.Parent = name
		if i > Look.forRank(mine).level then
			name.TextTransparency = 0.45
		end
	end
	for row, numeral in { "III", "II", "I" } do
		local l = HoloUi.text(numeral, 12, HoloUi.HEAD, HoloUi.MUTED, gridBox)
		l.Position = UDim2.fromOffset(0, 24 + (row - 1) * (CELL + NAME_H + GAP_Y))
		l.Size = UDim2.fromOffset(30, CELL)
		l.TextXAlignment = Enum.TextXAlignment.Right
	end
	for _, cell in Look.ladder(mine) :: { RankStyle.Cell } do
		local x = 40 + (cell.col - 1) * (CELL + GAP_X)
		local y = 24 + (cell.row - 1) * (CELL + NAME_H + GAP_Y)
		local box = Instance.new("TextButton")
		box.Name = "Rank" .. cell.rank
		box.AutoButtonColor = false
		box.Text = ""
		box.BackgroundColor3 = Color3.new(1, 1, 1)
		box.BackgroundTransparency = 1
		box.Position = UDim2.fromOffset(x - GAP_X / 2 + 2, y - 4)
		box.Size = UDim2.fromOffset(CELL + GAP_X - 4, CELL + NAME_H + 6)
		local bc = Instance.new("UICorner")
		bc.CornerRadius = UDim.new(0, 8)
		bc.Parent = box
		box.Parent = gridBox
		local e = RankEmblem.new(cell.rank, CELL, box, { animated = false, set = set })
		e.frame.AnchorPoint = Vector2.new(0.5, 0)
		e.frame.Position = UDim2.new(0.5, 0, 0, 4)
		local hover = Instance.new("UIScale")
		hover.Parent = e.frame
		local label = HoloUi.text(
			string.upper(R.RANKS[cell.rank].name),
			10,
			HoloUi.BODY_BOLD,
			if cell.state == "locked" then HoloUi.MUTED else HoloUi.TEXT,
			box
		)
		label.TextXAlignment = Enum.TextXAlignment.Center
		label.Position = UDim2.fromOffset(0, CELL + 4)
		label.Size = UDim2.new(1, 0, 0, NAME_H)
		if cell.state == "locked" then
			RankEmblem.greyOut(e.frame)
			label.TextTransparency = 0.3
		elseif cell.state == "current" then
			local ring = Instance.new("UIStroke")
			ring.Color = RankEmblem.glow(cell.rank, set)
			ring.Thickness = 2
			ring.Parent = box
			label.TextColor3 = RankEmblem.glow(cell.rank, set):Lerp(Color3.new(1, 1, 1), 0.4)
		end
		box.MouseEnter:Connect(function()
			tween(hover, 0.12, { Scale = 1.1 })
		end)
		box.MouseLeave:Connect(function()
			tween(hover, 0.12, { Scale = 1 })
		end)
		box.Activated:Connect(function()
			pick(cell.rank)
		end)
		cells[cell.rank] = box
	end

	pick = function(rank: number)
		rank = math.clamp(math.floor(rank), 1, R.TOP)
		if rank == picked then
			return
		end
		if cells[picked] then
			cells[picked].BackgroundTransparency = 1
		end
		picked = rank
		cells[rank].BackgroundTransparency = 0.9
		for _, c in stage:GetChildren() do
			c:Destroy()
		end
		local e = RankEmblem.new(rank, 220, stage, { set = set })
		e.frame.AnchorPoint = Vector2.new(0.5, 0)
		e.frame.Position = UDim2.fromScale(0.5, 0)
		local pop = Instance.new("UIScale")
		pop.Scale = 0.7
		pop.Parent = e.frame
		tween(pop, 0.35, { Scale = 1 }, Enum.EasingStyle.Back)
		task.delay(0.15, RankEmblem.flare, e)

		local pal = RankEmblem.palette(rank, set)
		local name =
			HoloUi.text(RankStyle.spaced(string.upper(R.RANKS[rank].name)), 26, HoloUi.HEAD, Color3.new(1, 1, 1), stage)
		name.TextXAlignment = Enum.TextXAlignment.Center
		name.Position = UDim2.fromOffset(0, 236)
		name.Size = UDim2.new(1, 0, 0, 34)
		local g = Instance.new("UIGradient")
		g.Color = pal.film or pal.metal
		g.Rotation = if pal.film then 0 else 90
		g.Parent = name
		local stroke = Instance.new("UIStroke")
		stroke.Color = pal.rim:Lerp(Color3.new(0, 0, 0), 0.5)
		stroke.Thickness = 1.5
		stroke.Parent = name

		local reach = reachOf(rank)
		local status, color
		if rank == mine then
			status, color = "YOUR RANK", RankEmblem.glow(rank, set)
		elseif rank < mine then
			status, color = "EARNED", HoloUi.TEXT
		else
			status, color = string.format("LOCKED  ·  %d MORE %s", reach - total, unit), HoloUi.MUTED
		end
		local line = HoloUi.text(status, 13, HoloUi.HEAD, color, stage)
		line.TextXAlignment = Enum.TextXAlignment.Center
		line.Position = UDim2.fromOffset(0, 276)
		line.Size = UDim2.new(1, 0, 0, 20)
		local s: RankStyle.Style = Look.forRank(rank)
		local extras = {}
		if R.RANKS[rank].division == 3 then
			table.insert(extras, "laurel wreath")
		end
		if s.sheen == "iridescent" then
			table.insert(extras, "iridescent")
		elseif s.sheen == "gloss" then
			table.insert(extras, "gloss")
		end
		if s.sparkles > 0 then
			table.insert(extras, "sparkles")
		end
		if rank == R.TOP then
			table.insert(extras, "the top")
		end
		local info = HoloUi.text(
			string.format("Reached at %d %s", reach, if zombies then "rank points" else "ranked kills")
				.. (if #extras > 0 then "  ·  " .. table.concat(extras, ", ") else ""),
			13,
			HoloUi.BODY,
			HoloUi.MUTED,
			stage
		)
		info.TextXAlignment = Enum.TextXAlignment.Center
		info.Position = UDim2.fromOffset(0, 300)
		info.Size = UDim2.new(1, 0, 0, 20)

		-- the tier's reward: its live camo, playing
		local tier = R.RANKS[rank].tier
		for _, r in camoList do
			local w = if r.tier == tier then WrapSkin.find("camo-" .. r.camo) else nil
			if w then
				local swatch = Instance.new("ImageLabel")
				swatch.BackgroundTransparency = 1
				swatch.BorderSizePixel = 0
				swatch.ScaleType = Enum.ScaleType.Crop
				swatch.Image = w.thumb
				swatch.ClipsDescendants = true
				swatch.AnchorPoint = Vector2.new(0.5, 0)
				swatch.Position = UDim2.new(0.5, -90, 0, 332)
				swatch.Size = UDim2.fromOffset(64, 64)
				local sc = Instance.new("UICorner")
				sc.CornerRadius = UDim.new(0, 8)
				sc.Parent = swatch
				HoloUi.stroke(swatch, RankEmblem.glow(rank, set), 0.2, 1.5)
				swatch.Parent = stage
				local snap = ProgressClient.get()
				local earned = snap ~= nil and (snap :: any).camos[r.camo] == true
				local reward = HoloUi.text(string.upper(w.name) .. " CAMO", 13, HoloUi.HEAD, Color3.new(1, 1, 1), stage)
				reward.Position = UDim2.new(0.5, -48, 0, 340)
				reward.Size = UDim2.fromOffset(220, 20)
				local why = HoloUi.text(
					if earned then "Earned: on every gun" else (Camos.goalText(r.camo) or ""),
					12,
					HoloUi.BODY,
					HoloUi.MUTED,
					stage
				)
				why.Position = UDim2.new(0.5, -48, 0, 362)
				why.Size = UDim2.fromOffset(220, 18)
				if earned and bound then
					local b = bound
					-- the guns it can go on
					local guns = {}
					for _, weapon in Settings.WEAPON_ORDER do
						if ProgressClient.canEquip(weapon, w) then
							table.insert(guns, weapon)
						end
					end
					local function onAll(): boolean
						for _, weapon in guns do
							if b.data.wraps[weapon] ~= w.id then
								return false
							end
						end
						return #guns > 0
					end
					local all: TextButton
					all = HoloUi.button(if onAll() then "Remove from all guns" else "Equip on all guns", function()
						local remove = onAll()
						for _, weapon in guns do
							if remove then
								if b.data.wraps[weapon] == w.id then
									b.data.wraps[weapon] = nil
								end
							else
								b.data.wraps[weapon] = w.id
							end
						end
						b.changed()
						all.Text = if remove then "EQUIP ON ALL GUNS" else "REMOVE FROM ALL GUNS"
					end, stage, true)
					all.Position = UDim2.new(0.5, -170, 0, 404)
					all.Size = UDim2.fromOffset(196, 30)
					all.TextSize = 10
					local one = HoloUi.button("Pick a gun", function()
						RankGallery.close()
						b.openCamos(w.id)
					end, stage)
					one.Position = UDim2.new(0.5, 34, 0, 404)
					one.Size = UDim2.fromOffset(136, 30)
					one.TextSize = 10
				end
				-- the flipbook: a hidden label per frame, stepped by visibility once all have loaded
				local pages: { ImageLabel } = {}
				for _, frameId in w.frames do
					local page = Instance.new("ImageLabel")
					page.BackgroundTransparency = 1
					page.ScaleType = Enum.ScaleType.Crop
					page.Image = frameId
					page.Size = UDim2.fromScale(1, 1)
					-- drawn (almost invisibly) so it loads, then hidden once it's in
					page.ImageTransparency = 0.995
					local pc = Instance.new("UICorner")
					pc.CornerRadius = UDim.new(0, 8)
					pc.Parent = page
					page.Parent = swatch
					table.insert(pages, page)
				end
				task.spawn(function()
					local waited = 0
					while swatch.Parent and waited < 8 do
						local all = true
						for _, page in pages do
							all = all and page.IsLoaded
						end
						if all then
							break
						end
						waited += task.wait(0.1)
					end
					for _, page in pages do
						page.Visible = false
						page.ImageTransparency = 0
					end
					local i = 0
					while swatch.Parent do
						if i > 0 then
							pages[i].Visible = false
						end
						i = i % #pages + 1
						pages[i].Visible = true
						task.wait(1 / math.max(1, w.fps))
					end
				end)
			end
		end
	end

	-- your bar along the bottom
	local barHead = HoloUi.text(
		string.format(
			"%s  ·  %s  ·  %d %s",
			if zombies then "ZOMBIES" else Ranked.LADDER_LABELS[ladder],
			string.upper(R.RANKS[mine].name),
			total,
			if zombies then "RANK POINTS" else "RANKED KILLS"
		),
		12,
		HoloUi.HEAD,
		HoloUi.TEXT,
		panel
	)
	barHead.Position = UDim2.new(0, 28, 1, -76)
	barHead.Size = UDim2.new(1, -56, 0, 18)
	local track = Instance.new("Frame")
	track.BorderSizePixel = 0
	track.BackgroundColor3 = Color3.fromHex("05080B")
	track.Position = UDim2.new(0, 28, 1, -52)
	track.Size = UDim2.new(1, -56, 0, 10)
	local tc = Instance.new("UICorner")
	tc.CornerRadius = UDim.new(1, 0)
	tc.Parent = track
	track.Parent = panel
	local fill = Instance.new("Frame")
	fill.BorderSizePixel = 0
	fill.BackgroundColor3 = RankEmblem.glow(mine, set)
	fill.Size = UDim2.fromScale(0, 1)
	local fc = Instance.new("UICorner")
	fc.CornerRadius = UDim.new(1, 0)
	fc.Parent = fill
	fill.Parent = track
	tween(fill, 0.8, { Size = UDim2.fromScale(math.clamp(p.fraction, 0, 1), 1) })
	local note = HoloUi.text(
		if mine >= R.TOP
			then "TOP RANK"
			else string.format("%d / %d %s TO %s", p.into, p.need, unit, string.upper(R.RANKS[mine + 1].name)),
		11,
		HoloUi.BODY_BOLD,
		HoloUi.MUTED,
		panel
	)
	note.TextXAlignment = Enum.TextXAlignment.Right
	note.Position = UDim2.new(0, 28, 1, -76)
	note.Size = UDim2.new(1, -56, 0, 18)

	-- start every ranked camo loading now, so a swatch is ready by the time its rank is clicked
	task.spawn(function()
		local ids = {}
		for _, r in camoList do
			local w = WrapSkin.find("camo-" .. r.camo)
			if w then
				for _, frameId in w.frames do
					table.insert(ids, frameId)
				end
			end
		end
		pcall(function()
			ContentProvider:PreloadAsync(ids)
		end)
	end)
	pick(show or mine)
	escape = UserInputService.InputBegan:Connect(function(input: InputObject)
		if input.KeyCode == Enum.KeyCode.Escape then
			RankGallery.close()
		end
	end)
	screen.Parent = (Players.LocalPlayer :: Player):WaitForChild("PlayerGui")
	-- leaving the lobby closes it
	local player = Players.LocalPlayer :: Player
	local left: RBXScriptConnection
	left = player:GetAttributeChangedSignal("InLobby"):Connect(function()
		if player:GetAttribute("InLobby") ~= true then
			left:Disconnect()
			if gui == screen then
				RankGallery.close()
			end
		end
	end)
	screen.Destroying:Connect(function()
		left:Disconnect()
	end)
end

return RankGallery
