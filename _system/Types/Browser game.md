---
id: web-game
label: Browser game
extends: game
icon: monitor-play
color: "#ff6a2b"
version: 1
changelog:
  - "1: starter type"
description: A game that runs in the browser.
workshop:
  create: true
  profile: web-game
tools:
  - label: Dev server
    run: npm run dev
  - label: Test
    run: npm test
  - label: Build
    run: npm run build
done:
  - "`npm test` passes and it builds"
  - Played in the browser, mouse look by the global rules
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
requires:
  tools:
    - node
---

# Browser game

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
