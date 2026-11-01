---
id: video
label: Video
extends: generic
category: Video
icon: clapperboard
color: "#ff6a2b"
version: 1
changelog:
  - "1: starter type"
description: Videos, trailers, devlogs (HyperFrames).
workshop:
  create: true
  profile: video
assets:
  kinds:
    video:
      - mp4
      - mov
      - webm
    audio:
      - wav
      - mp3
    image:
      - png
      - jpg
  license: recommended
claude:
  skills:
    - hyperframes
    - media-use
  prompts:
    - Brief me
    - Plan next
    - Hand off
done:
  - Rendered and watched start to end
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
requires:
  tools:
    - ffmpeg
---

# Video

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.
