const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signupBtn =  document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShowHide = document.querySelectorAll(".pw_hide");

//add show class to the login boxes from the button click
formOpenBtn.addEventListener("click", () => home.classList.add("show"));
//remove/hide class on close button click
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

//change input type for password input box
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye")
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

//change home box from signin to signup
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

//move elements on scroll
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById
// })