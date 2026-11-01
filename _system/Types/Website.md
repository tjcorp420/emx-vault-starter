---
id: website
label: Website
extends: generic
category: Web
icon: globe
color: "#39d98a"
version: 2
changelog:
  - "2: its own Workshop profile (website)"
  - "1: starter type"
description: "A site: pages, content, look, launch."
labels:
  feedback: Reviews
workshop:
  create: true
  profile: website
tools:
  - label: Dev server
    run: npm run dev
  - label: Build
    run: npm run build
done:
  - Builds, and every page loads with no console errors
  - Checked at phone and desktop width
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
requires:
  tools:
    - node
---

# Website

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
