const hamburger = document.querySelector("#hamburger");
const navMenuMobile = document.querySelector("#navMenuMobile");

const checkbox = document.querySelector("#checkbox");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenuMobile.classList.toggle("active");
    //console.log("active");
});

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});