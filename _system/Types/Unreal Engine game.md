---
id: unreal-game
label: Unreal Engine game
extends: game
icon: gamepad
color: "#6fd3ff"
version: 1
changelog:
  - "1: starter type"
description: An Unreal Engine 5 game. Rendering only with your OK.
workshop:
  create: true
  profile: unreal
done:
  - Builds without errors
  - Played in the editor (PIE) with screenshots or measured numbers
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
assets:
  kinds:
    model:
      - fbx
      - glb
      - uasset
    texture:
      - png
      - tga
      - exr
    sound:
      - wav
      - ogg
  license: recommended
claude:
  skills: []
  prompts:
    - Brief me
    - Feel to tasks
    - Plan next
    - Hand off
requires:
  apps:
    - Unreal Engine 5
---

# Unreal Engine game

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
