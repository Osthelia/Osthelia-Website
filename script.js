const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Sticky header state ---------- */

const header = document.querySelector(".site-header");

if (header) {
  const onHeaderScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };

  window.addEventListener("scroll", onHeaderScroll, { passive: true });
  onHeaderScroll();
}

/* ---------- Top scroll progress bar ---------- */

let ticking = false;

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const fraction = max > 0 ? window.scrollY / max : 0;

  document.documentElement.style.setProperty("--progress", fraction);
  ticking = false;
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(updateProgress);
    ticking = true;
  }
}, { passive: true });

updateProgress();

/* ---------- Reveal on scroll ---------- */

const revealTargets = document.querySelectorAll(".reveal");

if (revealTargets.length) {
  if (reduceMotion) {
    revealTargets.forEach(el => el.classList.add("in"));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .2, rootMargin: "0px 0px -8% 0px" });

    revealTargets.forEach(el => revealObserver.observe(el));
  }
}

/* ---------- Smooth in-page nav links ---------- */

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const id = link.getAttribute("href");
    if (id.length < 2) return;

    const target = document.querySelector(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  });
});

/* ---------- Stars ---------- */

const stars = document.getElementById("stars");

if (stars) {
  for (let i = 0; i < 90; i++) {
    const star = document.createElement("div");

    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--duration", `${2 + Math.random() * 5}s`);
    star.style.animationDelay = `${Math.random() * 5}s`;

    stars.appendChild(star);
  }
}

/* ---------- Ambient orb parallax (mouse) ---------- */

if (!reduceMotion) {
  const orbs = document.querySelectorAll(".orb");

  window.addEventListener("mousemove", event => {
    const x = event.clientX / window.innerWidth - .5;
    const y = event.clientY / window.innerHeight - .5;

    orbs.forEach((orb, i) => {
      const strength = 18 + i * 10;
      orb.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
  });
}
