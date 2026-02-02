/* =========================
   FOOTER YEAR
========================= */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* =========================
   TYPING EFFECT (HERO)
========================= */
const typingEl = document.getElementById("typing");

if (typingEl) {
  const texts = [
    "Software Engineer",
    "Full Stack Developer",
    "Cloud & Backend Engineer",
    "AI / ML Enthusiast"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentText = texts[textIndex];

    if (!deleting) {
      typingEl.textContent = currentText.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentText.length) {
        setTimeout(() => (deleting = true), 1200);
      }
    } else {
      typingEl.textContent = currentText.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeLoop, deleting ? 50 : 100);
  }

  typeLoop();
}
