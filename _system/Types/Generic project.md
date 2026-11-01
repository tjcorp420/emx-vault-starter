---
id: generic
label: Generic project
category: Tools
icon: box
color: "#9b8b67"
version: 2
changelog:
  - "2: its own Workshop profile (generic)"
  - "1: starter type"
description: Any project. Everything else builds on this one.
workshop:
  create: true
  profile: generic
repo:
  create: true
  github: private
notes:
  - hub
  - feedback
  - decisions
  - questions
  - dashboard
labels:
  feedback: Feedback
done:
  - What changed is shown (screenshots, or numbers when a picture can't show it)
  - Workshop task moved to review with what was and wasn't verified; session logged
dashboard:
  - stage
  - tasks
  - recap-week
  - feedback
  - decisions
  - commits
tools: []
capabilities: []
claude:
  skills: []
  prompts:
    - Brief me
    - Plan next
    - Hand off
automations:
  - weekly-recap
requires: {}
tasks: []
---

# Generic project

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P → "Project types"); the settings above and the templates below are what that editor saves.

## Template: hub

````markdown
---
type: {{typeLabel}}
emx-type: {{type}}
workshop-project: {{slug}}
created: {{date}}
---

# {{name}}

## What it is

One paragraph: what it is, who it's for, and what it must feel like.

## Rules

Things that are always true for this project.

-

## Done means

A task is done only when all of these hold (Claude checks before saying done):

{{done}}

## Where things are

- Workshop project: `{{repoPath}}` (stage and tasks: Workshop tasks view)
- Dashboard: [[{{dashboardLink}}|Dashboard]]

## Notes

{{noteLinks}}
````

## Template: feedback

````markdown
# {{name}}: {{feedbackLabel}}

Your words after trying it, newest first. Claude quotes these; it never rewrites them.

````

## Template: decisions

````markdown
# {{name}}: decisions

Newest at the top. Each one: `### YYYY-MM-DD: what was decided`, then **Chose:**, **Why:**, and **Revisit if:** when it may change.

````

## Template: questions

````markdown
# {{name}}: open questions

-

````

## Template: dashboard

````markdown
# {{name}}: dashboard

```emx-dashboard
project: {{folder}}
widgets: {{widgets}}
```

````
