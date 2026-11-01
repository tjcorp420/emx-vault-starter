---
type: technique
used-in: ["EMX Freebuild UE"]
---

# Mouse look

Rules for first-person and third-person mouse look in every EMX game. They exist because look controls kept coming out too sensitive and flicky.

- **Sensitivity:** about 0.0008 rad per mouse count at 1× (2000 counts ≈ 90°). Never default above about 0.0012. Slider about 0.2–3×, plus invert-Y.
- **Raw input:** pointer lock with `unadjustedMovement: true` in the browser. In Unreal, raw mouse counts.
- **Spike filter:** drop any single event over about 200 counts, and ignore input for about 120 ms after capture.
- **Once per frame:** add up deltas as they arrive, apply them in the game loop, and clear them while menus are open.
- **No smoothing by default.**
- **Pitch clamp:** about ±1.35 rad.
- **Tests:** keep the look math in a small module with unit tests.

## Implementations

- Browser reference: the project's repo
- EMX Freebuild UE: `FEMXMouseLook`, ported from the browser Freebuild's `look.ts`, using Fortnite-style % sensitivity (X/Y, Build, Edit, Pickaxe/Weapon). Test: `EMX.Input.MouseLook`.

## Roblox Studio: mouse won't lock in Play
Seen in EMX Crossfire RBX (2026-10-27) and EMX Freebuild RBX (2026-10-29). The game kept `MouseBehavior = LockCenter`
every frame (sampled) while the cursor still escaped, so it was Studio, not game code. Fixes that worked, in order:
a full Studio restart (Crossfire); updating Studio when it asked (Freebuild, with EMX Clips and EMX Desktop Flow Lite
closed - not confirmed which mattered). Also: don't drop look on Studio's own WindowFocusReleased events.

