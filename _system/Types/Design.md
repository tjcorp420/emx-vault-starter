---
id: design
label: Design
extends: generic
category: Design
icon: pen-tool
color: "#c38bff"
version: 2
changelog:
  - "2: its own Workshop profile (design)"
  - "1: starter type"
description: "Design work: no code repo by default."
labels:
  feedback: Feedback
workshop:
  create: true
  profile: design
repo:
  create: true
  github: private
assets:
  kinds:
    image:
      - png
      - jpg
      - svg
      - webp
    source:
      - fig
      - psd
      - ai
      - xd
  license: recommended
dashboard:
  - stage
  - tasks
  - assets
  - feedback
  - decisions
done:
  - Exported at the sizes it's used at
  - Shown next to the reference or the old version
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
---

# Design

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
