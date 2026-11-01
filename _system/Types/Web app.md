---
id: web-app
label: Web app
extends: website
icon: layout-panel-top
color: "#6fd3ff"
version: 2
changelog:
  - "2: its own Workshop profile (web-app)"
  - "1: starter type"
description: "An app in the browser: accounts, data, flows."
tools:
  - label: Dev server
    run: npm run dev
  - label: Test
    run: npm test
  - label: Build
    run: npm run build
done:
  - "`npm test` passes and it builds"
  - The changed flow works end to end in the browser
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
workshop:
  create: true
  profile: web-app
---

# Web app

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
