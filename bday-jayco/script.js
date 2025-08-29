document.addEventListener("DOMContentLoaded", function() {
    const card = document.querySelector(".birthdayCard");
    card.addEventListener("click", function() {
        card.classList.toggle("flipped");
    });
});