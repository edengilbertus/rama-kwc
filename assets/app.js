const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    document.querySelectorAll("[data-filter]").forEach((item) => {
      item.setAttribute("aria-selected", String(item === button));
    });
    document.querySelectorAll("[data-product-category]").forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.productCategory === filter;
      card.hidden = !shouldShow;
    });
  });
});

document.querySelectorAll("[data-faq-question]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const open = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.querySelector("[data-symbol]").textContent = open ? "-" : "+";
  });
});

const enquiryForm = document.querySelector("[data-enquiry-form]");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const note = enquiryForm.querySelector("[data-form-note]");
    const name = enquiryForm.elements.name.value.trim();
    const topic = enquiryForm.elements.topic.value;
    note.textContent = `Thank you, ${name}. Your ${topic.toLowerCase()} enquiry is ready to send to Kyankima.`;
    enquiryForm.reset();
  });
}
