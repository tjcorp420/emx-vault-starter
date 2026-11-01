/* EMX Vault Studio: built from github.com/tjcorp420/emx-vault-studio. Edit src/, not this file. */
"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/core/constants.js
var require_constants = __commonJS({
  "src/core/constants.js"(exports2, module2) {
    "use strict";
    var VIEW2 = "evs-neural-graph";
    var PANEL2 = "evs-control-panel";
    var MISSION2 = "evs-mission-control";
    var TIMELINE2 = "evs-timeline";
    var TASKS2 = "evs-tasks";
    var RECAP2 = "evs-recap";
    var DECISIONS2 = "evs-decisions";
    var PROJECTS2 = "evs-projects";
    var GUIDE2 = "evs-guide";
    var LOOK_KEYS2 = [
      "bg",
      "panel",
      "accent",
      "accent2",
      "text",
      "muted",
      "heading",
      "glow",
      "fontHead",
      "fontUI",
      "fontText",
      "smallCaps",
      "headSpacing",
      "radius",
      "frameStyle",
      "frameWidth",
      "stars",
      "starDensity"
    ];
    var GRAPH_LOOK_KEYS2 = ["useTheme", "branch", "leaf", "root"];
    var FONTS = {
      System: "",
      Cinzel: '"Cinzel", Georgia, serif',
      "Cormorant Garamond": '"Cormorant Garamond", Georgia, serif',
      Orbitron: '"Orbitron", "Segoe UI", sans-serif',
      Rajdhani: '"Rajdhani", "Segoe UI", sans-serif',
      Inter: '"Inter", "Segoe UI", sans-serif',
      Georgia: "Georgia, serif",
      "JetBrains Mono": '"JetBrains Mono", Consolas, monospace'
    };
    var PRESETS2 = {
      "Gold Tree": {
        bg: "#050403",
        panel: "#0c0a06",
        accent: "#e8b84a",
        accent2: "#fff0b3",
        text: "#eadfc4",
        muted: "#9b8b67",
        heading: "#f3cf73",
        glow: 1,
        fontHead: "Cinzel",
        fontUI: "Cinzel",
        fontText: "Inter",
        graph: { branch: "#e8b84a", leaf: "#ffd76a", root: "#c98a2a" }
      },
      "EMX Neon": {
        bg: "#07040d",
        panel: "#0e0820",
        accent: "#a64dff",
        accent2: "#39ff88",
        text: "#e8e0ff",
        muted: "#8c7fb0",
        heading: "#c38bff",
        glow: 1.2,
        fontHead: "Orbitron",
        fontUI: "Rajdhani",
        fontText: "Inter",
        graph: { branch: "#a64dff", leaf: "#39ff88", root: "#6d2bd9" }
      },
      Frost: {
        bg: "#03070c",
        panel: "#07111b",
        accent: "#6fd3ff",
        accent2: "#e6fbff",
        text: "#dcefff",
        muted: "#7f9bb3",
        heading: "#9fe3ff",
        glow: 0.9,
        fontHead: "Cormorant Garamond",
        fontUI: "Inter",
        fontText: "Inter",
        graph: { branch: "#6fd3ff", leaf: "#e6fbff", root: "#3a8fd1" }
      },
      Ember: {
        bg: "#080302",
        panel: "#140705",
        accent: "#ff6a2b",
        accent2: "#ffd27a",
        text: "#f3dccd",
        muted: "#a37d6a",
        heading: "#ff9a5c",
        glow: 1.1,
        fontHead: "Cinzel",
        fontUI: "Inter",
        fontText: "Inter",
        graph: { branch: "#ff6a2b", leaf: "#ffd27a", root: "#b53a12" }
      },
      Matrix: {
        bg: "#000a03",
        panel: "#021208",
        accent: "#2bff6a",
        accent2: "#b6ffcf",
        text: "#cfeedd",
        muted: "#5f8f70",
        heading: "#6dff98",
        glow: 1,
        fontHead: "JetBrains Mono",
        fontUI: "JetBrains Mono",
        fontText: "Inter",
        graph: { branch: "#2bff6a", leaf: "#b6ffcf", root: "#13a03f" }
      }
    };
    var DEFAULTS2 = {
      themeOn: true,
      preset: "Gold Tree",
      bg: "#050403",
      panel: "#0c0a06",
      accent: "#e8b84a",
      accent2: "#fff0b3",
      text: "#eadfc4",
      muted: "#9b8b67",
      heading: "#f3cf73",
      glow: 1,
      fontHead: "Cinzel",
      fontUI: "Cinzel",
      fontText: "Inter",
      smallCaps: true,
      headSpacing: 0.06,
      radius: 8,
      frameStyle: "solid",
      frameWidth: 1,
      stars: true,
      starDensity: 0.5,
      customCss: "",
      myLooks: [],
      panelShown: false,
      graph: {
        shape: "tree",
        title: "EMX Neural Graph",
        homeLabel: "EMX Home",
        useTheme: true,
        branch: "#e8b84a",
        leaf: "#ffd76a",
        root: "#c98a2a",
        nodeSize: 2.2,
        sizeByLinks: true,
        showLinks: false,
        linkAlpha: 0.12,
        fireflies: 40,
        speed: 1,
        spread: 1,
        foliage: 1.2,
        labels: true,
        frame: true,
        rootFolders: "_techniques, _inbox, _templates, Archive",
        includeRepo: false,
        byProject: true,
        // linked libraries (folders of someone else's notes) show as their own branch with smaller dots
        libraries: "_techniques/Roblox/LihFolk Vault V1",
        showLibraries: true,
        // notes edited lately glow and pulse, fading over this many days
        recentGlow: true,
        recentDays: 7,
        // shape and motion builder
        fan: 140,
        tilt: 0,
        bend: 1,
        length: 1,
        trunk: 1,
        rootFan: 110,
        scatter: 1,
        twist: 2.6,
        spin: 1,
        alternate: false,
        nodeShape: "circle",
        lineStyle: "curved",
        lineWidth: 1,
        sway: 1,
        swaySpeed: 1,
        twinkle: 1,
        breathe: 0,
        pulses: 6,
        pulseSpeed: 1,
        flyDir: "up",
        flySpeed: 1,
        // 3D: how deep the shape is, the camera's starting tilt and turn (degrees), turning by itself (radians a second),
        // helix strands; realm = the Graph Realm it came from; morph = seconds to change from one shape into another
        depth: 1,
        pitch: 0,
        yaw: 0,
        autoTurn: 0,
        autoSpin: 0,
        strands: 2,
        realm: "Gold Tree",
        morph: 1.6
      },
      // saved graph shapes: { name, shape }
      shapes: [],
      // every look card (built-in ones included) lives here once seeded, so all of them can be edited or deleted
      looks: [],
      // per project: { color, icon, bannerBg }
      projects: {},
      projectColors: true,
      status: { on: true, icon: true, name: true, stage: true, next: true, tasks: true, outside: true },
      notes: { summary: true, summaryMin: 350, bubbles: true, timeline: true },
      banner: { on: true, allNotes: true, id: "builtin-gold-dust", height: 150, opacity: 0.85 },
      mission: { onStartup: false },
      // generated one-page briefs per project and the vault index (for Claude: fewer tokens, fewer re-asked questions)
      briefs: { on: true },
      // in-game notes from the game's build log go to Feel tests; seen = newest note copied per project
      playtest: { on: true, seen: {} },
      // automatic backup of the vault to its git repo (minutes between backups)
      backup: { on: true, minutes: 10, push: true },
      // where the workshop CLI lives (empty: the default, C:/EMX/Workshop/bin/workshop.cjs)
      workshop: { bin: "" },
      // project types: whether the starters have been written into _system
      types: { seeded: 0 },
      // automations: all on or off, whether the starter rules were written, when each schedule last ran, the day the vault last opened
      automations: { on: true, seeded: 0, lastRun: {}, opened: "" },
      // the decision guard: where it checks, when a decision needs a review, and your calls (never written into notes)
      decisions: { on: true, editor: true, tasks: true, banners: true, staleDays: 90, states: {}, dismissed: {} },
      // recaps: which notes are written, what the recap view and mission control show
      recap: {
        notes: { weekly: true, monthly: false, perProject: true, master: true },
        clipsFolder: "",
        mission: true,
        range: "week",
        compare: true,
        sections: {
          insights: true,
          trends: true,
          timeline: true,
          done: true,
          review: true,
          blocked: true,
          created: true,
          sessions: true,
          tests: true,
          playtests: true,
          decisions: true,
          commits: true,
          clips: true,
          edited: true,
          upcoming: true
        }
      },
      fx: {
        vault: { on: false, id: "builtin-gold-dust", opacity: 0.6, dim: 0.35, blur: 0, see: 0.82 },
        graph: { on: false, id: "builtin-gold-dust", opacity: 0.5 },
        fps: 30,
        quality: 0.75,
        pauseUnfocused: true,
        lite: false,
        libraryPath: ""
      },
      bgLibrary: []
    };
    var STAGES = ["idea", "plan", "build", "verify", "ship", "promo"];
    var PROJECT_COLORS2 = ["#e8b84a", "#ff6a2b", "#39d98a", "#6fd3ff", "#c38bff", "#ff5c8a", "#f5e663", "#4dd0c8"];
    var BUILTIN_BGS = [
      {
        id: "builtin-gold-dust",
        name: "Gold Dust",
        kind: "shader",
        builtIn: true,
        params: { speed: 1, glow: 1.2, hue: 0, scale: 1, colorA: "#e8b84a", colorB: "#fff0b3" },
        code: `precision highp float;
uniform vec2 u_resolution;
uniform float u_time, u_speed, u_glow, u_hue, u_scale;
uniform vec3 u_colorA, u_colorB;
out vec4 fragColor;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
void main(){
 vec2 uv=(gl_FragCoord.xy-.5*u_resolution)/u_resolution.y/u_scale;
 float t=u_time*u_speed;
 vec3 col=vec3(0.);
 for(float i=1.;i<5.;i++){
  vec2 p=uv*(3.+i*2.)+vec2(sin(t*.07*i)*.3,t*.05*i);
  vec2 id=floor(p); vec2 f=fract(p)-.5;
  float r=h(id+i*7.);
  vec2 o=vec2(h(id+3.1)-.5,h(id+5.7)-.5)*.6;
  float d=length(f-o);
  float tw=.5+.5*sin(t*2.+r*40.);
  col+=mix(u_colorA,u_colorB,r)*(smoothstep(.09,0.,d)+.35*smoothstep(.22,0.,d))*tw*step(.35,r)*u_glow/sqrt(i);
 }
 col+=u_colorA*.08*(1.-length(uv));
 fragColor=vec4(col,1.);
}`
      },
      {
        id: "builtin-aurora",
        name: "Aurora Veil",
        kind: "shader",
        builtIn: true,
        params: { speed: 1, glow: 1.2, hue: 0, scale: 1, colorA: "#a64dff", colorB: "#39ff88" },
        code: `precision highp float;
uniform vec2 u_resolution;
uniform float u_time, u_speed, u_glow, u_hue, u_scale;
uniform vec3 u_colorA, u_colorB;
out vec4 fragColor;
void main(){
 vec2 uv=gl_FragCoord.xy/u_resolution;
 float t=u_time*u_speed*.25;
 float a=0.;
 for(float i=0.;i<4.;i++){
  float w=sin(uv.x*(3.+i)*u_scale+t*(1.+i*.3)+i*1.7)*.07+sin(uv.x*9.*u_scale-t*1.3+i)*.02;
  a+=smoothstep(.13,0.,abs(uv.y-.62-w+i*.07))*(.7-i*.14);
 }
 vec3 col=mix(u_colorA,u_colorB,uv.x+.2*sin(t))*a*u_glow;
 col+=u_colorA*.04*(1.-uv.y);
 fragColor=vec4(col,1.);
}`
      }
    ];
    var QUICK_THEMES = [
      ["Holo", "#a64dff", "#35e0ff"],
      ["Neon pulse", "#ff3df2", "#7d4dff"],
      ["Arctic", "#6fd3ff", "#e6fbff"],
      ["Emerald", "#20e3a2", "#0d6e4f"],
      ["Solar", "#ffb03a", "#ff4d2e"],
      ["Violet", "#b07dff", "#5a3dff"],
      ["Hacker red", "#ff2e4d", "#ffb3c0"],
      ["Gold", "#e8b84a", "#fff0b3"]
    ];
    module2.exports = { VIEW: VIEW2, PANEL: PANEL2, MISSION: MISSION2, TIMELINE: TIMELINE2, TASKS: TASKS2, RECAP: RECAP2, DECISIONS: DECISIONS2, PROJECTS: PROJECTS2, GUIDE: GUIDE2, LOOK_KEYS: LOOK_KEYS2, GRAPH_LOOK_KEYS: GRAPH_LOOK_KEYS2, FONTS, PRESETS: PRESETS2, DEFAULTS: DEFAULTS2, STAGES, PROJECT_COLORS: PROJECT_COLORS2, BUILTIN_BGS, QUICK_THEMES };
  }
});

// src/core/util.js
var require_util = __commonJS({
  "src/core/util.js"(exports2, module2) {
    "use strict";
    var { FONTS } = require_constants();
    function rgb2(hex) {
      const h = String(hex || "#000").replace("#", "");
      const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h.padEnd(6, "0");
      return [0, 2, 4].map((i) => parseInt(f.slice(i, i + 2), 16) || 0);
    }
    function rgba2(hex, a) {
      const [r, g, b] = rgb2(hex);
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
    function mix2(a, b, t) {
      const x = rgb2(a), y = rgb2(b);
      return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("");
    }
    function hash2(str) {
      let h = 2166136261;
      for (let i = 0; i < str.length; i++) h = Math.imul(h ^ str.charCodeAt(i), 16777619);
      return h >>> 0;
    }
    function rng(seed) {
      let a = seed >>> 0;
      return () => {
        a = a + 1831565813 | 0;
        let t = Math.imul(a ^ a >>> 15, 1 | a);
        t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    }
    var lerp = (a, b, t) => a + (b - a) * t;
    function qpt(c, t) {
      const u = 1 - t;
      return { x: u * u * c.x0 + 2 * u * t * c.cx + t * t * c.x1, y: u * u * c.y0 + 2 * u * t * c.cy + t * t * c.y1 };
    }
    function qnormal(c, t) {
      const dx = 2 * (1 - t) * (c.cx - c.x0) + 2 * t * (c.x1 - c.cx);
      const dy = 2 * (1 - t) * (c.cy - c.y0) + 2 * t * (c.y1 - c.cy);
      const len = Math.hypot(dx, dy) || 1;
      return { x: -dy / len, y: dx / len };
    }
    function fontFamily2(name) {
      return FONTS[name] || getComputedStyle(document.body).getPropertyValue("--font-interface").trim() || "sans-serif";
    }
    function merge2(base, extra) {
      const plain = (v) => v && typeof v === "object" && !Array.isArray(v);
      const out = {};
      for (const k of /* @__PURE__ */ new Set([...Object.keys(base), ...Object.keys(extra || {})])) {
        const b = base[k], e = extra ? extra[k] : void 0;
        if (plain(b) && k !== "projects") out[k] = merge2(b, plain(e) ? e : {});
        else if (e !== void 0) out[k] = Array.isArray(e) ? e.slice() : plain(e) ? JSON.parse(JSON.stringify(e)) : e;
        else out[k] = Array.isArray(b) ? b.slice() : plain(b) ? JSON.parse(JSON.stringify(b)) : b;
      }
      return out;
    }
    function hsl(h, s, l) {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
      const f = (n) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return "#" + [f(0), f(8), f(4)].map((x) => Math.round(x * 255).toString(16).padStart(2, "0")).join("");
    }
    function randomLook2() {
      const h = Math.floor(Math.random() * 360), h2 = (h + (Math.random() < 0.5 ? 35 : 150)) % 360;
      const pairs = [["Cinzel", "Inter"], ["Orbitron", "Rajdhani"], ["Cormorant Garamond", "Inter"], ["JetBrains Mono", "Inter"], ["Rajdhani", "Inter"]];
      const [head, ui] = pairs[Math.floor(Math.random() * pairs.length)];
      return {
        bg: hsl(h, 40, 3),
        panel: hsl(h, 35, 6.5),
        accent: hsl(h, 85, 60),
        accent2: hsl(h2, 90, 74),
        text: hsl(h, 25, 88),
        muted: hsl(h, 15, 56),
        heading: hsl(h, 85, 72),
        glow: +(0.7 + Math.random() * 0.8).toFixed(1),
        fontHead: head,
        fontUI: ui,
        fontText: "Inter",
        graph: { useTheme: true }
      };
    }
    function starfield2(s) {
      const r = rng(hash2(s.accent2 + s.bg));
      const n = Math.round(6 + s.starDensity * 40);
      const dots = [];
      for (let i = 0; i < n; i++) {
        const size = r() < 0.85 ? 1 : 2;
        const a = (0.15 + r() * 0.55).toFixed(2);
        dots.push(`radial-gradient(${size}px ${size}px at ${Math.round(r() * 420)}px ${Math.round(r() * 420)}px, ${rgba2(s.accent2, a)}, transparent)`);
      }
      return dots.join(", ");
    }
    function ago(ms) {
      if (!ms) return "";
      const m = Math.round((Date.now() - ms) / 6e4);
      if (m < 1) return "just now";
      if (m < 60) return `${m} min ago`;
      const h = Math.round(m / 60);
      if (h < 24) return `${h} h ago`;
      const d = Math.round(h / 24);
      return d === 1 ? "yesterday" : `${d} days ago`;
    }
    function partOfDay2(d) {
      const h = d.getHours();
      return h < 5 ? "late night" : h < 12 ? "morning" : h < 17 ? "afternoon" : h < 21 ? "evening" : "night";
    }
    function plainText(md) {
      return md.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, "").trim();
    }
    function firstParagraph(text) {
      const body = text.replace(/^---\n[\s\S]*?\n---\n/, "");
      for (const block of body.split(/\n\s*\n/)) {
        const b = block.trim();
        if (!b || /^(#|\||-|\*|>|```|!\[|\d+\.)/.test(b)) continue;
        return plainText(b.replace(/\n/g, " "));
      }
      return "";
    }
    function section(md, heading) {
      const re = new RegExp(`^## (?:${heading})[^\\n]*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "mi");
      const m = (md || "").match(re);
      return m ? m[1].trim() : "";
    }
    var bullets = (md) => {
      const out = [];
      for (const l of (md || "").split("\n")) {
        if (/^[-*] /.test(l)) out.push(l.replace(/^[-*]\s+/, ""));
        else if (out.length && /^\s+\S/.test(l) && !/^\s*[-*] /.test(l)) out[out.length - 1] += " " + l.trim();
      }
      return out.map((b) => plainText(b));
    };
    var clip = (s, n) => s.length > n ? s.slice(0, n - 1).trimEnd() + "\u2026" : s;
    var stamp = (ms = Date.now()) => {
      const d = new Date(ms);
      const z = (x) => String(x).padStart(2, "0");
      return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())} ${z(d.getHours())}:${z(d.getMinutes())}`;
    };
    module2.exports = { rgb: rgb2, rgba: rgba2, mix: mix2, hash: hash2, rng, lerp, qpt, qnormal, fontFamily: fontFamily2, merge: merge2, hsl, randomLook: randomLook2, ago, partOfDay: partOfDay2, plainText, firstParagraph, section, bullets, clip, stamp, starfield: starfield2 };
  }
});

// src/core/types.js
var require_types = __commonJS({
  "src/core/types.js"(exports2, module2) {
    "use strict";
    var SCHEMA = {
      id: "string",
      label: "string",
      extends: "string",
      category: "string",
      icon: "string",
      color: "string",
      description: "string",
      version: "number",
      changelog: "list",
      workshop: "object",
      repo: "object",
      notes: "list",
      labels: "object",
      done: "list",
      dashboard: "list",
      assets: "object",
      tools: "list",
      capabilities: "list",
      claude: "object",
      automations: "list",
      requires: "object",
      tasks: "list",
      hidden: "boolean"
    };
    var NOTES = {
      hub: { label: "Hub", file: "{{name}}" },
      feedback: { label: "Feel tests", file: "{{name}} - {{label}}" },
      decisions: { label: "Decisions", file: "{{name}} - {{label}}" },
      questions: { label: "Open questions", file: "{{name}} - {{label}}" },
      dashboard: { label: "Dashboard", file: "{{name}} - {{label}}" }
    };
    var kindOf = (v) => Array.isArray(v) ? "list" : v === null ? "null" : typeof v === "object" ? "object" : typeof v;
    var plain = (v) => v && typeof v === "object" && !Array.isArray(v);
    function mergeType(parent, child) {
      const out = {};
      for (const k of /* @__PURE__ */ new Set([...Object.keys(parent || {}), ...Object.keys(child || {})])) {
        const a = parent ? parent[k] : void 0, b = child ? child[k] : void 0;
        if (b === void 0) out[k] = plain(a) ? mergeType(a, {}) : Array.isArray(a) ? a.slice() : a;
        else if (plain(a) && plain(b)) out[k] = mergeType(a, b);
        else out[k] = plain(b) ? mergeType({}, b) : Array.isArray(b) ? b.slice() : b;
      }
      return out;
    }
    function validate(def, known = /* @__PURE__ */ new Set()) {
      const out = [];
      const err = (text) => out.push({ level: "error", text });
      if (!def || typeof def !== "object") return [{ level: "error", text: "Not a type definition" }];
      if (!def.id || !/^[a-z0-9][a-z0-9-]*$/.test(def.id)) err("Needs an id: lowercase letters, numbers and dashes");
      if (!def.label) err("Needs a name");
      for (const [k, v] of Object.entries(def)) {
        if (k === "templates" || k === "file") continue;
        if (!(k in SCHEMA)) out.push({ level: "warning", text: `Unknown setting "${k}" (kept, not used)` });
        else if (v !== void 0 && v !== null && kindOf(v) !== SCHEMA[k]) err(`"${k}" should be a ${SCHEMA[k]}, not a ${kindOf(v)}`);
      }
      if (def.extends && !known.has(def.extends)) err(`Builds on "${def.extends}", which doesn't exist`);
      if (def.color && !/^#[0-9a-f]{3,8}$/i.test(def.color)) out.push({ level: "warning", text: `Color "${def.color}" isn't a #hex color` });
      for (const n of def.notes || []) if (!(n in NOTES)) out.push({ level: "warning", text: `Unknown note "${n}"` });
      for (const t of def.tools || []) if (!t || !t.label || !(t.run || t.open || t.url)) err(`A tool needs a label and something to run, open or visit`);
      return out;
    }
    function resolve(defs) {
      const byId = /* @__PURE__ */ new Map(), problems = /* @__PURE__ */ new Map();
      for (const d of defs) {
        if (d && d.id && byId.has(d.id)) (problems.get(d.id) || problems.set(d.id, []).get(d.id)).push({ level: "warning", text: `Defined twice: ${d.file || "?"} wins over ${byId.get(d.id).file || "?"}` });
        if (d && d.id) byId.set(d.id, d);
      }
      const known = new Set(byId.keys());
      const types = /* @__PURE__ */ new Map();
      const resolving = /* @__PURE__ */ new Set();
      const get = (id) => {
        if (types.has(id)) return types.get(id);
        const d = byId.get(id);
        if (!d) return null;
        const issues = validate(d, known);
        if (issues.length) (problems.get(id) || problems.set(id, []).get(id)).push(...issues);
        if (issues.some((i) => i.level === "error")) return null;
        if (resolving.has(id)) {
          (problems.get(id) || problems.set(id, []).get(id)).push({ level: "error", text: "Builds on itself (a loop of extends)" });
          return null;
        }
        resolving.add(id);
        let parent = null;
        if (d.extends) {
          parent = get(d.extends);
          if (!parent) {
            resolving.delete(id);
            (problems.get(id) || problems.set(id, []).get(id)).push({ level: "error", text: `Its parent "${d.extends}" has a problem` });
            return null;
          }
        }
        const t = mergeType(parent || {}, d);
        t.templates = Object.assign({}, parent ? parent.templates : {}, d.templates || {});
        t.chain = (parent ? parent.chain : []).concat(id);
        t.id = id;
        t.extends = d.extends || null;
        t.hidden = !!d.hidden;
        t.file = d.file;
        resolving.delete(id);
        types.set(id, t);
        return t;
      };
      for (const id of byId.keys()) get(id);
      return { types, problems };
    }
    function notePaths(folder, name, type) {
      const labels = Object.assign({}, ...Object.entries(NOTES).map(([k, v]) => ({ [k]: v.label })), type && type.labels || {});
      const out = {};
      for (const [k, v] of Object.entries(NOTES)) out[k] = `${folder}/${v.file.replace("{{name}}", name).replace("{{label}}", labels[k])}.md`;
      out.brief = `${folder}/${name} - Brief.md`;
      return out;
    }
    function typeFor({ hubType, profile, category }, types, categories = []) {
      if (hubType && types.has(hubType)) return hubType;
      const c = categories.find((x) => x.folder === category);
      const def = c && c.type && types.has(c.type) ? c.type : null;
      if (profile) {
        const hits = [...types.values()].filter((t) => !t.hidden && t.workshop && t.workshop.profile === profile);
        if (def && hits.some((t) => t.id === def)) return def;
        if (!category && hits.some((t) => t.id === profile)) return profile;
        const same = hits.filter((t) => t.category === category);
        if (!same.length && def && category) return def;
        const pool = same.length ? same : hits;
        const own = pool.filter((t) => !types.get(t.extends) || (types.get(t.extends).workshop || {}).profile !== profile);
        if (own.length) return own.sort((a, b) => a.chain.length - b.chain.length)[0].id;
      }
      if (def) return def;
      return types.has("generic") ? "generic" : null;
    }
    function render(template, vars) {
      return String(template || "").replace(/\{\{\s*([a-zA-Z]+)\s*\}\}/g, (m, k) => k in vars ? String(vars[k]) : m);
    }
    var slugify = (s) => String(s || "").toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
    function readTypeNote(text, parseYaml) {
      const src = String(text || "").replace(/\r\n/g, "\n");
      const fm = src.match(/^---\n([\s\S]*?)\n---\n?/);
      let def = {};
      if (fm) {
        try {
          def = parseYaml(fm[1]) || {};
        } catch (e) {
          return { def: null, error: `Settings can't be read: ${e.message}` };
        }
      }
      const templates = {};
      for (const m of src.matchAll(/^## Template: ([a-z0-9-]+)[^\n]*\n+````markdown\n([\s\S]*?)\n````/gim)) templates[m[1].toLowerCase()] = m[2];
      if (Object.keys(templates).length) def.templates = templates;
      return { def, error: null };
    }
    function writeTypeNote(def, stringifyYaml) {
      const { templates = {}, file, chain, ...settings } = def;
      const intro = `# ${def.label || def.id}

A project type for EMX Vault Studio. Edit it in the Project types editor (Ctrl+P \u2192 "Project types"); the settings above and the templates below are what that editor saves.
`;
      const body = Object.entries(templates).map(([k, v]) => `
## Template: ${k}

\`\`\`\`markdown
${v}
\`\`\`\`
`).join("");
      return `---
${stringifyYaml(settings).trimEnd()}
---

${intro}${body}`;
    }
    module2.exports = { SCHEMA, NOTES, mergeType, validate, resolve, notePaths, typeFor, render, slugify, readTypeNote, writeTypeNote };
  }
});

// src/data/projects.js
var require_projects = __commonJS({
  "src/data/projects.js"(exports2, module2) {
    "use strict";
    var { STAGES } = require_constants();
    var { section } = require_util();
    var { notePaths } = require_types();
    var ProjectStore2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.cache = null;
        this.loading = null;
      }
      invalidate() {
        this.cache = null;
        this.loading = null;
        this.all().then(() => this.plugin.onProjectsChanged());
      }
      all() {
        if (this.cache) return Promise.resolve(this.cache);
        if (!this.loading) this.loading = this.load().then((r) => this.cache = r);
        return this.loading;
      }
      folders() {
        const out = [];
        const folders = this.plugin.types && this.plugin.types.folders() || ["Games", "Tools", "Archive"];
        for (const section2 of folders) {
          const f = this.app.vault.getAbstractFileByPath(section2);
          if (!f || !f.children) continue;
          for (const c of f.children.filter((x) => x.children).sort((a, b) => a.name.localeCompare(b.name))) {
            out.push({ name: c.name, section: section2, path: c.path });
          }
        }
        return out.map((f, index) => Object.assign(f, { index }));
      }
      // the project a note belongs to (cached details when loaded, else just its folder)
      find(path) {
        if (!path) return null;
        const f = this.folders().find((x) => path === x.path || path.startsWith(x.path + "/"));
        if (!f) return null;
        return this.cache && this.cache.find((p) => p.path === f.path) || this.blank(f);
      }
      blank(f) {
        return Object.assign({}, f, {
          hub: `${f.path}/${f.name}.md`,
          feel: `${f.path}/${f.name} - Feel tests.md`,
          decisions: `${f.path}/${f.name} - Decisions.md`,
          questions: `${f.path}/${f.name} - Open questions.md`,
          stage: "",
          stageIndex: -1,
          open: 0,
          review: 0,
          nextTask: "",
          next: "",
          changed: "",
          lastDate: null,
          quote: "",
          quoteDate: "",
          nQuestions: 0,
          nDecisions: 0,
          hasWorkshop: false,
          events: [],
          texts: {},
          live: null,
          brief: `${f.path}/${f.name} - Brief.md`
        });
      }
      // a note's text for reading only (Windows line endings made "\n", so CRLF notes parse like the rest)
      async read(path) {
        const a = this.app.vault.adapter;
        try {
          return await a.exists(path) ? (await a.read(path)).replace(/\r\n/g, "\n") : null;
        } catch (e) {
          return null;
        }
      }
      // newest thing a Claude session reported for this project (Workshop's runs/<task>/activity.jsonl)
      async latestActivity(f) {
        const a = this.app.vault.adapter, dir = `${f.path}/Repo - Workshop/runs`;
        try {
          if (!await a.exists(dir)) return null;
          let best = null;
          for (const task of (await a.list(dir)).folders) {
            const file = `${task}/activity.jsonl`;
            if (!await a.exists(file)) continue;
            const lines = (await a.read(file)).trim().split("\n");
            const last = JSON.parse(lines[lines.length - 1] || "null");
            if (!last || !last.at) continue;
            const at = Date.parse(last.at);
            if (!best || at > best.at) best = Object.assign({}, last, { at, task: task.split("/").pop(), dir: task });
          }
          return best;
        } catch (e) {
          return null;
        }
      }
      async load() {
        const out = [];
        if (this.plugin.types) await this.plugin.types.load();
        for (const f of this.folders()) {
          const p = this.blank(f);
          const pj = await this.read(`${f.path}/Repo - Workshop/project.json`);
          if (pj) {
            try {
              const d = JSON.parse(pj);
              p.hasWorkshop = true;
              p.stage = d.stage || "";
              p.stageIndex = STAGES.indexOf(p.stage);
              const open = (d.tasks || []).filter((t) => t.status !== "done");
              p.open = open.length;
              p.review = open.filter((t) => t.status === "review").length;
              const nt = open.find((t) => ["running", "todo", "queued"].includes(t.status)) || open[0];
              p.nextTask = nt ? nt.title : "";
              p.profile = d.profile || d.type || "";
            } catch (e) {
            }
          }
          if (this.plugin.types) {
            const hubText = await this.read(p.hub) || "";
            const fm = hubText.match(/^---\n[\s\S]*?\n---/);
            const hubType = fm ? (fm[0].match(/^emx-type:\s*["']?([a-z0-9-]+)/m) || [])[1] || "" : "";
            p.type = this.plugin.types.typeOf({ hubType, profile: p.profile, section: f.section });
            const t = this.plugin.types.get(p.type);
            const paths = notePaths(f.path, f.name, t);
            const classic = notePaths(f.path, f.name, null);
            for (const k of Object.keys(paths)) {
              if (paths[k] !== classic[k] && !await this.app.vault.adapter.exists(paths[k]) && await this.app.vault.adapter.exists(classic[k])) paths[k] = classic[k];
            }
            Object.assign(p, { feel: paths.feedback, decisions: paths.decisions, questions: paths.questions, brief: paths.brief, dashboard: paths.dashboard, feedbackLabel: paths.feedback === classic.feedback ? "Feel tests" : t && t.labels && t.labels.feedback || "Feel tests" });
          }
          const log = await this.read(`${f.path}/Repo - Workshop/log.md`);
          if (log) {
            const entries = log.split(/^## /m).slice(1);
            const last = entries[entries.length - 1];
            if (last) {
              const lines = last.split("\n");
              p.lastDate = Date.parse(lines[0].trim()) || null;
              for (const l of lines) {
                if (l.startsWith("Next:")) p.next = l.slice(5).trim();
                if (l.startsWith("Changed:")) p.changed = l.slice(8).trim();
              }
            }
          }
          const feel = await this.read(p.feel);
          if (feel) {
            const first = feel.split(/^### /m)[1];
            if (first) {
              p.quoteDate = first.split("\n")[0].split(":")[0].trim();
              const q = first.match(/"([^"\n]{4,}?)"/);
              if (q) p.quote = q[1];
            }
          }
          const qs = await this.read(p.questions);
          if (qs) p.nQuestions = (qs.match(/^- /gm) || []).length;
          const ds = await this.read(p.decisions);
          if (ds) p.nDecisions = (ds.match(/^### /gm) || []).length;
          p.texts = { hub: await this.read(p.hub) || "", feel: feel || "", decisions: ds || "", questions: qs || "" };
          const day = (d) => Date.parse(d + "T12:00:00") || null;
          if (log) {
            for (const entry of log.split(/^## /m).slice(1)) {
              const lines = entry.split("\n");
              const at = Date.parse(lines[0].trim());
              const ch = (lines.find((l) => l.startsWith("Changed:")) || "").slice(8).trim();
              if (at) p.events.push({ at, kind: "session", title: ch || "Session", path: `${f.path}/Repo - Workshop/log.md` });
            }
          }
          for (const m of (ds || "").matchAll(/^### (\d{4}-\d{2}-\d{2})[^:\n]*:\s*(.*)$/gm)) {
            p.events.push({ at: day(m[1]), kind: "decision", title: m[2].trim(), path: p.decisions, heading: m[0].slice(4) });
          }
          for (const m of (feel || "").matchAll(/^### (\d{4}-\d{2}-\d{2})(.*)$/gm)) {
            p.events.push({ at: day(m[1]), kind: "playtest", title: m[2].replace(/^[\s:]+/, "") || "Playtest", path: p.feel, heading: m[0].slice(4) });
          }
          p.events = p.events.filter((e) => e.at).sort((a, b) => b.at - a.at);
          p.live = await this.latestActivity(f);
          out.push(p);
        }
        return out;
      }
    };
    module2.exports = { ProjectStore: ProjectStore2 };
  }
});

// src/data/briefs.js
var require_briefs = __commonJS({
  "src/data/briefs.js"(exports2, module2) {
    "use strict";
    var { plainText, firstParagraph, section, bullets, clip, stamp } = require_util();
    var BriefWriter2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.writing = false;
      }
      brief(p) {
        const t = p.texts || {};
        const lines = [];
        lines.push(
          "---",
          "type: brief",
          `project: ${p.name}`,
          `generated: ${stamp()}`,
          "summary: One-page brief made by EMX Vault Studio from this project's notes and Workshop. Read it first; open the full notes only when you need detail.",
          "---",
          ""
        );
        lines.push(`# ${p.name}: brief`, "");
        lines.push("> [!next] Now");
        const now = [];
        if (p.hasWorkshop) now.push(`Stage **${p.stage}** \xB7 ${p.open} open task${p.open === 1 ? "" : "s"}${p.review ? ` (${p.review} for your review)` : ""}`);
        if (p.lastDate) now.push(`last session ${stamp(p.lastDate)}`);
        lines.push(`> ${now.join(" \xB7 ") || p.section}`);
        if (p.next) lines.push(`> **Next:** ${clip(p.next, 260)}`);
        if (p.nextTask && p.nextTask !== p.next) lines.push(`> **Task:** ${clip(p.nextTask, 160)}`);
        if (p.changed) lines.push(`> **Last change:** ${clip(p.changed, 300)}`);
        if (p.live && p.live.text) lines.push(`> **Latest session note** (${stamp(p.live.at)}): ${clip(p.live.text, 200)}`);
        lines.push("");
        const what = firstParagraph(section(t.hub, "What it is"));
        if (what) lines.push("## What it is", "", clip(what, 600), "");
        const rules = bullets(section(t.hub, "Rules|Your rules"));
        if (rules.length) lines.push("## Rules", "", ...rules.slice(0, 7).map((r) => `- ${clip(r, 200)}`), "");
        const settled = p.events.filter((e) => e.kind === "decision");
        if (settled.length) {
          lines.push("## Settled (don't re-open without new evidence)", "");
          for (const e of settled.slice(0, 10)) lines.push(`- ${new Date(e.at).toISOString().slice(0, 10)}: ${clip(plainText(e.title), 140)}`);
          if (settled.length > 10) lines.push(`- \u2026and ${settled.length - 10} older in [[${p.decisions.replace(/\.md$/, "")}|Decisions]]`);
          lines.push("");
        }
        const g = this.plugin.guard;
        if (g && g.all && g.all.length) {
          const sum = g.summaryFor(p.path);
          const lines2 = [];
          for (const f of sum.conflicts.slice(0, 6)) lines2.push(`- Checked conflict in ${f.task ? `task ${f.task}` : `[[${f.path.replace(/\.md$/, "")}]]`}: "${clip(f.match, 60)}". ${clip(f.why, 160)}`);
          for (const d of sum.needsReview.slice(0, 5)) lines2.push(`- Needs a review: ${d.date} ${clip(d.title, 100)} (${clip(((g.reviews[d.id] || {}).hints || []).map((h) => h.text).join("; "), 140)})`);
          if (sum.suggestions.length) lines2.push(`- ${sum.suggestions.length} suggestion(s) from Claude in [[${g.reviewNote(p).replace(/\.md$/, "")}|Decision review]] (not checked)`);
          if (lines2.length) lines.push("## Decision guard", "", "Before changing anything these touch, ask the user. Warnings only advise.", "", ...lines2, "");
        }
        const qs = bullets(t.questions);
        if (qs.length) lines.push("## Open questions", "", ...qs.slice(0, 6).map((q) => `- ${clip(q, 160)}`), "");
        const first = (t.feel || "").split(/^### /m)[1];
        if (first) {
          const head = first.split("\n")[0].split(":")[0].trim();
          const quotes = Array.from(first.matchAll(/"([^"\n]{4,})"/g)).map((m) => m[1]);
          if (quotes.length) {
            lines.push(`## Latest playtest (${head}, your words)`, "");
            for (const q of quotes.slice(0, 4)) lines.push(`- "${clip(q, 160)}"`);
            lines.push("");
          }
        }
        const done = bullets(section(t.hub, "Done means"));
        if (done.length) lines.push("## Done means", "", ...done.map((d) => `- ${d}`), "");
        const links = [`[[${p.hub.replace(/\.md$/, "")}|Hub]]`, `[[${p.feel.replace(/\.md$/, "")}|Feel tests]]`, `[[${p.decisions.replace(/\.md$/, "")}|Decisions]]`, `[[${p.questions.replace(/\.md$/, "")}|Open questions]]`];
        if (/\bRBX\b|roblox/i.test(p.name + t.hub)) links.push("[[_techniques/Roblox/Roblox|Roblox hub]]");
        lines.push("## Full notes", "", links.join(" \xB7 "), "");
        return lines.join("\n");
      }
      index() {
        const vault = this.app.vault, cache = this.app.metadataCache;
        const libs = String(this.plugin.settings.graph.libraries || "").split(",").map((x) => x.trim()).filter(Boolean);
        const notes = vault.getMarkdownFiles().filter((f) => !/(^|\/)Repo - /.test(f.path) && !f.path.startsWith("_templates/") && !libs.some((l) => f.path.startsWith(l + "/")) && f.path !== "_techniques/Vault index.md" && !/\/Recaps\/|^_techniques\/Workshop recaps\//.test(f.path)).sort((a, b) => a.path.localeCompare(b.path));
        const own = libs.map((l) => [`${l}/INDEX.md`, `${l}/VAULT_INDEX.md`].find((p) => vault.getAbstractFileByPath(p))).filter(Boolean);
        const libLine = own.length ? ` Linked libraries have their own: ${own.map((p) => `[[${p.replace(/\.md$/, "")}|${p.split("/").slice(-2, -1)[0]} index]]`).join(", ")}.` : "";
        const lines = [
          "---",
          "type: index",
          `generated: ${stamp()}`,
          "summary: One line per note in this vault (not the linked library or repo docs), made by EMX Vault Studio. Claude searches this before opening notes.",
          "---",
          "",
          "# Vault index",
          "",
          `${notes.length} notes.${libLine}`,
          ""
        ];
        for (const f of notes) {
          const c = cache.getFileCache(f) || {};
          const fm = c.frontmatter || {};
          const tags = [].concat(fm.tags || [], fm.type ? [fm.type] : []).filter(Boolean).join(", ");
          const what = fm.summary || this.firstLines.get(f.path) || "";
          lines.push(`- [[${f.path.replace(/\.md$/, "")}|${f.basename}]]${tags ? ` \xB7 ${tags}` : ""}${what ? ` \xB7 ${clip(plainText(String(what)), 150)}` : ""}`);
        }
        return lines.join("\n") + "\n";
      }
      // writes a generated note only when its content (ignoring the timestamp) changed, so nothing churns
      async put(path, text) {
        const vault = this.app.vault;
        const same = (a, b) => a.replace(/^generated: .*$/m, "") === b.replace(/^generated: .*$/m, "");
        const f = vault.getAbstractFileByPath(path);
        if (f) {
          const old = await vault.read(f);
          if (same(old, text)) return false;
          await vault.modify(f, text);
        } else {
          await vault.create(path, text);
        }
        return true;
      }
      async writeAll() {
        if (this.writing || !this.plugin.settings.briefs.on) return;
        this.writing = true;
        try {
          const projects = await this.plugin.store.all();
          for (const p of projects) if (p.section !== "Archive" && this.app.vault.getAbstractFileByPath(p.hub)) await this.put(p.brief, this.brief(p));
          this.firstLines = /* @__PURE__ */ new Map();
          for (const f of this.app.vault.getMarkdownFiles()) {
            if (/(^|\/)Repo - /.test(f.path) || f.path.includes("LihFolk Vault")) continue;
            this.firstLines.set(f.path, firstParagraph(await this.app.vault.cachedRead(f)).split(/(?<=[.!?])\s/)[0] || "");
          }
          await this.put("_techniques/Vault index.md", this.index());
        } catch (e) {
          console.error("EMX Vault Studio: briefs", e);
        } finally {
          this.writing = false;
        }
      }
    };
    module2.exports = { BriefWriter: BriefWriter2 };
  }
});

// src/data/inbox.js
var require_inbox = __commonJS({
  "src/data/inbox.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2 } = require("obsidian");
    var { partOfDay: partOfDay2, stamp } = require_util();
    var PlaytestInbox2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
      }
      // %LOCALAPPDATA%/EMX/<game>/buildlog.jsonl for a project whose repo folder ends with <game>
      logFor(p) {
        const fs = require("fs"), path = require("path");
        const base = path.join(process.env.LOCALAPPDATA || "", "EMX");
        if (!fs.existsSync(base)) return null;
        const repo = (p.texts.hub.match(/projects[\\/]([\w.-]+)/) || [])[1] || "";
        for (const d of fs.readdirSync(base)) {
          if (repo && repo.endsWith(d) && fs.existsSync(path.join(base, d, "buildlog.jsonl"))) return path.join(base, d, "buildlog.jsonl");
        }
        return null;
      }
      async run() {
        const s = this.plugin.settings;
        if (!s.playtest.on) return;
        const fs = require("fs");
        for (const p of await this.plugin.store.all()) {
          const type = this.plugin.types && this.plugin.types.get(p.type);
          if (type && !(type.capabilities || []).includes("buildlog")) continue;
          const file = this.logFor(p);
          if (!file) continue;
          const rows = fs.readFileSync(file, "utf8").trim().split("\n").map((l) => {
            try {
              return JSON.parse(l);
            } catch (e) {
              return null;
            }
          }).filter(Boolean);
          const seen = s.playtest.seen[p.name] || "";
          const fresh = rows.filter((r) => r.kind === "note" && r.text && String(r.at) > seen);
          if (fresh.length) {
            await this.toFeelTests(p, fresh);
            s.playtest.seen[p.name] = String(fresh[fresh.length - 1].at);
            this.plugin.saveSoon();
          }
          await this.flagsNote(p, rows);
        }
      }
      // your typed in-game notes are your words: they go to the top of Feel tests as one dated entry
      async toFeelTests(p, notes) {
        const vault = this.app.vault;
        let file = vault.getAbstractFileByPath(p.feel);
        if (!file) file = await vault.create(p.feel, `# ${p.name}: feel tests

Newest at the top. Your words from playtests go here.
`);
        const day = String(notes[0].at).slice(0, 10);
        const entry = `### ${day} ${partOfDay2(/* @__PURE__ */ new Date())}: in-game notes (typed while playing, copied by EMX Vault Studio)

` + notes.map((n) => `- "${String(n.text).replace(/"/g, "'")}"${n.where ? ` (${n.where})` : ""} [${String(n.at).slice(11, 16)}]`).join("\n") + "\n\n";
        await vault.process(file, (text) => {
          const i = text.search(/^### /m);
          const at = i >= 0 ? i : text.length;
          const before = text.slice(0, at);
          return before + (before.endsWith("\n\n") ? "" : "\n") + entry + text.slice(at);
        });
        new Notice2(`${notes.length} in-game note${notes.length === 1 ? "" : "s"} added to ${p.name} - Feel tests`);
      }
      // flagged bad builds and misses, newest first, for Claude to work from
      async flagsNote(p, rows) {
        const flags = rows.filter((r) => r.kind !== "note").slice(-40).reverse();
        if (!flags.length) return;
        const lines = [
          "---",
          "type: playtest-log",
          `project: ${p.name}`,
          `generated: ${stamp()}`,
          "summary: Builds you flagged (M) and placements that missed, from the game's build log. Made by EMX Vault Studio.",
          "---",
          "",
          `# ${p.name}: playtest flags`,
          "",
          "Newest first. Your typed in-game notes go to Feel tests instead.",
          ""
        ];
        for (const r of flags) {
          const what = r.reason || r.kind || "flag";
          lines.push(`- **${r.at || "?"}** \xB7 ${what}${r.piece ? ` \xB7 ${r.piece}` : ""}${r.flagged ? " \xB7 flagged by you" : ""}`);
        }
        await this.plugin.briefs.put(`${p.path}/${p.name} - Playtest flags.md`, lines.join("\n") + "\n");
      }
    };
    module2.exports = { PlaytestInbox: PlaytestInbox2 };
  }
});

// src/core/backup.js
var require_backup = __commonJS({
  "src/core/backup.js"(exports2, module2) {
    "use strict";
    var MAX_BYTES = 50 * 1024 * 1024;
    var SECRET_RULES = [
      ["anthropic-or-openai-key", /\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{24,}/],
      ["github-token", /\bgh[pousr]_[A-Za-z0-9]{36,}/],
      ["github-fine-grained-token", /\bgithub_pat_[A-Za-z0-9_]{40,}/],
      ["aws-access-key", /\bAKIA[0-9A-Z]{16}\b/],
      ["slack-token", /\bxox[abprs]-[A-Za-z0-9-]{10,}/],
      ["private-key", /-----BEGIN [A-Z ]*PRIVATE KEY-----/],
      ["google-api-key", /\bAIza[0-9A-Za-z_-]{35}\b/],
      ["stripe-live-key", /\b[sr]k_live_[0-9a-zA-Z]{24,}/],
      ["roblox-cookie", /_\|WARNING:-DO-NOT-SHARE-THIS/],
      ["discord-bot-token", /\b[MN][A-Za-z\d]{23,25}\.[\w-]{6}\.[\w-]{27,}\b/],
      ["cloudflare-or-r2-key", /\b(?:CLOUDFLARE|R2)_[A-Z_]*(?:KEY|TOKEN|SECRET)\s*[:=]\s*["']?[A-Za-z0-9_-]{30,}/],
      ["assigned-secret", /\b(?:api[_-]?key|secret|access[_-]?token|auth[_-]?token|password)\s*[:=]\s*["']?[A-Za-z0-9_\-/+]{24,}["']?/i]
    ];
    function parseStatus(z) {
      const out = [];
      const parts = String(z || "").split("\0");
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        if (p.length < 4) continue;
        const code = p.slice(0, 2), path = p.slice(3);
        const entry = { code, path };
        if (code[0] === "R" || code[0] === "C") entry.from = parts[++i];
        out.push(entry);
      }
      return out;
    }
    function findSecrets(diff) {
      const found = [];
      let file = null, line = 0;
      for (const l of String(diff || "").split("\n")) {
        if (l.startsWith("+++ ")) {
          file = l.startsWith("+++ b/") ? l.slice(6) : null;
          continue;
        }
        const hunk = l.match(/^@@ -\d+(?:,\d+)? \+(\d+)/);
        if (hunk) {
          line = +hunk[1];
          continue;
        }
        if (!file || !l.startsWith("+")) continue;
        for (const [rule, re] of SECRET_RULES) {
          if (re.test(l)) {
            found.push({ file, line, rule });
            break;
          }
        }
        line++;
      }
      return found;
    }
    var shortName = (p) => p.split("/").pop().replace(/\.md$/, "");
    function commitMessage(changes) {
      const names = [...new Set(changes.map((c) => shortName(c.path)))];
      const shown = names.slice(0, 3).join(", ");
      const more = names.length > 3 ? ` and ${names.length - 3} more` : "";
      return `Vault backup: ${shown}${more} (${changes.length} file${changes.length === 1 ? "" : "s"})`;
    }
    function aheadOf(branchLine) {
      const m = String(branchLine || "").match(/\[ahead (\d+)/);
      return m ? +m[1] : 0;
    }
    function parseLog(text) {
      return String(text || "").split("\n").filter(Boolean).map((l) => {
        const [hash2, iso, subject] = l.split("");
        return { hash: hash2, at: Date.parse(iso), subject: subject || "" };
      }).filter((c) => c.hash && c.at);
    }
    module2.exports = { MAX_BYTES, SECRET_RULES, parseStatus, findSecrets, commitMessage, aheadOf, parseLog, shortName };
  }
});

// src/data/backup.js
var require_backup2 = __commonJS({
  "src/data/backup.js"(exports2, module2) {
    "use strict";
    var { MAX_BYTES, parseStatus, findSecrets, commitMessage, aheadOf } = require_backup();
    var { ago } = require_util();
    function nodeGit() {
      try {
        return { cp: require("child_process"), fs: require("fs"), path: require("path"), os: require("os") };
      } catch (e) {
        return null;
      }
    }
    var VaultBackup2 = class {
      // opts.git(args) and opts.gitleaks(dir) can be swapped for tests
      constructor(plugin, opts = {}) {
        this.plugin = plugin;
        this.node = nodeGit();
        this.dir = opts.dir || (plugin.app.vault.adapter.getBasePath ? plugin.app.vault.adapter.getBasePath() : null);
        this.runGit = opts.git || ((args) => this.exec("git", ["-c", "core.quotepath=false", ...args]));
        this.runGitleaks = opts.gitleaks === void 0 ? (dir) => this.gitleaks(dir) : opts.gitleaks;
        this.busy = false;
        this.state = { result: "idle", detail: "", last: 0, lastCommit: 0, ahead: 0 };
        this.warned = /* @__PURE__ */ new Set();
        this.onChange = () => {
        };
      }
      get settings() {
        return this.plugin.settings.backup;
      }
      exec(cmd, args, input) {
        const { cp } = this.node;
        return new Promise((resolve, reject) => {
          const child = cp.execFile(cmd, args, { cwd: this.dir, windowsHide: true, maxBuffer: 64 * 1024 * 1024, encoding: "utf8" }, (err, stdout, stderr) => {
            if (err) {
              err.stderr = String(stderr || "").trim();
              err.message = err.stderr.split("\n")[0] || err.message;
              reject(err);
            } else resolve(stdout);
          });
          if (input !== void 0) child.stdin.end(input);
        });
      }
      // one line for the status bar and settings
      describe() {
        const s = this.state, when = s.lastCommit ? ago(s.lastCommit) : s.last ? `checked ${ago(s.last)}` : "";
        switch (s.result) {
          case "ok":
            return s.lastCommit ? `Backed up ${when}` : `Up to date${when ? ` (${when})` : ""}`;
          case "paused":
            return `Backup paused: ${s.detail}`;
          case "push-failed":
            return `Saved here, push failed: ${s.detail}`;
          case "blocked":
            return `Backup off: ${s.detail}`;
          case "error":
            return `Backup error: ${s.detail}`;
          case "off":
            return "Automatic backup is off";
          default:
            return "Backup waiting for its first run";
        }
      }
      set(result, detail = "") {
        Object.assign(this.state, { result, detail, last: Date.now() });
        this.onChange(this.state);
        return this.state;
      }
      // why a backup can't run right now (null when it can)
      async blocker() {
        if (!this.node || !this.dir) return "Backups need the desktop app";
        const { fs, path } = this.node;
        let top;
        try {
          top = (await this.runGit(["rev-parse", "--show-toplevel"])).trim();
        } catch (e) {
          return "The vault isn't a git repo yet";
        }
        if (path.resolve(top).toLowerCase() !== path.resolve(this.dir).toLowerCase()) return `The vault is inside another repo (${top}), not its own`;
        const g = path.join(this.dir, ".git");
        for (const f of ["index.lock", "MERGE_HEAD", "REBASE_HEAD", "CHERRY_PICK_HEAD", "rebase-merge", "rebase-apply"]) {
          if (fs.existsSync(path.join(g, f))) return `Git is busy (${f}): finish or undo that first`;
        }
        try {
          await this.runGit(["symbolic-ref", "-q", "HEAD"]);
        } catch (e) {
          return "Not on a branch (detached HEAD)";
        }
        return null;
      }
      // every linked folder (junction or symlink) in the vault, up to four levels down: what they point to lives in its
      // own repo, so the backup never commits through one, whatever .gitignore says
      linkedFolders() {
        const { fs, path } = this.node;
        const out = [];
        const walk = (rel, depth) => {
          let entries;
          try {
            entries = fs.readdirSync(path.join(this.dir, rel), { withFileTypes: true });
          } catch (e) {
            return;
          }
          for (const e of entries) {
            if (e.name === ".git" || e.name === ".obsidian" || e.name === ".trash") continue;
            const r = rel ? `${rel}/${e.name}` : e.name;
            if (e.isSymbolicLink()) out.push(r);
            else if (e.isDirectory() && depth < 4) walk(r, depth + 1);
          }
        };
        walk("", 0);
        return out;
      }
      // files over MAX_BYTES stay out: listed in .git/info/exclude when new, skipped from the commit when tracked
      tooBig(changes) {
        const { fs, path } = this.node;
        return changes.filter((c) => {
          try {
            return fs.statSync(path.join(this.dir, c.path)).size > MAX_BYTES;
          } catch (e) {
            return false;
          }
        });
      }
      excludeNew(paths) {
        if (!paths.length) return;
        const { fs, path } = this.node;
        const file = path.join(this.dir, ".git", "info", "exclude");
        fs.mkdirSync(path.dirname(file), { recursive: true });
        const have = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
        const add = paths.filter((p) => !have.split(/\r?\n/).includes("/" + p));
        if (add.length) fs.appendFileSync(file, (have && !have.endsWith("\n") ? "\n" : "") + "# too big for the backup (EMX Vault Studio)\n" + add.map((p) => "/" + p).join("\n") + "\n");
      }
      // gitleaks on what's staged; null when it isn't installed
      async gitleaks(dir) {
        const { fs, path, os } = this.node;
        const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "evs-leaks-"));
        const report = path.join(tmp, "report.json");
        try {
          await this.exec("gitleaks", ["git", "--staged", "--report-format", "json", "--report-path", report, "--no-banner", "--exit-code", "0", dir]);
          const raw = fs.existsSync(report) ? JSON.parse(fs.readFileSync(report, "utf8") || "[]") : [];
          return (raw || []).map((f) => ({ file: f.File, line: f.StartLine, rule: f.RuleID }));
        } catch (e) {
          return e.code === "ENOENT" ? null : [];
        } finally {
          fs.rmSync(tmp, { recursive: true, force: true });
        }
      }
      async push() {
        if (!this.settings.push) return true;
        const remotes = (await this.runGit(["remote"])).trim();
        if (!remotes) return true;
        try {
          await this.runGit(["push", "-q"]);
          this.state.ahead = 0;
          return true;
        } catch (e) {
          this.set("push-failed", e.message);
          return false;
        }
      }
      // one backup: commit what changed, then push. Returns the state
      async run({ manual = false } = {}) {
        if (this.busy) return this.state;
        if (!manual && !this.settings.on) return this.set("off");
        this.busy = true;
        try {
          const why = await this.blocker();
          if (why) return this.set("blocked", why);
          const status = await this.runGit(["status", "--porcelain=v1", "-z", "--untracked-files=all"]);
          const changes = parseStatus(status);
          if (!changes.length) {
            this.state.ahead = aheadOf((await this.runGit(["status", "-sb", "--porcelain=v1"])).split("\n")[0]);
            if (this.state.ahead && !await this.push()) return this.state;
            return this.set("ok", "Nothing new");
          }
          const links = this.linkedFolders();
          this.excludeNew(links.map((l) => l + "/"));
          const tracked = links.length ? (await this.runGit(["ls-files", "-z", "--", ...links])).split("\0").filter(Boolean) : [];
          if (tracked.length) await this.runGit(["rm", "-r", "-q", "--cached", "--", ...links]);
          const big = this.tooBig(changes.filter((c) => !links.some((l) => c.path === l || c.path.startsWith(l + "/"))));
          this.excludeNew(big.filter((c) => c.code === "??").map((c) => c.path));
          for (const c of big) {
            if (!this.warned.has(c.path)) this.plugin.notify?.(`Backup skips ${c.path}: over ${MAX_BYTES / 1048576} MB`);
            this.warned.add(c.path);
          }
          const keepOut = big.filter((c) => c.code !== "??").map((c) => `:(exclude,literal)${c.path}`);
          await this.runGit(["add", "-A", "--", ".", ...keepOut]);
          const staged = await this.runGit(["diff", "--cached", "--name-only", "-z"]);
          const names = staged.split("\0").filter(Boolean);
          if (!names.length) return this.set("ok", "Nothing new");
          const found = findSecrets(await this.runGit(["diff", "--cached", "-U0", "--no-color", "--no-ext-diff"]));
          const leaks = this.runGitleaks ? await this.runGitleaks(this.dir) : null;
          const secrets = found.concat(leaks || []);
          if (secrets.length) {
            await this.runGit(["reset", "-q"]);
            const where = [...new Set(secrets.map((s) => `${s.file}${s.line ? `:${s.line}` : ""}`))].join(", ");
            const key = "secret:" + where;
            if (!this.warned.has(key)) this.plugin.notify?.(`Backup paused: what looks like a secret (${secrets[0].rule}) is in ${where}. Remove it or move it to a git-ignored file.`, 15e3);
            this.warned.add(key);
            return this.set("paused", `Possible secret in ${where}`);
          }
          await this.runGit(["commit", "-q", "--no-verify", "-m", commitMessage(names.map((path) => ({ path })))]);
          this.state.lastCommit = Date.now();
          this.state.ahead++;
          if (!await this.push()) return this.state;
          return this.set("ok", `${names.length} file${names.length === 1 ? "" : "s"} backed up${leaks === null ? " (gitleaks not installed: built-in secret check only)" : ""}`);
        } catch (e) {
          return this.set("error", e.message || String(e));
        } finally {
          this.busy = false;
        }
      }
      // ---- history: earlier versions of a note, and notes that were deleted ----
      // [{ hash, at, subject, path }] newest first; path is the note's name in that version (renames are followed)
      async history(file, limit = 60) {
        const out = await this.runGit(["log", "--follow", `-n${limit}`, "--format=%x1e%H%x1f%aI%x1f%s", "--name-only", "--", file]);
        return out.split("").filter((r) => r.trim()).map((r) => {
          const [head, ...rest] = r.split("\n");
          const [hash2, iso, subject] = head.split("");
          return { hash: hash2, at: Date.parse(iso), subject, path: rest.map((x) => x.trim()).filter(Boolean).pop() || file };
        });
      }
      async version(hash2, path) {
        return this.runGit(["show", `${hash2}:${path}`]);
      }
      // notes deleted since the backup started, newest first, each with the version just before it went
      async deleted(limit = 300) {
        const out = await this.runGit(["log", "--diff-filter=D", `-n${limit}`, "--format=%x1e%H%x1f%aI%x1f%s", "--name-only"]);
        const seen = /* @__PURE__ */ new Set(), list = [];
        for (const r of out.split("").filter((x) => x.trim())) {
          const [head, ...rest] = r.split("\n");
          const [hash2, iso] = head.split("");
          for (const p of rest.map((x) => x.trim()).filter(Boolean)) {
            if (seen.has(p)) continue;
            seen.add(p);
            list.push({ path: p, at: Date.parse(iso), from: `${hash2}^` });
          }
        }
        return list;
      }
    };
    module2.exports = { VaultBackup: VaultBackup2 };
  }
});

// src/core/workshop.js
var require_workshop = __commonJS({
  "src/core/workshop.js"(exports2, module2) {
    "use strict";
    var { STAGES } = require_constants();
    var COLUMNS = [
      ["running", "Running"],
      ["queued", "Queued"],
      ["todo", "To do"],
      ["review", "For your review"],
      ["blocked", "Blocked"]
    ];
    var KINDS = ["feature", "bug", "asset", "polish", "ship", "custom"];
    function board(pj) {
      const tasks = (pj && Array.isArray(pj.tasks) ? pj.tasks : []).slice();
      const byOrder = (a, b) => (a.order ?? 0) - (b.order ?? 0) || (b.priority ?? 0) - (a.priority ?? 0) || idNum(a.id) - idNum(b.id);
      const columns = COLUMNS.map(([status, label]) => ({ status, label, tasks: tasks.filter((t) => t.status === status).sort(byOrder) }));
      const known = new Set(COLUMNS.map((c) => c[0]).concat("done"));
      for (const t of tasks) if (!known.has(t.status)) columns[2].tasks.push(t);
      const done = tasks.filter((t) => t.status === "done").sort((a, b) => idNum(b.id) - idNum(a.id));
      return { columns, done, total: tasks.length };
    }
    var idNum = (id) => +(String(id || "").match(/\d+/) || [0])[0];
    function checklist(pj) {
      const stage = pj && pj.stage || STAGES[0];
      const index = STAGES.indexOf(stage);
      const items = (pj && pj.checklists && pj.checklists[stage] || []).map((c) => ({ id: c.id, text: c.text, done: !!c.done, evidence: c.evidence || "" }));
      const left = items.filter((c) => !c.done).length;
      return { stage, index, items, left, complete: left === 0, next: STAGES[index + 1] || null };
    }
    function actionsFor(t) {
      const a = [];
      if (["todo", "blocked"].includes(t.status)) a.push("queue");
      if (["todo", "queued"].includes(t.status)) a.push("play");
      if (t.status !== "blocked" && t.status !== "done") a.push("block");
      if (t.status !== "done") a.push("note");
      if (t.status === "review") a.push("done-in-terminal");
      return a;
    }
    var one = (s, max) => String(s || "").replace(/\s+/g, " ").trim().slice(0, max);
    var cli = {
      add({ title, details, accept, kind }) {
        const t = one(title, 200);
        if (!t) throw new Error("A task needs a title");
        const args = ["task", "add", t];
        if (one(details, 2e3)) args.push("--details", one(details, 2e3));
        for (const a of String(accept || "").split("\n").map((x) => one(x, 300)).filter(Boolean)) args.push("--accept", a);
        if (kind && KINDS.includes(kind)) args.push("--kind", kind);
        return args;
      },
      queue: (id) => ["task", "queue", id],
      play: (id) => ["play", id],
      block(id, reason) {
        if (!one(reason, 500)) throw new Error("Say why it's blocked");
        return ["task", "block", id, "--reason", one(reason, 500)];
      },
      note(id, text) {
        if (!one(text, 2e3)) throw new Error("The note is empty");
        return ["task", "note", id, one(text, 2e3)];
      },
      check(stage, itemId, evidence) {
        const args = ["check", stage, itemId];
        if (one(evidence, 1e3)) args.push("--evidence", one(evidence, 1e3));
        return args;
      },
      advance: () => ["stage", "advance"]
    };
    function activity(text, limit = 8) {
      const out = [];
      for (const l of String(text || "").split("\n")) {
        if (!l.trim()) continue;
        try {
          const e = JSON.parse(l);
          if (e && e.at) out.push(e);
        } catch (e) {
        }
      }
      return out.sort((a, b) => Date.parse(b.at) - Date.parse(a.at)).slice(0, limit);
    }
    function describeEvent(e) {
      if (e.kind === "test" || e.kind === "tests") return `Tests: ${e.passed ?? "?"} passed, ${e.failed ?? "?"} failed${e.command ? ` (${e.command})` : ""}`;
      if (e.kind === "shot") return `Screenshot${e.caption ? `: ${e.caption}` : ""}`;
      return e.text || e.kind || "";
    }
    module2.exports = { COLUMNS, KINDS, board, checklist, actionsFor, cli, activity, describeEvent };
  }
});

// src/data/workshop.js
var require_workshop2 = __commonJS({
  "src/data/workshop.js"(exports2, module2) {
    "use strict";
    var { activity } = require_workshop();
    var DEFAULT_BIN = "C:\\EMX\\Workshop\\bin\\workshop.cjs";
    var WorkshopCli2 = class {
      // opts.exec(cmd, args, options) can be swapped for tests
      constructor(plugin, opts = {}) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.execImpl = opts.exec || null;
      }
      node() {
        try {
          return { cp: require("child_process"), fs: require("fs"), path: require("path") };
        } catch (e) {
          return null;
        }
      }
      get bin() {
        return this.plugin.settings.workshop && this.plugin.settings.workshop.bin || DEFAULT_BIN;
      }
      // the project's repo folder (where its .workshop lives), from the vault folder's Repo - Workshop junction
      repoDir(p) {
        const n = this.node();
        if (!n || !p) return null;
        const base = this.app.vault.adapter.getBasePath ? this.app.vault.adapter.getBasePath() : null;
        if (!base) return null;
        try {
          return n.path.dirname(n.fs.realpathSync(n.path.join(base, p.path, "Repo - Workshop")));
        } catch (e) {
          return null;
        }
      }
      exec(cmd, args, options) {
        if (this.execImpl) return this.execImpl(cmd, args, options);
        const { cp } = this.node();
        return new Promise((resolve, reject) => {
          cp.execFile(cmd, args, options, (err, stdout, stderr) => {
            const out = String(stdout || "").trim(), errText = String(stderr || "").trim();
            if (err) {
              const e = new Error(errText.split("\n").pop() || out.split("\n").pop() || err.message);
              e.code = err.code;
              reject(e);
            } else resolve(out);
          });
        });
      }
      // runs `workshop <args>` in the project's repo; resolves with what it printed
      async run(p, args) {
        const n = this.node();
        if (!n) throw new Error("Workshop control needs the desktop app");
        const cwd = this.repoDir(p);
        if (!cwd) throw new Error(`${p ? p.name : "This project"} has no Repo - Workshop link`);
        if (!n.fs.existsSync(this.bin)) throw new Error(`workshop CLI not found at ${this.bin} (set it in Settings \u2192 EMX Vault Studio)`);
        const options = { cwd, windowsHide: true, timeout: 6e4, maxBuffer: 8 * 1024 * 1024, env: Object.assign({}, process.env) };
        try {
          return await this.exec("node", [this.bin, ...args], options);
        } catch (e) {
          if (e.code !== "ENOENT") throw e;
          options.env.ELECTRON_RUN_AS_NODE = "1";
          return this.exec(process.execPath, [this.bin, ...args], options);
        }
      }
      // project.json as Workshop last wrote it
      async state(p) {
        const raw = await this.plugin.store.read(`${p.path}/Repo - Workshop/project.json`);
        if (!raw) return null;
        try {
          return JSON.parse(raw);
        } catch (e) {
          return null;
        }
      }
      // recent activity and screenshots of one task
      async activity(p, id, limit = 6) {
        const raw = await this.plugin.store.read(`${p.path}/Repo - Workshop/runs/${id}/activity.jsonl`);
        return activity(raw, limit).map((e) => e.kind === "shot" && e.file ? Object.assign({}, e, { path: `${p.path}/Repo - Workshop/runs/${id}/shots/${e.file}` }) : e);
      }
    };
    module2.exports = { WorkshopCli: WorkshopCli2, DEFAULT_BIN };
  }
});

// src/views/tasks.js
var require_tasks = __commonJS({
  "src/views/tasks.js"(exports2, module2) {
    "use strict";
    var { ItemView, Modal, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var { TASKS: TASKS2, STAGES } = require_constants();
    var { ago, clip } = require_util();
    var { KINDS, board, checklist, actionsFor, cli, describeEvent } = require_workshop();
    var TextPrompt = class extends Modal {
      constructor(app, { title, label, placeholder, button, optional }, done) {
        super(app);
        Object.assign(this, { heading: title, label, placeholder, button, optional, done });
      }
      onOpen() {
        this.modalEl.addClass("evs-prompt");
        this.titleEl.setText(this.heading);
        if (this.label) this.contentEl.createDiv({ cls: "evs-prompt-label", text: this.label });
        const ta = this.contentEl.createEl("textarea", { attr: { rows: 4, placeholder: this.placeholder || "" } });
        const row = this.contentEl.createDiv({ cls: "evs-prompt-row" });
        const ok = row.createEl("button", { cls: "mod-cta", text: this.button || "Save" });
        row.createEl("button", { text: "Cancel" }).onclick = () => this.close();
        const submit = () => {
          if (!this.optional && !ta.value.trim()) return ta.focus();
          this.close();
          this.done(ta.value);
        };
        ok.onclick = submit;
        ta.addEventListener("keydown", (e) => {
          if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) submit();
        });
        setTimeout(() => ta.focus(), 30);
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    var TasksView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.projectPath = null;
        this.showDone = false;
        this.busy = false;
      }
      getViewType() {
        return TASKS2;
      }
      getDisplayText() {
        return this.project ? `Tasks: ${this.project.name}` : "Workshop tasks";
      }
      getIcon() {
        return "list-checks";
      }
      getState() {
        return { project: this.projectPath, showDone: this.showDone };
      }
      async setState(state, result) {
        if (state && state.project) this.projectPath = state.project;
        if (state && "showDone" in state) this.showDone = !!state.showDone;
        await super.setState(state, result);
        await this.render();
      }
      async onOpen() {
        this.contentEl.addClass("evs-tasks-view");
        await this.render();
      }
      // one CLI change, then a fresh board
      async act(args, okText) {
        if (this.busy) return;
        this.busy = true;
        this.contentEl.addClass("is-busy");
        try {
          const out = await this.plugin.workshop.run(this.project, args);
          new Notice2(okText || out || "Done");
        } catch (e) {
          new Notice2(`Workshop: ${e.message}`, 1e4);
        } finally {
          this.busy = false;
          this.contentEl.removeClass("is-busy");
          this.plugin.store.invalidate();
          await this.render();
        }
      }
      prompt(opts, then) {
        new TextPrompt(this.app, opts, then).open();
      }
      async render() {
        const el = this.contentEl, plugin = this.plugin;
        const projects = (await plugin.store.all()).filter((p2) => p2.hasWorkshop);
        if (!this.projectPath || !projects.some((p2) => p2.path === this.projectPath)) {
          const here = plugin.store.find(this.app.workspace.getActiveFile()?.path);
          const recent = projects.filter((p2) => p2.section !== "Archive").sort((a, b2) => (b2.lastDate || 0) - (a.lastDate || 0) || b2.open - a.open)[0];
          this.projectPath = (here && projects.some((p2) => p2.path === here.path) ? here : recent || projects[0] || {}).path || null;
        }
        const p = this.project = projects.find((x) => x.path === this.projectPath) || null;
        const pj = p ? await plugin.workshop.state(p) : null;
        el.empty();
        this.leaf.updateHeader?.();
        if (p) el.style.setProperty("--p", plugin.projStyle(p).color);
        const head = el.createDiv({ cls: "evs-tk-head" });
        const pick = head.createEl("select", { cls: "dropdown evs-tk-pick" });
        for (const x of projects) pick.createEl("option", { value: x.path, text: `${x.name} \xB7 ${x.open} open` });
        pick.value = this.projectPath || "";
        pick.onchange = () => {
          this.projectPath = pick.value;
          this.app.workspace.requestSaveLayout();
          this.render();
        };
        const tools = head.createDiv({ cls: "evs-tk-tools" });
        const tool = (icon, label, fn) => {
          const b2 = tools.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b2, icon);
          b2.onclick = fn;
        };
        tool("rotate-cw", "Refresh", () => this.render());
        if (p) tool("home", "Open the hub", () => plugin.openPath(p.hub));
        tool("layout-dashboard", "Mission control", () => plugin.openMission());
        if (!p || !pj) {
          el.createDiv({ cls: "evs-hint", text: projects.length ? "Can't read this project's Workshop state." : "No project with a Repo - Workshop link yet." });
          return;
        }
        this.renderStage(el, p, pj);
        this.renderAdd(el);
        await plugin.guard.index();
        this.conflicts = plugin.settings.decisions.tasks ? plugin.guard.checkTasks(p, pj.tasks) : {};
        const b = board(pj);
        const grid = el.createDiv({ cls: "evs-tk-board" });
        for (const col of b.columns) {
          const c = grid.createDiv({ cls: `evs-tk-col is-${col.status}` });
          const h = c.createDiv({ cls: "evs-tk-col-head" });
          h.createSpan({ text: col.label });
          h.createSpan({ cls: "evs-tk-count", text: String(col.tasks.length) });
          if (!col.tasks.length) c.createDiv({ cls: "evs-tk-empty", text: "Nothing here" });
          for (const t of col.tasks) this.renderCard(c, p, t);
        }
        const done = el.createDiv({ cls: "evs-tk-done" });
        const toggle = done.createEl("button", { text: `${this.showDone ? "Hide" : "Show"} done (${b.done.length})` });
        toggle.onclick = () => {
          this.showDone = !this.showDone;
          this.app.workspace.requestSaveLayout();
          this.render();
        };
        if (this.showDone) for (const t of b.done) done.createDiv({ cls: "evs-tk-done-row", text: `${t.id} \xB7 ${t.title}` });
      }
      renderStage(el, p, pj) {
        const c = checklist(pj);
        const box = el.createDiv({ cls: "evs-tk-stage" });
        const segs = box.createDiv({ cls: "evs-mc-segs" });
        STAGES.forEach((s, i) => segs.createDiv({ cls: "evs-mc-seg" + (i <= c.index ? " is-on" : ""), attr: { "aria-label": s } }));
        const line = box.createDiv({ cls: "evs-tk-stage-line" });
        line.createSpan({ cls: "evs-tk-stage-name", text: c.stage });
        line.createSpan({ cls: "evs-tk-stage-left", text: c.complete ? "checklist complete" : `${c.left} of ${c.items.length} left` });
        const items = box.createDiv({ cls: "evs-tk-checks" });
        for (const it of c.items) {
          const row = items.createDiv({ cls: "evs-tk-check" + (it.done ? " is-done" : "") });
          setIcon2(row.createSpan({ cls: "evs-tk-check-box" }), it.done ? "check-square" : "square");
          row.createSpan({ text: it.text });
          if (it.evidence) row.createSpan({ cls: "evs-tk-evidence", text: clip(it.evidence, 80) });
          if (!it.done) {
            row.addClass("is-clickable");
            row.setAttr("aria-label", "Tick it (with evidence)");
            row.onclick = () => this.prompt(
              { title: `Tick: ${it.text}`, label: "What shows it's true? A test result, screenshot path or log line.", placeholder: "e.g. npm test 31/0", button: "Tick it", optional: c.stage !== "verify" },
              (ev) => this.act(cli.check(c.stage, it.id, ev), `Ticked: ${it.text}`)
            );
          }
        }
        if (c.complete && c.next) {
          const adv = box.createEl("button", { cls: "mod-cta evs-tk-advance", text: `Move to ${c.next}` });
          adv.onclick = () => {
            if (adv.dataset.sure !== "1") {
              adv.dataset.sure = "1";
              adv.setText(`Click again: ${c.stage} \u2192 ${c.next}`);
              return;
            }
            this.act(cli.advance());
          };
        }
      }
      renderAdd(el) {
        const det = el.createEl("details", { cls: "evs-tk-add" });
        det.createEl("summary", { text: "Add a task" });
        const f = det.createDiv({ cls: "evs-tk-form" });
        const title = f.createEl("input", { type: "text", attr: { placeholder: "Title (what to do)" } });
        const details = f.createEl("textarea", { attr: { rows: 2, placeholder: "Details (optional)" } });
        const accept = f.createEl("textarea", { attr: { rows: 2, placeholder: "Done looks like (one per line)" } });
        const row = f.createDiv({ cls: "evs-tk-form-row" });
        const kind = row.createEl("select", { cls: "dropdown" });
        for (const k of KINDS) kind.createEl("option", { value: k, text: k });
        const add = row.createEl("button", { cls: "mod-cta", text: "Add task" });
        add.onclick = () => {
          let args;
          try {
            args = cli.add({ title: title.value, details: details.value, accept: accept.value, kind: kind.value });
          } catch (e) {
            new Notice2(e.message);
            return title.focus();
          }
          this.act(args);
        };
      }
      renderCard(col, p, t) {
        const card = col.createDiv({ cls: "evs-tk-card" });
        const top = card.createDiv({ cls: "evs-tk-card-top" });
        top.createSpan({ cls: "evs-tk-id", text: t.id });
        if (t.kind) top.createSpan({ cls: "evs-tk-kind", text: t.kind });
        if (t.mode === "autopilot") top.createSpan({ cls: "evs-tk-kind", text: "autopilot" });
        card.createDiv({ cls: "evs-tk-title", text: t.title });
        if (t.status === "blocked" && t.blockedReason) card.createDiv({ cls: "evs-tk-reason", text: `Blocked: ${t.blockedReason}` });
        const clash = ((this.conflicts || {})[t.id] || []).filter((f) => !f.dismissed);
        if (clash.length) {
          const c = card.createDiv({ cls: "evs-tk-guard", attr: { "aria-label": clash.map((f) => f.why).join("\n") } });
          setIcon2(c.createSpan(), "shield-alert");
          c.createSpan({ text: `May conflict with: ${clash[0].decision.title}${clash.length > 1 ? ` (+${clash.length - 1})` : ""}` });
          c.onclick = () => this.plugin.openDecisions({ decision: clash[0].decision.id });
        }
        const more = card.createEl("details", { cls: "evs-tk-more" });
        more.createEl("summary", { text: t.status === "review" ? "What was done" : "Details" });
        if (t.details) more.createDiv({ cls: "evs-tk-details", text: t.details });
        const acc = [].concat(t.acceptance || []);
        if (acc.length) {
          more.createDiv({ cls: "evs-tk-sub", text: "Done looks like" });
          const ul = more.createEl("ul");
          for (const a of acc) ul.createEl("li", { text: a });
        }
        if (t.result) {
          if (t.result.summary) more.createDiv({ cls: "evs-tk-details", text: t.result.summary });
          for (const [label, list] of [["Verified", t.result.verified], ["Not verified", t.result.notVerified]]) {
            const xs = [].concat(list || []).filter(Boolean);
            if (!xs.length) continue;
            more.createDiv({ cls: "evs-tk-sub", text: label });
            const ul = more.createEl("ul");
            for (const x of xs) ul.createEl("li", { text: x });
          }
        }
        if (["running", "review", "queued"].includes(t.status)) this.renderActivity(card, p, t);
        this.renderActions(card, p, t);
      }
      async renderActivity(card, p, t) {
        const events = await this.plugin.workshop.activity(p, t.id, 4);
        if (!events.length) return;
        const box = card.createDiv({ cls: "evs-tk-activity" });
        const live = Date.now() - Date.parse(events[0].at) < 20 * 6e4;
        if (live) card.addClass("is-live");
        for (const e of events) {
          const row = box.createDiv({ cls: `evs-tk-ev is-${e.kind}` });
          row.createSpan({ cls: "evs-tk-ev-when", text: ago(Date.parse(e.at)) });
          row.createSpan({ text: clip(describeEvent(e), 140) });
          if (e.path && this.app.vault.adapter.getResourcePath) {
            const img = box.createEl("img", { cls: "evs-tk-shot", attr: { src: this.app.vault.adapter.getResourcePath(e.path), loading: "lazy", alt: e.caption || "" } });
            img.onerror = () => img.remove();
          }
        }
      }
      renderActions(card, p, t) {
        const row = card.createDiv({ cls: "evs-tk-actions" });
        const btn = (icon, label, fn, cta) => {
          const b = row.createEl("button", { cls: cta ? "mod-cta" : "", attr: { "aria-label": label } });
          setIcon2(b.createSpan(), icon);
          b.createSpan({ text: label });
          b.onclick = (e) => fn(b, e);
          return b;
        };
        for (const a of actionsFor(t)) {
          if (a === "queue") btn("list-plus", "Queue", () => this.act(cli.queue(t.id)));
          if (a === "play")
            btn("play", "Play", (b) => {
              if (b.dataset.sure !== "1") {
                b.dataset.sure = "1";
                b.lastChild.setText("Start Claude?");
                return;
              }
              this.act(cli.play(t.id));
            });
          if (a === "block") btn("octagon-pause", "Block", () => this.prompt({ title: `Block ${t.id}`, label: "Why is it blocked?", button: "Block" }, (r) => this.act(cli.block(t.id, r))));
          if (a === "note") btn("message-square-plus", "Note", () => this.prompt({ title: `Note on ${t.id}`, label: "Shows in the task's live reports (Holo's Live view too).", button: "Add note" }, (r) => this.act(cli.note(t.id, r))));
          if (a === "done-in-terminal")
            btn(
              "terminal-square",
              "Done (terminal)",
              async () => {
                const dir = this.plugin.workshop.repoDir(p);
                await navigator.clipboard.writeText(`cd "${dir}"; workshop task done ${t.id}`);
                new Notice2("Copied. Paste it in your terminal: only you mark tasks done.", 7e3);
              },
              true
            );
        }
      }
    };
    module2.exports = { TasksView: TasksView2, TextPrompt };
  }
});

// src/core/recap.js
var require_recap = __commonJS({
  "src/core/recap.js"(exports2, module2) {
    "use strict";
    var DAY = 864e5;
    var z = (n) => String(n).padStart(2, "0");
    var ymd = (ms) => {
      const d = new Date(ms);
      return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
    };
    var startOfDay = (ms) => {
      const d = new Date(ms);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    };
    var addDays = (ms, n) => {
      const d = new Date(ms);
      d.setDate(d.getDate() + n);
      d.setHours(0, 0, 0, 0);
      return d.getTime();
    };
    var parseDay = (s) => {
      const m = String(s || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
      return m ? new Date(+m[1], +m[2] - 1, +m[3]).getTime() : NaN;
    };
    function isoWeek(ms) {
      const d = new Date(startOfDay(ms));
      const day2 = (d.getDay() + 6) % 7;
      d.setDate(d.getDate() - day2 + 3);
      const year = d.getFullYear();
      const jan4 = new Date(year, 0, 4);
      const week = 1 + Math.round(((d - jan4) / DAY - 3 + (jan4.getDay() + 6) % 7) / 7);
      return { year, week };
    }
    var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var SHORT = (ms) => new Date(ms).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
    function range(kind, anchor = Date.now(), custom = {}) {
      if (kind === "day") {
        const start2 = startOfDay(anchor);
        return { kind, start: start2, end: addDays(start2, 1), key: ymd(start2), label: new Date(start2).toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) };
      }
      if (kind === "month") {
        const d = new Date(anchor);
        const start2 = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
        const end2 = new Date(d.getFullYear(), d.getMonth() + 1, 1).getTime();
        return { kind, start: start2, end: end2, key: `${d.getFullYear()}-${z(d.getMonth() + 1)}`, label: `${MONTHS[d.getMonth()]} ${d.getFullYear()}` };
      }
      if (kind === "custom") {
        let a = parseDay(custom.from), b = parseDay(custom.to);
        if (isNaN(a)) a = addDays(startOfDay(anchor), -6);
        if (isNaN(b)) b = startOfDay(anchor);
        if (b < a) [a, b] = [b, a];
        const end2 = addDays(b, 1);
        return { kind, start: a, end: end2, key: `${ymd(a)}_${ymd(b)}`, label: `${SHORT(a)} \u2013 ${SHORT(b)} ${new Date(b).getFullYear()}` };
      }
      const s = startOfDay(anchor);
      const start = addDays(s, -((new Date(s).getDay() + 6) % 7));
      const end = addDays(start, 7);
      const w = isoWeek(start);
      return { kind: "week", start, end, key: `${w.year}-W${z(w.week)}`, label: `Week ${w.week} \xB7 ${SHORT(start)} \u2013 ${SHORT(end - 1)} ${new Date(end - 1).getFullYear()}` };
    }
    function shift(r, n) {
      if (r.kind === "day") return range("day", addDays(r.start, n));
      if (r.kind === "week") return range("week", addDays(r.start, 7 * n));
      if (r.kind === "month") {
        const d = new Date(r.start);
        return range("month", new Date(d.getFullYear(), d.getMonth() + n, 1).getTime());
      }
      const len = Math.round((r.end - r.start) / DAY);
      return range("custom", 0, { from: ymd(addDays(r.start, len * n)), to: ymd(addDays(r.end, len * n - 1)) });
    }
    var previous = (r) => shift(r, -1);
    function buckets(r) {
      const days = Math.round((r.end - r.start) / DAY);
      const out = [];
      if (days <= 62) {
        for (let t = r.start; t < r.end; t = addDays(t, 1)) out.push({ start: t, end: addDays(t, 1), label: new Date(t).toLocaleDateString("en-GB", { weekday: "short", day: "numeric" }) });
      } else {
        for (let t = range("week", r.start).start; t < r.end; t = addDays(t, 7)) out.push({ start: Math.max(t, r.start), end: Math.min(addDays(t, 7), r.end), label: `W${isoWeek(t).week}` });
      }
      return out;
    }
    var inRange = (ms, r) => ms >= r.start && ms < r.end;
    var at = (x) => typeof x === "number" ? x : Date.parse(x);
    var SESSION_GAP = 3 * 36e5;
    function sessionsOf(logs, gap = SESSION_GAP) {
      const times = (logs || []).map((s) => at(s.at)).filter(Number.isFinite).sort((a, b) => a - b);
      const out = [];
      for (const ms of times) {
        const last = out[out.length - 1];
        if (last && ms - last.end < gap) {
          last.end = ms;
          last.logs++;
        } else out.push({ start: ms, end: ms, logs: 1 });
      }
      return out;
    }
    var TREND_KEYS = ["sessions", "commits", "done", "playtests", "tests", "decisions"];
    function weeklyTrends(projects, start, weeks) {
      const out = Object.fromEntries(TREND_KEYS.map((k) => [k, new Array(weeks).fill(0)]));
      const bounds = Array.from({ length: weeks + 1 }, (_, i) => addDays(start, 7 * i));
      const put = (k, ms) => {
        if (!(ms >= bounds[0] && ms < bounds[weeks])) return;
        let i = Math.min(weeks - 1, Math.floor((ms - start) / (7 * DAY)));
        while (i > 0 && ms < bounds[i]) i--;
        while (i < weeks - 1 && ms >= bounds[i + 1]) i++;
        out[k][i]++;
      };
      for (const p of projects) {
        const it = (p.cur || p).items || {};
        for (const k of ["commits", "playtests", "tests", "decisions"]) for (const x of it[k] || []) put(k, at(x.at));
        for (const s of sessionsOf(it.sessions)) put("sessions", s.start);
        for (const t of it.done || []) put("done", at(t.statusAt && t.statusAt.done || t.updated));
      }
      return out;
    }
    function summarize(raw, r) {
      const tasks = raw.tasks || [];
      const pick = (xs) => (xs || []).filter((x) => inRange(at(x.at), r)).sort((a, b) => at(b.at) - at(a.at));
      const reached = (t, s) => inRange(at(t.statusAt && t.statusAt[s] || t.updated), r);
      const items = {
        done: tasks.filter((t) => t.status === "done" && reached(t, "done")),
        review: tasks.filter((t) => t.status === "review" && reached(t, "review")),
        created: tasks.filter((t) => inRange(at(t.created), r)),
        blocked: tasks.filter((t) => t.status === "blocked"),
        sessions: pick(raw.sessions),
        commits: pick(raw.commits),
        tests: pick((raw.activity || []).filter((e) => e.kind === "test" || e.kind === "tests")),
        notes: pick((raw.activity || []).filter((e) => e.kind === "note")),
        shots: pick((raw.activity || []).filter((e) => e.kind === "shot")),
        playtests: pick(raw.playtests),
        decisions: pick(raw.decisions),
        edited: pick(raw.notes),
        clips: pick(raw.clips)
      };
      const failedRuns = items.tests.filter((e) => +e.failed > 0).length;
      const counts = {
        sessions: sessionsOf(items.sessions).length,
        logs: items.sessions.length,
        commits: items.commits.length,
        done: items.done.length,
        review: items.review.length,
        created: items.created.length,
        blocked: items.blocked.length,
        tests: items.tests.length,
        testsFailed: failedRuns,
        playtests: items.playtests.length,
        decisions: items.decisions.length,
        edited: items.edited.length,
        clips: items.clips.length,
        shots: items.shots.length
      };
      const open = tasks.filter((t) => t.status !== "done");
      const lastSession = (raw.sessions || []).map((s) => at(s.at)).sort((a, b) => b - a)[0] || null;
      const order = { running: 0, queued: 1, todo: 2, review: 3, blocked: 4 };
      const upcoming = open.filter((t) => t.status in order && t.status !== "review" && t.status !== "blocked").sort((a, b) => order[a.status] - order[b.status] || (a.order ?? 0) - (b.order ?? 0)).slice(0, 5);
      const next = (raw.sessions || []).slice().sort((a, b) => at(b.at) - at(a.at)).find((s) => s.next);
      const events = [].concat(items.sessions, items.commits, items.tests, items.notes, items.shots, items.playtests, items.decisions, items.clips, items.created.map((t) => ({ at: t.created })));
      const timeline = buckets(r).map((b) => events.filter((e) => at(e.at) >= b.start && at(e.at) < b.end).length);
      return {
        project: raw.project,
        range: r,
        counts,
        items,
        open: open.length,
        stage: raw.project && raw.project.stage,
        lastSession,
        next: next ? next.next : "",
        upcoming,
        timeline,
        activity: events.length
      };
    }
    function compare(cur, prev) {
      const out = {};
      for (const k of Object.keys(cur.counts)) out[k] = cur.counts[k] - (prev && prev.counts[k] || 0);
      return out;
    }
    var plural = (n, one, many = one + "s") => `${n} ${n === 1 ? one : many}`;
    function insights(cur, prev, now = Date.now()) {
      const c = cur.counts, p = prev && prev.counts || {};
      const out = [];
      const add = (level, text, link) => out.push({ level, text, link });
      const reviewNow = (cur.items.review || []).length;
      if (c.blocked) add("warn", `${plural(c.blocked, "task")} blocked: ${cur.items.blocked.slice(0, 3).map((t) => t.title).join("; ")}`, { kind: "tasks" });
      if (reviewNow >= 2) add("warn", `${plural(reviewNow, "task")} waiting for your review`, { kind: "tasks" });
      if (c.testsFailed) add("warn", `Tests failed in ${c.testsFailed} of ${plural(c.tests, "run")}`, { kind: "tasks" });
      else if (c.tests >= 2) add("good", `All ${c.tests} test runs passed`);
      if (c.sessions >= 2 && !c.playtests) add("info", `${plural(c.sessions, "session")} of building and no playtest notes: play it and press N, or add a playtest entry`, { kind: "feel" });
      if (c.clips && !c.playtests) add("info", `${plural(c.clips, "clip")} recorded but no feel notes written for them`, { kind: "feel" });
      const notVerified = (cur.items.sessions || []).reduce((n, s) => n + (s.notVerified ? 1 : 0), 0);
      if (notVerified >= 2) add("info", `${notVerified} sessions left things unverified; worth a check before calling it done`, { kind: "log" });
      if (c.decisions) add("good", `${plural(c.decisions, "decision")} settled`, { kind: "decisions" });
      if (c.done) add("good", `${plural(c.done, "task")} finished`);
      if (prev) {
        const was = p.commits || 0, is = c.commits;
        if (is >= 6 && is >= was * 1.5 && is - was >= 4) add("good", `Busier than the period before: ${is} commits vs ${was}`);
        else if (was >= 6 && is <= was * 0.5) add("info", `Quieter than the period before: ${is} commits vs ${was}`);
      }
      if (cur.open && cur.lastSession && now - cur.lastSession > 7 * DAY && cur.range.end > now - DAY) {
        add("info", `No session in ${Math.round((now - cur.lastSession) / DAY)} days, with ${plural(cur.open, "open task")}`, { kind: "tasks" });
      }
      return out;
    }
    function master(summaries, prevSummaries) {
      const total = (list) => {
        const t = {};
        for (const s of list) for (const [k, v] of Object.entries(s.counts)) t[k] = (t[k] || 0) + v;
        return t;
      };
      const counts = total(summaries);
      const before = prevSummaries ? total(prevSummaries) : null;
      const ranked = summaries.slice().sort((a, b) => b.activity - a.activity);
      const out = { counts, before, ranked, insights: [] };
      const active = ranked.filter((s) => s.activity);
      if (active.length) out.insights.push({ level: "info", text: `Most active: ${active[0].project.name} (${plural(active[0].activity, "thing")} happened)` });
      const quiet = summaries.filter((s) => !s.activity && s.open);
      if (quiet.length) out.insights.push({ level: "info", text: `No activity on ${quiet.map((s) => s.project.name).join(", ")}` });
      for (const s of summaries) for (const i of insights(s, null)) if (i.level === "warn") out.insights.push(Object.assign({}, i, { text: `${s.project.name}: ${i.text}`, project: s.project.path }));
      return out;
    }
    var LABELS = {
      sessions: "Work sessions",
      commits: "Commits",
      done: "Tasks finished",
      review: "For your review",
      created: "New tasks",
      tests: "Test runs",
      playtests: "Playtests",
      decisions: "Decisions",
      edited: "Notes edited",
      clips: "Clips"
    };
    var delta = (n) => n > 0 ? ` (+${n})` : n < 0 ? ` (${n})` : "";
    var line = (s) => String(s || "").replace(/\s+/g, " ").trim();
    var cut = (s, n) => line(s).length > n ? line(s).slice(0, n - 1) + "\u2026" : line(s);
    var day = (ms) => ymd(at(ms));
    function projectMarkdown(sum, prev, stamp) {
      const p = sum.project, c = sum.counts, d = compare(sum, prev);
      const L = [
        "---",
        "type: recap",
        `project: ${p.name}`,
        `period: ${sum.range.key}`,
        `generated: ${stamp}`,
        `summary: What happened on ${p.name} in ${sum.range.label}, made by EMX Vault Studio from Workshop, git and the notes.`,
        "---",
        "",
        `# ${p.name}: ${sum.range.label}`,
        ""
      ];
      L.push(`Stage **${sum.stage || "?"}** \xB7 ${plural(sum.open, "open task")}${sum.lastSession ? ` \xB7 last session ${day(sum.lastSession)}` : ""}`, "");
      L.push("| | This period | Change |", "|---|---|---|");
      for (const k of Object.keys(LABELS)) L.push(`| ${LABELS[k]} | ${c[k]} | ${delta(d[k]).replace(/[()]/g, "").trim() || "\u2013"} |`);
      L.push("");
      const ins = insights(sum, prev);
      if (ins.length) L.push("> [!idea] Worth a look (worked out from the numbers)", ...ins.map((i) => `> - ${i.text}`), "");
      const list = (title, xs, fmt) => {
        if (xs.length) L.push(`## ${title}`, "", ...xs.map((x) => `- ${fmt(x)}`), "");
      };
      list("Finished", sum.items.done, (t) => `${t.id} ${t.title}`);
      list("For your review", sum.items.review, (t) => `${t.id} ${t.title}${t.result && t.result.summary ? `: ${cut(t.result.summary, 200)}` : ""}`);
      list("Blocked", sum.items.blocked, (t) => `${t.id} ${t.title}${t.blockedReason ? ` (${t.blockedReason})` : ""}`);
      list("New tasks", sum.items.created, (t) => `${t.id} ${t.title}`);
      list("Sessions", sum.items.sessions, (s) => `${day(s.at)}: ${cut(s.changed, 260)}${s.notVerified ? ` *Not verified:* ${cut(s.notVerified, 160)}` : ""}`);
      list("Playtests", sum.items.playtests, (x) => `${day(x.at)} ${x.title ? x.title + ": " : ""}${(x.quotes || []).slice(0, 3).map((q) => `"${q}"`).join(" ") || ""} [[${p.feel.replace(/\.md$/, "")}#${x.heading}|open]]`);
      list("Decisions", sum.items.decisions, (x) => `${day(x.at)}: ${x.title} [[${p.decisions.replace(/\.md$/, "")}#${x.heading}|open]]`);
      list("Tests", sum.items.tests, (e) => `${day(e.at)} ${e.task || ""}: ${e.passed} passed, ${e.failed} failed${e.command ? ` (${e.command})` : ""}`);
      list("Commits", sum.items.commits.slice(0, 40), (x) => `${day(x.at)} \`${x.hash.slice(0, 7)}\` ${cut(x.subject, 140)}`);
      if (sum.items.commits.length > 40) L.push(`\u2026and ${sum.items.commits.length - 40} more commits`, "");
      list("Clips", sum.items.clips, (x) => `${day(x.at)} ${x.name}`);
      list("Notes edited", sum.items.edited, (x) => `[[${x.path.replace(/\.md$/, "")}|${x.path.split("/").pop().replace(/\.md$/, "")}]]`);
      const up = [];
      if (sum.next) up.push(`Next (from the log): ${cut(sum.next, 260)}`);
      for (const t of sum.upcoming) up.push(`${t.id} [${t.status}] ${t.title}`);
      list("Up next", up, (x) => x);
      return L.join("\n") + "\n";
    }
    function masterMarkdown(sums, prevs, r, stamp, linkFor) {
      const m = master(sums, prevs);
      const L = [
        "---",
        "type: recap",
        "project: EMX Workshop",
        `period: ${r.key}`,
        `generated: ${stamp}`,
        `summary: Everything across the EMX projects in ${r.label}, made by EMX Vault Studio.`,
        "---",
        "",
        `# EMX Workshop: ${r.label}`,
        ""
      ];
      L.push("| | This period | Change |", "|---|---|---|");
      for (const k of Object.keys(LABELS)) L.push(`| ${LABELS[k]} | ${m.counts[k] || 0} | ${m.before ? delta((m.counts[k] || 0) - (m.before[k] || 0)).replace(/[()]/g, "").trim() || "\u2013" : "\u2013"} |`);
      L.push("");
      if (m.insights.length) L.push("> [!idea] Worth a look (worked out from the numbers)", ...m.insights.map((i) => `> - ${i.text}`), "");
      L.push("## Projects", "");
      for (const s of m.ranked) {
        const c = s.counts;
        const bits = [c.sessions && plural(c.sessions, "work session"), c.commits && plural(c.commits, "commit"), c.done && `${c.done} finished`, c.review && `${c.review} for review`, c.playtests && plural(c.playtests, "playtest"), c.decisions && plural(c.decisions, "decision"), c.clips && plural(c.clips, "clip")].filter(Boolean);
        const link = linkFor ? linkFor(s) : s.project.name;
        L.push(`- **${link}** (${s.stage || "?"}): ${bits.join(" \xB7 ") || "nothing this period"}${s.next ? `. Next: ${cut(s.next, 160)}` : ""}`);
      }
      L.push("");
      return L.join("\n") + "\n";
    }
    module2.exports = { SESSION_GAP, sessionsOf, TREND_KEYS, weeklyTrends, DAY, ymd, startOfDay, addDays, isoWeek, range, shift, previous, buckets, summarize, compare, insights, master, projectMarkdown, masterMarkdown, LABELS };
  }
});

// src/data/recap.js
var require_recap2 = __commonJS({
  "src/data/recap.js"(exports2, module2) {
    "use strict";
    var { range, previous, summarize, projectMarkdown, masterMarkdown, DAY } = require_recap();
    var { stamp } = require_util();
    var VIDEO = /\.(mp4|mkv|mov|webm)$/i;
    var GENERATED = /( - Brief| - Playtest flags|\/Vault index)\.md$|\/Recaps\/|^_techniques\/Workshop recaps\//;
    var MASTER_DIR = "_techniques/Workshop recaps";
    var CLIP_WINDOW = 2 * 36e5;
    function webUrl(remote) {
      const m = String(remote || "").match(/^(?:https:\/\/|git@)([^/:]+)[/:]([^/]+\/[^/]+?)(?:\.git)?\/?$/);
      return m ? `https://${m[1]}/${m[2]}` : "";
    }
    function parseLog(text) {
      const out = [];
      for (const entry of String(text || "").replace(/\r\n/g, "\n").split(/^## /m).slice(1)) {
        const lines = entry.split("\n");
        const t = Date.parse(lines[0].trim());
        if (!t) continue;
        const field = (name) => (lines.find((l) => l.startsWith(name + ":")) || "").slice(name.length + 1).trim();
        out.push({ at: t, changed: field("Changed"), verified: field("Verified"), notVerified: field("Not verified"), next: field("Next") });
      }
      return out;
    }
    function parseFeel(text) {
      const out = [];
      const parts = String(text || "").replace(/\r\n/g, "\n").split(/^### /m).slice(1);
      for (const part of parts) {
        const head = part.split("\n")[0];
        const m = head.match(/^(\d{4})-(\d{2})-(\d{2})(.*)$/);
        if (!m) continue;
        const quotes = Array.from(part.matchAll(/"([^"\n]{4,})"/g)).map((q) => q[1]);
        out.push({ at: new Date(+m[1], +m[2] - 1, +m[3], 12).getTime(), title: m[4].replace(/^[\s:]+/, "").trim(), quotes, heading: head.trim() });
      }
      return out;
    }
    function clipTime(name, mtime) {
      const m = name.match(/(\d{4})-(\d{2})-(\d{2})[ _T](\d{2})[-.:](\d{2})[-.:](\d{2})/);
      return m ? new Date(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]).getTime() : mtime;
    }
    function assignClips(clips, timesByProject) {
      const out = { unmatched: [] };
      for (const c of clips) {
        let best = null, gap = CLIP_WINDOW + 1;
        for (const [path, times] of Object.entries(timesByProject)) {
          for (const t of times) {
            const d = Math.abs(t - c.at);
            if (d < gap) {
              gap = d;
              best = path;
            }
          }
        }
        (best ? out[best] ||= [] : out.unmatched).push(best ? Object.assign({}, c, { matched: Math.round(gap / 6e4) }) : c);
      }
      return out;
    }
    var RecapData2 = class {
      constructor(plugin, opts = {}) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.execImpl = opts.exec || null;
        this.cache = /* @__PURE__ */ new Map();
        this.writing = false;
        this.lastWrite = 0;
      }
      node() {
        try {
          return { cp: require("child_process"), fs: require("fs"), path: require("path"), os: require("os") };
        } catch (e) {
          return null;
        }
      }
      git(dir, args) {
        if (this.execImpl) return this.execImpl(dir, args);
        const n = this.node();
        if (!n || !dir) return Promise.resolve("");
        return new Promise((resolve) => {
          n.cp.execFile("git", ["-c", "core.quotepath=false", ...args], { cwd: dir, windowsHide: true, maxBuffer: 32 * 1024 * 1024, encoding: "utf8" }, (err, out) => resolve(err ? "" : out));
        });
      }
      // commits between from and to (ms) in a repo, newest first
      async commits(dir, from, to) {
        const out = await this.git(dir, ["log", `--since=${new Date(from).toISOString()}`, `--until=${new Date(to).toISOString()}`, "--format=%H%x1f%aI%x1f%s"]);
        return out.split("\n").filter(Boolean).map((l) => {
          const [hash2, iso, subject] = l.split("");
          return { hash: hash2, at: Date.parse(iso), subject: subject || "" };
        }).filter((c) => c.hash && c.at >= from && c.at < to);
      }
      // notes in a project folder edited between from and to, from the vault backup's commits (latest edit per note)
      async edited(folder, from, to) {
        const base = this.app.vault.adapter.getBasePath ? this.app.vault.adapter.getBasePath() : null;
        const out = await this.git(base, ["log", `--since=${new Date(from).toISOString()}`, `--until=${new Date(to).toISOString()}`, "--format=%x1e%aI", "--name-only", "--", folder]);
        const seen = /* @__PURE__ */ new Map();
        for (const rec of out.split("").filter((x) => x.trim())) {
          const [iso, ...files] = rec.split("\n");
          const t = Date.parse(iso);
          for (const f of files.map((x) => x.trim()).filter((x) => x.endsWith(".md") && !GENERATED.test(x) && !/(^|\/)Repo - /.test(x))) {
            if (!seen.has(f) || seen.get(f) < t) seen.set(f, t);
          }
        }
        return [...seen].filter(([f]) => this.app.vault.getAbstractFileByPath(f)).map(([path, at]) => ({ path, at }));
      }
      clipsFolder() {
        const n = this.node();
        const s = this.plugin.settings.recap || {};
        if (s.clipsFolder) return s.clipsFolder;
        return n ? n.path.join(n.os.homedir(), "Videos", "EMX Clips") : null;
      }
      // video clips recorded between from and to
      clips(from, to) {
        const n = this.node(), dir = this.clipsFolder();
        if (!n || !dir || !n.fs.existsSync(dir)) return [];
        const out = [];
        for (const name of n.fs.readdirSync(dir)) {
          if (!VIDEO.test(name)) continue;
          const full = n.path.join(dir, name);
          let st;
          try {
            st = n.fs.statSync(full);
          } catch (e) {
            continue;
          }
          const t = clipTime(name, st.mtimeMs);
          if (t >= from && t < to) out.push({ at: t, name, path: full, size: st.size });
        }
        return out.sort((a, b) => b.at - a.at);
      }
      // every task's activity.jsonl, with the task id on each event
      async activity(p) {
        const a = this.app.vault.adapter, dir = `${p.path}/Repo - Workshop/runs`;
        const out = [];
        try {
          if (!await a.exists(dir)) return out;
          for (const folder of (await a.list(dir)).folders) {
            const task = folder.split("/").pop();
            for (const e of await this.plugin.workshop.activity(p, task, 500)) out.push(Object.assign({ task }, e));
          }
        } catch (e) {
        }
        return out;
      }
      // raw material for one project between from and to
      async project(p, from, to) {
        const ws = this.plugin.workshop;
        const pj = await ws.state(p);
        const repo = ws.repoDir(p);
        const log = await this.plugin.store.read(`${p.path}/Repo - Workshop/log.md`);
        const remote = repo ? webUrl((await this.git(repo, ["remote", "get-url", "origin"])).trim()) : "";
        return {
          repo,
          remote,
          project: { name: p.name, path: p.path, section: p.section, stage: pj && pj.stage || p.stage, hub: p.hub, feel: p.feel, decisions: p.decisions, color: this.plugin.projStyle ? this.plugin.projStyle(p).color : null },
          tasks: pj && pj.tasks || [],
          sessions: parseLog(log),
          commits: repo ? (await this.commits(repo, from, to)).map((c) => Object.assign(c, { remote })) : [],
          activity: await this.activity(p),
          playtests: parseFeel(p.texts && p.texts.feel),
          decisions: (p.events || []).filter((e) => e.kind === "decision").map((e) => ({ at: e.at, title: e.title, heading: e.heading })),
          notes: await this.edited(p.path, from, to),
          clips: []
        };
      }
      // summaries for a range and the one before it, for every project (or just `only`), plus unmatched clips
      async gather(r, { only = null, fresh = false } = {}) {
        const prev = previous(r);
        const key = `${r.start}:${r.end}:${only || "*"}`;
        const hit = this.cache.get(key);
        if (!fresh && hit && Date.now() - hit.at < 6e4) return hit.value;
        const projects = (await this.plugin.store.all()).filter((p) => p.hasWorkshop && (!only || p.path === only));
        const raws = [];
        for (const p of projects) raws.push(await this.project(p, prev.start, r.end));
        const times = {};
        for (const raw of raws) {
          times[raw.project.path] = [].concat(raw.sessions.map((s) => s.at), raw.commits.map((c) => c.at), raw.activity.map((e) => Date.parse(e.at)), raw.playtests.map((x) => x.at)).filter((t) => t >= prev.start - CLIP_WINDOW && t < r.end + CLIP_WINDOW);
        }
        const clips = assignClips(this.clips(prev.start, r.end), times);
        for (const raw of raws) raw.clips = clips[raw.project.path] || [];
        const value = {
          range: r,
          prev,
          projects: raws.map((raw) => ({ raw, cur: summarize(raw, r), before: summarize(raw, prev) })),
          unmatchedClips: clips.unmatched.filter((c) => c.at >= r.start && c.at < r.end)
        };
        this.cache.set(key, { at: Date.now(), value });
        return value;
      }
      noteFor(p, r) {
        return `${p.path}/Recaps/${p.name} - ${r.key}.md`;
      }
      masterFor(r) {
        return `${MASTER_DIR}/EMX Workshop - ${r.key}.md`;
      }
      // weekly recap notes (and monthly when on): this period and the one before. Only projects where something happened
      async writeNotes({ force = false } = {}) {
        const s = this.plugin.settings.recap;
        if (!s || this.writing || !force && Date.now() - this.lastWrite < 15 * 6e4) return [];
        this.writing = true;
        const written = [];
        try {
          const kinds = [s.notes.weekly && "week", s.notes.monthly && "month"].filter(Boolean);
          for (const kind of kinds) {
            const now = range(kind);
            for (const r of [previous(now), now]) {
              const data = await this.gather(r, { fresh: force });
              const active = data.projects.filter((x) => x.cur.activity);
              for (const x of s.notes.perProject ? active : []) {
                if (!this.app.vault.getAbstractFileByPath(x.raw.project.path)) continue;
                const path = this.noteFor(x.raw.project, r);
                if (await this.put(path, projectMarkdown(x.cur, x.before, stamp()))) written.push(path);
              }
              if (s.notes.master && active.length) {
                const link = (sum) => `[[${this.noteFor(sum.project, r).replace(/\.md$/, "")}|${sum.project.name}]]`;
                const path = this.masterFor(r);
                const md = masterMarkdown(data.projects.map((x) => x.cur), data.projects.map((x) => x.before), r, stamp(), (sum) => sum.activity ? link(sum) : sum.project.name);
                if (await this.put(path, md)) written.push(path);
              }
            }
          }
          this.lastWrite = Date.now();
          if (written.length && this.plugin.automations) this.plugin.automations.recapWritten(written);
        } catch (e) {
          console.error("EMX Vault Studio: recaps", e);
        } finally {
          this.writing = false;
        }
        return written;
      }
      // creates the folder if needed; writes only when more than the generated: line changed
      async put(path, text) {
        const vault = this.app.vault, dir = path.split("/").slice(0, -1).join("/");
        if (dir && !vault.getAbstractFileByPath(dir)) await vault.createFolder(dir);
        return this.plugin.briefs.put(path, text);
      }
    };
    module2.exports = { RecapData: RecapData2, webUrl, parseLog, parseFeel, clipTime, assignClips, GENERATED, MASTER_DIR, CLIP_WINDOW };
  }
});

// src/core/dashboard.js
var require_dashboard = __commonJS({
  "src/core/dashboard.js"(exports2, module2) {
    "use strict";
    var WIDGETS = {
      stage: { label: "Stage and checklist", icon: "milestone", group: "Project", options: {} },
      tasks: { label: "Tasks", icon: "list-checks", group: "Project", options: { show: { kind: "choice", choices: ["open", "running", "review", "blocked", "todo"], default: "open" }, limit: { kind: "number", default: 6 } } },
      recap: { label: "Recap", icon: "chart-no-axes-column", group: "Progress", options: { range: { kind: "choice", choices: ["day", "week", "month"], default: "week" } } },
      trends: { label: "8-week trends", icon: "trending-up", group: "Progress", options: { weeks: { kind: "number", default: 8 } } },
      feedback: { label: "Latest feedback", icon: "message-square-quote", group: "Feedback", options: { limit: { kind: "number", default: 3 } } },
      decisions: { label: "Decisions", icon: "gavel", group: "Feedback", options: { limit: { kind: "number", default: 4 } } },
      questions: { label: "Open questions", icon: "circle-help", group: "Feedback", options: { limit: { kind: "number", default: 5 } } },
      commits: { label: "Recent commits", icon: "git-commit-horizontal", group: "Code", options: { limit: { kind: "number", default: 6 } } },
      assets: { label: "Assets", icon: "package", group: "Code", options: { limit: { kind: "number", default: 8 } } },
      tools: { label: "Tools", icon: "hammer", group: "Code", options: {} },
      claude: { label: "Ask Claude", icon: "bot", group: "AI", options: {} },
      timeline: { label: "Timeline", icon: "calendar-range", group: "Progress", options: { days: { kind: "number", default: 14 } } },
      notes: { label: "Recent notes", icon: "files", group: "Notes", options: { limit: { kind: "number", default: 6 } } },
      links: { label: "Links", icon: "link", group: "Notes", options: {} },
      query: { label: "Notes query", icon: "search", group: "Make your own", options: { title: { kind: "text", default: "Notes" }, folder: { kind: "folder", default: "" }, tag: { kind: "text", default: "" }, property: { kind: "text", default: "" }, value: { kind: "text", default: "" }, show: { kind: "choice", choices: ["list", "cards", "table"], default: "list" }, limit: { kind: "number", default: 10 } } },
      counter: { label: "Counter", icon: "hash", group: "Make your own", options: { title: { kind: "text", default: "Count" }, folder: { kind: "folder", default: "" }, tag: { kind: "text", default: "" }, property: { kind: "text", default: "" }, value: { kind: "text", default: "" } } },
      buttons: { label: "Buttons", icon: "mouse-pointer-click", group: "Make your own", options: { title: { kind: "text", default: "Shortcuts" }, buttons: { kind: "buttons", default: [] } } },
      markdown: { label: "Text", icon: "type", group: "Make your own", options: { text: { kind: "longtext", default: "Write anything here." } } },
      mission: { label: "Mission control (all projects)", icon: "layout-dashboard", group: "Everything", options: { categories: { kind: "text", default: "" }, sort: { kind: "choice", choices: ["activity", "name", "stage", "folder"], default: "folder" }, archived: { kind: "toggle", default: false }, live: { kind: "toggle", default: true }, week: { kind: "toggle", default: true }, quote: { kind: "toggle", default: true } } },
      favorites: { label: "Favorites (pinned and Holo)", icon: "star", group: "Everything", options: { holo: { kind: "toggle", default: true } } },
      "needs-me": { label: "What needs me", icon: "bell-ring", group: "Everything", options: { limit: { kind: "number", default: 12 } } },
      "this-week": { label: "This week (all projects)", icon: "calendar-days", group: "Everything", options: {} }
    };
    var ALIASES = { "recap-week": ["recap", { range: "week" }], playtests: ["feedback", {}] };
    function normalize(entry) {
      let widget, opts = {};
      if (typeof entry === "string") widget = entry;
      else if (entry && typeof entry === "object") {
        if (entry.widget) {
          widget = entry.widget;
          opts = Object.assign({}, entry);
          delete opts.widget;
        } else {
          const k = Object.keys(entry)[0];
          widget = k;
          opts = Object.assign({}, entry[k] || {});
        }
      }
      if (!widget) return null;
      if (ALIASES[widget]) {
        const [to, extra] = ALIASES[widget];
        widget = to;
        opts = Object.assign({}, extra, opts);
      }
      const def = WIDGETS[widget];
      const options = {};
      for (const [k, o] of Object.entries(def && def.options || {})) options[k] = k in opts ? opts[k] : Array.isArray(o.default) ? o.default.slice() : o.default;
      for (const [k, v] of Object.entries(opts)) if (!(k in options)) options[k] = v;
      return { widget, options, unknown: !def };
    }
    function parseBlock(src, parseYaml) {
      let data;
      try {
        data = parseYaml(String(src || "").trim() || "{}") || {};
      } catch (e) {
        return { project: null, columns: 2, widgets: [], error: `The dashboard settings can't be read: ${e.message}` };
      }
      if (Array.isArray(data)) data = { widgets: data };
      const widgets = (Array.isArray(data.widgets) ? data.widgets : []).map(normalize).filter(Boolean);
      return { project: data.project || null, columns: Math.max(1, Math.min(4, +data.columns || 2)), widgets, error: null };
    }
    function writeBlock({ project, columns, widgets }, stringifyYaml) {
      const out = {};
      if (project) out.project = project;
      if (columns && columns !== 2) out.columns = columns;
      out.widgets = widgets.map((w) => {
        const def = WIDGETS[w.widget];
        const diff = {};
        for (const [k, v] of Object.entries(w.options || {})) {
          const d = def && def.options[k] ? def.options[k].default : void 0;
          if (JSON.stringify(v) !== JSON.stringify(d)) diff[k] = v;
        }
        return Object.keys(diff).length ? { [w.widget]: diff } : w.widget;
      });
      return stringifyYaml(out).trimEnd();
    }
    function query(files, opts, cacheFor) {
      const folder = String(opts.folder || "").replace(/\/$/, "");
      const tag = String(opts.tag || "").replace(/^#/, "").toLowerCase();
      const out = [];
      for (const f of files) {
        if (f.extension !== "md") continue;
        if (folder && !f.path.startsWith(folder + "/")) continue;
        const c = cacheFor(f) || {};
        const fm = c.frontmatter || {};
        if (tag) {
          const tags = [].concat(fm.tags || [], (c.tags || []).map((t) => t.tag)).map((t) => String(t).replace(/^#/, "").toLowerCase());
          if (!tags.includes(tag)) continue;
        }
        if (opts.property) {
          const v = fm[opts.property];
          if (v === void 0) continue;
          if (opts.value && String(v).toLowerCase() !== String(opts.value).toLowerCase()) continue;
        }
        out.push({ path: f.path, name: f.basename, mtime: f.stat && f.stat.mtime || 0, fm });
      }
      return out.sort((a, b) => b.mtime - a.mtime);
    }
    function weekly(days, startMs, weeks) {
      const out = [];
      for (let w = 0; w < weeks; w++) out.push({ start: startMs + w * 7 * 864e5, total: days.slice(w * 7, w * 7 + 7).reduce((a, b) => a + b, 0) });
      return out;
    }
    module2.exports = { WIDGETS, ALIASES, normalize, parseBlock, writeBlock, query, weekly };
  }
});

// src/views/mission.js
var require_mission = __commonJS({
  "src/views/mission.js"(exports2, module2) {
    "use strict";
    var { ItemView, setIcon: setIcon2, getIcon } = require("obsidian");
    var { MISSION: MISSION2, STAGES } = require_constants();
    var { rgb: rgb2, rgba: rgba2, ago, clip } = require_util();
    var { renderRecapStrip } = require_recap3();
    async function renderMission2(plugin, el, o = {}) {
      const cats = String(o.categories || "").split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
      const stageOf = (p) => p.stageIndex === void 0 ? -1 : p.stageIndex;
      const projects = (await plugin.store.all()).filter((p) => (!cats.length || cats.includes(String(p.section).toLowerCase())) && (o.archived || p.section !== "Archive" || o.archived === void 0)).slice().sort((a, b) => +plugin.favoriteOf(b).star - +plugin.favoriteOf(a).star || (o.sort === "name" ? a.name.localeCompare(b.name) : o.sort === "stage" ? stageOf(b) - stageOf(a) : o.sort === "activity" ? (b.lastDate || 0) - (a.lastDate || 0) : 0));
      el.empty();
      el.addClass("evs-mission");
      const app = plugin.app;
      const open = (path) => {
        const f = app.vault.getAbstractFileByPath(path);
        if (f) app.workspace.getLeaf(false).openFile(f);
      };
      const head = el.createDiv({ cls: "evs-mc-head" });
      head.createDiv({ cls: "evs-mc-title", text: "Mission control" });
      const stats = head.createDiv({ cls: "evs-mc-stats" });
      const live = projects.filter((p) => p.section !== "Archive");
      const latest = Math.max(0, ...projects.map((p) => p.lastDate || 0));
      stats.createSpan({ text: `${live.length} projects` });
      stats.createSpan({ text: `${live.reduce((n, p) => n + p.open, 0)} open tasks` });
      if (latest) stats.createSpan({ text: `last session ${ago(latest)}` });
      const tools = head.createDiv({ cls: "evs-mc-tools" });
      for (const [icon, label, fn] of [
        ["folder-plus", "New project", () => plugin.openCreator()],
        ["folder-kanban", "Projects", () => plugin.openProjects()],
        ["rotate-cw", "Refresh", () => plugin.store.invalidate()],
        ["sparkles", "Neural graph", () => plugin.openGraph()],
        ["calendar-range", "Timeline", () => plugin.openTimeline()],
        ["chart-no-axes-column", "Recap", () => plugin.openRecap()],
        ["list-checks", "Workshop tasks", () => plugin.openTasks()],
        ["gavel", "Decisions", () => plugin.openDecisions()],
        ["sliders-horizontal", "Control panel", () => plugin.openPanel()]
      ]) {
        const b = tools.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
        setIcon2(b, icon);
        b.onclick = fn;
      }
      if (o.live !== false) renderLive(plugin, el, projects);
      const strip = el.createDiv({ cls: "evs-rc-strip-wrap" });
      const grid = el.createDiv({ cls: "evs-mc-grid" });
      if (o.week !== false) renderRecapStrip(plugin, strip).then((byPath) => {
        if (!byPath) return;
        for (const card of grid.querySelectorAll(".evs-mc-card[data-path]")) {
          const s = byPath[card.dataset.path];
          if (!s || !s.activity) continue;
          const c = s.counts;
          const bits = [c.sessions && `${c.sessions} work sessions`, c.commits && `${c.commits} commits`, c.done && `${c.done} finished`, c.playtests && `${c.playtests} playtests`, c.clips && `${c.clips} clips`].filter(Boolean);
          const line = createDiv({ cls: "evs-mc-week", text: `This week: ${bits.join(" \xB7 ")}` });
          line.onclick = (e) => {
            e.stopPropagation();
            plugin.openRecap({ only: card.dataset.path });
          };
          card.querySelector(".evs-mc-chips")?.before(line);
        }
      }).catch(() => {
      });
      for (const p of projects) {
        const st = plugin.projStyle(p);
        const card = grid.createDiv({ cls: "evs-mc-card" + (p.section === "Archive" ? " is-archived" : ""), attr: { "data-path": p.path } });
        card.style.setProperty("--p", st.color);
        card.onclick = () => open(p.hub);
        const top = card.createDiv({ cls: "evs-mc-top" });
        setIcon2(top.createSpan({ cls: "evs-mc-icon" }), st.icon);
        top.createSpan({ cls: "evs-mc-name", text: p.name });
        const fav = plugin.favoriteOf(p);
        const star = top.createSpan({ cls: "evs-mc-star" + (fav.star ? " is-on" : ""), attr: { "aria-label": fav.holo ? `Holo favorite: ${fav.holo}${fav.pinned ? " \xB7 pinned" : ""}` : fav.pinned ? "Pinned (click to unpin)" : "Pin to the top" } });
        setIcon2(star, "star");
        star.onclick = (e) => {
          e.stopPropagation();
          plugin.togglePin(p);
        };
        const gr = top.createSpan({ cls: "evs-mc-holo", attr: { "aria-label": "Its own graph" } });
        setIcon2(gr, "waypoints");
        gr.onclick = (e) => {
          e.stopPropagation();
          plugin.openGraph(p.path);
        };
        if (plugin.workshop.repoDir(p)) {
          const h = top.createSpan({ cls: "evs-mc-holo", attr: { "aria-label": "Open in Holo" } });
          setIcon2(h, "monitor-play");
          h.onclick = (e) => {
            e.stopPropagation();
            plugin.openInHolo(p);
          };
        }
        const bar = card.createDiv({ cls: "evs-mc-stage" });
        const segs = bar.createDiv({ cls: "evs-mc-segs" });
        STAGES.forEach((s, i) => segs.createDiv({ cls: "evs-mc-seg" + (i <= p.stageIndex ? " is-on" : ""), attr: { "aria-label": s } }));
        bar.createDiv({ cls: "evs-mc-stage-label", text: p.hasWorkshop ? `${p.stage} \xB7 ${p.open} open task${p.open === 1 ? "" : "s"}${p.review ? ` \xB7 ${p.review} for your review` : ""}` : p.section });
        if (p.next) {
          const n = card.createDiv({ cls: "evs-mc-next" });
          n.createSpan({ cls: "evs-mc-k", text: "Next " });
          n.createSpan({ text: p.next });
        } else if (p.nextTask) {
          const n = card.createDiv({ cls: "evs-mc-next" });
          n.createSpan({ cls: "evs-mc-k", text: "Task " });
          n.createSpan({ text: p.nextTask });
        }
        if (p.quote && o.quote !== false) {
          const q = card.createDiv({ cls: "evs-mc-quote" });
          q.createSpan({ text: `\u201C${p.quote}\u201D` });
          if (p.quoteDate) q.createSpan({ cls: "evs-mc-date", text: ` ${p.quoteDate}` });
        }
        const chips = card.createDiv({ cls: "evs-mc-chips" });
        const chip = (text, path) => {
          const c = chips.createSpan({ cls: "evs-mc-chip", text });
          c.onclick = (e) => {
            e.stopPropagation();
            open(path);
          };
        };
        chip(`${p.nQuestions} question${p.nQuestions === 1 ? "" : "s"}`, p.questions);
        chip(`${p.nDecisions} decision${p.nDecisions === 1 ? "" : "s"}`, p.decisions);
        chip("Feel tests", p.feel);
        if (p.hasWorkshop) {
          const c = chips.createSpan({ cls: "evs-mc-chip is-tasks", text: p.review ? `Tasks \xB7 ${p.review} to review` : "Tasks" });
          c.onclick = (e) => {
            e.stopPropagation();
            plugin.openTasks(p.path);
          };
        }
        if (p.lastDate) chips.createSpan({ cls: "evs-mc-when", text: ago(p.lastDate) });
      }
      if (!projects.length) el.createDiv({ cls: "evs-hint", text: "No project folders yet under Games, Tools or Archive." });
    }
    var MissionView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
      }
      getViewType() {
        return MISSION2;
      }
      getDisplayText() {
        return "Mission control";
      }
      getIcon() {
        return "layout-dashboard";
      }
      async onOpen() {
        this.contentEl.addClass("evs-mission-view");
        await this.render();
      }
      async render() {
        await renderMission2(this.plugin, this.contentEl);
      }
    };
    function iconMask(id) {
      const svg = getIcon(id) || getIcon("folder");
      if (!svg) return "none";
      svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      const str = svg.outerHTML.replace(/currentColor/g, "#000");
      return `url("data:image/svg+xml,${encodeURIComponent(str)}")`;
    }
    function projectCss2(plugin) {
      if (!plugin.settings.projectColors) return "";
      const esc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      let css = "";
      for (const f of plugin.store.folders()) {
        const st = plugin.projStyle(f), p = esc(f.path);
        css += `.nav-folder-title[data-path="${p}"] { color: ${st.color}; }
`;
        css += `.nav-folder-title[data-path="${p}"] .nav-folder-title-content::before { content: ""; display: inline-block; width: 14px; height: 14px; margin-right: 6px; vertical-align: -2px; background-color: ${st.color}; -webkit-mask: ${iconMask(st.icon)} center / contain no-repeat; }
`;
        css += `.nav-file-title[data-path^="${p}/"], .nav-folder-title[data-path^="${p}/"] { box-shadow: inset 2px 0 0 ${rgba2(st.color, 0.55)}; }
`;
      }
      return css;
    }
    function renderLive(plugin, el, projects) {
      const live = projects.filter((p) => p.live).sort((a, b) => b.live.at - a.live.at).slice(0, 4);
      if (!live.length) return;
      const strip = el.createDiv({ cls: "evs-live" });
      for (const p of live) {
        const a = p.live, fresh = Date.now() - a.at < 20 * 6e4;
        const item = strip.createDiv({ cls: "evs-live-item" + (fresh ? " is-live" : "") });
        item.style.setProperty("--p", plugin.projStyle(p).color);
        const top = item.createDiv({ cls: "evs-live-top" });
        top.createSpan({ cls: "evs-live-dot" });
        top.createSpan({ cls: "evs-live-proj", text: `${p.name} \xB7 ${a.task}` });
        top.createSpan({ cls: "evs-live-when", text: fresh ? "live" : ago(a.at) });
        let text = a.text || a.caption || "";
        if (a.kind === "test") text = `Tests: ${a.passed} passed, ${a.failed} failed${a.command ? ` (${a.command})` : ""}`;
        if (a.kind === "shot" && a.file) {
          const img = item.createEl("img", { cls: "evs-live-shot" });
          img.src = plugin.app.vault.adapter.getResourcePath(`${a.dir}/shots/${a.file}`);
        }
        item.createDiv({ cls: "evs-live-text", text: clip(text, 160) });
        item.onclick = () => plugin.openPath(p.hub);
      }
    }
    function promptsFor(p) {
      const brief = p.brief;
      return [
        ["Brief me", `Brief me on ${p.name}: read "${brief}" first (open the full notes only if you need them), then tell me where it stands and what you'd do next.`],
        ["Feel \u2192 tasks", `Read the newest entry in "${p.feel}" and turn what I said into Workshop tasks for ${p.name}: one per problem, each with "Done looks like". Don't fix anything yet.`],
        ["Plan next", `Using "${brief}", plan the next milestone for ${p.name}: 3-5 tasks, the risks, and what I should playtest. Keep it short.`],
        ["Hand off", `Hand off this session for ${p.name}: log what changed, what's verified and what's next with workshop log add, save any feedback I gave to the vault, then give me a one-paragraph prompt to start a fresh session from "${brief}".`]
      ];
    }
    module2.exports = { renderMission: renderMission2, MissionView: MissionView2, iconMask, projectCss: projectCss2, renderLive, promptsFor };
  }
});

// src/views/dashboard.js
var require_dashboard2 = __commonJS({
  "src/views/dashboard.js"(exports2, module2) {
    "use strict";
    var { Modal, Notice: Notice2, setIcon: setIcon2, parseYaml, stringifyYaml, MarkdownRenderer, Component } = require("obsidian");
    var { WIDGETS, parseBlock, writeBlock, query, weekly } = require_dashboard();
    var { board, checklist } = require_workshop();
    var { STAGES } = require_constants();
    var { ago, clip, bullets } = require_util();
    var { render: fill } = require_types();
    var R = require_recap();
    var { parseFeel } = require_recap2();
    var { promptsFor, renderMission: renderMission2 } = require_mission();
    var { renderRecapStrip } = require_recap3();
    var open = (plugin, path, sub) => plugin.app.workspace.openLinkText(sub ? `${path}#${sub}` : path, "", false);
    var row = (parent, text, cls = "") => parent.createDiv({ cls: "evs-db-row " + cls, text });
    var ToolRunner = class extends Modal {
      constructor(plugin, p, tool) {
        super(plugin.app);
        Object.assign(this, { plugin, p, tool });
      }
      onOpen() {
        const dir = this.plugin.workshop.repoDir(this.p);
        const cmd = fill(this.tool.run, { slug: (dir || "").split(/[\\/]/).pop() || this.p.name, name: this.p.name });
        this.modalEl.addClass("evs-tool-run");
        this.titleEl.setText(`${this.tool.label}: ${this.p.name}`);
        this.contentEl.createDiv({ cls: "evs-rc-dim", text: `${cmd}   (in ${dir || "no repo"})` });
        const out = this.contentEl.createEl("pre", { cls: "evs-tool-out" });
        const foot = this.contentEl.createDiv({ cls: "evs-cr-foot" });
        const state = foot.createSpan({ cls: "evs-rc-dim", text: "Running\u2026" });
        foot.createDiv({ cls: "evs-cr-space" });
        const stop = foot.createEl("button", { text: "Stop" });
        foot.createEl("button", { text: "Close" }).onclick = () => this.close();
        if (!dir) {
          state.setText("This project has no repo to run it in.");
          return;
        }
        const cp = require("child_process");
        this.child = cp.spawn(cmd, { cwd: dir, shell: true, windowsHide: true });
        const add = (d) => {
          out.appendText(String(d));
          out.scrollTop = out.scrollHeight;
        };
        this.child.stdout.on("data", add);
        this.child.stderr.on("data", add);
        this.child.on("error", (e) => state.setText(`Couldn't start: ${e.message}`));
        this.child.on("close", (code) => {
          state.setText(code === 0 ? "Finished \u2713" : `Stopped with code ${code}`);
          state.toggleClass("evs-rc-good", code === 0);
          state.toggleClass("evs-rc-bad", code !== 0);
          stop.disabled = true;
        });
        stop.onclick = () => this.child && this.child.kill();
      }
      onClose() {
        if (this.child && this.child.exitCode === null) this.child.kill();
      }
    };
    var RENDER = {
      async stage(plugin, el, p) {
        const pj = await plugin.workshop.state(p);
        if (!pj) return row(el, "No Workshop state for this project.", "is-dim");
        const c = checklist(pj);
        const segs = el.createDiv({ cls: "evs-mc-segs" });
        STAGES.forEach((s, i) => segs.createDiv({ cls: "evs-mc-seg" + (i <= c.index ? " is-on" : ""), attr: { "aria-label": s } }));
        row(el, `${c.stage} \xB7 ${c.complete ? "checklist complete" : `${c.left} of ${c.items.length} left`}`, "is-strong");
        for (const it of c.items) row(el, `${it.done ? "\u2611" : "\u2610"} ${it.text}`, it.done ? "is-dim" : "");
        el.createEl("button", { text: "Open tasks" }).onclick = () => plugin.openTasks(p.path);
      },
      async tasks(plugin, el, p, o) {
        const pj = await plugin.workshop.state(p);
        if (!pj) return row(el, "No Workshop tasks for this project.", "is-dim");
        const b = board(pj);
        const all = b.columns.flatMap((c) => c.tasks.map((t) => Object.assign({ col: c.label }, t)));
        const list = o.show === "open" ? all : all.filter((t) => t.status === o.show);
        if (!list.length) row(el, o.show === "open" ? "No open tasks." : `Nothing ${o.show}.`, "is-dim");
        for (const t of list.slice(0, o.limit)) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createSpan({ cls: "evs-rc-id", text: t.id });
          r.createSpan({ text: t.title });
          r.createSpan({ cls: `evs-db-pill is-${t.status}`, text: t.status });
          r.onclick = () => plugin.openTasks(p.path);
        }
        if (list.length > o.limit) row(el, `+${list.length - o.limit} more`, "is-dim");
      },
      async recap(plugin, el, p, o) {
        const r = R.range(o.range);
        const data = await plugin.recaps.gather(r, p ? { only: p.path } : {});
        const cur = data.projects.map((x) => x.cur), before = data.projects.map((x) => x.before);
        const m = R.master(cur, before);
        row(el, r.label, "is-dim");
        const tiles = el.createDiv({ cls: "evs-db-tiles" });
        for (const [k, label] of [["sessions", "Work sessions"], ["commits", "Commits"], ["done", "Finished"], ["review", "For review"], ["playtests", "Playtests"], ["tests", "Test runs"]]) {
          const n = m.counts[k] || 0, d = n - (m.before && m.before[k] || 0);
          const t = tiles.createDiv({ cls: "evs-db-tile" + (n ? "" : " is-zero") });
          t.createDiv({ cls: "evs-db-n", text: String(n) });
          t.createDiv({ cls: "evs-db-l", text: label });
          if (d) t.createDiv({ cls: "evs-rc-delta " + (d > 0 ? "is-up" : "is-down"), text: `${d > 0 ? "\u25B2" : "\u25BC"}${Math.abs(d)}` });
        }
        for (const i of (p && data.projects[0] ? R.insights(data.projects[0].cur, data.projects[0].before) : m.insights).slice(0, 3)) el.createDiv({ cls: `evs-rc-ins is-${i.level}`, text: i.text });
        el.createEl("button", { text: "Open recap" }).onclick = () => plugin.openRecap({ only: p ? p.path : null, kind: o.range });
      },
      async trends(plugin, el, p, o) {
        const weeks = Math.max(2, Math.min(26, +o.weeks || 8));
        const last = R.range("week", Date.now()).start, start = R.addDays(last, -7 * (weeks - 1)), end = R.addDays(last, 7);
        const r = R.range("custom", 0, { from: R.ymd(start), to: R.ymd(end - 1) });
        const data = await plugin.recaps.gather(r, p ? { only: p.path } : {});
        drawTrends(el, R.weeklyTrends(data.projects, start, weeks), start, weeks);
      },
      async feedback(plugin, el, p, o) {
        const entries = parseFeel(p.texts && p.texts.feel).slice(0, o.limit);
        if (!entries.length) row(el, `Nothing in ${p.feedbackLabel || "Feel tests"} yet.`, "is-dim");
        for (const e of entries) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createDiv({ cls: "evs-rc-when", text: `${R.ymd(e.at)}${e.title ? ` \xB7 ${e.title}` : ""}` });
          for (const q of e.quotes.slice(0, 2)) r.createDiv({ cls: "evs-rc-quote", text: `\u201C${clip(q, 160)}\u201D` });
          r.onclick = () => open(plugin, p.feel, e.heading);
        }
        const b = el.createEl("button", { text: "New entry" });
        b.onclick = () => plugin.newPlaytest(p);
      },
      async decisions(plugin, el, p, o) {
        await plugin.guard.index();
        const mine = plugin.guard.all.filter((d) => d.project === p.path && d.kind === "decision").sort((a, b) => b.at - a.at);
        const s = plugin.guard.summaryFor(p.path);
        const chips = el.createDiv({ cls: "evs-dc-chips" });
        chips.createSpan({ cls: "evs-dc-chip", text: `${mine.length} decisions` });
        if (s.needsReview.length) chips.createSpan({ cls: "evs-dc-chip is-warn", text: `${s.needsReview.length} to review` });
        if (s.conflicts.length) chips.createSpan({ cls: "evs-dc-chip is-bad", text: `${s.conflicts.length} conflicts` });
        for (const d of mine.slice(0, o.limit)) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createSpan({ cls: "evs-rc-when", text: d.date });
          r.createSpan({ text: clip(d.title, 90) });
          r.onclick = () => plugin.openDecisions({ decision: d.id });
        }
        if (!mine.length) row(el, "No decisions yet.", "is-dim");
      },
      async questions(plugin, el, p, o) {
        const qs = bullets(p.texts && p.texts.questions).filter((q) => q.trim());
        if (!qs.length) row(el, "No open questions.", "is-dim");
        for (const q of qs.slice(0, o.limit)) row(el, `\u2022 ${clip(q, 160)}`, "is-clickable").onclick = () => open(plugin, p.questions);
      },
      async commits(plugin, el, p, o) {
        const r = R.range("custom", 0, { from: R.ymd(R.addDays(Date.now(), -30)), to: R.ymd(Date.now()) });
        const data = await plugin.recaps.gather(r, p ? { only: p.path } : {});
        const list = data.projects.flatMap((x) => x.cur.items.commits).sort((a, b) => b.at - a.at);
        if (!list.length) row(el, "No commits in the last 30 days.", "is-dim");
        for (const c of list.slice(0, o.limit)) {
          const r2 = el.createDiv({ cls: "evs-db-item is-clickable" });
          r2.createSpan({ cls: "evs-rc-when", text: ago(c.at) });
          r2.createSpan({ cls: "evs-rc-id", text: c.hash.slice(0, 7) });
          r2.createSpan({ text: clip(c.subject, 100) });
          r2.onclick = () => c.remote ? window.open(`${c.remote}/commit/${c.hash}`) : navigator.clipboard.writeText(c.hash);
        }
      },
      async assets(plugin, el, p, o) {
        const a = plugin.assets.forProject(p);
        if (!Object.keys(a.kinds).length) return row(el, "This project's type names no asset kinds (set them in its type).", "is-dim");
        if (!a.dir) return row(el, "No repo to look in.", "is-dim");
        const chips = el.createDiv({ cls: "evs-dc-chips" });
        for (const [k, n] of Object.entries(a.byKind)) chips.createSpan({ cls: "evs-dc-chip", text: `${n} ${k}` });
        if (!a.files.length) row(el, `No ${Object.keys(a.kinds).join(", ")} files in the repo yet.`, "is-dim");
        for (const f of a.files.slice(0, o.limit)) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createSpan({ cls: "evs-db-pill", text: f.kind });
          r.createSpan({ text: f.rel });
          r.createSpan({ cls: "evs-rc-when", text: ago(f.mtime) });
          r.setAttr("aria-label", "Open it");
          r.onclick = () => require("electron").shell.openPath(f.path);
        }
        if (a.capped) row(el, "Big repo: only part of it was looked at.", "is-dim");
      },
      async tools(plugin, el, p) {
        const t = plugin.types.get(p.type);
        const tools = t && t.tools || [];
        const dir = plugin.workshop.repoDir(p);
        const wrap = el.createDiv({ cls: "evs-db-buttons" });
        for (const tool of tools) {
          const b = wrap.createEl("button", { text: tool.label });
          b.onclick = () => {
            if (tool.run) new ToolRunner(plugin, p, tool).open();
            else if (tool.open) require("electron").shell.openPath(require("path").join(dir || "", fill(tool.open, { slug: (dir || "").split(/[\\/]/).pop(), name: p.name })));
            else if (tool.url) window.open(fill(tool.url, { slug: (dir || "").split(/[\\/]/).pop(), name: p.name }));
          };
        }
        if (dir) wrap.createEl("button", { text: "Open in Holo" }).onclick = () => plugin.openInHolo(p);
        if (dir) wrap.createEl("button", { text: "Open repo folder" }).onclick = () => require("electron").shell.openPath(dir);
        if (!tools.length && !dir) row(el, "No tools for this type yet (add them in its type).", "is-dim");
      },
      async claude(plugin, el, p) {
        const wrap = el.createDiv({ cls: "evs-db-buttons" });
        for (const [label, text] of promptsFor(p)) {
          wrap.createEl("button", { text: label }).onclick = async () => {
            await navigator.clipboard.writeText(text);
            new Notice2(`Copied "${label}": paste it into Claude`);
          };
        }
        wrap.createEl("button", { text: "Check against decisions" }).onclick = async () => {
          await plugin.guard.index();
          await navigator.clipboard.writeText(plugin.guard.claudePrompt(p, { where: `${p.name}'s notes and open tasks` }));
          new Notice2("Copied a decision review prompt");
        };
        const t = plugin.types.get(p.type);
        const skills = t && t.claude && t.claude.skills || [];
        if (skills.length) row(el, `Skills Claude should use here: ${skills.join(", ")}`, "is-dim");
      },
      async timeline(plugin, el, p, o) {
        const since = Date.now() - (+o.days || 14) * R.DAY;
        const evs = (p.events || []).filter((e) => e.at >= since).slice(0, 12);
        if (!evs.length) row(el, `Nothing in the last ${o.days} days.`, "is-dim");
        for (const e of evs) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createSpan({ cls: "evs-rc-when", text: R.ymd(e.at) });
          r.createSpan({ cls: "evs-db-pill", text: e.kind });
          r.createSpan({ text: clip(e.title, 100) });
          r.onclick = () => open(plugin, e.path, e.heading);
        }
      },
      async notes(plugin, el, p, o) {
        const files = plugin.app.vault.getMarkdownFiles().filter((f) => f.path.startsWith(p.path + "/") && !/(^|\/)Repo - /.test(f.path)).sort((a, b) => b.stat.mtime - a.stat.mtime);
        for (const f of files.slice(0, o.limit)) {
          const r = el.createDiv({ cls: "evs-db-item is-clickable" });
          r.createSpan({ text: f.basename });
          r.createSpan({ cls: "evs-rc-when", text: ago(f.stat.mtime) });
          r.onclick = () => plugin.openPath(f.path);
        }
      },
      async links(plugin, el, p) {
        const wrap = el.createDiv({ cls: "evs-db-buttons" });
        for (const [label, path] of [["Hub", p.hub], [p.feedbackLabel || "Feel tests", p.feel], ["Decisions", p.decisions], ["Questions", p.questions], ["Brief", p.brief]]) {
          if (plugin.app.vault.getAbstractFileByPath(path)) wrap.createEl("button", { text: label }).onclick = () => plugin.openPath(path);
        }
        wrap.createEl("button", { text: "Tasks" }).onclick = () => plugin.openTasks(p.path);
        wrap.createEl("button", { text: "Recap" }).onclick = () => plugin.openRecap({ only: p.path });
        wrap.createEl("button", { text: "Graph" }).onclick = () => plugin.openGraph(p.path);
        const related = (p.texts && p.texts.hub || "").match(/^- Related: \[\[([^\]|]+)(?:\|[^\]]*)?\]\]/gm) || [];
        for (const l of related) {
          const target = l.replace(/^- Related: \[\[|(\|[^\]]*)?\]\]$/g, "");
          wrap.createEl("button", { text: `\u2194 ${target.split("/").pop()}` }).onclick = () => open(plugin, target);
        }
      },
      async query(plugin, el, p, o) {
        const hits = query(plugin.app.vault.getMarkdownFiles(), o, (f) => plugin.app.metadataCache.getFileCache(f));
        if (!hits.length) return row(el, "No notes match.", "is-dim");
        if (o.show === "table") {
          const keys = [...new Set(hits.slice(0, o.limit).flatMap((h) => Object.keys(h.fm)))].filter((k) => k !== "position").slice(0, 4);
          const t = el.createEl("table", { cls: "evs-db-table" });
          const hr = t.createEl("tr");
          for (const k of ["Note", ...keys]) hr.createEl("th", { text: k });
          for (const h of hits.slice(0, o.limit)) {
            const tr = t.createEl("tr", { cls: "is-clickable" });
            tr.createEl("td", { text: h.name });
            for (const k of keys) tr.createEl("td", { text: h.fm[k] === void 0 ? "" : String(h.fm[k]) });
            tr.onclick = () => plugin.openPath(h.path);
          }
        } else {
          const wrap = el.createDiv({ cls: o.show === "cards" ? "evs-db-cards" : "" });
          for (const h of hits.slice(0, o.limit)) {
            const r = wrap.createDiv({ cls: (o.show === "cards" ? "evs-db-card" : "evs-db-item") + " is-clickable" });
            r.createSpan({ text: h.name });
            if (h.fm.summary) r.createDiv({ cls: "evs-rc-dim", text: clip(String(h.fm.summary), 120) });
            r.onclick = () => plugin.openPath(h.path);
          }
        }
      },
      async counter(plugin, el, p, o) {
        const n = query(plugin.app.vault.getMarkdownFiles(), o, (f) => plugin.app.metadataCache.getFileCache(f)).length;
        el.createDiv({ cls: "evs-db-big", text: String(n) });
      },
      async buttons(plugin, el, p, o) {
        const wrap = el.createDiv({ cls: "evs-db-buttons" });
        for (const b of o.buttons || []) {
          wrap.createEl("button", { text: b.label || "Button" }).onclick = async () => {
            if (b.action === "open") open(plugin, b.target);
            else if (b.action === "view") ({ tasks: () => plugin.openTasks(p && p.path), recap: () => plugin.openRecap({ only: p && p.path }), decisions: () => plugin.openDecisions(), mission: () => plugin.openMission(), graph: () => plugin.openGraph(), timeline: () => plugin.openTimeline(), creator: () => plugin.openCreator() }[b.target] || (() => new Notice2(`Unknown view "${b.target}"`)))();
            else if (b.action === "copy") {
              await navigator.clipboard.writeText(b.target || "");
              new Notice2("Copied");
            } else if (b.action === "tool" && p) {
              const t = ((plugin.types.get(p.type) || {}).tools || []).find((x) => x.label === b.target);
              if (t) new ToolRunner(plugin, p, t).open();
              else new Notice2(`No tool "${b.target}" in this project's type`);
            }
          };
        }
        if (!(o.buttons || []).length) row(el, "No buttons yet: Customize \u2192 this widget's options.", "is-dim");
      },
      async markdown(plugin, el, p, o, ctx) {
        await MarkdownRenderer.render(plugin.app, String(o.text || ""), el.createDiv({ cls: "markdown-rendered" }), ctx && ctx.sourcePath || "", ctx.component);
      },
      async mission(plugin, el, p, o) {
        await renderMission2(plugin, el.createDiv(), Object.assign({}, o, { sort: o.sort === "folder" ? void 0 : o.sort, archived: !!o.archived }));
      },
      // your pinned projects and Holo favorites, each one click from its hub or Holo
      async favorites(plugin, el, p, o) {
        const all = (await plugin.store.all()).filter((x) => plugin.favoriteOf(x).star);
        if (!all.length) row(el, "Nothing pinned yet: star a project on mission control or in Projects.", "is-dim");
        for (const x of all) {
          const f = plugin.favoriteOf(x);
          const r = el.createDiv({ cls: "evs-db-item" });
          setIcon2(r.createSpan({ cls: "evs-nm-icon evs-fav-star" }), "star");
          const n = r.createSpan({ cls: "is-clickable evs-nm-proj", text: x.name });
          n.onclick = () => plugin.openPath(x.hub);
          if (f.holo) r.createSpan({ cls: "evs-db-pill", text: f.holo });
          const btns = r.createSpan({ cls: "evs-fav-btns" });
          btns.createEl("button", { text: "Vault", attr: { "aria-label": "Its dashboard here in the vault" } }).onclick = () => plugin.openInVault(x);
          btns.createEl("button", { text: "Graph", attr: { "aria-label": "Its own graph" } }).onclick = () => plugin.openGraph(x.path);
          if (plugin.workshop.repoDir(x)) btns.createEl("button", { text: "Holo", attr: { "aria-label": "Open it in EMX Holo IDE" } }).onclick = () => plugin.openInHolo(x);
        }
        if (o.holo && plugin.holoMatch.loose.length) {
          row(el, "Holo favorites outside the vault", "is-dim");
          for (const f of plugin.holoMatch.loose) {
            const r = el.createDiv({ cls: "evs-db-item" });
            r.createSpan({ text: f.name });
            if (f.collection) r.createSpan({ cls: "evs-db-pill", text: f.collection });
            r.createEl("button", { text: "Holo" }).onclick = () => plugin.holo.open(f.root).then((t) => new Notice2(t), (e) => new Notice2(`Holo: ${e.message}`));
          }
        }
      },
      // one list of everything waiting on you, most urgent first; each opens where it's dealt with
      async "needs-me"(plugin, el, p, o) {
        const items = await needsMe(plugin, p);
        if (!items.length) return row(el, "Nothing is waiting on you. Go make something.", "is-dim");
        for (const it of items.slice(0, o.limit)) {
          const r = el.createDiv({ cls: `evs-db-item is-clickable evs-nm is-${it.level}` });
          setIcon2(r.createSpan({ cls: "evs-nm-icon" }), it.icon);
          r.createSpan({ cls: "evs-nm-proj", text: it.project });
          r.createSpan({ text: it.text });
          r.onclick = it.go;
        }
        if (items.length > o.limit) row(el, `+${items.length - o.limit} more`, "is-dim");
      },
      async "this-week"(plugin, el) {
        await renderRecapStrip(plugin, el);
      }
    };
    async function needsMe(plugin, only) {
      const projects = (await plugin.store.all()).filter((x) => x.section !== "Archive" && (!only || x.path === only.path));
      await plugin.guard.index();
      const out = [];
      const cp = require("child_process");
      const git = (dir, args) => new Promise((res) => cp.execFile("git", args, { cwd: dir, windowsHide: true, timeout: 8e3 }, (e, o) => res(e ? null : String(o))));
      for (const p of projects) {
        const pj = await plugin.workshop.state(p);
        const tasks = pj && pj.tasks || [];
        const review = tasks.filter((t) => t.status === "review"), blocked = tasks.filter((t) => t.status === "blocked");
        if (blocked.length) out.push({ level: "bad", icon: "octagon-pause", project: p.name, text: blocked.length === 1 ? `${blocked[0].id} is blocked${blocked[0].blockedReason ? `: ${clip(blocked[0].blockedReason, 80)}` : ""}` : `${blocked.length} tasks are blocked`, go: () => plugin.openTasks(p.path) });
        if (review.length) out.push({ level: "warn", icon: "eye", project: p.name, text: review.length === 1 ? `${review[0].id} waits for your review: ${clip(review[0].title, 80)}` : `${review.length} tasks wait for your review`, go: () => plugin.openTasks(p.path) });
        const s = plugin.guard.summaryFor(p.path);
        if (s.conflicts.length) out.push({ level: "bad", icon: "shield-alert", project: p.name, text: `${s.conflicts.length} note or task may conflict with a decision`, go: () => plugin.openDecisions({ only: p.path }) });
        if (s.needsReview.length) out.push({ level: "info", icon: "gavel", project: p.name, text: `${s.needsReview.length} decision${s.needsReview.length === 1 ? "" : "s"} may need a review`, go: () => plugin.openDecisions({ only: p.path }) });
        const flags = plugin.app.vault.getAbstractFileByPath(`${p.path}/${p.name} - Playtest flags.md`);
        if (flags && Date.now() - flags.stat.mtime < 7 * 864e5) out.push({ level: "info", icon: "flag", project: p.name, text: "New flagged builds from playtests this week", go: () => plugin.openPath(flags.path) });
        const a = plugin.assets.forProject(p);
        if (a.license === "required" && a.files.length) {
          await plugin.licenses.load();
          const missing = a.files.filter((f) => !plugin.licenses.ok(plugin.licenses.get(p, f.rel))).length;
          if (missing) out.push({ level: "info", icon: "badge-alert", project: p.name, text: `${missing} asset${missing === 1 ? "" : "s"} without a license (needed to publish)`, go: () => plugin.openProjects("assets") });
        }
        const dir = plugin.workshop.repoDir(p);
        if (dir) {
          const st = await git(dir, ["status", "--porcelain=v1", "-b"]);
          if (st !== null) {
            const lines = st.split("\n").filter(Boolean);
            const changed = lines.filter((l) => !l.startsWith("##")).length;
            const ahead = +((lines[0] || "").match(/ahead (\d+)/) || [0, 0])[1];
            if (changed) out.push({ level: "info", icon: "save", project: p.name, text: `${changed} file${changed === 1 ? "" : "s"} changed and not snapshotted`, go: () => plugin.openTasks(p.path) });
            if (ahead) out.push({ level: "info", icon: "upload", project: p.name, text: `${ahead} commit${ahead === 1 ? "" : "s"} not pushed to GitHub`, go: () => plugin.openTasks(p.path) });
          }
        }
      }
      const rank = { bad: 0, warn: 1, info: 2 };
      return out.sort((a, b) => rank[a.level] - rank[b.level]);
    }
    var NEEDS_PROJECT = /* @__PURE__ */ new Set(["stage", "tasks", "feedback", "decisions", "questions", "assets", "tools", "claude", "timeline", "notes", "links"]);
    var WidgetOptions = class extends Modal {
      constructor(app, w, done) {
        super(app);
        Object.assign(this, { w, done });
      }
      onOpen() {
        const def = WIDGETS[this.w.widget] || { label: this.w.widget, options: {} };
        this.titleEl.setText(`${def.label}: options`);
        const o = JSON.parse(JSON.stringify(this.w.options));
        const form = this.contentEl.createDiv({ cls: "evs-cr-form" });
        if (!Object.keys(def.options).length) form.createDiv({ cls: "evs-rc-dim", text: "This widget has no options." });
        for (const [k, spec] of Object.entries(def.options)) {
          const f = form.createDiv({ cls: "evs-cr-field" });
          f.createDiv({ cls: "evs-cr-label", text: k[0].toUpperCase() + k.slice(1) });
          if (spec.kind === "choice") {
            const s = f.createEl("select", { cls: "dropdown" });
            for (const c of spec.choices) s.createEl("option", { value: c, text: c });
            s.value = o[k];
            s.onchange = () => o[k] = s.value;
          } else if (spec.kind === "number") {
            const i = f.createEl("input", { type: "number", value: String(o[k]) });
            i.oninput = () => o[k] = +i.value;
          } else if (spec.kind === "toggle") {
            const cb = f.createEl("input", { type: "checkbox" });
            cb.checked = !!o[k];
            cb.onchange = () => o[k] = cb.checked;
          } else if (spec.kind === "longtext") {
            const ta = f.createEl("textarea", { attr: { rows: 6 } });
            ta.value = o[k];
            ta.oninput = () => o[k] = ta.value;
          } else if (spec.kind === "buttons") {
            const list = f.createDiv();
            const draw = () => {
              list.empty();
              o[k].forEach((b, i) => {
                const r = list.createDiv({ cls: "evs-cr-row" });
                const l = r.createEl("input", { type: "text", value: b.label || "", attr: { placeholder: "Label" } });
                l.oninput = () => b.label = l.value;
                const a = r.createEl("select", { cls: "dropdown" });
                for (const [v, t] of [["open", "Open a note"], ["view", "Open a view"], ["tool", "Run a tool"], ["copy", "Copy text"]]) a.createEl("option", { value: v, text: t });
                a.value = b.action || "open";
                a.onchange = () => b.action = a.value;
                const tg = r.createEl("input", { type: "text", value: b.target || "", attr: { placeholder: "Note, view (tasks, recap, decisions, mission, graph, timeline, creator), tool name or text" } });
                tg.oninput = () => b.target = tg.value;
                r.createEl("button", { text: "\u2715" }).onclick = () => {
                  o[k].splice(i, 1);
                  draw();
                };
              });
              list.createEl("button", { text: "+ Button" }).onclick = () => {
                o[k].push({ label: "", action: "open", target: "" });
                draw();
              };
            };
            draw();
          } else {
            const i = f.createEl("input", { type: "text", value: String(o[k] ?? ""), attr: { placeholder: spec.kind === "folder" ? "e.g. Games/My Game" : "" } });
            i.oninput = () => o[k] = i.value;
          }
        }
        const foot = this.contentEl.createDiv({ cls: "evs-cr-foot" });
        foot.createDiv({ cls: "evs-cr-space" });
        foot.createEl("button", { cls: "mod-cta", text: "Apply" }).onclick = () => {
          this.close();
          this.done(o);
        };
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    var WidgetGallery = class extends Modal {
      constructor(app, done) {
        super(app);
        this.done = done;
      }
      onOpen() {
        this.titleEl.setText("Add a widget");
        this.modalEl.addClass("evs-gallery");
        const groups = {};
        for (const [id, w] of Object.entries(WIDGETS)) (groups[w.group] ||= []).push([id, w]);
        for (const [g, list] of Object.entries(groups)) {
          this.contentEl.createDiv({ cls: "evs-dc-sec-h", text: g });
          const grid = this.contentEl.createDiv({ cls: "evs-cr-types" });
          for (const [id, w] of list) {
            const c = grid.createDiv({ cls: "evs-cr-type" });
            setIcon2(c.createDiv({ cls: "evs-cr-type-icon" }), w.icon);
            c.createDiv({ cls: "evs-cr-type-name", text: w.label });
            c.onclick = () => {
              this.close();
              this.done(id);
            };
          }
        }
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    async function renderDashboard2(plugin, el, src, ctx) {
      el.empty();
      el.addClass("evs-dashboard");
      const parsed = parseBlock(src, parseYaml);
      const comp = new Component();
      comp.load();
      if (ctx && ctx.addChild) {
        const { MarkdownRenderChild: MarkdownRenderChild2 } = require("obsidian");
        const child = new MarkdownRenderChild2(el);
        child.onunload = () => comp.unload();
        ctx.addChild(child);
      }
      const c2 = Object.assign({}, ctx, { component: comp });
      await plugin.store.all();
      const p = parsed.project && (plugin.store.cache || []).find((x) => x.path === parsed.project) || plugin.store.find(ctx && ctx.sourcePath);
      const state = { editing: el.dataset.editing === "1", widgets: parsed.widgets.slice(), columns: parsed.columns };
      const head = el.createDiv({ cls: "evs-db-head" });
      if (p) head.style.setProperty("--p", plugin.projStyle(p).color);
      head.createDiv({ cls: "evs-db-title", text: p ? p.name : "Dashboard" });
      if (parsed.error) el.createDiv({ cls: "evs-rc-bad", text: parsed.error });
      const tools = head.createDiv({ cls: "evs-db-tools" });
      const grid = el.createDiv({ cls: "evs-db-grid" });
      grid.style.gridTemplateColumns = `repeat(${state.columns}, minmax(0, 1fr))`;
      const save = async () => {
        const file = plugin.app.vault.getAbstractFileByPath(ctx.sourcePath);
        const info = ctx.getSectionInfo && ctx.getSectionInfo(el);
        if (!file || !info) return new Notice2("Can't save this dashboard here (open its note in Reading or Live Preview)");
        const yaml = writeBlock({ project: parsed.project, columns: state.columns, widgets: state.widgets }, stringifyYaml);
        await plugin.app.vault.process(file, (text) => {
          const lines = text.split("\n");
          if (!/^```+\s*emx-dashboard/.test(lines[info.lineStart] || "")) throw new Error("the note changed; reopen it and try again");
          return [...lines.slice(0, info.lineStart + 1), yaml, ...lines.slice(info.lineEnd)].join("\n");
        });
        el.dataset.editing = "";
        new Notice2("Dashboard saved");
      };
      const btn = (icon, label, fn) => {
        const b = tools.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
        setIcon2(b, icon);
        b.onclick = fn;
      };
      if (state.editing) {
        btn("plus", "Add a widget", () => new WidgetGallery(plugin.app, (id) => {
          state.widgets.push({ widget: id, options: parseBlock(`widgets: [${id}]`, parseYaml).widgets[0].options });
          draw();
        }).open());
        btn("columns-3", "Columns", () => {
          state.columns = state.columns % 4 + 1;
          grid.style.gridTemplateColumns = `repeat(${state.columns}, minmax(0, 1fr))`;
        });
        btn("save", "Save", () => save().catch((e) => new Notice2(`Not saved: ${e.message}`)));
        btn("x", "Cancel", () => {
          el.dataset.editing = "";
          renderDashboard2(plugin, el, src, ctx);
        });
      } else {
        btn("rotate-cw", "Refresh", () => renderDashboard2(plugin, el, src, ctx));
        btn("settings-2", "Customize", () => {
          el.dataset.editing = "1";
          renderDashboard2(plugin, el, src, ctx);
        });
      }
      let dragFrom = null;
      const draw = () => {
        grid.empty();
        state.widgets.forEach((w, i) => {
          const def = WIDGETS[w.widget];
          const card = grid.createDiv({ cls: "evs-db-card-w" + (state.editing ? " is-editing" : "") });
          const h = card.createDiv({ cls: "evs-db-wh" });
          setIcon2(h.createSpan({ cls: "evs-db-wicon" }), def && def.icon || "square");
          h.createSpan({ text: w.options && w.options.title || def && def.label || w.widget });
          const body = card.createDiv({ cls: "evs-db-wb" });
          if (state.editing) {
            card.draggable = true;
            card.ondragstart = () => dragFrom = i;
            card.ondragover = (e) => e.preventDefault();
            card.ondrop = (e) => {
              e.preventDefault();
              if (dragFrom === null || dragFrom === i) return;
              const [m] = state.widgets.splice(dragFrom, 1);
              state.widgets.splice(i, 0, m);
              dragFrom = null;
              draw();
            };
            const ctl = h.createSpan({ cls: "evs-db-wctl" });
            for (const [icon, label, fn] of [
              ["arrow-up", "Move up", () => i > 0 && (state.widgets.splice(i - 1, 0, state.widgets.splice(i, 1)[0]), draw())],
              ["sliders-horizontal", "Options", () => new WidgetOptions(plugin.app, w, (o) => (w.options = o, draw())).open()],
              ["trash-2", "Remove", () => (state.widgets.splice(i, 1), draw())]
            ]) {
              const b = ctl.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
              setIcon2(b, icon);
              b.onclick = fn;
            }
            body.createDiv({ cls: "evs-rc-dim", text: "Drag to move \xB7 options and remove on the right" });
            return;
          }
          if (!def) return row(body, `Unknown widget "${w.widget}"`, "evs-rc-bad");
          if (NEEDS_PROJECT.has(w.widget) && !p) return row(body, "This widget needs a project: put the dashboard in a project's folder, or set project: in it.", "is-dim");
          body.createDiv({ cls: "evs-rc-dim", text: "\u2026" });
          Promise.resolve(RENDER[w.widget](plugin, body, p, w.options, c2)).then(() => body.firstChild && body.firstChild.textContent === "\u2026" && body.firstChild.remove()).catch((e) => {
            body.empty();
            row(body, `Couldn't show this: ${e.message}`, "evs-rc-bad");
          });
        });
        if (!state.widgets.length) grid.createDiv({ cls: "evs-hint", text: state.editing ? "Add widgets with +" : "Empty dashboard: Customize to add widgets." });
      };
      draw();
    }
    var TREND_LABELS = [["sessions", "Work sessions"], ["commits", "Commits"], ["done", "Tasks finished"], ["playtests", "Playtests"], ["tests", "Test runs"], ["decisions", "Decisions"]];
    function drawTrends(el, trends, start, weeks) {
      for (const [key, label] of TREND_LABELS) {
        const vals = trends[key];
        const line = el.createDiv({ cls: "evs-db-trend" });
        line.createSpan({ cls: "evs-db-trend-label", text: label });
        const bars = line.createDiv({ cls: "evs-db-bars" });
        const max = Math.max(1, ...vals);
        vals.forEach((v, i) => {
          const b = bars.createDiv({ cls: "evs-db-bar" + (i === vals.length - 1 ? " is-now" : "") });
          b.style.height = `${Math.round(v / max * 100)}%`;
          b.setAttr("aria-label", `${label}, week of ${R.ymd(start + i * 7 * R.DAY)}: ${v}`);
        });
        const last = vals[vals.length - 1], prev = vals[vals.length - 2] || 0;
        const avg = vals.slice(0, -1).reduce((a, b) => a + b, 0) / Math.max(1, vals.length - 1);
        line.createSpan({ cls: "evs-db-trend-n", text: `${last}${last !== prev ? ` ${last > prev ? "\u25B2" : "\u25BC"}` : ""}`, attr: { "aria-label": `This week ${last}, last week ${prev}, average ${avg.toFixed(1)} a week` } });
      }
      row(el, `Last ${weeks} weeks, one bar per week (this week on the right). Hover a bar for its week.`, "is-dim");
    }
    module2.exports = { drawTrends, renderDashboard: renderDashboard2, RENDER, ToolRunner, WidgetGallery, WidgetOptions, NEEDS_PROJECT, needsMe };
  }
});

// src/views/recap.js
var require_recap3 = __commonJS({
  "src/views/recap.js"(exports2, module2) {
    "use strict";
    var { ItemView, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var { RECAP: RECAP2 } = require_constants();
    var { ago, clip } = require_util();
    var R = require_recap();
    var TILES = [
      ["sessions", "Work sessions", "terminal"],
      ["commits", "Commits", "git-commit-horizontal"],
      ["done", "Finished", "check-circle-2"],
      ["review", "For review", "eye"],
      ["created", "New tasks", "list-plus"],
      ["tests", "Test runs", "flask-conical"],
      ["playtests", "Playtests", "gamepad-2"],
      ["decisions", "Decisions", "gavel"],
      ["edited", "Notes edited", "file-pen-line"],
      ["clips", "Clips", "clapperboard"]
    ];
    var SECTIONS = [
      ["insights", "Insights"],
      ["trends", "8-week trends"],
      ["timeline", "Timeline"],
      ["done", "Finished"],
      ["review", "For your review"],
      ["blocked", "Blocked"],
      ["created", "New tasks"],
      ["sessions", "Sessions"],
      ["tests", "Tests"],
      ["playtests", "Playtests"],
      ["decisions", "Decisions"],
      ["commits", "Commits"],
      ["clips", "Clips"],
      ["edited", "Notes edited"],
      ["upcoming", "Up next"]
    ];
    var day = (ms) => R.ymd(typeof ms === "number" ? ms : Date.parse(ms));
    var RecapView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        const s = plugin.settings.recap;
        this.kind = s.range || "week";
        this.anchor = Date.now();
        this.custom = {};
        this.only = null;
        this.focus = null;
        this.custom = { from: R.ymd(R.addDays(Date.now(), -13)), to: R.ymd(Date.now()) };
        this.token = 0;
      }
      getViewType() {
        return RECAP2;
      }
      getDisplayText() {
        return "Recap";
      }
      getIcon() {
        return "chart-no-axes-column";
      }
      getState() {
        return { kind: this.kind, anchor: this.anchor, custom: this.custom, only: this.only };
      }
      async setState(state, result) {
        if (state) {
          if (state.kind) this.kind = state.kind;
          if (state.anchor) this.anchor = state.anchor;
          if (state.custom) this.custom = state.custom;
          if ("only" in state) this.only = state.only || null;
          if ("focus" in state) this.focus = state.focus || null;
        }
        await super.setState(state, result);
        await this.render();
      }
      async onOpen() {
        this.contentEl.addClass("evs-recap-view");
        await this.render();
      }
      get range() {
        return R.range(this.kind, this.anchor, this.custom);
      }
      go(patch) {
        Object.assign(this, patch);
        this.app.workspace.requestSaveLayout();
        this.render();
      }
      openLink(path, sub) {
        this.app.workspace.openLinkText(sub ? `${path}#${sub}` : path, "", false);
      }
      async render({ fresh = false } = {}) {
        const el = this.contentEl, plugin = this.plugin, s = plugin.settings.recap, show = s.sections;
        const r = this.range;
        const token = ++this.token;
        el.empty();
        this.toolbar(el, r);
        const body = el.createDiv({ cls: "evs-rc-body" });
        body.createDiv({ cls: "evs-hint", text: "Gathering sessions, commits, tests, playtests and clips\u2026" });
        let data;
        try {
          data = await plugin.recaps.gather(r, { fresh });
        } catch (e) {
          body.empty();
          body.createDiv({ cls: "evs-hint", text: `Couldn't gather the recap: ${e.message}` });
          return;
        }
        if (token !== this.token) return;
        body.empty();
        const list = this.only ? data.projects.filter((x) => x.raw.project.path === this.only) : data.projects;
        const cur = list.map((x) => x.cur), before = list.map((x) => x.before);
        const m = R.master(cur, before);
        const tiles = body.createDiv({ cls: "evs-rc-tiles" });
        for (const [key, label, icon] of TILES) {
          const n = m.counts[key] || 0, was = m.before && m.before[key] || 0, d = n - was;
          const t = tiles.createDiv({ cls: "evs-rc-tile" + (this.focus === key ? " is-focus" : "") + (n ? "" : " is-zero") });
          setIcon2(t.createDiv({ cls: "evs-rc-tile-icon" }), icon);
          t.createDiv({ cls: "evs-rc-tile-n", text: String(n) });
          t.createDiv({ cls: "evs-rc-tile-label", text: key === "tests" && m.counts.testsFailed ? `${label} \xB7 ${m.counts.testsFailed} failed` : label });
          if (s.compare) t.createDiv({ cls: "evs-rc-delta " + (d > 0 ? "is-up" : d < 0 ? "is-down" : ""), text: d ? `${d > 0 ? "\u25B2" : "\u25BC"} ${Math.abs(d)} vs before` : "same as before" });
          t.setAttr("aria-label", this.focus === key ? "Show everything again" : `Show only ${label.toLowerCase()}`);
          t.onclick = () => this.go({ focus: this.focus === key ? null : key });
        }
        if (show.insights) {
          const ins = this.only && list[0] ? R.insights(list[0].cur, list[0].before) : m.insights;
          if (ins.length) {
            const box = body.createDiv({ cls: "evs-rc-insights" });
            const h = box.createDiv({ cls: "evs-rc-h" });
            setIcon2(h.createSpan(), "lightbulb");
            h.createSpan({ text: "Worth a look" });
            h.createSpan({ cls: "evs-rc-note", text: "worked out from your data" });
            for (const i of ins) {
              const row = box.createDiv({ cls: `evs-rc-ins is-${i.level}` });
              row.createSpan({ text: i.text });
              const proj = data.projects.find((x) => x.raw.project.path === (i.project || this.only))?.raw.project;
              if (i.link && proj) {
                row.addClass("is-clickable");
                row.onclick = () => this.follow(i.link, proj);
              }
            }
          }
        }
        if (show.trends !== false) this.trends(body, r);
        if (show.timeline) this.timeline(body, r, list);
        const projectsEl = body.createDiv({ cls: "evs-rc-projects" });
        const ordered = list.slice().sort((a, b) => b.cur.activity - a.cur.activity);
        for (const x of ordered) this.project(projectsEl, x, ordered.length === 1 || !!this.focus && x.cur.activity > 0);
        if (!this.only && data.unmatchedClips.length && show.clips && (!this.focus || this.focus === "clips")) {
          const d = projectsEl.createEl("details", { cls: "evs-rc-project" });
          d.createEl("summary").createSpan({ text: `Clips not matched to a project (${data.unmatchedClips.length})` });
          this.clips(d, data.unmatchedClips);
        }
        if (!list.length) body.createDiv({ cls: "evs-hint", text: "No projects with Workshop links yet." });
      }
      toolbar(el, r) {
        const s = this.plugin.settings.recap;
        const bar = el.createDiv({ cls: "evs-rc-bar" });
        const tabs = bar.createDiv({ cls: "evs-rc-tabs" });
        for (const [k, label] of [["day", "Day"], ["week", "Week"], ["month", "Month"], ["custom", "Custom"]]) {
          const b = tabs.createEl("button", { text: label, cls: this.kind === k ? "is-active" : "" });
          b.onclick = () => this.go({ kind: k });
        }
        const nav = bar.createDiv({ cls: "evs-rc-nav" });
        const btn = (icon, label, fn) => {
          const b = nav.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = fn;
          return b;
        };
        btn("chevron-left", "Previous", () => this.step(-1));
        nav.createSpan({ cls: "evs-rc-label", text: r.label });
        btn("chevron-right", "Next", () => this.step(1));
        btn("calendar-check", "Back to now", () => this.go({ anchor: Date.now(), custom: this.kind === "custom" ? { from: R.ymd(R.addDays(Date.now(), -13)), to: R.ymd(Date.now()) } : this.custom }));
        if (this.kind === "custom") {
          const c = bar.createDiv({ cls: "evs-rc-custom" });
          const from = c.createEl("input", { type: "date", value: R.ymd(r.start) });
          c.createSpan({ text: "to" });
          const to = c.createEl("input", { type: "date", value: R.ymd(r.end - 1) });
          const apply = () => this.go({ custom: { from: from.value, to: to.value } });
          from.onchange = apply;
          to.onchange = apply;
        }
        const right = bar.createDiv({ cls: "evs-rc-right" });
        const pick = right.createEl("select", { cls: "dropdown" });
        pick.createEl("option", { value: "", text: "All projects" });
        for (const p of (this.plugin.store.cache || []).filter((x) => x.hasWorkshop)) pick.createEl("option", { value: p.path, text: p.name });
        pick.value = this.only || "";
        pick.onchange = () => this.go({ only: pick.value || null });
        const tool = (icon, label, fn) => {
          const b = right.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = fn;
          return b;
        };
        tool("rotate-cw", "Refresh", () => this.render({ fresh: true }));
        tool("file-text", "Open the recap note", () => this.openNote(r));
        tool("bot", "Copy for Claude (the recap plus a prompt for insights and priorities)", () => this.copyForClaude(r));
        tool("settings-2", "Choose what shows", (e) => this.customize(right));
      }
      step(n) {
        if (this.kind === "custom") {
          const next = R.shift(this.range, n);
          return this.go({ custom: { from: R.ymd(next.start), to: R.ymd(next.end - 1) } });
        }
        this.go({ anchor: R.shift(this.range, n).start + 36e5 });
      }
      customize(anchorEl) {
        const s = this.plugin.settings.recap;
        const old = this.contentEl.querySelector(".evs-rc-custom-panel");
        if (old) return old.remove();
        const panel = this.contentEl.querySelector(".evs-rc-bar").createDiv({ cls: "evs-rc-custom-panel" });
        const save = async () => {
          await this.plugin.saveSettings();
          this.render();
        };
        const check = (label, obj, key) => {
          const l = panel.createEl("label");
          const cb = l.createEl("input", { type: "checkbox" });
          cb.checked = !!obj[key];
          l.createSpan({ text: label });
          cb.onchange = async () => {
            obj[key] = cb.checked;
            await save();
          };
        };
        panel.createDiv({ cls: "evs-rc-sub", text: "Show" });
        for (const [k, label] of SECTIONS) check(label, s.sections, k);
        panel.createDiv({ cls: "evs-rc-sub", text: "Compare and notes" });
        check("Compare with the period before", s, "compare");
        check("This week on mission control", s, "mission");
        check("Weekly recap notes", s.notes, "weekly");
        check("Monthly recap notes", s.notes, "monthly");
        check("A note per project", s.notes, "perProject");
        check("One EMX Workshop note for everything", s.notes, "master");
        const w = panel.createEl("button", { text: "Write recap notes now" });
        w.onclick = async () => {
          const done = await this.plugin.recaps.writeNotes({ force: true });
          new Notice2(done.length ? `Recap notes updated: ${done.length}` : "Recap notes are already up to date");
        };
      }
      follow(link, p) {
        if (link.kind === "tasks") this.plugin.openTasks(p.path);
        else if (link.kind === "feel") this.openLink(p.feel);
        else if (link.kind === "decisions") this.openLink(p.decisions);
        else if (link.kind === "log") this.openLink(`${p.path}/Repo - Workshop/log.md`);
      }
      async openNote(r) {
        const p = this.only && (this.plugin.store.cache || []).find((x) => x.path === this.only);
        const path = p ? this.plugin.recaps.noteFor(p, r) : this.plugin.recaps.masterFor(r);
        if (!this.app.vault.getAbstractFileByPath(path)) {
          if (r.kind !== "week" && r.kind !== "month") return new Notice2("Recap notes are made for weeks (and months when that's on)");
          await this.plugin.recaps.writeNotes({ force: true });
        }
        if (this.app.vault.getAbstractFileByPath(path)) this.openLink(path);
        else new Notice2("Nothing happened in this period, so there's no recap note");
      }
      async copyForClaude(r) {
        const data = await this.plugin.recaps.gather(r);
        const list = this.only ? data.projects.filter((x) => x.raw.project.path === this.only) : data.projects;
        const { stamp } = require_util();
        const md = list.length === 1 ? R.projectMarkdown(list[0].cur, list[0].before, stamp()) : R.masterMarkdown(list.map((x) => x.cur), list.map((x) => x.before), r, stamp(), (s) => s.project.name);
        const ask = `This is my EMX Workshop recap for ${r.label}, made from Workshop, git and my vault notes. Read the projects' briefs (Games/<name>/<name> - Brief.md) if you need more. Give me: 1) three insights I might have missed, 2) the top priorities for the next period with the reason for each, 3) anything that contradicts my settled decisions. Keep it short.

`;
        await navigator.clipboard.writeText(ask + md);
        new Notice2("Copied the recap with a prompt: paste it into Claude");
      }
      // the 8 weeks up to the end of this range, week by week (the project filter applies)
      async trends(body, r) {
        const box = body.createDiv({ cls: "evs-rc-insights evs-rc-trends" });
        const h = box.createDiv({ cls: "evs-rc-h" });
        setIcon2(h.createSpan(), "trending-up");
        h.createSpan({ text: "Last 8 weeks" });
        h.createSpan({ cls: "evs-rc-note", text: "one bar per week, up to the end of this range" });
        const inner = box.createDiv({ cls: "evs-hint", text: "Counting\u2026" });
        const weeks = 8, last = R.range("week", Math.min(r.end - 1, Date.now())).start, start = R.addDays(last, -7 * (weeks - 1)), end = R.addDays(last, 7);
        try {
          const data = await this.plugin.recaps.gather(R.range("custom", 0, { from: R.ymd(start), to: R.ymd(end - 1) }), this.only ? { only: this.only } : {});
          inner.empty();
          inner.removeClass("evs-hint");
          require_dashboard2().drawTrends(inner, R.weeklyTrends(data.projects, start, weeks), start, weeks);
        } catch (e) {
          inner.setText(`Couldn't count the trends: ${e.message}`);
        }
      }
      timeline(body, r, list) {
        const cols = R.buckets(r);
        const box = body.createDiv({ cls: "evs-rc-timeline" });
        const h = box.createDiv({ cls: "evs-rc-h" });
        setIcon2(h.createSpan(), "activity");
        h.createSpan({ text: "Timeline" });
        h.createSpan({ cls: "evs-rc-note", text: cols.length && cols[0].end - cols[0].start <= R.DAY ? "click a day to open it" : "click a week to open it" });
        const grid = box.createDiv({ cls: "evs-rc-grid" });
        grid.style.gridTemplateColumns = `minmax(110px, 170px) repeat(${cols.length}, minmax(14px, 1fr))`;
        grid.createDiv();
        for (const c of cols) grid.createDiv({ cls: "evs-rc-col", text: cols.length > 16 ? c.label.replace(/^\w+ /, "") : c.label });
        const max = Math.max(1, ...list.flatMap((x) => x.cur.timeline));
        for (const x of list) {
          const p = x.raw.project;
          const name = grid.createDiv({ cls: "evs-rc-row-name", text: p.name });
          name.style.setProperty("--p", p.color || "var(--evs-accent)");
          x.cur.timeline.forEach((n, i) => {
            const cell = grid.createDiv({ cls: "evs-rc-cell" + (n ? "" : " is-empty") });
            cell.style.setProperty("--p", p.color || "var(--evs-accent)");
            cell.style.setProperty("--a", String(n ? 0.2 + 0.8 * (n / max) : 0));
            cell.setAttr("aria-label", `${p.name} \xB7 ${cols[i].label}: ${n} thing${n === 1 ? "" : "s"}`);
            cell.onclick = () => {
              const single = cols[i].end - cols[i].start <= R.DAY;
              this.go({ kind: single ? "day" : "week", anchor: cols[i].start + 36e5, only: p.path });
            };
          });
        }
      }
      project(parent, x, openIt) {
        const show = this.plugin.settings.recap.sections, p = x.raw.project, c = x.cur.counts, cur = x.cur;
        const d = parent.createEl("details", { cls: "evs-rc-project" + (cur.activity ? "" : " is-quiet") });
        d.style.setProperty("--p", p.color || "var(--evs-accent)");
        if (openIt) d.open = true;
        const sum = d.createEl("summary");
        sum.createSpan({ cls: "evs-rc-dot" });
        sum.createSpan({ cls: "evs-rc-pname", text: p.name });
        sum.createSpan({ cls: "evs-rc-stage", text: `${cur.stage || "?"} \xB7 ${cur.open} open` });
        const bits = [c.sessions && `${c.sessions} work sessions`, c.commits && `${c.commits} commits`, c.done && `${c.done} finished`, c.review && `${c.review} to review`, c.playtests && `${c.playtests} playtests`, c.clips && `${c.clips} clips`].filter(Boolean);
        sum.createSpan({ cls: "evs-rc-bits", text: bits.join(" \xB7 ") || "quiet" });
        const jump = sum.createSpan({ cls: "evs-rc-jump" });
        for (const [icon, label, fn] of [["home", "Hub", () => this.openLink(p.hub)], ["list-checks", "Tasks", () => this.plugin.openTasks(p.path)], ["gamepad-2", "Feel tests", () => this.openLink(p.feel)]]) {
          const b = jump.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = (e) => {
            e.preventDefault();
            fn();
          };
        }
        const body = d.createDiv({ cls: "evs-rc-pbody" });
        const want = (k) => show[k] && (!this.focus || this.focus === k || this.focus === "tests" && k === "tests");
        const sec = (k, title, items, row) => {
          if (!want(k) || !items.length) return;
          const s = body.createEl("details", { cls: `evs-rc-sec is-${k}` });
          s.open = !!this.focus || items.length <= 6;
          s.createEl("summary", { text: `${title} (${items.length})` });
          const ul = s.createDiv({ cls: "evs-rc-list" });
          for (const it of items.slice(0, 60)) row(ul.createDiv({ cls: "evs-rc-item" }), it);
          if (items.length > 60) ul.createDiv({ cls: "evs-rc-more", text: `\u2026and ${items.length - 60} more` });
        };
        const taskRow = (row, t) => {
          row.createSpan({ cls: "evs-rc-id", text: t.id });
          row.createSpan({ text: t.title });
          if (t.blockedReason) row.createSpan({ cls: "evs-rc-dim", text: ` (${t.blockedReason})` });
          row.addClass("is-clickable");
          row.onclick = () => this.plugin.openTasks(p.path);
        };
        const when = (row, at) => row.createSpan({ cls: "evs-rc-when", text: day(at) });
        sec("done", "Finished", cur.items.done, taskRow);
        sec("review", "For your review", cur.items.review, taskRow);
        sec("blocked", "Blocked", cur.items.blocked, taskRow);
        sec("created", "New tasks", cur.items.created, taskRow);
        sec("sessions", "Session log entries", cur.items.sessions, (row, s) => {
          when(row, s.at);
          const t = row.createDiv({ cls: "evs-rc-text" });
          t.createDiv({ text: clip(s.changed || "Session", 320) });
          if (s.notVerified) t.createDiv({ cls: "evs-rc-dim", text: `Not verified: ${clip(s.notVerified, 200)}` });
          if (s.next) t.createDiv({ cls: "evs-rc-dim", text: `Next: ${clip(s.next, 200)}` });
          row.addClass("is-clickable");
          row.onclick = () => this.openLink(`${p.path}/Repo - Workshop/log.md`);
        });
        sec("tests", "Tests", cur.items.tests, (row, e) => {
          when(row, e.at);
          row.createSpan({ cls: +e.failed ? "evs-rc-bad" : "evs-rc-good", text: `${e.passed} passed, ${e.failed} failed` });
          row.createSpan({ cls: "evs-rc-dim", text: ` ${e.task || ""}${e.command ? ` \xB7 ${e.command}` : ""}` });
          row.addClass("is-clickable");
          row.onclick = () => this.plugin.openTasks(p.path);
        });
        sec("playtests", "Playtests", cur.items.playtests, (row, x2) => {
          when(row, x2.at);
          const t = row.createDiv({ cls: "evs-rc-text" });
          if (x2.title) t.createDiv({ text: x2.title });
          for (const q of x2.quotes.slice(0, 3)) t.createDiv({ cls: "evs-rc-quote", text: `\u201C${q}\u201D` });
          row.addClass("is-clickable");
          row.onclick = () => this.openLink(p.feel, x2.heading);
        });
        sec("decisions", "Decisions", cur.items.decisions, (row, x2) => {
          when(row, x2.at);
          row.createSpan({ text: x2.title });
          row.addClass("is-clickable");
          row.onclick = () => this.openLink(p.decisions, x2.heading);
        });
        sec("commits", "Commits", cur.items.commits, (row, x2) => {
          when(row, x2.at);
          row.createSpan({ cls: "evs-rc-id", text: x2.hash.slice(0, 7) });
          row.createSpan({ text: clip(x2.subject, 160) });
          row.addClass("is-clickable");
          row.setAttr("aria-label", x2.remote ? "Open on GitHub" : "Copy the commit hash");
          row.onclick = async () => {
            if (x2.remote) window.open(`${x2.remote}/commit/${x2.hash}`);
            else {
              await navigator.clipboard.writeText(x2.hash);
              new Notice2("Commit hash copied");
            }
          };
        });
        if (want("clips")) this.clips(body, cur.items.clips);
        sec("edited", "Notes edited", cur.items.edited, (row, x2) => {
          when(row, x2.at);
          row.createSpan({ text: x2.path.split("/").pop().replace(/\.md$/, "") });
          row.addClass("is-clickable");
          row.onclick = () => this.openLink(x2.path);
        });
        const up = [];
        if (cur.next) up.push({ next: cur.next });
        for (const t of cur.upcoming) up.push(t);
        sec("upcoming", "Up next", up, (row, t) => {
          if (t.next) {
            row.createSpan({ cls: "evs-rc-id", text: "log" });
            row.createSpan({ text: clip(t.next, 260) });
            row.onclick = () => this.openLink(`${p.path}/Repo - Workshop/log.md`);
          } else {
            row.createSpan({ cls: "evs-rc-id", text: `${t.id} \xB7 ${t.status}` });
            row.createSpan({ text: t.title });
            row.onclick = () => this.plugin.openTasks(p.path);
          }
          row.addClass("is-clickable");
        });
        if (!body.childElementCount) body.createDiv({ cls: "evs-rc-dim", text: this.focus ? "Nothing of that kind here." : "Nothing happened in this period." });
      }
      clips(parent, clips) {
        if (!clips.length) return;
        const s = parent.createEl("details", { cls: "evs-rc-sec is-clips" });
        s.open = clips.length <= 6 || !!this.focus;
        s.createEl("summary", { text: `Clips (${clips.length})` });
        const ul = s.createDiv({ cls: "evs-rc-list" });
        for (const c of clips.slice(0, 60)) {
          const row = ul.createDiv({ cls: "evs-rc-item is-clickable" });
          row.createSpan({ cls: "evs-rc-when", text: `${day(c.at)} ${new Date(c.at).toTimeString().slice(0, 5)}` });
          row.createSpan({ text: c.name });
          if (c.matched !== void 0) row.createSpan({ cls: "evs-rc-dim", text: ` \xB7 ${c.matched} min from activity` });
          row.setAttr("aria-label", "Play the clip");
          row.onclick = () => {
            try {
              require("electron").shell.openPath(c.path);
            } catch (e) {
              navigator.clipboard.writeText(c.path);
              new Notice2("Clip path copied");
            }
          };
        }
      }
    };
    async function renderRecapStrip(plugin, el) {
      const s = plugin.settings.recap;
      if (!s.mission) return;
      const r = R.range("week");
      const strip = el.createDiv({ cls: "evs-rc-strip" });
      const head = strip.createDiv({ cls: "evs-rc-strip-head" });
      head.createSpan({ cls: "evs-rc-strip-title", text: "This week" });
      head.createSpan({ cls: "evs-rc-note", text: r.label });
      const open = head.createEl("button", { text: "Open recap" });
      open.onclick = () => plugin.openRecap();
      const row = strip.createDiv({ cls: "evs-rc-strip-tiles" });
      row.createDiv({ cls: "evs-hint", text: "Gathering\u2026" });
      let data;
      try {
        data = await plugin.recaps.gather(r);
      } catch (e) {
        row.empty();
        return;
      }
      const m = R.master(data.projects.map((x) => x.cur), data.projects.map((x) => x.before));
      row.empty();
      for (const [key, label, icon] of TILES.filter(([k]) => ["sessions", "commits", "done", "review", "playtests", "clips"].includes(k))) {
        const n = m.counts[key] || 0, d = n - (m.before && m.before[key] || 0);
        const t = row.createDiv({ cls: "evs-rc-mini" + (n ? "" : " is-zero") });
        setIcon2(t.createSpan({ cls: "evs-rc-mini-icon" }), icon);
        t.createSpan({ cls: "evs-rc-mini-n", text: String(n) });
        t.createSpan({ cls: "evs-rc-mini-label", text: label });
        if (d) t.createSpan({ cls: "evs-rc-delta " + (d > 0 ? "is-up" : "is-down"), text: `${d > 0 ? "\u25B2" : "\u25BC"}${Math.abs(d)}` });
        t.onclick = () => plugin.openRecap({ focus: key });
      }
      const top = m.insights.slice(0, 2);
      for (const i of top) strip.createDiv({ cls: `evs-rc-ins is-${i.level}`, text: i.text });
      const byPath = {};
      for (const x of data.projects) byPath[x.raw.project.path] = x.cur;
      return byPath;
    }
    module2.exports = { RecapView: RecapView2, renderRecapStrip, TILES, SECTIONS };
  }
});

// src/core/decisions.js
var require_decisions = __commonJS({
  "src/core/decisions.js"(exports2, module2) {
    "use strict";
    var DAY = 864e5;
    var STOP = new Set("a an the and or but of to in on at by for with from into onto over under is are was were be been it its it's this that these those as so if then than too very can will just also only not no never don't do does did doing your you we our us i me my they them their he she what which who when where why how all any each every some more most much many one two three first last next same other there here up down out off chose why spec plan later day still note notes chat you're it\u2019s say said gets get got make made keep stays stay like want wants".split(" "));
    var words = (s) => String(s || "").toLowerCase().replace(/\[\[[^\]|]*\|([^\]]+)\]\]/g, "$1").replace(/\[\[([^\]]+)\]\]/g, "$1").match(/[a-z][a-z0-9'-]{2,}/g) || [];
    var stem = (w) => w.replace(/'s$/, "").replace(/(ies)$/, "y").replace(/(ing|ed|es|s)$/, "").replace(/(.)\1$/, "$1");
    var keywords = (s) => [...new Set(words(s).filter((w) => !STOP.has(w)).map(stem).filter((w) => w.length > 2))];
    var esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var hash2 = (s) => {
      let h = 2166136261;
      for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619);
      return (h >>> 0).toString(36);
    };
    var clean = (s) => String(s || "").replace(/\*\*|__|`/g, "").replace(/\[\[[^\]|]*\|([^\]]+)\]\]/g, "$1").replace(/\[\[([^\]]+)\]\]/g, "$1").replace(/\s+/g, " ").trim();
    function parseDecisions(md, project) {
      const text = String(md || "").replace(/\r\n/g, "\n");
      const out = [];
      const parts = text.split(/^### /m).slice(1);
      for (const part of parts) {
        const [head, ...rest] = part.split("\n");
        const m = head.match(/^(\d{4})-(\d{2})-(\d{2})\s*:?\s*(.*)$/);
        if (!m) continue;
        const body = rest.join("\n").trim();
        const fields = {};
        for (const b of body.split(/\n(?=- \*\*)/)) {
          const f = b.match(/^- \*\*([^*:]+):?\*\*:?\s*([\s\S]*)$/);
          if (f) fields[f[1].trim().toLowerCase()] = clean(f[2]);
        }
        const title = clean(m[4].replace(/\s*\((?:you chose|your|via|design|made by|ranked|user|claude)[^)]*\)\s*$/i, ""));
        const at = new Date(+m[1], +m[2] - 1, +m[3], 12).getTime();
        out.push({
          id: hash2(`${project.path}|${head.trim()}`),
          kind: "decision",
          project: project.path,
          projectName: project.name,
          path: project.decisions,
          heading: head.trim(),
          at,
          date: `${m[1]}-${m[2]}-${m[3]}`,
          title,
          chose: fields.chose || (body && !Object.keys(fields).length ? clean(body.split("\n\n")[0]) : ""),
          why: fields.why || "",
          revisit: fields["revisit if"] || "",
          todo: fields["still to do"] || "",
          body: clean(body),
          links: Array.from(body.matchAll(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g)).map((x) => x[1])
        });
      }
      return out;
    }
    function parseRules(hubMd, project) {
      const sec = String(hubMd || "").replace(/\r\n/g, "\n").match(/^## (?:Rules|Your rules)[^\n]*\n([\s\S]*?)(?=^## |(?![\s\S]))/m);
      if (!sec) return [];
      const out = [];
      let cur = null;
      for (const l of sec[1].split("\n")) {
        if (/^[-*] /.test(l)) {
          cur = l.replace(/^[-*]\s+/, "");
          out.push(cur);
        } else if (cur !== null && /^\s+\S/.test(l) && !/^\s*[-*] /.test(l)) out[out.length - 1] += " " + l.trim();
      }
      return out.filter((r) => clean(r).length > 3).map((r, i) => ({
        id: hash2(`${project.path}|rule|${clean(r)}`),
        kind: "rule",
        project: project.path,
        projectName: project.name,
        path: project.hub,
        heading: "Rules",
        at: 0,
        date: "",
        title: clean(r).slice(0, 140),
        chose: clean(r),
        why: "",
        revisit: "",
        todo: "",
        body: clean(r),
        links: [],
        index: i
      }));
    }
    var UNITS = "m|metres?|meters?|cm|km|s|secs?|seconds?|ms|minutes?|mins?|px|studs?|%|fps|hz|hp|degrees?|\xB0|rounds?|players?|walls?|crates?|grenades?|points?|ammo|bullets?|tiles?|pieces?|frames?";
    var NEG = /\b(?:no|never|not|don't|do not|without|avoid|drop|dropped|remove|removed|stop|ban|banned)\b/i;
    var GENERIC = new Set("names name words word icons icon labels label text texts dropped removed rewritten copy copies graphics music voice voices tune tunes ok okay marker yet either ones one effects effect leak found appears button things thing stuff more less way ways part parts kind kinds sort time times".split(" "));
    function phrase(raw, single) {
      let p = String(raw || "").split(/[.;:!?()"“”]|,(?=\s)|\s—\s|\s-\s|\b(?:but|so|because|which|when|while|until|unless|that|just|instead|is|are|was|were|be|been|appears?|found|yet|either|anymore|in this|for now|unless)\b/i)[0];
      for (let i = 0; i < 3; i++) p = p.trim().replace(/^(?:and|or|no|any|a|an|the|more|our|your|its|their|other|one|single|extra|real-time)\s+/i, "");
      p = p.replace(/['’]s\b/g, "'s").trim();
      if (/^(?:\d|within\b|over\b|under\b|about\b)/i.test(p)) return "";
      const ws = p.split(/\s+/).filter(Boolean);
      if (!ws.length || ws.length > 5) return "";
      const content = ws.filter((w) => !STOP.has(w.toLowerCase()) && !GENERIC.has(w.toLowerCase()) && /[a-z]{3,}/i.test(w));
      if (!content.length) return "";
      if (ws.length === 1 && !single && (GENERIC.has(ws[0].toLowerCase()) || ws[0].length < 6)) return "";
      return ws.join(" ");
    }
    function rulesOf(d) {
      const text = [d.title, d.chose].filter(Boolean).join(". ");
      const rejected = [];
      const add = (raw, kind, instead) => {
        for (const piece of String(raw).split(/,\s*|\s+or\s+|\s+nor\s+/i)) {
          const explicit = kind === "instead" || kind === "not";
          const p = phrase(piece, explicit);
          if (!p) continue;
          const single = p.split(/\s+/).length === 1;
          if (single && (!explicit || p.length < 5)) continue;
          if (!rejected.some((r) => r.phrase.toLowerCase() === p.toLowerCase())) rejected.push({ phrase: p, kind, instead: instead || "", needsProposal: single });
        }
      };
      for (const m of text.matchAll(/([^.;:]{2,60}?)\s+instead of\s+([^.;:]{2,60})/gi)) add(m[2], "instead", phrase(m[1].split(/,|\band\b/).pop(), true));
      for (const m of text.matchAll(/([^.;:,]{2,50}),\s*not\s+([^.;:]{2,50})/gi)) add(m[2], "not", phrase(m[1], true));
      for (const m of text.matchAll(/\b(?:replaces?|replacing|swap(?:s|ped)? out)\s+([^.;:]{2,50})/gi)) add(m[1], "replaced");
      for (const m of text.matchAll(/\b(?:no|never|don't|do not|without|avoid)\s+(?:use\s+|add\s+|bring(?: over)?\s+|show\s+|have\s+|any\s+|more\s+)?([^.;:()]{2,140})/gi)) {
        const before = text.slice(Math.max(0, m.index - 12), m.index).toLowerCase();
        if (/\b(?:or|and|if|whether)\s*$/.test(before) && d.kind !== "rule") continue;
        add(m[1], "no");
      }
      const values = [];
      const vre = new RegExp(`\\b([a-z][a-z'-]{2,20}(?:\\s+[a-z][a-z'-]{2,20})?)\\s+(?:is|are|=|stays at|set to|becomes|sits? at)\\s+(\\d+(?:\\.\\d+)?)\\s*(${UNITS})\\b(?![/\xB2^])`, "gi");
      for (const m of text.matchAll(vre)) {
        const subject = keywords(m[1]).slice(-2);
        const v = { subject, value: +m[2], unit: unitOf(m[3]), text: m[0].trim() };
        if (subject.length && !values.some((x) => x.subject.join() === v.subject.join() && x.value === v.value && x.unit === v.unit)) values.push(v);
      }
      const mre = new RegExp(`\\b(max(?:imum)?|min(?:imum)?|at most|at least|up to)\\s+(\\d+(?:\\.\\d+)?)\\s+([a-z][a-z-]{3,30})`, "gi");
      for (const m of text.matchAll(mre)) {
        const subject = keywords(m[3]);
        if (subject.length && !STOP.has(m[3].toLowerCase())) values.push({ subject, value: +m[2], unit: "", bound: /max|most|up to/i.test(m[1]) ? "max" : "min", text: m[0].trim() });
      }
      return { rejected, values };
    }
    var unitOf = (u) => {
      const x = String(u || "").toLowerCase();
      if (/^(m|metres?|meters?)$/.test(x)) return "m";
      if (/^(s|secs?|seconds?)$/.test(x)) return "s";
      if (/^(minutes?|mins?)$/.test(x)) return "min";
      return x.replace(/s$/, "");
    };
    function compile(decisions) {
      const checks = [];
      for (const d of decisions) {
        const r = rulesOf(d);
        for (const rej of r.rejected) {
          const ws = rej.phrase.split(/\s+/).map((w) => esc(stem(w.toLowerCase())) + "[a-z']*");
          checks.push({ type: "rejected", d, rule: rej, re: new RegExp(`\\b${ws.join("[\\s-]+")}\\b`, "gi") });
        }
        for (const v of r.values) checks.push({ type: "value", d, rule: v, re: new RegExp(`\\b(${v.subject.map((s) => esc(s) + "[a-z']*").join("|")})\\b[^.\\n]{0,40}?\\b(\\d+(?:\\.\\d+)?)\\s*(${UNITS})?\\b`, "gi") });
      }
      return checks;
    }
    var PROPOSE = /\b(?:add|adding|use|using|bring(?:ing)? back|put|play|plays|playing|make|switch(?:ing)? to|go(?:ing)? with|try|trying|want|need|keep|give|show|enable|turn on|back to|move to)\b[^.\n]{0,30}$/i;
    function check(text, checks, opts = {}) {
      const out = [];
      const src = String(text || "");
      const skipped = (i) => (opts.skip || []).some(([a, b]) => i >= a && i < b);
      for (const c of checks) {
        if (opts.skipPath && c.d.path === opts.skipPath) continue;
        c.re.lastIndex = 0;
        for (const m of src.matchAll(c.re)) {
          const from = m.index, to = m.index + m[0].length;
          if (skipped(from)) continue;
          const lineStart = src.lastIndexOf("\n", from) + 1;
          const before = src.slice(Math.max(lineStart, from - 40), from);
          if (c.type === "rejected") {
            if (NEG.test(before) || /\binstead of\s*$|\bnot\s*$|\brather than\s*$|\bover\s*$/i.test(before)) continue;
            if (c.rule.needsProposal && !PROPOSE.test(before)) continue;
            if (/^\s*(?:are|is|stay|stays|were|was|remain|remains)?\s*(?:out|gone|banned|removed|dropped|not allowed|off the table|cut)\b/i.test(src.slice(to, to + 30))) continue;
            if (c.rule.instead && src.slice(lineStart, src.indexOf("\n", to) === -1 ? src.length : src.indexOf("\n", to)).toLowerCase().includes(c.rule.instead.toLowerCase())) continue;
            out.push({
              from,
              to,
              match: m[0],
              decision: c.d,
              type: "rejected",
              confidence: "checked",
              why: `${c.d.kind === "rule" ? "A project rule" : `The ${c.d.date} decision`} rules out "${c.rule.phrase}"${c.rule.instead ? ` (it chose ${c.rule.instead} instead)` : ""}.`,
              instead: c.rule.instead || (c.d.kind === "rule" ? c.d.chose : c.d.chose.slice(0, 160)),
              key: hash2(`${c.d.id}|r|${c.rule.phrase.toLowerCase()}|${m[0].toLowerCase()}`)
            });
          } else {
            const n = +m[2];
            const unit = unitOf(m[3] || "");
            if (unit && c.rule.unit && unit !== c.rule.unit) continue;
            if (!unit && c.rule.unit && c.rule.unit !== "") continue;
            const bad = c.rule.bound === "max" ? n > c.rule.value : c.rule.bound === "min" ? n < c.rule.value : n !== c.rule.value;
            if (!bad) continue;
            out.push({
              from: from + m[0].lastIndexOf(m[2]),
              to,
              match: m[0].slice(m[0].lastIndexOf(m[2])),
              decision: c.d,
              type: "value",
              confidence: "checked",
              why: `The ${c.d.date} decision sets ${c.rule.text} (this says ${n}${unit ? " " + unit : ""}).`,
              instead: c.rule.text,
              key: hash2(`${c.d.id}|v|${c.rule.text}|${m[0].toLowerCase()}`)
            });
          }
        }
      }
      out.sort((a, b) => a.from - b.from || b.to - a.to);
      const kept = [];
      for (const f of out) if (!kept.some((k) => f.from < k.to && f.to > k.from)) kept.push(f);
      return kept;
    }
    function weights(decisions) {
      const df = /* @__PURE__ */ new Map();
      for (const d of decisions) for (const w of new Set(d.kw || (d.kw = keywords(`${d.title} ${d.chose}`)))) df.set(w, (df.get(w) || 0) + 1);
      const n = Math.max(1, decisions.length);
      return (w) => Math.log(1 + n / (df.get(w) || 0.5));
    }
    function similarity(a, b, weight) {
      const A = new Set(a), B = new Set(b);
      let both = 0, all = 0;
      for (const w of /* @__PURE__ */ new Set([...A, ...B])) {
        const x = weight(w);
        all += x;
        if (A.has(w) && B.has(w)) both += x;
      }
      return all ? both / all : 0;
    }
    function related(text, decisions, weight, { min = 0.12, limit = 5 } = {}) {
      const kw = keywords(text);
      if (!kw.length) return [];
      return decisions.map((d) => ({ decision: d, score: similarity(kw, d.kw || (d.kw = keywords(`${d.title} ${d.chose}`)), weight), shared: (d.kw || []).filter((w) => kw.includes(w)) })).filter((r) => r.score >= min && r.shared.length >= 2).sort((a, b) => b.score - a.score).slice(0, limit);
    }
    function links(decisions, weight, min = 0.18) {
      const out = [];
      for (let i = 0; i < decisions.length; i++) {
        for (let j = i + 1; j < decisions.length; j++) {
          const a = decisions[i], b = decisions[j];
          const s = similarity(a.kw, b.kw, weight);
          if (s >= min) out.push({ a: a.id, b: b.id, score: s, shared: a.kw.filter((w) => b.kw.includes(w)).slice(0, 6) });
        }
      }
      return out;
    }
    function review(decisions, { states = {}, now = Date.now(), staleDays = 90, feedback = [], weight } = {}) {
      const w = weight || weights(decisions);
      const byProject = {};
      for (const d of decisions) (byProject[d.project] ||= []).push(d);
      const out = {};
      for (const d of decisions) {
        const own = states[d.id];
        const hints = [];
        if (d.kind === "decision") {
          for (const later of byProject[d.project]) {
            if (later === d || later.kind !== "decision" || later.at <= d.at) continue;
            const s = similarity(d.kw, later.kw, w);
            const says = new RegExp(`\\b(?:instead of|replaces?|no longer|reverses?|changes?)\\b`, "i").test(later.chose) && s >= 0.12;
            if (s >= 0.32 || says) hints.push({ type: "superseded", by: later.id, text: `A later decision may replace it: ${later.date} "${later.title}"`, score: s });
          }
          if (d.revisit) {
            const kw = keywords(d.revisit);
            const since = feedback.filter((f) => f.project === d.project && f.at > d.at && kw.filter((x) => (f.kw || (f.kw = keywords(f.text))).includes(x)).length >= 2);
            hints.push({ type: since.length ? "revisit-met" : "revisit", text: since.length ? `Its "Revisit if" may be met: ${since.length} playtest note${since.length === 1 ? "" : "s"} since mention it` : `Revisit if: ${d.revisit}`, evidence: since.slice(0, 3) });
          }
          const age = Math.round((now - d.at) / DAY);
          const reviewedAt = own && own.at ? Date.parse(own.at) : 0;
          if (age > staleDays && now - reviewedAt > staleDays * DAY) hints.push({ type: "stale", text: `Made ${age} days ago and not reviewed since` });
          if (d.todo) hints.push({ type: "todo", text: `Still to do: ${d.todo}` });
        }
        const kwD = d.kw || keywords(`${d.title} ${d.chose}`);
        const pushback = feedback.filter((f) => f.project === d.project && f.at > d.at && /\b(?:hate|don't like|dont like|bad|worse|annoying|terrible|too (?:slow|fast|much|hard|easy|loud|quiet)|feels? off|broken|confusing)\b/i.test(f.text) && kwD.filter((x) => (f.kw || (f.kw = keywords(f.text))).includes(x)).length >= 2);
        if (pushback.length) hints.push({ type: "pushback", text: `Your playtest feedback since may question it`, evidence: pushback.slice(0, 3) });
        let status = d.kind === "rule" ? "rule" : "active";
        if (own && own.status) status = own.status;
        else if (hints.some((h) => h.type === "superseded" || h.type === "revisit-met" || h.type === "pushback" || h.type === "stale")) status = "needs-review";
        out[d.id] = { status, hints, own: own || null };
      }
      return out;
    }
    function rulesRange(md) {
      const m = String(md || "").match(/^## (?:Rules|Your rules)[^\n]*\n[\s\S]*?(?=^## |(?![\s\S]))/m);
      return m ? [[m.index, m.index + m[0].length]] : [];
    }
    var STATUS_LABELS = { active: "Active", rule: "Rule", "needs-review": "Needs review", reviewed: "Still valid", superseded: "Superseded", outdated: "Outdated" };
    module2.exports = { parseDecisions, parseRules, rulesOf, compile, check, rulesRange, keywords, weights, similarity, related, links, review, hash: hash2, STATUS_LABELS, clean };
  }
});

// src/data/guard.js
var require_guard = __commonJS({
  "src/data/guard.js"(exports2, module2) {
    "use strict";
    var { parseDecisions, parseRules, compile, check, rulesRange, weights, related, links, review, keywords, hash: hash2 } = require_decisions();
    var { parseFeel } = require_recap2();
    var { stamp } = require_util();
    var SKIP = /( - Decisions| - Feel tests| - Brief| - Decision review| - Playtest flags)\.md$|\/Recaps\/|(^|\/)Repo - |^_techniques\/(Workshop recaps|Vault index)/;
    function parseSuggestions(md, project) {
      const out = [];
      for (const part of String(md || "").replace(/\r\n/g, "\n").split(/^### /m).slice(1)) {
        const [head, ...rest] = part.split("\n");
        const m = head.match(/^(\d{4}-\d{2}-\d{2})\s*:?\s*(.*)$/);
        if (!m) continue;
        const f = {};
        for (const l of rest.join("\n").split(/\n(?=- \*\*)/)) {
          const x = l.match(/^- \*\*([^*:]+):?\*\*:?\s*([\s\S]*)$/);
          if (x) f[x[1].trim().toLowerCase()] = x[2].trim();
        }
        const link = (f.decision || "").match(/#([^\]|]+)/);
        out.push({ project: project.path, date: m[1], topic: m[2].trim(), decisionHeading: link ? link[1].trim() : "", where: f.where || "", conflict: f.conflict || "", suggests: f.suggests || "", confidence: (f.confidence || "").toLowerCase(), heading: head.trim() });
      }
      return out;
    }
    var DecisionGuard2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.byProject = /* @__PURE__ */ new Map();
        this.all = [];
        this.reviews = {};
        this.links = [];
        this.suggestions = [];
        this.findings = /* @__PURE__ */ new Map();
        this.ready = null;
      }
      get settings() {
        return this.plugin.settings.decisions;
      }
      invalidate() {
        this.ready = null;
      }
      reviewNote(p) {
        return `${p.path}/${p.name} - Decision review.md`;
      }
      // builds the index from the project store (cheap: a few dozen decisions per project)
      index() {
        if (this.ready) return this.ready;
        this.ready = (async () => {
          const projects = await this.plugin.store.all();
          const all = [], feedback = [], suggestions = [];
          this.byProject = /* @__PURE__ */ new Map();
          for (const p of projects) {
            const t = p.texts || {};
            const decisions = parseDecisions(t.decisions, p).concat(parseRules(t.hub, p));
            for (const f of parseFeel(t.feel)) for (const q of f.quotes.length ? f.quotes : [f.title]) feedback.push({ project: p.path, at: f.at, text: q, heading: f.heading });
            const raw = await this.plugin.store.read(this.reviewNote(p));
            if (raw) suggestions.push(...parseSuggestions(raw, p));
            this.byProject.set(p.path, { project: p, decisions, checks: compile(decisions) });
            all.push(...decisions);
          }
          const w = weights(all);
          this.weight = w;
          this.all = all;
          this.feedback = feedback;
          this.reviews = review(all, { states: this.settings.states, staleDays: this.settings.staleDays, feedback, weight: w });
          this.links = links(all.filter((d) => d.kind === "decision"), w);
          for (const s of suggestions) {
            const d = all.find((x) => x.project === s.project && x.heading === s.decisionHeading);
            s.decision = d ? d.id : null;
          }
          this.suggestions = suggestions;
          return this;
        })();
        return this.ready;
      }
      entryFor(path) {
        const p = this.plugin.store.find(path);
        return p ? this.byProject.get(p.path) : null;
      }
      skips(path) {
        if (!path || !/\.md$/.test(path) || SKIP.test(path)) return true;
        const p = this.plugin.store.find(path);
        return !!(p && p.feel === path);
      }
      // checked conflicts in one note's text (dismissed ones carry .dismissed)
      checkText(path, text) {
        if (!this.settings.on || this.skips(path)) return [];
        const e = this.entryFor(path);
        if (!e || !e.checks.length) return [];
        const skip = path === e.project.hub ? rulesRange(text) : [];
        return check(text, e.checks, { skip }).map((f) => this.place(f, { path, project: e.project.path }));
      }
      // checked conflicts in a project's tasks: title, details and "Done looks like"
      checkTasks(p, tasks) {
        const e = this.byProject.get(p.path);
        if (!this.settings.on || !e || !e.checks.length) return {};
        const out = {};
        for (const t of tasks || []) {
          if (t.status === "done") continue;
          const text = [t.title, t.details, ...[].concat(t.acceptance || [])].filter(Boolean).join("\n");
          const found = check(text, e.checks).map((f) => this.place(f, { task: t.id, project: p.path }));
          if (found.length) out[t.id] = found;
        }
        return out;
      }
      place(f, where) {
        Object.assign(f, where);
        f.key = hash2(`${f.key}|${where.task ? `${where.project}#${where.task}` : where.path}`);
        f.dismissed = this.settings.dismissed[f.key] || null;
        return f;
      }
      // every project note and task (the dashboard, briefs and mission control use this; run it now and then, not per key)
      async scan() {
        await this.index();
        const findings = [];
        const vault = this.app.vault;
        for (const [path, e] of this.byProject) {
          if (!e.checks.length) continue;
          for (const f of vault.getMarkdownFiles().filter((x) => x.path.startsWith(path + "/") && !this.skips(x.path))) {
            findings.push(...this.checkText(f.path, await vault.cachedRead(f)));
          }
          const pj = await this.plugin.workshop.state(e.project);
          for (const list of Object.values(this.checkTasks(e.project, pj && pj.tasks))) findings.push(...list);
        }
        this.findings = /* @__PURE__ */ new Map();
        for (const f of findings) (this.findings.get(f.decision.id) || this.findings.set(f.decision.id, []).get(f.decision.id)).push(f);
        this.scannedAt = Date.now();
        return findings;
      }
      openFindings(projectPath) {
        const list = [];
        for (const fs of this.findings.values()) for (const f of fs) if (!f.dismissed && (!projectPath || f.project === projectPath)) list.push(f);
        return list;
      }
      // what the brief and mission control show for a project (from the last scan)
      summaryFor(projectPath) {
        const ds = this.all.filter((d) => d.project === projectPath);
        return {
          needsReview: ds.filter((d) => (this.reviews[d.id] || {}).status === "needs-review"),
          conflicts: this.openFindings(projectPath),
          suggestions: this.suggestions.filter((s) => s.project === projectPath)
        };
      }
      relatedTo(text, projectPath) {
        const pool = projectPath ? this.all.filter((d) => d.project === projectPath) : this.all;
        return related(text, pool, this.weight || weights(pool));
      }
      // your calls, kept in settings: status of a decision, and warnings you reviewed
      async setStatus(id, status, extra = {}) {
        if (status === "active") delete this.settings.states[id];
        else this.settings.states[id] = Object.assign({ status, at: (/* @__PURE__ */ new Date()).toISOString() }, extra);
        await this.plugin.saveSettings();
        this.invalidate();
      }
      async dismiss(key, reason) {
        this.settings.dismissed[key] = { at: (/* @__PURE__ */ new Date()).toISOString(), reason: reason || "" };
        await this.plugin.saveSettings();
        for (const fs of this.findings.values()) for (const f of fs) if (f.key === key) f.dismissed = this.settings.dismissed[key];
      }
      async restore(key) {
        delete this.settings.dismissed[key];
        await this.plugin.saveSettings();
        for (const fs of this.findings.values()) for (const f of fs) if (f.key === key) f.dismissed = null;
      }
      // a prompt that asks Claude for a read the rules can't give, written back in a format the guard reads
      claudePrompt(p, { text, where, decisions } = {}) {
        const note = this.reviewNote(p);
        const list = (decisions || this.all.filter((d) => d.project === p.path && d.kind === "decision").slice(0, 25)).map((d) => `- [[${d.path.replace(/\.md$/, "")}#${d.heading}|${d.date} ${d.title}]]: ${d.chose.slice(0, 200)}`);
        return [
          `Check ${where ? `"${where}"` : "this"} in ${p.name} against my settled decisions and hub rules. Read ${p.brief || `${p.path}/${p.name} - Brief.md`} first.`,
          "",
          "Decisions:",
          ...list,
          text ? `
The text:
${text.slice(0, 4e3)}` : "",
          "",
          `Write what you find into "${note}" (create it if missing), newest first, one entry each, exactly like this so EMX Vault Studio can read it:`,
          "",
          `### ${stamp().slice(0, 10)}: <short topic>`,
          "- **Decision:** [[<decisions note>#<heading>|<title>]]",
          "- **Where:** <note or task>",
          "- **Conflict:** <what conflicts, quoting both>",
          "- **Suggests:** <an alternative that respects the decision, or why the decision may need revisiting>",
          "- **Confidence:** low | medium | high",
          "",
          "Only advise: don't change the decisions, the notes or the tasks."
        ].join("\n");
      }
      // when a decision's note changed in the vault backup: [{ at, subject }] (on demand, for the dashboard)
      async history(d) {
        const out = await this.plugin.backup.runGit(["log", "-n30", "--format=%aI%x1f%s", "--", d.path]).catch(() => "");
        return out.split("\n").filter(Boolean).map((l) => {
          const [iso, subject] = l.split("");
          return { at: Date.parse(iso), subject };
        });
      }
    };
    module2.exports = { DecisionGuard: DecisionGuard2, parseSuggestions, SKIP, hashKey: hash2, keywords };
  }
});

// src/core/starters.js
var require_starters = __commonJS({
  "src/core/starters.js"(exports2, module2) {
    "use strict";
    var CATEGORIES = [
      { folder: "Games", label: "Games", icon: "gamepad-2", color: "#e8b84a", type: "game" },
      { folder: "Apps", label: "Apps", icon: "app-window", color: "#6fd3ff", type: "desktop-app" },
      { folder: "Web", label: "Web", icon: "globe", color: "#39d98a", type: "website" },
      { folder: "Design", label: "Design", icon: "pen-tool", color: "#c38bff", type: "ui-ux" },
      { folder: "Art", label: "Art", icon: "palette", color: "#ff5c8a", type: "graphics" },
      { folder: "Video", label: "Video", icon: "clapperboard", color: "#ff6a2b", type: "video" },
      { folder: "Tools", label: "Tools", icon: "wrench", color: "#9b8b67", type: "tool" },
      { folder: "Research", label: "Research", icon: "flask-conical", color: "#7fb3ff", type: "research" }
    ];
    var HUB = `---
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

- Workshop project: \`{{repoPath}}\` (stage and tasks: Workshop tasks view)
- Dashboard: [[{{dashboardLink}}|Dashboard]]

## Notes

{{noteLinks}}`;
    var FEEDBACK = `# {{name}}: {{feedbackLabel}}

Your words after trying it, newest first. Claude quotes these; it never rewrites them.
`;
    var DECISIONS2 = `# {{name}}: decisions

Newest at the top. Each one: \`### YYYY-MM-DD: what was decided\`, then **Chose:**, **Why:**, and **Revisit if:** when it may change.
`;
    var QUESTIONS = `# {{name}}: open questions

-
`;
    var DASHBOARD = `# {{name}}: dashboard

\`\`\`emx-dashboard
project: {{folder}}
widgets: {{widgets}}
\`\`\`
`;
    var BASE_DONE = ["What changed is shown (screenshots, or numbers when a picture can't show it)", "Workshop task moved to review with what was and wasn't verified; session logged"];
    var TYPES = [
      {
        id: "generic",
        label: "Generic project",
        category: "Tools",
        icon: "box",
        color: "#9b8b67",
        version: 2,
        changelog: ["2: its own Workshop profile", "1: starter type"],
        description: "Any project. Everything else builds on this one.",
        workshop: { create: true, profile: "generic" },
        repo: { create: true, github: "private" },
        notes: ["hub", "feedback", "decisions", "questions", "dashboard"],
        labels: { feedback: "Feedback" },
        done: BASE_DONE,
        dashboard: ["stage", "tasks", "recap-week", "feedback", "decisions", "commits"],
        tools: [],
        capabilities: [],
        claude: { skills: [], prompts: ["Brief me", "Plan next", "Hand off"] },
        automations: ["weekly-recap"],
        requires: {},
        tasks: [],
        templates: { hub: HUB, feedback: FEEDBACK, decisions: DECISIONS2, questions: QUESTIONS, dashboard: DASHBOARD }
      },
      {
        id: "game",
        label: "Game",
        extends: "generic",
        category: "Games",
        icon: "gamepad-2",
        color: "#e8b84a",
        version: 1,
        changelog: ["1: starter type"],
        description: "Any game. Playtests and feel come first.",
        labels: { feedback: "Feel tests" },
        capabilities: ["playtests"],
        done: ["Played, with no errors", ...BASE_DONE],
        dashboard: ["stage", "tasks", "recap-week", "playtests", "decisions", "assets", "commits"],
        claude: { skills: [], prompts: ["Brief me", "Feel to tasks", "Plan next", "Hand off"] }
      },
      {
        id: "roblox-game",
        label: "Roblox game",
        extends: "game",
        icon: "box",
        color: "#39d98a",
        version: 1,
        changelog: ["1: starter type"],
        description: "A Roblox experience: Rojo, Lune tests, Studio playtests. Only your own or CC0 assets.",
        workshop: { create: true, profile: "roblox" },
        done: ["`lune run tests/run` passes, `stylua --check src tests` and `selene src` are clean, `rojo build` works", "Played in Studio with no errors in Output", "Only our own, CC0 or Roblox-licensed assets and sounds", ...BASE_DONE],
        tools: [{ label: "Test", run: "lune run tests/run" }, { label: "Lint", run: "selene src" }, { label: "Build place", run: "rojo build -o build/{{slug}}.rbxl" }, { label: "Live sync", run: "rojo serve" }],
        capabilities: ["playtests", "buildlog"],
        assets: { kinds: { sound: ["wav", "ogg", "mp3"], model: ["fbx", "glb", "obj", "rbxm"], image: ["png", "jpg"] }, license: "required" },
        claude: { skills: ["roblox-dev-skill", "roblox-debugging", "roblox-system-builder"], prompts: ["Brief me", "Feel to tasks", "Plan next", "Hand off"] },
        requires: { tools: ["rojo", "lune", "stylua", "selene"], apps: ["Roblox Studio"] }
      },
      {
        id: "unreal-game",
        label: "Unreal Engine game",
        extends: "game",
        icon: "gamepad",
        color: "#6fd3ff",
        version: 1,
        changelog: ["1: starter type"],
        description: "An Unreal Engine 5 game. Rendering only with your OK.",
        workshop: { create: true, profile: "unreal" },
        done: ["Builds without errors", "Played in the editor (PIE) with screenshots or measured numbers", ...BASE_DONE],
        assets: { kinds: { model: ["fbx", "glb", "uasset"], texture: ["png", "tga", "exr"], sound: ["wav", "ogg"] }, license: "recommended" },
        claude: { skills: [], prompts: ["Brief me", "Feel to tasks", "Plan next", "Hand off"] },
        requires: { apps: ["Unreal Engine 5"] }
      },
      {
        id: "web-game",
        label: "Browser game",
        extends: "game",
        icon: "monitor-play",
        color: "#ff6a2b",
        version: 1,
        changelog: ["1: starter type"],
        description: "A game that runs in the browser.",
        workshop: { create: true, profile: "web-game" },
        tools: [{ label: "Dev server", run: "npm run dev" }, { label: "Test", run: "npm test" }, { label: "Build", run: "npm run build" }],
        done: ["`npm test` passes and it builds", "Played in the browser, mouse look by the global rules", ...BASE_DONE],
        requires: { tools: ["node"] }
      },
      {
        id: "website",
        label: "Website",
        extends: "generic",
        category: "Web",
        icon: "globe",
        color: "#39d98a",
        version: 2,
        changelog: ["2: its own Workshop profile", "1: starter type"],
        description: "A site: pages, content, look, launch.",
        labels: { feedback: "Reviews" },
        workshop: { create: true, profile: "website" },
        tools: [{ label: "Dev server", run: "npm run dev" }, { label: "Build", run: "npm run build" }],
        done: ["Builds, and every page loads with no console errors", "Checked at phone and desktop width", ...BASE_DONE],
        requires: { tools: ["node"] }
      },
      {
        id: "web-app",
        label: "Web app",
        extends: "website",
        icon: "layout-panel-top",
        color: "#6fd3ff",
        version: 2,
        changelog: ["2: its own Workshop profile", "1: starter type"],
        description: "An app in the browser: accounts, data, flows.",
        workshop: { create: true, profile: "web-app" },
        tools: [{ label: "Dev server", run: "npm run dev" }, { label: "Test", run: "npm test" }, { label: "Build", run: "npm run build" }],
        done: ["`npm test` passes and it builds", "The changed flow works end to end in the browser", ...BASE_DONE]
      },
      {
        id: "desktop-app",
        label: "Desktop app",
        extends: "generic",
        category: "Apps",
        icon: "app-window",
        color: "#6fd3ff",
        version: 1,
        changelog: ["1: starter type"],
        description: "An app for Windows (Electron or native).",
        workshop: { create: true, profile: "desktop-app" },
        done: ["Tests pass and it builds", "Launched and the change works in the real app", ...BASE_DONE]
      },
      {
        id: "tool",
        label: "Tool",
        extends: "generic",
        category: "Tools",
        icon: "wrench",
        color: "#9b8b67",
        version: 1,
        changelog: ["1: starter type"],
        description: "A tool, script, plugin or utility.",
        workshop: { create: true, profile: "tool" },
        done: ["Tests pass", "Run for real on a real case", ...BASE_DONE]
      },
      {
        id: "design",
        label: "Design",
        extends: "generic",
        category: "Design",
        icon: "pen-tool",
        color: "#c38bff",
        version: 2,
        changelog: ["2: its own Workshop profile", "1: starter type"],
        description: "Design work: no code repo by default.",
        labels: { feedback: "Feedback" },
        workshop: { create: true, profile: "design" },
        repo: { create: true, github: "private" },
        assets: { kinds: { image: ["png", "jpg", "svg", "webp"], source: ["fig", "psd", "ai", "xd"] }, license: "recommended" },
        dashboard: ["stage", "tasks", "assets", "feedback", "decisions"],
        done: ["Exported at the sizes it's used at", "Shown next to the reference or the old version", ...BASE_DONE]
      },
      { id: "ui-ux", label: "UI/UX design", extends: "design", icon: "layout-template", version: 1, changelog: ["1: starter type"], description: "Screens, flows and prototypes." },
      { id: "branding", label: "Branding", extends: "design", icon: "badge", color: "#ff5c8a", version: 1, changelog: ["1: starter type"], description: "Logo, colors, type and the brand rules." },
      { id: "graphics", label: "Graphics", extends: "design", category: "Art", icon: "palette", color: "#ff5c8a", version: 2, changelog: ["2: its own Workshop profile", "1: starter type"], description: "Illustrations, thumbnails, icons, textures.", workshop: { create: true, profile: "art" } },
      {
        id: "3d-model",
        label: "3D model",
        extends: "design",
        category: "Art",
        icon: "box",
        color: "#e8b84a",
        version: 2,
        changelog: ["2: its own Workshop profile", "1: starter type"],
        description: "Models, rigs and kits.",
        workshop: { create: true, profile: "3d" },
        assets: { kinds: { model: ["blend", "fbx", "glb", "obj"], texture: ["png", "exr", "tga"] }, license: "recommended" },
        done: ["Exported at the target scale and triangle budget", "Previewed in the engine it's for", ...BASE_DONE]
      },
      { id: "animation", label: "Animation", extends: "3d-model", icon: "film", color: "#ff6a2b", version: 2, changelog: ["2: its own Workshop profile", "1: starter type"], description: "Animations and motion.", workshop: { create: true, profile: "animation" } },
      {
        id: "video",
        label: "Video",
        extends: "generic",
        category: "Video",
        icon: "clapperboard",
        color: "#ff6a2b",
        version: 1,
        changelog: ["1: starter type"],
        description: "Videos, trailers, devlogs (HyperFrames).",
        workshop: { create: true, profile: "video" },
        assets: { kinds: { video: ["mp4", "mov", "webm"], audio: ["wav", "mp3"], image: ["png", "jpg"] }, license: "recommended" },
        claude: { skills: ["hyperframes", "media-use"], prompts: ["Brief me", "Plan next", "Hand off"] },
        done: ["Rendered and watched start to end", ...BASE_DONE],
        requires: { tools: ["ffmpeg"] }
      },
      {
        id: "research",
        label: "Research",
        extends: "generic",
        category: "Research",
        icon: "flask-conical",
        color: "#7fb3ff",
        version: 1,
        changelog: ["1: starter type"],
        description: "Research and notes, no code.",
        workshop: { create: false },
        repo: { create: false },
        notes: ["hub", "decisions", "questions", "dashboard"],
        dashboard: ["notes", "decisions", "questions"],
        done: ["Sources are linked", "The conclusion is in the hub"]
      }
    ];
    module2.exports = { CATEGORIES, TYPES };
  }
});

// src/data/types.js
var require_types2 = __commonJS({
  "src/data/types.js"(exports2, module2) {
    "use strict";
    var { parseYaml, stringifyYaml } = require("obsidian");
    var { resolve, typeFor, readTypeNote, writeTypeNote, slugify } = require_types();
    var { CATEGORIES, TYPES } = require_starters();
    var SYSTEM2 = "_system";
    var TYPES_DIR = `${SYSTEM2}/Types`;
    var CATS = `${SYSTEM2}/Categories.md`;
    var ARCHIVE = { folder: "Archive", label: "Archive", icon: "archive", color: "#777777", type: null, archive: true };
    var TypeRegistry2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.types = /* @__PURE__ */ new Map();
        this.problems = /* @__PURE__ */ new Map();
        this.categories = CATEGORIES.slice();
        this.loaded = null;
      }
      invalidate() {
        this.loaded = null;
      }
      adapter() {
        return this.app.vault.adapter;
      }
      // the categories in order, then Archive
      all() {
        return this.categories.concat(ARCHIVE);
      }
      folders() {
        return this.all().map((c) => c.folder);
      }
      category(folder) {
        return this.all().find((c) => c.folder === folder) || null;
      }
      get(id) {
        return this.types.get(id) || null;
      }
      list({ hidden = false } = {}) {
        return [...this.types.values()].filter((t) => hidden || !t.hidden).sort((a, b) => a.label.localeCompare(b.label));
      }
      // the type of a project (by its hub's emx-type, its Workshop profile, or its category)
      typeOf({ hubType, profile, section }) {
        return typeFor({ hubType, profile, category: section }, this.types, this.categories);
      }
      async load() {
        if (this.loaded) return this.loaded;
        this.loaded = (async () => {
          const a = this.adapter();
          let cats = null;
          try {
            if (await a.exists(CATS)) {
              const { def } = readTypeNote(await a.read(CATS), parseYaml);
              if (def && Array.isArray(def.categories)) cats = def.categories.filter((c) => c && c.folder && c.folder !== "Archive");
            }
          } catch (e) {
            this.problems.set("categories", [{ level: "error", text: e.message }]);
          }
          this.categories = cats && cats.length ? cats : CATEGORIES.slice();
          const defs = [];
          const notes = await a.exists(TYPES_DIR) ? (await a.list(TYPES_DIR)).files.filter((f) => f.endsWith(".md")) : [];
          for (const file of notes) {
            const { def, error } = readTypeNote(await a.read(file), parseYaml);
            if (error) this.problems.set(file, [{ level: "error", text: error }]);
            else if (def) defs.push(Object.assign(def, { file }));
          }
          const { types, problems } = resolve(defs.length ? defs : TYPES);
          this.types = types;
          this.raw = new Map((defs.length ? defs : TYPES).map((d) => [d.id, d]));
          for (const [k, v] of problems) this.problems.set(k, v);
          return this;
        })();
        return this.loaded;
      }
      // writes the starter categories and types into _system once, skipping any that exist (by id or by file)
      async seed() {
        const a = this.adapter(), vault = this.app.vault;
        for (const dir of [SYSTEM2, TYPES_DIR]) if (!await a.exists(dir)) await vault.createFolder(dir);
        const written = [];
        if (!await a.exists(CATS)) {
          const text = `---
${stringifyYaml({ categories: CATEGORIES }).trimEnd()}
---

# Categories

The top-level folders projects live in. Change them in the Projects view (Categories). Archive is always there.
`;
          await vault.create(CATS, text);
          written.push(CATS);
        }
        const have = /* @__PURE__ */ new Set();
        for (const file of (await a.list(TYPES_DIR)).files) {
          const { def } = readTypeNote(await a.read(file), parseYaml);
          if (def && def.id) have.add(def.id);
        }
        for (const t of TYPES) {
          if (have.has(t.id)) continue;
          const path = `${TYPES_DIR}/${t.label.replace(/[\\/:*?"<>|]/g, "-")}.md`;
          if (await a.exists(path)) continue;
          await vault.create(path, writeTypeNote(t, stringifyYaml));
          written.push(path);
        }
        this.invalidate();
        await this.load();
        return written;
      }
      // Workshop got profiles of its own for these kinds (2026-10-29): a starter type note still on the old shared
      // profile moves to its own, as a new version. A profile you set yourself is never touched
      async upgradeProfiles() {
        await this.load();
        const done = [];
        for (const [id, from, to] of PROFILE_UPGRADES) {
          const own = this.raw && this.raw.get(id);
          if (!own) continue;
          const cur = own.workshop && own.workshop.profile;
          if (cur === to || cur !== from) continue;
          if (own.workshop && own.workshop.create === false) continue;
          const def = JSON.parse(JSON.stringify(own));
          delete def.file;
          def.workshop = Object.assign({ create: true }, def.workshop, { profile: to });
          await this.save(def, `its own Workshop profile (${to})`);
          done.push(id);
        }
        return done;
      }
      // saves a type from the editor: a new version with a changelog line; the old note text goes to the vault backup
      async save(def, change) {
        const a = this.adapter(), vault = this.app.vault;
        const old = this.raw && this.raw.get(def.id) || null;
        const next = Object.assign({}, def, { version: (old && old.version || 0) + 1 });
        next.changelog = [`${next.version}: ${change || "edited"}`].concat(old && old.changelog || []).slice(0, 50);
        delete next.chain;
        const path = old && old.file || `${TYPES_DIR}/${(def.label || def.id).replace(/[\\/:*?"<>|]/g, "-")}.md`;
        const text = writeTypeNote(next, stringifyYaml);
        const f = vault.getAbstractFileByPath(path);
        if (f) await vault.modify(f, text);
        else await vault.create(path, text);
        this.invalidate();
        await this.load();
        return next;
      }
    };
    var PROFILE_UPGRADES = [["generic", "tool", "generic"], ["website", "tool", "website"], ["web-app", void 0, "web-app"], ["design", "tool", "design"], ["graphics", void 0, "art"], ["3d-model", void 0, "3d"], ["animation", "video", "animation"]];
    module2.exports = { PROFILE_UPGRADES, TypeRegistry: TypeRegistry2, SYSTEM: SYSTEM2, TYPES_DIR, CATS, ARCHIVE, slugify };
  }
});

// src/core/setup.js
var require_setup = __commonJS({
  "src/core/setup.js"(exports2, module2) {
    "use strict";
    var { notePaths, render, slugify } = require_types();
    var BAD_NAME = /[\\/:*?"<>|#^[\]]/;
    function checkName(name, taken = {}) {
      const n = String(name || "").trim();
      if (!n) return "Give it a name";
      if (n.length > 80) return "Keep the name under 80 characters";
      if (BAD_NAME.test(n)) return `A name can't have \\ / : * ? " < > | # ^ [ ]`;
      if (/^\.|\.$/.test(n)) return "A name can't start or end with a dot";
      if ((taken.folders || /* @__PURE__ */ new Set()).has(n.toLowerCase())) return "A project with this name already exists in the vault";
      const s = slugify(n);
      if (!s) return "Use some letters or numbers";
      if ((taken.slugs || /* @__PURE__ */ new Set()).has(s)) return `Workshop already has a project "${s}"`;
      return null;
    }
    function vars({ name, type, category, folder, repoDir, description, date, related = [] }) {
      const paths = notePaths(folder, name, type);
      const rel = (p) => p.replace(/\.md$/, "");
      const notes = (type.notes || []).filter((k) => k !== "hub");
      const label = (k) => k === "feedback" ? type.labels && type.labels.feedback || "Feel tests" : { decisions: "Decisions", questions: "Open questions", dashboard: "Dashboard" }[k] || k;
      return {
        name,
        slug: slugify(name),
        date,
        type: type.id,
        typeLabel: type.label,
        category,
        folder,
        repoPath: repoDir || "(no repo)",
        description: description || "One paragraph: what it is, who it's for, and what it must feel like.",
        done: (type.done || []).map((d) => `- ${d}`).join("\n") || "- ",
        noteLinks: notes.map((k) => `- [[${rel(paths[k])}|${label(k)}]]`).concat(related.map((r) => `- Related: [[${r}]]`)).join("\n"),
        widgets: `[${(type.dashboard || []).join(", ")}]`,
        feedbackLabel: label("feedback"),
        dashboardLink: rel(paths.dashboard)
      };
    }
    function notesFor(type, v) {
      const paths = notePaths(v.folder, v.name, type);
      const out = [];
      for (const key of type.notes || []) {
        const tpl = (type.templates || {})[key];
        if (!tpl || !paths[key]) continue;
        let text = render(tpl, v);
        if (key === "hub" && v.description) text = text.replace(/(## What it is\n\n)[^\n]*/, `$1${v.description}`);
        out.push({ key, path: paths[key], text });
      }
      return out;
    }
    function planCreate({ name, type, category, categoryLabel, description, related = [], options = {}, date, workshopHome, color, icon }) {
      const folder = `${category}/${name}`;
      const slug = slugify(name);
      const repoDir = options.workshop ? `${workshopHome}\\projects\\${slug}` : null;
      const v = vars({ name, type, category, folder, repoDir, description, date, related });
      const steps = [];
      const add = (kind, label, args, undo = false) => steps.push({ id: `s${steps.length + 1}`, kind, label, args, undo });
      add("folder", `Create the vault folder ${folder}`, { path: folder }, true);
      for (const n of notesFor(type, v)) add("note", `Write ${n.path.split("/").pop()}`, { path: n.path, text: n.text }, true);
      add("look", `Give it its color and icon`, { name, color: color || type.color, icon: icon || type.icon }, true);
      add("home", `Link it from Home under ${categoryLabel || category}`, { category, categoryLabel: categoryLabel || category, link: `${folder}/${name}`, name, line: `- [[${folder}/${name}|${name}]]: ${(description || type.label).split(/[.\n]/)[0].slice(0, 120)}` }, true);
      if (options.workshop) {
        add("workshop", `Create the Workshop project "${slug}" (profile ${type.workshop && type.workshop.profile || "tool"})`, { name, profile: type.workshop && type.workshop.profile || "tool", repoDir });
        add("junction", `Link ${folder}/Repo - Workshop to the project's Workshop state`, { path: `${folder}/Repo - Workshop`, target: `${repoDir}\\.workshop` }, true);
        const folders = type.repo && type.repo.folders || [];
        if (folders.length) add("repo-folders", `Make the repo folders: ${folders.join(", ")}`, { repoDir, folders, type: type.label });
        for (const t of options.tasks || []) add("task", `Add the task "${t.title}"`, { repoDir, task: t });
        if (options.github) add("github", `Create a private GitHub repo and push`, { repoDir, slug, visibility: "private" });
      }
      add("brief", "Write its brief and show it everywhere", { folder });
      return { folder, slug, repoDir, steps, vars: v };
    }
    function planAdopt({ name, type, category, categoryLabel, repoDir, has = {}, description, date, color, icon }) {
      const folder = `${category}/${name}`;
      const v = vars({ name, type, category, folder, repoDir, description, date });
      const steps = [];
      const add = (kind, label, args, undo = false) => steps.push({ id: `s${steps.length + 1}`, kind, label, args, undo });
      add("folder", `Create the vault folder ${folder}`, { path: folder }, true);
      add("junction", `Link Repo - Workshop`, { path: `${folder}/Repo - Workshop`, target: `${repoDir}\\.workshop` }, true);
      for (const [dir, label] of [["Docs", "Repo - Docs"], ["docs", "Repo - Docs"], ["Requirements", "Repo - Requirements"]]) {
        if (has[dir] && !steps.some((s) => s.args.path === `${folder}/${label}`)) add("junction", `Link ${label} to the repo's ${dir} folder`, { path: `${folder}/${label}`, target: `${repoDir}\\${dir}` }, true);
      }
      for (const n of notesFor(type, v)) add("note", `Write ${n.path.split("/").pop()}`, { path: n.path, text: n.text }, true);
      add("look", `Give it its color and icon`, { name, color: color || type.color, icon: icon || type.icon }, true);
      add("home", `Link it from Home under ${categoryLabel || category}`, { category, categoryLabel: categoryLabel || category, link: `${folder}/${name}`, name, line: `- [[${folder}/${name}|${name}]]: ${(description || type.label).split(/[.\n]/)[0].slice(0, 120)}` }, true);
      add("brief", "Write its brief and show it everywhere", { folder });
      return { folder, repoDir, steps, vars: v };
    }
    function homeWithLink(home, { categoryLabel, link, line }) {
      const text = String(home || "");
      if (text.includes(`[[${link}|`) || text.includes(`[[${link}]]`)) return null;
      const re = new RegExp(`^## ${categoryLabel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*$`, "m");
      const m = text.match(re);
      if (m) {
        const start = m.index + m[0].length;
        const next = text.slice(start).search(/^## /m);
        const end = next === -1 ? text.length : start + next;
        let sec = text.slice(start, end).replace(/\n\(none yet\)\n/, "\n");
        sec = sec.replace(/\s*$/, "") + `
${line}

`;
        return text.slice(0, start) + sec + text.slice(end);
      }
      const block = `## ${categoryLabel}

${line}

`;
      const shared = text.search(/^## Shared\s*$/m);
      if (shared !== -1) return text.slice(0, shared) + block + text.slice(shared);
      return text.replace(/\s*$/, "\n\n") + block;
    }
    function homeWithoutLink(home, { categoryLabel, line }) {
      let text = String(home || "").replace(`${line}
`, "");
      const re = new RegExp(`^## ${categoryLabel.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*\\n\\s*(?=^## |(?![\\s\\S]))`, "m");
      return text.replace(re, "");
    }
    module2.exports = { checkName, vars, notesFor, planCreate, planAdopt, homeWithLink, homeWithoutLink };
  }
});

// src/data/setup.js
var require_setup2 = __commonJS({
  "src/data/setup.js"(exports2, module2) {
    "use strict";
    var { homeWithLink, homeWithoutLink } = require_setup();
    var ProjectSetup2 = class {
      // opts.exec(cmd, args, options) can be swapped for tests
      constructor(plugin, opts = {}) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.execImpl = opts.exec || null;
      }
      node() {
        return { cp: require("child_process"), fs: require("fs"), path: require("path") };
      }
      base() {
        return this.app.vault.adapter.getBasePath();
      }
      // where Workshop lives (the folder above its bin), and the names and slugs already taken
      workshopHome() {
        const { path } = this.node();
        return path.dirname(path.dirname(this.plugin.workshop.bin));
      }
      registry() {
        const { fs, path } = this.node();
        try {
          return JSON.parse(fs.readFileSync(path.join(this.workshopHome(), "workshop.json"), "utf8")).projects || [];
        } catch (e) {
          return [];
        }
      }
      exec(cmd, args, options) {
        if (this.execImpl) return this.execImpl(cmd, args, options);
        const { cp } = this.node();
        return new Promise((resolve, reject) => {
          cp.execFile(cmd, args, Object.assign({ windowsHide: true, timeout: 12e4, maxBuffer: 16 * 1024 * 1024 }, options), (err, out, errOut) => {
            if (err) {
              const e = new Error(String(errOut || out || err.message).trim().split("\n").pop());
              e.code = err.code;
              reject(e);
            } else resolve(String(out || "").trim());
          });
        });
      }
      workshop(args, cwd) {
        return this.exec("node", [this.plugin.workshop.bin, ...args], { cwd: cwd || this.workshopHome() }).catch((e) => {
          if (e.code !== "ENOENT") throw e;
          return this.exec(process.execPath, [this.plugin.workshop.bin, ...args], { cwd: cwd || this.workshopHome(), env: Object.assign({}, process.env, { ELECTRON_RUN_AS_NODE: "1" }) });
        });
      }
      // one step; returns what's needed to undo it
      async step(s) {
        const vault = this.app.vault, a = vault.adapter, { fs, path } = this.node();
        const full = (p) => path.join(this.base(), p);
        switch (s.kind) {
          case "folder": {
            if (await a.exists(s.args.path)) return { made: false };
            await vault.createFolder(s.args.path);
            return { made: true };
          }
          case "note": {
            if (await a.exists(s.args.path)) return { made: false, skipped: "already there" };
            await vault.create(s.args.path, s.args.text);
            return { made: true };
          }
          case "junction": {
            if (fs.existsSync(full(s.args.path))) return { made: false, skipped: "already linked" };
            if (!fs.existsSync(s.args.target)) throw new Error(`Nothing to link to at ${s.args.target}`);
            fs.symlinkSync(s.args.target, full(s.args.path), "junction");
            return { made: true };
          }
          case "look": {
            const had = this.plugin.settings.projects[s.args.name];
            this.plugin.settings.projects[s.args.name] = Object.assign({}, had || {}, { color: had && had.color || s.args.color, icon: had && had.icon || s.args.icon });
            await this.plugin.saveSettings();
            return { made: !had, had };
          }
          case "home": {
            const f = vault.getAbstractFileByPath("Home.md");
            if (!f) return { made: false, skipped: "no Home note" };
            let changed = false;
            await vault.process(f, (text) => {
              const next = homeWithLink(text, s.args);
              changed = next !== null;
              return next === null ? text : next;
            });
            return { made: changed };
          }
          case "workshop": {
            const out = await this.workshop(["new", s.args.name, "--type", s.args.profile]);
            if (!fs.existsSync(path.join(s.args.repoDir, ".workshop"))) throw new Error(`Workshop said "${out}" but ${s.args.repoDir} has no .workshop`);
            return { made: true, external: true };
          }
          case "repo-folders": {
            for (const d of s.args.folders) {
              fs.mkdirSync(path.join(s.args.repoDir, d), { recursive: true });
              const keep = path.join(s.args.repoDir, d, ".gitkeep");
              if (!fs.readdirSync(path.join(s.args.repoDir, d)).length) fs.writeFileSync(keep, "");
            }
            await this.exec("git", ["add", "-A"], { cwd: s.args.repoDir });
            await this.exec("git", ["commit", "-q", "-m", `chore: folders from the ${s.args.type} type`], { cwd: s.args.repoDir }).catch(() => {
            });
            return { made: true, external: true };
          }
          case "task": {
            const t = s.args.task;
            const args = ["task", "add", t.title];
            if (t.details) args.push("--details", t.details);
            for (const x of [].concat(t.accept || t.acceptance || [])) args.push("--accept", x);
            if (t.kind) args.push("--kind", t.kind);
            await this.workshop(args, s.args.repoDir);
            return { made: true, external: true };
          }
          case "github": {
            const owner = (await this.exec("gh", ["api", "user", "-q", ".login"], {})).trim();
            await this.exec("gh", ["repo", "create", `${owner}/${s.args.slug}`, `--${s.args.visibility}`, "--source", s.args.repoDir, "--remote", "origin", "--push"], { cwd: s.args.repoDir });
            return { made: true, external: true };
          }
          case "brief": {
            this.plugin.types.invalidate();
            this.plugin.store.invalidate();
            await this.plugin.store.all();
            await this.plugin.briefs.writeAll();
            return { made: true };
          }
          default:
            throw new Error(`Unknown step ${s.kind}`);
        }
      }
      async undo(s, r) {
        if (!r || !r.made) return;
        const vault = this.app.vault, { fs, path } = this.node();
        if (s.kind === "note") {
          const f = vault.getAbstractFileByPath(s.args.path);
          if (f) await vault.trash(f, true);
        } else if (s.kind === "folder") {
          const f = vault.getAbstractFileByPath(s.args.path);
          if (f && (!f.children || !f.children.length)) await vault.trash(f, true);
        } else if (s.kind === "junction") {
          fs.rmdirSync(path.join(this.base(), s.args.path));
        } else if (s.kind === "look") {
          if (r.had) this.plugin.settings.projects[s.args.name] = r.had;
          else delete this.plugin.settings.projects[s.args.name];
          await this.plugin.saveSettings();
        } else if (s.kind === "home") {
          const f = vault.getAbstractFileByPath("Home.md");
          if (f) await vault.process(f, (text) => homeWithoutLink(text, s.args));
        }
      }
      // runs a plan (from `from`, for a retry); onStep(step, state, detail) reports progress. Returns
      // { ok, done: [ids], failed: { id, error }, undone: [ids], external }
      async run(plan, { onStep = () => {
      }, from = 0 } = {}) {
        const done = [], undone = [], results = /* @__PURE__ */ new Map();
        let external = false;
        for (let i = from; i < plan.steps.length; i++) {
          const s = plan.steps[i];
          onStep(s, "running");
          try {
            const r = await this.step(s);
            results.set(s.id, r);
            done.push(s.id);
            if (r.external) external = true;
            onStep(s, "done", r.skipped || "");
          } catch (e) {
            onStep(s, "failed", e.message);
            if (!external) {
              for (const id of done.slice().reverse()) {
                const st = plan.steps.find((x) => x.id === id);
                if (!st.undo) continue;
                try {
                  await this.undo(st, results.get(id));
                  undone.push(id);
                  onStep(st, "undone");
                } catch (u) {
                  onStep(st, "failed", `couldn't undo: ${u.message}`);
                }
              }
            }
            return { ok: false, done, failed: { id: s.id, index: i, error: e.message }, undone, external };
          }
        }
        return { ok: true, done, failed: null, undone, external };
      }
    };
    module2.exports = { ProjectSetup: ProjectSetup2 };
  }
});

// src/core/realms.js
var require_realms = __commonJS({
  "src/core/realms.js"(exports2, module2) {
    "use strict";
    var SHAPE_KEYS = [
      "shape",
      "spread",
      "foliage",
      "nodeSize",
      "fan",
      "tilt",
      "bend",
      "length",
      "trunk",
      "rootFan",
      "scatter",
      "twist",
      "spin",
      "alternate",
      "nodeShape",
      "lineStyle",
      "lineWidth",
      "sway",
      "swaySpeed",
      "twinkle",
      "breathe",
      "pulses",
      "pulseSpeed",
      "flyDir",
      "flySpeed",
      "fireflies",
      "speed"
    ];
    var REALM_KEYS = SHAPE_KEYS.concat(["depth", "autoTurn", "autoSpin", "pitch", "yaw", "strands", "useTheme", "branch", "leaf", "root", "showLinks", "linkAlpha", "frame"]);
    var SHAPES = [
      ["tree", "Tree", "Projects above, shared notes as roots"],
      ["radial", "Radial", "Every folder a spoke"],
      ["orbit", "Orbit", "Each folder its own ring"],
      ["galaxy", "Galaxy", "Spiral arms that turn"],
      ["helix", "Helix", "Notes climb a turning double helix"],
      ["lotus", "Lotus", "Each folder a petal of one flower"],
      ["sphere", "Sphere", "Folders spread over a glowing globe"]
    ];
    var fire = { branch: "#ff7a2b", leaf: "#ffd27a", root: "#ff3d6e" };
    var REALMS2 = [
      { name: "Gold Tree", group: "Classic", line: "Your original tree, in your theme's colors.", shape: "tree", set: {} },
      {
        name: "Celestial World Tree",
        group: "Celestial & divine",
        line: "The Gold Tree in deep space: a 3D crown of nebula branches, every project a constellation.",
        shape: "tree",
        set: { useTheme: false, branch: "#e8b84a", leaf: "#ffe9a8", root: "#b77cff", depth: 1.3, foliage: 2.4, scatter: 1.3, fan: 170, nodeShape: "star", fireflies: 90, pulses: 12, twinkle: 1.5, autoTurn: 0.06 }
      },
      {
        name: "Throne of Infinity",
        group: "Celestial & divine",
        line: "Home sits in a throne of turning rings of light; projects ride the rings.",
        shape: "orbit",
        set: { useTheme: false, branch: "#ffd36a", leaf: "#7fe9ff", root: "#c46bff", depth: 1.7, spin: 0.6, alternate: true, length: 1.25, nodeShape: "diamond", pitch: -24, fireflies: 50, flyDir: "swirl" }
      },
      {
        name: "Astral Clockwork",
        group: "Celestial & divine",
        line: "Bronze orbits that tick round in opposite ways, like gears of one machine.",
        shape: "orbit",
        set: { useTheme: false, branch: "#c9953f", leaf: "#ffe2a0", root: "#8a5a22", depth: 0.7, spin: 1.5, alternate: true, nodeShape: "square", lineStyle: "dashed", pulses: 0, fireflies: 20, flyDir: "drift", pitch: -38 }
      },
      {
        name: "Cathedral of Stars",
        group: "Celestial & divine",
        line: "Projects rise as straight spires of light; notes are the stars along them.",
        shape: "tree",
        set: { useTheme: false, branch: "#b8a6ff", leaf: "#fff3c4", root: "#5a6bff", fan: 70, length: 1.5, bend: 0.15, trunk: 0.6, scatter: 0.5, foliage: 0.6, lineStyle: "straight", nodeShape: "star", depth: 0.9, fireflies: 60, autoTurn: 0.04 }
      },
      {
        name: "Phoenix Ascension",
        group: "Celestial & divine",
        line: "The tree spreads into burning wings; work in progress leaves trails of fire.",
        shape: "tree",
        set: Object.assign({ useTheme: false, fan: 300, bend: 1.8, foliage: 2.5, sway: 2, fireflies: 140, flySpeed: 2, pulses: 18, pulseSpeed: 1.5, depth: 0.9, nodeShape: "spark" }, fire)
      },
      {
        name: "Dyson Ascendancy",
        group: "Cosmic megastructures",
        line: "A star wrapped in a shell of your notes, with beams out to every project.",
        shape: "sphere",
        set: { useTheme: false, branch: "#ffcf5a", leaf: "#fff6d6", root: "#ff9d2e", lineStyle: "straight", nodeShape: "square", pulses: 14, autoTurn: 0.09, pitch: -14, fireflies: 30, flyDir: "out" }
      },
      {
        name: "Event Horizon",
        group: "Cosmic megastructures",
        line: "A tilted disc of notes spiralling round the bright core.",
        shape: "galaxy",
        set: { useTheme: false, branch: "#ff9a3c", leaf: "#ffe0b0", root: "#8a4dff", twist: 5.2, spin: 1.6, depth: 0.4, pitch: -62, fireflies: 60, flyDir: "swirl", foliage: 2 }
      },
      {
        name: "The Grand Orrery",
        group: "Cosmic megastructures",
        line: "Every folder its own planet ring, each tipped its own way.",
        shape: "orbit",
        set: { useTheme: false, branch: "#d9b45a", leaf: "#a8d8ff", root: "#6b8cff", depth: 1.25, spin: 0.8, alternate: true, nodeShape: "ring", pitch: -50, fireflies: 30, flyDir: "drift" }
      },
      {
        name: "Stairway to Eternity",
        group: "Cosmic megastructures",
        line: "One golden spiral staircase; folders are its floors, notes its steps.",
        shape: "helix",
        set: { useTheme: false, branch: "#f0c060", leaf: "#fffaf0", root: "#9a7bff", strands: 1, twist: 3.4, autoTurn: 0.1, fireflies: 60, flyDir: "up", nodeShape: "star" }
      },
      {
        name: "Abyssal Kingdom",
        group: "Living worlds",
        line: "A ring of coral palaces under the sea, with bubbles of light drifting up.",
        shape: "radial",
        set: { useTheme: false, branch: "#1fd1c1", leaf: "#9ffcff", root: "#2a6bff", fan: 180, depth: 1.3, sway: 2.5, swaySpeed: 0.5, fireflies: 120, flyDir: "up", flySpeed: 0.6, nodeShape: "ring", pitch: -20 }
      },
      {
        name: "Crystal Olympus",
        group: "Living worlds",
        line: "Projects as crystal peaks; notes are shards, joined by bright straight bridges.",
        shape: "radial",
        set: { useTheme: false, branch: "#9ad7ff", leaf: "#ffffff", root: "#c9a7ff", fan: 180, depth: 1.6, lineStyle: "straight", nodeShape: "diamond", scatter: 0.7, pitch: -30, autoTurn: 0.05, twinkle: 1.6 }
      },
      {
        name: "Garden of Creation",
        group: "Living worlds",
        line: "Every idea a seed, every project a blooming plant that sways.",
        shape: "tree",
        set: { useTheme: false, branch: "#4fe08a", leaf: "#ff9ad5", root: "#2f9e5a", foliage: 3, sway: 2, scatter: 1.5, fan: 200, fireflies: 70, flyDir: "drift", depth: 1.1 }
      },
      {
        name: "Genesis Helix",
        group: "Reality-bending",
        line: "A double helix: two turning strands with glowing rungs between them.",
        shape: "helix",
        set: { useTheme: false, branch: "#35e0ff", leaf: "#ff5cf0", root: "#7d4dff", strands: 2, twist: 2.6, autoTurn: 0.12, pulses: 10, fireflies: 40 }
      },
      {
        name: "Fractal Divinity",
        group: "Reality-bending",
        line: "Your vault as one golden mandala, slowly turning, seen from above.",
        shape: "lotus",
        set: { useTheme: false, branch: "#e8b84a", leaf: "#fff0b3", root: "#ff8a3d", nodeShape: "star", lineStyle: "straight", autoSpin: 0.04, depth: 0.6, fireflies: 40, flyDir: "out" }
      },
      {
        name: "Eternal Lotus",
        group: "Reality-bending",
        line: "A great lotus of light: each petal a folder, opening toward you.",
        shape: "lotus",
        set: { useTheme: false, branch: "#ffcf6a", leaf: "#ffe9f2", root: "#ff7ab8", pitch: -55, depth: 1.2, autoTurn: 0.06, fireflies: 60, flyDir: "up", breathe: 0.6 }
      },
      {
        name: "Hyperdimensional Nexus",
        group: "Reality-bending",
        line: "A turning globe of notes with every real link drawn through it.",
        shape: "sphere",
        set: { useTheme: false, branch: "#ff4dd2", leaf: "#7df9ff", root: "#7d4dff", lineStyle: "straight", showLinks: true, linkAlpha: 0.03, autoTurn: 0.1, autoSpin: 0.03, pitch: 18, nodeShape: "spark" }
      }
    ];
    var GROUPS = ["Classic", "Celestial & divine", "Cosmic megastructures", "Living worlds", "Reality-bending", "Mine"];
    function applyRealm2(graph, realm, defaults) {
      const next = Object.assign({}, graph);
      for (const k of REALM_KEYS) if (k in defaults) next[k] = defaults[k];
      Object.assign(next, realm.set || {});
      if (realm.shape) next.shape = realm.shape;
      next.realm = realm.name;
      return next;
    }
    function realmFromGraph2(graph, name) {
      const set = {};
      for (const k of REALM_KEYS) if (graph[k] !== void 0) set[k] = graph[k];
      return { name, group: "Mine", line: "Your own realm.", shape: graph.shape, set };
    }
    function savedAsRealm2(item) {
      return { name: item.name, group: "Mine", line: "Your own realm.", shape: (item.shape || {}).shape, set: Object.assign({}, item.shape || {}) };
    }
    function realmColors(realm, theme) {
      const s = realm.set || {};
      if (s.useTheme === false && s.branch) return { branch: s.branch, leaf: s.leaf || s.branch, root: s.root || s.branch, bg: theme.bg, text: theme.text };
      return { branch: theme.accent, leaf: theme.accent2, root: theme.accent, bg: theme.bg, text: theme.text };
    }
    module2.exports = { SHAPE_KEYS, REALM_KEYS, SHAPES, REALMS: REALMS2, GROUPS, applyRealm: applyRealm2, realmFromGraph: realmFromGraph2, savedAsRealm: savedAsRealm2, realmColors };
  }
});

// src/views/panel.js
var require_panel = __commonJS({
  "src/views/panel.js"(exports2, module2) {
    "use strict";
    var { ItemView, Setting: Setting2, Notice: Notice2, Modal, SuggestModal, setIcon: setIcon2, getIcon, getIconIds } = require("obsidian");
    var { PANEL: PANEL2, FONTS, PRESETS: PRESETS2, DEFAULTS: DEFAULTS2, QUICK_THEMES } = require_constants();
    var { rgb: rgb2, rgba: rgba2, mix: mix2, hash: hash2, rng, lerp, fontFamily: fontFamily2, ago, section, clip, stamp } = require_util();
    var { REALMS: REALMS2, SHAPES, realmFromGraph: realmFromGraph2, savedAsRealm: savedAsRealm2, realmColors } = require_realms();
    function thumb(parent, shape, c, w = 96, h = 72) {
      const cv = parent.createEl("canvas", { cls: "evs-thumb" });
      const dpr = window.devicePixelRatio || 1;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      const x = cv.getContext("2d");
      x.scale(dpr, dpr);
      x.fillStyle = c.bg;
      x.fillRect(0, 0, w, h);
      x.lineCap = "round";
      x.shadowBlur = 4;
      x.shadowColor = rgba2(c.branch, 0.8);
      const dot = (px, py, r2, col) => {
        x.fillStyle = col;
        x.beginPath();
        x.arc(px, py, r2, 0, Math.PI * 2);
        x.fill();
      };
      const r = rng(hash2(shape));
      const cx = w / 2, cy = h / 2;
      x.strokeStyle = c.branch;
      if (shape === "tree") {
        const home = { x: cx, y: h * 0.74 }, fork = { x: cx, y: h * 0.48 };
        x.lineWidth = 1.6;
        x.beginPath();
        x.moveTo(home.x, home.y);
        x.lineTo(fork.x, fork.y);
        x.stroke();
        for (let i = 0; i < 5; i++) {
          const a = -Math.PI / 2 + lerp(-1.2, 1.2, i / 4), L = h * 0.38;
          const ex = fork.x + Math.cos(a) * L, ey = fork.y + Math.sin(a) * L;
          x.lineWidth = 1;
          x.beginPath();
          x.moveTo(fork.x, fork.y);
          x.quadraticCurveTo(fork.x + (ex - fork.x) * 0.15, fork.y + (ey - fork.y) * 0.8, ex, ey);
          x.stroke();
          for (let k = 0; k < 3; k++) dot(lerp(fork.x, ex, 0.5 + r() * 0.5) + (r() - 0.5) * 6, lerp(fork.y, ey, 0.5 + r() * 0.5) + (r() - 0.5) * 6, 1.3, c.leaf);
        }
        x.strokeStyle = c.root;
        for (let i = 0; i < 3; i++) {
          const a = Math.PI / 2 + lerp(-0.9, 0.9, i / 2);
          x.beginPath();
          x.moveTo(home.x, home.y);
          x.lineTo(home.x + Math.cos(a) * h * 0.18, home.y + Math.sin(a) * h * 0.18);
          x.stroke();
        }
        dot(home.x, home.y, 2.6, "#fff");
      } else if (shape === "radial") {
        for (let i = 0; i < 7; i++) {
          const a = i / 7 * Math.PI * 2, L = h * 0.32;
          const ex = cx + Math.cos(a) * L, ey = cy + Math.sin(a) * L;
          x.lineWidth = 1;
          x.beginPath();
          x.moveTo(cx, cy);
          x.lineTo(ex, ey);
          x.stroke();
          for (let k = 0; k < 3; k++) dot(ex + (r() - 0.5) * 9, ey + (r() - 0.5) * 9, 1.3, c.leaf);
        }
        dot(cx, cy, 2.6, "#fff");
      } else if (shape === "orbit") {
        for (let k = 1; k <= 3; k++) {
          const rr = h * 0.13 * k;
          x.strokeStyle = rgba2(c.branch, 0.5);
          x.lineWidth = 0.8;
          x.beginPath();
          x.arc(cx, cy, rr, 0, Math.PI * 2);
          x.stroke();
          for (let j = 0; j < 2 + k; j++) {
            const a = r() * Math.PI * 2;
            dot(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr, 1.5, c.leaf);
          }
        }
        dot(cx, cy, 2.6, "#fff");
      } else if (shape === "helix") {
        for (let s = 0; s < 2; s++) {
          x.strokeStyle = s ? c.root : c.branch;
          x.lineWidth = 1.2;
          x.beginPath();
          for (let i = 0; i <= 40; i++) {
            const u = i / 40, py = h * 0.1 + u * h * 0.8, px = cx + Math.cos(u * Math.PI * 4 + s * Math.PI) * w * 0.16;
            i ? x.lineTo(px, py) : x.moveTo(px, py);
          }
          x.stroke();
        }
        x.strokeStyle = rgba2(c.branch, 0.5);
        x.lineWidth = 0.7;
        for (let i = 1; i < 10; i++) {
          const u = i / 10, py = h * 0.1 + u * h * 0.8, ex = Math.cos(u * Math.PI * 4) * w * 0.16;
          x.beginPath();
          x.moveTo(cx + ex, py);
          x.lineTo(cx - ex, py);
          x.stroke();
          dot(cx + ex, py, 1.3, c.leaf);
        }
      } else if (shape === "lotus") {
        for (let i = 0; i < 7; i++) {
          const th = -Math.PI / 2 + i / 7 * Math.PI * 2, half = Math.PI / 7 * 0.9, R = h * 0.4;
          x.strokeStyle = c.branch;
          x.lineWidth = 1;
          x.beginPath();
          for (let k = 0; k <= 32; k++) {
            const side = k <= 16 ? 1 : -1, q = k <= 16 ? k / 16 : (32 - k) / 16;
            const a = th + side * half * Math.pow(Math.sin(Math.PI * q), 0.7);
            const px = cx + Math.cos(a) * R * q, py = cy + Math.sin(a) * R * q;
            k ? x.lineTo(px, py) : x.moveTo(px, py);
          }
          x.stroke();
          dot(cx + Math.cos(th) * R * 0.6, cy + Math.sin(th) * R * 0.6, 1.3, c.leaf);
        }
        dot(cx, cy, 2.6, "#fff");
      } else if (shape === "sphere") {
        const R = h * 0.32;
        x.strokeStyle = rgba2(c.branch, 0.45);
        x.lineWidth = 0.7;
        x.beginPath();
        x.arc(cx, cy, R, 0, Math.PI * 2);
        x.stroke();
        for (const k of [0.35, 0.75]) {
          x.beginPath();
          x.ellipse(cx, cy, R * k, R, 0, 0, Math.PI * 2);
          x.stroke();
          x.beginPath();
          x.ellipse(cx, cy, R, R * k, 0, 0, Math.PI * 2);
          x.stroke();
        }
        x.strokeStyle = c.branch;
        x.lineWidth = 1.2;
        x.beginPath();
        x.ellipse(cx, cy, R * 1.35, R * 0.28, -0.25, 0, Math.PI * 2);
        x.stroke();
        for (let i = 0; i < 9; i++) {
          const a = r() * Math.PI * 2, b = r() * 0.9;
          dot(cx + Math.cos(a) * R * b, cy + Math.sin(a) * R * b, 1.3, c.leaf);
        }
        dot(cx, cy, 2.6, "#fff");
      } else {
        for (let arm = 0; arm < 3; arm++) {
          x.lineWidth = 1;
          x.strokeStyle = rgba2(c.branch, 0.8);
          x.beginPath();
          const pts = [];
          for (let i = 0; i <= 30; i++) {
            const t = i / 30, a = arm / 3 * Math.PI * 2 + t * 2.6, rr = h * (0.03 + 0.4 * t);
            const px = cx + Math.cos(a) * rr, py = cy + Math.sin(a) * rr;
            if (i === 0) x.moveTo(px, py);
            else x.lineTo(px, py);
            if (i % 7 === 3) pts.push([px, py]);
          }
          x.stroke();
          for (const [px, py] of pts) dot(px, py, 1.3, c.leaf);
        }
        dot(cx, cy, 2.6, "#fff");
      }
      return cv;
    }
    function vaultDiagram(parent, c, font) {
      const w = 300, h = 230;
      const cv = parent.createEl("canvas", { cls: "evs-diagram" });
      const dpr = window.devicePixelRatio || 1;
      cv.width = w * dpr;
      cv.height = h * dpr;
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      const x = cv.getContext("2d");
      x.scale(dpr, dpr);
      x.fillStyle = c.bg;
      x.fillRect(0, 0, w, h);
      const home = { x: 150, y: 160 }, fork = { x: 150, y: 105 };
      x.strokeStyle = c.branch;
      x.shadowColor = rgba2(c.branch, 0.8);
      x.shadowBlur = 5;
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(home.x, home.y);
      x.lineTo(fork.x, fork.y);
      x.stroke();
      const tips = [];
      for (let i = 0; i < 4; i++) {
        const a = -Math.PI / 2 + lerp(-1.1, 1.1, i / 3), L = 70;
        const ex = fork.x + Math.cos(a) * L, ey = fork.y + Math.sin(a) * L;
        x.lineWidth = 1.2;
        x.beginPath();
        x.moveTo(fork.x, fork.y);
        x.quadraticCurveTo(fork.x + (ex - fork.x) * 0.15, fork.y + (ey - fork.y) * 0.8, ex, ey);
        x.stroke();
        tips.push({ x: ex, y: ey });
        x.fillStyle = c.leaf;
        for (let k = 0; k < 3; k++) {
          x.beginPath();
          x.arc(lerp(fork.x, ex, 0.55 + k * 0.17) + (k - 1) * 4, lerp(fork.y, ey, 0.55 + k * 0.17) - 4, 2, 0, Math.PI * 2);
          x.fill();
        }
      }
      x.strokeStyle = c.root;
      for (let i = 0; i < 3; i++) {
        const a = Math.PI / 2 + lerp(-0.9, 0.9, i / 2);
        x.beginPath();
        x.moveTo(home.x, home.y);
        x.lineTo(home.x + Math.cos(a) * 38, home.y + Math.sin(a) * 38);
        x.stroke();
      }
      x.shadowBlur = 12;
      x.shadowColor = "#fff";
      x.fillStyle = "#fff";
      x.beginPath();
      x.arc(home.x, home.y, 4, 0, Math.PI * 2);
      x.fill();
      x.shadowBlur = 0;
      x.font = `600 10px ${font}`;
      x.fillStyle = c.text;
      x.strokeStyle = rgba2(c.text, 0.5);
      x.lineWidth = 0.7;
      const callout = (fromX, fromY, toX, toY, text, align) => {
        x.beginPath();
        x.moveTo(fromX, fromY);
        x.lineTo(toX, toY);
        x.stroke();
        x.textAlign = align;
        x.fillText(text, toX + (align === "left" ? 3 : -3), toY + 3);
      };
      callout(home.x + 5, home.y, 215, 168, "HOME (center star)", "left");
      callout(tips[3].x, tips[3].y, 262, 22, "A PROJECT = branch", "right");
      callout(tips[0].x + 8, tips[0].y + 10, 10, 66, "NOTES = glowing dots", "left");
      callout(home.x - 20, home.y + 30, 10, 214, "_techniques, _inbox: roots", "left");
      return cv;
    }
    var NameModal = class extends Modal {
      constructor(app, title, onDone) {
        super(app);
        this.title = title;
        this.onDone = onDone;
      }
      onOpen() {
        this.titleEl.setText(this.title);
        const input = this.contentEl.createEl("input", { type: "text", attr: { placeholder: "Name", style: "width:100%" } });
        const ok = () => {
          const v = input.value.trim();
          if (v) {
            this.onDone(v);
            this.close();
          }
        };
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") ok();
        });
        new Setting2(this.contentEl).addButton((b) => b.setButtonText("Save").setCta().onClick(ok));
        window.setTimeout(() => input.focus(), 50);
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    var ControlPanelView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.tab = "looks";
        this.filter = "";
      }
      getViewType() {
        return PANEL2;
      }
      getDisplayText() {
        return "EMX control panel";
      }
      getIcon() {
        return "sliders-horizontal";
      }
      async onOpen() {
        this.render();
      }
      render() {
        const el = this.contentEl;
        const scroll = el.scrollTop;
        this.unmount();
        el.empty();
        el.addClass("evs-panel");
        const tabs = el.createDiv({ cls: "evs-tabs" });
        const list = [["looks", "Looks", "palette"], ["fx", "Backgrounds", "film"], ["projects", "Projects", "folder-kanban"], ["graph", "Graph", "sparkles"], ["nav", "Navigate", "compass"], ["help", "How to", "help-circle"]];
        for (const [id, label, icon] of list) {
          const b = tabs.createEl("button", { cls: "evs-tab" + (this.tab === id ? " is-active" : "") });
          setIcon2(b.createSpan(), icon);
          b.createSpan({ text: label });
          b.onclick = () => {
            this.tab = id;
            this.render();
            el.scrollTop = 0;
          };
        }
        const body = el.createDiv({ cls: "evs-body" });
        const tabsFn = { looks: () => this.looks(body), fx: () => this.backgrounds(body), projects: () => this.projects(body), graph: () => this.graph(body), nav: () => this.nav(body), help: () => this.help(body) };
        (tabsFn[this.tab] || tabsFn.looks)();
        el.scrollTop = scroll;
      }
      // live previews this panel started (shader cards, the background editor)
      unmount() {
        for (const m of this.mounts || []) m && m.destroy();
        this.mounts = [];
      }
      async onClose() {
        this.unmount();
      }
      // --- little controls; each change applies live without redrawing this panel ---
      apply(mutate, opts = {}) {
        this.plugin.change(mutate, Object.assign({ source: this }, opts));
      }
      section(parent, title, hint) {
        const sec = parent.createDiv({ cls: "evs-sec" });
        sec.createDiv({ cls: "evs-sec-title", text: title });
        if (hint) sec.createDiv({ cls: "evs-hint", text: hint });
        return sec;
      }
      color(parent, label, get, put, opts = { custom: true }) {
        const row = parent.createDiv({ cls: "evs-row" });
        row.createSpan({ text: label });
        const input = row.createEl("input", { type: "color" });
        input.value = get();
        input.oninput = () => this.apply((s) => put(s, input.value), opts);
      }
      range(parent, label, min, max, step, get, put, opts = {}) {
        const row = parent.createDiv({ cls: "evs-row" });
        row.createSpan({ text: label });
        const val = row.createSpan({ cls: "evs-val", text: String(get()) });
        const input = row.createEl("input", { type: "range", attr: { min, max, step } });
        input.value = get();
        input.oninput = () => {
          val.setText(input.value);
          this.apply((s) => put(s, Number(input.value)), opts);
        };
      }
      toggle(parent, label, get, put, opts = {}) {
        const row = parent.createDiv({ cls: "evs-row" });
        row.createSpan({ text: label });
        const input = row.createEl("input", { type: "checkbox" });
        input.checked = !!get();
        input.onchange = () => this.apply((s) => put(s, input.checked), opts);
      }
      select(parent, label, options, get, put, opts = {}) {
        const row = parent.createDiv({ cls: "evs-row" });
        row.createSpan({ text: label });
        const sel = row.createEl("select", { cls: "dropdown" });
        for (const o of options) sel.createEl("option", { text: o, value: o });
        sel.value = get();
        sel.onchange = () => this.apply((s) => put(s, sel.value), opts);
      }
      button(parent, text, icon, onClick, cls) {
        const b = parent.createEl("button", { cls: "evs-btn " + (cls || "") });
        if (icon) setIcon2(b.createSpan(), icon);
        b.createSpan({ text });
        b.onclick = onClick;
        return b;
      }
      // a look card: colors and fonts of the look, its background as a thumbnail (live while hovered)
      card(parent, entry, active, tools) {
        const p = this.plugin, look = Object.assign({}, DEFAULTS2, entry.look);
        const g = look.graph || {};
        const card = parent.createDiv({ cls: "evs-card" + (active ? " is-active" : "") });
        card.style.background = look.bg;
        card.style.borderColor = active ? look.accent : rgba2(look.accent, 0.35);
        const bgDef = look.bgVault ? p.bgm.def(look.bgVault) : null;
        if (bgDef && bgDef.thumb) {
          card.style.backgroundImage = `linear-gradient(${rgba2(look.bg, 0.45)}, ${rgba2(look.bg, 0.85)}), url("${bgDef.thumb}")`;
          card.style.backgroundSize = "cover";
        }
        let live = null;
        if (bgDef && bgDef.kind === "shader") {
          card.onmouseenter = () => {
            if (live) return;
            live = p.bgm.mount(card, bgDef.id);
            if (live) {
              card.prepend(live.el);
              this.mounts.push(live);
            }
          };
          card.onmouseleave = () => {
            if (!live) return;
            live.destroy();
            this.mounts = this.mounts.filter((m) => m !== live);
            live = null;
          };
        }
        const stripe = card.createDiv({ cls: "evs-card-stripe" });
        stripe.style.background = `linear-gradient(90deg, ${look.accent}, ${look.accent2}, ${g.useTheme === false ? g.leaf : look.accent2})`;
        stripe.style.boxShadow = `0 0 ${6 + 8 * (look.glow || 1)}px ${rgba2(look.accent, 0.6)}`;
        const t = card.createDiv({ cls: "evs-card-name", text: entry.name });
        t.style.color = look.heading;
        t.style.fontFamily = fontFamily2(look.fontHead);
        const sample = card.createDiv({ cls: "evs-card-sample", text: bgDef ? `with ${bgDef.name}` : "Notes \xB7 links \xB7 ideas" });
        sample.style.color = look.text;
        sample.style.fontFamily = fontFamily2(look.fontUI);
        card.onclick = () => p.setLook(JSON.parse(JSON.stringify(entry.look)), entry.name);
        if (tools) {
          const bar = card.createDiv({ cls: "evs-card-tools" });
          for (const [icon, label, fn] of tools) {
            const b = bar.createSpan({ attr: { "aria-label": label } });
            setIcon2(b, icon);
            b.onclick = (e) => {
              e.stopPropagation();
              fn();
            };
          }
        }
        return card;
      }
      looks(body) {
        const p = this.plugin, s = p.settings;
        const bar = body.createDiv({ cls: "evs-bar" });
        this.button(bar, "Undo", "undo-2", () => p.undoLook());
        this.button(bar, "Surprise me", "dices", () => p.surprise());
        this.button(bar, "Theme " + (s.themeOn ? "on" : "off"), "power", () => p.change((x) => x.themeOn = !x.themeOn), s.themeOn ? "is-on" : "");
        const saveNew = () => new NameModal(this.app, "New look from what you see now", (name) => {
          s.looks.push({ id: "l-" + Date.now().toString(36), name, look: p.look() });
          s.preset = name;
          p.saveSoon();
          this.render();
          new Notice2(`Added look "${name}"`);
        }).open();
        const sec = this.section(body, "Looks", "Click a card to try it. Hover a card for rename, duplicate, update and delete. Undo goes back.");
        const grid = sec.createDiv({ cls: "evs-grid" });
        for (const entry of s.looks) {
          const idx = () => s.looks.indexOf(entry);
          this.card(grid, entry, s.preset === entry.name, [
            ["pencil", "Rename", () => new NameModal(this.app, "Rename look", (name) => {
              if (s.preset === entry.name) s.preset = name;
              entry.name = name;
              p.saveSoon();
              this.render();
            }).open()],
            ["copy", "Duplicate", () => {
              s.looks.splice(idx() + 1, 0, { id: "l-" + Date.now().toString(36), name: entry.name + " copy", look: JSON.parse(JSON.stringify(entry.look)) });
              p.saveSoon();
              this.render();
            }],
            ["save", "Update with what you see now", () => {
              entry.look = p.look();
              s.preset = entry.name;
              p.saveSoon();
              this.render();
              new Notice2(`Updated "${entry.name}"`);
            }],
            ["arrow-left", "Move left", () => {
              const i = idx();
              if (i > 0) [s.looks[i - 1], s.looks[i]] = [s.looks[i], s.looks[i - 1]];
              p.saveSoon();
              this.render();
            }],
            ["trash-2", "Delete", () => {
              s.looks = s.looks.filter((l) => l !== entry);
              if (s.preset === entry.name) s.preset = "Custom";
              p.saveSoon();
              this.render();
            }]
          ]);
        }
        const add = grid.createDiv({ cls: "evs-card is-new" });
        const addIn = add.createDiv();
        setIcon2(addIn.createSpan(), "plus");
        addIn.createSpan({ text: " New look from now" });
        add.onclick = saveNew;
        const missing = Object.keys(PRESETS2).filter((n) => !s.looks.some((l) => l.id === "p-" + n.toLowerCase().replace(/\s+/g, "-")));
        if (missing.length) {
          const r = sec.createDiv({ cls: "evs-bar" });
          this.button(r, `Restore ${missing.length} built-in look${missing.length === 1 ? "" : "s"}`, "rotate-ccw", () => {
            p.restoreBuiltIns();
            p.saveSoon();
            this.render();
          });
        }
        const col = this.section(body, "Colors", "Changes show instantly. Current: " + s.preset);
        this.color(col, "Accent", () => s.accent, (x, v) => x.accent = v);
        this.color(col, "Accent 2", () => s.accent2, (x, v) => x.accent2 = v);
        this.color(col, "Background", () => s.bg, (x, v) => x.bg = v);
        this.color(col, "Panels", () => s.panel, (x, v) => x.panel = v);
        this.color(col, "Text", () => s.text, (x, v) => x.text = v);
        this.color(col, "Muted text", () => s.muted, (x, v) => x.muted = v);
        this.color(col, "Headings", () => s.heading, (x, v) => x.heading = v);
        const shape = this.section(body, "Shape and feel");
        this.range(shape, "Glow", 0, 2, 0.1, () => s.glow, (x, v) => x.glow = v, { custom: true });
        this.range(shape, "Roundness", 0, 24, 1, () => s.radius, (x, v) => x.radius = v, { custom: true });
        this.select(shape, "Frames", ["solid", "double", "dashed", "dotted", "none"], () => s.frameStyle, (x, v) => x.frameStyle = v, { custom: true });
        this.range(shape, "Frame width", 0, 4, 1, () => s.frameWidth, (x, v) => x.frameWidth = v, { custom: true });
        this.toggle(shape, "Starfield", () => s.stars, (x, v) => x.stars = v);
        this.range(shape, "Stars", 0, 1, 0.05, () => s.starDensity, (x, v) => x.starDensity = v, { rebuild: true });
        const fonts = this.section(body, "Fonts");
        const names = Object.keys(FONTS);
        this.select(fonts, "Headings", names, () => s.fontHead, (x, v) => x.fontHead = v, { custom: true });
        this.select(fonts, "Interface", names, () => s.fontUI, (x, v) => x.fontUI = v, { custom: true });
        this.select(fonts, "Note text", names, () => s.fontText, (x, v) => x.fontText = v, { custom: true });
        this.toggle(fonts, "Small caps titles", () => s.smallCaps, (x, v) => x.smallCaps = v);
        const more = body.createDiv({ cls: "evs-bar" });
        this.button(more, "All settings + custom CSS", "settings", () => {
          this.app.setting.open();
          this.app.setting.openTabById(this.plugin.manifest.id);
        });
      }
      // ---------- Backgrounds tab ----------
      backgrounds(body) {
        const p = this.plugin, s = p.settings, fx = s.fx, bgm = p.bgm;
        const sel = this.bgSel = bgm.def(this.bgSel?.id || this.bgSel) ? this.bgSel : fx.vault.id;
        const selected = bgm.def(typeof sel === "string" ? sel : sel?.id) || bgm.all()[0];
        this.bgSel = selected && selected.id;
        const imp = this.section(body, "Import", "Shaders from EMX Shader Studio (packs, projects, .frag) or looping videos (.mp4, .webm).");
        const row = imp.createDiv({ cls: "evs-row" });
        row.createSpan({ text: "Shader Studio library" });
        const pathIn = row.createEl("input", { type: "text" });
        pathIn.value = fx.libraryPath;
        pathIn.style.gridColumn = "1 / -1";
        pathIn.onchange = () => {
          fx.libraryPath = pathIn.value.trim();
          p.saveSoon();
        };
        const ibar = imp.createDiv({ cls: "evs-bar" });
        this.button(ibar, "Import library", "download", async () => {
          try {
            const n = await bgm.importLibrary(fx.libraryPath);
            p.saveSoon();
            new Notice2(`Imported ${n} shader${n === 1 ? "" : "s"} from Shader Studio`);
            this.render();
          } catch (e) {
            new Notice2("Couldn't read that folder: " + e.message);
          }
        }, "mod-cta");
        const runImport = async (files) => {
          if (!files.length) return;
          const { failed, fresh, known, ids } = await bgm.importFiles(files);
          p.saveSoon();
          const parts = [];
          if (fresh.length) parts.push(`Added ${fresh.length}: ${fresh.slice(0, 4).join(", ")}${fresh.length > 4 ? "\u2026" : ""}`);
          if (known.length) parts.push(`Already in your library (refreshed): ${known.slice(0, 4).join(", ")}${known.length > 4 ? "\u2026" : ""}`);
          if (failed.length) parts.push(`Couldn't import: ${failed.map(([f, why]) => `${f} (${why})`).join("; ")}`);
          new Notice2(parts.join(". ") || "Nothing to import", failed.length || known.length ? 9e3 : 4e3);
          if (ids.length) {
            this.bgSel = ids[ids.length - 1];
            this.bgFilter = "";
            this.bgFav = false;
            this.bgKind = "all";
            this.bgFlash = this.bgSel;
          }
          this.render();
        };
        this.button(ibar, "Import files\u2026", "file-plus", () => {
          const fileIn = document.body.createEl("input", { type: "file", attr: { multiple: "", accept: ".json,.frag,.glsl,.txt,.mp4,.webm,.mov,.m4v" } });
          fileIn.style.display = "none";
          fileIn.onchange = async () => {
            const files = Array.from(fileIn.files || []);
            fileIn.remove();
            await runImport(files);
          };
          fileIn.click();
        });
        const drop = imp.createDiv({ cls: "evs-drop", text: "\u2026or drop videos and shader files here" });
        drop.ondragover = (e) => {
          e.preventDefault();
          drop.addClass("is-over");
        };
        drop.ondragleave = () => drop.removeClass("is-over");
        drop.ondrop = async (e) => {
          e.preventDefault();
          drop.removeClass("is-over");
          await runImport(Array.from(e.dataTransfer?.files || []));
        };
        const lib = this.section(body, "Library");
        const search = lib.createEl("input", { type: "search", cls: "evs-search", attr: { placeholder: "Search backgrounds\u2026" } });
        search.value = this.bgFilter || "";
        const favRow = lib.createDiv({ cls: "evs-row" });
        favRow.createSpan({ text: "Favorites only" });
        const favIn = favRow.createEl("input", { type: "checkbox" });
        favIn.checked = !!this.bgFav;
        const kinds = lib.createDiv({ cls: "evs-dc-chips" });
        const kindChip = () => {
          kinds.empty();
          const all = bgm.all();
          for (const [k, label] of [["all", `All ${all.length}`], ["shader", `Shaders ${all.filter((d) => d.kind !== "video").length}`], ["video", `Videos ${all.filter((d) => d.kind === "video").length}`]]) {
            kinds.createSpan({ cls: "evs-dc-chip" + ((this.bgKind || "all") === k ? " is-active" : ""), text: label }).onclick = () => {
              this.bgKind = k;
              kindChip();
              draw();
            };
          }
        };
        kindChip();
        const grid = lib.createDiv({ cls: "evs-grid" });
        const draw = () => {
          grid.empty();
          const q = (this.bgFilter || "").toLowerCase();
          const kind = this.bgKind || "all";
          const all = bgm.all();
          const list = all.filter((d) => (!q || d.name.toLowerCase().includes(q)) && (!this.bgFav || d.favorite) && (kind === "all" || (kind === "video" ? d.kind === "video" : d.kind !== "video")));
          const order = (d) => d.added || all.indexOf(d);
          list.sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0) || order(b) - order(a));
          for (const d of list) {
            const c = grid.createDiv({ cls: "evs-bgcard" + (d.id === this.bgSel ? " is-active" : "") });
            if (d.thumb) c.style.backgroundImage = `url("${d.thumb}")`;
            else c.style.background = `linear-gradient(135deg, ${d.params?.colorA || "#333"}, ${d.params?.colorB || "#000"})`;
            const tags = c.createDiv({ cls: "evs-bgcard-tags" });
            if (d.kind === "video") tags.createSpan({ text: "video" });
            if (d.builtIn) tags.createSpan({ text: "built-in" });
            for (const [where, id] of [["vault", fx.vault.on && fx.vault.id], ["banners", s.banner.id], ["graph", fx.graph.on && fx.graph.id]]) if (id === d.id) tags.createSpan({ text: where });
            if (d.error) tags.createSpan({ text: "error" });
            const star = c.createDiv({ cls: "evs-bgcard-star" + (d.favorite ? " is-on" : "") });
            setIcon2(star, "heart");
            star.onclick = (e) => {
              e.stopPropagation();
              if (d.builtIn) return new Notice2("Built-in backgrounds can't be favorited; duplicate it first");
              d.favorite = !d.favorite;
              p.saveSoon();
              draw();
            };
            c.createDiv({ cls: "evs-bgcard-name", text: d.name });
            if (d.id === this.bgFlash) {
              c.addClass("is-flash");
              this.bgFlash = null;
              setTimeout(() => c.scrollIntoView({ behavior: "smooth", block: "center" }), 150);
            }
            c.onclick = () => {
              this.bgSel = d.id;
              this.render();
            };
          }
          if (!list.length) grid.createDiv({ cls: "evs-hint", text: "Nothing matches." });
        };
        search.oninput = () => {
          this.bgFilter = search.value;
          draw();
        };
        favIn.onchange = () => {
          this.bgFav = favIn.checked;
          draw();
        };
        draw();
        bgm.fillMissingThumbs().then((changed) => {
          if (!changed) return;
          p.saveSoon();
          draw();
        });
        if (selected) this.bgEditor(body, selected);
        const place = this.section(body, "Where backgrounds show");
        this.toggle(place, "Behind the whole vault", () => fx.vault.on, (x, v) => x.fx.vault.on = v);
        this.range(place, "Vault: strength", 0.1, 1, 0.05, () => fx.vault.opacity, (x, v) => x.fx.vault.opacity = v);
        this.range(place, "Vault: dim", 0, 0.9, 0.05, () => fx.vault.dim, (x, v) => x.fx.vault.dim = v);
        this.range(place, "Vault: blur", 0, 20, 1, () => fx.vault.blur, (x, v) => x.fx.vault.blur = v);
        this.range(place, "Panels see-through", 0.3, 1, 0.02, () => fx.vault.see, (x, v) => x.fx.vault.see = v);
        this.toggle(place, "Project banners", () => s.banner.on, (x, v) => x.banner.on = v, { notes: true });
        this.range(place, "Banner height", 80, 260, 5, () => s.banner.height, (x, v) => x.banner.height = v, { notes: true });
        this.range(place, "Banner strength", 0.1, 1, 0.05, () => s.banner.opacity, (x, v) => x.banner.opacity = v, { notes: true });
        this.toggle(place, "Behind the neural graph", () => fx.graph.on, (x, v) => x.fx.graph.on = v);
        this.range(place, "Graph: strength", 0.1, 1, 0.05, () => fx.graph.opacity, (x, v) => x.fx.graph.opacity = v);
        const perf = this.section(body, "Performance", "Shaders use your graphics card. These keep it light while you game.");
        this.select(perf, "Frame rate", ["15", "24", "30", "60"], () => String(fx.fps), (x, v) => x.fx.fps = Number(v));
        this.select(perf, "Quality", ["0.5", "0.75", "1"], () => String(fx.quality), (x, v) => x.fx.quality = Number(v));
        this.toggle(perf, "Pause when Obsidian isn't focused", () => fx.pauseUnfocused, (x, v) => x.fx.pauseUnfocused = v);
        this.toggle(perf, "Lite mode (freeze all motion)", () => fx.lite, (x, v) => x.fx.lite = v);
      }
      // the selected background: live preview, Shader Studio's no-code controls, quick themes, where to use it
      bgEditor(body, d) {
        const p = this.plugin, s = p.settings, bgm = p.bgm;
        const ed = this.section(body, d.name, d.builtIn ? "Built-in. Duplicate it to change its settings." : d.kind === "video" ? "Looping video." : "Changes apply everywhere this background is used.");
        const prev = ed.createDiv({ cls: "evs-preview" });
        const m = bgm.mount(prev, d.id);
        if (m) this.mounts.push(m);
        if (m && m.layer && !m.layer.ok) ed.createDiv({ cls: "evs-error", text: m.layer.error || "This shader didn't compile." });
        const use = ed.createDiv({ cls: "evs-bar" });
        this.button(use, "Use behind vault", "monitor", () => p.change((x) => Object.assign(x.fx.vault, { id: d.id, on: true })));
        this.button(use, "Use for banners", "panel-top", () => p.change((x) => x.banner.id = d.id, { notes: true }));
        this.button(use, "Use behind graph", "sparkles", () => p.change((x) => Object.assign(x.fx.graph, { id: d.id, on: true })));
        const own = d.builtIn ? null : d;
        this.button(use, "Duplicate", "copy", () => {
          const copy = JSON.parse(JSON.stringify(d));
          Object.assign(copy, { id: "bg-" + Date.now().toString(36), name: d.name + " copy", builtIn: false, source: void 0 });
          s.bgLibrary.push(copy);
          this.bgSel = copy.id;
          p.saveSoon();
          this.render();
        });
        if (own) {
          this.button(use, "Rename", "pencil", () => new NameModal(this.app, "Rename background", (name) => {
            own.name = name;
            p.saveSoon();
            this.render();
          }).open());
          this.button(use, "Delete", "trash-2", () => {
            s.bgLibrary = s.bgLibrary.filter((x) => x !== own);
            p.saveSoon();
            this.render();
            p.applyTheme();
          });
        }
        if (d.kind !== "shader" || !own) return;
        const par = own.params || (own.params = {});
        const set = (fn) => p.change(() => fn(), { source: this, bgId: own.id });
        const sw = ed.createDiv({ cls: "evs-swatches" });
        for (const [name, a, b] of QUICK_THEMES) {
          const x = sw.createDiv({ cls: "evs-swatch", text: name });
          x.style.background = `linear-gradient(90deg, ${a}, ${b})`;
          x.onclick = () => {
            p.change(() => Object.assign(par, { colorA: a, colorB: b }), { bgId: own.id });
          };
        }
        const color = (label, key) => {
          const r = ed.createDiv({ cls: "evs-row" });
          r.createSpan({ text: label });
          const i = r.createEl("input", { type: "color" });
          i.value = par[key] || "#ffffff";
          i.oninput = () => set(() => par[key] = i.value);
        };
        const slider = (label, get, put, min, max, step) => {
          const r = ed.createDiv({ cls: "evs-row" });
          r.createSpan({ text: label });
          const val = r.createSpan({ cls: "evs-val", text: String(get()) });
          const i = r.createEl("input", { type: "range", attr: { min, max, step } });
          i.value = get();
          i.oninput = () => {
            val.setText(i.value);
            set(() => put(Number(i.value)));
          };
        };
        color("Color A", "colorA");
        color("Color B", "colorB");
        slider("Speed", () => par.speed ?? 1, (v) => par.speed = v, 0, 4, 0.05);
        slider("Glow", () => par.glow ?? 1, (v) => par.glow = v, 0, 4, 0.05);
        slider("Hue shift", () => par.hue ?? 0, (v) => par.hue = v, 0, 1, 0.01);
        slider("Zoom / scale", () => par.scale ?? 1, (v) => par.scale = v, 0.2, 4, 0.05);
        own.values = own.values || {};
        for (const c of own.controls || []) {
          if (c.type && c.type !== "slider") continue;
          slider(c.label || c.uniform, () => own.values[c.uniform] ?? c.default ?? 0, (v) => own.values[c.uniform] = v, c.min ?? 0, c.max ?? 1, c.step ?? 0.01);
        }
        if (own.original === void 0) own.original = JSON.stringify({ params: own.params, values: own.values });
        const rb = ed.createDiv({ cls: "evs-bar" });
        this.button(rb, "Reset to imported", "rotate-ccw", () => {
          const o = JSON.parse(own.original);
          own.params = o.params;
          own.values = o.values;
          p.change(() => {
          }, { bgId: own.id });
          this.render();
        });
      }
      // ---------- Projects tab ----------
      projects(body) {
        const p = this.plugin, s = p.settings;
        const bgOptions = [["default", "Default banner"], ["", "No animation"]].concat(p.bgm.all().map((d) => [d.id, d.name]));
        const list = this.section(body, "Your projects", "Color and icon show in the file list, mission control, banners, the status bar and the graph.");
        for (const f of p.store.folders()) {
          const st2 = p.projStyle(f);
          const row = list.createDiv({ cls: "evs-proj-style" });
          const ib = row.createEl("button", { cls: "evs-iconbtn", attr: { "aria-label": "Pick icon" } });
          setIcon2(ib, st2.icon);
          ib.style.color = st2.color;
          ib.onclick = () => new IconSuggest(this.app, (id) => {
            p.setProject(f.name, "icon", id);
            this.render();
          }).open();
          row.createSpan({ text: f.name });
          const ci = row.createEl("input", { type: "color" });
          ci.value = st2.color;
          ci.oninput = () => {
            ib.style.color = ci.value;
            p.setProject(f.name, "color", ci.value);
          };
          const bs = row.createEl("select", { cls: "dropdown", attr: { "aria-label": "Banner background" } });
          for (const [id, name] of bgOptions) bs.createEl("option", { text: name, value: id });
          bs.value = st2.bannerBg === void 0 ? "default" : st2.bannerBg;
          bs.onchange = () => p.setProject(f.name, "bannerBg", bs.value);
        }
        const pbar = list.createDiv({ cls: "evs-bar" });
        this.button(pbar, "Mission control", "layout-dashboard", () => p.openMission(), "mod-cta");
        this.toggle(list, "Colors and icons in the file list", () => s.projectColors, (x, v) => x.projectColors = v);
        this.toggle(list, "Graph branches in project colors", () => s.graph.byProject, (x, v) => x.graph.byProject = v);
        this.toggle(list, "Open mission control at startup", () => s.mission.onStartup, (x, v) => x.mission.onStartup = v);
        const st = this.section(body, "Status bar", "Bottom of the window: the project you're in. Click it to open the hub.");
        this.toggle(st, "Show it", () => s.status.on, (x, v) => x.status.on = v, { status: true });
        this.toggle(st, "Icon", () => s.status.icon, (x, v) => x.status.icon = v, { status: true });
        this.toggle(st, "Project name", () => s.status.name, (x, v) => x.status.name = v, { status: true });
        this.toggle(st, "Stage", () => s.status.stage, (x, v) => x.status.stage = v, { status: true });
        this.toggle(st, "Open tasks", () => s.status.tasks, (x, v) => x.status.tasks = v, { status: true });
        this.toggle(st, "Next step", () => s.status.next, (x, v) => x.status.next = v, { status: true });
        this.toggle(st, "Totals outside projects", () => s.status.outside, (x, v) => x.status.outside = v, { status: true });
        const notes = this.section(body, "Notes", "Drawn on top of your notes; the text itself never changes.");
        this.toggle(notes, "Banner on every project note", () => s.banner.allNotes, (x, v) => x.banner.allNotes = v, { notes: true });
        this.toggle(notes, "Summary and outline card", () => s.notes.summary, (x, v) => x.notes.summary = v, { notes: true });
        this.range(notes, "Card from (words)", 100, 2e3, 50, () => s.notes.summaryMin, (x, v) => x.notes.summaryMin = v, { notes: true });
        this.toggle(notes, "Feel tests: your words as bubbles", () => s.notes.bubbles, (x, v) => x.notes.bubbles = v, { notes: true });
        this.toggle(notes, "Decisions as a timeline", () => s.notes.timeline, (x, v) => x.notes.timeline = v, { notes: true });
        notes.createDiv({ cls: "evs-hint", text: "Bubbles and the timeline redraw fully the next time you open those notes." });
        const ai = this.section(body, "For Claude", "Short generated notes so each session reads less and decides better.");
        this.toggle(ai, "Project briefs + vault index", () => s.briefs.on, (x, v) => x.briefs.on = v);
        this.toggle(ai, "In-game notes go to Feel tests", () => s.playtest.on, (x, v) => x.playtest.on = v);
        const abar = ai.createDiv({ cls: "evs-bar" });
        this.button(abar, "Rebuild briefs now", "refresh-cw", async () => {
          await p.briefs.writeAll();
          new Notice2("Briefs and vault index updated");
        });
        this.button(abar, "Timeline", "calendar-range", () => p.openTimeline());
        ai.createDiv({ cls: "evs-hint", text: "Briefs: <project> - Brief.md in each project folder. Index: _techniques/Vault index.md. Both rewrite themselves when notes or Workshop change." });
      }
      graph(body) {
        const p = this.plugin, g = p.settings.graph, c = this.graphColors();
        const bar = body.createDiv({ cls: "evs-bar" });
        this.button(bar, "Open neural graph", "sparkles", () => p.openGraph(), "mod-cta");
        this.button(bar, "Undo realm", "undo-2", () => p.undoRealm());
        const realms = this.section(body, "Graph Realms", "Looks only: your real notes and links, arranged and lit another way. Click one and the graph morphs into it. Change anything below, then save it under My realms.");
        let group = null, rgrid = null;
        for (const r of REALMS2) {
          if (r.group !== group) {
            group = r.group;
            realms.createDiv({ cls: "evs-realm-group", text: group });
            rgrid = realms.createDiv({ cls: "evs-grid evs-shapes evs-realms" });
          }
          const b = rgrid.createDiv({ cls: "evs-shape evs-realm" + (g.realm === r.name ? " is-active" : ""), attr: { "aria-label": r.line } });
          thumb(b, r.shape, realmColors(r, p.settings));
          b.createDiv({ text: r.name });
          b.onclick = () => {
            p.setRealm(r);
            this.render();
          };
        }
        const sh = this.section(body, "Shape", "How your notes are arranged.");
        const grid = sh.createDiv({ cls: "evs-grid evs-shapes" });
        for (const [id, name] of SHAPES) {
          const b = grid.createDiv({ cls: "evs-shape" + (g.shape === id ? " is-active" : "") });
          thumb(b, id, c);
          b.createDiv({ text: name });
          b.onclick = () => p.change((s) => s.graph.shape = id);
        }
        const saved = this.section(body, "My realms", p.settings.shapes.length ? "Click to load. x deletes." : "Pick a realm or build your own below, then save it here.");
        const sg = saved.createDiv({ cls: "evs-bar" });
        for (const item of p.settings.shapes) {
          const b = this.button(sg, item.name, "shapes", () => {
            p.setRealm(savedAsRealm2(item));
            this.render();
          });
          const x = b.createSpan({ cls: "evs-card-del" });
          setIcon2(x, "x");
          x.style.position = "static";
          x.onclick = (e) => {
            e.stopPropagation();
            p.settings.shapes = p.settings.shapes.filter((s) => s !== item);
            p.saveSoon();
            this.render();
          };
        }
        this.button(sg, "Save as my realm", "bookmark-plus", () => new NameModal(this.app, "Save graph realm", (name) => {
          const shape = realmFromGraph2(g, name).set;
          p.settings.shapes = p.settings.shapes.filter((x) => x.name !== name).concat([{ name, shape }]);
          p.settings.graph.realm = name;
          p.saveSoon();
          this.render();
        }).open());
        const space = this.section(body, "3D", "Right-drag on the graph turns it any way: left and right swing it round, up and down tip it. Shift+right-drag spins it flat. Double-click puts it back.");
        this.range(space, "Depth", 0, 2, 0.05, () => g.depth, (s, v) => s.graph.depth = v);
        this.range(space, "Camera tilt (\xB0)", -90, 90, 1, () => g.pitch, (s, v) => s.graph.pitch = v);
        this.range(space, "Camera turn (\xB0)", -180, 180, 1, () => g.yaw, (s, v) => s.graph.yaw = v);
        this.range(space, "Turns by itself", -0.5, 0.5, 0.01, () => g.autoTurn, (s, v) => s.graph.autoTurn = v);
        this.range(space, "Spins by itself", -0.3, 0.3, 0.01, () => g.autoSpin, (s, v) => s.graph.autoSpin = v);
        this.select(space, "Helix strands", ["1", "2"], () => String(g.strands), (s, v) => s.graph.strands = Number(v));
        this.range(space, "Morph time (s)", 0, 4, 0.1, () => g.morph, (s, v) => s.graph.morph = v);
        const build = this.section(body, "Shape builder");
        this.range(build, "Fan width (\xB0)", 20, 340, 5, () => g.fan, (s, v) => s.graph.fan = v);
        this.range(build, "Tilt (\xB0)", -90, 90, 1, () => g.tilt, (s, v) => s.graph.tilt = v);
        this.range(build, "Curve", 0, 2.5, 0.05, () => g.bend, (s, v) => s.graph.bend = v);
        this.range(build, "Branch length", 0.4, 1.6, 0.05, () => g.length, (s, v) => s.graph.length = v);
        this.range(build, "Trunk height", 0, 2, 0.05, () => g.trunk, (s, v) => s.graph.trunk = v);
        this.range(build, "Root fan (\xB0)", 20, 260, 5, () => g.rootFan, (s, v) => s.graph.rootFan = v);
        this.range(build, "Leaf scatter", 0, 3, 0.05, () => g.scatter, (s, v) => s.graph.scatter = v);
        this.range(build, "Spiral twist", 0.5, 8, 0.1, () => g.twist, (s, v) => s.graph.twist = v);
        this.range(build, "Spread", 0.4, 1.6, 0.05, () => g.spread, (s, v) => s.graph.spread = v);
        this.range(build, "Foliage", 0, 3, 0.1, () => g.foliage, (s, v) => s.graph.foliage = v);
        this.select(build, "Node shape", ["circle", "star", "spark", "diamond", "square", "ring"], () => g.nodeShape, (s, v) => s.graph.nodeShape = v);
        this.range(build, "Node size", 1, 6, 0.1, () => g.nodeSize, (s, v) => s.graph.nodeSize = v);
        this.select(build, "Lines", ["curved", "straight", "dashed", "dotted"], () => g.lineStyle, (s, v) => s.graph.lineStyle = v);
        this.range(build, "Line thickness", 0.3, 3, 0.1, () => g.lineWidth, (s, v) => s.graph.lineWidth = v);
        const motion = this.section(body, "Motion");
        this.range(motion, "Overall speed", 0, 3, 0.1, () => g.speed, (s, v) => s.graph.speed = v);
        this.range(motion, "Sway", 0, 4, 0.1, () => g.sway, (s, v) => s.graph.sway = v);
        this.range(motion, "Sway speed", 0.1, 4, 0.1, () => g.swaySpeed, (s, v) => s.graph.swaySpeed = v);
        this.range(motion, "Twinkle", 0, 3, 0.1, () => g.twinkle, (s, v) => s.graph.twinkle = v);
        this.range(motion, "Breathing", 0, 3, 0.1, () => g.breathe, (s, v) => s.graph.breathe = v);
        this.range(motion, "Spin (orbit, galaxy)", -3, 3, 0.1, () => g.spin, (s, v) => s.graph.spin = v);
        this.toggle(motion, "Rings turn opposite ways", () => g.alternate, (s, v) => s.graph.alternate = v);
        this.range(motion, "Light pulses", 0, 30, 1, () => g.pulses, (s, v) => s.graph.pulses = v);
        this.range(motion, "Pulse speed", 0.1, 4, 0.1, () => g.pulseSpeed, (s, v) => s.graph.pulseSpeed = v);
        this.range(motion, "Fireflies", 0, 200, 5, () => g.fireflies, (s, v) => s.graph.fireflies = v);
        this.select(motion, "Firefly direction", ["up", "down", "out", "swirl", "drift"], () => g.flyDir, (s, v) => s.graph.flyDir = v, { rebuild: true });
        this.range(motion, "Firefly speed", 0.1, 4, 0.1, () => g.flySpeed, (s, v) => s.graph.flySpeed = v);
        const look = this.section(body, "Details");
        this.toggle(look, "Recent notes glow", () => g.recentGlow, (s, v) => s.graph.recentGlow = v, { rebuild: true });
        this.range(look, "Glow fades over (days)", 1, 30, 1, () => g.recentDays, (s, v) => s.graph.recentDays = v, { rebuild: true });
        this.toggle(look, "Labels", () => g.labels, (s, v) => s.graph.labels = v);
        this.toggle(look, "Frame", () => g.frame, (s, v) => s.graph.frame = v);
        this.toggle(look, "Bigger linked notes", () => g.sizeByLinks, (s, v) => s.graph.sizeByLinks = v);
        this.toggle(look, "Note links", () => g.showLinks, (s, v) => s.graph.showLinks = v);
        this.range(look, "Link brightness", 0.02, 0.6, 0.02, () => g.linkAlpha, (s, v) => s.graph.linkAlpha = v);
        const cols = this.section(body, "Graph colors");
        this.toggle(cols, "Branches in project colors", () => g.byProject, (s, v) => s.graph.byProject = v);
        this.toggle(cols, "Use theme colors", () => g.useTheme, (s, v) => s.graph.useTheme = v, { source: null });
        if (!g.useTheme) {
          this.color(cols, "Branches", () => g.branch, (s, v) => s.graph.branch = v, {});
          this.color(cols, "Leaves", () => g.leaf, (s, v) => s.graph.leaf = v, {});
          this.color(cols, "Roots", () => g.root, (s, v) => s.graph.root = v, {});
        }
        const what = this.section(body, "What's in it");
        this.toggle(what, "Include repo docs", () => g.includeRepo, (s, v) => s.graph.includeRepo = v, { rebuild: true });
        const row = what.createDiv({ cls: "evs-row" });
        row.createSpan({ text: "Root folders" });
        const input = row.createEl("input", { type: "text" });
        input.value = g.rootFolders;
        input.onchange = () => this.apply((s) => s.graph.rootFolders = input.value, { rebuild: true });
      }
      graphColors() {
        const s = this.plugin.settings, g = s.graph;
        return g.useTheme ? { branch: s.accent, leaf: s.accent2, root: mix2(s.accent, s.bg, 0.25), bg: s.bg, text: s.text } : { branch: g.branch, leaf: g.leaf, root: g.root, bg: s.bg, text: s.text };
      }
      openNote(path) {
        const f = this.app.vault.getAbstractFileByPath(path);
        if (f) this.app.workspace.getLeaf(false).openFile(f);
        else new Notice2(`Not found: ${path}`);
      }
      nav(body) {
        const vault = this.app.vault;
        const bar = body.createDiv({ cls: "evs-bar" });
        this.button(bar, "Home", "home", () => this.openNote("Home.md"));
        this.button(bar, "Inbox", "inbox", () => this.openNote("_inbox/Inbox.md"));
        this.button(bar, "Graph", "sparkles", () => this.plugin.openGraph());
        this.button(bar, "Copy note path", "clipboard-copy", () => {
          const f = this.app.workspace.getActiveFile();
          if (!f) return new Notice2("Open a note first");
          const base = vault.adapter.getBasePath ? vault.adapter.getBasePath() : "";
          navigator.clipboard.writeText((base ? base + "\\" : "") + f.path.replace(/\//g, "\\"));
          new Notice2("Path copied: paste it to Claude");
        });
        const sec = this.section(body, "Projects", "Stage and open tasks come from each project's Workshop.");
        const search = sec.createEl("input", { type: "search", cls: "evs-search", attr: { placeholder: "Filter projects\u2026" } });
        search.value = this.filter;
        const list = sec.createDiv();
        const draw = () => {
          list.empty();
          for (const section2 of this.plugin.types && this.plugin.types.folders() || ["Games", "Tools", "Archive"]) {
            const folder2 = vault.getAbstractFileByPath(section2);
            if (!folder2 || !folder2.children) continue;
            for (const proj of folder2.children.filter((f) => f.children).sort((a, b) => a.name.localeCompare(b.name))) {
              if (this.filter && !proj.name.toLowerCase().includes(this.filter.toLowerCase())) continue;
              const card = list.createDiv({ cls: "evs-proj" });
              const head = card.createDiv({ cls: "evs-proj-head" });
              head.createSpan({ cls: "evs-proj-name", text: proj.name });
              const meta = head.createSpan({ cls: "evs-proj-meta", text: section2 });
              const wsPath = `${proj.path}/Repo - Workshop/project.json`;
              if (vault.getAbstractFileByPath(wsPath)) {
                vault.adapter.read(wsPath).then((raw) => {
                  try {
                    const d = JSON.parse(raw);
                    const open = (d.tasks || []).filter((t) => t.status !== "done").length;
                    meta.setText(`${section2} \xB7 ${d.stage} \xB7 ${open} open task${open === 1 ? "" : "s"}`);
                  } catch (e) {
                  }
                });
              }
              const btns = card.createDiv({ cls: "evs-proj-btns" });
              for (const [label, file] of [["Hub", ""], ["Feel tests", " - Feel tests"], ["Decisions", " - Decisions"], ["Questions", " - Open questions"]]) {
                const path = `${proj.path}/${proj.name}${file}.md`;
                if (!vault.getAbstractFileByPath(path)) continue;
                const b = btns.createEl("button", { text: label });
                b.onclick = () => this.openNote(path);
              }
            }
          }
        };
        search.oninput = () => {
          this.filter = search.value;
          draw();
        };
        draw();
        const tech = this.section(body, "Shared notes");
        const folder = vault.getAbstractFileByPath("_techniques");
        const notes = [];
        const walk = (f) => f.children ? f.children.forEach(walk) : f.extension === "md" && notes.push(f);
        if (folder) walk(folder);
        const libs = String(this.plugin.settings.graph.libraries || "").split(",").map((x) => x.trim()).filter(Boolean);
        for (const l of libs) {
          const start = this.app.vault.getAbstractFileByPath(`${l}/00 Start Here.md`);
          if (!start) continue;
          const a = tech.createDiv({ cls: "evs-link", text: `${l.split("/").pop()} (library start)` });
          a.onclick = () => this.openNote(start.path);
        }
        const own = notes.filter((n) => !libs.some((l) => n.path.startsWith(l + "/")));
        for (const n of own.sort((a, b) => a.basename.localeCompare(b.basename))) {
          const a = tech.createDiv({ cls: "evs-link", text: n.basename });
          a.onclick = () => this.openNote(n.path);
        }
      }
      help(body) {
        const s = this.plugin.settings, c = this.graphColors();
        const head = fontFamily2(s.fontHead);
        const step = (parent, n, title, text) => {
          const row = parent.createDiv({ cls: "evs-step" });
          row.createDiv({ cls: "evs-step-n", text: String(n) });
          const t = row.createDiv();
          t.createDiv({ cls: "evs-step-title", text: title });
          if (text) t.createDiv({ cls: "evs-hint", text });
        };
        const pic = this.section(body, "Your vault in one picture");
        vaultDiagram(pic, c, head);
        pic.createDiv({ cls: "evs-hint", text: "Open it from the sparkles icon. Hover a dot to see the note, click to open it in a new tab, Ctrl+click to open it beside the graph." });
        const where = this.section(body, "Where things go");
        const table = where.createEl("table", { cls: "evs-table" });
        for (const [what, place] of [
          ["How it felt after playing (your words)", "<project> - Feel tests"],
          ["A choice we made, and why", "<project> - Decisions"],
          ["Something not decided yet", "<project> - Open questions"],
          ["A quick idea, no project yet", "_inbox / Inbox"],
          ["Something for several projects", "_techniques"],
          ["Tasks, stages, session log", "Workshop (not the vault)"]
        ]) {
          const tr = table.createEl("tr");
          tr.createEl("td", { text: what });
          tr.createEl("td", { text: place });
        }
        const look = this.section(body, "Change the look");
        step(look, 1, "Open this panel", "Sliders icon on the left ribbon, or Ctrl+P \u2192 EMX Vault Studio: Open control panel.");
        step(look, 2, "Looks tab \u2192 click a preset card", "It changes instantly. Not sure? Press Surprise me for a random matching palette.");
        step(look, 3, "Fine-tune", "Colors, glow, roundness, frames, stars and fonts, right under the cards.");
        step(look, 4, "Keep it", "Save look puts it under My looks. Undo steps back through your last 20 look changes.");
        step(look, 5, "Go further", "All settings + custom CSS: write any CSS; the --evs-* variables keep it matching.");
        const shapes = this.section(body, "Graph shapes");
        const grid = shapes.createDiv({ cls: "evs-grid evs-shapes" });
        for (const [id, name, text] of SHAPES) {
          const b = grid.createDiv({ cls: "evs-shape" });
          thumb(b, id, c);
          b.createDiv({ text: name });
          b.createDiv({ cls: "evs-hint", text });
        }
        const claude = this.section(body, "Working with Claude", "Say these in the Claude chat:");
        for (const [say, does] of [
          ["Brief me on <project>", "Reads the hub, Feel tests, Decisions and Open questions first."],
          ["It feels too floaty (any feedback)", "Saves your words to Feel tests by itself."],
          ["We don't need X", "Records it in Decisions and clears the open question."],
          ["Study this clip", "Pulls frames and writes timestamped reference notes."],
          ["Check the vault", "Finds broken links, missing notes and loose files, then fixes them."],
          ["Change the vault look to \u2026", "Edits this plugin's settings or adds custom CSS."]
        ]) {
          const row = claude.createDiv({ cls: "evs-say" });
          row.createDiv({ cls: "evs-say-q", text: `\u201C${say}\u201D` });
          row.createDiv({ cls: "evs-hint", text: does });
        }
        claude.createDiv({ cls: "evs-hint", text: "Tip: Navigate \u2192 Copy note path, then paste it to Claude to point at a note." });
        const glance = this.section(body, "See what's going on at a glance");
        step(glance, 1, "Mission control", "Dashboard icon on the ribbon, or the block at the top of Home: every project's stage, open tasks, next step, your latest feel-test quote, questions and decisions.");
        step(glance, 2, "Status bar", "Bottom right: the project you're in, its stage, open tasks and next step. Click it to open the hub. Projects tab chooses what it shows.");
        step(glance, 3, "Banners", "Each project note starts with a banner: stage, tasks, next step and buttons. New playtest adds a dated entry to Feel tests for you to fill in.");
        step(glance, 4, "Long notes", "A card at the top shows word count, reading time, a short summary and a clickable outline.");
        step(glance, 5, "Feel tests and Decisions", "Your words show as bubbles with fixed tags; decisions run down a timeline. The note text stays plain Markdown.");
        const cl = this.section(body, "Better Claude sessions");
        step(cl, 1, "Briefs", "Each project has <name> - Brief.md: now, rules, settled decisions, open questions, latest playtest, done means. Claude reads it first instead of five long notes.");
        step(cl, 2, "Ask Claude buttons", "On each hub banner: Brief me, Feel \u2192 tasks, Plan next, Hand off. They copy a short prompt; paste it into Claude.");
        step(cl, 3, "Hand off long chats", "When a chat gets long, press Hand off: Claude logs the session and gives you a prompt to start fresh from the brief.");
        step(cl, 4, "Timeline and live strip", "Calendar icon: every session, decision and playtest per day. Mission control's top strip shows what a running session just did.");
        step(cl, 5, "In-game notes", "In Freebuild RBX press N while playing, type, Enter: it lands in Feel tests in your words.");
        const fx = this.section(body, "Animated backgrounds");
        step(fx, 1, "Backgrounds tab \u2192 Import library", "Pulls every shader from your EMX Shader Studio library with its thumbnail and sliders. Import files\u2026 takes packs, .frag files and MP4s.");
        step(fx, 2, "Click a background", "A live preview with Shader Studio's controls: colors, quick themes, speed, glow, hue, zoom and the shader's own sliders.");
        step(fx, 3, "Choose where", "Behind the vault, on banners, behind the graph, or per project in the Projects tab. Strength, dim, blur and see-through panels are under Where backgrounds show.");
        step(fx, 4, "Keep it light", "30 fps, 75% quality and pause-when-unfocused are on by default. Lite mode freezes everything.");
        const shapes2 = this.section(body, "Build your own graph shape");
        shapes2.createDiv({ cls: "evs-hint", text: "Graph tab \u2192 Shape builder: fan width, tilt, curve, branch length, trunk height, root fan, leaf scatter, spiral twist, node shape and line style. Motion: sway, twinkle, breathing, spin, light pulses and firefly direction. Save this shape keeps it under My shapes." });
        const call = this.section(body, "Callouts you can type in notes");
        for (const [kind, what] of [["rule", "a rule for this game"], ["decision", "a choice and why"], ["bug", "something broken"], ["idea", "an idea"], ["yourwords", "a quote from you"], ["playtest", "a playtest note"], ["next", "what's next"]]) {
          const r = call.createDiv({ cls: "evs-say" });
          r.createDiv({ cls: "evs-say-q", text: `> [!${kind}] Title` });
          r.createDiv({ cls: "evs-hint", text: what });
        }
        const keys = this.section(body, "Commands (Ctrl+P, type EMX)");
        for (const k of ["Open mission control", "Open control panel", "Open neural graph", "New playtest entry for this project", "Undo last look change", "Surprise me (random look)", "Toggle EMX theme"]) keys.createDiv({ cls: "evs-kbd", text: k });
      }
    };
    var IconSuggest = class extends SuggestModal {
      constructor(app, onPick) {
        super(app);
        this.onPick = onPick;
        this.setPlaceholder("Search icons: gamepad, hammer, sword, rocket\u2026");
      }
      getSuggestions(q) {
        const all = getIconIds().map((id) => id.replace(/^lucide-/, ""));
        const query = q.toLowerCase().trim();
        return (query ? all.filter((id) => id.includes(query)) : all).slice(0, 120);
      }
      renderSuggestion(id, el) {
        el.addClass("evs-icon-row");
        setIcon2(el.createSpan(), id);
        el.createSpan({ text: id });
      }
      onChooseSuggestion(id) {
        this.onPick(id);
      }
    };
    module2.exports = { thumb, vaultDiagram, NameModal, ControlPanelView: ControlPanelView2, IconSuggest };
  }
});

// src/views/creator.js
var require_creator = __commonJS({
  "src/views/creator.js"(exports2, module2) {
    "use strict";
    var { Modal, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var { checkName, planCreate, planAdopt } = require_setup();
    var { slugify } = require_types();
    var { stamp } = require_util();
    var { IconSuggest } = require_panel();
    var STEPS = ["What", "Details", "Options", "Preview", "Create"];
    var KIND_ICON = { folder: "folder-plus", note: "file-plus", look: "palette", home: "home", workshop: "hammer", junction: "link", "repo-folders": "folder-tree", task: "list-plus", github: "github", brief: "file-text" };
    var ProjectCreator2 = class extends Modal {
      constructor(plugin, preset = {}) {
        super(plugin.app);
        this.plugin = plugin;
        this.s = Object.assign({ step: 0, mode: "create", typeId: null, category: null, name: "", description: "", color: "", icon: "", related: [], options: { workshop: true, github: false, tasks: [], open: true }, filter: "", cat: "all" }, preset);
        this.running = false;
      }
      get type() {
        return this.plugin.types.get(this.s.typeId);
      }
      async onOpen() {
        this.modalEl.addClass("evs-creator");
        await this.plugin.types.load();
        await this.plugin.store.all();
        this.unadopted = await this.findUnadopted();
        this.draw();
      }
      onClose() {
        this.contentEl.empty();
      }
      // Workshop projects with no vault folder (by where their Workshop state lives)
      async findUnadopted() {
        const fs = require("fs"), path = require("path");
        const reg = this.plugin.setup.registry().filter((e) => !e.archived);
        const home = this.plugin.setup.workshopHome();
        const linked = /* @__PURE__ */ new Set();
        for (const p of this.plugin.store.cache || []) {
          const d = this.plugin.workshop.repoDir(p);
          if (d) linked.add(path.resolve(d).toLowerCase());
        }
        const out = [];
        for (const e of reg) {
          const dir = path.resolve(home, e.path || `projects/${e.slug}`);
          if (linked.has(dir.toLowerCase()) || !fs.existsSync(path.join(dir, ".workshop"))) continue;
          let pj = {};
          try {
            pj = JSON.parse(fs.readFileSync(path.join(dir, ".workshop/project.json"), "utf8"));
          } catch (x) {
          }
          let readme = "";
          for (const f of ["README.md", "readme.md"]) if (fs.existsSync(path.join(dir, f))) readme = fs.readFileSync(path.join(dir, f), "utf8");
          const para = (readme.replace(/^---[\s\S]*?---/, "").split(/\n\s*\n/).map((x) => x.trim()).find((x) => x && !/^(#|!\[|<|```|\||-|\*)/.test(x)) || "").replace(/\s+/g, " ");
          const has = Object.fromEntries(["Docs", "docs", "Requirements"].map((d) => [d, fs.existsSync(path.join(dir, d)) && fs.statSync(path.join(dir, d)).isDirectory()]));
          out.push({ slug: e.slug, name: pj.name || e.name || e.slug, profile: pj.profile || e.type, stage: pj.stage, tasks: (pj.tasks || []).length, dir, has, description: para.slice(0, 400) });
        }
        return out;
      }
      draw() {
        const el = this.contentEl;
        el.empty();
        this.titleEl.setText(this.s.mode === "adopt-all" ? "Adopt Workshop projects" : this.s.mode === "adopt" ? `Adopt ${this.s.name}` : "New project");
        const steps = el.createDiv({ cls: "evs-cr-steps" });
        STEPS.forEach((label, i) => {
          if (this.s.mode !== "create" && i === 2) return;
          steps.createDiv({ cls: "evs-cr-step" + (i === this.s.step ? " is-on" : i < this.s.step ? " is-done" : ""), text: label });
        });
        const body = el.createDiv({ cls: "evs-cr-body" });
        const foot = el.createDiv({ cls: "evs-cr-foot" });
        [this.drawWhat, this.drawDetails, this.drawOptions, this.drawPreview, this.drawRun][this.s.step].call(this, body, foot);
      }
      go(step) {
        if (this.s.mode !== "create" && step === 2) step = this.s.step < 2 ? 3 : 1;
        this.s.step = step;
        this.draw();
      }
      footer(foot, { back = true, next = "Next", ok = true, onNext }) {
        if (back && this.s.step > 0) foot.createEl("button", { text: "Back" }).onclick = () => this.go(this.s.step - 1);
        foot.createDiv({ cls: "evs-cr-space" });
        const b = foot.createEl("button", { cls: "mod-cta", text: next });
        b.disabled = !ok;
        b.onclick = onNext || (() => this.go(this.s.step + 1));
        return b;
      }
      // ---- 1. what: a type, or a Workshop project to adopt ----
      drawWhat(body, foot) {
        const reg = this.plugin.types;
        const top = body.createDiv({ cls: "evs-cr-filter" });
        const search = top.createEl("input", { type: "search", attr: { placeholder: "Search kinds of project\u2026" } });
        search.value = this.s.filter;
        const chips = top.createDiv({ cls: "evs-dc-chips" });
        for (const c of [{ folder: "all", label: "All" }].concat(reg.categories)) {
          chips.createSpan({ cls: "evs-dc-chip" + (this.s.cat === c.folder ? " is-active" : ""), text: c.label }).onclick = () => {
            this.s.cat = c.folder;
            this.draw();
          };
        }
        const grid = body.createDiv({ cls: "evs-cr-types" });
        const draw = () => {
          grid.empty();
          const q = this.s.filter.toLowerCase();
          for (const t of reg.list()) {
            if (this.s.cat !== "all" && t.category !== this.s.cat) continue;
            if (q && !`${t.label} ${t.description || ""} ${t.category}`.toLowerCase().includes(q)) continue;
            const card = grid.createDiv({ cls: "evs-cr-type" + (this.s.typeId === t.id ? " is-on" : "") });
            card.style.setProperty("--p", t.color || "var(--evs-accent)");
            setIcon2(card.createDiv({ cls: "evs-cr-type-icon" }), t.icon || "box");
            card.createDiv({ cls: "evs-cr-type-name", text: t.label });
            card.createDiv({ cls: "evs-cr-type-desc", text: t.description || "" });
            card.createDiv({ cls: "evs-cr-type-chain", text: t.chain.slice(0, -1).map((id) => (reg.get(id) || { label: id }).label).reverse().join(" \u2190 ") || "starts from nothing" });
            card.onclick = () => {
              Object.assign(this.s, { mode: "create", typeId: t.id, category: t.category || "Tools" });
              this.s.options.workshop = !(t.workshop && t.workshop.create === false);
              this.s.options.github = !!(t.repo && t.repo.github && this.s.options.workshop);
              this.s.options.tasks = (t.tasks || []).map((x) => Object.assign({ on: true }, x));
              this.go(1);
            };
          }
          if (!grid.childElementCount) grid.createDiv({ cls: "evs-hint", text: "No kind of project matches. Make your own in Projects \u2192 Types." });
        };
        search.oninput = () => {
          this.s.filter = search.value;
          draw();
        };
        draw();
        if (this.unadopted.length) {
          const box = body.createDiv({ cls: "evs-cr-adopt" });
          const head = box.createDiv({ cls: "evs-rc-h" });
          setIcon2(head.createSpan(), "folder-input");
          head.createSpan({ text: `In Workshop, not in the vault yet (${this.unadopted.length})` });
          const all = head.createEl("button", { text: "Adopt all", cls: "evs-cr-adopt-all" });
          all.onclick = () => {
            this.s.mode = "adopt-all";
            this.go(3);
          };
          for (const u of this.unadopted) {
            const row = box.createDiv({ cls: "evs-cr-adopt-row" });
            row.createSpan({ cls: "evs-cr-adopt-name", text: u.name });
            row.createSpan({ cls: "evs-rc-dim", text: `${u.profile || "?"} \xB7 ${u.stage || "?"} \xB7 ${u.tasks} task${u.tasks === 1 ? "" : "s"}` });
            row.createEl("button", { text: "Adopt" }).onclick = () => {
              const typeId = this.plugin.types.typeOf({ profile: u.profile, section: null });
              const t = this.plugin.types.get(typeId);
              Object.assign(this.s, { mode: "adopt", adopt: u, typeId, category: t && t.category || "Tools", name: u.name, description: u.description });
              this.go(1);
            };
          }
        }
        this.footer(foot, { back: false, next: "Next", ok: !!this.s.typeId });
      }
      // ---- 2. details ----
      takenNames() {
        const folders = new Set((this.plugin.store.cache || []).map((p) => p.name.toLowerCase()));
        const slugs = new Set(this.s.mode === "create" ? this.plugin.setup.registry().map((e) => e.slug) : []);
        return { folders, slugs };
      }
      drawDetails(body, foot) {
        const t = this.type, reg = this.plugin.types;
        const card = body.createDiv({ cls: "evs-cr-picked" });
        card.style.setProperty("--p", this.s.color || t.color);
        setIcon2(card.createSpan({ cls: "evs-cr-type-icon" }), this.s.icon || t.icon || "box");
        card.createSpan({ text: `${t.label}${this.s.mode === "adopt" ? ` \xB7 adopting ${this.s.adopt.slug}` : ""}` });
        const typeSel = card.createEl("select", { cls: "dropdown" });
        for (const x of reg.list()) typeSel.createEl("option", { value: x.id, text: x.label });
        typeSel.value = t.id;
        typeSel.onchange = () => {
          this.s.typeId = typeSel.value;
          this.s.category = this.type.category || this.s.category;
          this.draw();
        };
        const form = body.createDiv({ cls: "evs-cr-form" });
        const field = (label, hint) => {
          const f = form.createDiv({ cls: "evs-cr-field" });
          f.createDiv({ cls: "evs-cr-label", text: label });
          if (hint) f.createDiv({ cls: "evs-cr-hint", text: hint });
          return f;
        };
        const nameF = field("Name", this.s.mode === "adopt" ? "The vault folder's name (the Workshop project keeps its own)." : "");
        const name = nameF.createEl("input", { type: "text", value: this.s.name, attr: { placeholder: "e.g. Sky Forge" } });
        const msg = nameF.createDiv({ cls: "evs-cr-msg" });
        const catF = field("Category", "The folder it lives in. Add categories in Projects \u2192 Categories.");
        const cat = catF.createEl("select", { cls: "dropdown" });
        for (const c of reg.categories) cat.createEl("option", { value: c.folder, text: c.label });
        cat.value = this.s.category;
        cat.onchange = () => this.s.category = cat.value;
        const descF = field("What it is", 'One paragraph. It goes under "What it is" in the hub, and into the brief Claude reads.');
        const desc = descF.createEl("textarea", { attr: { rows: 3 } });
        desc.value = this.s.description;
        desc.oninput = () => this.s.description = desc.value;
        const lookF = field("Look", "Color and icon on mission control, the file list, banners and the graph.");
        const row = lookF.createDiv({ cls: "evs-cr-row" });
        const color = row.createEl("input", { type: "color", value: this.s.color || t.color || "#e8b84a" });
        color.oninput = () => {
          this.s.color = color.value;
          card.style.setProperty("--p", color.value);
        };
        const iconBtn = row.createEl("button", { text: "Icon\u2026" });
        setIcon2(iconBtn.createSpan({ cls: "evs-cr-icon-prev" }), this.s.icon || t.icon || "box");
        iconBtn.onclick = () => new IconSuggest(this.app, (id) => {
          this.s.icon = id;
          this.draw();
        }).open();
        const others = (this.plugin.store.cache || []).filter((p) => p.section !== "Archive");
        if (others.length && this.s.mode === "create") {
          const relF = field("Related projects", "Linked from the hub; shown on the graph and dashboards.");
          const chips = relF.createDiv({ cls: "evs-dc-chips" });
          for (const p of others) {
            const link = `${p.path}/${p.name}`;
            const c = chips.createSpan({ cls: "evs-dc-chip" + (this.s.related.includes(link) ? " is-active" : ""), text: p.name });
            c.onclick = () => {
              this.s.related = this.s.related.includes(link) ? this.s.related.filter((x) => x !== link) : this.s.related.concat(link);
              c.toggleClass("is-active", this.s.related.includes(link));
            };
          }
        }
        const next = this.footer(foot, { next: "Next", ok: false });
        const check = () => {
          this.s.name = name.value.trim();
          const err = checkName(this.s.name, this.takenNames());
          const ws = this.s.mode === "create" && !(this.type.workshop && this.type.workshop.create === false);
          msg.setText(err || `Folder ${this.s.category}/${this.s.name}${ws ? ` \xB7 Workshop "${slugify(this.s.name)}"` : ""}`);
          msg.toggleClass("is-bad", !!err);
          next.disabled = !!err;
        };
        name.oninput = check;
        cat.addEventListener("change", check);
        check();
        setTimeout(() => name.focus(), 30);
      }
      // ---- 3. options ----
      drawOptions(body, foot) {
        const t = this.type, o = this.s.options;
        const form = body.createDiv({ cls: "evs-cr-form" });
        const toggle = (label, hint, key, disabled) => {
          const f = form.createDiv({ cls: "evs-cr-toggle" + (disabled ? " is-off" : "") });
          const cb = f.createEl("input", { type: "checkbox" });
          cb.checked = !!o[key] && !disabled;
          cb.disabled = !!disabled;
          const txt = f.createDiv();
          txt.createDiv({ cls: "evs-cr-label", text: label });
          txt.createDiv({ cls: "evs-cr-hint", text: hint });
          cb.onchange = () => {
            o[key] = cb.checked;
            if (key === "workshop" && !cb.checked) o.github = false;
            this.draw();
          };
        };
        const noWs = t.workshop && t.workshop.create === false;
        toggle("Workshop project", noWs ? "This kind of project doesn't use Workshop." : `A repo in C:\\EMX\\Workshop\\projects with tasks, stages and session logs (profile ${t.workshop && t.workshop.profile || "tool"}).`, "workshop", noWs);
        toggle("Private GitHub repo", "Created and pushed with your GitHub account (gh). Only you can see it.", "github", !o.workshop);
        toggle("Open its dashboard when it's ready", "", "open");
        if (o.workshop) {
          const tf = form.createDiv({ cls: "evs-cr-field" });
          tf.createDiv({ cls: "evs-cr-label", text: "First tasks" });
          for (const task of o.tasks) {
            const r = tf.createDiv({ cls: "evs-cr-toggle" });
            const cb = r.createEl("input", { type: "checkbox" });
            cb.checked = task.on !== false;
            cb.onchange = () => task.on = cb.checked;
            r.createDiv({ text: task.title });
          }
          const add = tf.createEl("input", { type: "text", attr: { placeholder: "Add a first task and press Enter" } });
          add.onkeydown = (e) => {
            if (e.key === "Enter" && add.value.trim()) {
              o.tasks.push({ title: add.value.trim(), on: true });
              this.draw();
            }
          };
        }
        const req = t.requires && t.requires.tools || [], apps = t.requires && t.requires.apps || [];
        if (req.length || apps.length) {
          const f = form.createDiv({ cls: "evs-cr-field" });
          f.createDiv({ cls: "evs-cr-label", text: "Needs" });
          const list = f.createDiv({ cls: "evs-cr-needs" });
          for (const tool of req) {
            const r = list.createDiv({ cls: "evs-cr-need", text: `${tool}: checking\u2026` });
            this.plugin.setup.exec("where", [tool], {}).then(() => {
              r.setText(`${tool}: found`);
              r.addClass("is-ok");
            }, () => {
              r.setText(`${tool}: not found on this PC (it'll still be set up; install it before you build)`);
              r.addClass("is-bad");
            });
          }
          for (const app of apps) list.createDiv({ cls: "evs-cr-need", text: `${app}: make sure it's installed` });
        }
        this.footer(foot, { next: "Preview" });
      }
      // ---- 4. preview ----
      plans() {
        const date = stamp().slice(0, 10), reg = this.plugin.types, home = this.plugin.setup.workshopHome();
        if (this.s.mode === "adopt-all") {
          return this.unadopted.map((u) => {
            const t2 = reg.get(reg.typeOf({ profile: u.profile, section: null }));
            const cat2 = reg.category(t2.category) || { folder: t2.category, label: t2.category };
            return Object.assign(planAdopt({ name: u.name, type: t2, category: cat2.folder, categoryLabel: cat2.label, repoDir: u.dir, has: u.has, description: u.description, date }), { title: `${u.name} (${t2.label})` });
          });
        }
        const t = this.type, cat = reg.category(this.s.category) || { folder: this.s.category, label: this.s.category };
        const common = { name: this.s.name, type: t, category: cat.folder, categoryLabel: cat.label, description: this.s.description, date, color: this.s.color, icon: this.s.icon };
        if (this.s.mode === "adopt") return [Object.assign(planAdopt(Object.assign(common, { repoDir: this.s.adopt.dir, has: this.s.adopt.has })), { title: this.s.name })];
        const tasks = this.s.options.tasks.filter((x) => x.on !== false);
        return [Object.assign(planCreate(Object.assign(common, { related: this.s.related, workshopHome: home, options: Object.assign({}, this.s.options, { tasks }) })), { title: this.s.name })];
      }
      drawPreview(body, foot) {
        this.planList = this.plans();
        body.createDiv({ cls: "evs-dc-note", text: "Nothing has happened yet. Steps marked \u21BA are taken back if Workshop fails; nothing that exists is overwritten." });
        for (const plan of this.planList) {
          if (this.planList.length > 1) body.createDiv({ cls: "evs-cr-plan-title", text: plan.title });
          const list = body.createDiv({ cls: "evs-cr-plan" });
          for (const s of plan.steps) {
            const row = list.createDiv({ cls: "evs-cr-plan-step" });
            setIcon2(row.createSpan({ cls: "evs-cr-plan-icon" }), KIND_ICON[s.kind] || "dot");
            row.createSpan({ text: s.label });
            if (s.undo) row.createSpan({ cls: "evs-cr-undo", text: "\u21BA", attr: { "aria-label": "Taken back if a later step fails before Workshop" } });
            if (s.kind === "workshop") this.dryRun(list, s);
          }
        }
        this.footer(foot, { next: this.s.mode === "create" ? "Create project" : this.planList.length > 1 ? `Adopt ${this.planList.length} projects` : "Adopt project", onNext: () => this.go(4) });
      }
      // Workshop says what it would make (new --dry-run): where, and each stage's checklist. Makes nothing
      async dryRun(list, s) {
        const box = list.createDiv({ cls: "evs-cr-dry evs-hint", text: "Asking Workshop what it would make\u2026" });
        try {
          const out = await this.plugin.setup.workshop(["new", s.args.name, "--type", s.args.profile, "--dry-run", "--json"]);
          const plan = JSON.parse(String(out).trim().split("\n").pop());
          box.empty();
          box.createDiv({ text: `Workshop will make ${plan.dir} with the ${plan.profile} profile. Checklists:` });
          for (const [stage, items] of Object.entries(plan.checklists || {})) box.createDiv({ text: `${stage}: ${items.map((i) => i.text).join(" \xB7 ")}` });
        } catch (e) {
          box.setText(`Workshop's preview: ${String(e.message).split("\n")[0]}`);
          box.addClass("is-warn");
        }
      }
      // ---- 5. run ----
      async drawRun(body, foot) {
        if (this.running) return;
        this.running = true;
        const results = [];
        for (const plan of this.planList) {
          if (this.planList.length > 1) body.createDiv({ cls: "evs-cr-plan-title", text: plan.title });
          const list = body.createDiv({ cls: "evs-cr-plan" });
          const rows = new Map(plan.steps.map((s) => {
            const row = list.createDiv({ cls: "evs-cr-plan-step is-waiting" });
            setIcon2(row.createSpan({ cls: "evs-cr-plan-icon" }), KIND_ICON[s.kind] || "dot");
            row.createSpan({ text: s.label });
            row.createSpan({ cls: "evs-cr-state" });
            return [s.id, row];
          }));
          const onStep = (s, state, detail) => {
            const row = rows.get(s.id);
            row.className = `evs-cr-plan-step is-${state}`;
            row.querySelector(".evs-cr-state").setText({ running: "\u2026", done: detail ? `\u2713 ${detail}` : "\u2713", failed: `\u2717 ${detail || ""}`, undone: "\u21BA taken back" }[state] || "");
          };
          let r = await this.plugin.setup.run(plan, { onStep });
          results.push({ plan, r, onStep });
        }
        this.running = false;
        this.plugin.types.invalidate();
        this.plugin.store.invalidate();
        const failed = results.filter((x) => !x.r.ok);
        const msg = body.createDiv({ cls: "evs-cr-result " + (failed.length ? "is-bad" : "is-ok") });
        if (!failed.length) msg.setText(this.planList.length > 1 ? `All ${this.planList.length} projects are in the vault.` : `${this.planList[0].title} is ready. It's on mission control, in recaps, the graph and the backup.`);
        else msg.setText(failed.map((x) => `${x.plan.title}: ${x.r.failed.error}${x.r.undone.length ? " (the vault side was taken back)" : x.r.external ? " (Workshop has the project: fix the cause and Retry)" : ""}`).join("\n"));
        foot.empty();
        if (failed.some((x) => x.r.external)) {
          foot.createEl("button", { text: "Retry" }).onclick = async () => {
            for (const x of failed.filter((y) => y.r.external)) x.r = await this.plugin.setup.run(x.plan, { onStep: x.onStep, from: x.r.failed.index });
            new Notice2(failed.every((x) => x.r.ok) ? "Done" : "Still failing: see the step");
          };
        }
        foot.createDiv({ cls: "evs-cr-space" });
        const ok = results.filter((x) => x.r.ok);
        if (ok.length === 1) {
          const plan = ok[0].plan, name = plan.vars.name;
          foot.createEl("button", { text: "Open hub" }).onclick = () => {
            this.close();
            this.plugin.openPath(`${plan.folder}/${name}.md`);
          };
          if (this.plugin.app.vault.getAbstractFileByPath(`${plan.vars.dashboardLink}.md`)) {
            const d = foot.createEl("button", { cls: "mod-cta", text: "Open dashboard" });
            d.onclick = () => {
              this.close();
              this.plugin.openPath(`${plan.vars.dashboardLink}.md`);
            };
            if (this.s.options.open && this.s.mode === "create" && !failed.length) setTimeout(() => d.click(), 900);
          }
        }
        foot.createEl("button", { text: "Close" }).onclick = () => this.close();
      }
    };
    module2.exports = { ProjectCreator: ProjectCreator2 };
  }
});

// src/data/assets.js
var require_assets = __commonJS({
  "src/data/assets.js"(exports2, module2) {
    "use strict";
    var SKIP_DIRS = /* @__PURE__ */ new Set(["node_modules", ".git", "build", "dist", "out", "Library", "Saved", "Intermediate", "DerivedDataCache", "Binaries", ".workshop", ".vite", ".cache", "renders"]);
    var MAX_FILES = 2e4;
    function extMap(kinds) {
      const m = /* @__PURE__ */ new Map();
      for (const [kind, exts] of Object.entries(kinds || {})) for (const e of [].concat(exts || [])) m.set(String(e).toLowerCase().replace(/^\./, ""), kind);
      return m;
    }
    function scan(dir, kinds, { fs = require("fs"), path = require("path"), limit = MAX_FILES } = {}) {
      const map = extMap(kinds);
      const out = { byKind: {}, files: [], scanned: 0, capped: false };
      if (!dir || !map.size || !fs.existsSync(dir)) return out;
      const stack = [[dir, 0]];
      while (stack.length) {
        const [d, depth] = stack.pop();
        let entries;
        try {
          entries = fs.readdirSync(d, { withFileTypes: true });
        } catch (e) {
          continue;
        }
        for (const e of entries) {
          if (out.scanned++ > limit) {
            out.capped = true;
            break;
          }
          const full = path.join(d, e.name);
          if (e.isDirectory()) {
            if (!SKIP_DIRS.has(e.name) && depth < 8 && !e.name.startsWith(".")) stack.push([full, depth + 1]);
            continue;
          }
          const kind = map.get(path.extname(e.name).slice(1).toLowerCase());
          if (!kind) continue;
          let st;
          try {
            st = fs.statSync(full);
          } catch (x) {
            continue;
          }
          out.byKind[kind] = (out.byKind[kind] || 0) + 1;
          out.files.push({ path: full, rel: path.relative(dir, full).replace(/\\/g, "/"), name: e.name, kind, size: st.size, mtime: st.mtimeMs });
        }
        if (out.capped) break;
      }
      out.files.sort((a, b) => b.mtime - a.mtime);
      return out;
    }
    var AssetIndex2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.cache = /* @__PURE__ */ new Map();
      }
      forProject(p) {
        const type = this.plugin.types.get(p.type);
        const kinds = type && type.assets && type.assets.kinds;
        const dir = this.plugin.workshop.repoDir(p);
        const key = `${dir}|${JSON.stringify(kinds)}`;
        const hit = this.cache.get(key);
        if (hit && Date.now() - hit.at < 12e4) return hit.value;
        const value = Object.assign(scan(dir, kinds), { dir, kinds: kinds || {}, license: type && type.assets && type.assets.license || "none" });
        this.cache.set(key, { at: Date.now(), value });
        return value;
      }
    };
    module2.exports = { AssetIndex: AssetIndex2, scan, extMap, SKIP_DIRS };
  }
});

// src/data/manage.js
var require_manage = __commonJS({
  "src/data/manage.js"(exports2, module2) {
    "use strict";
    var { stringifyYaml } = require("obsidian");
    var { checkName, homeWithLink, homeWithoutLink } = require_setup();
    var { slugify, NOTES } = require_types();
    var { section, bullets } = require_util();
    function homeLine(home, oldLink) {
      return String(home || "").split("\n").find((l) => l.startsWith("- ") && (l.includes(`[[${oldLink}|`) || l.includes(`[[${oldLink}]]`))) || null;
    }
    function withRelated(hub, link, name) {
      const line = `- Related: [[${link}|${name}]]`;
      if (String(hub).includes(`[[${link}|`) || String(hub).includes(`[[${link}]]`)) return null;
      const m = String(hub).match(/^## Notes\s*$/m);
      if (!m) return String(hub).replace(/\s*$/, "\n\n") + `## Notes

${line}
`;
      const start = m.index + m[0].length, next = String(hub).slice(start).search(/^## /m);
      const end = next === -1 ? hub.length : start + next;
      return hub.slice(0, end).replace(/\s*$/, "\n") + line + "\n" + (next === -1 ? "" : "\n" + hub.slice(end));
    }
    function typeFromProject(p, { hub = "", dashboardWidgets = [], style = {}, parent } = {}) {
      const name = p.name;
      const sub = (t) => String(t || "").split(name).join("{{name}}");
      const done = bullets(section(hub, "Done means")).map((x) => x.replace(/^\[[ x]\]\s*/, ""));
      const def = {
        id: slugify(`${name} type`),
        label: `${name} type`,
        extends: parent || p.type || "generic",
        description: `Made from ${name}: its notes, Done means and dashboard.`,
        icon: style.icon,
        color: style.color,
        version: 0,
        changelog: []
      };
      if (done.length) def.done = done;
      if (dashboardWidgets.length) def.dashboard = dashboardWidgets;
      if (hub) def.templates = { hub: sub(hub).replace(/^(workshop-project|created): .*$/gm, (m, k) => `${k}: ${k === "created" ? "{{date}}" : "{{slug}}"}`) };
      if (p.feedbackLabel && p.feedbackLabel !== "Feel tests") def.labels = { feedback: p.feedbackLabel };
      return def;
    }
    var ProjectManager2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
      }
      taken(except) {
        return { folders: new Set((this.plugin.store.cache || []).filter((p) => p !== except).map((p) => p.name.toLowerCase())), slugs: /* @__PURE__ */ new Set() };
      }
      async refresh() {
        this.plugin.types.invalidate();
        this.plugin.store.invalidate();
        await this.plugin.store.all();
        await this.plugin.briefs.writeAll();
      }
      async editHome(fn) {
        const f = this.app.vault.getAbstractFileByPath("Home.md");
        if (f) await this.app.vault.process(f, (t) => fn(t) ?? t);
      }
      label(folder) {
        const c = this.plugin.types.category(folder);
        return c && c.label || folder;
      }
      // moves (and renames) a project's folder and the notes named after it; links everywhere follow
      async move(p, { name = p.name, category = p.section } = {}) {
        const err = name !== p.name ? checkName(name, this.taken(p)) : null;
        if (err) throw new Error(err);
        const fm = this.app.fileManager, vault = this.app.vault;
        const from = p.path, to = `${category}/${name}`;
        if (from === to) return p;
        if (vault.getAbstractFileByPath(to)) throw new Error(`${to} already exists`);
        if (!vault.getAbstractFileByPath(category)) await vault.createFolder(category);
        await fm.renameFile(vault.getAbstractFileByPath(from), to);
        if (name !== p.name) {
          const folder = vault.getAbstractFileByPath(to);
          for (const f of (folder.children || []).filter((x) => x.extension === "md")) {
            if (f.basename === p.name || f.basename.startsWith(`${p.name} - `)) await fm.renameFile(f, `${to}/${name}${f.basename.slice(p.name.length)}.md`);
          }
          const own = this.plugin.settings.projects[p.name];
          if (own) {
            this.plugin.settings.projects[name] = own;
            delete this.plugin.settings.projects[p.name];
            await this.plugin.saveSettings();
          }
        }
        for (const f of vault.getMarkdownFiles().filter((x) => x.path.startsWith(to + "/") && !/\/Repo - /.test(x.path))) {
          const t = await vault.read(f);
          if (!t.includes("```emx-dashboard")) continue;
          const next = t.replace(/(```emx-dashboard\n(?:[^`]*\n)?)project: *(.+)\n/g, (m, head, old) => old.trim() === from ? `${head}project: ${to}
` : m);
          if (next !== t) await vault.modify(f, next);
        }
        const link = `${to}/${name}`;
        await this.editHome((text) => {
          const line = homeLine(text, link);
          if (!line) return null;
          const rest = text.split("\n").filter((l) => l !== line).join("\n");
          const without = homeWithoutLink(rest, { categoryLabel: this.label(p.section), line: "\0" });
          const next = line.replace(/\[\[[^\]|]+(\|[^\]]*)?\]\]/, `[[${link}|${name}]]`);
          return homeWithLink(without, { categoryLabel: this.label(category), link, line: next }) || without;
        });
        await this.refresh();
        return (this.plugin.store.cache || []).find((x) => x.path === to);
      }
      // the vault side first, then Workshop's registry (its slug and folder never change, so links keep working). If
      // Workshop can't be reached the vault change stands and a notice says so
      async workshopToo(p, args) {
        const w = this.plugin.workshop, dir = w && w.repoDir && w.repoDir(p);
        if (!dir) return null;
        const slug = String(dir).replace(/[\\/]+$/, "").split(/[\\/]/).pop();
        try {
          await w.run(p, args(slug));
          return true;
        } catch (e) {
          const { Notice: Notice2 } = require("obsidian");
          new Notice2(`Done in the vault. Workshop wasn't updated: ${e.message}`);
          return false;
        }
      }
      async rename(p, name) {
        name = String(name).trim();
        const moved = await this.move(p, { name });
        await this.workshopToo(moved || p, (slug) => ["rename", slug, name]);
        return moved;
      }
      async archive(p) {
        const moved = await this.move(p, { category: "Archive" });
        await this.workshopToo(moved || p, (slug) => ["archive", slug]);
        return moved;
      }
      // back to its type's category (or the one you pick)
      async restore(p, category) {
        const t = this.plugin.types.get(p.type);
        const moved = await this.move(p, { category: category || t && t.category || "Tools" });
        await this.workshopToo(moved || p, (slug) => ["unarchive", slug]);
        return moved;
      }
      async changeType(p, typeId) {
        const f = this.app.vault.getAbstractFileByPath(p.hub);
        if (!f) throw new Error("This project has no hub note");
        await this.app.fileManager.processFrontMatter(f, (fm) => {
          fm["emx-type"] = typeId;
        });
        await this.refresh();
      }
      // links two projects both ways from their hubs
      async relate(a, b) {
        for (const [x, y] of [[a, b], [b, a]]) {
          const f = this.app.vault.getAbstractFileByPath(x.hub);
          if (f) await this.app.vault.process(f, (t) => withRelated(t, `${y.path}/${y.name}`, y.name) ?? t);
        }
        await this.refresh();
      }
      // a new type from this project, saved through the type registry (a new version, with a changelog line)
      async saveAsType(p) {
        const hub = await this.plugin.store.read(p.hub) || "";
        const dash = await this.plugin.store.read(p.dashboard) || "";
        const block = dash.match(/```emx-dashboard\n([\s\S]*?)\n```/);
        let widgets = [];
        if (block) {
          const { parseBlock } = require_dashboard();
          widgets = parseBlock(block[1], require("obsidian").parseYaml).widgets.map((w) => w.widget);
        }
        const def = typeFromProject(p, { hub, dashboardWidgets: widgets, style: this.plugin.projStyle(p) });
        let id = def.id, n = 2;
        while (this.plugin.types.get(id)) id = `${def.id}-${n++}`;
        def.id = id;
        return this.plugin.types.save(def, `made from ${p.name}`);
      }
    };
    module2.exports = { ProjectManager: ProjectManager2, homeLine, withRelated, typeFromProject, NOTES, stringifyYaml };
  }
});

// src/views/blueprints.js
var require_blueprints = __commonJS({
  "src/views/blueprints.js"(exports2, module2) {
    "use strict";
    var { Modal, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var UpdatesModal = class extends Modal {
      constructor(plugin, pending, done) {
        super(plugin.app);
        Object.assign(this, { plugin, pending, done });
      }
      onOpen() {
        this.modalEl.addClass("evs-creator");
        this.titleEl.setText("Bring projects up to their type");
        const el = this.contentEl;
        el.createDiv({ cls: "evs-dc-note", text: "Only adds what's missing. Nothing you have is changed or removed. Untick a project to leave it as it is." });
        const picks = /* @__PURE__ */ new Map();
        const body = el.createDiv({ cls: "evs-cr-body" });
        for (const x of this.pending) {
          const box = body.createDiv({ cls: "evs-cr-plan" });
          const head = box.createEl("label", { cls: "evs-te-check evs-cr-plan-title" });
          const cb = head.createEl("input", { type: "checkbox" });
          cb.checked = true;
          picks.set(x, cb);
          head.createSpan({ text: `${x.p.name} (${x.type.label})` });
          for (const s of x.steps) {
            const r = box.createDiv({ cls: "evs-cr-plan-step" });
            setIcon2(r.createSpan({ cls: "evs-cr-plan-icon" }), s.kind === "note" ? "file-plus" : s.kind === "section" ? "list-plus" : "tag");
            r.createSpan({ text: s.kind === "note" ? `Add ${s.path.split("/").pop()}` : s.kind === "section" ? `Add "${s.heading}" to the hub` : `Mark it as ${x.type.label} version ${s.to}` });
          }
        }
        const foot = el.createDiv({ cls: "evs-cr-foot" });
        foot.createDiv({ cls: "evs-cr-space" });
        foot.createEl("button", { text: "Cancel" }).onclick = () => this.close();
        const go = foot.createEl("button", { cls: "mod-cta", text: "Apply" });
        go.onclick = async () => {
          go.disabled = true;
          const lines = [];
          for (const [x, cb] of picks) {
            if (!cb.checked) continue;
            try {
              const done = await this.plugin.blueprints.migrate(x.p, x.steps);
              lines.push(`${x.p.name}: ${done.join(", ") || "nothing needed"}`);
            } catch (e) {
              lines.push(`${x.p.name}: couldn't (${e.message})`);
            }
          }
          this.close();
          new Notice2(lines.join("\n") || "Nothing applied", 1e4);
          this.plugin.store.invalidate();
          this.done && this.done();
        };
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    var ImportModal = class extends Modal {
      constructor(plugin, text, done) {
        super(plugin.app);
        Object.assign(this, { plugin, text, done });
      }
      async onOpen() {
        this.modalEl.addClass("evs-creator");
        this.titleEl.setText("Import a blueprint");
        const el = this.contentEl;
        const { bp, plan } = this.plugin.blueprints.preview(this.text);
        if (plan.problems.length) {
          for (const p of plan.problems) el.createDiv({ cls: "evs-rc-bad", text: p });
          el.createDiv({ cls: "evs-cr-foot" }).createEl("button", { text: "Close" }).onclick = () => this.close();
          return;
        }
        el.createDiv({ cls: "evs-dc-dtitle", text: `${bp.name}${bp.version ? ` \xB7 version ${bp.version}` : ""}` });
        if (bp.exported) el.createDiv({ cls: "evs-rc-dim", text: `Exported ${bp.exported}` });
        el.createDiv({ cls: "evs-dc-note", text: "Nothing you have is overwritten: a type that's different from yours comes in under a new name; imported automations come in switched off." });
        const list = el.createDiv({ cls: "evs-cr-plan" });
        for (const s of plan.steps) {
          const r = list.createDiv({ cls: "evs-cr-plan-step" });
          setIcon2(r.createSpan({ cls: "evs-cr-plan-icon" }), s.kind === "type" ? "shapes" : "zap");
          r.createSpan({ text: `${s.kind === "type" ? "Type" : "Automation"} "${s.label}"` });
          r.createSpan({ cls: "evs-cr-state", text: s.action === "add" ? "new" : s.action === "same" ? "already here, same" : `renamed to ${s.newId}` });
        }
        const top = bp.types[bp.types.length - 1];
        const needs = el.createDiv({ cls: "evs-cr-needs" });
        const deps = await this.plugin.blueprints.deps(Object.assign({}, top, { chain: [] }));
        if (deps.length) needs.createDiv({ cls: "evs-cr-label", text: "It needs" });
        for (const d of deps) needs.createDiv({ cls: "evs-cr-need" + (d.ok === true ? " is-ok" : d.ok === false ? " is-bad" : ""), text: `${d.kind} ${d.name}: ${d.ok === true ? "found" : d.ok === false ? `missing (${d.hint})` : d.hint}` });
        const foot = el.createDiv({ cls: "evs-cr-foot" });
        foot.createDiv({ cls: "evs-cr-space" });
        foot.createEl("button", { text: "Cancel" }).onclick = () => this.close();
        const go = foot.createEl("button", { cls: "mod-cta", text: "Import" });
        go.disabled = !plan.steps.some((s) => s.action !== "same");
        go.onclick = async () => {
          go.disabled = true;
          try {
            const r = await this.plugin.blueprints.import(bp, plan);
            new Notice2(`Imported ${r.types.length} type${r.types.length === 1 ? "" : "s"}${r.automations.length ? ` and ${r.automations.length} automation${r.automations.length === 1 ? "" : "s"} (switched off)` : ""}`);
            this.close();
            this.done && this.done(r);
          } catch (e) {
            new Notice2(`Couldn't import: ${e.message}`, 8e3);
            go.disabled = false;
          }
        };
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    function pickBlueprint(plugin, done) {
      const input = document.body.createEl("input", { type: "file", attr: { accept: ".json" } });
      input.style.display = "none";
      input.onchange = async () => {
        const f = input.files && input.files[0];
        input.remove();
        if (f) new ImportModal(plugin, await f.text(), done).open();
      };
      input.click();
    }
    async function drawNeeds(plugin, el, type) {
      el.empty();
      const deps = await plugin.blueprints.deps(type);
      if (!deps.length) return el.createDiv({ cls: "evs-rc-dim", text: "Nothing special." });
      for (const d of deps) el.createDiv({ cls: "evs-cr-need" + (d.ok === true ? " is-ok" : d.ok === false ? " is-bad" : ""), text: `${d.ok === true ? "\u2713" : d.ok === false ? "\u2717" : "\u2022"} ${d.kind}: ${d.name}${d.ok === false ? ` (${d.hint})` : d.ok === null ? ` (${d.hint})` : ""}` });
    }
    module2.exports = { UpdatesModal, ImportModal, pickBlueprint, drawNeeds };
  }
});

// src/views/typeeditor.js
var require_typeeditor = __commonJS({
  "src/views/typeeditor.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2, setIcon: setIcon2, MarkdownRenderer, Component } = require("obsidian");
    var { validate, render: fill, NOTES } = require_types();
    var { WIDGETS } = require_dashboard();
    var { TextPrompt } = require_tasks();
    var { IconSuggest } = require_panel();
    var { ago } = require_util();
    var { pickBlueprint, drawNeeds } = require_blueprints();
    var CAPS = [["playtests", "Playtests (feel tests, the New playtest button)"], ["buildlog", "In-game notes and flagged builds from a build log"], ["releases", "Releases"]];
    var PLACEHOLDERS = ["name", "slug", "date", "type", "typeLabel", "category", "folder", "repoPath", "description", "done", "noteLinks", "widgets", "feedbackLabel", "dashboardLink"];
    var SAMPLE = { name: "Sky Forge", slug: "sky-forge", date: "2026-10-29", type: "my-type", typeLabel: "My type", category: "Games", folder: "Games/Sky Forge", repoPath: "C:\\EMX\\Workshop\\projects\\sky-forge", description: "A sky island crafting game.", done: "- Tests pass\n- Played with no errors", noteLinks: "- [[Sky Forge - Feel tests|Feel tests]]", widgets: "[stage, tasks]", feedbackLabel: "Feel tests", dashboardLink: "Games/Sky Forge/Sky Forge - Dashboard" };
    var TypeEditor = class {
      constructor(plugin, el, onChange) {
        Object.assign(this, { plugin, el, onChange });
        this.reg = plugin.types;
      }
      render() {
        const el = this.el;
        el.empty();
        const wrap = el.createDiv({ cls: "evs-te" });
        const left = wrap.createDiv({ cls: "evs-te-list" });
        this.right = wrap.createDiv({ cls: "evs-te-form" });
        const problems = [...this.reg.problems.entries()];
        if (problems.length) {
          const box = left.createDiv({ cls: "evs-te-problems" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "Types with problems" });
          for (const [file, ps] of problems) box.createDiv({ cls: "evs-rc-bad", text: `${String(file).split("/").pop()}: ${ps.map((p) => p.text).join("; ")}` });
        }
        const actions = left.createDiv({ cls: "evs-db-buttons" });
        actions.createEl("button", { cls: "mod-cta", text: "New type" }).onclick = () => this.edit({ id: "", label: "", extends: "generic", version: 0, changelog: [] }, true);
        actions.createEl("button", { text: "Import blueprint\u2026" }).onclick = () => pickBlueprint(this.plugin, async () => {
          await this.reg.load();
          this.onChange();
        });
        const used = {};
        for (const p of this.plugin.store.cache || []) used[p.type] = (used[p.type] || 0) + 1;
        const tree = (parent, depth) => {
          for (const t of this.reg.list({ hidden: true }).filter((x) => (x.extends || null) === parent)) {
            const r = left.createDiv({ cls: "evs-te-item" + (this.plugin.typeEditorSelect === t.id ? " is-active" : "") });
            r.style.paddingLeft = `${8 + depth * 14}px`;
            r.style.setProperty("--p", t.color || "var(--evs-accent)");
            setIcon2(r.createSpan({ cls: "evs-te-icon" }), t.icon || "box");
            r.createSpan({ text: t.label });
            if (used[t.id]) r.createSpan({ cls: "evs-rc-dim", text: ` ${used[t.id]}` });
            r.onclick = () => {
              this.plugin.typeEditorSelect = t.id;
              this.render();
            };
            tree(t.id, depth + 1);
          }
        };
        tree(null, 0);
        const sel = this.plugin.typeEditorSelect && this.reg.raw.get(this.plugin.typeEditorSelect);
        if (sel) this.edit(JSON.parse(JSON.stringify(sel)), false, used);
        else this.right.createDiv({ cls: "evs-hint", text: "Pick a type to change it, or make a new one. A type is everything a new project of that kind starts with." });
      }
      // the form for one type (a copy: nothing changes until Save)
      edit(d, isNew, used = {}) {
        const el = this.right;
        el.empty();
        const parent = d.extends ? this.reg.get(d.extends) : null;
        const inherited = (k) => parent ? parent[k] : void 0;
        const head = el.createDiv({ cls: "evs-te-head" });
        head.createDiv({ cls: "evs-dc-dtitle", text: isNew ? "New type" : d.label });
        if (!isNew) head.createDiv({ cls: "evs-rc-dim", text: `version ${d.version || 1}${used[d.id] ? ` \xB7 ${used[d.id]} project${used[d.id] === 1 ? "" : "s"}` : ""} \xB7 ${d.file || ""}` });
        const errors = head.createDiv({ cls: "evs-te-errors" });
        const form = el.createDiv({ cls: "evs-cr-form" });
        const field = (label, hint, inh) => {
          const f = form.createDiv({ cls: "evs-cr-field" });
          f.createDiv({ cls: "evs-cr-label", text: label });
          if (hint) f.createDiv({ cls: "evs-cr-hint", text: hint });
          if (inh !== void 0 && inh !== null && !(Array.isArray(inh) && !inh.length)) f.createDiv({ cls: "evs-te-inh", text: `From ${parent.label}: ${Array.isArray(inh) ? inh.map((x) => typeof x === "object" ? x.label || x.title || JSON.stringify(x) : x).join(", ") : typeof inh === "object" ? JSON.stringify(inh) : inh}` });
          return f;
        };
        const check = () => {
          const known = /* @__PURE__ */ new Set([...this.reg.types.keys()]);
          const issues = validate(Object.assign({}, d, { id: d.id || "x" }), known).concat(isNew && this.reg.raw.has(d.id) ? [{ level: "error", text: `A type with the id "${d.id}" exists` }] : []);
          if (d.extends && (d.extends === d.id || (this.reg.get(d.extends) || { chain: [] }).chain.includes(d.id))) issues.push({ level: "error", text: "It can't build on itself" });
          errors.empty();
          for (const i of issues) errors.createDiv({ cls: i.level === "error" ? "evs-rc-bad" : "evs-rc-dim", text: i.text });
          save.disabled = issues.some((i) => i.level === "error") || !d.label;
        };
        const text = (label, key, hint, place) => {
          const f = field(label, hint, d[key] === void 0 ? inherited(key) : void 0);
          const i = f.createEl("input", { type: "text", value: d[key] || "", attr: { placeholder: place || "" } });
          i.oninput = () => {
            d[key] = i.value || void 0;
            check();
          };
          return i;
        };
        const name = text("Name", "label", "What the Creator shows.", "e.g. Mobile game");
        if (isNew) {
          name.addEventListener("input", () => {
            d.id = name.value.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
            check();
          });
        }
        text("Description", "description", "One line under its name in the Creator.");
        const pf = field("Builds on", "Starts from everything this type has; change only what's different.");
        const ps = pf.createEl("select", { cls: "dropdown" });
        ps.createEl("option", { value: "", text: "(nothing: a type of its own)" });
        for (const t of this.reg.list({ hidden: true })) if (t.id !== d.id) ps.createEl("option", { value: t.id, text: t.label });
        ps.value = d.extends || "";
        ps.onchange = () => {
          d.extends = ps.value || void 0;
          this.edit(d, isNew, used);
        };
        const cf = field("Category", "Where new projects of this type go.", d.category ? void 0 : inherited("category"));
        const cs = cf.createEl("select", { cls: "dropdown" });
        cs.createEl("option", { value: "", text: "(from what it builds on)" });
        for (const c of this.reg.categories) cs.createEl("option", { value: c.folder, text: c.label });
        cs.value = d.category || "";
        cs.onchange = () => d.category = cs.value || void 0;
        const lf = field("Look", "", d.icon || d.color ? void 0 : [inherited("icon"), inherited("color")].filter(Boolean));
        const lr = lf.createDiv({ cls: "evs-cr-row" });
        const color = lr.createEl("input", { type: "color", value: d.color || inherited("color") || "#e8b84a" });
        color.oninput = () => d.color = color.value;
        const ib = lr.createEl("button", { text: "Icon\u2026" });
        setIcon2(ib.createSpan({ cls: "evs-cr-icon-prev" }), d.icon || inherited("icon") || "box");
        ib.onclick = () => new IconSuggest(this.plugin.app, (id) => (d.icon = id, this.edit(d, isNew, used))).open();
        const wf = field("Workshop", "", d.workshop ? void 0 : inherited("workshop"));
        const ws = Object.assign({}, inherited("workshop") || {}, d.workshop || {});
        const wr = wf.createDiv({ cls: "evs-cr-row" });
        const wc = wr.createEl("input", { type: "checkbox" });
        wc.checked = ws.create !== false;
        wr.createSpan({ text: "Makes a Workshop project, profile" });
        const prof = wr.createEl("select", { cls: "dropdown" });
        for (const x of this.profiles()) prof.createEl("option", { value: x, text: x });
        prof.value = ws.profile || "tool";
        const setWs = () => d.workshop = { create: wc.checked, profile: prof.value };
        wc.onchange = setWs;
        prof.onchange = setWs;
        const rf = field("Repo", "", d.repo ? void 0 : inherited("repo"));
        const repo = Object.assign({}, inherited("repo") || {}, d.repo || {});
        const rr = rf.createDiv({ cls: "evs-cr-row" });
        const gh = rr.createEl("input", { type: "checkbox" });
        gh.checked = !!repo.github;
        rr.createSpan({ text: "Private GitHub repo ticked by default \xB7 folders:" });
        const folders = rr.createEl("input", { type: "text", value: (repo.folders || []).join(", "), attr: { placeholder: "src, tests, Art, Docs" } });
        const setRepo = () => d.repo = Object.assign({}, d.repo || {}, { github: gh.checked ? "private" : false, folders: folders.value.split(",").map((x) => x.trim()).filter(Boolean) });
        gh.onchange = setRepo;
        folders.oninput = setRepo;
        const nf = field("Notes it makes", "Each from its template below.", d.notes ? void 0 : inherited("notes"));
        const notes = new Set(d.notes || inherited("notes") || []);
        const nr = nf.createDiv({ cls: "evs-cr-row" });
        for (const [k, v] of Object.entries(NOTES)) {
          const lab = nr.createEl("label", { cls: "evs-te-check" });
          const cb = lab.createEl("input", { type: "checkbox" });
          cb.checked = notes.has(k);
          lab.createSpan({ text: v.label });
          cb.onchange = () => {
            cb.checked ? notes.add(k) : notes.delete(k);
            d.notes = Object.keys(NOTES).filter((x) => notes.has(x));
          };
        }
        const fl = field("Name of the feedback note", "Feel tests for games, Reviews for sites, Feedback\u2026 Existing notes keep their names.", (d.labels || {}).feedback ? void 0 : (inherited("labels") || {}).feedback);
        const fi = fl.createEl("input", { type: "text", value: (d.labels || {}).feedback || "" });
        fi.oninput = () => d.labels = Object.assign({}, d.labels, { feedback: fi.value || void 0 });
        this.list(field("Done means", "Checked before any task is called done; goes into every hub.", d.done ? void 0 : inherited("done")), d, "done", "e.g. Tests pass");
        this.widgets(field("Dashboard", "The widgets a new project's dashboard starts with.", d.dashboard ? void 0 : inherited("dashboard")), d);
        this.rows(field("Tools", "Buttons on the dashboard. Run: a command in the repo. Open: a file in the repo. Link: a web address. {{slug}} and {{name}} work.", d.tools ? void 0 : inherited("tools")), d, "tools", [["label", "Label"], ["run", "Run (command)"], ["open", "Open (file)"], ["url", "Link"]]);
        this.rows(field("First tasks", "Offered (ticked) in the Creator.", d.tasks ? void 0 : inherited("tasks")), d, "tasks", [["title", "Task"], ["accept", "Done looks like"]]);
        const capf = field("Can do", "", d.capabilities ? void 0 : inherited("capabilities"));
        const caps = new Set(d.capabilities || inherited("capabilities") || []);
        for (const [k, label] of CAPS) {
          const lab = capf.createEl("label", { cls: "evs-te-check" });
          const cb = lab.createEl("input", { type: "checkbox" });
          cb.checked = caps.has(k);
          lab.createSpan({ text: label });
          cb.onchange = () => {
            cb.checked ? caps.add(k) : caps.delete(k);
            d.capabilities = [...caps];
          };
        }
        const claude = Object.assign({}, inherited("claude") || {}, d.claude || {});
        const cl = field("Claude", "Skills Claude should use for this kind of project.", d.claude ? void 0 : inherited("claude") && (inherited("claude").skills || []).join(", "));
        const ci = cl.createEl("input", { type: "text", value: (claude.skills || []).join(", "), attr: { placeholder: "roblox-dev-skill, hyperframes\u2026" } });
        ci.oninput = () => d.claude = Object.assign({}, d.claude, { skills: ci.value.split(",").map((x) => x.trim()).filter(Boolean) });
        this.assets(field("Assets", "File kinds the asset widget and library look for, and whether a license is needed.", d.assets ? void 0 : inherited("assets") && Object.keys(inherited("assets").kinds || {}).join(", ")), d, inherited("assets"));
        const req = Object.assign({ tools: [], apps: [] }, inherited("requires") || {}, d.requires || {});
        const rqf = field("Needs on this PC", "Checked in the Creator (tools on PATH) or listed as a reminder (apps).");
        const rq = rqf.createDiv({ cls: "evs-cr-row" });
        const rt = rq.createEl("input", { type: "text", value: (req.tools || []).join(", "), attr: { placeholder: "Tools: rojo, node, ffmpeg" } });
        const ra = rq.createEl("input", { type: "text", value: (req.apps || []).join(", "), attr: { placeholder: "Apps: Roblox Studio" } });
        const setReq = () => d.requires = { tools: rt.value.split(",").map((x) => x.trim()).filter(Boolean), apps: ra.value.split(",").map((x) => x.trim()).filter(Boolean) };
        rt.oninput = setReq;
        ra.oninput = setReq;
        if (!isNew) {
          const nf2 = field("Checked on this PC", "Tools, Claude skills and the Workshop profile this type uses.");
          drawNeeds(this.plugin, nf2.createDiv({ cls: "evs-cr-needs" }), this.reg.get(d.id));
        }
        this.templates(form, d, parent);
        const foot = el.createDiv({ cls: "evs-cr-foot evs-te-foot" });
        if (!isNew) {
          foot.createEl("button", { text: "History" }).onclick = () => this.history(d);
          foot.createEl("button", { text: "Export blueprint" }).onclick = async () => {
            try {
              const r = await this.plugin.blueprints.export(d.id);
              new Notice2(`Saved ${r.path} (${r.bp.types.length} type${r.bp.types.length === 1 ? "" : "s"}, ${r.bp.automations.length} automation${r.bp.automations.length === 1 ? "" : "s"})`, 8e3);
              require("electron").shell.showItemInFolder(r.full);
            } catch (e) {
              new Notice2(`Couldn't export: ${e.message}`);
            }
          };
          const del = foot.createEl("button", { text: "Delete type" });
          const kids = this.reg.list({ hidden: true }).filter((t) => t.extends === d.id);
          del.disabled = !!used[d.id] || !!kids.length;
          del.setAttr("aria-label", used[d.id] ? "Projects use it: change their type first" : kids.length ? "Other types build on it" : "Moves its note to the trash");
          del.onclick = async () => {
            if (del.dataset.sure !== "1") {
              del.dataset.sure = "1";
              del.setText("Click again to delete");
              return;
            }
            const f = this.plugin.app.vault.getAbstractFileByPath(d.file);
            if (f) await this.plugin.app.vault.trash(f, true);
            this.reg.invalidate();
            await this.reg.load();
            this.plugin.typeEditorSelect = null;
            new Notice2(`${d.label} deleted (its note is in the trash)`);
            this.onChange();
          };
          foot.createEl("button", { text: "Duplicate" }).onclick = () => this.edit(Object.assign(JSON.parse(JSON.stringify(d)), { id: `${d.id}-copy`, label: `${d.label} copy`, version: 0, changelog: [], file: void 0 }), true, used);
        }
        foot.createDiv({ cls: "evs-cr-space" });
        const save = foot.createEl("button", { cls: "mod-cta", text: isNew ? "Create type" : "Save as new version" });
        save.onclick = () => new TextPrompt(this.plugin.app, { title: isNew ? "Create type" : `Save ${d.label}`, label: "What changed (kept in its changelog)", button: "Save", optional: true }, async (note) => {
          const clean = JSON.parse(JSON.stringify(d));
          delete clean.file;
          for (const k of Object.keys(clean)) if (clean[k] === void 0 || clean[k] === "") delete clean[k];
          const saved = await this.reg.save(Object.assign(clean, { file: d.file }), note || (isNew ? "created" : "edited"));
          this.plugin.typeEditorSelect = saved.id;
          this.plugin.store.invalidate();
          new Notice2(`${saved.label} saved (version ${saved.version})`);
          this.onChange();
        }).open();
        check();
      }
      profiles() {
        try {
          const fs = require("fs"), path = require("path");
          return fs.readdirSync(path.join(this.plugin.setup.workshopHome(), "profiles")).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5)).sort();
        } catch (e) {
          return ["tool", "roblox", "unreal", "web-game", "desktop-app", "video", "godot", "uefn"];
        }
      }
      // a list of words or lines, add / remove / move up
      list(f, d, key, placeholder) {
        const box = f.createDiv({ cls: "evs-te-rows" });
        const draw = () => {
          box.empty();
          (d[key] || []).forEach((v, i) => {
            const r = box.createDiv({ cls: "evs-cr-row" });
            const inp = r.createEl("input", { type: "text", value: v });
            inp.oninput = () => d[key][i] = inp.value;
            this.rowTools(r, d[key], i, draw);
          });
          box.createEl("button", { text: d[key] ? "+ Add" : "+ Add (replaces what it inherits)" }).onclick = () => {
            d[key] = (d[key] || []).concat("");
            draw();
            box.querySelectorAll("input")[d[key].length - 1]?.focus();
          };
        };
        draw();
      }
      // a list of small objects with named fields
      rows(f, d, key, cols) {
        const box = f.createDiv({ cls: "evs-te-rows" });
        const draw = () => {
          box.empty();
          (d[key] || []).forEach((obj, i) => {
            const r = box.createDiv({ cls: "evs-cr-row" });
            for (const [k, ph] of cols) {
              const inp = r.createEl("input", { type: "text", value: Array.isArray(obj[k]) ? obj[k].join("; ") : obj[k] || "", attr: { placeholder: ph } });
              inp.oninput = () => {
                obj[k] = inp.value || void 0;
              };
            }
            this.rowTools(r, d[key], i, draw);
          });
          box.createEl("button", { text: "+ Add" }).onclick = () => {
            d[key] = (d[key] || []).concat({});
            draw();
          };
        };
        draw();
      }
      rowTools(r, arr, i, draw) {
        const up = r.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Move up" } });
        setIcon2(up, "arrow-up");
        up.onclick = () => i > 0 && (arr.splice(i - 1, 0, arr.splice(i, 1)[0]), draw());
        const rm = r.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Remove" } });
        setIcon2(rm, "x");
        rm.onclick = () => (arr.splice(i, 1), draw());
      }
      widgets(f, d) {
        const box = f.createDiv({ cls: "evs-dc-chips" });
        const draw = () => {
          box.empty();
          const on = d.dashboard || [];
          for (const [id, w] of Object.entries(WIDGETS)) {
            const c = box.createSpan({ cls: "evs-dc-chip" + (on.includes(id) ? " is-active" : ""), text: w.label });
            c.onclick = () => {
              d.dashboard = on.includes(id) ? on.filter((x) => x !== id) : on.concat(id);
              draw();
            };
          }
        };
        draw();
      }
      assets(f, d, inh) {
        const a = JSON.parse(JSON.stringify(d.assets || inh || { kinds: {} }));
        const box = f.createDiv({ cls: "evs-te-rows" });
        const write = () => d.assets = { kinds: Object.fromEntries(rows.filter((r) => r.kind).map((r) => [r.kind, r.exts.split(",").map((x) => x.trim().replace(/^\./, "")).filter(Boolean)])), license: lic.value };
        const rows = Object.entries(a.kinds || {}).map(([kind, exts]) => ({ kind, exts: [].concat(exts).join(", ") }));
        const lic = f.createEl("select", { cls: "dropdown" });
        for (const [v, t] of [["none", "No license needed"], ["recommended", "License recommended"], ["required", "License required (published work)"]]) lic.createEl("option", { value: v, text: t });
        lic.value = a.license || "none";
        lic.onchange = write;
        const draw = () => {
          box.empty();
          rows.forEach((r, i) => {
            const row = box.createDiv({ cls: "evs-cr-row" });
            const k = row.createEl("input", { type: "text", value: r.kind, attr: { placeholder: "Kind (sound)" } });
            const e = row.createEl("input", { type: "text", value: r.exts, attr: { placeholder: "Extensions (wav, ogg)" } });
            k.oninput = () => (r.kind = k.value.trim(), write());
            e.oninput = () => (r.exts = e.value, write());
            this.rowTools(row, rows, i, () => (write(), draw()));
          });
          box.createEl("button", { text: "+ Kind" }).onclick = () => (rows.push({ kind: "", exts: "" }), draw());
        };
        draw();
      }
      templates(form, d, parent) {
        const sec = form.createDiv({ cls: "evs-cr-field" });
        sec.createDiv({ cls: "evs-cr-label", text: "Note templates" });
        sec.createDiv({ cls: "evs-cr-hint", text: "What each new note starts as. Click a placeholder to insert it. Leave one empty to use what it builds on." });
        const tabs = sec.createDiv({ cls: "evs-dc-chips" });
        const area = sec.createDiv({ cls: "evs-te-tpl" });
        const show = (key) => {
          tabs.querySelectorAll(".is-active").forEach((x) => x.removeClass("is-active"));
          tabs.querySelector(`[data-k="${key}"]`)?.addClass("is-active");
          area.empty();
          const own = (d.templates || {})[key];
          const from = parent && parent.templates && parent.templates[key];
          const ph = area.createDiv({ cls: "evs-dc-chips" });
          const ta = area.createEl("textarea", { cls: "evs-te-textarea", attr: { rows: 14, placeholder: from ? `Uses ${parent.label}'s template. Type here to make its own.` : "" } });
          ta.value = own || "";
          for (const p of PLACEHOLDERS) {
            ph.createSpan({ cls: "evs-dc-chip", text: `{{${p}}}` }).onclick = () => {
              const s = ta.selectionStart;
              ta.setRangeText(`{{${p}}}`, s, ta.selectionEnd, "end");
              ta.dispatchEvent(new Event("input"));
              ta.focus();
            };
          }
          const prev = area.createDiv({ cls: "evs-te-preview markdown-rendered" });
          const comp = new Component();
          comp.load();
          const draw = () => {
            prev.empty();
            MarkdownRenderer.render(this.plugin.app, fill(ta.value || from || "", SAMPLE).replace(/^---\n[\s\S]*?\n---\n/, ""), prev, "", comp);
          };
          ta.oninput = () => {
            d.templates = Object.assign({}, d.templates);
            if (ta.value.trim()) d.templates[key] = ta.value;
            else delete d.templates[key];
            clearTimeout(this.t);
            this.t = setTimeout(draw, 250);
          };
          draw();
        };
        for (const [k, v] of Object.entries(NOTES)) tabs.createSpan({ cls: "evs-dc-chip", text: v.label, attr: { "data-k": k } }).onclick = () => show(k);
        show("hub");
      }
      // earlier versions of the type's note from the vault backup, with restore
      async history(d) {
        const el = this.right;
        const box = el.createDiv({ cls: "evs-dc-sec" });
        box.createDiv({ cls: "evs-dc-sec-h", text: "Changelog" });
        for (const c of d.changelog || []) box.createDiv({ cls: "evs-rc-dim", text: c });
        box.createDiv({ cls: "evs-dc-sec-h", text: "Saved versions (vault backup)" });
        const list = await this.plugin.backup.history(d.file).catch(() => []);
        if (!list.length) box.createDiv({ cls: "evs-rc-dim", text: "No backed-up versions yet." });
        for (const v of list.slice(0, 20)) {
          const r = box.createDiv({ cls: "evs-cr-row" });
          r.createSpan({ cls: "evs-rc-when", text: `${new Date(v.at).toISOString().slice(0, 16).replace("T", " ")} \xB7 ${ago(v.at)}` });
          r.createEl("button", { text: "Restore this version" }).onclick = async () => {
            const text = await this.plugin.backup.version(v.hash, v.path);
            const f = this.plugin.app.vault.getAbstractFileByPath(d.file);
            if (f) await this.plugin.app.vault.modify(f, text);
            this.reg.invalidate();
            await this.reg.load();
            new Notice2(`${d.label} restored to ${new Date(v.at).toISOString().slice(0, 10)} (the version you had stays in the history)`);
            this.onChange();
          };
        }
        box.scrollIntoView({ behavior: "smooth" });
      }
    };
    module2.exports = { TypeEditor };
  }
});

// src/core/automations.js
var require_automations = __commonJS({
  "src/core/automations.js"(exports2, module2) {
    "use strict";
    var EVENTS = {
      schedule: { label: "On a schedule", icon: "clock", fields: ["time.weekday", "time.date"], params: { every: { kind: "choice", choices: ["hour", "day", "week"], default: "week" }, day: { kind: "choice", choices: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"], default: "mon" }, at: { kind: "text", default: "09:00" }, catchUp: { kind: "toggle", default: true } } },
      "vault-opened": { label: "When the vault opens (once a day)", icon: "door-open", fields: ["time.weekday"], params: {} },
      "note-created": { label: "When a note is created", icon: "file-plus", fields: ["note.path", "note.name", "note.folder", "project.name", "project.type", "project.category"], params: { folder: { kind: "text", default: "" } } },
      "playtest-added": { label: "When a playtest or feedback entry is added", icon: "gamepad-2", fields: ["project.name", "project.type", "project.category", "entry.title", "entry.quotes"], params: {} },
      "decision-added": { label: "When a decision is added", icon: "gavel", fields: ["project.name", "project.type", "entry.title"], params: {} },
      "task-status": { label: "When a task changes status", icon: "list-checks", fields: ["project.name", "project.type", "project.category", "task.id", "task.title", "task.kind", "task.from", "task.status"], params: { to: { kind: "choice", choices: ["any", "todo", "queued", "running", "review", "blocked", "done"], default: "review" } } },
      "checklist-complete": { label: "When a stage checklist is complete", icon: "check-check", fields: ["project.name", "project.type", "project.stage"], params: {} },
      "project-created": { label: "When a project is created or adopted", icon: "folder-plus", fields: ["project.name", "project.type", "project.category"], params: {} },
      "recap-written": { label: "When a recap note is written", icon: "chart-no-axes-column", fields: ["note.path", "project.name"], params: {} }
    };
    var OPS = { is: "is", "is-not": "is not", contains: "contains", "not-contains": "doesn't contain", "one-of": "is one of", empty: "is empty", "not-empty": "isn't empty" };
    var ACTIONS = {
      notify: { label: "Show a notice", icon: "bell", params: { message: { kind: "text", default: "{{project.name}}: {{event}}" } } },
      "create-note": { label: "Make a note", icon: "file-plus", params: { path: { kind: "text", default: "_inbox/{{date}} {{project.name}}.md" }, content: { kind: "longtext", default: "# {{project.name}}\n\n" }, open: { kind: "toggle", default: false } } },
      "append-note": { label: "Add text to a note", icon: "file-input", params: { path: { kind: "text", default: "_inbox/Inbox.md" }, text: { kind: "longtext", default: "- {{date}} {{project.name}}: {{entry.title}}" } } },
      "add-task": { label: "Add a Workshop task", icon: "list-plus", params: { title: { kind: "text", default: "Follow up: {{entry.title}}" }, details: { kind: "text", default: "" }, kind: { kind: "choice", choices: ["feature", "bug", "asset", "polish", "ship", "custom"], default: "custom" } } },
      "task-note": { label: "Add a note to the task", icon: "message-square-plus", params: { text: { kind: "text", default: "{{event}}" } } },
      "open-view": { label: "Open a view", icon: "panel-top-open", params: { view: { kind: "choice", choices: ["mission", "recap", "tasks", "decisions", "projects", "graph", "timeline", "note"], default: "recap" }, note: { kind: "text", default: "" } } },
      "copy-prompt": { label: "Copy a prompt for Claude", icon: "clipboard-copy", params: { text: { kind: "longtext", default: "Read {{project.brief}} and \u2026" } } },
      "run-tool": { label: "Run one of the project's tools", icon: "hammer", params: { tool: { kind: "text", default: "Test" } } },
      "write-recaps": { label: "Write the recap notes", icon: "chart-no-axes-column", params: {} },
      "rebuild-briefs": { label: "Rebuild briefs and the vault index", icon: "file-text", params: {} },
      "backup-now": { label: "Back up the vault now", icon: "cloud", params: {} },
      "ask-claude": { label: "Ask Claude (writes its answer into a note)", icon: "bot", params: { prompt: { kind: "longtext", default: "Read _techniques/Workshop recaps and the project briefs, then write this week's priorities." }, path: { kind: "text", default: "_inbox/Claude {{date}}.md" } } }
    };
    var NEEDS_PROJECT = /* @__PURE__ */ new Set(["add-task", "run-tool"]);
    var NEEDS_TASK = /* @__PURE__ */ new Set(["task-note"]);
    var DAYS = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    function get(ctx, path) {
      return String(path).split(".").reduce((o, k) => o == null ? void 0 : o[k], ctx);
    }
    function fill(text, ctx) {
      return String(text == null ? "" : text).replace(/\{\{\s*([a-zA-Z][\w.]*)\s*\}\}/g, (m, k) => {
        const v = get(ctx, k);
        return v == null ? "" : Array.isArray(v) ? v.join("; ") : String(v);
      });
    }
    function test(cond, ctx) {
      const raw = get(ctx, cond.field);
      const v = Array.isArray(raw) ? raw.join(" ").toLowerCase() : String(raw == null ? "" : raw).toLowerCase();
      const want = String(cond.value == null ? "" : cond.value).toLowerCase().trim();
      switch (cond.op) {
        case "is":
          return v === want;
        case "is-not":
          return v !== want;
        case "contains":
          return v.includes(want);
        case "not-contains":
          return !v.includes(want);
        case "one-of":
          return want.split(",").map((x) => x.trim()).filter(Boolean).includes(v);
        case "empty":
          return !v;
        case "not-empty":
          return !!v;
        default:
          return false;
      }
    }
    function inScope(rule, project) {
      const s = rule.scope || {};
      const lists = ["types", "categories", "projects"].filter((k) => (s[k] || []).length);
      if (!lists.length) return true;
      if (!project) return false;
      return (s.types || []).includes(project.type) || (s.categories || []).includes(project.category) || (s.projects || []).includes(project.path);
    }
    function matches(rule, event, ctx) {
      if (!rule.on || !rule.when || rule.when.event !== event) return false;
      if (event === "task-status" && rule.when.to && rule.when.to !== "any" && get(ctx, "task.status") !== rule.when.to) return false;
      if (event === "note-created" && rule.when.folder && !String(get(ctx, "note.path") || "").startsWith(rule.when.folder.replace(/\/$/, "") + "/")) return false;
      if (!["schedule", "vault-opened"].includes(event) && !inScope(rule, ctx.project)) return false;
      return (rule.if || []).every((c) => test(c, ctx));
    }
    function check(rule) {
      const out = [];
      const err = (text) => out.push({ level: "error", text });
      if (!rule || typeof rule !== "object") return [{ level: "error", text: "Not a rule" }];
      if (!rule.name || !String(rule.name).trim()) err("Give it a name");
      const ev = rule.when && EVENTS[rule.when.event];
      if (!ev) err("Pick when it runs");
      if (!(rule.then || []).length) err("Add at least one action");
      for (const a of rule.then || []) {
        if (!ACTIONS[a.action]) err(`Unknown action "${a.action}"`);
        const noProject = ["schedule", "vault-opened"].includes(rule.when && rule.when.event);
        if (noProject && NEEDS_PROJECT.has(a.action)) err(`"${ACTIONS[a.action].label}" needs a project, and "${ev.label}" has none`);
        if (NEEDS_TASK.has(a.action) && !(rule.when && rule.when.event === "task-status")) err(`"${ACTIONS[a.action].label}" only works when a task changes status`);
        if (a.action === "create-note" && !/\.md$/.test(String(a.path || ""))) err("A note's path should end in .md");
      }
      for (const c of rule.if || []) if (!OPS[c.op]) err(`Unknown condition "${c.op}"`);
      if (rule.when && rule.when.event === "schedule" && !/^\d{1,2}:\d{2}$/.test(String(rule.when.at || "09:00"))) err("The time should look like 09:00");
      return out;
    }
    function sentence(rule, labels = {}) {
      const ev = rule.when && EVENTS[rule.when.event];
      if (!ev) return "Pick when it runs.";
      let when = ev.label;
      const w = rule.when;
      if (w.event === "schedule") when = w.every === "hour" ? "Every hour" : w.every === "day" ? `Every day at ${w.at || "09:00"}` : `Every ${{ mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" }[w.day || "mon"]} at ${w.at || "09:00"}`;
      if (w.event === "task-status" && w.to && w.to !== "any") when = `When a task moves to ${w.to}`;
      if (w.event === "note-created" && w.folder) when = `When a note is created in ${w.folder}`;
      const s = rule.scope || {};
      const scope = [].concat((s.types || []).map((x) => labels[x] || x), s.categories || [], (s.projects || []).map((x) => x.split("/").pop()));
      const where = scope.length ? ` in ${scope.join(", ")}` : "";
      const conds = (rule.if || []).map((c) => `${c.field} ${OPS[c.op] || c.op}${["empty", "not-empty"].includes(c.op) ? "" : ` "${c.value}"`}`);
      const acts = (rule.then || []).map((a) => ACTIONS[a.action] ? ACTIONS[a.action].label.toLowerCase() : a.action);
      return `${when}${where}${conds.length ? `, if ${conds.join(" and ")}` : ""}: ${acts.join(", then ") || "\u2026"}.`;
    }
    function lastDue(when, now = Date.now()) {
      const [h, m] = String(when.at || "09:00").split(":").map((x) => +x || 0);
      const d = new Date(now);
      if (when.every === "hour") {
        d.setMinutes(m, 0, 0);
        if (d.getTime() > now) d.setHours(d.getHours() - 1);
        return d.getTime();
      }
      d.setHours(h, m, 0, 0);
      if (when.every === "day") {
        if (d.getTime() > now) d.setDate(d.getDate() - 1);
        return d.getTime();
      }
      const target = DAYS.indexOf(when.day || "mon");
      let back = (d.getDay() - target + 7) % 7;
      if (back === 0 && d.getTime() > now) back = 7;
      d.setDate(d.getDate() - back);
      return d.getTime();
    }
    function due(when, lastRun, now = Date.now()) {
      if (!lastRun) return false;
      const t = lastDue(when, now);
      if (lastRun >= t) return false;
      if (when.catchUp === false && now - t > 10 * 6e4) return false;
      return true;
    }
    function allowed(history, ruleId, key, now = Date.now()) {
      const mine = history.filter((h) => h.rule === ruleId);
      if (mine.some((h) => h.key === key && now - h.at < 3e4)) return { ok: false, why: "ran for this a moment ago" };
      if (mine.filter((h) => now - h.at < 36e5).length >= 20) return { ok: false, why: "ran 20 times this hour (stopped so it can't run away)" };
      return { ok: true };
    }
    var STARTERS = [
      { id: "review-ping", name: "Tell me when a task is ready for review", on: true, when: { event: "task-status", to: "review" }, then: [{ action: "notify", message: "{{project.name}}: {{task.id}} is ready for your review ({{task.title}})" }] },
      { id: "checklist-done", name: "Tell me when a stage checklist is complete", on: true, when: { event: "checklist-complete" }, then: [{ action: "notify", message: "{{project.name}}: the {{project.stage}} checklist is complete. Moving on is your call (Tasks \u2192 Move to next stage)." }] },
      { id: "playtest-to-inbox", name: "Log every new playtest in the Inbox", on: false, when: { event: "playtest-added" }, then: [{ action: "append-note", path: "_inbox/Inbox.md", text: "- {{date}} playtest in [[{{project.feedback}}|{{project.name}}]]: {{entry.quotes}}" }] },
      { id: "new-project-kickoff", name: "Give every new project a kickoff task", on: false, when: { event: "project-created" }, then: [{ action: "add-task", title: "Kickoff: write What it is, Rules and Done means in the hub", kind: "custom" }] },
      { id: "weekly-recap", name: "Write the recap notes every Monday", on: true, when: { event: "schedule", every: "week", day: "mon", at: "08:00", catchUp: true }, then: [{ action: "write-recaps" }] },
      { id: "monday-briefing", name: "Monday AI briefing (Claude reads the recaps and writes priorities)", on: false, when: { event: "schedule", every: "week", day: "mon", at: "09:00", catchUp: true }, then: [{ action: "ask-claude", prompt: "You are helping run the EMX Workshop. Read the newest note in _techniques/Workshop recaps, the What needs me items you can infer from it, and each active project's Brief (Games/*/* - Brief.md and the other categories). Write a short Monday briefing: 1) the 3\u20135 priorities for this week with the reason for each, 2) anything blocked or waiting on the user, 3) decisions that may need a review. Plain words, under 300 words.", path: "_inbox/Monday briefing {{date}}.md" }, { action: "notify", message: "Your Monday briefing is in the Inbox" }] }
    ];
    module2.exports = { EVENTS, OPS, ACTIONS, NEEDS_PROJECT, get, fill, test, inScope, matches, check, sentence, lastDue, due, allowed, STARTERS };
  }
});

// src/views/automations.js
var require_automations2 = __commonJS({
  "src/views/automations.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var A = require_automations();
    var { TextPrompt } = require_tasks();
    var uid = () => "r" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    var AutomationEditor = class {
      constructor(plugin, el, onChange) {
        Object.assign(this, { plugin, el, onChange });
        this.eng = plugin.automations;
      }
      async render() {
        const el = this.el;
        el.empty();
        await this.eng.load();
        const rules = this.eng.rules;
        const top = el.createDiv({ cls: "evs-dc-bar" });
        const master = top.createEl("label", { cls: "evs-te-check" });
        const mc = master.createEl("input", { type: "checkbox" });
        mc.checked = !!this.plugin.settings.automations.on;
        master.createSpan({ text: "Automations on" });
        mc.onchange = async () => {
          this.plugin.settings.automations.on = mc.checked;
          await this.plugin.saveSettings();
          new Notice2(mc.checked ? "Automations are on" : "All automations are paused");
        };
        const tabs = top.createDiv({ cls: "evs-rc-tabs" });
        for (const [k, label] of [["rules", `Rules (${rules.length})`], ["history", "History"]]) tabs.createEl("button", { text: label, cls: (this.tab || "rules") === k ? "is-active" : "" }).onclick = () => (this.tab = k, this.render());
        top.createDiv({ cls: "evs-cr-space" });
        top.createEl("button", { cls: "mod-cta", text: "New rule" }).onclick = () => this.edit({ id: uid(), name: "", on: true, when: { event: "task-status", to: "review" }, if: [], then: [{ action: "notify", message: "{{project.name}}: {{event}}" }] }, true);
        top.createEl("button", { text: "From a template\u2026" }).onclick = () => this.templates();
        if (this.eng.problem) el.createDiv({ cls: "evs-rc-bad", text: this.eng.problem });
        if ((this.tab || "rules") === "history") return this.history(el);
        const wrap = el.createDiv({ cls: "evs-te" });
        const left = wrap.createDiv({ cls: "evs-te-list" });
        this.right = wrap.createDiv({ cls: "evs-te-form" });
        const log = await this.eng.readLog();
        const types = Object.fromEntries(this.plugin.types.list({ hidden: true }).map((t) => [t.id, t.label]));
        for (const r2 of rules) {
          const last = log.find((l) => l.rule === r2.name);
          const row = left.createDiv({ cls: "evs-au-item" + (this.sel === r2.id ? " is-active" : "") + (r2.on ? "" : " is-off") });
          const sw = row.createEl("input", { type: "checkbox", attr: { "aria-label": r2.on ? "On: click to switch off" : "Off: click to switch on" } });
          sw.checked = !!r2.on;
          sw.onclick = (e) => e.stopPropagation();
          sw.onchange = async () => {
            r2.on = sw.checked;
            if (r2.when && r2.when.event === "schedule") delete this.plugin.settings.automations.lastRun[r2.id];
            await this.eng.save(rules);
            this.render();
          };
          const txt = row.createDiv({ cls: "evs-au-txt" });
          txt.createDiv({ cls: "evs-au-name", text: r2.name || "(no name)" });
          txt.createDiv({ cls: "evs-rc-dim", text: A.sentence(r2, types) });
          if (last) txt.createDiv({ cls: `evs-au-last is-${last.status === "\u2713" ? "ok" : last.status === "\u2717" ? "bad" : "skip"}`, text: `${last.status} ${last.when}` });
          row.onclick = () => {
            this.sel = r2.id;
            this.render();
          };
        }
        if (!rules.length) left.createDiv({ cls: "evs-hint", text: "No rules yet. Make one, or start from a template." });
        const r = rules.find((x) => x.id === this.sel);
        if (r) this.edit(JSON.parse(JSON.stringify(r)), false);
        else this.right.createDiv({ cls: "evs-hint", text: "Pick a rule to change it. A rule: when something happens (and only for the projects you choose, if your conditions hold), do these actions." });
      }
      templates() {
        const el = this.right || this.el;
        el.empty();
        el.createDiv({ cls: "evs-dc-dtitle", text: "Start from a template" });
        const grid = el.createDiv({ cls: "evs-cr-types" });
        for (const s of A.STARTERS) {
          const c = grid.createDiv({ cls: "evs-cr-type" });
          setIcon2(c.createDiv({ cls: "evs-cr-type-icon" }), (A.EVENTS[s.when.event] || {}).icon || "zap");
          c.createDiv({ cls: "evs-cr-type-name", text: s.name });
          c.createDiv({ cls: "evs-cr-type-desc", text: A.sentence(s) });
          c.onclick = () => this.edit(Object.assign(JSON.parse(JSON.stringify(s)), { id: uid(), on: false }), true);
        }
      }
      // the form for one rule (a copy: nothing changes until Save)
      edit(r, isNew) {
        const el = this.right;
        el.empty();
        const types = this.plugin.types;
        const labels = Object.fromEntries(types.list({ hidden: true }).map((t) => [t.id, t.label]));
        const head = el.createDiv({ cls: "evs-te-head" });
        const sentence = head.createDiv({ cls: "evs-au-sentence" });
        const problems = head.createDiv({ cls: "evs-te-errors" });
        const form = el.createDiv({ cls: "evs-cr-form" });
        const refresh = () => {
          sentence.setText(A.sentence(r, labels));
          problems.empty();
          const issues = A.check(r);
          for (const i of issues) problems.createDiv({ cls: "evs-rc-bad", text: i.text });
          if (save) save.disabled = issues.length > 0;
        };
        const sec = (title, hint) => {
          const s = form.createDiv({ cls: "evs-au-sec" });
          s.createDiv({ cls: "evs-au-sec-h", text: title });
          if (hint) s.createDiv({ cls: "evs-cr-hint", text: hint });
          return s;
        };
        const input = (parent, spec, obj, key) => {
          const v = obj[key] === void 0 ? spec.default : obj[key];
          if (spec.kind === "choice") {
            const s = parent.createEl("select", { cls: "dropdown" });
            for (const c of spec.choices) s.createEl("option", { value: c, text: c });
            s.value = v;
            s.onchange = () => (obj[key] = s.value, refresh());
            return s;
          }
          if (spec.kind === "toggle") {
            const l = parent.createEl("label", { cls: "evs-te-check" });
            const cb = l.createEl("input", { type: "checkbox" });
            cb.checked = !!v;
            l.createSpan({ text: key === "catchUp" ? "Run when I open the vault if it was missed" : key });
            cb.onchange = () => (obj[key] = cb.checked, refresh());
            return l;
          }
          const i = spec.kind === "longtext" ? parent.createEl("textarea", { attr: { rows: 4 } }) : parent.createEl("input", { type: "text" });
          i.value = v == null ? "" : String(v);
          i.oninput = () => (obj[key] = i.value, refresh());
          return i;
        };
        const nameS = sec("Name");
        const name = nameS.createEl("input", { type: "text", value: r.name || "", attr: { placeholder: "e.g. Tell me when a playtest comes in" } });
        name.oninput = () => (r.name = name.value, refresh());
        const whenS = sec("When", "What starts it.");
        const evSel = whenS.createEl("select", { cls: "dropdown" });
        for (const [k, e] of Object.entries(A.EVENTS)) evSel.createEl("option", { value: k, text: e.label });
        evSel.value = r.when.event;
        evSel.onchange = () => {
          r.when = { event: evSel.value };
          r.if = [];
          this.edit(r, isNew);
        };
        const params = whenS.createDiv({ cls: "evs-cr-row" });
        for (const [k, spec] of Object.entries((A.EVENTS[r.when.event] || {}).params || {})) {
          if (r.when.event === "schedule" && k === "day" && r.when.every && r.when.every !== "week") continue;
          const f = params.createDiv({ cls: "evs-au-param" });
          if (spec.kind !== "toggle") f.createSpan({ cls: "evs-cr-hint", text: { every: "Every", day: "On", at: "At (24h)", to: "Moves to", folder: "In folder (empty: anywhere)" }[k] || k });
          if (r.when[k] === void 0) r.when[k] = spec.default;
          const inp = input(f, spec, r.when, k);
          if (k === "every") inp.addEventListener("change", () => this.edit(r, isNew));
        }
        if (!["schedule", "vault-opened"].includes(r.when.event)) {
          const sc = sec("Only for", "Nothing picked: every project.");
          r.scope = r.scope || {};
          const chipRow = (label, key, items) => {
            const row = sc.createDiv({ cls: "evs-au-scope" });
            row.createSpan({ cls: "evs-cr-hint", text: label });
            const chips = row.createDiv({ cls: "evs-dc-chips" });
            for (const [v, t] of items) {
              const on = (r.scope[key] || []).includes(v);
              const c = chips.createSpan({ cls: "evs-dc-chip" + (on ? " is-active" : ""), text: t });
              c.onclick = () => {
                const list = r.scope[key] || [];
                r.scope[key] = list.includes(v) ? list.filter((x) => x !== v) : list.concat(v);
                c.toggleClass("is-active", r.scope[key].includes(v));
                refresh();
              };
            }
          };
          chipRow("Types", "types", types.list().map((t) => [t.id, t.label]));
          chipRow("Categories", "categories", types.categories.map((c) => [c.folder, c.label]));
          chipRow("Projects", "projects", (this.plugin.store.cache || []).filter((p) => p.section !== "Archive").map((p) => [p.path, p.name]));
        }
        const ifS = sec("If", "All of these must hold (optional).");
        const fields = (A.EVENTS[r.when.event] || {}).fields || [];
        r.if = r.if || [];
        const conds = ifS.createDiv({ cls: "evs-te-rows" });
        const drawConds = () => {
          conds.empty();
          r.if.forEach((c, i) => {
            const row = conds.createDiv({ cls: "evs-cr-row" });
            const fs = row.createEl("select", { cls: "dropdown" });
            for (const f of fields) fs.createEl("option", { value: f, text: f });
            fs.value = c.field || fields[0];
            c.field = fs.value;
            fs.onchange = () => (c.field = fs.value, refresh());
            const os = row.createEl("select", { cls: "dropdown" });
            for (const [k, t] of Object.entries(A.OPS)) os.createEl("option", { value: k, text: t });
            os.value = c.op || "is";
            c.op = os.value;
            os.onchange = () => (c.op = os.value, drawConds(), refresh());
            if (!["empty", "not-empty"].includes(c.op)) {
              const v = row.createEl("input", { type: "text", value: c.value || "", attr: { placeholder: c.op === "one-of" ? "a, b, c" : "value" } });
              v.oninput = () => (c.value = v.value, refresh());
            }
            const rm = row.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Remove" } });
            setIcon2(rm, "x");
            rm.onclick = () => (r.if.splice(i, 1), drawConds(), refresh());
          });
          if (fields.length) conds.createEl("button", { text: "+ Condition" }).onclick = () => (r.if.push({ field: fields[0], op: "is", value: "" }), drawConds(), refresh());
          else conds.createDiv({ cls: "evs-rc-dim", text: "This trigger has nothing to test." });
        };
        drawConds();
        const thenS = sec("Then", `Placeholders you can use: ${["date"].concat(fields).map((f) => `{{${f}}}`).join(" ")}${r.when.event !== "schedule" ? " {{project.path}} {{project.hub}} {{project.feedback}} {{project.brief}}" : ""}`);
        const acts = thenS.createDiv({ cls: "evs-te-rows" });
        const drawActs = () => {
          acts.empty();
          r.then.forEach((a, i) => {
            const card = acts.createDiv({ cls: "evs-au-act" });
            const h = card.createDiv({ cls: "evs-cr-row" });
            setIcon2(h.createSpan({ cls: "evs-te-icon" }), (A.ACTIONS[a.action] || {}).icon || "zap");
            const s = h.createEl("select", { cls: "dropdown" });
            for (const [k, x] of Object.entries(A.ACTIONS)) s.createEl("option", { value: k, text: x.label });
            s.value = a.action;
            s.onchange = () => {
              r.then[i] = { action: s.value };
              drawActs();
              refresh();
            };
            const up = h.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Move up" } });
            setIcon2(up, "arrow-up");
            up.onclick = () => i > 0 && (r.then.splice(i - 1, 0, r.then.splice(i, 1)[0]), drawActs(), refresh());
            const rm = h.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Remove" } });
            setIcon2(rm, "x");
            rm.onclick = () => (r.then.splice(i, 1), drawActs(), refresh());
            for (const [k, spec] of Object.entries((A.ACTIONS[a.action] || {}).params || {})) {
              if (a.action === "open-view" && k === "note" && a.view !== "note") continue;
              const f = card.createDiv({ cls: "evs-au-param" });
              f.createSpan({ cls: "evs-cr-hint", text: { message: "Message", path: "Note path", content: "Starts as", open: "Open it", text: "Text", title: "Task title", details: "Details", kind: "Kind", view: "View", note: "Note", tool: "Tool (its name in the type)", prompt: "What to ask Claude (it can read the vault, not change it)" }[k] || k });
              if (a[k] === void 0) a[k] = spec.default;
              const inp = input(f, spec, a, k);
              if (a.action === "open-view" && k === "view") inp.addEventListener("change", drawActs);
            }
            if (a.action === "ask-claude") card.createDiv({ cls: "evs-rc-dim", text: "Runs Claude Code on this PC (your plan's usage). Its answer goes into the note, marked as Claude's and not checked." });
          });
          const add = acts.createEl("select", { cls: "dropdown" });
          add.createEl("option", { value: "", text: "+ Action\u2026" });
          for (const [k, x] of Object.entries(A.ACTIONS)) add.createEl("option", { value: k, text: x.label });
          add.onchange = () => {
            if (!add.value) return;
            r.then.push({ action: add.value });
            drawActs();
            refresh();
          };
        };
        drawActs();
        const errS = sec("If an action fails");
        const es = errS.createEl("select", { cls: "dropdown" });
        for (const [v, t] of [["stop", "Stop the rule (and tell me)"], ["continue", "Carry on with the next action"]]) es.createEl("option", { value: v, text: t });
        es.value = r.onError || "stop";
        es.onchange = () => r.onError = es.value;
        const tryS = sec("Try it", "A dry run says what each action would do, for the project you pick, without doing it.");
        const tr = tryS.createDiv({ cls: "evs-cr-row" });
        const projSel = tr.createEl("select", { cls: "dropdown" });
        for (const p of (this.plugin.store.cache || []).filter((x) => x.section !== "Archive")) projSel.createEl("option", { value: p.path, text: p.name });
        const out = tryS.createDiv({ cls: "evs-au-out" });
        const show = (res) => {
          out.empty();
          out.createDiv({ cls: res.status === "ok" ? "evs-rc-good" : "evs-rc-bad", text: res.why || (res.status === "ok" ? "Would work:" : "Would fail:") });
          for (const s of res.steps) out.createDiv({ cls: s.ok ? "" : "evs-rc-bad", text: `${s.ok ? "\u2713" : "\u2717"} ${s.what}` });
        };
        tr.createEl("button", { text: "Dry run" }).onclick = async () => show(await this.eng.run(r, await this.sample(r, projSel.value), { dry: true }));
        const now = tr.createEl("button", { text: "Run now" });
        now.onclick = async () => {
          if (now.dataset.sure !== "1") {
            now.dataset.sure = "1";
            now.setText("Click again: really run it");
            return;
          }
          now.dataset.sure = "";
          now.setText("Run now");
          show(await this.eng.run(r, await this.sample(r, projSel.value), { key: `manual:${Date.now()}` }));
        };
        const foot = el.createDiv({ cls: "evs-cr-foot evs-te-foot" });
        if (!isNew) {
          const del = foot.createEl("button", { text: "Delete" });
          del.onclick = async () => {
            if (del.dataset.sure !== "1") {
              del.dataset.sure = "1";
              del.setText("Click again to delete");
              return;
            }
            await this.eng.save(this.eng.rules.filter((x) => x.id !== r.id));
            this.sel = null;
            new Notice2(`Deleted "${r.name}"`);
            this.render();
          };
          foot.createEl("button", { text: "Duplicate" }).onclick = () => this.edit(Object.assign(JSON.parse(JSON.stringify(r)), { id: uid(), name: `${r.name} copy`, on: false }), true);
        }
        foot.createDiv({ cls: "evs-cr-space" });
        const save = foot.createEl("button", { cls: "mod-cta", text: isNew ? "Add rule" : "Save" });
        save.onclick = async () => {
          const rules = this.eng.rules.slice();
          const i = rules.findIndex((x) => x.id === r.id);
          const old = i >= 0 ? rules[i] : null;
          if (i >= 0) rules[i] = r;
          else rules.push(r);
          if (r.when.event === "schedule" && (!old || JSON.stringify(old.when) !== JSON.stringify(r.when))) delete this.plugin.settings.automations.lastRun[r.id];
          await this.eng.save(rules);
          await this.plugin.saveSettings();
          this.sel = r.id;
          new Notice2(`Saved "${r.name}"${r.on ? "" : " (switched off: turn it on in the list)"}`);
          this.render();
        };
        refresh();
      }
      // a realistic context for a dry run or run now: the picked project, its latest task, feedback entry and hub
      async sample(r, projectPath) {
        const eng = this.eng;
        const p = (this.plugin.store.cache || []).find((x) => x.path === projectPath);
        const ctx = eng.base({ event: `a test of "${r.name}"`, project: eng.projectCtx(p) });
        if (p) {
          const pj = await this.plugin.workshop.state(p).catch(() => null);
          const t = (pj && pj.tasks || []).filter((x) => x.status !== "done").slice(-1)[0];
          if (t) ctx.task = { id: t.id, title: t.title, kind: t.kind, status: r.when && r.when.to && r.when.to !== "any" ? r.when.to : t.status, from: t.status };
          const { parseFeel } = require_recap2();
          const e = parseFeel(p.texts && p.texts.feel)[0];
          ctx.entry = e ? { title: e.title, quotes: e.quotes, heading: e.heading } : { title: "a test entry", quotes: ["a test quote"] };
          ctx.note = { path: p.hub, name: p.name, folder: p.path };
          if (pj) ctx.project.stage = pj.stage;
        }
        return ctx;
      }
      async history(el) {
        const log = await this.eng.readLog();
        const box = el.createDiv({ cls: "evs-au-history" });
        if (!log.length) box.createDiv({ cls: "evs-hint", text: "Nothing has run yet." });
        for (const l of log.slice(0, 200)) {
          const row = box.createDiv({ cls: `evs-au-hrow is-${l.status === "\u2713" ? "ok" : l.status === "\u2717" ? "bad" : "skip"}` });
          row.createSpan({ cls: "evs-rc-when", text: l.when });
          row.createSpan({ cls: "evs-au-status", text: l.status });
          row.createSpan({ cls: "evs-au-name", text: l.rule });
          row.createSpan({ cls: "evs-rc-dim", text: l.rest });
        }
        box.createEl("button", { text: "Open the log note" }).onclick = () => this.plugin.openPath("_system/Automation log.md");
      }
    };
    module2.exports = { AutomationEditor };
  }
});

// src/data/licenses.js
var require_licenses = __commonJS({
  "src/data/licenses.js"(exports2, module2) {
    "use strict";
    var { parseYaml, stringifyYaml } = require("obsidian");
    var FILE = "_system/Asset licenses.md";
    var LICENSES = [
      ["own", "Yours (made by you)"],
      ["cc0", "CC0 / public domain"],
      ["licensed", "Licensed (you have the rights)"],
      ["ai-own", "AI-made by you (check the model's terms)"],
      ["roblox", "Roblox-licensed (Creator Store)"],
      ["unknown", "Unknown"]
    ];
    var OK = /* @__PURE__ */ new Set(["own", "cc0", "licensed", "ai-own", "roblox"]);
    var LicenseStore2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.map = null;
      }
      key(p, rel) {
        return `${p.path}|${rel}`;
      }
      async load() {
        if (this.map) return this.map;
        this.map = {};
        const a = this.app.vault.adapter;
        if (await a.exists(FILE)) {
          const m = (await a.read(FILE)).replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
          try {
            this.map = m && (parseYaml(m[1]) || {}).licenses || {};
          } catch (e) {
            this.problem = `The licenses note can't be read: ${e.message}`;
          }
        }
        return this.map;
      }
      get(p, rel) {
        return (this.map || {})[this.key(p, rel)] || null;
      }
      async set(p, rel, info) {
        await this.load();
        const k = this.key(p, rel);
        if (!info || !info.license) delete this.map[k];
        else this.map[k] = Object.assign({ at: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) }, info);
        const text = `---
${stringifyYaml({ licenses: this.map }).trimEnd()}
---

# Asset licenses

Where each asset came from and what you may do with it. Set them in Projects \u2192 Assets. Published Roblox games use only your own, CC0 or Roblox-licensed assets.
`;
        const vault = this.app.vault;
        if (!await vault.adapter.exists("_system")) await vault.createFolder("_system");
        const f = vault.getAbstractFileByPath(FILE);
        if (f) await vault.modify(f, text);
        else await vault.create(FILE, text);
      }
      // the same license for many files in one write
      async setMany(p, rels, info) {
        await this.load();
        for (const rel of rels) this.map[this.key(p, rel)] = Object.assign({ at: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10) }, info);
        await this.set(p, rels[0], info);
      }
      ok(info) {
        return !!(info && OK.has(info.license));
      }
    };
    module2.exports = { LicenseStore: LicenseStore2, LICENSES, FILE };
  }
});

// src/views/assetlib.js
var require_assetlib = __commonJS({
  "src/views/assetlib.js"(exports2, module2) {
    "use strict";
    var { Modal, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var { LICENSES } = require_licenses();
    var { ago } = require_util();
    var ICON = { sound: "audio-lines", audio: "audio-lines", image: "image", texture: "image", model: "box", video: "clapperboard", source: "file-code" };
    var AUDIO = /\.(wav|ogg|mp3|m4a|flac)$/i;
    var IMAGE = /\.(png|jpe?g|gif|webp|svg|bmp)$/i;
    var VIDEO = /\.(mp4|webm|mov)$/i;
    var size = (n) => n > 1048576 ? `${(n / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(n / 1024))} KB`;
    function fileUrl(app, abs) {
      const base = app.vault.adapter.getResourcePath("x").replace(/[^/]*\?.*$/, "").replace(/\/[^/]*$/, "/");
      const root = base.slice(0, base.indexOf("/", "app://".length) + 1);
      return root + abs.replace(/\\/g, "/").split("/").map((s, i) => i === 0 ? s : encodeURIComponent(s)).join("/");
    }
    var LicenseModal = class extends Modal {
      constructor(plugin, p, f, info, done) {
        super(plugin.app);
        Object.assign(this, { plugin, p, f, info, done });
      }
      onOpen() {
        this.titleEl.setText(`Where ${this.f.name} came from`);
        const form = this.contentEl.createDiv({ cls: "evs-cr-form" });
        const sel = form.createEl("select", { cls: "dropdown" });
        sel.createEl("option", { value: "", text: "(not set)" });
        for (const [v, t] of LICENSES) sel.createEl("option", { value: v, text: t });
        sel.value = this.info && this.info.license || "";
        const src = form.createEl("input", { type: "text", value: this.info && this.info.source || "", attr: { placeholder: "Source: a link, the tool that made it, or who made it" } });
        const note = form.createEl("input", { type: "text", value: this.info && this.info.note || "", attr: { placeholder: "Note (credit line, terms\u2026)" } });
        const folder = this.f.rel.split("/").slice(0, -1).join("/");
        const siblings = this.plugin.assets.forProject(this.p).files.filter((x) => x.rel.split("/").slice(0, -1).join("/") === folder).map((x) => x.rel);
        const allL = form.createEl("label", { cls: "evs-te-check" });
        const all = allL.createEl("input", { type: "checkbox" });
        allL.createSpan({ text: `Apply to every file in ${folder || "the repo's top folder"} (${siblings.length})` });
        const foot = this.contentEl.createDiv({ cls: "evs-cr-foot" });
        foot.createDiv({ cls: "evs-cr-space" });
        foot.createEl("button", { cls: "mod-cta", text: "Save" }).onclick = async () => {
          const info = sel.value ? { license: sel.value, source: src.value.trim(), note: note.value.trim() } : null;
          if (all.checked && info) await this.plugin.licenses.setMany(this.p, siblings, info);
          else await this.plugin.licenses.set(this.p, this.f.rel, info);
          this.close();
          this.done();
        };
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    var AssetLibrary = class {
      constructor(plugin, el, onChange) {
        Object.assign(this, { plugin, el, onChange });
        this.f = { project: "", kind: "", lic: "", q: "" };
        this.limit = 120;
      }
      async render() {
        const el = this.el, plugin = this.plugin;
        el.empty();
        await plugin.licenses.load();
        const projects = (await plugin.store.all()).filter((p) => p.section !== "Archive" && plugin.workshop.repoDir(p));
        const all = [];
        for (const p of projects) {
          const a = plugin.assets.forProject(p);
          for (const f of a.files) all.push({ p, f, required: a.license === "required", info: plugin.licenses.get(p, f.rel) });
        }
        const kinds = [...new Set(all.map((x) => x.f.kind))].sort();
        const need = all.filter((x) => x.required && !plugin.licenses.ok(x.info));
        const head = el.createDiv({ cls: "evs-dc-stats" });
        const stat = (n, label, fn, cls = "") => {
          const s = head.createDiv({ cls: "evs-dc-stat " + cls + (n ? "" : " is-zero") });
          s.createDiv({ cls: "evs-dc-n", text: String(n) });
          s.createDiv({ cls: "evs-dc-l", text: label });
          if (fn) s.onclick = fn;
        };
        stat(all.length, "assets", () => (this.f.lic = "", this.render()));
        stat(projects.filter((p) => plugin.assets.forProject(p).files.length).length, "projects with assets");
        stat(need.length, "need a license", () => (this.f.lic = "need", this.render()), "is-bad");
        stat(all.filter((x) => plugin.licenses.ok(x.info)).length, "licensed", () => (this.f.lic = "ok", this.render()));
        const bar = el.createDiv({ cls: "evs-dc-bar" });
        const search = bar.createEl("input", { type: "search", attr: { placeholder: "Search assets\u2026" } });
        search.value = this.f.q;
        const sel = (opts, key, first) => {
          const s = bar.createEl("select", { cls: "dropdown" });
          s.createEl("option", { value: "", text: first });
          for (const [v, t] of opts) s.createEl("option", { value: v, text: t });
          s.value = this.f[key];
          s.onchange = () => (this.f[key] = s.value, draw());
        };
        sel(projects.map((p) => [p.path, p.name]), "project", "All projects");
        sel(kinds.map((k) => [k, k]), "kind", "All kinds");
        sel([["need", "Needs a license"], ["ok", "Licensed"], ["unset", "Not set"]], "lic", "Any license");
        const grid = el.createDiv({ cls: "evs-al-grid" });
        const more = el.createDiv();
        const draw = () => {
          grid.empty();
          more.empty();
          const q = this.f.q.toLowerCase();
          const shown = all.filter((x) => (!this.f.project || x.p.path === this.f.project) && (!this.f.kind || x.f.kind === this.f.kind) && (!q || `${x.f.rel} ${x.p.name}`.toLowerCase().includes(q)) && (this.f.lic === "need" ? x.required && !plugin.licenses.ok(x.info) : this.f.lic === "ok" ? plugin.licenses.ok(x.info) : this.f.lic === "unset" ? !x.info : true));
          for (const x of shown.slice(0, this.limit)) this.card(grid, x);
          if (!shown.length) grid.createDiv({ cls: "evs-hint", text: all.length ? "No assets match." : "No assets yet. A project's type says which file kinds count (Project types \u2192 Assets)." });
          if (shown.length > this.limit) more.createEl("button", { text: `Show more (${shown.length - this.limit} left)` }).onclick = () => (this.limit += 240, draw());
        };
        search.oninput = () => (this.f.q = search.value, draw());
        draw();
      }
      card(grid, x) {
        const plugin = this.plugin, f = x.f;
        const c = grid.createDiv({ cls: "evs-al-card" });
        c.style.setProperty("--p", plugin.projStyle(x.p).color);
        const pv = c.createDiv({ cls: "evs-al-preview" });
        if (IMAGE.test(f.name)) pv.createEl("img", { attr: { src: fileUrl(plugin.app, f.path), loading: "lazy", alt: f.name } }).onerror = (e) => e.target.remove();
        else if (VIDEO.test(f.name)) {
          const v = pv.createEl("video", { attr: { src: fileUrl(plugin.app, f.path), preload: "metadata", muted: "" } });
          v.muted = true;
          c.onmouseenter = () => v.play().catch(() => {
          });
          c.onmouseleave = () => v.pause();
        } else setIcon2(pv.createDiv({ cls: "evs-al-icon" }), ICON[f.kind] || "file");
        if (AUDIO.test(f.name)) {
          const play = pv.createEl("button", { cls: "evs-al-play", attr: { "aria-label": "Play" } });
          setIcon2(play, "play");
          play.onclick = (e) => {
            e.stopPropagation();
            if (this.audio && !this.audio.paused) this.audio.pause();
            this.audio = new Audio(fileUrl(plugin.app, f.path));
            this.audio.play().catch((err) => new Notice2(`Can't play it here: ${err.message}`));
          };
        }
        const meta = c.createDiv({ cls: "evs-al-meta" });
        meta.createDiv({ cls: "evs-al-name", text: f.name, attr: { title: f.rel } });
        meta.createDiv({ cls: "evs-rc-dim", text: `${x.p.name} \xB7 ${f.kind} \xB7 ${size(f.size)} \xB7 ${ago(f.mtime)}` });
        const lic = meta.createDiv({ cls: "evs-al-lic " + (plugin.licenses.ok(x.info) ? "is-ok" : x.required ? "is-bad" : "is-unset") });
        lic.setText(x.info ? (LICENSES.find(([k]) => k === x.info.license) || [, x.info.license])[1] : x.required ? "Needs a license" : "License not set");
        if (x.info && x.info.source) lic.setAttr("aria-label", `Source: ${x.info.source}${x.info.note ? ` \xB7 ${x.info.note}` : ""}`);
        lic.onclick = (e) => {
          e.stopPropagation();
          new LicenseModal(plugin, x.p, f, x.info, () => this.render()).open();
        };
        const acts = c.createDiv({ cls: "evs-al-acts" });
        const btn = (icon, label, fn) => {
          const b = acts.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = (e) => {
            e.stopPropagation();
            fn();
          };
        };
        btn("external-link", "Open", () => require("electron").shell.openPath(f.path));
        btn("folder-open", "Show in folder", () => require("electron").shell.showItemInFolder(f.path));
        btn("copy", "Copy its path in the repo", async () => {
          await navigator.clipboard.writeText(f.rel);
          new Notice2(`Copied ${f.rel}`);
        });
      }
    };
    module2.exports = { AssetLibrary, fileUrl, LicenseModal };
  }
});

// src/views/projects.js
var require_projects2 = __commonJS({
  "src/views/projects.js"(exports2, module2) {
    "use strict";
    var { ItemView, Menu, Notice: Notice2, SuggestModal, setIcon: setIcon2, stringifyYaml } = require("obsidian");
    var { PROJECTS: PROJECTS2, STAGES } = require_constants();
    var { ago } = require_util();
    var { TextPrompt } = require_tasks();
    var { IconSuggest } = require_panel();
    var { TypeEditor } = require_typeeditor();
    var { AutomationEditor } = require_automations2();
    var { AssetLibrary } = require_assetlib();
    var { CATS } = require_types2();
    var { UpdatesModal } = require_blueprints();
    var Pick = class extends SuggestModal {
      constructor(app, items, label, done, placeholder) {
        super(app);
        Object.assign(this, { items, label, done });
        this.setPlaceholder(placeholder || "Type to filter\u2026");
      }
      getSuggestions(q) {
        return this.items.filter((x) => this.label(x).toLowerCase().includes(q.toLowerCase()));
      }
      renderSuggestion(x, el) {
        el.setText(this.label(x));
      }
      onChooseSuggestion(x) {
        this.done(x);
      }
    };
    var ProjectsView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.tab = "projects";
        this.f = { q: "", cat: "", type: "", stage: "", sort: "name", archived: false, fav: false };
      }
      getViewType() {
        return PROJECTS2;
      }
      getDisplayText() {
        return "Projects";
      }
      getIcon() {
        return "folder-kanban";
      }
      getState() {
        return { tab: this.tab };
      }
      async setState(state, result) {
        if (state && state.tab) this.tab = state.tab;
        await super.setState(state, result);
        await this.render();
      }
      async onOpen() {
        this.contentEl.addClass("evs-projects-view");
        await this.render();
      }
      async render() {
        const el = this.contentEl;
        el.empty();
        const head = el.createDiv({ cls: "evs-dc-head" });
        head.createDiv({ cls: "evs-dc-title", text: "Projects" });
        const tools = head.createDiv({ cls: "evs-dc-tools" });
        const nb = tools.createEl("button", { cls: "mod-cta", text: "New project" });
        nb.onclick = () => this.plugin.openCreator();
        const tabs = el.createDiv({ cls: "evs-rc-tabs evs-pm-tabs" });
        for (const [k, label] of [["projects", "Projects"], ["types", "Project types"], ["categories", "Categories"], ["automations", "Automations"], ["assets", "Assets"]]) {
          tabs.createEl("button", { text: label, cls: this.tab === k ? "is-active" : "" }).onclick = () => {
            this.tab = k;
            this.app.workspace.requestSaveLayout();
            this.render();
          };
        }
        const body = el.createDiv();
        await this.plugin.types.load();
        if (this.tab === "types") return new TypeEditor(this.plugin, body, () => this.render()).render();
        if (this.tab === "categories") return this.renderCategories(body);
        if (this.tab === "assets") return new AssetLibrary(this.plugin, body, () => this.render()).render();
        if (this.tab === "automations") return this.autoEditor = this.autoEditor || new AutomationEditor(this.plugin, body, () => this.render()), this.autoEditor.el = body, this.autoEditor.render();
        return this.renderProjects(body);
      }
      // ---- projects ----
      async renderProjects(body) {
        const reg = this.plugin.types, f = this.f;
        const all = await this.plugin.store.all();
        const bar = body.createDiv({ cls: "evs-dc-bar" });
        const search = bar.createEl("input", { type: "search", attr: { placeholder: "Search projects\u2026" } });
        search.value = f.q;
        const sel = (opts, key, first) => {
          const s = bar.createEl("select", { cls: "dropdown" });
          s.createEl("option", { value: "", text: first });
          for (const [v, t] of opts) s.createEl("option", { value: v, text: t });
          s.value = f[key];
          s.onchange = () => {
            f[key] = s.value;
            draw();
          };
        };
        sel(reg.all().map((c) => [c.folder, c.label]), "cat", "All categories");
        sel(reg.list().map((t) => [t.id, t.label]), "type", "All types");
        sel(STAGES.map((s) => [s, s]), "stage", "Any stage");
        const sort = bar.createEl("select", { cls: "dropdown" });
        for (const [v, t] of [["name", "By name"], ["activity", "Latest activity"], ["stage", "By stage"], ["open", "Most open tasks"]]) sort.createEl("option", { value: v, text: t });
        sort.value = f.sort;
        sort.onchange = () => {
          f.sort = sort.value;
          draw();
        };
        const favL = bar.createEl("label", { cls: "evs-te-check" });
        const favC = favL.createEl("input", { type: "checkbox" });
        favC.checked = f.fav;
        favL.createSpan({ text: "\u2605 Favorites" });
        favC.onchange = () => (f.fav = favC.checked, draw());
        const upd = body.createDiv({ cls: "evs-pm-updates" });
        this.plugin.blueprints.pending().then((pending) => {
          if (!pending.length) return;
          upd.createSpan({ text: `${pending.length} project${pending.length === 1 ? " can" : "s can"} get what's new in ${pending.length === 1 ? "its type" : "their types"} (only additions).` });
          upd.createEl("button", { cls: "mod-cta", text: "Review" }).onclick = () => new UpdatesModal(this.plugin, pending, () => this.render()).open();
        });
        const list = body.createDiv({ cls: "evs-pm-list" });
        const draw = () => {
          list.empty();
          const q = f.q.toLowerCase();
          const shown = all.filter((p) => (!f.cat || p.section === f.cat) && (!f.type || p.type === f.type) && (!f.stage || p.stage === f.stage) && (!q || `${p.name} ${p.section} ${p.type}`.toLowerCase().includes(q))).filter((p) => f.cat === "Archive" || p.section !== "Archive" || f.archived).filter((p) => !f.fav || this.plugin.favoriteOf(p).star).sort((a, b) => f.sort === "activity" ? (b.lastDate || 0) - (a.lastDate || 0) : f.sort === "stage" ? (b.stageIndex ?? -1) - (a.stageIndex ?? -1) : f.sort === "open" ? b.open - a.open : a.name.localeCompare(b.name));
          const archivedN = all.filter((p) => p.section === "Archive").length;
          const head = list.createDiv({ cls: "evs-pm-row is-head" });
          for (const t of ["Project", "Category", "Type", "Stage", "Open", "Last session", ""]) head.createDiv({ text: t });
          for (const p of shown) {
            const st = this.plugin.projStyle(p), t = reg.get(p.type);
            const r = list.createDiv({ cls: "evs-pm-row" + (p.section === "Archive" ? " is-archived" : "") });
            r.style.setProperty("--p", st.color);
            const n = r.createDiv({ cls: "evs-pm-name" });
            const fav = this.plugin.favoriteOf(p);
            const star = n.createSpan({ cls: "evs-mc-star" + (fav.star ? " is-on" : ""), attr: { "aria-label": fav.holo ? `Holo: ${fav.holo}` : fav.pinned ? "Unpin" : "Pin" } });
            setIcon2(star, "star");
            star.onclick = async (e) => {
              e.stopPropagation();
              await this.plugin.togglePin(p);
              draw();
            };
            setIcon2(n.createSpan({ cls: "evs-pm-icon" }), st.icon);
            n.createSpan({ text: p.name });
            if (fav.holo) n.createSpan({ cls: "evs-db-pill", text: fav.holo });
            r.createDiv({ text: (reg.category(p.section) || { label: p.section }).label });
            r.createDiv({ text: t ? t.label : p.type || "?" });
            r.createDiv({ text: p.stage || "\u2013" });
            r.createDiv({ text: p.hasWorkshop ? String(p.open) : "\u2013" });
            r.createDiv({ text: p.lastDate ? ago(p.lastDate) : "\u2013" });
            const more = r.createDiv({ cls: "evs-pm-more" });
            const b = more.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Actions" } });
            setIcon2(b, "more-horizontal");
            b.onclick = (e) => this.menu(p, e);
            r.oncontextmenu = (e) => this.menu(p, e);
            r.ondblclick = () => this.plugin.openPath(p.hub);
          }
          if (!shown.length) list.createDiv({ cls: "evs-hint", text: "No projects match." });
          if (archivedN && f.cat !== "Archive") {
            const a = list.createDiv({ cls: "evs-pm-archived is-clickable", text: f.archived ? `Hide archived (${archivedN})` : `Show archived (${archivedN})` });
            a.onclick = () => {
              f.archived = !f.archived;
              draw();
            };
          }
        };
        search.oninput = () => {
          f.q = search.value;
          draw();
        };
        draw();
      }
      menu(p, e) {
        const m = new Menu(), pm = this.plugin.manager, reg = this.plugin.types;
        const act = async (fn, ok) => {
          try {
            await fn();
            if (ok) new Notice2(ok);
          } catch (x) {
            new Notice2(`Couldn't: ${x.message}`, 8e3);
          }
          this.render();
        };
        const item = (title, icon, fn) => m.addItem((i) => i.setTitle(title).setIcon(icon).onClick(fn));
        item("Open hub", "home", () => this.plugin.openPath(p.hub));
        if (this.app.vault.getAbstractFileByPath(p.dashboard)) item("Open dashboard", "layout-dashboard", () => this.plugin.openPath(p.dashboard));
        if (p.hasWorkshop) item("Tasks", "list-checks", () => this.plugin.openTasks(p.path));
        item("Recap", "chart-no-axes-column", () => this.plugin.openRecap({ only: p.path }));
        item("Its own graph", "waypoints", () => this.plugin.openGraph(p.path));
        if (this.plugin.workshop.repoDir(p)) item("Open in Holo", "monitor-play", () => this.plugin.openInHolo(p));
        item(this.plugin.favoriteOf(p).pinned ? "Unpin" : "Pin to the top", "star", () => act(() => this.plugin.togglePin(p)));
        item("Bookmark the hub in Obsidian", "bookmark", () => this.plugin.bookmark(p));
        m.addSeparator();
        item("Rename\u2026", "pencil", () => new TextPrompt(this.app, { title: `Rename ${p.name}`, label: "The vault folder and the notes named after it; links everywhere follow. The Workshop project keeps its own name.", button: "Rename" }, (name) => act(() => pm.rename(p, name.trim()), `Renamed to ${name.trim()}`)).open());
        item("Move to category\u2026", "folder-input", () => new Pick(this.app, reg.categories.filter((c) => c.folder !== p.section), (c) => c.label, (c) => act(() => pm.move(p, { category: c.folder }), `Moved to ${c.label}`)).open());
        item("Change type\u2026", "shapes", () => new Pick(this.app, reg.list().filter((t) => t.id !== p.type), (t) => `${t.label} (${t.category || "any"})`, (t) => act(() => pm.changeType(p, t.id), `Now a ${t.label}`)).open());
        item("Relate to\u2026", "link", () => new Pick(this.app, (this.plugin.store.cache || []).filter((x) => x !== p), (x) => x.name, (x) => act(() => pm.relate(p, x), `${p.name} \u2194 ${x.name}`)).open());
        item("Color\u2026", "palette", () => {
          const input = createEl("input", { type: "color", value: this.plugin.projStyle(p).color });
          input.onchange = () => act(async () => {
            this.plugin.settings.projects[p.name] = Object.assign({}, this.plugin.settings.projects[p.name], { color: input.value });
            await this.plugin.saveSettings();
            this.plugin.onProjectsChanged();
          });
          input.click();
        });
        item("Icon\u2026", "smile", () => new IconSuggest(this.app, (id) => act(async () => {
          this.plugin.settings.projects[p.name] = Object.assign({}, this.plugin.settings.projects[p.name], { icon: id });
          await this.plugin.saveSettings();
          this.plugin.onProjectsChanged();
        })).open());
        m.addSeparator();
        item("Duplicate as a new project\u2026", "copy", () => {
          const st = this.plugin.projStyle(p), t = reg.get(p.type);
          this.plugin.openCreator({ step: 1, mode: "create", typeId: p.type, category: p.section === "Archive" ? t && t.category || "Tools" : p.section, color: st.color, icon: st.icon, name: `${p.name} copy`, related: [`${p.path}/${p.name}`], options: { workshop: !!(t && !(t.workshop && t.workshop.create === false)), github: false, tasks: [], open: true } });
        });
        item("Save as a new type", "file-cog", () => act(async () => {
          const def = await pm.saveAsType(p);
          this.tab = "types";
          this.plugin.typeEditorSelect = def.id;
        }, `Saved as the type "${p.name} type": edit it in Project types`));
        m.addSeparator();
        if (p.section === "Archive") item("Restore from archive", "archive-restore", () => act(() => pm.restore(p), `${p.name} restored`));
        else item("Archive", "archive", () => act(() => pm.archive(p), `${p.name} moved to Archive (its Workshop project is unchanged)`));
        m.showAtMouseEvent(e);
      }
      // ---- categories ----
      renderCategories(body) {
        const reg = this.plugin.types;
        const cats = reg.categories.map((c) => Object.assign({}, c));
        const counts = {};
        for (const p of this.plugin.store.cache || []) counts[p.section] = (counts[p.section] || 0) + 1;
        body.createDiv({ cls: "evs-dc-note", text: "The top-level folders projects live in, in this order on Home and in the Creator. A category with projects can't be removed; Archive is always there." });
        const list = body.createDiv({ cls: "evs-pm-cats" });
        const draw = () => {
          list.empty();
          cats.forEach((c, i) => {
            const r = list.createDiv({ cls: "evs-pm-cat" });
            const ic = r.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Icon" } });
            setIcon2(ic, c.icon || "folder");
            ic.onclick = () => new IconSuggest(this.app, (id) => (c.icon = id, draw())).open();
            const color = r.createEl("input", { type: "color", value: c.color || "#888888" });
            color.oninput = () => c.color = color.value;
            const label = r.createEl("input", { type: "text", value: c.label, attr: { placeholder: "Name" } });
            label.oninput = () => {
              c.label = label.value;
              if (c.isNew) c.folder = label.value.trim().replace(/[\\/:*?"<>|#^[\]]/g, "");
            };
            r.createSpan({ cls: "evs-rc-dim", text: c.isNew ? "new folder" : `${c.folder}/ \xB7 ${counts[c.folder] || 0} projects` });
            const t = r.createEl("select", { cls: "dropdown", attr: { "aria-label": "Type new projects here start as" } });
            for (const x of reg.list()) t.createEl("option", { value: x.id, text: x.label });
            t.value = c.type || "generic";
            t.onchange = () => c.type = t.value;
            const up = r.createEl("button", { cls: "clickable-icon", attr: { "aria-label": "Move up" } });
            setIcon2(up, "arrow-up");
            up.onclick = () => i > 0 && (cats.splice(i - 1, 0, cats.splice(i, 1)[0]), draw());
            const del = r.createEl("button", { cls: "clickable-icon", attr: { "aria-label": counts[c.folder] ? "Has projects: move them first" : "Remove" } });
            setIcon2(del, "trash-2");
            del.disabled = !!counts[c.folder];
            del.onclick = () => (cats.splice(i, 1), draw());
          });
        };
        draw();
        const foot = body.createDiv({ cls: "evs-cr-foot" });
        foot.createEl("button", { text: "+ Category" }).onclick = () => {
          cats.push({ folder: "", label: "", icon: "folder", color: "#888888", type: "generic", isNew: true });
          draw();
        };
        foot.createDiv({ cls: "evs-cr-space" });
        foot.createEl("button", { cls: "mod-cta", text: "Save categories" }).onclick = async () => {
          const clean = cats.filter((c) => c.folder && c.label).map(({ isNew, ...c }) => c);
          const folders = clean.map((c) => c.folder.toLowerCase());
          if (new Set(folders).size !== folders.length) return new Notice2("Two categories have the same folder");
          if (folders.includes("archive")) return new Notice2("Archive is always there; pick another name");
          const vault = this.app.vault;
          const text = `---
${stringifyYaml({ categories: clean }).trimEnd()}
---

# Categories

The top-level folders projects live in. Change them in Projects \u2192 Categories. Archive is always there.
`;
          const f = vault.getAbstractFileByPath(CATS);
          if (f) await vault.modify(f, text);
          else await vault.create(CATS, text);
          reg.invalidate();
          this.plugin.store.invalidate();
          new Notice2("Categories saved");
          this.render();
        };
      }
    };
    module2.exports = { ProjectsView: ProjectsView2, Pick };
  }
});

// src/data/automations.js
var require_automations3 = __commonJS({
  "src/data/automations.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2, parseYaml, stringifyYaml } = require("obsidian");
    var A = require_automations();
    var { stamp, clip } = require_util();
    var { parseFeel } = require_recap2();
    var { parseDecisions } = require_decisions();
    var { checklist } = require_workshop();
    var FILE = "_system/Automations.md";
    var LOG = "_system/Automation log.md";
    var LOG_LINES = 300;
    var Automations2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.rules = [];
        this.recent = [];
        this.own = /* @__PURE__ */ new Map();
        this.counts = /* @__PURE__ */ new Map();
        this.tasks = null;
        this.started = 0;
        this.problem = null;
      }
      get state() {
        return this.plugin.settings.automations;
      }
      // ---- rules ----
      async load() {
        const a = this.app.vault.adapter;
        this.problem = null;
        if (!await a.exists(FILE)) {
          this.rules = [];
          return this.rules;
        }
        try {
          const m = (await a.read(FILE)).replace(/\r\n/g, "\n").match(/^---\n([\s\S]*?)\n---/);
          const data = m ? parseYaml(m[1]) || {} : {};
          this.rules = (Array.isArray(data.automations) ? data.automations : []).filter((r) => r && r.id);
        } catch (e) {
          this.problem = `The automations note can't be read: ${e.message}`;
          this.rules = [];
        }
        return this.rules;
      }
      async save(rules) {
        const text = `---
${stringifyYaml({ automations: rules }).trimEnd()}
---

# Automations

Rules that run by themselves. Make and change them in Projects \u2192 Automations (or Ctrl+P \u2192 "Automations"): when something happens, check a few things, then do the actions. What each run did is in [[_system/Automation log|the automation log]].
`;
        this.writing(FILE);
        const f = this.app.vault.getAbstractFileByPath(FILE);
        if (f) await this.app.vault.modify(f, text);
        else await this.app.vault.create(FILE, text);
        this.rules = rules;
      }
      // the starter rules, once (never over yours)
      async seed() {
        if (this.state.seeded) return;
        if (!await this.app.vault.adapter.exists("_system")) await this.app.vault.createFolder("_system");
        await this.load();
        const have = new Set(this.rules.map((r) => r.id));
        await this.save(this.rules.concat(A.STARTERS.filter((s) => !have.has(s.id)).map((s) => JSON.parse(JSON.stringify(s)))));
        this.state.seeded = 1;
        await this.plugin.saveSettings();
      }
      // ---- triggers ----
      async start() {
        await this.seed().catch((e) => console.error("EMX Vault Studio: automations", e));
        await this.load();
        this.started = Date.now();
        const p = this.plugin;
        p.registerEvent(this.app.vault.on("create", (f) => this.onCreate(f)));
        p.registerEvent(this.app.vault.on("modify", (f) => this.onModify(f)));
        p.registerInterval(window.setInterval(() => this.tick(), 6e4));
        window.setTimeout(() => this.tick(), 15e3);
        const today = stamp().slice(0, 10);
        if (this.state.opened !== today) {
          this.state.opened = today;
          await p.saveSettings();
          window.setTimeout(() => this.fire("vault-opened", this.base({})), 8e3);
        }
      }
      writing(path) {
        this.own.set(path, Date.now());
      }
      mine(path) {
        const t = this.own.get(path);
        return t && Date.now() - t < 15e3;
      }
      base(extra) {
        const d = /* @__PURE__ */ new Date();
        return Object.assign({ date: stamp().slice(0, 10), time: { weekday: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][d.getDay()], date: stamp().slice(0, 10) } }, extra);
      }
      projectCtx(p) {
        if (!p) return null;
        const rel = (x) => String(x || "").replace(/\.md$/, "");
        return { name: p.name, type: p.type || "", category: p.section, path: p.path, stage: p.stage || "", hub: rel(p.hub), feedback: rel(p.feel), decisions: rel(p.decisions), brief: p.brief || "" };
      }
      onCreate(f) {
        if (!f || f.extension !== "md" || Date.now() - this.started < 15e3 || this.mine(f.path) || f.path.startsWith("_system/")) return;
        const p = this.plugin.store.find(f.path);
        this.fire("note-created", this.base({ event: "a note was created", note: { path: f.path, name: f.basename, folder: f.path.split("/").slice(0, -1).join("/") }, project: this.projectCtx(p) }));
      }
      // a new "### YYYY-MM-DD…" entry in a project's feedback or decisions note
      async onModify(f) {
        if (!f || f.extension !== "md" || this.mine(f.path)) return;
        const p = this.plugin.store.find(f.path);
        if (!p || f.path !== p.feel && f.path !== p.decisions) return;
        const text = await this.app.vault.cachedRead(f);
        const n = (text.match(/^### \d{4}-\d{2}-\d{2}/gm) || []).length;
        const was = this.counts.get(f.path);
        this.counts.set(f.path, n);
        if (was === void 0 || n <= was) return;
        if (f.path === p.feel) {
          const e = parseFeel(text)[0] || { title: "", quotes: [] };
          this.fire("playtest-added", this.base({ event: "a playtest entry was added", project: this.projectCtx(p), entry: { title: e.title, quotes: e.quotes, heading: e.heading } }));
        } else {
          const d = parseDecisions(text, p)[0] || { title: "" };
          this.fire("decision-added", this.base({ event: "a decision was added", project: this.projectCtx(p), entry: { title: d.title, quotes: [], heading: d.heading } }));
        }
      }
      // after the projects reload: tasks that changed status, checklists that just completed
      async onProjects(projects) {
        const next = /* @__PURE__ */ new Map();
        for (const p of projects) {
          if (!p.hasWorkshop) continue;
          const pj = await this.plugin.workshop.state(p).catch(() => null);
          if (!pj) continue;
          const c = checklist(pj);
          next.set(p.path, { tasks: new Map((pj.tasks || []).map((t) => [t.id, t])), complete: c.complete && c.items.length > 0, stage: c.stage });
          for (const path of [p.feel, p.decisions]) {
            if (!this.counts.has(path)) {
              const raw = await this.plugin.store.read(path);
              if (raw !== null) this.counts.set(path, (raw.match(/^### \d{4}-\d{2}-\d{2}/gm) || []).length);
            }
          }
        }
        const before = this.tasks;
        this.tasks = next;
        if (!before) return;
        for (const p of projects) {
          const now = next.get(p.path), was = before.get(p.path);
          if (!now) continue;
          if (!was) {
            if (before.size) this.fire("project-created", this.base({ event: "a project was created", project: this.projectCtx(p) }));
            continue;
          }
          for (const [id, t] of now.tasks) {
            const old = was.tasks.get(id);
            if (old && old.status === t.status) continue;
            this.fire("task-status", this.base({ event: `${id} moved to ${t.status}`, project: this.projectCtx(p), task: { id, title: t.title, kind: t.kind, status: t.status, from: old ? old.status : "new" } }));
          }
          if (now.complete && !was.complete && now.stage === was.stage) this.fire("checklist-complete", this.base({ event: "the checklist is complete", project: Object.assign(this.projectCtx(p), { stage: now.stage }) }));
        }
      }
      recapWritten(paths) {
        for (const path of paths) this.fire("recap-written", this.base({ event: "a recap note was written", note: { path, name: path.split("/").pop().replace(/\.md$/, "") }, project: this.projectCtx(this.plugin.store.find(path)) }));
      }
      async tick() {
        await this.load();
        const last = this.state.lastRun;
        let changed = false;
        for (const r of this.rules.filter((x) => x.on && x.when && x.when.event === "schedule")) {
          if (!last[r.id]) {
            last[r.id] = Date.now();
            changed = true;
            continue;
          }
          if (A.due(r.when, last[r.id])) {
            last[r.id] = Date.now();
            changed = true;
            this.run(r, this.base({ event: "its schedule" }), { key: `schedule:${A.lastDue(r.when)}` });
          }
        }
        if (changed) await this.plugin.saveSettings();
      }
      async fire(event, ctx) {
        if (!this.state.on) return;
        await this.load();
        for (const r of this.rules) if (A.matches(r, event, ctx)) this.run(r, ctx);
      }
      // ---- running ----
      // runs a rule's actions in order; dry: say what would happen without doing it. Returns { status, steps }
      async run(rule, ctx, { dry = false, key } = {}) {
        const k = key || `${rule.id}|${ctx.project && ctx.project.path || ""}|${ctx.task ? ctx.task.id + ctx.task.status : ""}|${ctx.note ? ctx.note.path : ""}|${ctx.entry ? ctx.entry.heading || "" : ""}`;
        if (!dry) {
          const ok = A.allowed(this.recent, rule.id, k);
          if (!ok.ok) {
            await this.log(rule, ctx, "skipped", ok.why);
            return { status: "skipped", steps: [], why: ok.why };
          }
          this.recent.push({ rule: rule.id, key: k, at: Date.now() });
          this.recent = this.recent.filter((h) => Date.now() - h.at < 36e5);
        }
        const steps = [];
        let status = "ok";
        for (const a of rule.then || []) {
          try {
            const what = await this.action(a, ctx, rule, dry);
            steps.push({ action: a.action, ok: true, what });
          } catch (e) {
            steps.push({ action: a.action, ok: false, what: e.message });
            status = "failed";
            if (rule.onError !== "continue") break;
          }
        }
        if (!dry) {
          await this.log(rule, ctx, status, steps.map((s) => `${s.ok ? "\u2713" : "\u2717"} ${s.what}`).join("; "));
          if (status === "failed" && this.plugin.notify) this.plugin.notify(`Automation "${rule.name}" failed: ${steps[steps.length - 1].what}`, 8e3);
        }
        return { status, steps };
      }
      async action(a, ctx, rule, dry) {
        const f = (s) => A.fill(s, ctx);
        const p = ctx.project && (this.plugin.store.cache || []).find((x) => x.path === ctx.project.path);
        const vault = this.app.vault;
        switch (a.action) {
          case "notify": {
            const msg = f(a.message || rule.name).replace(/^[\s:·,-]+/, "").trim() || rule.name;
            if (!dry) new Notice2(msg, 8e3);
            return `notice: ${clip(msg, 120)}`;
          }
          case "create-note": {
            const path = f(a.path).replace(/[\\:*?"<>|]/g, "-");
            if (!/\.md$/.test(path)) throw new Error("the note's path must end in .md");
            if (await vault.adapter.exists(path)) return `${path} is already there (left as it was)`;
            if (dry) return `would make ${path}`;
            const dir = path.split("/").slice(0, -1).join("/");
            if (dir && !await vault.adapter.exists(dir)) await vault.createFolder(dir);
            this.writing(path);
            const file = await vault.create(path, f(a.content || ""));
            if (a.open) this.app.workspace.getLeaf("tab").openFile(file);
            return `made ${path}`;
          }
          case "append-note": {
            const path = f(a.path);
            const file = vault.getAbstractFileByPath(path);
            if (!file) throw new Error(`no note at ${path}`);
            if (dry) return `would add a line to ${path}`;
            this.writing(path);
            await vault.process(file, (t) => t.replace(/\s*$/, "\n") + f(a.text) + "\n");
            return `added to ${path}`;
          }
          case "add-task": {
            if (!p) throw new Error("no project here");
            if (!p.hasWorkshop) throw new Error(`${p.name} has no Workshop project`);
            const args = ["task", "add", f(a.title)];
            if (a.details) args.push("--details", f(a.details));
            if (a.kind) args.push("--kind", a.kind);
            if (dry) return `would add the task "${f(a.title)}" to ${p.name}`;
            const out = await this.plugin.workshop.run(p, args);
            return out || "task added";
          }
          case "task-note": {
            if (!p || !ctx.task) throw new Error("no task here");
            if (dry) return `would note on ${ctx.task.id}: ${f(a.text)}`;
            await this.plugin.workshop.run(p, ["task", "note", ctx.task.id, f(a.text)]);
            return `noted on ${ctx.task.id}`;
          }
          case "open-view": {
            if (dry) return `would open ${a.view}`;
            const v = a.view;
            if (v === "note") this.app.workspace.openLinkText(f(a.note), "", false);
            else ({ mission: () => this.plugin.openMission(), recap: () => this.plugin.openRecap(p ? { only: p.path } : {}), tasks: () => this.plugin.openTasks(p && p.path), decisions: () => this.plugin.openDecisions(p ? { only: p.path } : {}), projects: () => this.plugin.openProjects(), graph: () => this.plugin.openGraph(), timeline: () => this.plugin.openTimeline() }[v] || (() => {
            }))();
            return `opened ${v}`;
          }
          case "copy-prompt": {
            const text = f(a.text);
            if (!dry) {
              await navigator.clipboard.writeText(text);
              new Notice2(`Copied a prompt for Claude (${rule.name})`);
            }
            return `${dry ? "would copy" : "copied"} a prompt (${text.length} characters)`;
          }
          case "run-tool": {
            if (!p) throw new Error("no project here");
            const t = ((this.plugin.types.get(p.type) || {}).tools || []).find((x) => x.label === a.tool && x.run);
            if (!t) throw new Error(`${p.name}'s type has no tool "${a.tool}" that runs something`);
            const dir = this.plugin.workshop.repoDir(p);
            if (!dir) throw new Error(`${p.name} has no repo`);
            const cmd = require_types().render(t.run, { slug: dir.split(/[\\/]/).pop(), name: p.name });
            if (dry) return `would run "${cmd}" in ${dir}`;
            const out = await this.exec(cmd, dir, 10 * 6e4);
            return `ran "${cmd}": ${clip(out.split("\n").filter(Boolean).pop() || "done", 100)}`;
          }
          case "write-recaps": {
            if (dry) return "would write the recap notes";
            const w = await this.plugin.recaps.writeNotes({ force: true });
            return `recap notes updated: ${w.length}`;
          }
          case "rebuild-briefs": {
            if (dry) return "would rebuild the briefs and vault index";
            this.plugin.store.invalidate();
            await this.plugin.briefs.writeAll();
            return "briefs rebuilt";
          }
          case "backup-now": {
            if (dry) return "would back up the vault";
            const s = await this.plugin.backup.run({ manual: true });
            if (s.result !== "ok") throw new Error(this.plugin.backup.describe());
            return `backup: ${s.detail}`;
          }
          case "ask-claude": {
            const path = f(a.path).replace(/[\\:*?"<>|]/g, "-");
            if (dry) return `would ask Claude (read-only on the vault) and write its answer to ${path}`;
            const out = await this.askClaude(f(a.prompt));
            const dir = path.split("/").slice(0, -1).join("/");
            if (dir && !await vault.adapter.exists(dir)) await vault.createFolder(dir);
            const body = `> [!idea] Written by Claude, not checked
> From the automation "${rule.name}" on ${stamp()}. Claude could read the vault but not change it.

${out.trim()}
`;
            this.writing(path);
            const ex = vault.getAbstractFileByPath(path);
            if (ex) await vault.modify(ex, body);
            else await vault.create(path, body);
            return `Claude's answer is in ${path}`;
          }
          default:
            throw new Error(`unknown action ${a.action}`);
        }
      }
      exec(cmd, cwd, timeout) {
        const cp = require("child_process");
        return new Promise((resolve, reject) => {
          cp.exec(cmd, { cwd, timeout, windowsHide: true, maxBuffer: 8 * 1024 * 1024 }, (e, out, err) => e ? reject(new Error(String(err || out || e.message).trim().split("\n").pop() || e.message)) : resolve(String(out || "")));
        });
      }
      // Claude Code, headless, allowed only to read: the answer comes back as text
      askClaude(prompt) {
        const cp = require("child_process");
        const cwd = this.app.vault.adapter.getBasePath();
        return new Promise((resolve, reject) => {
          const child = cp.spawn("claude", ["-p", "--allowedTools", "Read,Glob,Grep", "--output-format", "text"], { cwd, shell: true, windowsHide: true });
          child.stdin.end(prompt);
          let out = "", err = "";
          const timer = setTimeout(() => {
            child.kill();
            reject(new Error("Claude took longer than 6 minutes"));
          }, 6 * 6e4);
          child.stdout.on("data", (d) => out += d);
          child.stderr.on("data", (d) => err += d);
          child.on("error", (e) => {
            clearTimeout(timer);
            reject(new Error(e.code === "ENOENT" ? "Claude Code (claude) isn't installed or not on PATH" : e.message));
          });
          child.on("close", (code) => {
            clearTimeout(timer);
            if (code === 0 && out.trim()) resolve(out);
            else reject(new Error((err || out || `claude stopped with code ${code}`).trim().split("\n").pop()));
          });
        });
      }
      // the log: newest first, one line per run
      async log(rule, ctx, status, detail) {
        const line = `- ${stamp()} \xB7 ${status === "ok" ? "\u2713" : status === "skipped" ? "\u2013" : "\u2717"} **${rule.name}** \xB7 ${ctx.project ? ctx.project.name + " \xB7 " : ""}${ctx.event || ""} \xB7 ${clip(String(detail || "").replace(/\n/g, " "), 300)}`;
        this.history = [{ at: Date.now(), rule: rule.id, status, detail, project: ctx.project && ctx.project.name, event: ctx.event }].concat(this.history || []).slice(0, 200);
        try {
          const a = this.app.vault.adapter;
          const head = "# Automation log\n\nWhat each automation did, newest first (the last 300 runs). Made by EMX Vault Studio.\n\n";
          const old = await a.exists(LOG) ? (await a.read(LOG)).split("\n").filter((l) => l.startsWith("- ")) : [];
          this.writing(LOG);
          const text = head + [line].concat(old).slice(0, LOG_LINES).join("\n") + "\n";
          const f = this.app.vault.getAbstractFileByPath(LOG);
          if (f) await this.app.vault.modify(f, text);
          else await this.app.vault.create(LOG, text);
        } catch (e) {
          console.error("EMX Vault Studio: automation log", e);
        }
      }
      // parsed log lines for the builder's History: [{ when, status, rule, rest }]
      async readLog() {
        const a = this.app.vault.adapter;
        if (!await a.exists(LOG)) return [];
        return (await a.read(LOG)).split("\n").filter((l) => l.startsWith("- ")).map((l) => {
          const m = l.match(/^- (\S+ \S+) · (\S) \*\*(.+?)\*\* · (.*)$/);
          return m ? { when: m[1], status: m[2], rule: m[3], rest: m[4] } : { when: "", status: "", rule: "", rest: l.slice(2) };
        });
      }
    };
    module2.exports = { Automations: Automations2, FILE, LOG };
  }
});

// src/data/holo.js
var require_holo = __commonJS({
  "src/data/holo.js"(exports2, module2) {
    "use strict";
    var HOME = () => require("path").join(process.env.APPDATA || "", "EMX Holo IDE");
    var HoloLink2 = class {
      constructor(plugin) {
        this.plugin = plugin;
      }
      node() {
        return { fs: require("fs"), path: require("path"), http: require("http"), cp: require("child_process") };
      }
      read(file) {
        const { fs, path } = this.node();
        try {
          return JSON.parse(fs.readFileSync(path.join(HOME(), file), "utf8"));
        } catch (e) {
          return null;
        }
      }
      installed() {
        return !!this.read("mcp/launch.json") || require("fs").existsSync(HOME());
      }
      // [{ root, collection, favorite, name }] from Holo's organizer, plus when each was last opened
      favorites() {
        const org = this.read("project-organizer.json");
        const list = Array.isArray(org) ? org : org ? Object.values(org) : [];
        const recent = this.read("recent-projects.json") || [];
        return list.filter((x) => x && x.root && x.favorite).map((x) => {
          const r = recent.find((y) => y.root === x.root);
          return { root: x.root, collection: x.collection || "", name: r && r.name || x.root.split(/[\\/]/).pop(), lastOpened: r ? Date.parse(r.lastOpened) : 0 };
        });
      }
      key(dir) {
        const { fs, path } = this.node();
        try {
          return fs.realpathSync(dir).toLowerCase();
        } catch (e) {
          return path.resolve(dir).toLowerCase();
        }
      }
      // vault project path → its Holo favorite (if it is one); and Holo favorites that aren't vault projects
      match(projects) {
        const byDir = /* @__PURE__ */ new Map();
        for (const p of projects) {
          const d = this.plugin.workshop.repoDir(p);
          if (d) byDir.set(this.key(d), p);
        }
        const linked = /* @__PURE__ */ new Map(), loose = [];
        for (const f of this.favorites()) {
          const p = byDir.get(this.key(f.root));
          if (p) linked.set(p.path, f);
          else loose.push(f);
        }
        return { linked, loose };
      }
      request(method, route, body) {
        const ep = this.read("mcp/endpoint.json");
        if (!ep || !ep.port) return Promise.reject(new Error("Holo's link isn't set up: open Holo once and turn on its MCP server (Connections)"));
        const { http } = this.node();
        const payload = body ? Buffer.from(JSON.stringify(body)) : null;
        return new Promise((resolve, reject) => {
          const req = http.request({ host: "127.0.0.1", port: ep.port, path: route, method, timeout: 2e4, headers: Object.assign({ authorization: `Bearer ${ep.token}` }, payload ? { "content-type": "application/json", "content-length": payload.length } : {}) }, (res) => {
            let data = "";
            res.on("data", (d) => data += d);
            res.on("end", () => {
              try {
                resolve(JSON.parse(data || "{}"));
              } catch (e) {
                reject(new Error(`Holo answered: ${data.slice(0, 120)}`));
              }
            });
          });
          req.on("timeout", () => req.destroy(new Error("Holo didn't answer in time")));
          req.on("error", reject);
          if (payload) req.write(payload);
          req.end();
        });
      }
      async alive() {
        try {
          return !!(await this.request("GET", "/health")).ok;
        } catch (e) {
          return false;
        }
      }
      // starts Holo the way its own bridge does, and waits until it answers
      async start() {
        const launch = this.read("mcp/launch.json");
        if (!launch || !launch.exe) throw new Error("EMX Holo IDE isn't installed here (or hasn't been opened once)");
        const { cp } = this.node();
        cp.spawn(launch.exe, launch.args || [], { detached: true, stdio: "ignore", windowsHide: false }).unref();
        for (let i = 0; i < 40; i++) {
          await new Promise((r) => setTimeout(r, 500));
          if (await this.alive()) return true;
        }
        throw new Error("Holo started but its link didn't answer: turn on its MCP server in Connections");
      }
      // opens a folder in Holo; returns Holo's own words about it
      async open(dir) {
        if (!dir) throw new Error("This project has no folder to open");
        if (!await this.alive()) await this.start();
        const r = await this.request("POST", "/call", { name: "holo_open_project", arguments: { path: dir } });
        const text = (r && r.content || []).map((c) => c.text).filter(Boolean).join(" ") || r && (r.message || r.error) || "";
        if (r && (r.isError || r.error)) throw new Error(text || "Holo refused");
        try {
          const j = JSON.parse(text);
          if (j && j.opened) return `Opened ${String(j.opened).split(/[\\/]/).pop()} in Holo${j.files ? ` (${j.files} files)` : ""}`;
        } catch (e) {
        }
        return text || "Opened in Holo";
      }
      openProject(p) {
        return this.open(this.plugin.workshop.repoDir(p));
      }
    };
    module2.exports = { HoloLink: HoloLink2 };
  }
});

// src/core/blueprints.js
var require_blueprints2 = __commonJS({
  "src/core/blueprints.js"(exports2, module2) {
    "use strict";
    var { notePaths, render, slugify } = require_types();
    var { vars, notesFor } = require_setup();
    var FORMAT = "emx-blueprint-v1";
    function exportBlueprint(typeId, rawTypes, rules = [], { date = "" } = {}) {
      const chain = [];
      let id = typeId;
      const seen = /* @__PURE__ */ new Set();
      while (id && rawTypes.has(id) && !seen.has(id)) {
        seen.add(id);
        const d = JSON.parse(JSON.stringify(rawTypes.get(id)));
        delete d.file;
        chain.unshift(d);
        id = d.extends;
      }
      if (!chain.length) throw new Error(`No type "${typeId}"`);
      const top = chain[chain.length - 1];
      const want = new Set((top.automations || []).concat(...chain.map((d) => d.automations || [])));
      const automations = rules.filter((r) => want.has(r.id)).map((r) => Object.assign(JSON.parse(JSON.stringify(r)), { on: false }));
      return { format: FORMAT, name: top.label, type: top.id, version: top.version || 1, exported: date, types: chain, automations };
    }
    function planImport(bp, rawTypes, rules = []) {
      const problems = [];
      if (!bp || bp.format !== FORMAT) problems.push("This isn't an EMX blueprint file");
      if (!bp || !Array.isArray(bp.types) || !bp.types.length) problems.push("It has no project types inside");
      if (problems.length) return { problems, steps: [], renames: {} };
      const renames = {};
      const steps = [];
      const same = (a, b) => {
        const strip = (x) => JSON.stringify(Object.assign({}, x, { file: void 0, version: void 0, changelog: void 0 }));
        return strip(a) === strip(b);
      };
      for (const t of bp.types) {
        if (!t || !t.id || !t.label) {
          problems.push("A type inside has no id or name");
          continue;
        }
        const here = rawTypes.get(t.id);
        if (!here) steps.push({ kind: "type", id: t.id, newId: t.id, label: t.label, action: "add" });
        else if (same(here, t)) steps.push({ kind: "type", id: t.id, newId: t.id, label: t.label, action: "same" });
        else {
          let n = 2, nid = `${t.id}-${n}`;
          while (rawTypes.has(nid)) nid = `${t.id}-${++n}`;
          renames[t.id] = nid;
          steps.push({ kind: "type", id: t.id, newId: nid, label: `${t.label} (${n})`, action: "rename" });
        }
      }
      const byId = new Map(rules.map((r) => [r.id, r]));
      const plain = (r) => JSON.stringify(Object.assign({}, r, { on: void 0 }));
      for (const r of bp.automations || []) {
        if (!r || !r.id) continue;
        const here = byId.get(r.id);
        const action = !here ? "add" : plain(here) === plain(r) ? "same" : "rename";
        steps.push({ kind: "automation", id: r.id, newId: action === "rename" ? `${r.id}-imported` : r.id, label: r.name || r.id, action });
      }
      return { problems, steps, renames };
    }
    function importedTypes(bp, plan) {
      const out = [];
      for (const s of plan.steps.filter((x) => x.kind === "type" && x.action !== "same")) {
        const t = JSON.parse(JSON.stringify(bp.types.find((x) => x.id === s.id)));
        t.id = s.newId;
        if (s.action === "rename") t.label = s.label;
        if (t.extends && plan.renames[t.extends]) t.extends = plan.renames[t.extends];
        delete t.file;
        t.changelog = [`imported from the blueprint "${bp.name}"`].concat(t.changelog || []).slice(0, 50);
        out.push(t);
      }
      return out;
    }
    function planMigration(p, type, { exists, hub = "", date = "", repoDir = "" }) {
      const steps = [];
      if (!type) return steps;
      const v = vars({ name: p.name, type, category: p.section, folder: p.path, repoDir: repoDir || "(no repo)", description: firstWhatItIs(hub), date });
      for (const n of notesFor(type, v)) {
        if (n.key === "hub") continue;
        const classic = notePaths(p.path, p.name, null)[n.key];
        if (exists(n.path) || classic && exists(classic)) continue;
        steps.push({ kind: "note", key: n.key, path: n.path, text: n.text });
      }
      if (hub && !/^## Done means/m.test(hub) && (type.done || []).length) {
        steps.push({ kind: "section", heading: "Done means", text: `## Done means

A task is done only when all of these hold (Claude checks before saying done):

${type.done.map((d) => `- ${d}`).join("\n")}
` });
      }
      const at = +((String(hub).match(/^emx-type-version:\s*(\d+)/m) || [])[1] || 0);
      if (type.version && at < type.version && steps.length) steps.push({ kind: "version", from: at, to: type.version });
      return steps;
    }
    function firstWhatItIs(hub) {
      const m = String(hub || "").match(/^## What it is\s*\n+([^\n#][^\n]*)/m);
      return m ? m[1].trim() : "";
    }
    function hubWithSection(hub, text) {
      const i = String(hub).search(/^## Where things are/m);
      return i === -1 ? String(hub).replace(/\s*$/, "\n\n") + text : hub.slice(0, i) + text + "\n" + hub.slice(i);
    }
    module2.exports = { FORMAT, exportBlueprint, planImport, importedTypes, planMigration, hubWithSection, slugify, render };
  }
});

// src/data/blueprints.js
var require_blueprints3 = __commonJS({
  "src/data/blueprints.js"(exports2, module2) {
    "use strict";
    var { planMigration, exportBlueprint, planImport, importedTypes, hubWithSection } = require_blueprints2();
    var { stamp } = require_util();
    var DIR = "_system/Blueprints";
    var Blueprints2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.app = plugin.app;
        this.whereCache = /* @__PURE__ */ new Map();
      }
      node() {
        return { fs: require("fs"), path: require("path"), os: require("os"), cp: require("child_process") };
      }
      // is a command on PATH (cached for a minute)
      where(tool) {
        const hit = this.whereCache.get(tool);
        if (hit && Date.now() - hit.at < 6e4) return Promise.resolve(hit.ok);
        const { cp } = this.node();
        return new Promise((res) => cp.execFile("where", [tool], { windowsHide: true, timeout: 5e3 }, (e) => {
          this.whereCache.set(tool, { at: Date.now(), ok: !e });
          res(!e);
        }));
      }
      skillInstalled(name) {
        const { fs, path, os } = this.node();
        const home = path.join(os.homedir(), ".claude");
        if (fs.existsSync(path.join(home, "skills", name))) return true;
        try {
          const stack = [path.join(home, "plugins")];
          let n = 0;
          while (stack.length && n++ < 4e3) {
            const d = stack.pop();
            for (const e of fs.readdirSync(d, { withFileTypes: true })) {
              if (!e.isDirectory()) continue;
              if (e.name === name && path.basename(d) === "skills") return true;
              if (!e.name.startsWith(".")) stack.push(path.join(d, e.name));
            }
          }
        } catch (e) {
        }
        return false;
      }
      // what a type needs and whether it's here: [{ kind, name, ok, hint }]
      async deps(type) {
        const out = [];
        if (!type) return out;
        const { fs, path } = this.node();
        const req = type.requires || {};
        for (const tool of req.tools || []) out.push({ kind: "Tool", name: tool, ok: await this.where(tool), hint: "install it so it's on PATH" });
        for (const app of req.apps || []) out.push({ kind: "App", name: app, ok: null, hint: "can't be checked: make sure it's installed" });
        for (const s of type.claude && type.claude.skills || []) out.push({ kind: "Claude skill", name: s, ok: this.skillInstalled(s), hint: "add it to Claude Code (skills or a plugin)" });
        if (type.workshop && type.workshop.create !== false) {
          const prof = type.workshop.profile || "tool";
          let ok = false;
          try {
            ok = fs.existsSync(path.join(this.plugin.setup.workshopHome(), "profiles", `${prof}.json`));
          } catch (e) {
            ok = false;
          }
          out.push({ kind: "Workshop profile", name: prof, ok, hint: "Workshop needs this profile to make the project" });
        }
        for (const id of (type.chain || []).slice(0, -1)) out.push({ kind: "Builds on", name: (this.plugin.types.get(id) || { label: id }).label, ok: !!this.plugin.types.get(id), hint: "import or make that type" });
        return out;
      }
      // ---- migration ----
      async pending() {
        const out = [];
        for (const p of (await this.plugin.store.all()).filter((x) => x.section !== "Archive")) {
          const type = this.plugin.types.get(p.type);
          if (!type) continue;
          const hub = await this.plugin.store.read(p.hub) || "";
          const known = /* @__PURE__ */ new Set();
          for (const f of this.app.vault.getMarkdownFiles()) if (f.path.startsWith(p.path + "/")) known.add(f.path);
          const steps = planMigration(p, type, { exists: (x) => known.has(x) || false, hub, date: stamp().slice(0, 10), repoDir: this.plugin.workshop.repoDir(p) || "" });
          if (steps.length) out.push({ p, type, steps });
        }
        return out;
      }
      async migrate(p, steps) {
        const vault = this.app.vault;
        const done = [];
        for (const s of steps) {
          if (s.kind === "note") {
            if (await vault.adapter.exists(s.path)) continue;
            await vault.create(s.path, s.text);
            done.push(`added ${s.path.split("/").pop()}`);
          } else if (s.kind === "section") {
            const f = vault.getAbstractFileByPath(p.hub);
            if (!f) continue;
            await vault.process(f, (t) => new RegExp(`^## ${s.heading}`, "m").test(t) ? t : hubWithSection(t, s.text));
            done.push(`added "${s.heading}" to the hub`);
          } else if (s.kind === "version") {
            const f = vault.getAbstractFileByPath(p.hub);
            if (!f) continue;
            await this.app.fileManager.processFrontMatter(f, (fm) => {
              fm["emx-type"] = fm["emx-type"] || p.type;
              fm["emx-type-version"] = s.to;
            });
            done.push(`now on ${p.type} version ${s.to}`);
          }
        }
        return done;
      }
      // ---- export and import ----
      async export(typeId) {
        await this.plugin.automations.load();
        const bp = exportBlueprint(typeId, this.plugin.types.raw, this.plugin.automations.rules, { date: stamp() });
        const vault = this.app.vault;
        if (!await vault.adapter.exists(DIR)) await vault.createFolder(DIR);
        const path = `${DIR}/${bp.name.replace(/[\\/:*?"<>|]/g, "-")}.emx-blueprint.json`;
        await vault.adapter.write(path, JSON.stringify(bp, null, 2) + "\n");
        return { path, full: require("path").join(vault.adapter.getBasePath(), path), bp };
      }
      preview(text) {
        let bp;
        try {
          bp = JSON.parse(text);
        } catch (e) {
          return { bp: null, plan: { problems: [`Not a readable file: ${e.message}`], steps: [], renames: {} } };
        }
        return { bp, plan: planImport(bp, this.plugin.types.raw, this.plugin.automations.rules) };
      }
      async import(bp, plan) {
        const saved = [];
        for (const t of importedTypes(bp, plan)) saved.push((await this.plugin.types.save(t, `imported from "${bp.name}"`)).label);
        const add = [];
        for (const s of plan.steps.filter((x) => x.kind === "automation" && x.action !== "same")) {
          const r = JSON.parse(JSON.stringify(bp.automations.find((x) => x.id === s.id)));
          r.id = s.newId;
          r.on = false;
          add.push(r);
        }
        if (add.length) {
          await this.plugin.automations.load();
          await this.plugin.automations.save(this.plugin.automations.rules.concat(add));
        }
        this.plugin.store.invalidate();
        return { types: saved, automations: add.map((r) => r.name) };
      }
    };
    module2.exports = { Blueprints: Blueprints2, DIR };
  }
});

// src/views/guard.js
var require_guard2 = __commonJS({
  "src/views/guard.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2, editorInfoField, setIcon: setIcon2 } = require("obsidian");
    var { clip } = require_util();
    var { TextPrompt } = require_tasks();
    function findingCard(plugin, f, { onChange } = {}) {
      const el = createDiv({ cls: "evs-guard-card" });
      const head = el.createDiv({ cls: "evs-guard-head" });
      setIcon2(head.createSpan({ cls: "evs-guard-icon" }), "shield-alert");
      head.createSpan({ cls: "evs-guard-badge is-checked", text: "Checked conflict" });
      if (f.dismissed) head.createSpan({ cls: "evs-guard-badge", text: "reviewed" });
      el.createDiv({ cls: "evs-guard-why", text: f.why });
      const d = f.decision;
      const dec = el.createDiv({ cls: "evs-guard-dec" });
      dec.createDiv({ cls: "evs-guard-dec-title", text: `${d.kind === "rule" ? "Rule" : d.date}: ${d.title}` });
      if (d.chose) dec.createDiv({ cls: "evs-guard-dec-text", text: clip(d.chose, 260) });
      if (d.why) dec.createDiv({ cls: "evs-guard-dec-why", text: `Why: ${clip(d.why, 200)}` });
      if (f.instead) el.createDiv({ cls: "evs-guard-alt", text: `Decided instead: ${clip(f.instead, 200)}` });
      const st = plugin.guard.reviews[d.id];
      if (st && st.status === "needs-review") el.createDiv({ cls: "evs-guard-note", text: "This decision itself may need a review: open the Decisions dashboard to see why." });
      const row = el.createDiv({ cls: "evs-guard-actions" });
      const btn = (icon, text, fn) => {
        const b = row.createEl("button");
        setIcon2(b.createSpan(), icon);
        b.createSpan({ text });
        b.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          fn();
        };
      };
      btn("gavel", "Open decision", () => plugin.app.workspace.openLinkText(d.kind === "rule" ? d.path : `${d.path}#${d.heading}`, "", false));
      if (f.dismissed)
        btn("rotate-ccw", "Warn again", async () => {
          await plugin.guard.restore(f.key);
          onChange && onChange();
        });
      else
        btn(
          "check",
          "Reviewed",
          () => new TextPrompt(plugin.app, { title: "Mark this warning reviewed", label: "Why it's fine (optional): kept with the warning, which stays visible in the Decisions dashboard.", button: "Mark reviewed", optional: true }, async (reason) => {
            await plugin.guard.dismiss(f.key, reason);
            plugin.refreshGuard();
            onChange && onChange();
          }).open()
        );
      btn("bot", "Ask Claude", async () => {
        const p = plugin.store.find(d.path);
        await navigator.clipboard.writeText(plugin.guard.claudePrompt(p, { where: f.task ? `task ${f.task}` : f.path, text: f.match ? `\u2026${f.match}\u2026

${f.why}` : "", decisions: [d] }));
        new Notice2("Copied a prompt for Claude: its answer lands in the project's Decision review note, marked as Claude's suggestion");
      });
      btn("layout-list", "Dashboard", () => plugin.openDecisions({ decision: d.id }));
      return el;
    }
    function guardEditorExtension2(plugin) {
      let cm;
      try {
        cm = require("@codemirror/view");
      } catch (e) {
        return [];
      }
      const pathOf = (state) => {
        try {
          const info = state.field(editorInfoField);
          return info && info.file && info.file.path || "";
        } catch (e) {
          return "";
        }
      };
      const find = (view) => {
        const s = plugin.settings.decisions;
        const path = pathOf(view.state);
        if (!s.on || !s.editor || !plugin.guard.byProject.size || plugin.guard.skips(path)) return [];
        const doc = view.state.doc;
        const out = [];
        for (const r of view.visibleRanges) {
          const from = Math.max(0, r.from - 400), to = Math.min(doc.length, r.to + 400);
          for (const f of plugin.guard.checkText(path, doc.sliceString(from, to))) {
            if (f.dismissed) continue;
            out.push(Object.assign(f, { from: f.from + from, to: f.to + from }));
          }
        }
        const seen = /* @__PURE__ */ new Set();
        return out.filter((f) => !seen.has(f.from) && seen.add(f.from)).sort((a, b) => a.from - b.from);
      };
      const mark = cm.Decoration.mark({ class: "evs-guard-mark" });
      const build = (findings) => cm.Decoration.set(findings.map((f) => mark.range(f.from, f.to)), true);
      const plug = cm.ViewPlugin.fromClass(
        class {
          constructor(view) {
            this.findings = find(view);
            this.decorations = build(this.findings);
            this.timer = null;
            plugin.guardViews.add(this);
            this.view = view;
          }
          update(u) {
            if (!u.docChanged && !u.viewportChanged && !u.transactions.some((t) => t.reconfigured)) return;
            if (u.docChanged) this.decorations = this.decorations.map(u.changes);
            clearTimeout(this.timer);
            this.timer = setTimeout(() => this.refresh(), u.docChanged ? 500 : 80);
          }
          refresh() {
            this.findings = find(this.view);
            this.decorations = build(this.findings);
            this.view.dispatch({ effects: [] });
          }
          destroy() {
            clearTimeout(this.timer);
            plugin.guardViews.delete(this);
          }
        },
        { decorations: (v) => v.decorations }
      );
      const tip = cm.hoverTooltip((view, pos) => {
        const p = view.plugin(plug);
        const f = p && p.findings.find((x) => pos >= x.from && pos <= x.to);
        if (!f) return null;
        return { pos: f.from, end: f.to, above: true, create: () => ({ dom: findingCard(plugin, f, { onChange: () => p.refresh() }) }) };
      });
      return [plug, tip];
    }
    module2.exports = { guardEditorExtension: guardEditorExtension2, findingCard };
  }
});

// src/views/decisions.js
var require_decisions2 = __commonJS({
  "src/views/decisions.js"(exports2, module2) {
    "use strict";
    var { ItemView, Notice: Notice2, setIcon: setIcon2 } = require("obsidian");
    var { DECISIONS: DECISIONS2 } = require_constants();
    var { STATUS_LABELS } = require_decisions();
    var { ago, clip } = require_util();
    var { findingCard } = require_guard2();
    var { TextPrompt } = require_tasks();
    var FILTERS = [["all", "All"], ["needs-review", "Needs review"], ["active", "Active"], ["rule", "Rules"], ["reviewed", "Still valid"], ["superseded", "Superseded"], ["outdated", "Outdated"]];
    var DecisionsView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.status = "all";
        this.only = null;
        this.query = "";
        this.selected = null;
        this.tab = "decisions";
        this.mapOpen = true;
      }
      getViewType() {
        return DECISIONS2;
      }
      getDisplayText() {
        return "Decisions";
      }
      getIcon() {
        return "gavel";
      }
      getState() {
        return { status: this.status, only: this.only, selected: this.selected, tab: this.tab };
      }
      async setState(state, result) {
        if (state) {
          for (const k of ["status", "only", "selected", "tab"]) if (k in state && state[k] !== void 0) this[k] = state[k];
        }
        await super.setState(state, result);
        await this.render();
      }
      async onOpen() {
        this.contentEl.addClass("evs-decisions-view");
        await this.render();
      }
      go(patch) {
        Object.assign(this, patch);
        this.app.workspace.requestSaveLayout();
        this.render();
      }
      link(path, sub) {
        this.app.workspace.openLinkText(sub ? `${path}#${sub}` : path, "", false);
      }
      color(projectPath) {
        const p = (this.plugin.store.cache || []).find((x) => x.path === projectPath);
        return p ? this.plugin.projStyle(p).color : "var(--evs-accent)";
      }
      async render({ rescan = false } = {}) {
        const g = this.plugin.guard, el = this.contentEl;
        el.empty();
        el.createDiv({ cls: "evs-hint", text: "Reading decisions\u2026" });
        await g.index();
        if (rescan || !g.scannedAt || Date.now() - g.scannedAt > 12e4) await g.scan();
        el.empty();
        const head = el.createDiv({ cls: "evs-dc-head" });
        head.createDiv({ cls: "evs-dc-title", text: "Decision intelligence" });
        const tools = head.createDiv({ cls: "evs-dc-tools" });
        const tool = (icon, label, fn) => {
          const b = tools.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = fn;
        };
        tool("rotate-cw", "Scan again", () => this.render({ rescan: true }));
        tool("bot", "Copy a Claude review of this project's decisions", () => this.askClaude());
        const all = g.all, revs = g.reviews;
        const open = g.openFindings(), dismissed = [...g.findings.values()].flat().filter((f) => f.dismissed);
        const stats = el.createDiv({ cls: "evs-dc-stats" });
        const stat = (n, label, fn, cls = "") => {
          const s = stats.createDiv({ cls: "evs-dc-stat " + cls + (n ? "" : " is-zero") });
          s.createDiv({ cls: "evs-dc-n", text: String(n) });
          s.createDiv({ cls: "evs-dc-l", text: label });
          if (fn) s.onclick = fn;
        };
        stat(all.filter((d) => d.kind === "decision").length, "decisions", () => this.go({ tab: "decisions", status: "all" }));
        stat(all.filter((d) => d.kind === "rule").length, "hub rules", () => this.go({ tab: "decisions", status: "rule" }));
        stat(all.filter((d) => (revs[d.id] || {}).status === "needs-review").length, "need review", () => this.go({ tab: "decisions", status: "needs-review" }), "is-warn");
        stat(open.length, "checked conflicts", () => this.go({ tab: "conflicts" }), "is-bad");
        stat(g.suggestions.length, "Claude suggestions", () => this.go({ tab: "suggestions" }), "is-ai");
        stat(dismissed.length, "reviewed warnings", () => this.go({ tab: "conflicts" }));
        const bar = el.createDiv({ cls: "evs-dc-bar" });
        const tabs = bar.createDiv({ cls: "evs-rc-tabs" });
        for (const [k, label] of [["decisions", "Decisions"], ["conflicts", "Conflicts"], ["suggestions", "Claude's suggestions"]]) {
          tabs.createEl("button", { text: label, cls: this.tab === k ? "is-active" : "" }).onclick = () => this.go({ tab: k });
        }
        const pick = bar.createEl("select", { cls: "dropdown" });
        pick.createEl("option", { value: "", text: "All projects" });
        for (const [path, e] of g.byProject) if (e.decisions.length) pick.createEl("option", { value: path, text: `${e.project.name} (${e.decisions.length})` });
        pick.value = this.only || "";
        pick.onchange = () => this.go({ only: pick.value || null, selected: null });
        const search = bar.createEl("input", { type: "search", attr: { placeholder: "Search decisions\u2026" } });
        search.value = this.query;
        search.oninput = () => {
          this.query = search.value;
          this.renderBody(body);
        };
        const body = el.createDiv({ cls: "evs-dc-body" });
        this.renderBody(body);
      }
      renderBody(body) {
        body.empty();
        if (this.tab === "conflicts") return this.renderConflicts(body);
        if (this.tab === "suggestions") return this.renderSuggestions(body);
        const g = this.plugin.guard;
        const chips = body.createDiv({ cls: "evs-dc-chips" });
        for (const [k, label] of FILTERS) {
          const n = g.all.filter((d) => (!this.only || d.project === this.only) && (k === "all" || (g.reviews[d.id] || {}).status === k)).length;
          const c = chips.createSpan({ cls: "evs-dc-chip" + (this.status === k ? " is-active" : ""), text: `${label} ${n}` });
          c.onclick = () => this.go({ status: k });
        }
        const q = this.query.toLowerCase();
        const list = g.all.filter((d) => !this.only || d.project === this.only).filter((d) => this.status === "all" || (g.reviews[d.id] || {}).status === this.status).filter((d) => !q || `${d.title} ${d.chose} ${d.why} ${d.projectName}`.toLowerCase().includes(q)).sort((a, b) => b.at - a.at || a.title.localeCompare(b.title));
        if (this.mapOpen) this.renderMap(body, list);
        const split = body.createDiv({ cls: "evs-dc-split" });
        const left = split.createDiv({ cls: "evs-dc-list" });
        const right = split.createDiv({ cls: "evs-dc-detail" });
        if (!list.length) left.createDiv({ cls: "evs-hint", text: "No decisions match." });
        for (const d of list.slice(0, 300)) {
          const st = g.reviews[d.id] || { status: "active", hints: [] };
          const card = left.createDiv({ cls: "evs-dc-card" + (this.selected === d.id ? " is-active" : "") });
          card.style.setProperty("--p", this.color(d.project));
          const top = card.createDiv({ cls: "evs-dc-card-top" });
          top.createSpan({ cls: "evs-rc-dot" });
          top.createSpan({ cls: "evs-dc-date", text: d.kind === "rule" ? "rule" : d.date });
          top.createSpan({ cls: "evs-dc-proj", text: d.projectName });
          top.createSpan({ cls: `evs-dc-status is-${st.status}`, text: STATUS_LABELS[st.status] || st.status });
          card.createDiv({ cls: "evs-dc-card-title", text: d.title });
          const n = (g.findings.get(d.id) || []).filter((f) => !f.dismissed).length;
          if (n) card.createDiv({ cls: "evs-dc-badge", text: `${n} conflict${n === 1 ? "" : "s"}` });
          card.onclick = () => {
            this.selected = d.id;
            this.app.workspace.requestSaveLayout();
            left.querySelectorAll(".is-active").forEach((x) => x.removeClass("is-active"));
            card.addClass("is-active");
            this.renderDetail(right, d);
          };
        }
        const sel = list.find((d) => d.id === this.selected) || list[0];
        if (sel) this.renderDetail(right, sel);
      }
      // how decisions relate: one dot per decision (project color), lines between ones that share rare words
      renderMap(body, list) {
        const g = this.plugin.guard;
        const box = body.createDiv({ cls: "evs-dc-map" });
        const head = box.createDiv({ cls: "evs-rc-h" });
        setIcon2(head.createSpan(), "waypoints");
        head.createSpan({ text: "How decisions relate" });
        head.createSpan({ cls: "evs-rc-note", text: "lines join decisions on the same topic \xB7 click a dot" });
        const canvas = box.createEl("canvas");
        const W = Math.max(320, box.clientWidth || 640), H = 220;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        canvas.style.width = "100%";
        canvas.style.height = `${H}px`;
        const ids = new Set(list.filter((d) => d.kind === "decision").map((d) => d.id));
        const nodes = list.filter((d) => ids.has(d.id));
        const edges = g.links.filter((l) => ids.has(l.a) && ids.has(l.b));
        const projects = [...new Set(nodes.map((d) => d.project))];
        const t0 = Math.min(...nodes.map((d) => d.at)), t1 = Math.max(...nodes.map((d) => d.at));
        const pos = new Map(nodes.map((d) => [d.id, { x: 30 + (d.at - t0) / Math.max(1, t1 - t0) * (W - 60) + (Math.random() - 0.5) * 20, y: 30 + (projects.indexOf(d.project) + 0.5) / projects.length * (H - 60) + (Math.random() - 0.5) * 30 }]));
        for (let it = 0; it < 60; it++) {
          for (const e of edges) {
            const a = pos.get(e.a), b = pos.get(e.b);
            const dy = (b.y - a.y) * 0.02 * e.score;
            a.y += dy;
            b.y -= dy;
          }
          for (const a of nodes) for (const b of nodes) {
            if (a === b) continue;
            const p = pos.get(a.id), q = pos.get(b.id), dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
            if (d2 < 400 && d2 > 0) {
              p.y += dy / Math.sqrt(d2) * 0.8;
              p.x += dx / Math.sqrt(d2) * 0.4;
            }
          }
        }
        const ctx = canvas.getContext("2d");
        ctx.scale(dpr, dpr);
        const css = getComputedStyle(document.body);
        ctx.strokeStyle = css.getPropertyValue("--evs-accent").trim() || "#e8b84a";
        for (const e of edges) {
          const a = pos.get(e.a), b = pos.get(e.b);
          ctx.globalAlpha = 0.15 + 0.6 * Math.min(1, e.score);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        for (const d of nodes) {
          const p = pos.get(d.id), st = (g.reviews[d.id] || {}).status;
          ctx.fillStyle = this.color(d.project);
          ctx.beginPath();
          ctx.arc(p.x, p.y, d.id === this.selected ? 7 : 4.5, 0, Math.PI * 2);
          ctx.fill();
          if (st === "needs-review" || (g.findings.get(d.id) || []).some((f) => !f.dismissed)) {
            ctx.strokeStyle = "#ff8a5c";
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.lineWidth = 1;
            ctx.strokeStyle = css.getPropertyValue("--evs-accent").trim() || "#e8b84a";
          }
        }
        canvas.onclick = (e) => {
          const r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * W, y = (e.clientY - r.top) / r.height * H;
          let best = null, dist = 144;
          for (const d of nodes) {
            const p = pos.get(d.id), dd = (p.x - x) ** 2 + (p.y - y) ** 2;
            if (dd < dist) {
              dist = dd;
              best = d;
            }
          }
          if (best) this.go({ selected: best.id });
        };
        canvas.onmousemove = (e) => {
          const r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) / r.width * W, y = (e.clientY - r.top) / r.height * H;
          const hit = nodes.find((d) => (pos.get(d.id).x - x) ** 2 + (pos.get(d.id).y - y) ** 2 < 100);
          canvas.title = hit ? `${hit.projectName} \xB7 ${hit.date}: ${hit.title}` : "";
          canvas.style.cursor = hit ? "pointer" : "default";
        };
      }
      async renderDetail(el, d) {
        const g = this.plugin.guard, st = g.reviews[d.id] || { status: "active", hints: [] };
        el.empty();
        el.style.setProperty("--p", this.color(d.project));
        const top = el.createDiv({ cls: "evs-dc-dtop" });
        top.createSpan({ cls: "evs-rc-dot" });
        top.createSpan({ cls: "evs-dc-proj", text: d.projectName });
        top.createSpan({ cls: "evs-dc-date", text: d.kind === "rule" ? "hub rule" : d.date });
        top.createSpan({ cls: `evs-dc-status is-${st.status}`, text: STATUS_LABELS[st.status] || st.status });
        el.createDiv({ cls: "evs-dc-dtitle", text: d.title });
        const field = (label, text) => {
          if (!text) return;
          const f = el.createDiv({ cls: "evs-dc-field" });
          f.createSpan({ cls: "evs-dc-fl", text: label });
          f.createSpan({ text });
        };
        field("Chose", d.chose);
        field("Why", d.why);
        field("Revisit if", d.revisit);
        field("Still to do", d.todo);
        if (st.own && st.own.note) field("Your note", st.own.note);
        const acts = el.createDiv({ cls: "evs-dc-acts" });
        const act = (label, fn, cta) => {
          const b = acts.createEl("button", { text: label, cls: cta ? "mod-cta" : "" });
          b.onclick = fn;
        };
        act("Open in note", () => this.link(d.path, d.kind === "rule" ? "" : d.heading));
        if (d.kind === "decision") {
          const set = (status, extra) => g.setStatus(d.id, status, extra).then(() => this.render());
          act("Still valid", () => new TextPrompt(this.app, { title: "Still valid", label: "Anything to remember about it (optional).", button: "Mark still valid", optional: true }, (note) => set("reviewed", { note })).open(), st.status === "needs-review");
          act("Superseded\u2026", () => this.pickSuperseder(d, (by) => set("superseded", { by })));
          act("Outdated", () => new TextPrompt(this.app, { title: "Outdated", label: "Why it no longer applies (optional).", button: "Mark outdated", optional: true }, (note) => set("outdated", { note })).open());
          if (st.own) act("Back to active", () => set("active"));
        }
        act("Ask Claude", async () => {
          await navigator.clipboard.writeText(g.claudePrompt(this.plugin.store.find(d.path), { decisions: [d], where: `the decision "${d.title}" and what has happened since` }));
          new Notice2("Copied: Claude's answer lands in the project's Decision review note, marked as its suggestion");
        });
        if (st.hints.length) {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "Worth a look (worked out from your notes)" });
          for (const h of st.hints) {
            const row = box.createDiv({ cls: `evs-dc-hint is-${h.type}` });
            row.createSpan({ text: h.text });
            if (h.by) {
              row.addClass("is-clickable");
              row.onclick = () => this.go({ selected: h.by });
            }
            for (const ev of h.evidence || []) {
              const q = box.createDiv({ cls: "evs-dc-quote is-clickable", text: `\u201C${clip(ev.text, 180)}\u201D` });
              q.onclick = () => this.link(this.plugin.store.find(d.path).feel, ev.heading);
            }
          }
        }
        const fs = g.findings.get(d.id) || [];
        if (fs.length) {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: `Checked conflicts (${fs.filter((f) => !f.dismissed).length} open, ${fs.filter((f) => f.dismissed).length} reviewed)` });
          for (const f of fs) this.findingRow(box, f);
        }
        const rel = g.links.filter((l) => l.a === d.id || l.b === d.id).sort((a, b) => b.score - a.score).slice(0, 8);
        if (rel.length) {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "Related decisions" });
          for (const l of rel) {
            const o = g.all.find((x) => x.id === (l.a === d.id ? l.b : l.a));
            if (!o) continue;
            const row = box.createDiv({ cls: "evs-dc-rel is-clickable" });
            row.createSpan({ cls: "evs-dc-date", text: o.date });
            row.createSpan({ text: `${o.project !== d.project ? o.projectName + ": " : ""}${o.title}` });
            row.createSpan({ cls: "evs-rc-dim", text: ` \xB7 ${l.shared.join(", ")}` });
            row.onclick = () => this.go({ selected: o.id });
          }
        }
        const mentions = d.kind === "decision" ? await this.mentions(d) : [];
        if (mentions.length) {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "Notes that link to it" });
          for (const m of mentions) box.createDiv({ cls: "evs-dc-rel is-clickable", text: m.split("/").pop().replace(/\.md$/, "") }).onclick = () => this.link(m);
        }
        const sug = g.suggestions.filter((s) => s.decision === d.id);
        if (sug.length) {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "Claude's suggestions (not checked)" });
          for (const s of sug) this.suggestionRow(box, s);
        }
        if (d.kind === "decision") {
          const box = el.createDiv({ cls: "evs-dc-sec" });
          box.createDiv({ cls: "evs-dc-sec-h", text: "History" });
          box.createDiv({ cls: "evs-rc-dim", text: `Decided ${d.date}${st.own ? ` \xB7 you marked it ${STATUS_LABELS[st.own.status] || st.own.status} ${ago(Date.parse(st.own.at))}` : ""}` });
          const h = await g.history(d);
          for (const x of h.slice(0, 8)) box.createDiv({ cls: "evs-rc-dim", text: `Decisions note changed ${new Date(x.at).toISOString().slice(0, 10)} \xB7 ${x.subject}` });
        }
      }
      async mentions(d) {
        const out = [];
        const key = `#${d.heading}`.toLowerCase();
        for (const [src, targets] of Object.entries(this.app.metadataCache.resolvedLinks || {})) {
          if (!targets[d.path] || src === d.path) continue;
          const f = this.app.vault.getAbstractFileByPath(src);
          const c = f && this.app.metadataCache.getFileCache(f);
          if (c && (c.links || []).some((l) => l.link.toLowerCase().includes(key))) out.push(src);
        }
        return out.slice(0, 12);
      }
      pickSuperseder(d, done) {
        const later = this.plugin.guard.all.filter((x) => x.project === d.project && x.kind === "decision" && x.at >= d.at && x.id !== d.id);
        if (!later.length) return new Notice2("No later decision in this project to point to");
        const m = new (require("obsidian")).SuggestModal(this.app);
        m.getSuggestions = (q) => later.filter((x) => x.title.toLowerCase().includes(q.toLowerCase()));
        m.renderSuggestion = (x, el) => el.setText(`${x.date}: ${x.title}`);
        m.onChooseSuggestion = (x) => done(x.id);
        m.setPlaceholder("Which decision replaces it?");
        m.open();
      }
      findingRow(box, f) {
        const row = box.createDiv({ cls: "evs-dc-finding" + (f.dismissed ? " is-dismissed" : "") });
        const where = row.createDiv({ cls: "evs-dc-where is-clickable", text: f.task ? `Task ${f.task}` : f.path.split("/").pop().replace(/\.md$/, "") });
        where.onclick = () => f.task ? this.plugin.openTasks(f.project) : this.link(f.path);
        row.createDiv({ cls: "evs-dc-match", text: `\u201C${f.match}\u201D` });
        row.appendChild(findingCard(this.plugin, f, { onChange: () => this.render() }));
        if (f.dismissed) row.createDiv({ cls: "evs-rc-dim", text: `Reviewed ${ago(Date.parse(f.dismissed.at))}${f.dismissed.reason ? `: ${f.dismissed.reason}` : ""}` });
      }
      renderConflicts(body) {
        const g = this.plugin.guard;
        const all = [...g.findings.values()].flat().filter((f) => !this.only || f.project === this.only);
        const open = all.filter((f) => !f.dismissed), done = all.filter((f) => f.dismissed);
        body.createDiv({ cls: "evs-dc-note", text: "Checked conflicts: the text uses something a decision or rule ruled out, or a different value than it set. Shown with the exact words; you decide." });
        if (!open.length) body.createDiv({ cls: "evs-hint", text: "No open conflicts. Notes and tasks agree with your decisions." });
        for (const f of open) this.findingRow(body, f);
        if (done.length) {
          body.createDiv({ cls: "evs-dc-sec-h", text: `Reviewed warnings (${done.length})` });
          for (const f of done) this.findingRow(body, f);
        }
      }
      suggestionRow(box, s) {
        const row = box.createDiv({ cls: "evs-dc-sug" });
        const head = row.createDiv({ cls: "evs-guard-head" });
        head.createSpan({ cls: "evs-guard-badge is-ai", text: "Claude's suggestion \xB7 not checked" });
        if (s.confidence) head.createSpan({ cls: "evs-guard-badge", text: `${s.confidence} confidence` });
        head.createSpan({ cls: "evs-rc-dim", text: s.date });
        row.createDiv({ cls: "evs-dc-dtitle is-small", text: s.topic });
        if (s.where) row.createDiv({ cls: "evs-rc-dim", text: `Where: ${s.where}` });
        if (s.conflict) row.createDiv({ text: s.conflict });
        if (s.suggests) row.createDiv({ cls: "evs-guard-alt", text: `Suggests: ${s.suggests}` });
        const p = (this.plugin.store.cache || []).find((x) => x.path === s.project);
        row.createEl("button", { text: "Open" }).onclick = () => this.link(this.plugin.guard.reviewNote(p), s.heading);
      }
      renderSuggestions(body) {
        const g = this.plugin.guard;
        body.createDiv({ cls: "evs-dc-note", text: "Written by Claude when you asked it (Ask Claude buttons), into each project's Decision review note. Suggestions, not checked: your decisions don't change unless you change them." });
        const list = g.suggestions.filter((s) => !this.only || s.project === this.only);
        if (!list.length) body.createDiv({ cls: "evs-hint", text: "None yet. Use Ask Claude on a decision or a warning." });
        for (const s of list) this.suggestionRow(body, s);
      }
      async askClaude() {
        const p = this.only ? (this.plugin.store.cache || []).find((x) => x.path === this.only) : this.plugin.store.find(this.app.workspace.getActiveFile()?.path);
        if (!p) return new Notice2("Pick a project first");
        await navigator.clipboard.writeText(this.plugin.guard.claudePrompt(p, { where: `${p.name}'s notes and open tasks` }));
        new Notice2("Copied a decision review prompt for Claude");
      }
    };
    module2.exports = { DecisionsView: DecisionsView2 };
  }
});

// src/views/history.js
var require_history = __commonJS({
  "src/views/history.js"(exports2, module2) {
    "use strict";
    var { Modal, Notice: Notice2, MarkdownRenderer, Component } = require("obsidian");
    var { ago, stamp } = require_util();
    var VersionList = class extends Modal {
      constructor(plugin, title, load) {
        super(plugin.app);
        this.plugin = plugin;
        this.title = title;
        this.load = load;
      }
      async onOpen() {
        this.modalEl.addClass("evs-history");
        this.comp = new Component();
        this.comp.load();
        this.titleEl.setText(this.title);
        const body = this.contentEl;
        body.empty();
        const wrap = body.createDiv({ cls: "evs-hist-wrap" });
        this.listEl = wrap.createDiv({ cls: "evs-hist-list" });
        this.viewEl = wrap.createDiv({ cls: "evs-hist-view" });
        this.listEl.createDiv({ cls: "evs-hist-empty", text: "Reading the backup\u2026" });
        let items = [];
        try {
          items = await this.load();
        } catch (e) {
          this.listEl.empty();
          this.listEl.createDiv({ cls: "evs-hist-empty", text: `Can't read the backup: ${e.message}` });
          return;
        }
        this.listEl.empty();
        if (!items.length) {
          this.listEl.createDiv({ cls: "evs-hist-empty", text: this.emptyText() });
          return;
        }
        for (const it of items) {
          const row = this.listEl.createDiv({ cls: "evs-hist-row" });
          row.createDiv({ cls: "evs-hist-when", text: `${stamp(it.at)} \xB7 ${ago(it.at)}` });
          row.createDiv({ cls: "evs-hist-what", text: this.label(it) });
          row.onclick = () => {
            this.listEl.querySelectorAll(".is-active").forEach((x) => x.removeClass("is-active"));
            row.addClass("is-active");
            this.show(it);
          };
        }
        this.listEl.querySelector(".evs-hist-row")?.click();
      }
      async show(it) {
        const v = this.viewEl;
        v.empty();
        let text;
        try {
          text = await this.plugin.backup.version(it.from || it.hash, it.path);
        } catch (e) {
          v.createDiv({ cls: "evs-hist-empty", text: `Can't read this version: ${e.message}` });
          return;
        }
        const bar = v.createDiv({ cls: "evs-hist-bar" });
        bar.createSpan({ text: `${it.path} \xB7 ${text.length.toLocaleString()} characters` });
        const restore = bar.createEl("button", { cls: "mod-cta", text: this.restoreText() });
        const copy = bar.createEl("button", { text: "Copy text" });
        copy.onclick = async () => {
          await navigator.clipboard.writeText(text);
          new Notice2("Copied");
        };
        restore.onclick = async () => {
          if (restore.dataset.sure !== "1") {
            restore.dataset.sure = "1";
            restore.setText("Click again to restore");
            return;
          }
          await this.restore(it, text);
          this.close();
        };
        const pre = v.createDiv({ cls: "evs-hist-text markdown-rendered" });
        if (MarkdownRenderer && /\.md$/.test(it.path)) await MarkdownRenderer.render(this.app, text, pre, it.path, this.comp);
        else pre.createEl("pre", { text });
      }
      onClose() {
        this.comp?.unload();
        this.contentEl.empty();
      }
    };
    var NoteHistoryModal2 = class extends VersionList {
      constructor(plugin, file) {
        super(plugin, `History: ${file.basename}`, () => plugin.backup.history(file.path));
        this.file = file;
      }
      label(it) {
        return it.subject.replace(/^Vault backup: /, "");
      }
      emptyText() {
        return "No backed-up versions of this note yet.";
      }
      restoreText() {
        return "Restore this version";
      }
      async restore(it, text) {
        await this.app.vault.modify(this.file, text);
        new Notice2(`${this.file.basename} restored to ${stamp(it.at)}. The version you had is still in its history.`);
      }
    };
    var DeletedNotesModal2 = class extends VersionList {
      constructor(plugin) {
        super(plugin, "Deleted notes", async () => (await plugin.backup.deleted()).filter((d) => !plugin.app.vault.getAbstractFileByPath(d.path)));
      }
      label(it) {
        return it.path;
      }
      emptyText() {
        return "No deleted notes to bring back.";
      }
      restoreText() {
        return "Restore this note";
      }
      async restore(it, text) {
        const vault = this.app.vault, dir = it.path.split("/").slice(0, -1).join("/");
        if (dir && !vault.getAbstractFileByPath(dir)) await vault.createFolder(dir);
        await vault.create(it.path, text);
        new Notice2(`Restored ${it.path}`);
      }
    };
    module2.exports = { NoteHistoryModal: NoteHistoryModal2, DeletedNotesModal: DeletedNotesModal2 };
  }
});

// src/fx/shader.js
var require_shader = __commonJS({
  "src/fx/shader.js"(exports2, module2) {
    "use strict";
    var { rgb: rgb2 } = require_util();
    var ShaderLayer = class {
      constructor(canvas, def, plugin) {
        this.canvas = canvas;
        this.def = def;
        this.plugin = plugin;
        this.t = 0;
        this.last = 0;
        this.drawn = false;
        this.ok = this.init();
      }
      init() {
        const gl = this.gl = this.canvas.getContext("webgl2", { alpha: false, antialias: false, preserveDrawingBuffer: false });
        if (!gl) return this.fail("WebGL2 is not available");
        const vs = "#version 300 es\nin vec2 p;\nvoid main(){gl_Position=vec4(p,0.,1.);}";
        const code = this.def.code || "";
        const fs = /^\s*#version/.test(code) ? code : "#version 300 es\n" + code;
        const prog = gl.createProgram();
        for (const [type, src] of [[gl.VERTEX_SHADER, vs], [gl.FRAGMENT_SHADER, fs]]) {
          const sh = gl.createShader(type);
          gl.shaderSource(sh, src);
          gl.compileShader(sh);
          if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) return this.fail(gl.getShaderInfoLog(sh));
          gl.attachShader(prog, sh);
        }
        gl.bindAttribLocation(prog, 0, "p");
        gl.linkProgram(prog);
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return this.fail(gl.getProgramInfoLog(prog));
        this.prog = prog;
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
        this.uniforms = {};
        const n = gl.getProgramParameter(prog, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < n; i++) {
          const info = gl.getActiveUniform(prog, i);
          this.uniforms[info.name] = { loc: gl.getUniformLocation(prog, info.name), type: info.type };
        }
        return true;
      }
      fail(msg) {
        this.error = String(msg || "shader error").slice(0, 400);
        return false;
      }
      setDef(def) {
        this.def = def;
        this.drawn = false;
      }
      value(name) {
        const d = this.def, p = d.params || {};
        const map = { u_speed: p.speed, u_glow: p.glow, u_hue: p.hue, u_scale: p.scale, u_colorA: p.colorA, u_colorB: p.colorB };
        if (name in map) return map[name];
        if (d.values && name in d.values) return d.values[name];
        const c = (d.controls || []).find((x) => x.uniform === name);
        return c ? c.default : void 0;
      }
      frame(now, paused) {
        if (!this.ok) return;
        const bg = this.plugin.settings.fx;
        if (paused && this.drawn) {
          this.last = now;
          return;
        }
        const fps = Math.max(5, bg.fps || 30);
        if (this.drawn && now - this.last < 1e3 / fps - 2) return;
        const dt = this.last ? Math.min(0.1, (now - this.last) / 1e3) : 0;
        this.last = now;
        if (!paused) this.t += dt;
        const gl = this.gl, cv = this.canvas;
        const q = Math.max(0.25, Math.min(1, bg.quality || 0.75)) * (window.devicePixelRatio || 1);
        const w = Math.max(1, Math.round(cv.clientWidth * q)), h = Math.max(1, Math.round(cv.clientHeight * q));
        if (cv.width !== w || cv.height !== h) {
          cv.width = w;
          cv.height = h;
        }
        if (!cv.clientWidth || !cv.clientHeight) return;
        gl.viewport(0, 0, w, h);
        gl.useProgram(this.prog);
        for (const [name, u] of Object.entries(this.uniforms)) {
          let v;
          if (name === "u_resolution") v = [w, h];
          else if (name === "u_time") v = this.t;
          else if (name === "u_mouse") v = [w / 2, h / 2];
          else v = this.value(name);
          if (v === void 0) continue;
          if (typeof v === "string") v = rgb2(v).map((x) => x / 255);
          if (u.type === gl.FLOAT) gl.uniform1f(u.loc, Number(v) || 0);
          else if (u.type === gl.FLOAT_VEC2) gl.uniform2f(u.loc, +v[0] || 0, +v[1] || 0);
          else if (u.type === gl.FLOAT_VEC3) gl.uniform3f(u.loc, +v[0] || 0, +v[1] || 0, +v[2] || 0);
          else if (u.type === gl.INT || u.type === gl.BOOL) gl.uniform1i(u.loc, Math.round(Number(v) || 0));
        }
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        this.drawn = true;
      }
      destroy() {
        try {
          this.gl && this.gl.getExtension("WEBGL_lose_context")?.loseContext();
        } catch (e) {
        }
        this.ok = false;
      }
    };
    module2.exports = { ShaderLayer };
  }
});

// src/fx/backgrounds.js
var require_backgrounds = __commonJS({
  "src/fx/backgrounds.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2 } = require("obsidian");
    var { BUILTIN_BGS } = require_constants();
    var { hash: hash2 } = require_util();
    var { ShaderLayer } = require_shader();
    var BackgroundManager2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.layers = /* @__PURE__ */ new Set();
        this.videos = /* @__PURE__ */ new Set();
        this.vault = null;
      }
      start() {
        const tick = (now) => {
          this.raf = requestAnimationFrame(tick);
          const bg = this.plugin.settings.fx;
          const paused = bg.lite || bg.pauseUnfocused && (document.hidden || !document.hasFocus());
          for (const l of this.layers) l.frame(now, paused);
          if (paused !== this.wasPaused) {
            this.wasPaused = paused;
            for (const v of this.videos) paused ? v.pause() : v.play().catch(() => {
            });
          }
        };
        this.raf = requestAnimationFrame(tick);
      }
      stop() {
        cancelAnimationFrame(this.raf);
        this.unmountVault();
        for (const l of this.layers) l.destroy();
        this.layers.clear();
        this.videos.clear();
      }
      all() {
        for (const b of BUILTIN_BGS) if (!b.thumb && !b.thumbTried) {
          b.thumbTried = true;
          b.thumb = this.thumbFromShader(b).thumb;
        }
        return BUILTIN_BGS.concat(this.plugin.settings.bgLibrary || []);
      }
      def(id) {
        return this.all().find((d) => d.id === id) || null;
      }
      // puts a background into an element; returns { el, layer, destroy } or null
      mount(container, id, opts = {}) {
        const d = this.def(id);
        if (!d) return null;
        const wrap = container.createDiv({ cls: "evs-bg-layer" });
        if (opts.opacity !== void 0) wrap.style.opacity = String(opts.opacity);
        if (d.kind === "video") {
          const v = wrap.createEl("video");
          v.muted = true;
          v.loop = true;
          v.autoplay = true;
          v.playsInline = true;
          v.src = this.plugin.app.vault.adapter.getResourcePath(d.file);
          v.play().catch(() => {
          });
          this.videos.add(v);
          return {
            el: wrap,
            destroy: () => {
              this.videos.delete(v);
              v.pause();
              v.removeAttribute("src");
              wrap.remove();
            }
          };
        }
        const cv = wrap.createEl("canvas");
        const layer = new ShaderLayer(cv, d, this.plugin);
        if (layer.ok) this.layers.add(layer);
        else wrap.addClass("is-failed");
        return {
          el: wrap,
          layer,
          destroy: () => {
            this.layers.delete(layer);
            layer.destroy();
            wrap.remove();
          }
        };
      }
      // a background's settings changed: running copies pick them up
      updated(id) {
        const d = this.def(id);
        for (const l of this.layers) if (l.def.id === id) l.setDef(d);
      }
      unmountVault() {
        if (this.vault) {
          this.vault.mounted?.destroy();
          this.vault.el.remove();
          this.vault = null;
        }
        document.body.removeClass("evs-bg-vault");
      }
      applyVault() {
        const v = this.plugin.settings.fx.vault;
        const want = v.on && v.id && this.def(v.id) ? v.id : null;
        if (!want) return this.unmountVault();
        if (!this.vault || this.vault.id !== want) {
          this.unmountVault();
          const el = document.body.createDiv({ cls: "evs-vault-bg" });
          document.body.prepend(el);
          const mounted = this.mount(el, want);
          el.createDiv({ cls: "evs-vault-dim" });
          this.vault = { id: want, el, mounted };
        }
        this.vault.el.style.setProperty("--evs-bg-opacity", String(v.opacity));
        this.vault.el.style.setProperty("--evs-bg-dim", String(v.dim));
        this.vault.el.style.setProperty("--evs-bg-blur", `${v.blur}px`);
        document.body.addClass("evs-bg-vault");
      }
      // ---- imports ----
      async thumbFromImage(src) {
        const img = new Image();
        await new Promise((ok, bad) => {
          img.onload = ok;
          img.onerror = bad;
          img.src = src;
        });
        const cv = document.createElement("canvas");
        cv.width = 192;
        cv.height = 108;
        const x = cv.getContext("2d");
        const r = Math.max(192 / img.width, 108 / img.height);
        x.drawImage(img, (192 - img.width * r) / 2, (108 - img.height * r) / 2, img.width * r, img.height * r);
        return cv.toDataURL("image/jpeg", 0.8);
      }
      // renders a shader for a moment off screen and keeps the frame as its thumbnail (also proves it compiles)
      thumbFromShader(def) {
        const cv = document.createElement("canvas");
        cv.style.width = "192px";
        cv.style.height = "108px";
        document.body.appendChild(cv);
        cv.style.position = "fixed";
        cv.style.left = "-9999px";
        const layer = new ShaderLayer(cv, def, this.plugin);
        let out = null;
        if (layer.ok) {
          layer.t = 2.5;
          layer.frame(performance.now(), true);
          out = cv.toDataURL("image/jpeg", 0.8);
        }
        const err = layer.error;
        layer.destroy();
        cv.remove();
        return { thumb: out, error: err };
      }
      // adds or refreshes a library entry; the same shader code under another file or name isn't added twice
      add(entry) {
        const lib = this.plugin.settings.bgLibrary;
        if (entry.code) entry.codeHash = hash2(entry.code.replace(/\s+/g, ""));
        const i = lib.findIndex((d) => d.source && d.source === entry.source);
        if (i < 0 && entry.codeHash && /^frag:/.test(entry.source || "")) {
          const same = lib.find((d) => d.codeHash === entry.codeHash || d.code && hash2(d.code.replace(/\s+/g, "")) === entry.codeHash);
          if (same) return { entry: same, added: false };
        }
        if (i >= 0) {
          const keep = lib[i];
          lib[i] = Object.assign({}, keep, entry, { id: keep.id, favorite: keep.favorite || entry.favorite, name: keep.name, thumb: keep.thumb || entry.thumb, source: keep.source || entry.source });
          return { entry: lib[i], added: false };
        }
        entry.added = entry.added || Date.now();
        lib.push(entry);
        return { entry, added: true };
      }
      // a frame from a video's own bytes (a frame from the vault's resource URL can't be read back for a thumbnail)
      // bytes: an ArrayBuffer or a Blob/File (a File isn't read into memory, which matters for big videos)
      async thumbFromVideo(bytes, name) {
        const type = /\.webm$/i.test(name) ? "video/webm" : /\.mov$/i.test(name) ? "video/quicktime" : "video/mp4";
        const url = URL.createObjectURL(bytes instanceof Blob ? bytes : new Blob([bytes], { type }));
        const v = document.createElement("video");
        v.muted = true;
        v.preload = "auto";
        v.src = url;
        try {
          const within = (p) => Promise.race([p, new Promise((_, bad) => window.setTimeout(() => bad(new Error("video took too long to load")), 8e3))]);
          await within(new Promise((ok, bad) => {
            v.onloadeddata = ok;
            v.onerror = () => bad(new Error("can't decode video"));
          }));
          v.currentTime = Math.min(1, (v.duration || 3) / 3);
          await within(new Promise((ok) => v.onseeked = ok));
          const cv = document.createElement("canvas");
          cv.width = 192;
          cv.height = 108;
          const x = cv.getContext("2d");
          const r = Math.max(192 / v.videoWidth, 108 / v.videoHeight);
          x.drawImage(v, (192 - v.videoWidth * r) / 2, (108 - v.videoHeight * r) / 2, v.videoWidth * r, v.videoHeight * r);
          return cv.toDataURL("image/jpeg", 0.8);
        } finally {
          v.removeAttribute("src");
          URL.revokeObjectURL(url);
        }
      }
      // videos imported before thumbnails worked get one now
      async fillMissingThumbs() {
        let changed = false;
        for (const d of this.plugin.settings.bgLibrary) {
          if (d.kind !== "video" || d.thumb || d.thumbTried) continue;
          d.thumbTried = true;
          try {
            d.thumb = await this.thumbFromVideo(await this.plugin.app.vault.adapter.readBinary(d.file), d.file);
            changed = true;
          } catch (e) {
          }
        }
        return changed;
      }
      fromShaderStudio(look, source) {
        return {
          id: "bg-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          source,
          name: look.name || "Shader",
          kind: "shader",
          // words GLSL ES 3.00 reserves (some exported shaders use them as names) get renamed so they still compile
          code: String(look.code).replace(/\b(active|input|output|filter|sample|common|partition|superp|namespace|template|union|resource|cast|half|fixed|packed|external|interface)\b/g, "$1_"),
          params: Object.assign({ speed: 1, glow: 1, hue: 0, scale: 1, colorA: "#ffffff", colorB: "#888888" }, look.params || {}),
          controls: (look.controls || []).filter((c) => c && c.uniform),
          values: Object.assign({}, look.values || {}),
          favorite: !!look.favorite,
          tags: look.tags || []
        };
      }
      // everything in a Shader Studio library folder: index.json projects (with their thumbnails), Projects/*.json,
      // shader packs (Shader Packs/*.json and packs in the folder itself), Custom GLSL/*.frag. Returns how many were new.
      async importLibrary(dir) {
        const fs = require("fs"), path = require("path");
        const list = (sub, ext) => {
          const d = path.join(dir, sub);
          return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.toLowerCase().endsWith(ext) && !/\.backup\./i.test(f)).map((f) => path.join(d, f)) : [];
        };
        const readJson = (f) => {
          try {
            return JSON.parse(fs.readFileSync(f, "utf8"));
          } catch (e) {
            return null;
          }
        };
        const thumbFor = async (id) => {
          const png = path.join(dir, "Thumbnails", `${id}.png`);
          if (!id || !fs.existsSync(png)) return null;
          try {
            return await this.thumbFromImage("data:image/png;base64," + fs.readFileSync(png).toString("base64"));
          } catch (e) {
            return null;
          }
        };
        const looks = [];
        const idx = readJson(path.join(dir, "index.json"));
        for (const p of idx && idx.projects || []) looks.push([p, `studio:${p.id}`]);
        for (const f of list("Projects", ".json")) {
          const p = readJson(f);
          if (p && p.code) looks.push([p, `project:${p.id || path.basename(f)}`]);
        }
        const packFiles = list("Shader Packs", ".json").concat(list(path.join("Shader Packs", "Built-in presets"), ".json"), list("", ".json").filter((f) => !/index(\.backup)?\.json$/i.test(f)));
        for (const f of packFiles) {
          const d = readJson(f);
          if (!d) continue;
          const items = Array.isArray(d.looks) ? d.looks : Array.isArray(d.projects) ? d.projects : d.code ? [d] : [];
          items.forEach((l, i) => looks.push([l, `pack:${path.basename(f)}:${l.id || i}`]));
        }
        for (const f of list("Custom GLSL", ".frag").concat(list("Custom GLSL", ".glsl"))) {
          const name = path.basename(f).replace(/-[0-9a-f]{8,}-.*$/i, "").replace(/\.(frag|glsl)$/i, "").replace(/([a-z])([A-Z])/g, "$1 $2");
          looks.push([{ name, code: fs.readFileSync(f, "utf8") }, `frag:${path.basename(f)}`]);
        }
        let added = 0;
        const named = (name) => this.plugin.settings.bgLibrary.some((d) => (d.name || "").toLowerCase() === String(name || "").toLowerCase());
        for (const [look, source] of looks) {
          if (!look.code) continue;
          if (!source.startsWith("studio:") && named(look.name)) continue;
          const e = this.fromShaderStudio(look, source);
          const res = this.add(e);
          if (!res.added) continue;
          added++;
          res.entry.thumb = await thumbFor(look.id) || this.thumbFromShader(res.entry).thumb;
          const test = this.thumbFromShader(res.entry);
          if (test.error) res.entry.error = test.error;
        }
        for (const f of list("Videos", ".mp4").concat(list("Videos", ".webm"), list("Videos", ".mov"))) {
          const safe = path.basename(f).replace(/[^\w.\- ]+/g, "_");
          if (this.plugin.settings.bgLibrary.some((d) => d.source === `video:${safe}`)) continue;
          try {
            await this.importVideo({ name: path.basename(f), path: f });
            added++;
          } catch (e) {
            console.error("EMX Vault Studio: video import failed", f, e);
          }
        }
        return added;
      }
      // a pack-format JSON on disk (used for Shader Studio's built-in presets, saved out of the app)
      async importPackFile(file) {
        const fs = require("fs");
        const d = JSON.parse(fs.readFileSync(file, "utf8"));
        let added = 0;
        for (const l of d.looks || []) {
          if (!l.code) continue;
          const e = this.fromShaderStudio(l, `builtin-studio:${l.name}`);
          e.tags = (e.tags || []).concat(l.category ? [l.category] : []);
          const res = this.add(e);
          if (!res.added) continue;
          added++;
          const t = this.thumbFromShader(res.entry);
          res.entry.thumb = t.thumb;
          if (t.error) res.entry.error = t.error;
        }
        return added;
      }
      // files picked in the panel: shader packs (.json), Shader Studio projects (.json), .frag/.glsl, or .mp4/.webm
      // files picked or dropped in the panel: shader packs (.json), Shader Studio projects (.json), .frag/.glsl, or
      // videos (.mp4/.webm/.mov). Each file is tried on its own; returns { n, failed: [[name, why]] }
      // returns { n, failed, fresh: [names], known: [names], ids: [entry ids] }
      async importFiles(files) {
        let n = 0;
        const failed = [], fresh = [], known = [], ids = [];
        const note2 = (r) => {
          if (!r) return;
          (r.added ? fresh : known).push(r.entry.name);
          ids.push(r.entry.id);
        };
        const list = Array.from(files);
        const note = new Notice2(`Importing ${list.length} file${list.length === 1 ? "" : "s"}\u2026`, 0);
        for (const [i, file] of list.entries()) {
          note.setMessage(`Importing ${i + 1} of ${list.length}: ${file.name}`);
          try {
            const name = file.name.replace(/\.[^.]+$/, "");
            if (/\.(mp4|webm|mov|m4v)$/i.test(file.name)) {
              note2(await this.importVideo(file));
              n++;
              continue;
            }
            if (!/\.(json|frag|glsl|txt)$/i.test(file.name)) throw new Error("not a shader, pack or video file");
            const text = await file.text();
            let looks = [];
            if (/\.json$/i.test(file.name)) {
              const d = JSON.parse(text);
              if (Array.isArray(d.looks)) looks = d.looks;
              else if (Array.isArray(d.projects)) looks = d.projects;
              else if (d.code) looks = [d];
            } else looks = [{ name, code: text }];
            if (!looks.some((l) => l.code)) throw new Error("no shader code inside");
            for (const look of looks) {
              if (!look.code) continue;
              const e = this.fromShaderStudio(look, `file:${file.name}:${look.id || look.name}`);
              Object.assign(e, this.thumbFromShader(e));
              note2(this.add(e));
              n++;
            }
          } catch (e) {
            failed.push([file.name, e.message]);
            console.error("EMX Vault Studio import failed", file.name, e);
          }
        }
        note.hide();
        return { n, failed, fresh, known, ids };
      }
      // copies a video into _attachments/backgrounds (straight from disk when it can, so big files don't fill memory)
      async importVideo(file) {
        const vault = this.plugin.app.vault, folder = "_attachments/backgrounds";
        if (!vault.getAbstractFileByPath("_attachments")) await vault.createFolder("_attachments").catch(() => {
        });
        if (!vault.getAbstractFileByPath(folder)) await vault.createFolder(folder).catch(() => {
        });
        const safe = file.name.replace(/[^\w.\- ]+/g, "_");
        const dest = `${folder}/${safe}`;
        if (!await vault.adapter.exists(dest)) {
          const from = file.path;
          if (from && vault.adapter.getBasePath) {
            const fs = require("fs"), path = require("path");
            await fs.promises.copyFile(from, path.join(vault.adapter.getBasePath(), dest));
          } else {
            await vault.createBinary(dest, await file.arrayBuffer());
          }
        }
        const e = { id: "bg-" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), source: `video:${safe}`, name: safe.replace(/\.[^.]+$/, ""), kind: "video", file: dest, favorite: false };
        try {
          e.thumb = await this.thumbFromVideo(file instanceof Blob ? file : await vault.adapter.readBinary(dest), safe);
        } catch (err) {
        }
        return this.add(e);
      }
    };
    module2.exports = { BackgroundManager: BackgroundManager2 };
  }
});

// src/core/space.js
var require_space = __commonJS({
  "src/core/space.js"(exports2, module2) {
    "use strict";
    var TURN_PER_PX = 6e-3;
    var U = { x: 1, y: 0, z: 0 };
    var V = { x: 0, y: 1, z: 0 };
    function rotate(p, view) {
      let x = p.x, y = p.y, z = p.z || 0;
      const { yaw = 0, pitch = 0, roll = 0 } = view;
      if (roll) {
        const c = Math.cos(roll), s = Math.sin(roll);
        [x, y] = [x * c - y * s, x * s + y * c];
      }
      if (yaw) {
        const c = Math.cos(yaw), s = Math.sin(yaw);
        [x, z] = [x * c - z * s, x * s + z * c];
      }
      if (pitch) {
        const c = Math.cos(pitch), s = Math.sin(pitch);
        [y, z] = [y * c - z * s, y * s + z * c];
      }
      return { x, y, z };
    }
    function camera(view, cx, cy, dist) {
      const yaw = view.yaw || 0, pitch = view.pitch || 0, roll = view.roll || 0;
      const cr = Math.cos(roll), sr = Math.sin(roll), cy_ = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      return (px, py, pz) => {
        let x = px - cx, y = py - cy, z = pz || 0;
        [x, y] = [x * cr - y * sr, x * sr + y * cr];
        [x, z] = [x * cy_ - z * sy, x * sy + z * cy_];
        [y, z] = [y * cp - z * sp, y * sp + z * cp];
        const s = Math.max(0.2, Math.min(4, dist / Math.max(1, dist + z)));
        return { x: cx + x * s, y: cy + y * s, s, z };
      };
    }
    function plane(incl, node) {
      const ci = Math.cos(incl || 0), si = Math.sin(incl || 0), cn = Math.cos(node || 0), sn = Math.sin(node || 0);
      return { u: { x: cn, y: sn, z: 0 }, v: { x: -sn * ci, y: cn * ci, z: si } };
    }
    function onRing(o, a) {
      const u = o.u || U, v = o.v || V, c = Math.cos(a), s = Math.sin(a);
      return { x: o.cx + o.pr * (c * u.x + s * v.x), y: o.cy + o.pr * (c * u.y + s * v.y), z: (o.cz || 0) + o.pr * (c * u.z + s * v.z) + (o.dz || 0) };
    }
    function dragTurn(start, dx, dy, k = TURN_PER_PX) {
      return { yaw: start.yaw + dx * k, pitch: start.pitch + dy * k, roll: start.roll };
    }
    var easeInOut = (k) => k <= 0 ? 0 : k >= 1 ? 1 : k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
    module2.exports = { TURN_PER_PX, rotate, camera, plane, onRing, dragTurn, easeInOut };
  }
});

// src/views/graph.js
var require_graph = __commonJS({
  "src/views/graph.js"(exports2, module2) {
    "use strict";
    var { ItemView, Notice: Notice2, Menu, setIcon: setIcon2 } = require("obsidian");
    var { VIEW: VIEW2 } = require_constants();
    var { notePaths } = require_types();
    var { rgba: rgba2, mix: mix2, hash: hash2, rng, lerp, qpt, qnormal, fontFamily: fontFamily2 } = require_util();
    var { camera, plane, onRing, dragTurn, easeInOut } = require_space();
    var { REALMS: REALMS2, realmFromGraph: realmFromGraph2 } = require_realms();
    var GOLDEN = 2.39996;
    var deg = (d) => d * Math.PI / 180;
    var qz = (cv, t) => {
      const u = 1 - t;
      return u * u * (cv.z0 || 0) + 2 * u * t * (cv.zc || 0) + t * t * (cv.z1 || 0);
    };
    function along(pts, u) {
      const f = Math.max(0, Math.min(0.9999, u)) * (pts.length - 1), i = Math.floor(f), k = f - i;
      return { x: lerp(pts[i].x, pts[i + 1].x, k), y: lerp(pts[i].y, pts[i + 1].y, k) };
    }
    var NeuralGraphView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.model = null;
        this.scene = null;
        this.drawn = [];
        this.hover = null;
        this.flies = [];
        this.dirty = true;
        this.t0 = performance.now();
        this.project = null;
        this.yaw = 0;
        this.pitch = 0;
        this.roll = 0;
      }
      getViewType() {
        return VIEW2;
      }
      getDisplayText() {
        const p = this.scoped();
        return p ? `Graph: ${p.name}` : this.plugin.settings.graph.title || "Neural graph";
      }
      getState() {
        return { project: this.project };
      }
      async setState(state, result) {
        const next = state && state.project || null;
        if (next !== this.project) {
          this.project = next;
          this.model = null;
          this.dirty = true;
        }
        await super.setState(state, result);
        this.leaf.updateHeader?.();
        if (this.leaf.tabHeaderInnerTitleEl) this.leaf.tabHeaderInnerTitleEl.setText(this.getDisplayText());
        if (this.titleEl) this.titleEl.setText(this.getDisplayText());
      }
      scoped() {
        if (!this.project) return null;
        const known = (this.plugin.store.cache || []).find((p) => p.path === this.project);
        if (known) return known;
        const name = this.project.split("/").pop(), n = notePaths(this.project, name, null);
        return { path: this.project, name, hub: n.hub, feel: n.feedback, decisions: n.decisions, questions: n.questions, brief: n.brief, dashboard: n.dashboard, feedbackLabel: "Feel tests" };
      }
      getIcon() {
        return "sparkles";
      }
      async onOpen() {
        const el = this.contentEl;
        el.empty();
        el.addClass("evs-graph-view");
        this.bgHost = el.createDiv({ cls: "evs-graph-bg" });
        this.canvas = el.createEl("canvas");
        this.tip = el.createDiv({ cls: "evs-graph-tip" });
        this.tip.hide();
        this.ctx = this.canvas.getContext("2d");
        this.resizer = new ResizeObserver(() => this.resize());
        this.resizer.observe(el);
        this.registerDomEvent(this.canvas, "mousemove", (e) => this.onMove(e));
        this.registerDomEvent(this.canvas, "mouseleave", () => {
          this.hover = null;
          this.tip.hide();
        });
        this.registerDomEvent(this.canvas, "click", (e) => this.onClick(e));
        this.setupNavigation();
        this.resize();
        const loop = () => {
          this.frame();
          this.raf = requestAnimationFrame(loop);
        };
        this.raf = requestAnimationFrame(loop);
      }
      async onClose() {
        cancelAnimationFrame(this.raf);
        this.stopTour(false);
        this.resizer?.disconnect();
        this.bgMounted?.m?.destroy();
        this.bgMounted = null;
      }
      refresh(rebuild) {
        if (rebuild) this.model = null;
        if (this.scene && this.scene.nodes.length) {
          this.prevScene = this.scene;
          this.prevPos = new Map(this.scene.nodes.filter((n) => n.wx !== void 0).map((n) => [n.file.path, { x: n.wx, y: n.wy, z: n.wz }]));
        }
        this.scene = null;
        this.dirty = true;
        this.leaf.updateHeader?.();
      }
      resize() {
        const r = this.contentEl.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        this.w = Math.max(1, r.width);
        this.h = Math.max(1, r.height);
        this.canvas.width = Math.round(this.w * dpr);
        this.canvas.height = Math.round(this.h * dpr);
        this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this.scene = null;
        this.prevScene = null;
        this.dirty = true;
      }
      colors() {
        const s = this.plugin.settings, g = s.graph;
        if (g.useTheme) return { branch: s.accent, leaf: s.accent2, root: mix2(s.accent, s.bg, 0.25), text: s.text, bg: s.bg };
        return { branch: g.branch, leaf: g.leaf, root: g.root, text: s.text, bg: s.bg };
      }
      // notes grouped into branches: project folders under Games/Tools/Archive, else the top folder
      buildModel() {
        const g = this.plugin.settings.graph;
        const roots = new Set(String(g.rootFolders).split(",").map((x) => x.trim().toLowerCase()).filter(Boolean));
        const proj = this.scoped();
        const files = this.app.vault.getMarkdownFiles().filter((f) => proj ? f.path.startsWith(proj.path + "/") && !/\/Repo - Workshop\//.test(f.path) : g.includeRepo || !/(^|\/)Repo - /.test(f.path));
        if (proj) {
          const groups2 = /* @__PURE__ */ new Map();
          let home2 = null;
          const kind = (f) => {
            const rest = f.path.slice(proj.path.length + 1).split("/");
            if (rest.length > 1) return rest[0];
            if (f.path === proj.feel) return proj.feedbackLabel || "Feedback";
            if (f.path === proj.decisions) return "Decisions";
            if (f.path === proj.questions) return "Open questions";
            if (f.path === proj.brief || f.path === proj.dashboard || / - (Brief|Dashboard|Playtest flags|Decision review)\.md$/.test(f.path)) return "Overview";
            return "Notes";
          };
          for (const f of files) {
            if (!home2 && f.path === proj.hub) {
              home2 = f;
              continue;
            }
            const key = kind(f);
            if (!groups2.has(key)) groups2.set(key, { name: key, root: /^Repo - /.test(key), files: [] });
            groups2.get(key).files.push(f);
          }
          const degree2 = /* @__PURE__ */ new Map(), links2 = [];
          const inside = new Set(files.map((f) => f.path));
          for (const [src, targets] of Object.entries(this.app.metadataCache.resolvedLinks || {})) {
            if (!inside.has(src)) continue;
            for (const [dst, n] of Object.entries(targets)) {
              if (!inside.has(dst)) continue;
              degree2.set(src, (degree2.get(src) || 0) + n);
              degree2.set(dst, (degree2.get(dst) || 0) + n);
              if (src !== dst) links2.push([src, dst]);
            }
          }
          const list2 = Array.from(groups2.values());
          for (const grp of list2) grp.files.sort((a, b) => a.path.localeCompare(b.path));
          list2.sort((a, b) => a.root === b.root ? a.name.localeCompare(b.name) : a.root ? 1 : -1);
          return { home: home2, groups: list2, degree: degree2, links: links2, count: files.length };
        }
        const libs = String(g.libraries || "").split(",").map((x) => x.trim()).filter(Boolean);
        const groups = /* @__PURE__ */ new Map();
        let home = null;
        const cats = new Set((this.plugin.types && this.plugin.types.folders() || ["Games", "Tools", "Archive"]).map((x) => x.toLowerCase()));
        for (const f of files) {
          const parts = f.path.split("/");
          const top = parts[0].toLowerCase();
          let key;
          const lib = libs.find((l) => f.path.startsWith(l + "/"));
          if (lib) {
            if (!g.showLibraries) continue;
            key = /roblox/i.test(lib) ? "Roblox library" : lib.split("/").pop();
            if (!groups.has(key)) groups.set(key, { star: !!(cats.has(top) && parts.length > 2 && this.plugin.favoriteOf && this.plugin.store.find(f.path) && this.plugin.favoriteOf(this.plugin.store.find(f.path)).star), name: key, root: false, lib: true, files: [] });
          } else if (parts.length === 1) {
            if (!home && f.basename.toLowerCase() === "home") {
              home = f;
              continue;
            }
            key = "Vault";
          } else if (cats.has(top) && parts.length > 2) {
            key = parts[1];
          } else {
            key = parts[0];
          }
          if (!groups.has(key)) groups.set(key, { name: key, root: roots.has(top) || roots.has(key.toLowerCase()) || top.startsWith("_"), files: [] });
          groups.get(key).files.push(f);
        }
        const degree = /* @__PURE__ */ new Map();
        const links = [];
        const resolved = this.app.metadataCache.resolvedLinks || {};
        for (const [src, targets] of Object.entries(resolved)) {
          for (const [dst, n] of Object.entries(targets)) {
            degree.set(src, (degree.get(src) || 0) + n);
            degree.set(dst, (degree.get(dst) || 0) + n);
            if (src !== dst) links.push([src, dst]);
          }
        }
        const list = Array.from(groups.values());
        for (const grp of list) grp.files.sort((a, b) => a.path.localeCompare(b.path));
        list.sort((a, b) => a.root === b.root ? a.name.localeCompare(b.name) : a.root ? 1 : -1);
        const count = files.length;
        return { home, groups: list, degree, links, count };
      }
      // positions for the chosen shape, in 3D (z is depth, away from you); nodes with ring data move each frame
      // (orbit, galaxy). Depth comes from its own random streams, so the flat picture is the same as before 3D
      layout() {
        const m = this.model, g = this.plugin.settings.graph, c = this.colors();
        const w = this.w, h = this.h;
        let S = Math.min(w, h * 1.15);
        const nodes = [], curves = [], labels = [], rings = [], deco = [], arms = [], lines = [];
        const foliage = Math.max(0, Math.min(3, g.foliage ?? 1));
        const D = Math.max(0, Math.min(2, g.depth ?? 1));
        const sprout = (cv, r2, count, len, color, dr) => {
          for (let k = 0; k < count; k++) {
            const t0 = 0.3 + r2() * 0.6;
            const p = qpt(cv, t0), n = qnormal(cv, t0);
            const side = r2() < 0.5 ? -1 : 1;
            const dx = cv.x1 - cv.x0, dy = cv.y1 - cv.y0, dl = Math.hypot(dx, dy) || 1;
            const l = len * (0.45 + r2() * 0.55) * (1.1 - t0 * 0.4);
            const ex = p.x + dx / dl * l * 0.75 + n.x * side * l * 0.6;
            const ey = p.y + dy / dl * l * 0.75 + n.y * side * l * 0.6;
            const z0 = qz(cv, t0), z1 = z0 + (dr() - 0.5) * l * 1.2 * D;
            const sub = { x0: p.x, y0: p.y, z0, cx: (p.x + ex) / 2 + dx / dl * l * 0.2, cy: (p.y + ey) / 2 + dy / dl * l * 0.2, zc: (z0 + z1) / 2, x1: ex, y1: ey, z1, width: 0.7, color, alpha: 0.55 };
            curves.push(sub);
            const dots = 2 + Math.round(r2() * 4);
            for (let d = 0; d < dots; d++) {
              const tq = 0.35 + r2() * 0.65, q = qpt(sub, tq);
              deco.push({ x: q.x + (r2() - 0.5) * 6, y: q.y + (r2() - 0.5) * 6, z: qz(sub, tq), r: 0.6 + r2() * 1.1, ph: r2() * 6.28, color });
            }
          }
        };
        const libsH = String(g.libraries || "").split(",").map((x) => x.trim()).filter(Boolean);
        const generated = /( - Brief| - Playtest flags|\/Vault index)\.md$|\/Recaps\/|^_techniques\/Workshop recaps\//;
        const heat = (f) => {
          if (!g.recentGlow || !f.stat || generated.test(f.path) || /(^|\/)Repo - /.test(f.path) || libsH.some((l) => f.path.startsWith(l + "/"))) return 0;
          const k = Math.max(0, 1 - (Date.now() - f.stat.mtime) / ((g.recentDays || 7) * 864e5));
          return k * k;
        };
        const size = (f) => g.nodeSize * (g.sizeByLinks ? 1 + Math.min(m.degree.get(f.path) || 0, 12) * 0.07 : 1);
        const node = (f, x, y, kind, extra) => nodes.push(Object.assign({ file: f, x, y, z: 0, kind, r: size(f), ph: hash2(f.path) % 1e3 / 159, heat: heat(f) }, extra));
        const rz = (grp, f) => grp.lib ? { r: size(f) * 0.45, lib: true } : {};
        const upper = m.groups.filter((x) => !x.root), lower = m.groups.filter((x) => x.root);
        const spread = Math.max(0.4, Math.min(1.6, g.spread));
        const scatter = g.scatter ?? 1, bendK = g.bend ?? 1, lenK = g.length ?? 1;
        const gcol = (grp) => {
          const pc = this.plugin.projectColor && this.plugin.projectColor(grp.name);
          return pc ? { branch: pc, leaf: mix2(pc, "#ffffff", 0.35) } : { branch: grp.root ? c.root : c.branch, leaf: null };
        };
        const depthRng = (grp) => rng(hash2(grp.name) ^ 1540483477);
        const star = (grp) => (grp.star ? "\u2605 " : "") + grp.name;
        const halo = (place, labelAt) => {
          for (const grp of m.groups.filter((x) => x.lib)) {
            const rr = rng(hash2(grp.name) ^ 625341585);
            for (const f of grp.files) {
              const p = place(grp, f, rr);
              node(f, p.x, p.y, "leaf", { ...rz(grp, f), z: p.z });
            }
            const lp = labelAt(grp);
            labels.push({ text: star(grp), x: lp.x, y: lp.y, z: lp.z });
          }
        };
        const bendCtrl = (x0, y0, x1, y1, cx, cy) => ({ cx: lerp((x0 + x1) / 2, cx, bendK), cy: lerp((y0 + y1) / 2, cy, bendK) });
        let home;
        if (g.shape === "tree") {
          const T = Math.max(120, Math.min(w * 0.9, (w - 150) / 0.78, (h - 110) / 0.88));
          const trunk = T * 0.2 * (g.trunk ?? 1);
          const drop = Math.max(0, (h - 110 - T * 0.88) / 2);
          const fork = { x: w / 2, y: 50 + drop + T * 0.44 + Math.max(0, T * 0.2 - trunk) };
          home = { x: w / 2, y: fork.y + trunk };
          S = T;
          curves.push({ x0: home.x, y0: home.y, cx: home.x, cy: (home.y + fork.y) / 2, x1: fork.x, y1: fork.y, width: 3, color: c.branch });
          const max = Math.min(Math.PI * 0.95, deg((g.fan ?? 140) / 2) * spread);
          const canopy = upper.filter((x) => x.lib), branches = upper.filter((x) => !x.lib);
          branches.forEach((grp, i) => {
            const r2 = rng(hash2(grp.name)), dr = depthRng(grp), col = gcol(grp);
            const a = -Math.PI / 2 + deg(g.tilt || 0) + (branches.length === 1 ? 0 : lerp(-max, max, i / (branches.length - 1)));
            const L = S * 0.34 * lenK * (0.85 + r2() * 0.3);
            const x1 = fork.x + Math.cos(a) * L, y1 = fork.y + Math.sin(a) * L;
            const lean = Math.sin(i * GOLDEN + 0.6) * S * 0.3 * D;
            const cv = Object.assign({ x0: fork.x, y0: fork.y, z0: 0, x1, y1, z1: lean, zc: lean * 0.55, width: 1.8, color: col.branch }, bendCtrl(fork.x, fork.y, x1, y1, fork.x + (x1 - fork.x) * 0.15, fork.y + (y1 - fork.y) * 0.8));
            curves.push(cv);
            sprout(cv, r2, Math.round(5 * foliage), L * 0.42, col.branch, dr);
            for (const f of grp.files) {
              const t = 0.35 + 0.65 * Math.sqrt(r2());
              const wide = 1 + Math.sqrt(grp.files.length) / 7;
              const p = qpt(cv, t), n = qnormal(cv, t), off = (r2() * 2 - 1) * S * 0.07 * t * scatter * wide;
              const z = qz(cv, t);
              node(f, p.x + n.x * off, p.y + n.y * off - r2() * S * 0.02 * scatter, "leaf", { ...rz(grp, f), z: z + (dr() - 0.5) * S * 0.12 * t * scatter * wide * D, tx: p.x, ty: p.y, tz: z, col: col.leaf, tw: col.branch });
            }
            labels.push({ text: star(grp), x: x1 + Math.cos(a) * 18, y: y1 + Math.sin(a) * 18, z: lean });
          });
          for (const grp of canopy) {
            const r2 = rng(hash2(grp.name)), dr = depthRng(grp);
            for (const f of grp.files) {
              const a = -Math.PI / 2 + deg(g.tilt || 0) + (r2() * 2 - 1) * max * 1.08;
              const rad = S * (0.1 + 0.34 * lenK * Math.sqrt(r2()));
              node(f, fork.x + Math.cos(a) * rad, fork.y + Math.sin(a) * rad, "leaf", { ...rz(grp, f), z: (dr() - 0.5) * S * 0.6 * D });
            }
            labels.push({ text: star(grp), x: fork.x, y: fork.y - S * 0.44 * Math.max(1, lenK) - 18 });
          }
          const rmax = deg((g.rootFan ?? 110) / 2);
          lower.forEach((grp, i) => {
            const r2 = rng(hash2(grp.name)), dr = depthRng(grp), col = gcol(grp);
            const a = Math.PI / 2 + (lower.length === 1 ? 0 : lerp(-rmax, rmax, i / (lower.length - 1)) * spread);
            const L = S * 0.17 * lenK * (0.85 + r2() * 0.3);
            const x1 = home.x + Math.cos(a) * L, y1 = home.y + Math.sin(a) * L;
            const lean = Math.sin(i * GOLDEN + 2.1) * S * 0.18 * D;
            const cv = Object.assign({ x0: home.x, y0: home.y, z0: 0, x1, y1, z1: lean, zc: lean * 0.3, width: 1.4, color: col.branch }, bendCtrl(home.x, home.y, x1, y1, home.x + (x1 - home.x) * 0.75, home.y + (y1 - home.y) * 0.2));
            curves.push(cv);
            sprout(cv, r2, Math.round(2 * foliage), L * 0.5, col.branch, dr);
            for (const f of grp.files) {
              const t = 0.3 + 0.7 * r2();
              const p = qpt(cv, t), n = qnormal(cv, t), off = (r2() * 2 - 1) * S * 0.035 * scatter;
              const z = qz(cv, t);
              node(f, p.x + n.x * off, p.y + n.y * off, "root", { ...rz(grp, f), z: z + (dr() - 0.5) * S * 0.06 * scatter * D, tx: p.x, ty: p.y, tz: z, col: col.leaf, tw: col.branch });
            }
            labels.push({ text: star(grp), x: x1 + Math.cos(a) * 16, y: y1 + Math.sin(a) * 16, z: lean });
          });
          if (g.frame) rings.push({ x: fork.x, y: fork.y, r: S * 0.44, a0: Math.PI * 1.08, a1: Math.PI * 1.92, axis: true });
        } else if (g.shape === "radial") {
          home = { x: w / 2, y: h / 2 };
          const all = upper.concat(lower);
          const arc = deg(g.fan >= 180 ? 360 : Math.max(60, (g.fan ?? 140) * 2.57));
          all.forEach((grp, i) => {
            const r2 = rng(hash2(grp.name)), dr = depthRng(grp), col = gcol(grp);
            const a = -Math.PI / 2 + deg(g.tilt || 0) + (arc >= Math.PI * 2 - 0.01 ? i / all.length * Math.PI * 2 : lerp(-arc / 2, arc / 2, all.length === 1 ? 0.5 : i / (all.length - 1)));
            const L = S * 0.3 * lenK * (0.8 + r2() * 0.3) * spread;
            const x1 = home.x + Math.cos(a) * L, y1 = home.y + Math.sin(a) * L;
            const lean = Math.sin(i * GOLDEN) * S * 0.3 * D;
            const bend = a + 0.35;
            const cv = Object.assign({ x0: home.x, y0: home.y, z0: 0, x1, y1, z1: lean, zc: lean * 0.5, width: 1.6, color: col.branch }, bendCtrl(home.x, home.y, x1, y1, home.x + Math.cos(bend) * L * 0.55, home.y + Math.sin(bend) * L * 0.55));
            curves.push(cv);
            sprout(cv, r2, Math.round(2 * foliage), L * 0.35, col.branch, dr);
            for (const f of grp.files) {
              const rad = S * 0.09 * scatter * Math.sqrt(r2()), ang = r2() * Math.PI * 2;
              node(f, x1 + Math.cos(ang) * rad, y1 + Math.sin(ang) * rad, grp.root ? "root" : "leaf", { ...rz(grp, f), z: lean + (dr() - 0.5) * S * 0.18 * scatter * D, tx: x1, ty: y1, tz: lean, col: col.leaf, tw: col.branch });
            }
            labels.push({ text: star(grp), x: home.x + Math.cos(a) * (L + S * 0.12), y: home.y + Math.sin(a) * (L + S * 0.12), z: lean });
          });
          if (g.frame) rings.push({ x: home.x, y: home.y, r: S * 0.47, a0: 0, a1: Math.PI * 2 });
        } else if (g.shape === "orbit") {
          home = { x: w / 2, y: h / 2 };
          const all = upper.concat(lower);
          const spin = g.spin ?? 1;
          all.forEach((grp, k) => {
            const col = gcol(grp), dr = depthRng(grp);
            const radius = S * (0.08 + 0.38 * lenK * (k + 1) / all.length) * spread;
            const phase = hash2(grp.name) % 628 / 100;
            const sp = 0.12 / (k + 1) * spin * (k % 2 && g.alternate ? -1 : 1);
            const pl = plane((dr() * 2 - 1) * 0.75 * Math.min(1.5, D), dr() * Math.PI);
            rings.push({ x: home.x, y: home.y, r: radius, a0: 0, a1: Math.PI * 2, faint: true, color: col.branch, u: pl.u, v: pl.v });
            grp.files.forEach((f, j) => {
              const r2 = rng(hash2(f.path));
              node(f, 0, 0, grp.root ? "root" : "leaf", { ...rz(grp, f), cx: home.x, cy: home.y, pr: radius + (r2() - 0.5) * S * 0.03 * scatter, pa: phase + j / grp.files.length * Math.PI * 2, spin: sp, col: col.leaf, u: pl.u, v: pl.v });
            });
            labels.push({ text: star(grp), x: 0, y: 0, spinWith: { pr: radius, pa: phase, spin: sp, cx: home.x, cy: home.y, u: pl.u, v: pl.v } });
          });
        } else if (g.shape === "helix") {
          home = { x: w / 2, y: h / 2 };
          const all = upper.concat(lower).filter((x) => !x.lib);
          const H = Math.min(h - 120, S * 1.05) * Math.min(1.3, lenK);
          const R = S * 0.2 * spread;
          const top = h / 2 - H / 2;
          const strands = g.strands === 1 ? 1 : 2;
          const turns = (g.twist ?? 2.6) * 0.75;
          const seq = [];
          for (const grp of all) for (const f of grp.files) seq.push({ grp, f });
          const levels = Math.max(2, Math.ceil(seq.length / strands));
          const at = (u, s, out = 0) => {
            const a = u * turns * Math.PI * 2 + s * Math.PI + deg(g.tilt || 0);
            return { x: w / 2 + Math.cos(a) * (R + out), y: top + u * H, z: Math.sin(a) * (R + out) * D, a };
          };
          for (let s = 0; s < strands; s++) {
            const pts = [];
            for (let i = 0; i <= 160; i++) pts.push(at(i / 160, s));
            lines.push({ pts, color: s ? c.root : c.branch, alpha: 0.8, width: 1.8, pulse: true });
          }
          if (g.frame) lines.push({ pts: [{ x: w / 2, y: top - 20, z: 0 }, { x: w / 2, y: top + H + 20, z: 0 }], color: c.branch, alpha: 0.25, width: 1, dash: true });
          const every = Math.max(1, Math.ceil(levels / 48));
          let last = null;
          seq.forEach(({ grp, f }, j) => {
            const r3 = rng(hash2(f.path)), col = gcol(grp);
            const level = Math.floor(j / strands), s = j % strands, u = (level + 0.5) / levels;
            const on = at(u, s), p = at(u + (r3() - 0.5) * 6e-3, s, (strands === 1 ? S * 0.035 : 0) + (r3() - 0.5) * S * 0.03 * scatter);
            node(f, p.x, p.y, grp.root ? "root" : "leaf", { ...rz(grp, f), z: p.z, tx: on.x, ty: on.y, tz: on.z, col: col.leaf, tw: col.branch });
            if (s === strands - 1 && level % every === 0) {
              const a = at(u, 0), b = strands === 2 ? at(u, 1) : { x: w / 2, y: a.y, z: 0 };
              curves.push({ x0: a.x, y0: a.y, z0: a.z, cx: (a.x + b.x) / 2, cy: (a.y + b.y) / 2, zc: (a.z + b.z) / 2, x1: b.x, y1: b.y, z1: b.z, width: 0.8, color: col.branch, alpha: 0.5 });
            }
            if (grp !== last) {
              const lp = at(u, s, S * 0.09);
              labels.push({ text: star(grp), x: lp.x, y: lp.y, z: lp.z });
              last = grp;
            }
          });
          const r2 = rng(11);
          for (let d = 0, n = Math.round(30 * foliage); d < n; d++) {
            const q = at(r2(), r2() < 0.5 ? 0 : 1, (r2() - 0.5) * S * 0.08);
            deco.push({ x: q.x, y: q.y, z: q.z, r: 0.6 + r2() * 1.1, ph: r2() * 6.28 });
          }
          halo((grp, f, rr) => at(rr(), rr() * 2, R * (0.4 + rr() * 0.9)), (grp) => ({ x: w / 2, y: top - 26, z: 0 }));
        } else if (g.shape === "lotus") {
          home = { x: w / 2, y: h / 2 };
          const up = upper.filter((x) => !x.lib);
          const outer = up.length ? up : lower, inner = up.length ? lower : [];
          const width = Math.max(0.4, Math.min(1.6, (g.fan ?? 140) / 140));
          const petals = (list, Rp2, lift, phase) => {
            const P = Math.max(list.length, 3);
            list.forEach((grp, i) => {
              const r2 = rng(hash2(grp.name)), dr = depthRng(grp), col = gcol(grp);
              const th = -Math.PI / 2 + deg(g.tilt || 0) + phase + i / P * Math.PI * 2;
              const half = Math.min(0.95, Math.PI / P * 0.92 * width);
              const pos = (q, side) => {
                const a = th + side * half * Math.pow(Math.sin(Math.PI * Math.min(1, q)), 0.7);
                return { x: home.x + Math.cos(a) * Rp2 * q, y: home.y + Math.sin(a) * Rp2 * q, z: -lift * Rp2 * q * q * D };
              };
              const pts = [];
              for (let k = 0; k <= 24; k++) pts.push(pos(k / 24, 1));
              for (let k = 24; k >= 0; k--) pts.push(pos(k / 24, -1));
              lines.push({ pts, color: col.branch, alpha: 0.75, width: 1.2 });
              const mid = pos(0.5, 0), tip = pos(1, 0);
              curves.push({ x0: home.x, y0: home.y, z0: 0, cx: mid.x, cy: mid.y, zc: mid.z, x1: tip.x, y1: tip.y, z1: tip.z, width: 1.4, color: col.branch, alpha: 0.5 });
              for (const f of grp.files) {
                const q = 0.22 + 0.74 * Math.sqrt(r2()), p = pos(q, (r2() * 2 - 1) * 0.85 * scatter);
                node(f, p.x, p.y, grp.root ? "root" : "leaf", { ...rz(grp, f), z: p.z + (dr() - 0.5) * S * 0.03 * D, col: col.leaf });
              }
              for (let d = 0, n = Math.round(5 * foliage); d < n; d++) {
                const p = pos(0.15 + r2() * 0.85, r2() * 2 - 1);
                deco.push({ x: p.x, y: p.y, z: p.z, r: 0.6 + r2() * 1.1, ph: r2() * 6.28, color: col.branch });
              }
              const lp = pos(1.1, 0);
              labels.push({ text: star(grp), x: lp.x, y: lp.y, z: lp.z });
            });
          };
          const Rp = S * 0.42 * lenK * spread;
          petals(outer, Rp, 0.55, 0);
          petals(inner, Rp * 0.5, 0.9, Math.PI / Math.max(outer.length, 3));
          if (g.frame) rings.push({ x: home.x, y: home.y, r: Rp * 1.04, a0: 0, a1: Math.PI * 2, faint: true });
          halo((grp, f, rr) => {
            const q = 0.1 + 0.9 * Math.sqrt(rr()), a = rr() * Math.PI * 2;
            return { x: home.x + Math.cos(a) * Rp * q, y: home.y + Math.sin(a) * Rp * q, z: -0.55 * Rp * q * q * D + (rr() - 0.5) * S * 0.05 * D };
          }, () => ({ x: home.x, y: home.y - Rp * 1.12, z: 0 }));
        } else if (g.shape === "sphere") {
          home = { x: w / 2, y: h / 2 };
          const all = upper.concat(lower).filter((x) => !x.lib);
          const Rs = S * 0.33 * spread * lenK;
          const G = Math.max(1, all.length);
          const norm = (v) => {
            const l = Math.hypot(v.x, v.y, v.z) || 1;
            return { x: v.x / l, y: v.y / l, z: v.z / l };
          };
          const cross = (a, b) => ({ x: a.y * b.z - a.z * b.y, y: a.z * b.x - a.x * b.z, z: a.x * b.y - a.y * b.x });
          const pt = (d, k = 1) => ({ x: home.x + d.x * Rs * k, y: home.y + d.y * Rs * k, z: d.z * Rs * k * D });
          all.forEach((grp, k) => {
            const r3 = rng(hash2(grp.name)), col = gcol(grp);
            const yv = 1 - 2 * (k + 0.5) / G, rad = Math.sqrt(Math.max(0, 1 - yv * yv)), phi = k * GOLDEN + deg(g.tilt || 0);
            const d = { x: Math.cos(phi) * rad, y: yv, z: Math.sin(phi) * rad };
            const t1 = norm(cross(d, Math.abs(d.y) > 0.9 ? { x: 1, y: 0, z: 0 } : { x: 0, y: 1, z: 0 })), t2 = cross(d, t1);
            const cap = Math.min(1.1, 0.12 + Math.sqrt(grp.files.length) * 0.045) * scatter;
            const c0 = pt(d), mid = pt(d, 0.5);
            curves.push({ x0: home.x, y0: home.y, z0: 0, cx: mid.x, cy: mid.y, zc: mid.z, x1: c0.x, y1: c0.y, z1: c0.z, width: 1.4, color: col.branch, alpha: 0.55 });
            for (const f of grp.files) {
              const ang = cap * Math.sqrt(r3()), az = r3() * Math.PI * 2, ca = Math.cos(ang), sa = Math.sin(ang);
              const dir = { x: d.x * ca + (t1.x * Math.cos(az) + t2.x * Math.sin(az)) * sa, y: d.y * ca + (t1.y * Math.cos(az) + t2.y * Math.sin(az)) * sa, z: d.z * ca + (t1.z * Math.cos(az) + t2.z * Math.sin(az)) * sa };
              const p = pt(dir, 1 + (r3() - 0.5) * 0.04);
              node(f, p.x, p.y, grp.root ? "root" : "leaf", { ...rz(grp, f), z: p.z, tx: c0.x, ty: c0.y, tz: c0.z, col: col.leaf, tw: col.branch });
            }
            const lp = pt(d, 1.16);
            labels.push({ text: star(grp), x: lp.x, y: lp.y, z: lp.z });
          });
          if (g.frame) {
            for (const lat of [-60, -30, 0, 30, 60]) {
              const pts = [], yv = Math.sin(deg(lat)), cr = Math.cos(deg(lat));
              for (let i = 0; i <= 64; i++) pts.push(pt({ x: Math.cos(i / 64 * Math.PI * 2) * cr, y: yv, z: Math.sin(i / 64 * Math.PI * 2) * cr }));
              lines.push({ pts, color: c.branch, alpha: 0.12, width: 0.8 });
            }
            for (let lon = 0; lon < 6; lon++) {
              const pts = [], a = lon / 6 * Math.PI;
              for (let i = 0; i <= 64; i++) {
                const b = i / 64 * Math.PI * 2;
                pts.push(pt({ x: Math.cos(a) * Math.cos(b), y: Math.sin(b), z: Math.sin(a) * Math.cos(b) }));
              }
              lines.push({ pts, color: c.branch, alpha: 0.12, width: 0.8 });
            }
          }
          rings.push({ x: home.x, y: home.y, r: Rs * 1.28, a0: 0, a1: Math.PI * 2, color: c.branch, u: { x: 1, y: 0, z: 0 }, v: { x: 0, y: 0, z: D } });
          halo((grp, f, rr) => {
            const yv = rr() * 2 - 1, rad = Math.sqrt(1 - yv * yv), a = rr() * Math.PI * 2;
            return pt({ x: Math.cos(a) * rad, y: yv, z: Math.sin(a) * rad }, 1.12 + rr() * 0.08);
          }, () => pt({ x: 0, y: -1, z: 0 }, 1.32));
          const r2 = rng(13);
          for (let i = 0, n = Math.round(40 * foliage); i < n; i++) {
            const yv = r2() * 2 - 1, rad = Math.sqrt(1 - yv * yv), a = r2() * Math.PI * 2;
            const p = pt({ x: Math.cos(a) * rad, y: yv, z: Math.sin(a) * rad }, 1 + (r2() - 0.5) * 0.1);
            deco.push({ x: p.x, y: p.y, z: p.z, r: 0.6 + r2() * 1.1, ph: r2() * 6.28 });
          }
        } else {
          home = { x: w / 2, y: h / 2 };
          const all = upper.concat(lower);
          const twist = g.twist ?? 2.6, sp = 0.04 * (g.spin ?? 1);
          all.forEach((grp, k) => {
            const r2 = rng(hash2(grp.name)), dr = depthRng(grp), col = gcol(grp);
            const base = k / all.length * Math.PI * 2 + deg(g.tilt || 0);
            grp.files.forEach((f, j) => {
              const t = (j + 1) / (grp.files.length + 1);
              const pr = S * (0.04 + 0.42 * lenK * t) * spread;
              const pa = base + t * twist + (r2() - 0.5) * 0.35 * scatter;
              node(f, 0, 0, grp.root ? "root" : "leaf", { ...rz(grp, f), cx: home.x, cy: home.y, pr: pr + (r2() - 0.5) * S * 0.02 * scatter, pa, spin: sp, col: col.leaf, dz: (dr() - 0.5) * S * 0.08 * D * (1 - t * 0.6) });
            });
            labels.push({ text: star(grp), x: 0, y: 0, spinWith: { pr: S * 0.42 * lenK * spread + 14, pa: base + twist * 0.9, spin: sp, cx: home.x, cy: home.y } });
            arms.push({ base, color: col.branch, cx: home.x, cy: home.y, S: S * spread, twist, len: lenK, spin: sp });
            for (let d = 0, n = Math.round(14 * foliage); d < n; d++) {
              const t = r2();
              deco.push({ cx: home.x, cy: home.y, pr: S * (0.04 + 0.42 * lenK * t) * spread + (r2() - 0.5) * S * 0.04, pa: base + t * twist + (r2() - 0.5) * 0.25, spin: sp, r: 0.6 + r2() * 1.1, ph: r2() * 6.28, color: col.branch, dz: (dr() - 0.5) * S * 0.06 * D });
            }
          });
        }
        const r = rng(7);
        const stars = Array.from({ length: Math.round(60 + this.plugin.settings.starDensity * 140) }, () => ({ x: r() * w, y: r() * h, a: 0.1 + r() * 0.4, ph: r() * 6.28 }));
        this.flies = [];
        nodes.filter((n) => n.heat > 0.02).sort((a, b) => b.heat - a.heat).slice(0, 12).forEach((n) => n.hot = true);
        return { key: `${g.shape}|${g.realm || ""}`, home, nodes, curves, labels, rings, stars, deco, arms, lines, S };
      }
      sprite(color, radius) {
        this.sprites = this.sprites || /* @__PURE__ */ new Map();
        const key = color + radius;
        if (this.sprites.has(key)) return this.sprites.get(key);
        const d = Math.ceil(radius * 2);
        const cv = document.createElement("canvas");
        cv.width = cv.height = d;
        const x = cv.getContext("2d");
        const grad = x.createRadialGradient(radius, radius, 0, radius, radius, radius);
        grad.addColorStop(0, rgba2(color, 0.9));
        grad.addColorStop(0.25, rgba2(color, 0.35));
        grad.addColorStop(1, rgba2(color, 0));
        x.fillStyle = grad;
        x.fillRect(0, 0, d, d);
        this.sprites.set(key, cv);
        return cv;
      }
      // a node's core in the chosen shape
      core(ctx, shape, x, y, r, rot) {
        ctx.beginPath();
        if (shape === "star" || shape === "spark") {
          const pts = shape === "star" ? 5 : 4, inner = shape === "star" ? 0.45 : 0.25;
          for (let i = 0; i < pts * 2; i++) {
            const a = rot + i * Math.PI / pts - Math.PI / 2, rr = i % 2 ? r * inner * 1.6 : r * 1.6;
            i ? ctx.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr) : ctx.moveTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr);
          }
          ctx.closePath();
          ctx.fill();
        } else if (shape === "diamond") {
          ctx.moveTo(x, y - r * 1.4);
          ctx.lineTo(x + r, y);
          ctx.lineTo(x, y + r * 1.4);
          ctx.lineTo(x - r, y);
          ctx.closePath();
          ctx.fill();
        } else if (shape === "square") {
          ctx.rect(x - r, y - r, r * 2, r * 2);
          ctx.fill();
        } else if (shape === "ring") {
          ctx.lineWidth = Math.max(0.8, r * 0.45);
          ctx.strokeStyle = ctx.fillStyle;
          ctx.arc(x, y, r * 1.2, 0, Math.PI * 2);
          ctx.stroke();
        } else {
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      // keeps the optional shader behind the graph in step with the settings
      syncBackground() {
        const fx = this.plugin.settings.fx.graph;
        const want = fx.on && fx.id ? fx.id : null;
        if (this.bgMounted && this.bgMounted.id !== want) {
          this.bgMounted.m?.destroy();
          this.bgMounted = null;
        }
        if (want && !this.bgMounted) this.bgMounted = { id: want, m: this.plugin.bgm.mount(this.bgHost, want) };
        return !!(this.bgMounted && this.bgMounted.m);
      }
      // the shape's lines (rings, branches, strands, petals, galaxy arms) on screen; returns the projected branches and
      // strands so light pulses can run along them
      drawStructure(ctx, sc, P, t, c, lw, straight) {
        for (const rg of sc.rings) {
          ctx.strokeStyle = rgba2(rg.color || c.branch, rg.faint ? 0.14 : 0.22);
          ctx.beginPath();
          const steps = Math.max(12, Math.round((rg.a1 - rg.a0) / (Math.PI * 2) * 72));
          for (let i = 0; i <= steps; i++) {
            const a = rg.a0 + (rg.a1 - rg.a0) * i / steps;
            const q = onRing({ cx: rg.x, cy: rg.y, cz: rg.z || 0, pr: rg.r, u: rg.u, v: rg.v }, a);
            const p = P(q.x, q.y, q.z);
            if (i) ctx.lineTo(p.x, p.y);
            else ctx.moveTo(p.x, p.y);
          }
          ctx.stroke();
          if (rg.axis) {
            const a = P(rg.x, rg.y - rg.r - 10, 0), b = P(rg.x, sc.home.y + sc.S * 0.24, 0);
            ctx.setLineDash([2, 6]);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
            ctx.setLineDash([]);
            for (const yy of [rg.y - rg.r - 4, sc.home.y + sc.S * 0.2]) {
              const p = P(rg.x, yy, 0);
              ctx.beginPath();
              ctx.arc(p.x, p.y, 7 * p.s, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        }
        const dash = this.plugin.settings.graph.lineStyle === "dashed" ? [8, 6] : this.plugin.settings.graph.lineStyle === "dotted" ? [1.5, 5] : [];
        ctx.setLineDash(dash);
        const pcs = [];
        for (const cv of sc.curves) {
          const a = P(cv.x0, cv.y0, cv.z0), b = P(cv.cx, cv.cy, cv.zc), e = P(cv.x1, cv.y1, cv.z1);
          const pc = { x0: a.x, y0: a.y, cx: b.x, cy: b.y, x1: e.x, y1: e.y, color: cv.color, width: cv.width };
          ctx.strokeStyle = rgba2(cv.color, cv.alpha ?? 0.85);
          ctx.shadowColor = rgba2(cv.color, cv.alpha ?? 0.8);
          ctx.lineWidth = cv.width * lw * Math.min(1.6, (a.s + e.s) / 2);
          ctx.beginPath();
          ctx.moveTo(pc.x0, pc.y0);
          if (straight) ctx.lineTo(pc.x1, pc.y1);
          else ctx.quadraticCurveTo(pc.cx, pc.cy, pc.x1, pc.y1);
          ctx.stroke();
          if (cv.width >= 1.4) pcs.push(pc);
        }
        const pls = [];
        for (const ln of sc.lines) {
          ctx.strokeStyle = rgba2(ln.color || c.branch, ln.alpha ?? 0.6);
          ctx.shadowColor = rgba2(ln.color || c.branch, 0.7);
          ctx.lineWidth = (ln.width || 1) * lw;
          if (ln.dash) ctx.setLineDash([2, 6]);
          ctx.beginPath();
          const pts = ln.pts.map((q) => P(q.x, q.y, q.z));
          pts.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y));
          ctx.stroke();
          if (ln.dash) ctx.setLineDash(dash);
          if (ln.pulse) pls.push({ pts, color: ln.color || c.branch });
        }
        for (const arm of sc.arms) {
          ctx.strokeStyle = rgba2(arm.color, 0.4);
          ctx.shadowColor = rgba2(arm.color, 0.7);
          ctx.lineWidth = 1.2 * lw;
          ctx.beginPath();
          for (let i = 0; i <= 60; i++) {
            const k = i / 60, a = arm.base + k * arm.twist + t * arm.spin, rr = arm.S * (0.04 + 0.42 * arm.len * k);
            const p = P(arm.cx + Math.cos(a) * rr, arm.cy + Math.sin(a) * rr, 0);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        }
        ctx.setLineDash([]);
        return { pcs, pls };
      }
      frame() {
        const g = this.plugin.settings.graph, s = this.plugin.settings;
        const now = performance.now();
        const dt = Math.min(0.1, (now - (this.lastFrame || now)) / 1e3);
        this.lastFrame = now;
        const tPitch = deg(g.pitch || 0), tYaw = deg(g.yaw || 0);
        if (this.camPitch === void 0) {
          this.camPitch = tPitch;
          this.camYaw = tYaw;
        }
        const easing = Math.abs(tPitch - this.camPitch) + Math.abs(tYaw - this.camYaw) > 5e-4;
        if (easing) {
          const k = Math.min(1, dt * 3.5);
          this.camPitch += (tPitch - this.camPitch) * k;
          this.camYaw += (tYaw - this.camYaw) * k;
        }
        const moving = g.speed > 0 || easing || !!this.morph;
        if (!moving && !this.dirty) return;
        if (!this.model) this.model = this.buildModel();
        if (!this.scene) {
          this.scene = this.layout();
          const secs = g.morph ?? 1.6;
          if (this.prevScene && this.prevPos && this.prevScene.key !== this.scene.key && secs > 0) this.morph = { from: this.prevPos, old: this.prevScene, t0: now, dur: secs * 1e3 };
          this.prevScene = null;
          this.prevPos = null;
        }
        this.dirty = false;
        const ctx = this.ctx, c = this.colors(), sc = this.scene, w = this.w, h = this.h;
        const t = (now - this.t0) / 1e3 * g.speed;
        const glow = s.glow;
        const hasBg = this.syncBackground();
        let mk = 1, old = null, from = null;
        if (this.morph) {
          const k = (now - this.morph.t0) / this.morph.dur;
          if (k >= 1) this.morph = null;
          else {
            mk = easeInOut(k);
            old = this.morph.old;
            from = this.morph.from;
          }
        }
        const view = { yaw: this.camYaw + this.yaw + t * (g.autoTurn || 0), pitch: this.camPitch + this.pitch, roll: this.roll + t * (g.autoSpin || 0) };
        const turned = Math.abs(view.yaw) + Math.abs(view.pitch) + Math.abs(view.roll) > 1e-3;
        const P = camera(view, w / 2, h / 2, sc.S * 2.6);
        const hp = P(sc.home.x, sc.home.y, 0);
        this.homeP = hp;
        const fog = (z) => Math.max(0.28, Math.min(1, 1 - z / (sc.S * 1.1)));
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = hasBg ? rgba2(c.bg, Math.max(0, 1 - s.fx.graph.opacity)) : c.bg;
        ctx.fillRect(0, 0, w, h);
        const vg = ctx.createRadialGradient(hp.x, hp.y - sc.S * 0.15, 0, hp.x, hp.y, sc.S * 0.7);
        vg.addColorStop(0, rgba2(c.branch, 0.07 * glow));
        vg.addColorStop(1, rgba2(c.branch, 0));
        ctx.fillStyle = vg;
        ctx.fillRect(0, 0, w, h);
        for (const st of sc.stars) {
          ctx.fillStyle = rgba2(c.leaf, st.a * (0.6 + 0.4 * Math.sin(t * 0.8 + st.ph)));
          ctx.fillRect(st.x, st.y, 1, 1);
        }
        ctx.save();
        ctx.translate(this.panX || 0, this.panY || 0);
        ctx.scale(this.zoom || 1, this.zoom || 1);
        const bk = 1 + (g.breathe || 0) * 0.035 * Math.sin(t * 0.8);
        ctx.save();
        ctx.translate(hp.x, hp.y);
        ctx.scale(bk, bk);
        ctx.translate(-hp.x, -hp.y);
        const lw = g.lineWidth ?? 1;
        const straight = g.lineStyle === "straight";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 10 * glow;
        if (old) {
          ctx.globalAlpha = 1 - mk;
          this.drawStructure(ctx, old, P, t, c, lw, straight);
        }
        ctx.globalAlpha = mk;
        ctx.lineWidth = 1;
        const { pcs, pls } = this.drawStructure(ctx, sc, P, t, c, lw, straight);
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
        const sway = (g.sway ?? 1) * (sc.arms.length || sc.nodes[0]?.pr !== void 0 ? 0 : 1);
        const ss = g.swaySpeed ?? 1;
        const swirl = 4 * mk * (1 - mk) * 0.9, cs = Math.cos(swirl), sn = Math.sin(swirl);
        for (const n of sc.nodes) {
          let x, y, z;
          if (n.pr !== void 0) ({ x, y, z } = onRing(n, n.pa + t * n.spin));
          else {
            x = n.x + Math.sin(t * 0.7 * ss + n.ph) * 1.4 * sway;
            y = n.y + Math.cos(t * 0.5 * ss + n.ph) * 0.8 * sway;
            z = n.z || 0;
          }
          if (from) {
            const f = from.get(n.file.path) || { x: sc.home.x, y: sc.home.y, z: 0 };
            x = lerp(f.x, x, mk) - w / 2;
            y = lerp(f.y, y, mk) - h / 2;
            z = lerp(f.z, z, mk);
            [x, y] = [w / 2 + x * cs - y * sn, h / 2 + x * sn + y * cs];
          }
          n.wx = x;
          n.wy = y;
          n.wz = z;
          const p = P(x, y, z);
          n.dx = p.x;
          n.dy = p.y;
          n.ds = p.s;
          n.dz = p.z;
        }
        const byPath = new Map(sc.nodes.map((n) => [n.file.path, n]));
        ctx.lineWidth = 0.6 * lw;
        ctx.globalAlpha = mk;
        for (const n of sc.nodes) {
          if (n.tx === void 0) continue;
          const b = P(n.tx, n.ty, n.tz || 0);
          ctx.strokeStyle = rgba2(n.tw || (n.kind === "root" ? c.root : c.branch), 0.35);
          ctx.beginPath();
          ctx.moveTo(b.x, b.y);
          ctx.lineTo(n.dx, n.dy);
          ctx.stroke();
        }
        ctx.globalAlpha = 1;
        if (g.showLinks) {
          ctx.strokeStyle = rgba2(c.leaf, g.linkAlpha);
          ctx.beginPath();
          for (const [a, b] of this.model.links) {
            const p = byPath.get(a), q = byPath.get(b);
            if (!p || !q) continue;
            ctx.moveTo(p.dx, p.dy);
            ctx.lineTo(q.dx, q.dy);
          }
          ctx.stroke();
        }
        ctx.globalCompositeOperation = "lighter";
        const pulses = Math.round(g.pulses ?? 0);
        const paths = pcs.length + pls.length;
        if (pulses && paths) {
          for (let k = 0; k < pulses; k++) {
            const i = k % paths;
            const u = (t * 0.25 * (g.pulseSpeed ?? 1) + k * 0.618) % 1;
            let p, color;
            if (i < pcs.length) {
              const cv = pcs[i];
              p = straight ? { x: lerp(cv.x0, cv.x1, u), y: lerp(cv.y0, cv.y1, u) } : qpt(cv, u);
              color = cv.color;
            } else {
              p = along(pls[i - pcs.length].pts, (u + k * 0.13) % 1);
              color = pls[i - pcs.length].color;
            }
            const R = Math.round(5 + 4 * glow);
            ctx.globalAlpha = Math.sin(u * Math.PI) * mk;
            ctx.drawImage(this.sprite(mix2(color, "#ffffff", 0.5), R), p.x - R, p.y - R);
          }
        }
        const twk = Math.min(0.95, 0.35 * (g.twinkle ?? 1));
        for (const d of sc.deco) {
          let q = d;
          if (d.pr !== void 0) q = onRing(d, d.pa + t * d.spin);
          const p = P(q.x, q.y, q.z || 0);
          const R = Math.max(1, Math.round(d.r * (2 + 2 * glow) * p.s));
          ctx.globalAlpha = (0.6 - twk * 0.5 + twk * 0.5 * Math.sin(t * 1.7 + d.ph)) * fog(p.z) * mk;
          ctx.drawImage(this.sprite(c.leaf, R), p.x - R, p.y - R);
        }
        const shape = g.nodeShape || "circle";
        for (const n of sc.nodes) {
          const col = n.col || (n.kind === "root" ? c.root : c.leaf);
          const tw = 1 - twk + twk * Math.sin(t * 1.3 + n.ph * 3);
          const R = Math.max(1, n.r * (3 + 3 * glow) * (n.lib ? 0.6 : 1) * n.ds);
          const fade = fog(n.dz) * (from && !from.has(n.file.path) ? mk : 1);
          ctx.globalAlpha = Math.max(0.15, tw) * (n.lib ? 0.4 : 1) * fade;
          ctx.drawImage(this.sprite(col, Math.round(R)), n.dx - R, n.dy - R);
          ctx.fillStyle = mix2(col, "#ffffff", 0.35);
          this.core(ctx, shape, n.dx, n.dy, n.r * 0.7 * n.ds, t * 0.5 + n.ph);
          if (n.heat > 0.02 && n.hot) {
            const pulse = 0.5 + 0.5 * Math.sin(t * 3 + n.ph);
            const HR2 = Math.round(R * (1.3 + 0.5 * pulse));
            ctx.globalAlpha = n.heat * (0.15 + 0.25 * pulse) * fade;
            ctx.drawImage(this.sprite(mix2(col, "#ffffff", 0.55), HR2), n.dx - HR2, n.dy - HR2);
          }
        }
        ctx.globalAlpha = 1;
        ctx.restore();
        const want = Math.round(g.fireflies);
        while (this.flies.length < want) this.flies.push(this.spawnFly(sc, true));
        this.flies.length = Math.min(this.flies.length, want);
        const fdt = moving ? g.flySpeed ?? 1 : 0;
        const dir = g.flyDir || "up";
        for (let i = 0; i < this.flies.length; i++) {
          const f = this.flies[i];
          if (dir === "swirl") {
            const dx = f.x - hp.x, dy = f.y - hp.y, d = Math.hypot(dx, dy) || 1;
            f.x += -dy / d * 0.8 * fdt * g.speed + dx / d * 0.05 * fdt;
            f.y += dx / d * 0.8 * fdt * g.speed + dy / d * 0.05 * fdt;
          } else {
            f.x += (f.vx + Math.sin(t + f.ph) * 0.15) * fdt * g.speed;
            f.y += f.vy * fdt * g.speed;
          }
          f.life -= 4e-3 * fdt * g.speed;
          if (f.life <= 0 || f.y < 0 || f.y > h || f.x < 0 || f.x > w) this.flies[i] = this.spawnFly(sc, false);
          ctx.globalAlpha = Math.max(0, Math.min(1, f.life)) * 0.8;
          ctx.drawImage(this.sprite(c.leaf, 4), f.x - 4, f.y - 4);
        }
        ctx.globalAlpha = 1;
        const hpulse = 0.8 + 0.2 * Math.sin(t * 1.6);
        const HR = Math.round(18 + 10 * glow);
        ctx.drawImage(this.sprite(c.leaf, HR), hp.x - HR, hp.y - HR);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "#ffffff";
        ctx.globalAlpha = hpulse;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = rgba2(c.branch, 0.9);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(hp.x, hp.y, 9, 0, Math.PI * 2);
        ctx.stroke();
        if (this.hover) {
          ctx.strokeStyle = c.leaf;
          ctx.beginPath();
          ctx.arc(this.hover.dx, this.hover.dy, this.hover.r * (this.hover.ds || 1) + 5, 0, Math.PI * 2);
          ctx.stroke();
        }
        const head = fontFamily2(s.fontHead);
        ctx.textBaseline = "middle";
        if ("letterSpacing" in ctx) ctx.letterSpacing = "2px";
        if (g.labels) {
          ctx.font = `600 11px ${head}`;
          ctx.textAlign = "center";
          const placed = [];
          for (const lb of sc.labels) {
            let p;
            if (lb.spinWith) {
              const q = onRing(lb.spinWith, lb.spinWith.pa + t * lb.spinWith.spin);
              p = P(q.x, q.y, q.z);
              p = { x: p.x, y: p.y - 12, z: p.z };
            } else p = P(lb.x, lb.y, lb.z || 0);
            let x = p.x, y = p.y;
            const text = lb.text.toUpperCase();
            const half = ctx.measureText(text).width / 2 + 10;
            if (!turned) x = Math.max(half, Math.min(w - half, x));
            for (let k = 0; k < 8; k++) {
              const hit = placed.find((q) => Math.abs(q.x - x) < q.half + half - 14 && Math.abs(q.y - y) < 13);
              if (!hit) break;
              y = hit.y - 14;
            }
            placed.push({ x, y, half });
            ctx.fillStyle = rgba2(c.text, 0.85 * fog(p.z) * mk);
            ctx.fillText(text, x, y);
          }
          ctx.textAlign = "left";
          ctx.font = `600 13px ${head}`;
          ctx.fillStyle = c.text;
          ctx.fillText(((this.scoped() || {}).name || g.homeLabel || "Home").toUpperCase(), hp.x + 18, hp.y);
        }
        ctx.restore();
        ctx.textAlign = "center";
        ctx.font = `500 11px ${head}`;
        ctx.fillStyle = rgba2(c.text, 0.7);
        const realm = g.realm && g.realm !== "Gold Tree" ? `  \xB7  ${g.realm.toUpperCase()}` : "";
        const footer = `${this.model.count} NOTES  \xB7  ${this.model.links.length} LINKS  \xB7  ${this.model.groups.length} BRANCHES${realm}`;
        ctx.fillText(footer, w / 2, h - 44);
        if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
        this.drawn = sc.nodes;
      }
      // where a new firefly starts and which way it drifts (Fireflies direction setting)
      spawnFly(sc, anywhere) {
        const dir = this.plugin.settings.graph.flyDir || "up";
        const rnd = Math.random;
        const home = this.homeP || sc.home;
        if (anywhere || dir === "drift" || dir === "swirl") {
          const a = rnd() * 6.28;
          return { x: rnd() * this.w, y: rnd() * this.h, vx: Math.cos(a) * 0.3, vy: Math.sin(a) * 0.3 - (dir === "up" ? 0.3 : 0), life: 0.6 + rnd() * 0.6, ph: rnd() * 6.28 };
        }
        if (dir === "down") return { x: rnd() * this.w, y: 2, vx: (rnd() - 0.5) * 0.3, vy: 0.25 + rnd() * 0.6, life: 0.8 + rnd() * 0.6, ph: rnd() * 6.28 };
        if (dir === "out") {
          const a = rnd() * 6.28, sp = 0.3 + rnd() * 0.6;
          return { x: home.x, y: home.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 0.8 + rnd() * 0.5, ph: rnd() * 6.28 };
        }
        const tree = this.plugin.settings.graph.shape === "tree";
        return { x: tree ? home.x + (rnd() - 0.5) * 30 : rnd() * this.w, y: tree ? home.y : this.h - 2, vx: (rnd() - 0.5) * 0.4, vy: -(0.2 + rnd() * 0.6), life: 0.6 + rnd() * 0.6, ph: rnd() * 6.28 };
      }
      pick(e) {
        const r = this.canvas.getBoundingClientRect();
        const sx = e.clientX - r.left, sy = e.clientY - r.top;
        const z = this.zoom || 1;
        const x = (sx - (this.panX || 0)) / z, y = (sy - (this.panY || 0)) / z;
        let best = null, bd = (12 / z) ** 2;
        for (const n of this.drawn) {
          const d = (n.dx - x) ** 2 + (n.dy - y) ** 2;
          if (d < bd || best && Math.abs(d - bd) < 1 && n.dz < best.dz) {
            bd = d;
            best = n;
          }
        }
        return { best, x: sx, y: sy };
      }
      onMove(e) {
        if (this.turn) {
          const tn = this.turn;
          if (Math.abs(e.clientX - tn.x) + Math.abs(e.clientY - tn.y) > 3) tn.moved = true;
          if (tn.flat) this.roll = tn.roll + (this.turnAngle(e) - tn.a0);
          else Object.assign(this, dragTurn(tn, e.clientX - tn.x, e.clientY - tn.y));
          this.dirty = true;
          this.tip.hide();
          return;
        }
        if (this.drag) {
          const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
          if (Math.abs(dx) + Math.abs(dy) > 4) this.drag.moved = true;
          this.panX = this.drag.panX + dx;
          this.panY = this.drag.panY + dy;
          this.dirty = true;
          this.tip.hide();
          return;
        }
        const { best, x, y } = this.pick(e);
        this.hover = best;
        this.dirty = true;
        this.canvas.style.cursor = best ? "pointer" : "grab";
        if (best) {
          this.tip.setText(best.file.basename);
          this.tip.style.left = `${x}px`;
          this.tip.style.top = `${y}px`;
          this.tip.show();
        } else {
          this.tip.hide();
        }
      }
      onClick(e) {
        if (this.dragMoved) return;
        const { best } = this.pick(e);
        if (best) this.app.workspace.getLeaf(e.ctrlKey || e.metaKey ? "split" : "tab").openFile(best.file);
      }
      // zoom toward a screen point, keeping that point still
      zoomAt(sx, sy, factor) {
        const z = this.zoom || 1, nz = Math.max(0.3, Math.min(10, z * factor));
        this.panX = sx - (sx - (this.panX || 0)) * (nz / z);
        this.panY = sy - (sy - (this.panY || 0)) * (nz / z);
        this.zoom = nz;
        this.dirty = true;
      }
      // the pointer's angle around the middle of the view, on screen (Shift+right-drag spins it flat)
      turnAngle(e) {
        const r = this.canvas.getBoundingClientRect(), z = this.zoom || 1;
        const cx = (this.panX || 0) + this.w / 2 * z, cy = (this.panY || 0) + this.h / 2 * z;
        return Math.atan2(e.clientY - r.top - cy, e.clientX - r.left - cx);
      }
      // back to the realm's own view: your turn, zoom and position cleared
      resetView() {
        this.yaw = 0;
        this.pitch = 0;
        this.roll = 0;
        this.zoom = 1;
        this.panX = 0;
        this.panY = 0;
        this.dirty = true;
      }
      // pick a realm from the graph itself
      realmMenu(e) {
        const menu = new Menu();
        const p = this.plugin, cur = p.settings.graph.realm;
        let group = null;
        for (const r of REALMS2.concat((p.settings.shapes || []).map((x) => ({ name: x.name, group: "Mine", saved: x })))) {
          if (r.group !== group) {
            if (group !== null) menu.addSeparator();
            group = r.group;
          }
          menu.addItem((i) => i.setTitle(r.name).setChecked(r.name === cur).onClick(() => p.setRealm(r.saved ? p.savedRealm(r.saved) : r)));
        }
        menu.addSeparator();
        menu.addItem((i) => i.setTitle("Undo realm").setIcon("undo-2").onClick(() => p.undoRealm()));
        menu.showAtMouseEvent(e);
      }
      // the tour: every few seconds the graph morphs into the next realm; stopping brings yours back
      toggleTour() {
        if (this.tour) return this.stopTour(true);
        const p = this.plugin, g = p.settings.graph;
        const start = REALMS2.findIndex((r) => r.name === g.realm);
        this.tour = { mine: realmFromGraph2(g, g.realm || "Mine"), i: start };
        const next = () => {
          this.tour.i = (this.tour.i + 1) % REALMS2.length;
          p.setRealm(REALMS2[this.tour.i], { undo: false });
          new Notice2(`Graph Realm: ${REALMS2[this.tour.i].name}`, 2500);
        };
        next();
        this.tour.timer = window.setInterval(next, 9e3);
        if (this.tourButton) {
          setIcon2(this.tourButton, "pause");
          this.tourButton.setAttr("aria-label", "Stop the tour (your realm comes back)");
        }
      }
      stopTour(restore) {
        if (!this.tour) return;
        window.clearInterval(this.tour.timer);
        const mine = this.tour.mine;
        this.tour = null;
        if (restore) this.plugin.setRealm(mine, { undo: false });
        if (this.tourButton) {
          setIcon2(this.tourButton, "play");
          this.tourButton.setAttr("aria-label", "Tour the realms: the graph morphs through each one");
        }
      }
      // wheel to zoom, drag to move, right-drag to turn, double-click to reset, plus the corner buttons
      setupNavigation() {
        const cv = this.canvas;
        this.registerDomEvent(cv, "wheel", (e) => {
          e.preventDefault();
          const r = cv.getBoundingClientRect();
          this.zoomAt(e.clientX - r.left, e.clientY - r.top, Math.max(0.89, Math.min(1.12, Math.exp(-e.deltaY * 1e-3))));
        }, { passive: false });
        this.registerDomEvent(cv, "mousedown", (e) => {
          if (e.button === 2) {
            this.turn = { x: e.clientX, y: e.clientY, yaw: this.yaw, pitch: this.pitch, roll: this.roll, flat: e.shiftKey, a0: this.turnAngle(e), moved: false };
            cv.style.cursor = "grabbing";
            return;
          }
          if (e.button !== 0) return;
          this.drag = { x: e.clientX, y: e.clientY, panX: this.panX || 0, panY: this.panY || 0, moved: false };
          cv.style.cursor = "grabbing";
        });
        this.registerDomEvent(cv, "contextmenu", (e) => e.preventDefault());
        this.registerDomEvent(window, "mouseup", () => {
          if (this.turn) {
            this.turn = null;
            cv.style.cursor = "grab";
          }
          if (!this.drag) return;
          this.dragMoved = this.drag.moved;
          this.drag = null;
          cv.style.cursor = "grab";
          window.setTimeout(() => this.dragMoved = false, 0);
        });
        this.registerDomEvent(cv, "dblclick", () => this.resetView());
        const bar = this.contentEl.createDiv({ cls: "evs-zoom" });
        for (const [icon, label, fn] of [
          ["layers", "Graph Realms: pick a look", (e) => this.realmMenu(e)],
          ["play", "Tour the realms: the graph morphs through each one", () => this.toggleTour()],
          ["zoom-in", "Zoom in", () => this.zoomAt(this.w / 2, this.h / 2, 1.25)],
          ["zoom-out", "Zoom out", () => this.zoomAt(this.w / 2, this.h / 2, 0.8)],
          ["scan", "Reset view: zoom, position and turn (or double-click). Right-drag turns the graph any way", () => this.resetView()],
          ["maximize", "Full screen (Esc to leave)", () => this.toggleFullscreen()]
        ]) {
          const b = bar.createEl("button", { cls: "clickable-icon", attr: { "aria-label": label } });
          setIcon2(b, icon);
          b.onclick = fn;
          if (icon === "maximize") this.fsButton = b;
          if (icon === "play") this.tourButton = b;
        }
        this.contentEl.addClass("evs-graph-host");
        this.registerDomEvent(document, "fullscreenchange", () => {
          const on = document.fullscreenElement === this.contentEl;
          if (this.fsButton) {
            setIcon2(this.fsButton, on ? "minimize" : "maximize");
            this.fsButton.setAttr("aria-label", on ? "Leave full screen (Esc)" : "Full screen (Esc to leave)");
          }
          this.resize();
        });
      }
      // the graph alone on the whole screen
      toggleFullscreen() {
        if (document.fullscreenElement === this.contentEl) document.exitFullscreen();
        else this.contentEl.requestFullscreen().catch((e) => new Notice2(`Full screen isn't available here: ${e.message}`));
      }
    };
    module2.exports = { NeuralGraphView: NeuralGraphView2 };
  }
});

// src/views/settings.js
var require_settings = __commonJS({
  "src/views/settings.js"(exports2, module2) {
    "use strict";
    var { Plugin: Plugin2, PluginSettingTab, Setting: Setting2, Notice: Notice2 } = require("obsidian");
    var { FONTS, PRESETS: PRESETS2, DEFAULTS: DEFAULTS2 } = require_constants();
    var { merge: merge2 } = require_util();
    var StudioSettings2 = class extends PluginSettingTab {
      constructor(app, plugin) {
        super(app, plugin);
        this.plugin = plugin;
      }
      display() {
        const el = this.containerEl, p = this.plugin, s = p.settings, g = s.graph;
        el.empty();
        el.addClass("evs-settings");
        const save = async (rebuild) => p.saveSettings(rebuild);
        const custom = () => {
          s.preset = "Custom";
        };
        const color = (name, desc, obj, key, isTheme) => new Setting2(el).setName(name).setDesc(desc).addColorPicker(
          (cp) => cp.setValue(obj[key]).onChange(async (v) => {
            obj[key] = v;
            if (isTheme) custom();
            await save();
          })
        );
        const slider = (name, desc, obj, key, min, max, step, rebuild) => new Setting2(el).setName(name).setDesc(desc).addSlider(
          (sl) => sl.setLimits(min, max, step).setValue(obj[key]).setDynamicTooltip().onChange(async (v) => {
            obj[key] = v;
            await save(rebuild);
          })
        );
        const toggle = (name, desc, obj, key, rebuild) => new Setting2(el).setName(name).setDesc(desc).addToggle(
          (tg) => tg.setValue(!!obj[key]).onChange(async (v) => {
            obj[key] = v;
            await save(rebuild);
          })
        );
        const fonts = (name, key) => new Setting2(el).setName(name).addDropdown((dd) => {
          for (const f of Object.keys(FONTS)) dd.addOption(f, f);
          dd.setValue(s[key]).onChange(async (v) => {
            s[key] = v;
            custom();
            await save();
          });
        });
        el.createEl("h2", { text: "EMX Vault Studio" });
        new Setting2(el).setName("Control panel").setDesc("The quicker way: preset cards, Undo, Surprise me, saved looks, graph shapes, project shortcuts and the how-to guide.").addButton((b2) => b2.setButtonText("Open control panel").setCta().onClick(() => p.openPanel()));
        new Setting2(el).setName("Preset").setDesc("Start from a look, then change anything below. Editing a color switches this to Custom.").addDropdown((dd) => {
          for (const name of Object.keys(PRESETS2)) dd.addOption(name, name);
          dd.addOption("Custom", "Custom");
          dd.setValue(s.preset).onChange(async (v) => {
            if (v !== "Custom") p.applyPreset(v);
            s.preset = v;
            await save();
            this.display();
          });
        });
        toggle("EMX theme on", "Off gives you Obsidian's normal look (the graph view keeps working).", s, "themeOn");
        el.createEl("h3", { text: "Colors" });
        color("Background", "Editor and note background.", s, "bg", true);
        color("Panels", "Sidebars, tabs and title bar.", s, "panel", true);
        color("Accent", "Links, buttons, borders, active items, glow.", s, "accent", true);
        color("Accent 2", "Hover color, highlights and stars.", s, "accent2", true);
        color("Text", "Normal text.", s, "text", true);
        color("Muted text", "Secondary text and icons.", s, "muted", true);
        color("Headings", "Titles and headings.", s, "heading", true);
        el.createEl("h3", { text: "Shape and feel" });
        slider("Glow", "How much things glow (0 = flat).", s, "glow", 0, 2, 0.1);
        slider("Corner roundness", "Pixels: 0 = sharp boxes, 24 = very round.", s, "radius", 0, 24, 1);
        new Setting2(el).setName("Panel frames").setDesc("Border style around the side panels.").addDropdown((dd) => {
          for (const v of ["solid", "double", "dashed", "dotted", "none"]) dd.addOption(v, v);
          dd.setValue(s.frameStyle).onChange(async (v) => {
            s.frameStyle = v;
            await save();
          });
        });
        slider("Frame thickness", "Pixels.", s, "frameWidth", 0, 4, 1);
        toggle("Starfield", "Faint stars behind the app.", s, "stars");
        slider("Star density", "", s, "starDensity", 0, 1, 0.05, true);
        el.createEl("h3", { text: "Fonts" });
        fonts("Headings", "fontHead");
        fonts("Interface", "fontUI");
        fonts("Note text", "fontText");
        toggle("Small caps titles", "Titles, tabs and folders in small capitals.", s, "smallCaps");
        slider("Heading letter spacing", "In em.", s, "headSpacing", 0, 0.3, 0.01);
        el.createEl("h3", { text: "Neural graph" });
        new Setting2(el).setName("Open it").setDesc("Also on the ribbon (sparkles icon) and in the command palette.").addButton(
          (b2) => b2.setButtonText("Open neural graph").setCta().onClick(() => p.openGraph())
        );
        new Setting2(el).setName("Shape").setDesc("How your notes are arranged.").addDropdown((dd) => {
          dd.addOption("tree", "Tree (crown above, roots below)");
          dd.addOption("radial", "Radial burst");
          dd.addOption("orbit", "Orbit rings");
          dd.addOption("galaxy", "Galaxy spiral");
          dd.addOption("helix", "Helix (turning strands)");
          dd.addOption("lotus", "Lotus (a petal per folder)");
          dd.addOption("sphere", "Sphere (a glowing globe)");
          dd.setValue(g.shape).onChange(async (v) => {
            g.shape = v;
            await save();
          });
        });
        new Setting2(el).setName("Title").addText(
          (tx) => tx.setValue(g.title).onChange(async (v) => {
            g.title = v;
            await save();
          })
        );
        new Setting2(el).setName("Center label").setDesc("Label on the center star (your Home note).").addText(
          (tx) => tx.setValue(g.homeLabel).onChange(async (v) => {
            g.homeLabel = v;
            await save();
          })
        );
        toggle("Use theme colors", "Off lets you pick the graph's own colors below.", g, "useTheme");
        if (!g.useTheme) {
          color("Branches", "", g, "branch");
          color("Leaves", "", g, "leaf");
          color("Roots", "", g, "root");
        }
        slider("Node size", "", g, "nodeSize", 1, 6, 0.1);
        toggle("Bigger nodes for linked notes", "", g, "sizeByLinks");
        slider("Spread", "How wide the branches fan out.", g, "spread", 0.4, 1.6, 0.05);
        slider("Foliage", "Extra thin branches and sparkles on the tree and galaxy (decoration, not notes).", g, "foliage", 0, 3, 0.1);
        slider("Fireflies", "Drifting sparks.", g, "fireflies", 0, 200, 5);
        slider("Motion speed", "0 = still.", g, "speed", 0, 3, 0.1);
        toggle("Show note links", "Thin lines between notes that link to each other.", g, "showLinks");
        slider("Link brightness", "", g, "linkAlpha", 0.02, 0.6, 0.02);
        toggle("Labels", "Branch names and the center label.", g, "labels");
        toggle("Frame", "Arc, axis and rings around the shape.", g, "frame");
        new Setting2(el).setName("Root folders").setDesc("Top folders drawn as roots under the tree (comma separated).").addText(
          (tx) => tx.setValue(g.rootFolders).onChange(async (v) => {
            g.rootFolders = v;
            await save(true);
          })
        );
        toggle("Include repo docs", "Show notes inside the Repo - \u2026 folders too.", g, "includeRepo", true);
        el.createEl("h3", { text: "Backup" });
        const b = s.backup;
        toggle("Back up automatically", "Commits what changed and pushes it to the vault's GitHub repo. Never commits secrets or files over 50 MB.", b, "on");
        new Setting2(el).setName("Every").setDesc("Minutes between backups.").addDropdown((dd) => {
          for (const m of [5, 10, 15, 30, 60]) dd.addOption(String(m), `${m} minutes`);
          dd.setValue(String(b.minutes)).onChange(async (v) => {
            b.minutes = +v;
            await save();
          });
        });
        toggle("Push to GitHub", "Off keeps backups on this PC only.", b, "push");
        new Setting2(el).setName("Now").setDesc(p.backup ? p.backup.describe() : "").addButton(
          (btn) => btn.setButtonText("Back up now").onClick(async () => {
            await p.backupNow();
            this.display();
          })
        ).addButton((btn) => btn.setButtonText("Restore a deleted note").onClick(() => p.openDeleted()));
        el.createEl("h3", { text: "Workshop" });
        new Setting2(el).setName("workshop CLI").setDesc("Path to workshop.cjs. Empty uses C:/EMX/Workshop/bin/workshop.cjs.").addText(
          (tx) => tx.setPlaceholder("C:/EMX/Workshop/bin/workshop.cjs").setValue(s.workshop.bin).onChange(async (v) => {
            s.workshop.bin = v.trim();
            await save();
          })
        );
        el.createEl("h3", { text: "Decision guard" });
        toggle("Check against decisions", "Flags text that conflicts with a settled decision or hub rule. Advice only: nothing is ever changed for you.", s.decisions, "on");
        toggle("Underline in the editor", "A dotted underline with a card that explains it on hover.", s.decisions, "editor");
        toggle("Check Workshop tasks", "A shield on task cards that may conflict.", s.decisions, "tasks");
        toggle("Show on banners", "How many conflicts a note has, and decisions to review on hubs.", s.decisions, "banners");
        new Setting2(el).setName("Ask to review a decision after").setDesc("Days without a review before a decision shows as needing one.").addDropdown((dd) => {
          for (const d of [30, 60, 90, 180, 365]) dd.addOption(String(d), `${d} days`);
          dd.setValue(String(s.decisions.staleDays)).onChange(async (v) => {
            s.decisions.staleDays = +v;
            await save();
            p.guard.invalidate();
          });
        });
        el.createEl("h3", { text: "Recaps" });
        toggle("Weekly recap notes", "A note per project in its Recaps folder, and one for everything in _techniques/Workshop recaps.", s.recap.notes, "weekly");
        toggle("Monthly recap notes", "", s.recap.notes, "monthly");
        toggle("This week on mission control", "", s.recap, "mission");
        new Setting2(el).setName("Clips folder").setDesc("Where your recordings are. Empty uses Videos/EMX Clips in your user folder.").addText(
          (tx) => tx.setValue(s.recap.clipsFolder).onChange(async (v) => {
            s.recap.clipsFolder = v.trim();
            await save();
          })
        );
        el.createEl("h3", { text: "Custom CSS" });
        const css = new Setting2(el).setName("Your own CSS").setDesc("Anything goes, applied last. Use the --evs-* variables to match the theme, e.g. .nav-file-title { color: var(--evs-accent2); }").addTextArea(
          (ta) => ta.setValue(s.customCss).onChange(async (v) => {
            s.customCss = v;
            await save();
          })
        );
        css.settingEl.addClass("evs-css");
        el.createEl("h3", { text: "Reset" });
        new Setting2(el).setName("Back to defaults").setDesc("Gold Tree preset and default graph settings. Your look cards, shapes, backgrounds and project colors stay.").addButton(
          (b2) => b2.setButtonText("Reset everything").setWarning().onClick(async () => {
            const keep = ["looks", "myLooks", "shapes", "bgLibrary", "projects", "backup", "playtest", "panelShown"];
            p.settings = merge2(DEFAULTS2, Object.fromEntries(keep.map((k) => [k, p.settings[k]])));
            await save(true);
            new Notice2("EMX Vault Studio reset");
            this.display();
          })
        );
      }
    };
    module2.exports = { StudioSettings: StudioSettings2 };
  }
});

// src/views/notes.js
var require_notes = __commonJS({
  "src/views/notes.js"(exports2, module2) {
    "use strict";
    var { Notice: Notice2, setIcon: setIcon2, editorInfoField } = require("obsidian");
    var { ago, plainText, firstParagraph, section } = require_util();
    var { promptsFor } = require_mission();
    var NoteDecorator2 = class {
      constructor(plugin) {
        this.plugin = plugin;
        this.open = /* @__PURE__ */ new Map();
      }
      kind(p, file) {
        if (!p) return "";
        if (file.path === p.hub) return "hub";
        if (file.path === p.feel) return "feel";
        if (file.path === p.decisions) return "decisions";
        if (file.path === p.questions) return "questions";
        return "note";
      }
      all() {
        for (const leaf of this.plugin.app.workspace.getLeavesOfType("markdown")) this.decorate(leaf.view);
      }
      clear(view) {
        const content = view.containerEl.querySelector(":scope > .view-content");
        if (!content) return null;
        content.querySelectorAll(":scope > .evs-top").forEach((e) => {
          e.evsCleanup?.();
          e.remove();
        });
        content.removeClass("evs-has-top");
        view.containerEl.removeClass("evs-feel", "evs-decisions", "evs-hub");
        return content;
      }
      clearAll() {
        for (const leaf of this.plugin.app.workspace.getLeavesOfType("markdown")) this.clear(leaf.view);
      }
      async decorate(view) {
        const token = view.evsToken = (view.evsToken || 0) + 1;
        const content = this.clear(view);
        const file = view.file;
        if (!content || !file) return;
        const s = this.plugin.settings, n = s.notes;
        const p = this.plugin.store.find(file.path);
        const kind = this.kind(p, file);
        if (kind === "feel" && n.bubbles) view.containerEl.addClass("evs-feel");
        if (kind === "decisions" && n.timeline) view.containerEl.addClass("evs-decisions");
        if (kind === "hub") view.containerEl.addClass("evs-hub");
        const text = await this.plugin.app.vault.cachedRead(file);
        if (token !== view.evsToken) return;
        const top = createDiv({ cls: "evs-top" });
        const cleanups = [];
        if (p && s.banner.on && (kind === "hub" || s.banner.allNotes)) cleanups.push(this.banner(top, p, kind, file));
        const words = (text.replace(/^---\n[\s\S]*?\n---\n/, "").match(/\S+/g) || []).length;
        if (n.summary && words >= n.summaryMin) this.summary(top, file, text, words);
        if (!top.childElementCount) return;
        top.evsCleanup = () => cleanups.forEach((c) => c && c());
        content.prepend(top);
        content.addClass("evs-has-top");
      }
      banner(top, p, kind, file) {
        const plugin = this.plugin, st = plugin.projStyle(p), s = plugin.settings;
        const b = top.createDiv({ cls: "evs-banner" + (kind === "hub" ? "" : " is-compact") });
        b.style.setProperty("--p", st.color);
        b.style.height = `${kind === "hub" ? s.banner.height : Math.round(s.banner.height * 0.55)}px`;
        const bgId = st.bannerBg === void 0 || st.bannerBg === "default" ? s.banner.id : st.bannerBg;
        const mounted = bgId ? plugin.bgm.mount(b, bgId, { opacity: s.banner.opacity }) : null;
        b.createDiv({ cls: "evs-banner-shade" });
        const inner = b.createDiv({ cls: "evs-banner-inner" });
        const left = inner.createDiv({ cls: "evs-banner-left" });
        const title = left.createDiv({ cls: "evs-banner-title" });
        setIcon2(title.createSpan({ cls: "evs-banner-icon" }), st.icon);
        title.createSpan({ text: kind === "hub" ? p.name : file.basename });
        const sub = left.createDiv({ cls: "evs-banner-sub" });
        sub.setText(kind === "hub" ? p.section : `${p.name} \xB7 ${p.section}`);
        if (kind === "hub" && (p.next || p.nextTask)) left.createDiv({ cls: "evs-banner-next", text: `Next: ${p.next || p.nextTask}` });
        const right = inner.createDiv({ cls: "evs-banner-right" });
        const chips = right.createDiv({ cls: "evs-banner-chips" });
        if (p.hasWorkshop) {
          chips.createSpan({ cls: "evs-chip", text: `Stage: ${p.stage}` });
          chips.createSpan({ cls: "evs-chip", text: `${p.open} open task${p.open === 1 ? "" : "s"}` });
        }
        if (p.lastDate) chips.createSpan({ cls: "evs-chip", text: ago(p.lastDate) });
        if (s.decisions.on && s.decisions.banners && !plugin.guard.skips(file.path)) {
          plugin.guard.index().then(async () => {
            const found = plugin.guard.checkText(file.path, await plugin.app.vault.cachedRead(file)).filter((f) => !f.dismissed);
            const st2 = plugin.guard.summaryFor(p.path);
            const review = kind === "hub" ? st2.needsReview.length : 0;
            if (!found.length && !review) return;
            const c = chips.createSpan({ cls: "evs-chip evs-chip-guard", text: found.length ? `${found.length} decision conflict${found.length === 1 ? "" : "s"}` : `${review} decision${review === 1 ? "" : "s"} to review` });
            c.onclick = () => plugin.openDecisions(found.length ? { decision: found[0].decision.id } : { only: p.path });
          }).catch(() => {
          });
        }
        const btns = right.createDiv({ cls: "evs-banner-btns" });
        const app = plugin.app;
        const go = (path) => {
          const f = app.vault.getAbstractFileByPath(path);
          if (f) app.workspace.getLeaf(false).openFile(f);
        };
        for (const [label, path] of [["Hub", p.hub], [p.feedbackLabel || "Feel tests", p.feel], ["Decisions", p.decisions], ["Questions", p.questions]]) {
          if (path === file.path || !app.vault.getAbstractFileByPath(path)) continue;
          const x = btns.createEl("button", { text: label });
          x.onclick = () => go(path);
        }
        if (p.hasWorkshop) btns.createEl("button", { text: p.review ? `Tasks (${p.review} to review)` : "Tasks" }).onclick = () => plugin.openTasks(p.path);
        const play = btns.createEl("button", { text: "New playtest", cls: "mod-cta" });
        play.onclick = () => plugin.newPlaytest(p);
        const ask = right.createDiv({ cls: "evs-banner-ask" });
        if (kind !== "hub") ask.hide();
        ask.createSpan({ cls: "evs-banner-ask-label", text: "Ask Claude" });
        for (const [label, text] of promptsFor(p)) {
          const b2 = ask.createEl("button", { text: label, attr: { "aria-label": "Copies a prompt to paste into Claude" } });
          b2.onclick = async () => {
            await navigator.clipboard.writeText(text);
            new Notice2(`Copied "${label}" prompt: paste it into Claude`);
          };
        }
        return () => mounted && mounted.destroy();
      }
      summary(top, file, text, words) {
        const app = this.plugin.app;
        const cache = app.metadataCache.getFileCache(file) || {};
        const heads = (cache.headings || []).filter((h) => h.level <= 3);
        const card = top.createDiv({ cls: "evs-summary" });
        const head = card.createDiv({ cls: "evs-summary-head" });
        setIcon2(head.createSpan({ cls: "evs-summary-icon" }), "book-open");
        head.createSpan({ text: `${words.toLocaleString()} words \xB7 ${Math.max(1, Math.round(words / 230))} min read \xB7 ${heads.length} sections` });
        const toggle = head.createSpan({ cls: "evs-summary-toggle" });
        const body = card.createDiv({ cls: "evs-summary-body" });
        const isOpen = () => this.open.get(file.path) === true;
        const draw = () => {
          toggle.empty();
          setIcon2(toggle, isOpen() ? "chevron-up" : "chevron-down");
          toggle.createSpan({ text: isOpen() ? "Hide outline" : "Outline" });
          body.toggle(isOpen());
        };
        head.onclick = () => {
          this.open.set(file.path, !isOpen());
          draw();
        };
        const fm = cache.frontmatter && cache.frontmatter.summary;
        const sum = fm || firstParagraph(text);
        if (sum) body.createDiv({ cls: "evs-summary-text", text: sum.length > 320 ? sum.slice(0, 317) + "\u2026" : sum });
        const list = body.createDiv({ cls: "evs-summary-outline" });
        for (const h of heads) {
          const a = list.createDiv({ cls: `evs-outline-item lvl-${h.level}`, text: plainText(h.heading) });
          a.onclick = () => app.workspace.openLinkText(`${file.path}#${h.heading}`, file.path, false);
        }
        draw();
      }
    };
    function decorateRendered2(el, ctx, plugin) {
      const path = ctx.sourcePath || "";
      const n = plugin.settings.notes;
      const proj = plugin.store.find(path);
      if (n.bubbles && (/ - Feel tests\.md$/.test(path) || proj && proj.feel === path)) {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        for (const t of nodes) {
          if (t.parentElement && t.parentElement.closest("code, .evs-quote")) continue;
          const parts = t.nodeValue.split(/("[^"\n]{3,}"|→ (?:fixed|see Decisions)[^\n]*)/);
          if (parts.length < 2) continue;
          const frag = document.createDocumentFragment();
          for (const part of parts) {
            if (!part) continue;
            if (part.startsWith('"')) frag.append(createSpan({ cls: "evs-quote", text: part.slice(1, -1) }));
            else if (part.startsWith("\u2192")) frag.append(createSpan({ cls: "evs-tagline", text: part }));
            else frag.append(document.createTextNode(part));
          }
          t.replaceWith(frag);
        }
      }
      if (n.timeline && / - Decisions\.md$/.test(path)) {
        for (const h of el.querySelectorAll("h3")) {
          const m = h.textContent.match(/^(\d{4}-\d{2}-\d{2}[^:]*):\s*(.*)$/);
          if (!m) continue;
          h.empty();
          h.createSpan({ cls: "evs-date", text: m[1] });
          h.createSpan({ text: m[2] });
        }
      }
    }
    function feelEditorExtension2() {
      let cm;
      try {
        cm = require("@codemirror/view");
      } catch (e) {
        return [];
      }
      const matcher = new cm.MatchDecorator({
        regexp: /"[^"\n]{3,}"|→ (?:fixed|see Decisions)[^\n]*/g,
        decoration: (m) => cm.Decoration.mark({ class: m[0].startsWith('"') ? "evs-quote" : "evs-tagline" })
      });
      const isFeel = (v) => {
        try {
          const info = v.state.field(editorInfoField);
          return / - Feel tests\.md$/.test(info && info.file && info.file.path || "");
        } catch (e) {
          return false;
        }
      };
      return cm.ViewPlugin.fromClass(
        class {
          constructor(v) {
            this.on = isFeel(v);
            this.decorations = this.on ? matcher.createDeco(v) : cm.Decoration.none;
          }
          update(u) {
            const on = isFeel(u.view);
            if (on !== this.on) {
              this.on = on;
              this.decorations = on ? matcher.createDeco(u.view) : cm.Decoration.none;
            } else if (on) this.decorations = matcher.updateDeco(u, this.decorations);
          }
        },
        { decorations: (v) => v.decorations }
      );
    }
    module2.exports = { NoteDecorator: NoteDecorator2, decorateRendered: decorateRendered2, feelEditorExtension: feelEditorExtension2 };
  }
});

// src/views/timeline.js
var require_timeline = __commonJS({
  "src/views/timeline.js"(exports2, module2) {
    "use strict";
    var { ItemView, setIcon: setIcon2, getIcon } = require("obsidian");
    var { TIMELINE: TIMELINE2 } = require_constants();
    var { ago, plainText, clip } = require_util();
    var TimelineView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.days = 14;
      }
      getViewType() {
        return TIMELINE2;
      }
      getDisplayText() {
        return "Timeline";
      }
      getIcon() {
        return "calendar-range";
      }
      async onOpen() {
        this.contentEl.addClass("evs-timeline-view");
        await this.render();
      }
      async render() {
        const p = this.plugin, el = this.contentEl;
        const projects = (await p.store.all()).filter((x) => x.section !== "Archive");
        el.empty();
        const head = el.createDiv({ cls: "evs-mc-head" });
        head.createDiv({ cls: "evs-mc-title", text: "Timeline" });
        const range = head.createDiv({ cls: "evs-mc-stats" });
        for (const d of [7, 14, 30]) {
          const b = range.createSpan({ cls: "evs-mc-chip" + (this.days === d ? " is-on" : ""), text: `${d} days` });
          b.onclick = () => {
            this.days = d;
            this.render();
          };
        }
        const legend = head.createDiv({ cls: "evs-tl-legend" });
        for (const [icon, label] of [["terminal", "session"], ["gavel", "decision"], ["gamepad-2", "playtest"]]) {
          const l = legend.createSpan();
          setIcon2(l.createSpan(), icon);
          l.createSpan({ text: label });
        }
        const dayMs = 864e5;
        const today = /* @__PURE__ */ new Date();
        today.setHours(0, 0, 0, 0);
        const start = today.getTime() - (this.days - 1) * dayMs;
        const grid = el.createDiv({ cls: "evs-tl-grid" });
        grid.style.gridTemplateColumns = `minmax(110px, 160px) repeat(${this.days}, minmax(22px, 1fr))`;
        grid.createDiv({ cls: "evs-tl-corner" });
        for (let i = 0; i < this.days; i++) {
          const d = new Date(start + i * dayMs);
          grid.createDiv({ cls: "evs-tl-day" + (i === this.days - 1 ? " is-today" : ""), text: i === this.days - 1 ? "today" : `${d.getMonth() + 1}/${d.getDate()}` });
        }
        const tip = el.createDiv({ cls: "evs-graph-tip" });
        tip.hide();
        for (const proj of projects) {
          const st = p.projStyle(proj);
          const name = grid.createDiv({ cls: "evs-tl-name" });
          name.style.setProperty("--p", st.color);
          setIcon2(name.createSpan({ cls: "evs-mc-icon" }), st.icon);
          name.createSpan({ text: proj.name });
          name.onclick = () => p.openPath(proj.hub);
          for (let i = 0; i < this.days; i++) {
            const lo = start + i * dayMs, hi = lo + dayMs;
            const evs = proj.events.filter((e) => e.at >= lo && e.at < hi);
            const cell = grid.createDiv({ cls: "evs-tl-cell" + (i === this.days - 1 ? " is-today" : "") });
            cell.style.setProperty("--p", st.color);
            if (!evs.length) continue;
            cell.addClass("has");
            cell.style.setProperty("--n", String(Math.min(1, evs.length / 6)));
            for (const kind of ["session", "decision", "playtest"]) {
              const n = evs.filter((e) => e.kind === kind).length;
              if (!n) continue;
              const m = cell.createDiv({ cls: `evs-tl-mark is-${kind}` });
              setIcon2(m, kind === "session" ? "terminal" : kind === "decision" ? "gavel" : "gamepad-2");
              if (n > 1) m.createSpan({ text: String(n) });
            }
            cell.onmouseenter = (e) => {
              tip.setText(evs.slice(0, 6).map((x) => `${x.kind}: ${clip(plainText(x.title), 70)}`).join("\n") + (evs.length > 6 ? `
+${evs.length - 6} more` : ""));
              const r = el.getBoundingClientRect(), c = cell.getBoundingClientRect();
              tip.style.left = `${c.left - r.left + c.width / 2}px`;
              tip.style.top = `${c.top - r.top + el.scrollTop}px`;
              tip.show();
            };
            cell.onmouseleave = () => tip.hide();
            cell.onclick = () => {
              const e = evs[0];
              if (e.heading) p.app.workspace.openLinkText(`${e.path}#${e.heading}`, e.path, false);
              else p.openPath(e.path);
            };
          }
        }
        window.requestAnimationFrame(() => grid.scrollLeft = grid.scrollWidth);
        const feed = el.createDiv({ cls: "evs-tl-feed" });
        feed.createDiv({ cls: "evs-sec-title", text: "Latest" });
        const all = projects.flatMap((x) => x.events.map((e) => Object.assign({ project: x }, e))).sort((a, b) => b.at - a.at).slice(0, 25);
        for (const e of all) {
          const row = feed.createDiv({ cls: "evs-tl-row" });
          row.style.setProperty("--p", p.projStyle(e.project).color);
          setIcon2(row.createSpan({ cls: "evs-tl-row-icon" }), e.kind === "session" ? "terminal" : e.kind === "decision" ? "gavel" : "gamepad-2");
          row.createSpan({ cls: "evs-tl-row-when", text: e.kind === "session" ? ago(e.at) : new Date(e.at).toISOString().slice(0, 10) });
          row.createSpan({ cls: "evs-tl-row-proj", text: e.project.name });
          row.createSpan({ cls: "evs-tl-row-text", text: clip(plainText(e.title), 140) });
          row.onclick = () => e.heading ? p.app.workspace.openLinkText(`${e.path}#${e.heading}`, e.path, false) : p.openPath(e.path);
        }
      }
    };
    module2.exports = { TimelineView: TimelineView2 };
  }
});

// src/core/answers.js
var require_answers = __commonJS({
  "src/core/answers.js"(exports2, module2) {
    "use strict";
    var FILE = "_system/Questions.md";
    var QUESTIONS = [
      ["How do I bookmark a tab?", "Open the note, then right-click its tab \u2192 Bookmark\u2026 (also in the \u22EF menu at the note's top right, or right-click the note in the file list). Works for notes, searches, headings and the graph. Panels like this Guide, Projects or Recap can't be bookmarked; they're always one click away on the ribbon.", "bookmarks:bookmark-current-view"],
      ["How do I bookmark all my open tabs at once?", "Ctrl+P \u2192 Bookmarks: Bookmark all tabs\u2026. Your open notes are saved as one group you can open together later (panels like the Guide are skipped).", "bookmarks:bookmark-all-tabs"],
      ["Where are my bookmarks?", "The bookmark icon at the very top of the left panel: the third one, after the folder (files) and the magnifier (search). Click a bookmark to open it; drag them to reorder or into groups.", "bookmarks:open"],
      ["How do I open my bookmarks?", "Click the bookmark icon at the very top of the left panel (the third one, after files and search), then click the bookmark. Or Ctrl+P \u2192 Bookmarks: Show bookmarks.", "bookmarks:open"],
      ["How do I remove a bookmark?", "Open the note, then Ctrl+P \u2192 Bookmarks: Remove bookmark. Or right-click it in the Bookmarks panel \u2192 Delete.", "bookmarks:unbookmark-current-view"],
      ["How do I bookmark a project?", "Projects (folder icon on the ribbon) \u2192 the project's \u22EF menu \u2192 Bookmark. Its hub goes into Obsidian's Bookmarks."],
      ["How do I pin a tab so it stays open?", "Right-click the tab's title \u2192 Pin. A pinned tab isn't replaced when you open other notes.", "workspace:toggle-pin"],
      ["How do I open two notes side by side?", "Drag a tab to the right half of the screen, or right-click the tab \u2192 Split right. In the graph, Ctrl+click a light opens it beside the graph.", "workspace:split-vertical"],
      ["How do I get back a tab I closed?", "Ctrl+Shift+T reopens the last tab you closed.", "workspace:undo-close-pane"],
      ["How do I search every note?", "Ctrl+Shift+F (or the magnifier at the top of the left panel). Put words in quotes for an exact phrase.", "global-search:open"],
      ["How do I jump to a note by name?", "Ctrl+O, then type part of its name.", "switcher:open"],
      ["How do I run any command?", "Ctrl+P opens every command in one searchable list. Every EMX Vault Studio command starts with its name.", "command-palette:open"],
      ["How do I make a new note?", "Ctrl+N, or the pencil icon at the top of the file list. For a project, use its banner buttons so it lands in the right place.", "file-explorer:new-file"],
      ["How do I link one note to another?", "Type [[ and the note's name, then Enter. Links show in Backlinks and on the graph."],
      ["What links to this note?", "The right panel's Backlinks tab lists every note that links here.", "backlink:open"],
      ["How do I see the headings of a long note?", "The right panel's Outline tab. Long notes also get a card at the top with a clickable outline.", "outline:open"],
      ["How do I hide or show the side panels?", "The panel icons at the very top left and top right, or Ctrl+P \u2192 Toggle left sidebar.", "app:toggle-left-sidebar"],
      ["How do I change how the vault looks?", "The sliders icon on the ribbon opens the control panel \u2192 Looks: click a card. Surprise me picks a random look, Undo goes back.", "emx-vault-studio:open-control-panel"],
      ["How do I change how the graph looks?", "Control panel \u2192 Graph \u2192 Graph Realms, or the layers button in the graph's corner. The graph morphs into the realm you pick. Save your own under My realms.", "emx-vault-studio:graph-realms"],
      ["How do I turn (rotate) the graph around?", "Hold the right mouse button on the graph and drag: left and right swing it round, up and down tip it. Shift+right-drag spins it flat. Double-click puts it back."],
      ["How do I make the graph full screen?", "The square button in the graph's corner, or Ctrl+P \u2192 Neural graph full screen. Esc leaves.", "emx-vault-studio:graph-fullscreen"],
      ["How do I see one project's own graph?", "On Home's Favorites or a mission control card press Graph, or open a project note and Ctrl+P \u2192 Open this project's own graph.", "emx-vault-studio:project-graph"],
      ["How do I make a new project?", "The folder-plus icon on the ribbon (New project): pick a kind, name it, check the steps, create. It's set up in the vault, Workshop and GitHub.", "emx-vault-studio:new-project"],
      ["How do I rename, move or archive a project?", "Projects (folder icon) \u2192 the project's \u22EF menu \u2192 Rename, Move or Archive. Links and Workshop follow; nothing is deleted.", "emx-vault-studio:open-projects"],
      ["How do I pin a project or make it a favorite?", "The star on its mission control card, or Projects \u2192 \u22EF \u2192 Pin. Holo favorites show up by themselves.", "emx-vault-studio:open-mission-control"],
      ["How do I open a project in Holo?", "The Holo button on its card or in Favorites, or Ctrl+P \u2192 Open this project in Holo. Holo starts if it's closed.", "emx-vault-studio:open-in-holo"],
      ["How do I write down a playtest?", "On any project note's banner press New playtest: a dated entry appears at the top of Feel tests with the cursor in it. In Freebuild RBX you can also press N while playing.", "emx-vault-studio:new-playtest"],
      ["How do I see a project's tasks?", "The checklist icon on the ribbon (Workshop tasks), or the Tasks button on a project's banner.", "emx-vault-studio:open-tasks"],
      ["How do I mark a task done?", "Only you do that, in your own terminal: workshop task done <id>. Claude stops at review."],
      ["What did I do this week?", "The bar-chart icon (Recap): day, week, month or any dates, with sessions, commits, playtests and decisions. Home's This week widget shows the numbers.", "emx-vault-studio:open-recap"],
      ["How do I see what needs me?", "Home's What needs me list: reviews waiting, blocked tasks, decision conflicts, assets without a license, unsaved work."],
      ["How do I back up the vault?", "Backups run by themselves: to GitHub every 10 minutes. The cloud in the status bar says when; click it to back up now.", "emx-vault-studio:backup-now"],
      ["How do I get an old version of a note back?", "Right-click the note \u2192 Note history, or Ctrl+P \u2192 Show this note's history. Pick a version and restore it.", "emx-vault-studio:note-history"],
      ["How do I get a deleted note back?", "Ctrl+P \u2192 Restore a deleted note, then pick it from the list.", "emx-vault-studio:restore-deleted"],
      ["How do I add a video or shader background?", "Control panel \u2192 Backgrounds \u2192 Import files\u2026 (or drop the file on the drop zone). Click it, then choose where it shows: behind the vault, banners or graph."],
      ["How do I add a widget to a dashboard?", "On the dashboard press Customize, then Add a widget, pick one, then Save."],
      ["How do I set where an asset came from (its license)?", "Projects \u2192 Assets: pick files and set the license. Apply to every file in this folder does a whole folder at once.", "emx-vault-studio:open-assets"],
      ["How do I make something happen automatically?", "Projects \u2192 Automations: pick a trigger (like a new playtest or every Monday) and what to do. Dry run shows what it would do first.", "emx-vault-studio:open-automations"],
      ["How do I check a note against my decisions?", "Notes that clash with a decision get a banner. The gavel icon (Decisions) lists every decision, possible conflicts and the ones due a review.", "emx-vault-studio:open-decisions"],
      ["How do I get Claude up to speed on a project?", "On the project's hub banner press Ask Claude: Brief me. It copies a short prompt; paste it into Claude."],
      ["How do I end a long Claude chat cleanly?", "Press Hand off on the hub banner and paste it into the chat: Claude logs the session and gives you a prompt to start fresh."],
      ["How do I use the vault? Where do I start?", "Press Start here at the top of the Guide (or Ctrl+P \u2192 How to use): the easy guide, with a 5-minute start and one short section for everything.", "emx-vault-studio:open-how-to"],
      ["What does this button do?", "This Guide lists every button: the ribbon, side panels, control panel, banners, mission control, graphs, dashboards, the status bar and every command.", "emx-vault-studio:open-guide"],
      ["The vault looks broken. How do I fix it?", "Ctrl+P \u2192 Reload app without saving. If a look went wrong, control panel \u2192 Undo. Nothing in your notes changes.", "app:reload"],
      ["How do I add my own question here?", "Press Add my own question at the bottom of the Guide. It goes into _system/Questions.md as a heading with your answer under it, and shows up here from then on."]
    ];
    var STOP = new Set("a an the i me my to do does did how can could would should is are am be it its this that of in on at for with and or so what where when which who why get make use".split(" "));
    function stem(w) {
      if (w.length <= 3) return w;
      if (/ies$/.test(w)) return w.slice(0, -3) + "y";
      if (/(ch|sh|x|ss)es$/.test(w)) return w.slice(0, -2);
      const m = w.match(/^(.{3,}?)(ing|ed|s)$/);
      if (!m || /ss$/.test(w)) return w;
      return /(ing|ed)$/.test(m[2]) && /([b-df-hj-np-tv-z])\1$/.test(m[1]) ? m[1].slice(0, -1) : m[1];
    }
    function words(text) {
      return String(text || "").toLowerCase().replace(/[^a-z0-9+]+/g, " ").split(" ").filter((w) => w && !STOP.has(w)).map(stem);
    }
    function score(query, q, a = "") {
      const want = [...new Set(words(query))];
      if (!want.length) return 0;
      const inQ = new Set(words(q)), inA = new Set(words(a));
      let s = 0, hit = 0;
      for (const w of want) {
        if (inQ.has(w)) s += 3, hit++;
        else if (inA.has(w)) s += 1.2, hit++;
        else if ([...inQ].some((x) => x.length > 3 && (x.startsWith(w) || w.startsWith(x)))) s += 1, hit++;
      }
      return hit / want.length >= 0.5 ? s / want.length + 0.5 * hit / Math.max(1, inQ.size) : 0;
    }
    function findAnswers(query, list, n = 6) {
      return list.map((x) => Object.assign({}, x, { score: score(query, x.q, x.a) })).filter((x) => x.score > 0).sort((a, b) => b.score - a.score).slice(0, n);
    }
    function parseMine(text) {
      const out = [];
      const src = String(text || "").replace(/\r\n/g, "\n").replace(/^---\n[\s\S]*?\n---\n?/, "");
      const parts = src.split(/^## +/m).slice(1);
      for (const p of parts) {
        const nl = p.indexOf("\n");
        const q = (nl < 0 ? p : p.slice(0, nl)).trim(), a = nl < 0 ? "" : p.slice(nl + 1).trim();
        if (q) out.push({ q, a, mine: true });
      }
      return out;
    }
    var builtIn = () => QUESTIONS.map(([q, a, cmd]) => ({ q, a, cmd }));
    module2.exports = { FILE, QUESTIONS, words, score, findAnswers, parseMine, builtIn };
  }
});

// src/views/guide.js
var require_guide = __commonJS({
  "src/views/guide.js"(exports2, module2) {
    "use strict";
    var { ItemView, Modal, setIcon: setIcon2 } = require("obsidian");
    var { GUIDE: GUIDE2 } = require_constants();
    var { WIDGETS } = require_dashboard();
    var { FILE: ANSWERS_FILE, builtIn, findAnswers, parseMine, score } = require_answers();
    var KNOWN = {
      // EMX Vault Studio
      "Open timeline": "Sessions, decisions and playtests per project per day (7, 14 or 30 days), and a feed of the latest.",
      "Open mission control": "Every project as a card: stage, open tasks, next step, your latest feel quote, this week's numbers. Click a card to open its hub.",
      "Open neural graph": "The whole vault as a living tree (or any Graph Realm): each project is a branch, your notes are the lights. Wheel zooms, drag moves, right-drag turns it any way, double-click resets, click a light to open that note.",
      "Open EMX control panel": "The control panel: looks, backgrounds, project colors and icons, graph shape and motion, navigation and how-to.",
      "Open Workshop tasks": "A project's Workshop task board: add, queue, play, block and note tasks, tick the stage checklist. Done stays in your terminal.",
      "Open recap": "What happened in a day, week, month or any dates: numbers with the change from before, insights, a timeline, and every session, commit, playtest and decision.",
      "Open decisions": "Decision intelligence: every decision and hub rule, which may need a review, conflicts found in notes and tasks, Claude's suggestions.",
      Projects: "The Projects manager: every project (rename, move, archive, duplicate, relate, pin, open in Holo), project types, categories, automations and the asset library.",
      "New project": "The Project Creator: pick a kind of project, name it, see every step it will take, then it's set up in the vault, Workshop and GitHub.",
      "Open Guide": "This page: type a question (how do I bookmark a tab?) and get the answer from the vault itself, no AI. Every button is explained below.",
      // Obsidian
      "Open quick switcher": "Jump to any note by typing part of its name (Ctrl+O).",
      "Open graph view": "Obsidian's own graph of how notes link.",
      "Create new canvas": "A blank canvas to arrange notes and cards freely.",
      "Open today's daily note": "Today's daily note (made if it isn't there yet).",
      "Insert template": "Puts one of the _templates notes into the open note.",
      "Open command palette": "Every command in one searchable list (Ctrl+P).",
      "Open random note": "A random note: good for rediscovering old ideas.",
      "Create new base": "A Bases table view of notes.",
      "Open bases": "Bases: tables of notes by their properties.",
      "Toggle left sidebar": "Shows or hides the left panel (files, search, bookmarks).",
      "Toggle right sidebar": "Shows or hides the right panel (backlinks, outline, the EMX control panel).",
      "New tab": "A new empty tab.",
      "New note": "A new note in the folder you're in.",
      "New folder": "A new folder.",
      "Change sort order": "How the file list is sorted (name, date\u2026).",
      "Auto-reveal current file": "Keeps the open note highlighted in the file list.",
      "Collapse all": "Folds every folder in the file list.",
      "Expand all": "Opens every folder in the file list.",
      Files: "The file list (your folders and notes).",
      Search: "Search every note.",
      Bookmarks: "Notes you've bookmarked (Projects \u2192 a project's menu \u2192 Bookmark).",
      Backlinks: "Notes that link to the open one.",
      "Outgoing links": "Notes the open one links to.",
      Tags: "All tags in the vault.",
      Outline: "The headings of the open note: click one to jump there.",
      "File properties": "The open note's properties (the frontmatter).",
      "All properties": "Every property used in the vault.",
      "EMX control panel": "The control panel (see the left ribbon's sliders icon)."
    };
    var SECTIONS = [
      {
        id: "panel",
        title: "Control panel (right side)",
        items: [
          ["palette", "Looks", "Look cards (click to try, hover for rename, duplicate, update, delete), colors, glow, fonts, frames, stars. Undo goes back up to 20 changes."],
          ["film", "Backgrounds", "Your shaders and videos: import from Shader Studio, files or drag and drop; Shaders / Videos filters; click one to edit it live and use it behind the vault, banners or graph."],
          ["folder-open", "Projects", "Each project's icon, color and banner background; what the status bar shows; banners, summaries and bubbles on or off; For Claude settings."],
          ["sparkles", "Graph", "Graph Realms (ready-made looks), the 7 shapes (tree, radial, orbit, galaxy, helix, lotus, sphere), My realms, 3D (depth, camera tilt, turning by itself, morph time), the shape builder and motion."],
          ["compass", "Navigate", "Home, Inbox, Graph, copy a note's path, every project with its stage and tasks, shared notes."],
          ["help-circle", "How to", "Short visual how-tos. This Guide has every button."],
          ["undo-2", "Undo", "Takes back the last look change."],
          ["dices", "Surprise me", "A random matching look. Undo brings yours back."],
          ["power", "Theme on", "Switches the EMX look on or off (Obsidian's own look when off)."]
        ]
      },
      {
        id: "banner",
        title: "Project banners (top of a project's notes)",
        items: [
          ["list-checks", "Tasks (n to review)", "Opens the project's Workshop task board."],
          ["plus", "New playtest", "Adds a dated entry at the top of Feel tests and puts the cursor in it."],
          ["home", "Hub / Feel tests / Decisions / Questions", "Jump to the project's main notes."],
          ["bot", "Ask Claude: Brief me", "Copies a prompt that has Claude read the project's brief and catch you up."],
          ["bot", "Ask Claude: Feel \u2192 tasks", "Copies a prompt that turns your latest feel tests into Workshop tasks."],
          ["bot", "Ask Claude: Plan next", "Copies a prompt for planning the next step from the brief and open tasks."],
          ["bot", "Ask Claude: Hand off", "Copies a prompt to close a long chat cleanly and start the next one small."],
          ["shield-alert", "n decision conflicts", "Something in this note may conflict with a settled decision: opens the Decisions dashboard on it."]
        ]
      },
      {
        id: "mission",
        title: "Mission control and Home",
        items: [
          ["star", "Star on a card", "Pins the project to the top (gold when pinned or a Holo favorite)."],
          ["waypoints", "Graph on a card", "That project's own graph, in its own tab."],
          ["monitor-play", "Holo on a card", "Opens the project in EMX Holo IDE (starts Holo if it's closed)."],
          ["folder-plus", "New project", "The Project Creator."],
          ["folder-kanban", "Projects", "The Projects manager."],
          ["rotate-cw", "Refresh", "Re-reads every project now (it also happens by itself)."],
          ["bell-ring", "What needs me", "Reviews waiting, blocked tasks, decision conflicts, decisions to review, assets without a license, unsaved or unpushed work. Click a line to deal with it."],
          ["star", "Favorites", "Your pinned projects and Holo favorites with Vault (its dashboard), Graph (its own graph) and Holo buttons."],
          ["calendar-days", "This week", "This week's numbers across projects with the change from last week; click one to open the recap on it."]
        ]
      },
      {
        id: "graph",
        title: "Graphs",
        items: [
          ["zoom-in", "Zoom in / out", "Or the mouse wheel (zooms toward the pointer)."],
          ["scan", "Reset view", "Back to the start: zoom, position and turn (or double-click the graph)."],
          ["maximize", "Full screen", "The graph on the whole screen. Esc leaves."],
          ["mouse-pointer-2", "Drag", "Moves the graph."],
          ["rotate-3d", "Right-drag", "Hold the right mouse button and drag: left and right swing the graph round, up and down tip it toward or away from you. Shift+right-drag spins it flat. Labels stay upright."],
          ["layers", "Graph Realms (corner button)", "Pick a ready-made look: Celestial World Tree, Dyson Ascendancy, Genesis Helix, Eternal Lotus and more. The graph morphs into it; your notes and links stay your own."],
          ["play", "Tour the realms", "The graph morphs through every realm, one every 9 seconds. Press again to stop: your own look comes back."],
          ["mouse-pointer-click", "Click a light", "Opens that note in a new tab (Ctrl+click: beside the graph)."],
          ["waypoints", "A project's own graph", "Only that project's notes and repo docs, its hub in the middle: from Favorites, cards, the Projects menu or Ctrl+P."]
        ]
      },
      {
        id: "dashboard",
        title: "Dashboards (in any note)",
        items: [
          ["settings-2", "Customize", "Edit mode: drag widgets, change their options, remove them."],
          ["plus", "Add a widget", "The widget gallery."],
          ["columns-3", "Columns", "1 to 4 columns."],
          ["save", "Save", "Writes the dashboard back into the note."],
          ["rotate-cw", "Refresh", "Draws it again with the latest data."]
        ]
      },
      {
        id: "status",
        title: "Status bar (bottom right)",
        items: [
          ["gamepad-2", "Project status", "The project you're in: stage, open tasks, next step. Click: its hub (outside projects: mission control)."],
          ["cloud", "Backup", "When the vault was last backed up to GitHub. Click to back up now. Red when something needs you."]
        ]
      }
    ];
    var GuideView2 = class extends ItemView {
      constructor(leaf, plugin) {
        super(leaf);
        this.plugin = plugin;
        this.q = "";
      }
      getViewType() {
        return GUIDE2;
      }
      getDisplayText() {
        return "Guide";
      }
      getIcon() {
        return "book-open";
      }
      async onOpen() {
        this.contentEl.addClass("evs-guide-view");
        this.render();
      }
      // live buttons from the screen: [{ label, svg, el }]
      live(selector) {
        const out = [], seen = /* @__PURE__ */ new Set();
        for (const el of document.querySelectorAll(selector)) {
          const label = el.getAttribute("aria-label") || el.textContent.trim();
          if (!label || seen.has(label)) continue;
          seen.add(label);
          const svg = el.querySelector("svg");
          out.push({ label, svg: svg ? svg.outerHTML : "", el });
        }
        return out;
      }
      // your own questions from _system/Questions.md
      async loadMine() {
        const a = this.app.vault.adapter;
        this.mine = await a.exists(ANSWERS_FILE) ? parseMine(await a.read(ANSWERS_FILE)) : [];
      }
      // a question and its answer, with Do it when there's a command for it
      answerRow(parent, x) {
        const row = parent.createDiv({ cls: "evs-guide-row evs-guide-answer" });
        setIcon2(row.createDiv({ cls: "evs-guide-icon" }), x.mine ? "user-round" : "circle-help");
        const txt = row.createDiv({ cls: "evs-guide-txt" });
        txt.createDiv({ cls: "evs-guide-name", text: x.q });
        txt.createDiv({ cls: "evs-guide-what", text: x.a || "(no answer written yet)" });
        if (x.cmd && this.app.commands.commands[x.cmd]) row.createEl("button", { text: "Do it" }).onclick = () => this.app.commands.executeCommandById(x.cmd);
        if (x.mine) row.createEl("button", { text: "Edit", attr: { "aria-label": `Open ${ANSWERS_FILE}` } }).onclick = () => this.openMine();
      }
      async openMine() {
        const f = this.app.vault.getAbstractFileByPath(ANSWERS_FILE);
        if (f) await this.app.workspace.getLeaf("tab").openFile(f);
      }
      // your question and answer at the end of _system/Questions.md (made the first time)
      async addMine(q, a) {
        const vault = this.app.vault;
        if (!await vault.adapter.exists("_system")) await vault.createFolder("_system");
        const entry = `## ${q.trim()}

${a.trim()}
`;
        const f = vault.getAbstractFileByPath(ANSWERS_FILE);
        if (f) await vault.process(f, (t) => `${t.replace(/\s*$/, "")}

${entry}`);
        else await vault.create(ANSWERS_FILE, `# Questions

Your own questions for the Guide's search (Guide \u2192 Add my own question). Each ## heading is a question; what's under it is the answer.

${entry}`);
        await this.loadMine();
        this.render();
      }
      render() {
        const el = this.contentEl;
        el.empty();
        if (!this.mine) {
          this.mine = [];
          this.loadMine().then(() => this.render());
        }
        const head = el.createDiv({ cls: "evs-dc-head" });
        head.createDiv({ cls: "evs-dc-title", text: "Guide: questions and every button" });
        const start = el.createDiv({ cls: "evs-guide-start" });
        setIcon2(start.createDiv({ cls: "evs-guide-icon" }), "graduation-cap");
        const st = start.createDiv({ cls: "evs-guide-txt" });
        st.createDiv({ cls: "evs-guide-name", text: "New here, or forgot how something works?" });
        st.createDiv({ cls: "evs-guide-what", text: "The easy guide: start in 5 minutes, then one short section for everything (projects, playtests, tasks, recaps, the graph, looks, backups, Claude)." });
        start.createEl("button", { text: "Start here", cls: "mod-cta" }).onclick = () => this.plugin.openHowTo();
        const search = el.createEl("input", { type: "search", cls: "evs-guide-search", attr: { placeholder: "Ask a question (how do I bookmark a tab?) or find a button\u2026" } });
        search.value = this.q;
        const toc = el.createDiv({ cls: "evs-dc-chips" });
        const body = el.createDiv({ cls: "evs-guide-body" });
        const groups = [
          { id: "ribbon", title: "Left ribbon (the icons down the far left)", items: this.live(".side-dock-ribbon .side-dock-ribbon-action").map((x) => ({ icon: x.svg, name: x.label, what: KNOWN[x.label] || "From a plugin or Obsidian (no description yet: hover it to see its name).", try: () => x.el.click() })) },
          { id: "files", title: "Left panel: tabs and file list buttons", items: this.live(".workspace-split.mod-left-split .workspace-tab-header, .nav-buttons-container .clickable-icon").map((x) => ({ icon: x.svg, name: x.label, what: KNOWN[x.label] || "A button in the left panel.", try: () => x.el.click() })) },
          { id: "right", title: "Right panel tabs", items: this.live(".workspace-split.mod-right-split .workspace-tab-header").map((x) => ({ icon: x.svg, name: x.label, what: KNOWN[x.label] || "A view in the right panel.", try: () => x.el.click() })) },
          { id: "top", title: "Top bar", items: this.live(".workspace-ribbon.mod-left .sidebar-toggle-button, .sidebar-toggle-button, .workspace-tab-header-new-tab").map((x) => ({ icon: x.svg, name: x.label, what: KNOWN[x.label] || "A window button.", try: null })) }
        ].concat(
          SECTIONS.map((s) => ({ id: s.id, title: s.title, items: s.items.map(([icon, name, what]) => ({ iconId: icon, name, what })) })),
          [{ id: "widgets", title: "Dashboard widgets", items: Object.values(WIDGETS).map((w) => ({ iconId: w.icon, name: w.label, what: `${w.group}.${Object.keys(w.options).length ? ` Options: ${Object.keys(w.options).join(", ")}.` : ""}` })) }],
          [{ id: "commands", title: "Commands (Ctrl+P)", items: Object.values(this.app.commands.commands || {}).filter((c) => c.id.startsWith("emx-vault-studio:")).sort((a, b) => a.name.localeCompare(b.name)).map((c) => ({ iconId: c.icon || "terminal", name: c.name.replace(/^EMX Vault Studio: /, ""), what: "Run it from Ctrl+P, or here.", try: () => this.app.commands.executeCommandById(c.id) })) }]
        );
        toc.createSpan({ cls: "evs-dc-chip", text: "Questions" }).onclick = () => body.querySelector('[data-g="questions"]')?.scrollIntoView({ behavior: "smooth" });
        for (const g of groups) toc.createSpan({ cls: "evs-dc-chip", text: g.title.split(" (")[0] }).onclick = () => body.querySelector(`[data-g="${g.id}"]`)?.scrollIntoView({ behavior: "smooth" });
        const all = () => this.mine.concat(builtIn());
        const draw = () => {
          body.empty();
          const q = this.q.toLowerCase().trim();
          const qs = body.createDiv({ cls: "evs-guide-sec", attr: { "data-g": "questions" } });
          const found = q ? findAnswers(q, all(), 6) : this.mine.concat(builtIn().slice(0, 8));
          qs.createDiv({ cls: "evs-au-sec-h", text: q ? found.length ? "Answers" : "No answer for that yet" : "Common questions" });
          for (const x of found) this.answerRow(qs, x);
          const bar = qs.createDiv({ cls: "evs-bar evs-guide-more" });
          if (q) {
            bar.createEl("button", { text: `Search your notes for \u201C${this.q.trim()}\u201D` }).onclick = () => {
              const s = this.app.internalPlugins.getPluginById("global-search");
              if (s && s.instance) s.instance.openGlobalSearch(this.q.trim());
            };
          } else bar.createEl("button", { text: `All ${all().length} questions` }).onclick = () => {
            qs.querySelectorAll(".evs-guide-answer").forEach((n) => n.remove());
            for (const x of all()) this.answerRow(qs, x);
            qs.appendChild(bar);
          };
          bar.createEl("button", { text: "Add my own question" }).onclick = () => new QuestionModal(this.app, this.q, (qq, aa) => this.addMine(qq, aa)).open();
          for (const g of groups) {
            const items = g.items.filter((i) => !q || `${i.name} ${i.what}`.toLowerCase().includes(q) || score(q, i.name, i.what) >= 1.2);
            if (!items.length) continue;
            const sec = body.createDiv({ cls: "evs-guide-sec", attr: { "data-g": g.id } });
            sec.createDiv({ cls: "evs-au-sec-h", text: g.title });
            for (const i of items) {
              const row = sec.createDiv({ cls: "evs-guide-row" });
              const ic = row.createDiv({ cls: "evs-guide-icon" });
              if (i.icon) ic.innerHTML = i.icon;
              else if (i.iconId) setIcon2(ic, i.iconId);
              const txt = row.createDiv({ cls: "evs-guide-txt" });
              txt.createDiv({ cls: "evs-guide-name", text: i.name });
              txt.createDiv({ cls: "evs-guide-what", text: i.what });
              if (i.try) row.createEl("button", { text: "Try it" }).onclick = i.try;
            }
          }
        };
        search.oninput = () => {
          this.q = search.value;
          draw();
        };
        draw();
      }
    };
    var QuestionModal = class extends Modal {
      constructor(app, q, onSave) {
        super(app);
        this.q = q || "";
        this.onSave = onSave;
      }
      onOpen() {
        const el = this.contentEl;
        el.createEl("h3", { text: "Add my own question" });
        el.createDiv({ cls: "evs-hint", text: `It goes into ${ANSWERS_FILE}, and the Guide's search finds it from then on.` });
        const q = el.createEl("input", { type: "text", cls: "evs-guide-search", attr: { placeholder: "The question (How do I \u2026?)" } });
        q.value = this.q && !/\?$/.test(this.q) && /^(how|where|what|why|can)\b/i.test(this.q) ? `${this.q}?` : this.q;
        const a = el.createEl("textarea", { cls: "evs-guide-search", attr: { rows: 5, placeholder: "The answer, in your words" } });
        const bar = el.createDiv({ cls: "evs-bar" });
        const save = bar.createEl("button", { text: "Save", cls: "mod-cta" });
        save.onclick = async () => {
          if (!q.value.trim()) return q.focus();
          await this.onSave(q.value, a.value);
          this.close();
        };
        bar.createEl("button", { text: "Cancel" }).onclick = () => this.close();
        window.setTimeout(() => (q.value ? a : q).focus(), 0);
      }
      onClose() {
        this.contentEl.empty();
      }
    };
    module2.exports = { GuideView: GuideView2, QuestionModal, KNOWN, SECTIONS };
  }
});

// src/main.js
var { Plugin, Setting, Notice, MarkdownRenderChild, MarkdownView, debounce, setIcon } = require("obsidian");
var { VIEW, PANEL, MISSION, TIMELINE, TASKS, RECAP, DECISIONS, PROJECTS, GUIDE, LOOK_KEYS, GRAPH_LOOK_KEYS, PRESETS, DEFAULTS, PROJECT_COLORS } = require_constants();
var { rgb, rgba, mix, hash, fontFamily, merge, randomLook, partOfDay, starfield } = require_util();
var { ProjectStore } = require_projects();
var { BriefWriter } = require_briefs();
var { PlaytestInbox } = require_inbox();
var { VaultBackup } = require_backup2();
var { WorkshopCli } = require_workshop2();
var { TasksView } = require_tasks();
var { RecapData } = require_recap2();
var { RecapView } = require_recap3();
var { DecisionGuard } = require_guard();
var { TypeRegistry, SYSTEM } = require_types2();
var { ProjectSetup } = require_setup2();
var { ProjectCreator } = require_creator();
var { AssetIndex } = require_assets();
var { ProjectManager } = require_manage();
var { ProjectsView } = require_projects2();
var { Automations } = require_automations3();
var { HoloLink } = require_holo();
var { Blueprints } = require_blueprints3();
var { LicenseStore } = require_licenses();
var { renderDashboard } = require_dashboard2();
var { guardEditorExtension } = require_guard2();
var { DecisionsView } = require_decisions2();
var { NoteHistoryModal, DeletedNotesModal } = require_history();
var { BackgroundManager } = require_backgrounds();
var { NeuralGraphView } = require_graph();
var { StudioSettings } = require_settings();
var { ControlPanelView } = require_panel();
var { renderMission, MissionView, projectCss } = require_mission();
var { NoteDecorator, decorateRendered, feelEditorExtension } = require_notes();
var { TimelineView } = require_timeline();
var { GuideView } = require_guide();
var { REALMS, applyRealm, realmFromGraph, savedAsRealm } = require_realms();
var HOW_TO = ["Tools/EMX Vault Studio/EMX Vault Studio - How to use.md", "_system/How to use.md"];
var EmxVaultStudio = class extends Plugin {
  async onload() {
    this.settings = merge(DEFAULTS, await this.loadData());
    this.seedLooks();
    this.undoStack = [];
    this.realmUndo = [];
    this.saveSoon = debounce(() => this.saveData(this.settings), 400, true);
    this.types = new TypeRegistry(this);
    this.setup = new ProjectSetup(this);
    this.assets = new AssetIndex(this);
    this.manager = new ProjectManager(this);
    this.automations = new Automations(this);
    this.holo = new HoloLink(this);
    this.blueprints = new Blueprints(this);
    this.licenses = new LicenseStore(this);
    this.holoMatch = { linked: /* @__PURE__ */ new Map(), loose: [] };
    this.dashboardEls = /* @__PURE__ */ new Map();
    this.store = new ProjectStore(this);
    this.bgm = new BackgroundManager(this);
    this.notes = new NoteDecorator(this);
    this.briefs = new BriefWriter(this);
    this.inbox = new PlaytestInbox(this);
    this.workshop = new WorkshopCli(this);
    this.recaps = new RecapData(this);
    this.guard = new DecisionGuard(this);
    this.guardViews = /* @__PURE__ */ new Set();
    this.backup = new VaultBackup(this);
    this.backup.onChange = () => this.updateBackupStatus();
    this.writeSoon = debounce(() => this.briefs.writeAll().then(() => this.inbox.run()), 4e3, true);
    this.missionEls = /* @__PURE__ */ new Set();
    this.bgm.start();
    this.applyTheme();
    this.registerView(VIEW, (leaf) => new NeuralGraphView(leaf, this));
    this.registerView(PANEL, (leaf) => new ControlPanelView(leaf, this));
    this.registerView(MISSION, (leaf) => new MissionView(leaf, this));
    this.registerView(TIMELINE, (leaf) => new TimelineView(leaf, this));
    this.registerView(TASKS, (leaf) => new TasksView(leaf, this));
    this.registerView(RECAP, (leaf) => new RecapView(leaf, this));
    this.registerView(DECISIONS, (leaf) => new DecisionsView(leaf, this));
    this.registerView(PROJECTS, (leaf) => new ProjectsView(leaf, this));
    this.registerView(GUIDE, (leaf) => new GuideView(leaf, this));
    this.addRibbonIcon("book-open", "Open Guide", () => this.openGuide());
    this.addCommand({ id: "open-guide", name: "Guide: every button explained", callback: () => this.openGuide() });
    this.addCommand({ id: "open-how-to", name: "How to use (the easy guide)", callback: () => this.openHowTo() });
    this.addCommand({ id: "graph-realms", name: "Graph Realms: pick a look for the graph", callback: () => this.openPanel().then(() => this.panelTab("graph")) });
    this.addCommand({ id: "graph-realm-undo", name: "Graph Realms: undo the last realm", callback: () => this.undoRealm() });
    this.addRibbonIcon("folder-kanban", "Projects", () => this.openProjects());
    this.addCommand({ id: "open-projects", name: "Projects (manage projects, types and categories)", callback: () => this.openProjects() });
    this.addCommand({ id: "open-types", name: "Project types (visual editor)", callback: () => this.openProjects("types") });
    this.addCommand({
      id: "open-in-holo",
      name: "Open this project in Holo",
      checkCallback: (checking) => {
        const p = this.store.find(this.app.workspace.getActiveFile()?.path);
        if (!p || !this.workshop.repoDir(p)) return false;
        if (!checking) this.openInHolo(p);
        return true;
      }
    });
    this.addCommand({
      id: "project-graph",
      name: "Open this project's own graph",
      checkCallback: (checking) => {
        const p = this.store.find(this.app.workspace.getActiveFile()?.path);
        if (!p) return false;
        if (!checking) this.openGraph(p.path);
        return true;
      }
    });
    this.addCommand({ id: "open-assets", name: "Asset library (every project's assets and licenses)", callback: () => this.openProjects("assets") });
    this.addCommand({ id: "open-automations", name: "Automations (rules that run by themselves)", callback: () => this.openProjects("automations") });
    this.addRibbonIcon("folder-plus", "New project", () => this.openCreator());
    this.addCommand({ id: "new-project", name: "New project\u2026", callback: () => this.openCreator() });
    this.addCommand({ id: "adopt-projects", name: "Adopt Workshop projects into the vault\u2026", callback: () => this.openCreator({ mode: "adopt-all", step: 3 }) });
    this.addRibbonIcon("gavel", "Open decisions", () => this.openDecisions());
    this.addCommand({ id: "open-decisions", name: "Open decision intelligence", callback: () => this.openDecisions() });
    this.addCommand({ id: "scan-decisions", name: "Check notes and tasks against decisions now", callback: async () => {
      const found = await this.guard.scan();
      new Notice(`Decision guard: ${found.filter((f) => !f.dismissed).length} open conflict(s)`);
      this.refreshGuard();
    } });
    this.registerEditorExtension(guardEditorExtension(this));
    window.setTimeout(() => this.guard.scan().then(() => this.refreshGuard()).catch(() => {
    }), 2e4);
    this.registerInterval(window.setInterval(() => this.guard.scan().then(() => this.refreshGuard()).catch(() => {
    }), 10 * 6e4));
    this.addRibbonIcon("chart-no-axes-column", "Open recap", () => this.openRecap());
    this.addCommand({ id: "open-recap", name: "Open recap (day, week, month or any dates)", callback: () => this.openRecap() });
    this.addCommand({ id: "write-recaps", name: "Write recap notes now", callback: async () => {
      const done = await this.recaps.writeNotes({ force: true });
      new Notice(done.length ? `Recap notes updated: ${done.length}` : "Recap notes are already up to date");
    } });
    this.registerInterval(window.setInterval(() => this.recaps.writeNotes().catch(() => {
    }), 15 * 6e4));
    window.setTimeout(() => this.recaps.writeNotes().catch(() => {
    }), 6e4);
    this.addRibbonIcon("list-checks", "Open Workshop tasks", () => this.openTasks());
    this.addCommand({ id: "open-tasks", name: "Open Workshop tasks", callback: () => this.openTasks() });
    this.addRibbonIcon("calendar-range", "Open timeline", () => this.openTimeline());
    this.addCommand({ id: "open-timeline", name: "Open timeline", callback: () => this.openTimeline() });
    this.addCommand({ id: "rebuild-briefs", name: "Rebuild project briefs and vault index", callback: async () => {
      await this.store.invalidate();
      await this.briefs.writeAll();
      new Notice("Briefs and vault index updated");
    } });
    this.addRibbonIcon("layout-dashboard", "Open mission control", () => this.openMission());
    this.addRibbonIcon("sparkles", "Open neural graph", () => this.openGraph());
    this.addRibbonIcon("sliders-horizontal", "Open EMX control panel", () => this.openPanel());
    this.addCommand({ id: "open-mission-control", name: "Open mission control", callback: () => this.openMission() });
    this.addCommand({ id: "open-neural-graph", name: "Open neural graph", callback: () => this.openGraph() });
    this.addCommand({ id: "graph-fullscreen", name: "Neural graph full screen (toggle)", callback: async () => {
      await this.openGraph();
      const leaf = this.app.workspace.getLeavesOfType(VIEW)[0];
      if (leaf && leaf.view.toggleFullscreen) leaf.view.toggleFullscreen();
    } });
    this.addCommand({ id: "open-control-panel", name: "Open control panel", callback: () => this.openPanel() });
    this.addCommand({ id: "undo-look", name: "Undo last look change", callback: () => this.undoLook() });
    this.addCommand({ id: "surprise-look", name: "Surprise me (random look)", callback: () => this.surprise() });
    this.addCommand({
      id: "new-playtest",
      name: "New playtest entry for this project",
      checkCallback: (checking) => {
        const p = this.store.find(this.app.workspace.getActiveFile()?.path);
        if (!p) return false;
        if (!checking) this.newPlaytest(p);
        return true;
      }
    });
    this.registerMarkdownCodeBlockProcessor("emx-mission", (src, el, ctx) => {
      const child = new MarkdownRenderChild(el);
      ctx.addChild(child);
      this.missionEls.add(el);
      child.register(() => this.missionEls.delete(el));
      renderMission(this, el);
    });
    this.registerMarkdownCodeBlockProcessor("emx-dashboard", (src, el, ctx) => {
      this.dashboardEls.set(el, { src, ctx });
      const child = new MarkdownRenderChild(el);
      ctx.addChild(child);
      child.register(() => this.dashboardEls.delete(el));
      renderDashboard(this, el, src, ctx);
    });
    this.registerMarkdownPostProcessor((el, ctx) => decorateRendered(el, ctx, this));
    this.registerEditorExtension(feelEditorExtension());
    this.statusEl = this.addStatusBarItem();
    this.statusEl.addClass("evs-status", "mod-clickable");
    this.registerDomEvent(this.statusEl, "click", () => {
      const p = this.store.find(this.app.workspace.getActiveFile()?.path);
      if (p) this.openPath(p.hub);
      else this.openMission();
    });
    this.backupEl = this.addStatusBarItem();
    this.backupEl.addClass("evs-backup", "mod-clickable");
    this.registerDomEvent(this.backupEl, "click", () => this.backupNow());
    this.updateBackupStatus();
    this.backupDue = Date.now() + 3e4;
    this.registerInterval(window.setInterval(() => {
      this.updateBackupStatus();
      if (!this.settings.backup.on || Date.now() < this.backupDue) return;
      this.backupDue = Date.now() + this.settings.backup.minutes * 6e4;
      this.backup.run();
    }, 15e3));
    this.addCommand({ id: "backup-now", name: "Back up the vault now", callback: () => this.backupNow() });
    this.addCommand({ id: "restore-deleted", name: "Restore a deleted note", callback: () => this.openDeleted() });
    this.addCommand({
      id: "note-history",
      name: "Show this note's history",
      checkCallback: (checking) => {
        const f = this.app.workspace.getActiveFile();
        if (!f) return false;
        if (!checking) this.openHistory(f);
        return true;
      }
    });
    this.registerEvent(this.app.workspace.on("file-menu", (menu, file) => {
      if (!file || !file.extension) return;
      menu.addItem((i) => i.setTitle("Note history").setIcon("history").onClick(() => this.openHistory(file)));
    }));
    const projectsChanged = debounce(() => this.store.invalidate(), 1500, true);
    const touched = (f) => f && this.store.folders().some((x) => f.path.startsWith(x.path + "/"));
    this.registerEvent(this.app.vault.on("modify", (f) => touched(f) && projectsChanged()));
    const typesChanged = debounce(() => {
      this.types.invalidate();
      this.store.invalidate();
    }, 800, true);
    for (const ev of ["modify", "create", "delete", "rename"]) this.registerEvent(this.app.vault.on(ev, (f) => f && f.path.startsWith(SYSTEM + "/") && typesChanged()));
    this.registerEvent(this.app.vault.on("create", () => projectsChanged()));
    this.registerEvent(this.app.vault.on("delete", () => projectsChanged()));
    this.registerEvent(this.app.vault.on("rename", () => projectsChanged()));
    this.registerInterval(window.setInterval(() => this.store.invalidate(), 12e4));
    this.registerInterval(window.setInterval(() => {
      const shown = [...this.missionEls].some((e) => e.isConnected && e.offsetParent) || this.app.workspace.getLeavesOfType(MISSION).some((l) => l.view.contentEl?.offsetParent);
      if (shown) this.store.invalidate();
    }, 3e4));
    this.registerInterval(window.setInterval(() => this.inbox.run().catch(() => {
    }), 6e4));
    this.registerEvent(this.app.workspace.on("file-open", () => {
      this.updateStatus();
      this.notes.all();
    }));
    this.registerEvent(this.app.workspace.on("active-leaf-change", () => this.updateStatus()));
    this.registerEvent(this.app.workspace.on("layout-change", debounce(() => this.notes.all(), 200, true)));
    this.app.workspace.onLayoutReady(async () => {
      if (!this.settings.types.seeded) {
        try {
          await this.types.seed();
          this.settings.types.seeded = 1;
          this.saveSoon();
        } catch (e) {
          console.error("EMX Vault Studio: project types", e);
        }
      }
      if (!this.settings.types.profiles) {
        try {
          const moved = await this.types.upgradeProfiles();
          this.settings.types.profiles = 1;
          this.saveSoon();
          if (moved.length) console.log("EMX Vault Studio: types on their own Workshop profiles:", moved.join(", "));
        } catch (e) {
          console.error("EMX Vault Studio: type profiles", e);
        }
      }
      await this.store.all();
      this.onProjectsChanged();
      this.automations.start().catch((e) => console.error("EMX Vault Studio: automations", e));
      if (!this.settings.panelShown) {
        this.settings.panelShown = true;
        this.saveSoon();
        await this.openPanel();
      }
      if (this.settings.mission.onStartup && !this.app.workspace.getLeavesOfType(MISSION).length) await this.openMission();
    });
    this.addCommand({
      id: "toggle-theme",
      name: "Toggle EMX theme",
      callback: async () => {
        this.settings.themeOn = !this.settings.themeOn;
        await this.saveSettings();
      }
    });
    this.addSettingTab(new StudioSettings(this.app, this));
    const changed = debounce(() => this.refreshGraphs(true), 600, true);
    this.registerEvent(this.app.vault.on("create", changed));
    this.registerEvent(this.app.vault.on("delete", changed));
    this.registerEvent(this.app.vault.on("rename", changed));
    this.registerEvent(this.app.metadataCache.on("resolved", changed));
  }
  onunload() {
    const b = document.body;
    b.classList.remove("evs-on", "evs-smallcaps", "evs-stars", "evs-bg-vault");
    for (const name of Array.from(b.style)) if (name.startsWith("--evs-")) b.style.removeProperty(name);
    document.getElementById("evs-custom-css")?.remove();
    document.getElementById("evs-project-css")?.remove();
    this.notes?.clearAll();
    this.bgm?.stop();
  }
  // ---- backup ----
  notify(text, ms = 6e3) {
    new Notice(text, ms);
  }
  async backupNow() {
    this.backupEl?.addClass("is-busy");
    const s = await this.backup.run({ manual: true });
    this.backupDue = Date.now() + this.settings.backup.minutes * 6e4;
    this.backupEl?.removeClass("is-busy");
    this.notify(s.result === "ok" ? `Vault backup: ${s.detail}` : this.backup.describe(), s.result === "ok" ? 4e3 : 1e4);
  }
  updateBackupStatus() {
    const el = this.backupEl;
    if (!el) return;
    const s = this.backup.state;
    el.empty();
    const bad = ["paused", "push-failed", "error"].includes(s.result);
    el.toggleClass("is-bad", bad);
    el.toggleClass("is-off", s.result === "off" || s.result === "blocked" || !this.settings.backup.on);
    setIcon(el.createSpan({ cls: "evs-backup-icon" }), bad ? "cloud-alert" : s.result === "ok" ? "cloud" : "cloud-off");
    const text = this.backup.describe();
    el.createSpan({ cls: "evs-backup-text", text: bad ? "Backup needs you" : s.lastCommit ? text.replace(/^Backed up /, "") : "" });
    el.setAttr("aria-label", `${text}
Click to back up now`);
    el.setAttr("data-tooltip-position", "top");
  }
  openHistory(file) {
    const m = new NoteHistoryModal(this, file);
    m.open();
    return m;
  }
  openDeleted() {
    const m = new DeletedNotesModal(this);
    m.open();
    return m;
  }
  // ---- looks: every card, built-in or yours, is a plain entry in settings.looks ----
  seedLooks() {
    const s = this.settings;
    if (s.looks.length) return;
    for (const [name, preset] of Object.entries(PRESETS)) {
      s.looks.push({ id: "p-" + name.toLowerCase().replace(/\s+/g, "-"), name, builtIn: true, look: JSON.parse(JSON.stringify(preset)) });
    }
    for (const m of s.myLooks || []) s.looks.push({ id: "m-" + hash(m.name).toString(36), name: m.name, look: m.look });
  }
  restoreBuiltIns() {
    for (const [name, preset] of Object.entries(PRESETS)) {
      const id = "p-" + name.toLowerCase().replace(/\s+/g, "-");
      if (!this.settings.looks.some((l) => l.id === id)) this.settings.looks.push({ id, name, builtIn: true, look: JSON.parse(JSON.stringify(preset)) });
    }
  }
  // ---- projects ----
  projStyle(p) {
    const own = this.settings.projects[p.name] || {};
    return {
      color: own.color || PROJECT_COLORS[(p.index || 0) % PROJECT_COLORS.length],
      icon: own.icon || this.types && ((this.types.get(p.type) || {}).icon || (this.types.category(p.section) || {}).icon) || (p.section === "Tools" ? "wrench" : p.section === "Archive" ? "archive" : "gamepad-2"),
      bannerBg: own.bannerBg
    };
  }
  projectColor(name) {
    if (!this.settings.graph.byProject) return null;
    const f = this.store.folders().find((x) => x.name === name);
    return f ? this.projStyle(f).color : null;
  }
  setProject(name, key, value) {
    const s = this.settings;
    s.projects[name] = Object.assign({}, s.projects[name], { [key]: value });
    this.applyTheme();
    this.refreshGraphs(false);
    this.onProjectsChanged();
    this.saveSoon();
  }
  onProjectsChanged() {
    try {
      this.holoMatch = this.holo.match(this.store.cache || []);
    } catch (e) {
    }
    this.guard.invalidate();
    this.guard.index().then(() => this.refreshGuard()).catch(() => {
    });
    this.updateStatus();
    this.notes.all();
    for (const el of this.missionEls) if (el.isConnected) renderMission(this, el);
    for (const leaf of this.app.workspace.getLeavesOfType(MISSION)) leaf.view.render?.();
    const css = document.getElementById("evs-project-css");
    if (css) css.textContent = projectCss(this);
    for (const leaf of this.app.workspace.getLeavesOfType(TIMELINE)) leaf.view.render?.();
    for (const leaf of this.app.workspace.getLeavesOfType(TASKS)) if (!leaf.view.busy) leaf.view.render?.();
    for (const leaf of this.app.workspace.getLeavesOfType(PROJECTS)) if (leaf.view.tab === "projects") leaf.view.render?.();
    this.refreshDashboards();
    for (const l of this.app.workspace.getLeavesOfType(VIEW)) if (l.view && l.view.project) {
      l.view.model = null;
      l.view.dirty = true;
    }
    if (this.automations.started) this.automations.onProjects(this.store.cache || []).catch(() => {
    });
    this.writeSoon();
  }
  updateStatus() {
    const el = this.statusEl, s = this.settings.status;
    if (!el) return;
    el.empty();
    if (!s.on) return el.hide();
    el.show();
    const p = this.store.find(this.app.workspace.getActiveFile()?.path);
    if (!p) {
      if (!s.outside) return el.hide();
      const all = this.store.cache || [];
      setIcon(el.createSpan({ cls: "evs-status-icon" }), "layout-dashboard");
      el.createSpan({ text: `${all.filter((x) => x.section !== "Archive").length} projects \xB7 ${all.reduce((n, x) => n + x.open, 0)} open tasks` });
      el.setAttr("aria-label", "Open mission control");
      return;
    }
    const st = this.projStyle(p);
    el.style.setProperty("--p", st.color);
    if (s.icon) setIcon(el.createSpan({ cls: "evs-status-icon" }), st.icon);
    const bits = [];
    if (s.name) bits.push(p.name);
    if (s.stage && p.stage) bits.push(p.stage);
    if (s.tasks && p.hasWorkshop) bits.push(`${p.open} open`);
    if (s.next && (p.next || p.nextTask)) {
      const n = p.next || p.nextTask;
      bits.push(`Next: ${n.length > 60 ? n.slice(0, 57) + "\u2026" : n}`);
    }
    el.createSpan({ text: bits.join("  \xB7  ") });
    el.setAttr("aria-label", `Open ${p.name}'s hub`);
  }
  openPath(path) {
    const f = this.app.vault.getAbstractFileByPath(path);
    if (f) this.app.workspace.getLeaf(false).openFile(f);
  }
  async openTimeline() {
    let leaf = this.app.workspace.getLeavesOfType(TIMELINE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: TIMELINE, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
  }
  // the Guide: every button explained (reads the ribbon and sidebars as they are when it opens)
  async openGuide() {
    let leaf = this.app.workspace.getLeavesOfType(GUIDE)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: GUIDE, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
    if (leaf.view && leaf.view.render) leaf.view.render();
  }
  // the easy How to use note (in its own tab, reading view)
  async openHowTo() {
    const f = HOW_TO.map((p) => this.app.vault.getAbstractFileByPath(p)).find(Boolean);
    if (!f) return new Notice(`Not found: ${HOW_TO.join(" or ")}`);
    const open = this.app.workspace.getLeavesOfType("markdown").find((l) => l.view.file && l.view.file.path === f.path);
    if (open) return this.app.workspace.revealLeaf(open);
    await this.app.workspace.getLeaf("tab").openFile(f, { state: { mode: "preview" } });
  }
  // the control panel on one of its tabs
  panelTab(id) {
    for (const leaf of this.app.workspace.getLeavesOfType(PANEL)) {
      if (!(leaf.view instanceof ControlPanelView)) continue;
      leaf.view.tab = id;
      leaf.view.render();
    }
  }
  // ---- Graph Realms: a realm's look onto the graph (open graphs morph into it); Undo steps back ----
  setRealm(realm, opts = {}) {
    if (opts.undo !== false) {
      this.realmUndo.push(realmFromGraph(this.settings.graph, this.settings.graph.realm || "Before"));
      if (this.realmUndo.length > 20) this.realmUndo.shift();
    }
    this.change((s) => Object.assign(s.graph, applyRealm(s.graph, realm, DEFAULTS.graph)));
  }
  undoRealm() {
    const prev = this.realmUndo.pop();
    if (!prev) return new Notice("No realm to go back to");
    this.setRealm(prev, { undo: false });
  }
  // a saved shape or realm of yours ({ name, shape: {...} }) as a realm
  savedRealm(item) {
    return savedAsRealm(item);
  }
  // a built-in realm or one of yours, by name (for commands, automations and Claude)
  realmByName(name) {
    const mine = (this.settings.shapes || []).find((x) => x.name === name);
    return REALMS.find((r) => r.name === name) || (mine ? savedAsRealm(mine) : null);
  }
  // dashboards on screen redraw (not while you're customizing one), at most every 20 seconds
  refreshDashboards() {
    if (this.dashTimer) return;
    this.dashTimer = window.setTimeout(() => {
      this.dashTimer = null;
      for (const [el, { src, ctx }] of this.dashboardEls) if (el.isConnected && el.dataset.editing !== "1") renderDashboard(this, el, src, ctx);
    }, 2e4);
  }
  // ---- favorites and Holo ----
  // { pinned (yours, in the vault), holo (its Holo collection, or "" when a Holo favorite with none), star }
  favoriteOf(p) {
    const own = !!(this.settings.projects[p.name] || {}).pinned;
    const h = this.holoMatch.linked.get(p.path);
    return { pinned: own, holo: h ? h.collection || "Holo favorite" : null, star: own || !!h };
  }
  async togglePin(p) {
    const own = Object.assign({}, this.settings.projects[p.name]);
    own.pinned = !own.pinned;
    this.settings.projects[p.name] = own;
    await this.saveSettings();
    this.onProjectsChanged();
    return own.pinned;
  }
  // the hub in Obsidian's own Bookmarks (the core Bookmarks plugin)
  bookmark(p) {
    const b = this.app.internalPlugins && this.app.internalPlugins.getPluginById && this.app.internalPlugins.getPluginById("bookmarks");
    if (!b || !b.enabled || !b.instance) return new Notice("Turn on Obsidian's Bookmarks core plugin first");
    const f = this.app.vault.getAbstractFileByPath(p.hub);
    if (!f) return new Notice("This project has no hub note");
    if ((b.instance.items || []).some((i) => i.path === p.hub)) return new Notice(`${p.name} is already bookmarked`);
    b.instance.addItem({ type: "file", path: p.hub, title: p.name });
    new Notice(`${p.name} bookmarked`);
  }
  // the project in the vault: its dashboard (or hub) in a tab of its own
  async openInVault(p) {
    const f = this.app.vault.getAbstractFileByPath(p.dashboard) || this.app.vault.getAbstractFileByPath(p.hub);
    if (!f) return new Notice(`${p.name} has no hub or dashboard note`);
    const open = this.app.workspace.getLeavesOfType("markdown").find((l) => l.view.file && l.view.file.path === f.path);
    if (open) return this.app.workspace.revealLeaf(open);
    await this.app.workspace.getLeaf("tab").openFile(f);
  }
  async openInHolo(p) {
    const n = new Notice(`Opening ${p.name} in Holo\u2026`, 0);
    try {
      const said = await this.holo.openProject(p);
      n.setMessage(said);
    } catch (e) {
      n.setMessage(`Holo: ${e.message}`);
    }
    setTimeout(() => n.hide(), 6e3);
  }
  // the Projects manager (tab: projects, types or categories)
  async openProjects(tab = "projects") {
    let leaf = this.app.workspace.getLeavesOfType(PROJECTS)[0];
    if (!leaf) leaf = this.app.workspace.getLeaf("tab");
    await leaf.setViewState({ type: PROJECTS, active: true, state: { tab } });
    await this.app.workspace.revealLeaf(leaf);
  }
  // the Project Creator (preset can start it on a type or in adopt mode)
  openCreator(preset = {}) {
    const m = new ProjectCreator(this, preset);
    m.open();
    return m;
  }
  // decision intelligence; opts.decision selects one
  async openDecisions(opts = {}) {
    let leaf = this.app.workspace.getLeavesOfType(DECISIONS)[0];
    if (!leaf) leaf = this.app.workspace.getLeaf("tab");
    const state = { tab: "decisions" };
    if (opts.decision) Object.assign(state, { selected: opts.decision, status: "all" });
    if (opts.only !== void 0) state.only = opts.only;
    await leaf.setViewState({ type: DECISIONS, active: true, state });
    await this.app.workspace.revealLeaf(leaf);
  }
  // editors re-check what's on screen (after the index changes or a warning is reviewed)
  refreshGuard() {
    for (const v of this.guardViews) v.refresh();
  }
  // the recap view; opts can pick the range kind, a project and a tile to focus on
  async openRecap(opts = {}) {
    let leaf = this.app.workspace.getLeavesOfType(RECAP)[0];
    if (!leaf) leaf = this.app.workspace.getLeaf("tab");
    const state = Object.assign({ kind: opts.kind || this.settings.recap.range, anchor: Date.now() }, opts.only !== void 0 ? { only: opts.only } : {}, { focus: opts.focus || null });
    await leaf.setViewState({ type: RECAP, active: true, state });
    await this.app.workspace.revealLeaf(leaf);
  }
  // the Workshop task board, for one project (or the one you're in)
  async openTasks(projectPath) {
    let leaf = this.app.workspace.getLeavesOfType(TASKS)[0];
    if (!leaf) leaf = this.app.workspace.getLeaf("tab");
    const project = projectPath || this.store.find(this.app.workspace.getActiveFile()?.path)?.path || leaf.view?.projectPath || null;
    await leaf.setViewState({ type: TASKS, active: true, state: { project } });
    await this.app.workspace.revealLeaf(leaf);
  }
  async openMission() {
    let leaf = this.app.workspace.getLeavesOfType(MISSION)[0];
    if (!leaf) {
      leaf = this.app.workspace.getLeaf("tab");
      await leaf.setViewState({ type: MISSION, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
  }
  // adds a dated playtest entry at the top of the project's Feel tests and puts the cursor in it
  async newPlaytest(p) {
    const vault = this.app.vault;
    let file = vault.getAbstractFileByPath(p.feel);
    if (!file) file = await vault.create(p.feel, `# ${p.name}: feel tests

Newest at the top. Your words from playtests go here.
`);
    const now = /* @__PURE__ */ new Date();
    const day = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const entry = `### ${day} ${partOfDay(now)}: playtest

- **Build / what I tested:** 
- **Felt right:** 
- **Felt wrong:** 
- **Bugs:** 
- **Turn into tasks?** (yes / no)

`;
    let line = 0;
    await vault.process(file, (text) => {
      const i = text.search(/^### /m);
      const at = i >= 0 ? i : text.length;
      const before = text.slice(0, at);
      const pad = before.endsWith("\n\n") || !before ? "" : before.endsWith("\n") ? "\n" : "\n\n";
      line = (before + pad).split("\n").length + 1;
      return before + pad + entry + text.slice(at);
    });
    const leaf = this.app.workspace.getLeaf(false);
    await leaf.openFile(file, { state: { mode: "source" } });
    window.setTimeout(() => {
      const view = leaf.view;
      if (view instanceof MarkdownView) {
        view.editor.setCursor({ line, ch: view.editor.getLine(line).length });
        view.editor.focus();
      }
    }, 150);
  }
  async saveSettings(rebuild) {
    await this.saveData(this.settings);
    this.applyTheme();
    this.refreshGraphs(rebuild);
    this.refreshPanels();
  }
  // live change from the control panel: apply now, save shortly after; the panel that made it isn't redrawn
  change(mutate, opts = {}) {
    mutate(this.settings);
    if (opts.custom) this.settings.preset = "Custom";
    this.applyTheme();
    this.refreshGraphs(!!opts.rebuild);
    this.refreshPanels(opts.source);
    if (opts.notes) this.notes.all();
    if (opts.status) this.updateStatus();
    if (opts.bgId) this.bgm.updated(opts.bgId);
    this.saveSoon();
  }
  refreshPanels(except) {
    for (const leaf of this.app.workspace.getLeavesOfType(PANEL)) {
      if (leaf.view instanceof ControlPanelView && leaf.view !== except) leaf.view.render();
    }
  }
  async openPanel() {
    let leaf = this.app.workspace.getLeavesOfType(PANEL)[0];
    if (!leaf) {
      leaf = this.app.workspace.getRightLeaf(false);
      await leaf.setViewState({ type: PANEL, active: true });
    }
    await this.app.workspace.revealLeaf(leaf);
    if (leaf.loadIfDeferred) await leaf.loadIfDeferred();
    const rs = this.app.workspace.rightSplit;
    if (rs && rs.setSize && rs.containerEl.getBoundingClientRect().width < 380) rs.setSize(400);
  }
  look() {
    const l = {};
    for (const k of LOOK_KEYS) l[k] = this.settings[k];
    l.graph = {};
    for (const k of GRAPH_LOOK_KEYS) l.graph[k] = this.settings.graph[k];
    const v = this.settings.fx.vault;
    l.bgVault = v.on ? v.id : null;
    return JSON.parse(JSON.stringify(l));
  }
  // a look's own fields onto the settings (its vault background too, when it has one)
  assignLook(s, look) {
    const { graph, bgVault, ...theme } = look;
    Object.assign(s, theme);
    Object.assign(s.graph, graph || {});
    if (bgVault !== void 0) {
      s.fx.vault.on = !!bgVault;
      if (bgVault) s.fx.vault.id = bgVault;
    }
  }
  // presets, saved looks and Surprise all go through here, so Undo can step back
  setLook(look, name) {
    this.undoStack.push({ look: this.look(), preset: this.settings.preset });
    if (this.undoStack.length > 20) this.undoStack.shift();
    this.change((s) => {
      this.assignLook(s, look);
      s.preset = name;
    });
  }
  undoLook() {
    const prev = this.undoStack.pop();
    if (!prev) {
      new Notice("Nothing to undo");
      return;
    }
    this.change((s) => {
      this.assignLook(s, prev.look);
      s.preset = prev.preset;
    });
  }
  surprise() {
    this.setLook(randomLook(), "Custom");
  }
  applyTheme() {
    const s = this.settings, b = document.body;
    b.classList.toggle("evs-on", !!s.themeOn);
    b.classList.toggle("evs-smallcaps", !!s.smallCaps);
    b.classList.toggle("evs-stars", !!s.stars && s.starDensity > 0);
    const see = s.fx.vault.on ? Math.max(0.2, Math.min(1, s.fx.vault.see)) : 1;
    const solid = (hex, a) => a >= 1 ? hex : rgba(hex, a);
    const vars = {
      "--evs-bg": solid(s.bg, see),
      "--evs-bg-alt": solid(mix(s.bg, s.panel, 0.5), see),
      "--evs-panel": solid(s.panel, Math.min(1, see + 0.08)),
      "--evs-panel-alt": solid(mix(s.panel, s.accent, 0.06), Math.min(1, see + 0.08)),
      "--evs-border": rgba(s.accent, 0.22),
      "--evs-border-strong": rgba(s.accent, 0.45),
      "--evs-hover": rgba(s.accent, 0.1),
      "--evs-selection": rgba(s.accent, 0.25),
      "--evs-text": s.text,
      "--evs-muted": s.muted,
      "--evs-faint": mix(s.muted, s.bg, 0.4),
      "--evs-accent": s.accent,
      "--evs-accent2": s.accent2,
      "--evs-heading": s.heading,
      "--evs-glow": String(s.glow),
      "--evs-glow-color": rgba(s.accent, 0.55),
      "--evs-glow-soft": rgba(s.accent, 0.18),
      "--evs-radius": `${s.radius}px`,
      "--evs-frame-style": s.frameStyle,
      "--evs-frame-width": s.frameStyle === "none" ? "0px" : `${s.frameStyle === "double" ? Math.max(3, s.frameWidth) : s.frameWidth}px`,
      "--evs-font-head": fontFamily(s.fontHead),
      "--evs-font-ui": fontFamily(s.fontUI),
      "--evs-font-text": fontFamily(s.fontText),
      "--evs-head-spacing": `${s.headSpacing}em`,
      "--evs-starfield": starfield(s)
    };
    for (const [k, v] of Object.entries(vars)) b.style.setProperty(k, v);
    let style = document.getElementById("evs-custom-css");
    if (!style) {
      style = document.head.createEl("style", { attr: { id: "evs-custom-css" } });
    }
    style.textContent = s.customCss || "";
    let pcss = document.getElementById("evs-project-css");
    if (!pcss) pcss = document.head.createEl("style", { attr: { id: "evs-project-css" } });
    pcss.textContent = this.store ? projectCss(this) : "";
    this.bgm?.applyVault();
  }
  refreshGraphs(rebuild) {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW)) {
      if (leaf.view instanceof NeuralGraphView) leaf.view.refresh(rebuild);
    }
  }
  // the whole vault's graph, or (with a project path) that project's own graph in its own tab
  async openGraph(projectPath) {
    if (projectPath) {
      let leaf2 = this.app.workspace.getLeavesOfType(VIEW).find((l) => l.view && l.view.project === projectPath);
      if (!leaf2) {
        leaf2 = this.app.workspace.getLeaf("tab");
        await leaf2.setViewState({ type: VIEW, active: true, state: { project: projectPath } });
      }
      await this.app.workspace.revealLeaf(leaf2);
      return leaf2;
    }
    const existing = this.app.workspace.getLeavesOfType(VIEW).find((l) => !l.view || !l.view.project);
    const leaf = existing || this.app.workspace.getLeaf("tab");
    if (!existing) await leaf.setViewState({ type: VIEW, active: true });
    await this.app.workspace.revealLeaf(leaf);
    if (leaf.loadIfDeferred) await leaf.loadIfDeferred();
  }
  applyPreset(name) {
    const p = PRESETS[name];
    if (!p) return;
    const { graph, ...theme } = p;
    Object.assign(this.settings, theme);
    Object.assign(this.settings.graph, graph);
    this.settings.preset = name;
  }
};
module.exports = EmxVaultStudio;
