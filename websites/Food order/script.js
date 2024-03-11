
// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
};

// const swiper = new Swiper('.swiper', {
//     direction: 'vertical',
//     loop: true,

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevE1: '.swiper-button-prev',
//     },
// });

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".custom_button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");
        });
    });
});

function showDescription () {
    document.getElementById('myContent').innerHTML="sit amet consectetur adipisicing elit. Autem ex doloremque necessitatibus cupiditate praesentium illo ratione expedita molestias, quis consectetur sint dignissimos reiciendis et assumenda at veritatis. Quo accusamus quibusdam distinctio nulla! Sint, rem, accusantium quod modi, excepturi quas qui beatae ab voluptatem porro illo voluptas. Sed, optio reprehenderit. Esse, rem repudiandae?"
}

function showInfo () {
    let tableHTML = "<table style= 'border-collapse: collapse; width:75%; margin:auto;'><tr><th style='border: 1px solid #ddd; padding: 15px; font-size:0.9rem'>ENERGY</th><td style='border: 1px solid #ddd; padding: 15px 150px 15px 10px; font-size: 0.9rem'>290Kcal</td></tr><tr><th style='border: 1px solid #ddd; padding: 15px; font-size:0.9rem'>PROTEIN</th><td style='border: 1px solid #ddd; padding: 15px 150px 15px 10px; font-size:0.9rem;'>26 g</td></tr><tr><th style='border: 1px solid #ddd; padding: 15px; font-size:0.9rem;'>FAT</th><td style='border: 1px solid #ddd; padding: 15px 150px 15px 10px; font-size:0.9rem'>8 g</td></tr><tr><th style='border: 1px solid #ddd; padding: 15px; font-size:0.9rem;'>CARBOHYDRATES</th><td style='border: 1px solid #ddd; padding: 15px 150px 15px 10px; font-size:0.9rem'>49 g</td></tr>"
    document.getElementById('myContent').innerHTML = tableHTML;
}

document.getElementById('myDescription').addEventListener('click', showDescription);

document.getElementById('myInformation').addEventListener('click', showInfo);


function showReview () {
// Create form element
let form = document.createElement("form");

//label and input for review
let reviewLabel = document.createElement("label");
reviewLabel.setAttribute("for", "review");
reviewLabel.textContent = "Your Review:";
let reviewInput = document.createElement("input");
reviewInput.setAttribute("type", "text");
reviewInput.setAttribute("id", "review");
reviewInput.setAttribute("name", "review");

let lineBreak = document.createElement("br");

// Create label and input elements for Name
let nameLabel = document.createElement("label");
nameLabel.setAttribute("for", "name");
nameLabel.textContent = "Name:";
let nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");

// Create line break for spacing
let lineBreak2 = document.createElement("br");

// Create label and input elements for Email
let emailLabel = document.createElement("label");
emailLabel.setAttribute("for", "email");
emailLabel.textContent = "Email:";
let emailInput = document.createElement("input");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("id", "email");
emailInput.setAttribute("name", "email");

// Create line break for spacing
let lineBreak3 = document.createElement("br");

// Create submit button
let submitButton = document.createElement("input");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("value", "Submit");

// Append elements to the form
form.appendChild(reviewLabel);
form.appendChild(reviewInput);
form.appendChild(lineBreak)
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(lineBreak2);
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(lineBreak3);
form.appendChild(submitButton);


let contentContainer = document.getElementById("myContent");
// Clear existing content 
contentContainer.innerHTML = '';
// Append form to an existing container element
contentContainer.appendChild(form);
};


// document.getElementById('myReview').addEventListener('click', showReview);