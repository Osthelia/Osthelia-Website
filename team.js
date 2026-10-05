const SOCIAL_ICONS = {
  twitter: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.5 22H1.4l8.2-9.4L1 2h7.1l4.9 6.4L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.5 22H1.4l8.2-9.4L1 2h7.1l4.9 6.4L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z"/></svg>',
  github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.64.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.36-3.37-1.36-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.28 9.28 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.19C22 6.58 17.52 2 12 2Z"/></svg>',
  discord: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.369A19.79 19.79 0 0 0 15.885 3c-.211.375-.444.879-.608 1.278a18.27 18.27 0 0 0-5.487 0A12.64 12.64 0 0 0 9.182 3a19.74 19.74 0 0 0-4.435 1.37C1.582 8.63.865 12.79 1.223 16.893a19.9 19.9 0 0 0 5.993 3.03c.483-.657.913-1.355 1.284-2.09a12.9 12.9 0 0 1-2.023-.97c.17-.124.336-.253.497-.386 3.902 1.8 8.126 1.8 11.982 0 .162.133.328.262.497.386-.645.386-1.323.71-2.023.971.371.735.8 1.433 1.284 2.09a19.87 19.87 0 0 0 5.994-3.031c.42-4.76-.72-8.883-3.39-12.524ZM8.686 14.398c-1.153 0-2.096-1.06-2.096-2.362 0-1.302.921-2.363 2.096-2.363 1.176 0 2.118 1.062 2.097 2.363 0 1.302-.921 2.362-2.097 2.362Zm6.628 0c-1.152 0-2.096-1.06-2.096-2.362 0-1.302.921-2.363 2.096-2.363 1.177 0 2.119 1.062 2.098 2.363 0 1.302-.9 2.362-2.098 2.362Z"/></svg>',
  twitch: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0 1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-3.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07Z"/></svg>',
  website: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.93 9h-3.05c-.11-2.1-.6-4-1.34-5.36A8.02 8.02 0 0 1 19.93 11ZM12 4c.83 1.02 1.63 3.13 1.85 5H10.15C10.37 7.13 11.17 5.02 12 4ZM4.07 11a8.02 8.02 0 0 1 4.39-6.36C7.72 6 7.23 7.9 7.12 10H4.07Zm0 2h3.05c.11 2.1.6 4 1.34 5.36A8.02 8.02 0 0 1 4.07 13ZM12 20c-.83-1.02-1.63-3.13-1.85-5h3.7c-.22 1.87-1.02 3.98-1.85 5Zm2.59-.64c.74-1.36 1.23-3.26 1.34-5.36h3.05a8.02 8.02 0 0 1-4.39 5.36Z"/></svg>',
  default: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 0 0 0 6h3v2h-3a5 5 0 0 1-5-5Zm7-1h6v2h-6v-2Zm4-4h3a5 5 0 0 1 0 10h-3v-2h3a3 3 0 0 0 0-6h-3V7Z"/></svg>'
};

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderSocials(socials) {
  if (!socials) return "";

  const links = Object.entries(socials)
    .filter(([, url]) => url)
    .map(([platform, url]) => {
      const icon = SOCIAL_ICONS[platform.toLowerCase()] || SOCIAL_ICONS.default;
      return `<a href="${escapeHtml(url)}" class="team-social" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(platform)}">${icon}</a>`;
    });

  if (!links.length) return "";
  return `<div class="team-socials">${links.join("")}</div>`;
}

// Icon paths aren't all centered in their viewBox, so fit each viewBox to the
// glyph's actual bounds to keep it optically centered in its circle.
function centerSocialIcons(root) {
  root.querySelectorAll(".team-social svg").forEach(svg => {
    const box = svg.getBBox();
    if (!box.width || !box.height) return;
    const size = Math.max(box.width, box.height);
    const x = box.x + box.width / 2 - size / 2;
    const y = box.y + box.height / 2 - size / 2;
    svg.setAttribute("viewBox", `${x} ${y} ${size} ${size}`);
  });
}

function renderMember(member) {
  const roleNames = Array.isArray(member.roleNames) ? member.roleNames : [];
  const badges = roleNames.map(role => `<span class="role-badge">${escapeHtml(role)}</span>`).join("");
  const bio = member.bio ? `<p class="team-bio">${escapeHtml(member.bio)}</p>` : "";
  const displayName = member.displayRole ? `${escapeHtml(member.name)} — ${escapeHtml(member.displayRole)}` : escapeHtml(member.name);

  return `
    <article class="team-card">
      <img class="team-avatar" src="${escapeHtml(member.image || "")}" alt="" loading="lazy">
      <div class="team-name">${displayName}</div>
      ${badges ? `<div class="team-roles">${badges}</div>` : ""}
      ${bio}
      ${renderSocials(member.socials)}
    </article>
  `;
}

function groupByCategory(members) {
  const groups = new Map();

  members.forEach(member => {
    const category = member.category || { key: "team", label: { en: "Team" }, order: 0 };
    if (!groups.has(category.key)) {
      groups.set(category.key, { category, members: [] });
    }
    groups.get(category.key).members.push(member);
  });

  return Array.from(groups.values())
    .sort((a, b) => (a.category.order ?? 0) - (b.category.order ?? 0))
    .map(group => {
      group.members.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      return group;
    });
}

async function loadTeam() {
  const root = document.getElementById("team-root");
  if (!root) return;

  try {
    const response = await fetch(`${OSTHELIA_API_BASE}/api/about/team`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const members = await response.json();

    if (!Array.isArray(members) || members.length === 0) {
      root.innerHTML = `<div class="data-state">No team members to show yet.</div>`;
      return;
    }

    const groups = groupByCategory(members);

    root.innerHTML = groups.map(group => `
      <div class="team-category reveal in">
        <div class="team-category-label">${escapeHtml(group.category.label?.en || group.category.key)}</div>
        <div class="team-grid">
          ${group.members.map(renderMember).join("")}
        </div>
      </div>
    `).join("");

    centerSocialIcons(root);

  } catch (error) {
    root.innerHTML = `
      <div class="data-state is-error">
        Couldn't reach the team directory right now.
        <br>
        Make sure the API is running at ${escapeHtml(OSTHELIA_API_BASE)}.
      </div>
    `;
  }
}

loadTeam();
