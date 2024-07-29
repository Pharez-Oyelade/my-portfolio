//nav transition styles

//add active class to nav links on click
document.addEventListener("DOMContentLoaded", function () {
    //select all query with .cusom_nav class
    const buttons = document.querySelectorAll(".custom_nav");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () { //remove active class from link with active class
            buttons.forEach(function (btn) {
                btn.classList.remove("active");
            });
//add active class to clicked link
            button.classList.add("active");
        });
    });
});

//change link with active class on scroll
const navLinks = document.querySelectorAll(".custom_nav");
//event listener to detect a scroll
window.addEventListener('scroll', () => { //scroll on the y axis (up and down)
    const scrollPosition = window.scrollY;

//select all sections

    document.querySelectorAll('section').forEach((section) => { //constants to select ids, offset top and height
        const sectionId = section.id;
        const sectionOffset = section.offsetTop;//offset of each section from the top
        const sectionHeight = section.offsetHeight;
    //condition to detect if section is out of view/ has the right offset
        if (scrollPosition > sectionOffset && scrollPosition < sectionOffset + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if
                (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});



//responsive navbar
//reveal navbar on button press
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar');
const blur = document.getElementById('content')
//if bar button is clicked
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add('active');
        bar.style.display='none'
        // document.body.style.overflow = 'hidden';
    })
}
// if close button is pressed
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove('active');
        bar.style.display='initial'
    })
}


// LinkedIn modal display
function openAlert() {
    let modal = document.getElementById("customAlert");
    modal.style.display = "block";
    setTimeout(function () {
        modal.classList.add("show");

        modal.querySelector(".modal-content").style.opacity = 1;   
    }, 10);
    
    
    // document.getElementById("customAlert").style.display = "block";
}

function closeAlert() {
    let modal = document.getElementById("customAlert");
    modal.classList.remove("show");

    modal.querySelector(".modal-content").style.opacity = 0;
    setTimeout(function () {
        modal.style.display = "none";
    }, 500);
    
    // document.getElementById("customAlert").style.display = "none";
}

function notThere () {
    // alert("Sorry, I'm not on LinkedIn yet! Joining soon")
    return openAlert();
}

// toggle light and dark mode
let isDarkMode = false;

function toggleMode() {
    const content = document.getElementById('content');

    content.classList.toggle('dark-mode');
    content.classList.toggle('light-mode');

    isDarkMode = !isDarkMode;
    updateIcon();
}

function updateIcon() {
    const modeIcon = document.getElementById("modeIcon");
    modeIcon.className = isDarkMode ? 'uil uil-sun' : 'uil uil-moon';
}

