// Usage : node make-image.js [input.png] [output.png] [largeur] [hauteur]
const sharp = require("sharp");

const [input = "logo.png", output = "logo-bg.png", w, h] = process.argv.slice(2);

(async () => {
  const meta = await sharp(input).metadata();
  const W = Number(w) || meta.width;
  const H = Number(h) || meta.height;
  const vw = W / 100, vh = H / 100;

  const stars = Array.from({ length: Math.round((W * H) / 12000) }, () => {
    const x = Math.random() * W, y = Math.random() * H;
    const r = (1 + Math.random() * 1.5) * (W / 1600), o = 0.2 + Math.random() * 0.7;
    return `<circle cx="${x}" cy="${y}" r="${r * 3}" fill="#fff" opacity="${o * 0.25}" filter="url(#glow)"/>
            <circle cx="${x}" cy="${y}" r="${r}" fill="#fff" opacity="${o}"/>`;
  }).join("");

  const radial = (id, cx, cy, r, color, a, stop = 0.4) => `
    <radialGradient id="${id}" gradientUnits="userSpaceOnUse" cx="${cx}" cy="${cy}" r="${r}">
      <stop offset="0" stop-color="${color}" stop-opacity="${a}"/>
      <stop offset="${stop}" stop-color="${color}" stop-opacity="0"/>
    </radialGradient>`;

  const orb = (id, size, left, top, color, a) =>
    ({ def: radial(id, left + size / 2, top + size / 2, size / 2, color, a, 0.7),
       el: `<circle cx="${left + size / 2}" cy="${top + size / 2}" r="${size / 2}" fill="url(#${id})" filter="url(#blur)"/>` });
  const orbs = [
    orb("oa", 46 * vw, -12 * vw, 4 * vh, "#8e45ff", 0.35),
    orb("ob", 38 * vw, W + 10 * vw - 38 * vw, 45 * vh, "#f35bd7", 0.28),
    orb("oc", 34 * vw, 10 * vw, H + 12 * vw - 34 * vw, "#6ce0ff", 0.14),
  ];
  const diag = Math.hypot(W, H);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs>
      ${radial("g1", 0.2 * W, 0.15 * H, diag * 0.4, "#9b5cff", 0.14)}
      ${radial("g2", 0.85 * W, 0.75 * H, diag * 0.4, "#f17fd8", 0.10)}
      ${radial("g3", 0.5 * W, H, diag * 0.35, "#6ce0ff", 0.05)}
      ${orbs.map(o => o.def).join("")}
      <filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="${60 * (W / 1600)}"/></filter>
      <filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="${3 * (W / 1600)}"/></filter>
      <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/></filter>
    </defs>
    <rect width="100%" height="100%" fill="#0a0612"/>
    <rect width="100%" height="100%" fill="url(#g1)"/>
    <rect width="100%" height="100%" fill="url(#g2)"/>
    <rect width="100%" height="100%" fill="url(#g3)"/>
    ${orbs.map(o => o.el).join("")}
    ${stars}
    <rect width="100%" height="100%" filter="url(#grain)" opacity=".035"/>
  </svg>`;

  const art = await sharp(input).resize(W, H, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
  await sharp(Buffer.from(svg)).composite([{ input: art }]).png().toFile(output);
  console.log(`✔ ${output} (${W}×${H})`);
})().catch(e => { console.error(e); process.exit(1); });
