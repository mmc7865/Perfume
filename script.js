const close = document.querySelector(".close");
const nav = document.querySelector(".nav-pills");
const menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
   menu.style.display = "none";
   nav.style.left = "0px";
   close.style.display = "initial";
});
close.addEventListener("click", () => {
    menu.style.display = "initial";
    nav.style.left = "-200px";
    close.style.display = "none";
 });
