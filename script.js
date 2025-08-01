document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const pills = document.querySelectorAll(".pill");
  const panels = document.querySelectorAll(".content-panel");

  // Fade in/out logic on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting) {
          el.classList.add("visible");
        } else {
          el.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  cards.forEach((card) => observer.observe(card));

  // Pill toggle logic
  pills.forEach((pill, index) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      panels.forEach((panel) => panel.classList.remove("active"));

      pill.classList.add("active");
      if (panels[index]) {
        panels[index].classList.add("active");
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const menuContainer = document.querySelector('.menu-container');
  const menu = document.querySelector('.menu');

  menuBtn.addEventListener('click', () => {
    const isOpen = menuContainer.classList.toggle('open');
    menu.hidden = !isOpen;
    menuBtn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu if clicked outside
  document.addEventListener('click', (e) => {
    if (!menuContainer.contains(e.target)) {
      menuContainer.classList.remove('open');
      menu.hidden = true;
      menuBtn.setAttribute('aria-expanded', false);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.body.classList.add("loaded");
  }, 30);

  document.querySelectorAll("a[href]").forEach(link => {
    if (
      link.hostname === window.location.hostname &&
      !link.href.includes("#") &&
      !link.hasAttribute("data-no-transition")
    ) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.body.classList.remove("loaded");
        setTimeout(() => {
          window.location.href = link.href;
        }, 400);
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const section = entry.target;
    const text = section.querySelector('.about-text');
    const visual = section.querySelector('.about-visual');

    if (entry.isIntersecting) {
      section.classList.add('visible');
      if (text) text.classList.add('visible');
      if (visual) visual.classList.add('visible');
    } else {
      section.classList.remove('visible');
      if (text) text.classList.remove('visible');
      if (visual) visual.classList.remove('visible');
    }
  });
}, {
  threshold: 0.5,
});

document.querySelectorAll('.about-section').forEach(section => {
  observer.observe(section);
});