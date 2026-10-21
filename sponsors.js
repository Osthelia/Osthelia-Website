// Sponsors come from sponsors.json: [{ "name", "logo", "url", "description", "about" }].
// "description" is the short line under the name, "about" the longer text on the other side.
// The section stays hidden until the list has at least one entry.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function isHttpUrl(value) {
  try {
    return ["http:", "https:"].includes(new URL(value).protocol);
  } catch {
    return false;
  }
}

// Rows alternate sides through CSS (:nth-child(even) flips the identity block).
function renderSponsor(sponsor) {
  const name = escapeHtml(sponsor.name);
  const logo = sponsor.logo
    ? `<img class="sponsor-logo" src="${escapeHtml(sponsor.logo)}" alt="" loading="lazy">`
    : `<div class="sponsor-logo sponsor-logo-fallback" aria-hidden="true">✦</div>`;
  const description = sponsor.description
    ? `<p class="sponsor-desc">${escapeHtml(sponsor.description)}</p>`
    : "";
  const identity = `${logo}<h3 class="sponsor-name">${name}</h3>${description}`;

  const identityBlock = isHttpUrl(sponsor.url)
    ? `<a href="${escapeHtml(sponsor.url)}" class="sponsor-identity" target="_blank" rel="noopener noreferrer sponsored" aria-label="${name}">${identity}<span class="sponsor-visit" aria-hidden="true">Visit ↗</span></a>`
    : `<div class="sponsor-identity">${identity}</div>`;

  const about = sponsor.about
    ? `<div class="sponsor-about"><p>${escapeHtml(sponsor.about)}</p></div>`
    : "";

  return `<article class="sponsor-row reveal${about ? "" : " sponsor-row-solo"}">${identityBlock}${about}</article>`;
}

async function loadSponsors() {
  const section = document.getElementById("sponsors");
  const root = document.getElementById("sponsors-root");
  if (!section || !root) return;

  try {
    const response = await fetch("sponsors.json", { cache: "no-cache" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const sponsors = (Array.isArray(data) ? data : []).filter(sponsor => sponsor && sponsor.name);
    if (!sponsors.length) return;

    root.innerHTML = sponsors.map(renderSponsor).join("");
    section.hidden = false;

    // Rows are injected after script.js ran, so wire up their reveal here.
    const rows = root.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      rows.forEach(el => el.classList.add("in"));
    } else {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .2, rootMargin: "0px 0px -8% 0px" });
      rows.forEach(el => observer.observe(el));
    }
  } catch (error) {
    // No list, no section.
  }
}

loadSponsors();
