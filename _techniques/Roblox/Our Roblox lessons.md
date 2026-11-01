---
type: research
created: 2026-10-28
summary: Things we learned the hard way building EMX Crossfire RBX and EMX Freebuild RBX, from their Workshop session logs.
tags: [roblox, lessons]
---

# Our Roblox lessons

Pulled by Claude from the session logs of EMX Crossfire RBX and EMX Freebuild RBX (Workshop `log.md`, Oct 2026). Each line is something that cost time once. Newest projects add to the bottom.

## Toolchain (Rojo, tests, builds)

- Our stack: Rokit pins Rojo, Lune, StyLua and Selene per project; rules live in `src/shared/Rules` with no Roblox APIs so `lune run tests/run` can test them; `rojo build` makes the place file, `rojo serve` + the Rojo plugin live-syncs into Studio.
- **`rojo build` over the real place file wipes Studio-only work** (models you made in Studio, WeaponLab, imported meshes). Build checks go to a separate file (`build/check.rbxl`) and Studio-only assets get exported into the repo (`.rbxmx`) or backed up by id.
- **Rojo live sync drops MeshPart meshes.** Crossfire tags meshes and a server script restores them (`server/Meshes`, `tools/tag-meshes`).
- A new node in the Rojo tree (e.g. ServerStorage content) needs `rojo serve` restarted and Connect pressed again.

## Studio and the Studio MCP

- The MCP can't move a pointer-locked mouse: mouse look, drags while locked and similar feel checks have to be played by hand.
- **MCP mouse clicks don't press UI buttons** (BELOW RBX, 2026-10-30). The click reaches UserInputService, as gameProcessed, at the right spot, but a TextButton's MouseButton1Down/Activated never fire, even with hover moves first. Test the action behind a button by calling its remote from `execute_luau` on the Client, and click buttons by hand. MCP key presses do work (a backquote toggled a panel).
- **\ (backslash) is Roblox's keyboard UI-navigation key** (BELOW RBX, 2026-10-30). It outlines a button and arrives as gameProcessed, so a game binding on it never fires. Set `GuiService.AutoSelectGuiEnabled = false` to have the key arrive normally (BELOW does this for its Studio-only dev panel).
- `user_mouse_input` y coordinates are GUI coordinates: the tool adds the top-bar inset itself, so pass a button's AbsolutePosition, not the screen position.
- `screen_capture` comes back empty when Studio's window is in the background: bring Studio to the front before capturing.
- Mesh and model generation only works in Edit mode ("only from the server" error during a playtest).
- `HttpRbxApiService` and inventory APIs are blocked from MCP Luau; to find your uploaded assets' ids use the MCP's **search_asset with scope "user"**.
- Studio can't save DataStores without API access turned on for the place; Freebuild uses a small local helper (`tools/settings_helper.py` on 127.0.0.1) so settings survive in Studio.

## Assets and the Creator Store

- **Free models can hide backdoors.** The zombie pack Crossfire used had 18 scripts including a backdoor: strip every script from store models before using them, and keep the cleaned copy in the repo.
- Import 3D works through the MCP queue; check bone counts and that no scripts came along.
- Keep the ids of everything generated or uploaded in a JSON in the repo (e.g. `assets/weapons/generated-guns.json`, `Art/deadmall/uploaded.json`).
- **Import 3D turns glTF meshes 180° about Y** (BELOW RBX, 2026-10-31). The pivot stays where it was in the file. `model:PivotTo(CFrame.Angles(0, math.pi, 0))` puts every part back on the file's coordinates.
- **Import 3D only builds SurfaceAppearances from texture maps.** A glTF material with only colour or metal factors arrives as grey Plastic, so set Color and Material afterwards. Base-colour-only materials arrive as `TextureID`.
- **Import 3D can't read meshopt or quantized glTF.** BELOW RBX's `tools/models/gltf.mjs` decodes both in Node, so no Blender is needed.
- **Getting Studio-made models into the repo without saving the place** (BELOW RBX): `SerializationService:SerializeInstancesAsync` works at plugin level from the MCP.
  - POST the result as base64 to a localhost receiver. Turn `HttpService.HttpEnabled` on for that call only, then off.
  - Lune converts the `.rbxm` to `.rbxmx`.
- **Testing a game module's state from the MCP:** a `require` in `execute_luau` gets its own copy of the module. To call the game's own copy, parent a temporary LocalScript to PlayerScripts, have it write its results to an attribute, then read the attribute and delete the script.

## Audio

- Uploading audio needs your OK each time: there's a monthly upload cap and a rights certification.
- New uploads can take minutes to clear moderation before they play.
- Published games use only sounds we own or that are licensed for Roblox; Fortnite or COD audio, or recordings of it, never goes in. AI-generated sound takes that are yours are fine (see EMX Freebuild RBX - Decisions and the Freebuild sound work).
- Freebuild's AI sounds go through `tools/sounds/prep_ai_sounds.py` (trim, level, fade, OGG) before upload.

## Gameplay code

- Server-authoritative hits: Crossfire's GunHit remote checks range falloff, headshots and cheats on the server; the client only sends what it saw.
- Camera and mouse look follow [[_techniques/Mouse look|Mouse look]] (0.0008 rad per count, spike filter, settle window, apply once per frame).
- Number-heavy feel (recoil, sprint, slide) is checked in Studio by numbers when screenshots can't show it, then by you playing.

## Related

- The big Roblox library: Roblox hub → LihFolk Vault V2.
- Prompts and tools: [[_techniques/Roblox/Roblox prompts|Roblox prompts]], [[_techniques/Roblox/Roblox tools and plugins|Roblox tools and plugins]].
