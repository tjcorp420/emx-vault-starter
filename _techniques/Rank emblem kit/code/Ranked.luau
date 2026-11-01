--!strict
-- Ranked Play on the multiplayer side (no Roblox dependencies, tested with Lune): 21 ranks, seven tiers (Bronze,
-- Silver, Gold, Platinum, Diamond, Obsidian, Apex) of three divisions, I to III. The user asked for 21 ranks
-- (27 Oct); Apex, the old single top rank, became a tier of its own and Apex III is the top. You climb by kills in
-- ranked matches (and a good finish adds more), and never drop (unless you RESET RANK in the lobby): each rank takes a
-- few more kills than the last. The bots get tougher as you climb. Your total ranked kills are saved in your profile
-- (Rules/Profile); everything else follows from them.
local Ranked = {}

export type Rank = { name: string, tier: string, division: number, kills: number }
export type Progress = { rank: number, into: number, need: number, fraction: number }

Ranked.TIERS = { "Bronze", "Silver", "Gold", "Platinum", "Diamond", "Obsidian", "Apex" }
local NUMERALS = { "I", "II", "III" }
-- the first rank's kills, and how many more the last before Apex takes
local FIRST, SPREAD = 10, 35

Ranked.RANKS = {} :: { Rank }
do
	local count = #Ranked.TIERS * 3
	for t, tier in Ranked.TIERS do
		for d = 1, 3 do
			local i = (t - 1) * 3 + d
			table.insert(Ranked.RANKS, {
				name = tier .. " " .. NUMERALS[d],
				tier = tier,
				division = d,
				-- the top: nothing more to earn
				kills = if i == count then 0 else FIRST + math.floor((i - 1) * SPREAD / (count - 2)),
			})
		end
	end
end

-- The top rank (Apex III)
Ranked.TOP = #Ranked.RANKS

-- Where a total of ranked kills puts you: your rank, the kills into it, the kills it takes, and how full the bar is
function Ranked.progress(total: number): Progress
	local rank, left = 1, math.max(0, math.floor(total))
	while rank < #Ranked.RANKS and left >= Ranked.RANKS[rank].kills do
		left -= Ranked.RANKS[rank].kills
		rank += 1
	end
	local need = Ranked.RANKS[rank].kills
	return { rank = rank, into = left, need = need, fraction = if need > 0 then left / need else 1 }
end

-- The total ranked kills that reach a rank (Bronze I 0, Bronze II 10, ...): the RANKS screen's "reached at"
function Ranked.killsToReach(rank: number): number
	local total = 0
	for i = 1, math.clamp(math.floor(rank), 1, #Ranked.RANKS) - 1 do
		total += Ranked.RANKS[i].kills
	end
	return total
end

-- The new rank if going from one total to the other made one, else nil
function Ranked.rankedUp(before: number, after: number): number?
	local a, b = Ranked.progress(before).rank, Ranked.progress(after).rank
	return if b > a then b else nil
end

-- Two ladders. The user (27 Oct): bot kills count toward rank, "BUT WHEN PLAYING REAL PLAYERS RANKS RESET FOR
-- THAT", then (relayed by the coordinator chat): keep separate rank tracking for real-player matches and bot matches.
-- So every profile has a rank vs bots (profile.ranked) and a rank vs players (profile.rankedPlayers), which starts
-- fresh at Bronze I. A ranked match with one real player is a bots match; with two or more it's a players match, and
-- there only kills on real players climb (bots can't be farmed for it). Placement bonuses go to the match's ladder.
Ranked.LADDERS = { "bots", "players" }
Ranked.LADDER_LABELS = { bots = "VS BOTS", players = "VS PLAYERS" } :: { [string]: string }

function Ranked.ladderFor(humans: number): string
	return if humans >= 2 then "players" else "bots"
end

-- whether a kill climbs this ladder
function Ranked.counts(ladder: string, victimIsBot: boolean): boolean
	return ladder ~= "players" or not victimIsBot
end

-- a profile's (or snapshot's) record on a ladder, and its total kills there
function Ranked.recordKey(ladder: string): string
	return if ladder == "players" then "rankedPlayers" else "ranked"
end

function Ranked.total(profile: any, ladder: string): number
	local r = profile and profile[Ranked.recordKey(ladder)]
	return if typeof(r) == "table" and typeof(r.kills) == "number" then r.kills else 0
end

-- Ranked seasons, for a full reset of both ladders some day: bump SEASON and every saved rank from an earlier season
-- starts over at Bronze I the next time it loads (Ranked.carry). Season 1 is now.
Ranked.SEASON = 1

export type Record = { kills: number, season: number }

-- A fresh start, the lobby's RESET RANK (server/Progress): the ranked record a new profile has, back to Bronze I
function Ranked.reset(): Record
	return { kills = 0, season = Ranked.SEASON }
end

-- A saved ranked record carried into this season: kept if it's from this season, else a fresh start. Saves from
-- before seasons existed are season 1's.
function Ranked.carry(kills: number, season: number?): Record
	if (season or 1) ~= Ranked.SEASON then
		return Ranked.reset()
	end
	return { kills = math.max(0, math.floor(kills)), season = Ranked.SEASON }
end

-- Extra kills for where you finished a ranked match
function Ranked.placementBonus(place: number): number
	if place == 1 then
		return 10
	elseif place <= 3 then
		return 5
	end
	return 0
end

-- The rank shown for a bot: in Ranked Play the bots match the best rank in the match (server/Ffa), so they show it
function Ranked.botRank(playerRanks: { number }): number
	local best = 1
	for _, r in playerRanks do
		best = math.max(best, math.clamp(math.floor(r), 1, #Ranked.RANKS))
	end
	return best
end

-- The ranks to show on the scoreboard and podium: ids is everyone in the match, totals the players' ranked kills by
-- id (anyone not in it is a bot). Players always show their rank; bots only in Ranked Play, where they match the best
-- player (Ranked.botRank), and show none otherwise.
function Ranked.boardRanks(ids: { string }, totals: { [string]: number }, ranked: boolean): { [string]: number }
	local out, players = {}, {}
	for _, id in ids do
		local total = totals[id]
		if total then
			out[id] = Ranked.progress(total).rank
			table.insert(players, out[id])
		end
	end
	if ranked then
		local bot = Ranked.botRank(players)
		for _, id in ids do
			if not out[id] then
				out[id] = bot
			end
		end
	end
	return out
end

-- How good the bots are at your rank: easy in Bronze, normal through Gold, hard from Platinum up
function Ranked.botSkill(rank: number): string
	if rank <= 3 then
		return "easy"
	elseif rank <= 9 then
		return "normal"
	end
	return "hard"
end

return Ranked
