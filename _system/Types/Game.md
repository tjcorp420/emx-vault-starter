---
id: game
label: Game
extends: generic
category: Games
icon: gamepad-2
color: "#e8b84a"
version: 1
changelog:
  - "1: starter type"
description: Any game. Playtests and feel come first.
labels:
  feedback: Feel tests
capabilities:
  - playtests
done:
  - Played, with no errors
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
dashboard:
  - stage
  - tasks
  - recap-week
  - playtests
  - decisions
  - assets
  - commits
claude:
  skills: []
  prompts:
    - Brief me
    - Feel to tasks
    - Plan next
    - Hand off
---

# Game

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
