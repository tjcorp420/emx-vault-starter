---
automations:
  - id: review-ping
    name: Tell me when a task is ready for review
    on: true
    when:
      event: task-status
      to: review
    then:
      - action: notify
        message: "{{project.name}}: {{task.id}} is ready for your review ({{task.title}})"
  - id: checklist-done
    name: Tell me when a stage checklist is complete
    on: true
    when:
      event: checklist-complete
    then:
      - action: notify
        message: "{{project.name}}: the {{project.stage}} checklist is complete. Moving on is your call (Tasks → Move to next stage)."
  - id: playtest-to-inbox
    name: Log every new playtest in the Inbox
    on: false
    when:
      event: playtest-added
    then:
      - action: append-note
        path: _inbox/Inbox.md
        text: "- {{date}} playtest in [[{{project.feedback}}|{{project.name}}]]: {{entry.quotes}}"
  - id: new-project-kickoff
    name: Give every new project a kickoff task
    on: false
    when:
      event: project-created
    then:
      - action: add-task
        title: "Kickoff: write What it is, Rules and Done means in the hub"
        kind: custom
  - id: weekly-recap
    name: Write the recap notes every Monday
    on: true
    when:
      event: schedule
      every: week
      day: mon
      at: 08:00
      catchUp: true
    then:
      - action: write-recaps
  - id: monday-briefing
    name: Monday AI briefing (Claude reads the recaps and writes priorities)
    on: false
    when:
      event: schedule
      every: week
      day: mon
      at: 09:00
      catchUp: true
    then:
      - action: ask-claude
        prompt: "You are helping run the EMX Workshop. Read the newest note in _techniques/Workshop recaps, the What needs me items you can infer from it, and each active project's Brief (Games/*/* - Brief.md and the other categories). Write a short Monday briefing: 1) the 3–5 priorities for this week with the reason for each, 2) anything blocked or waiting on the user, 3) decisions that may need a review. Plain words, under 300 words."
        path: _inbox/Monday briefing {{date}}.md
      - action: notify
        message: Your Monday briefing is in the Inbox
---

# Automations

Rules that run by themselves. Make and change them in Projects → Automations (or Ctrl+P → "Automations"): when something happens, check a few things, then do the actions. What each run did is in [[_system/Automation log|the automation log]].
