---
id: roblox-game
label: Roblox game
extends: game
icon: box
color: "#39d98a"
version: 2
changelog:
  - "2: LihFolk Asset Pack allowed (2026-10-30)"
  - "1: starter type"
description: "A Roblox experience: Rojo, Lune tests, Studio playtests. Only your own, CC0, Roblox-licensed or LihFolk Asset Pack assets."
workshop:
  create: true
  profile: roblox
done:
  - "`lune run tests/run` passes, `stylua --check src tests` and `selene src` are clean, `rojo build` works"
  - Played in Studio with no errors in Output
  - "Only our own, CC0, Roblox-licensed or LihFolk Asset Pack assets and sounds (LihFolk: private uploads only, never Distribute, never its Dataset)"
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
tools:
  - label: Test
    run: lune run tests/run
  - label: Lint
    run: selene src
  - label: Build place
    run: rojo build -o build/{{slug}}.rbxl
  - label: Live sync
    run: rojo serve
capabilities:
  - playtests
  - buildlog
assets:
  kinds:
    sound:
      - wav
      - ogg
      - mp3
    model:
      - fbx
      - glb
      - obj
      - rbxm
    image:
      - png
      - jpg
  license: required
claude:
  skills:
    - roblox-dev-skill
    - roblox-debugging
    - roblox-system-builder
  prompts:
    - Brief me
    - Feel to tasks
    - Plan next
    - Hand off
requires:
  tools:
    - rojo
    - lune
    - stylua
    - selene
  apps:
    - Roblox Studio
---

# Roblox game

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
