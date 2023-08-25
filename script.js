const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    removeActiveClass();
    card.classList.add("active");
    // e.target.classList.add("active");
  });
});

function removeActiveClass() {
  cards.forEach((card) => card.classList.remove("active"));
}
