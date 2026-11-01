# EMX Vault Starter

A ready-made Obsidian vault for making games: the EMX Vault Studio plugin with its looks, 3D graph and Graph Realms, about 40 animated shader backgrounds, project types, dashboards, automations, a Guide that explains every button, and a few shared notes about Roblox development.

## Set it up (5 minutes)

1. Install [Obsidian](https://obsidian.md) and [Git](https://git-scm.com).
2. Get this repo:
   ```
   git clone <this repo's URL> "My Vault"
   ```
   Or use GitHub's green **Code** button → **Download ZIP** and unzip it.
3. Open Obsidian → **Open folder as vault** → pick the folder.
4. When Obsidian asks, choose **Trust author and enable plugins**. EMX Vault Studio is already in the folder.
5. Open **Home**, then the **book icon** on the far left (the Guide): type any question, like *how do I make a new project?*

## What works straight away

Looks, backgrounds, the graph and Graph Realms, dashboards, project types, new projects, recaps from your notes, the decision guard, note history (once it's a git repo), and the Guide.

## What needs extra setup

- **Workshop features** (task board, stages, session logs, Play): they need the `workshop` command-line tool, which isn't included. Without it those buttons say Workshop isn't found; everything else still works.
- **Automatic GitHub backup:** off by default. Make your own GitHub repo for your vault, point this folder at it (`git remote set-url origin <your repo>`), then turn on Backup in Settings → EMX Vault Studio. Don't push to the repo you got this from.
- **Ask Claude buttons:** need Claude Code installed and signed in.
- **Open in Holo:** needs EMX Holo IDE.

## Licence

Shared with you personally by its owner. The Roblox notes mention third-party tools and libraries (like LihFolk's vault) by name only; get those from their own authors.
