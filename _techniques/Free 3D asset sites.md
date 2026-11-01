# Free 3D asset sites

Free models, textures and HDRIs for this game and future ones. From a TikTok slideshow you saved on 2026-10-27 ("8 free 3D asset sites for your vibe-coded game", @slavariuus: https://www.tiktok.com/t/ZTfgwDXxF/). Summaries and scores are the slideshow's, written up by Claude; the web addresses are each site's usual home page, added by Claude.

**Always check the licence before shipping anything.** CC0 means free for anything, no credit needed. CC-BY means you must credit the author. GPL is a poor fit for game assets.

| Site | What it has | Licence | Their score |
|---|---|---|---|
| [Kenney](https://kenney.nl) | 60,000+ assets that all match each other: cities, cars, dungeons, UI | CC0, no credit needed | 10/10 |
| [Poly Haven](https://polyhaven.com) | About 990 HDRIs, 860 textures and 520 models; one HDRI can light a whole scene | CC0 | 9/10 |
| [ambientCG](https://ambientcg.com) | 2,000+ materials and 430+ HDRIs, with a free API (an agent can fetch textures itself) | CC0 | 8/10 |
| [Quaternius](https://quaternius.com) | Low-poly packs of rigged, animated characters, walk cycles included | Free for commercial games, no credit; don't resell the assets | 8/10 |
| [KayKit](https://kaylousberg.com) (Kay Lousberg) | Stylized low-poly characters, dungeons and props (e.g. the Adventurers character pack) | CC0, fine for commercial games | 7/10 |
| [cgbookcase](https://www.cgbookcase.com), [3DTextures.me](https://3dtextures.me), [ShareTextures](https://www.sharetextures.com) | Real-world textures (dirt, rust, manholes…) | cgbookcase and 3DTextures.me are CC0; ShareTextures is CC0-based but bans re-uploading | 6/10 |
| [Sketchfab](https://sketchfab.com) | The biggest 3D library, free downloads in glTF; the paid store moved to Epic's Fab | Every model has its own licence; filter by licence | 5/10 |
| [OpenGameArt](https://opengameart.org) | A huge free library uploaded by anyone | Mixed: CC0, CC-BY, GPL; read each one | 4/10 |

The last slide was an ad for the poster's own tool (ardor.cloud). It's not an asset site.

## Using them in our Roblox games

- **Models:** import as FBX or OBJ (glTF can go through Blender first) with Studio's 3D importer. That's an upload, so the import steps are yours (see the Studio imports note in Claude's memory).
- **Textures and HDRIs:** use them as SurfaceAppearance or MaterialVariant maps. Roblox has no HDRI skyboxes, so an HDRI is only useful as a reference for lighting.
- **Best first picks for EMX Crossfire RBX:** Kenney (props, city kit for Crash Court-style maps), Poly Haven and ambientCG (realistic PBR materials for the depot), Quaternius (animated placeholder characters and zombies).
