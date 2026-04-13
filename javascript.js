// ==============================
// 🔥 PRELOADER
// ==============================
window.addEventListener("DOMContentLoaded", () => {
  const loader = document.createElement("div");
  loader.innerHTML = "PowerFit";

  Object.assign(loader.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    zIndex: "9999",
    letterSpacing: "3px"
  });

  document.body.appendChild(loader);

  window.addEventListener("load", () => {
    loader.style.opacity = "0";
    loader.style.transition = "1s";
    setTimeout(() => loader.remove(), 1000);
  });
});


// ==============================
// 🌟 SMOOTH SCROLL
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ==============================
// 🌟 SCROLL REVEAL
// ==============================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section, .service-card").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px)";
  el.style.transition = "all 0.8s ease";
  observer.observe(el);
});


// ==============================
// 🌟 NAVBAR SCROLL EFFECT
// ==============================
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.7)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "rgba(0,0,0,0.85)";
  }
});


// ==============================
// 🌟 HERO TYPING EFFECT
// ==============================
const text = "Transform Your Body";
let index = 0;

function typeEffect() {
  const heading = document.querySelector(".hero h1");
  if (!heading) return;

  heading.innerHTML = text.slice(0, index);
  index++;

  if (index <= text.length) {
    setTimeout(typeEffect, 70);
  }
}

window.addEventListener("load", typeEffect);


// ==============================
// 🌟 PARALLAX EFFECT
// ==============================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (!hero || window.innerWidth < 768) return; // disable on mobile

  hero.style.backgroundPositionY = window.scrollY * 0.4 + "px";
});


// ==============================
// 🌟 3D CARD EFFECT (Desktop only)
// ==============================
if (window.innerWidth > 768) {
  document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
      let rect = card.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;

      let rotateX = -(y / rect.height - 0.5) * 10;
      let rotateY = (x / rect.width - 0.5) * 10;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0)";
      card.style.boxShadow = "";
    });

  });
}


// ==============================
// 🌟 BUTTON RIPPLE EFFECT
// ==============================
document.querySelectorAll(".btn-main, .btn-service").forEach(btn => {
  btn.addEventListener("click", function(e) {
    let circle = document.createElement("span");

    let diameter = Math.max(this.clientWidth, this.clientHeight);
    let radius = diameter / 2;

    circle.style.width = circle.style.height = diameter + "px";
    circle.style.left = e.offsetX - radius + "px";
    circle.style.top = e.offsetY - radius + "px";
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(255,255,255,0.5)";
    circle.style.transform = "scale(0)";
    circle.style.animation = "ripple 0.6s linear";
    circle.style.pointerEvents = "none";

    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});

// Ripple CSS
const style = document.createElement("style");
style.innerHTML = `
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
.btn-main, .btn-service {
  position: relative;
  overflow: hidden;
}
`;
document.head.appendChild(style);


// ==============================
// 🌟 SCROLL PROGRESS BAR
// ==============================
const progressBar = document.createElement("div");

Object.assign(progressBar.style, {
  position: "fixed",
  top: "0",
  left: "0",
  height: "4px",
  background: "linear-gradient(to right, red, orange)",
  zIndex: "9999",
  width: "0%"
});

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progressBar.style.width = (scrollTop / height) * 100 + "%";
});


// ==============================
// 🌟 FLOATING BUTTON (Scroll Top)
// ==============================
const fab = document.createElement("button");
fab.innerHTML = "↑";

Object.assign(fab.style, {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  background: "red",
  color: "#fff",
  fontSize: "20px",
  border: "none",
  boxShadow: "0 5px 15px rgba(0,0,0,0.5)",
  zIndex: "9999",
  cursor: "pointer",
  display: "none"
});

document.body.appendChild(fab);

window.addEventListener("scroll", () => {
  fab.style.display = window.scrollY > 200 ? "block" : "none";
});

fab.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
