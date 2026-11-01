# Rank emblem kit (code-drawn metal emblems)

Saved on 2026-10-28 from EMX Crossfire RBX. You said: "SAVE THESSE ONES FOR A DIFFERENT GAME BC I LIKE THE STYLE". This kit is the multiplayer rank emblems as they looked before your painted multiplayer sheet replaced them.

![[Rank emblems preview.png]]

*(The preview is a rough offline render: flat colours, and the twinkles show as squares. In Roblox they have metal gradients, an iridescent film, glints and twinkling stars.)*

## What it is

- **21 ranks:** seven tiers (Bronze, Silver, Gold, Platinum, Diamond, Obsidian, Apex), each with I to III.
- **Grows grander up the tiers:** Bronze is a plain shield. Gold adds wings and a gloss. Diamond turns into a gem with an iridescent film. Apex is a crowned, winged star in an orbit ring.
- **Divisions:** every division III wears a laurel, Gold and up twinkle, and Apex's divisions are its crown jewels.
- **No art files:** everything is drawn from Frames, so no uploads are needed.
- **Rank-up cinematic:** the old emblem shatters, the new one spins in like a coin, sparks and rays fly, the title lands, and the ladder lights up.

## Files (in `code/`)

| File | What it does |
|---|---|
| `Ranked.luau` | The ranks and kill thresholds (pure rules) |
| `RankStyle.luau` | Each tier's look as data: layers of simple shapes, metals, shimmer timings, the cinematic's beats, the shape kit (`RankStyle.shapes`) |
| `ZombieRankStyle.luau` | A second set built from the same kit (undead tiers): an example of a reskin |
| `RankEmblem.luau` | Draws an emblem in Roblox GUI (`RankEmblem.new(rank, size, parent, { set })`) |
| `RankedReveal.luau` | The rank-up cinematic and the end-of-match progress reveal |
| `RankGallery.luau` | The full RANKS screen |
| `rankstyle.spec.luau` | Lune tests (bounds, readability at 40 px, escalation) |

## Reusing it

Copy the files into the new game's `Rules/` and client folders, and fix the `require` paths. To restyle, keep the shape kit and write new style data and layouts, the way `ZombieRankStyle` does. The live copies stay in the EMX Crossfire RBX repo; these are a snapshot.
