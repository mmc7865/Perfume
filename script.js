const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.querySelector("input");
    ul.innerHTML += `<li>${input.value}</li>`;
    input.value ="";
});
