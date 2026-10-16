// ===============================
// EMBER & SPICE
// Website Interactions
// ===============================

// 1. Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const targetId = this.getAttribute("href");

    if (targetId === "#") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// 2. WhatsApp ordering button
const orderButton = document.getElementById("order-button");

if (orderButton) {
  orderButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Replace this demo number with the restaurant's real number.
    const phoneNumber = "2348000000000";

    const message =
      "Hello Ember & Spice! I'd like to ask about your menu and place an order.";

    const whatsappURL =
      "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
  });
}

// 3. Reveal sections as they enter the screen
const revealElements = document.querySelectorAll(
  ".menu-card, .about-section h2, .about-section > p:last-child, .contact-section h2",
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  revealElements.forEach(function (element) {
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}

console.log("Ember & Spice website loaded successfully!");
