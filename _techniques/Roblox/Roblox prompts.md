---
type: research
created: 2026-10-28
summary: Ready prompts for Roblox work (VFX, maps, animation, MCP setup, vault building), adapted for EMX from ones shared in the millionaires club Discord.
tags: [roblox, prompts]
---

# Roblox prompts

Adapted by Claude for EMX from prompts members shared in the millionaires club Discord's master-prompt's and vaults channels (Oct 2026), which they posted for everyone to use. Credits next to each. Paste one into Claude, then add the specific thing you want ("…for the Crossfire knife slash").

> [!rule] Low-usage rules (add to any prompt)
> Inspect first, then fix, test and report. Don't rescan files that didn't change, don't re-explain the plan, batch related changes and test them together, fix root causes instead of workarounds, keep reports short, and only stop to ask about missing dependencies, real creative choices or destructive steps.
> (From several of TDOD's and D4SEVEN's prompts.)

## VFX: one effect, done properly

*Based on TDOD's "Roblox VFX one-shot".*

Make a high-end Roblox effect for [ability / hit / transformation / aura / environment]. It must not look like default Roblox particles: powerful, smooth, clean, modern, game-ready and optimized. Pick the right mix of ParticleEmitters, Beams, Trails, Attachments, MeshParts, TweenService, Lighting and ColorCorrection, camera shake, decals and textures, and sound. Build it in stages: **anticipation → build-up → impact → follow-through → fade**. Give each stage its own timing, and test it in Play, not only in Edit.

## VFX: fix a whole game's effects

*Based on D4SEVEN's "Personal VFX prompt" (workflow: Inspect → Fix → Integrate → Test → Improve → Report).*

Audit our VFX first: which scripts, assets and plugins exist, and what already works (reuse it). Then fix the biggest problems in this order: generic or primitive geometry, weak silhouettes, flat layering, inconsistent art direction, bad particle behaviour, bad timing, weak impact feedback, broken imports, competing animation systems, objects never cleaned up. Pipeline for each effect: reference → visual spec → original textures and meshes → check the assets → assemble in Roblox → animate → test in gameplay → refine → optimize. Use only our own or licensed assets. Report as **Fixed / Improved / Tested / Found / Next**.

## Map building

*Based on TDOD's "Good map building".*

Build [map] like a real game space, not an AI blockout. Workflow: study the reference → blockout → playtest → build → detail → optimize → test again. First work out scale, layout, landmarks, elevation, routes, combat spaces, traversal and sightlines. No box buildings, empty areas, useless rooms, repeated hallways, fake doors or props pretending to be detail: every area needs a purpose. Make it dense, memorable, believable and fun to explore, with alternate routes, rooftops, stairs, alleys, vertical paths, hidden spots and landmarks; real entrances, windows and back routes; lived-in wear and signs without clutter. Test collision, scale, lighting, NPC navigation, movement, performance, clipping, floating props and broken routes in play.

## Animation polish

*Based on TDOD's "Animation + low usage".*

Bring our animations up to a polished standard. Fix in this order: foot sliding, stiff movement, snapping, bad transitions, broken IK, hand and weapon placement, jump and land, turning and stopping, melee that looks wrong, weak hit reactions, clipping. Judge them in real gameplay, not only in the animation editor.

## Connect Claude to tools (MCP)

*Based on TDOD's "MCP setup".*

Help me connect Claude to [Studio / Blender / tool] one step at a time with exact commands. First detect the OS, the client, the tool and its paths. Give access only to the workspace and the tools needed, never passwords, browser data or personal folders. Install → configure → restart → verify → small reversible test (list files, read one, open the tool, one undoable action). If it fails, check config, paths, dependencies, permissions, logs and ports instead of reinstalling. Back up first, use git, ask before anything destructive. Finish with: connected, tested, tools available, limits.

## Grow this vault

*Based on cutestcutie's "How to make your own goated vault".*

Expand our Roblox knowledge in `_techniques/Roblox`: atomic notes (one topic each) with 8–15 links to related notes and frontmatter (`aliases`, `tags`, `type: concept | api | framework | code-pattern | architecture`, `last_updated`, `status`). Topic folders: engine and data model, networking and security, UI, frameworks and toolchain (Rojo, Wally, Selene, StyLua), game systems, performance, monetization. Sources: Roblox's official docs first, then the LihFolk library, then what our own projects learned ([[_techniques/Roblox/Our Roblox lessons|Our Roblox lessons]]). Showcase channels and the Roblox Studio Community Discord are good for references. Mark anything unconfirmed.

## Related

- Roblox hub
- Roblox Discord - millionaires club (where these came from)
