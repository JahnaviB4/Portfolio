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

/* =========================
   CONTACT FORM (SUCCESS MESSAGE)
========================= */
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    statusEl.textContent = "Sending message...";
    statusEl.className = "form-status sending";

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        form.reset();
        form.style.display = "none";

        statusEl.textContent =
          "✅ Thank you! Your message has been sent successfully. I’ll get back to you soon.";
        statusEl.className = "form-status success";
      } else {
        statusEl.textContent =
          "❌ Something went wrong. Please try again later.";
        statusEl.className = "form-status error";
      }
    } catch (error) {
      statusEl.textContent =
        "❌ Network error. Please check your connection and try again.";
      statusEl.className = "form-status error";
    }
  });
}
