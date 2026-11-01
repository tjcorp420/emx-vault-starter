---
type: research
created: 2026-10-28
summary: Every Roblox tool, Studio plugin, Claude skill and MCP we use or have checked, with prices and links.
tags: [roblox, tools]
---

# Roblox tools and plugins

Collected by Claude, Oct 2026. Prices and links as shared in the millionaires club Discord (D4SEVEN's tool list) and checked where noted.

## What our projects use

| Tool | What for | Status |
|---|---|---|
| Rokit | Pins the tools per project | In use (Freebuild RBX, Crossfire RBX) |
| Rojo | Files ↔ Studio sync and place builds | In use |
| Lune | Runs our Luau rule tests outside Studio | In use |
| StyLua, Selene | Formatting and linting | In use |
| Roblox Studio MCP | Claude drives Studio: run Luau, playtest, search assets, screenshots | In use |
| luau-lsp (JohnnyMorganz) | Type checking and autocomplete for Luau in editors | Not set up yet |
| Wally | Luau package manager | Not needed yet |

## Studio plugins for VFX and animation

| Plugin | Price | Where |
|---|---|---|
| VFX Forge | from $16.67 | zilibobi.itch.io/vfx-forge |
| Sine VFX | about $5 | Roblox Creator Store (linked from its DevForum post) |
| Arc | free | Roblox Creator Store |
| Eclipse Animator | $19.99 | Roblox Creator Store |

Buy plugins from their own pages; don't install `.rbxm`/`.rbxmx` "setup" files people post (they can carry scripts).

## Claude skills installed (global)

- **roblox-brain** plugin (tip sharing off) and **roblox-dev-skill** (MSayib, MIT): current Luau and engine facts.
- **LihFolk plugin** (`lihfolk@lihfolk` 2.5.0, installed 2026-10-30 from `its install folder`): the knowledge router, newer roblox-secure-remotes, -datastore-safety, -monetization-compliance, -performance-audit, -debugging, -ui-builder, -asset-import, -system-builder, -anti-exploit-review, plus blender-modeling, trend-game, sfx, vfx, worldbuilding, tutorial, UI kit, Figma to Roblox, systems library, quality score and council; commands `/lihfolk:assets`, `/lihfolk:new-system`, `/lihfolk:audit`, `/lihfolk:council`; a code checker on every Luau file Claude writes (read-only, no network; `LIHFOLK_HOOK=off` turns it off). The V1 skills it replaced and the V1 library went to the Recycle Bin on 2026-10-30 (V2 has everything we used from them). See LihFolk V2 - what we use.
- Ours for the vault: vault-task-brief, vault-feedback-capture, vault-reference-notes, vault-maintenance.
- Obsidian's (kepano): obsidian-markdown, obsidian-bases, json-canvas, obsidian-cli.

Checked but not installed: AshExplained/roblox-skills (34 skills, overlaps the above), claude-video (watch videos; worth adding when we study clips).

## Making assets

Blender, Python (numpy, pillow), ffmpeg, Node. Sounds: ElevenLabs sound effects (paid plan for commercial use) prepped with `tools/sounds/prep_ai_sounds.py`. Free UI sound packs: itch.io tag `ui-sounds` (check each licence). CC0 textures, HDRIs and models: the LihFolk library's lists and Poly Haven / Kenney (all CC0).

## Related

Roblox hub · [[_techniques/Roblox/Roblox prompts|Roblox prompts]] · [[_techniques/Roblox/Our Roblox lessons|Our Roblox lessons]]
