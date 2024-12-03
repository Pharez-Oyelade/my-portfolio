const projects = [
    {
        title: "React Real Estate",
        description: "A dynamic real estate application built with React. The app features an intuitive interface and detailed property information",
        tech: "REACT",
        source: "https://github.com/Pharez-Oyelade/react-real-estate",
        view: "https://react-realestate-7g3.pages.dev/",
        image: "../images/portfolio/Food Order Website - Google Chrome 4_10_2024 10_28_51 PM.png"
    },
    {
        title: "D'VORA E-commerce Store",
        description: "D'VORA E-commerce Store is a fully functional online shopping platform designed for a fictional brand. The site features a sleek and modern interface, allowing users to browse a wide range of products, and add items to their cart. With responsive design and user-friendly navigation, D'VORA aims to provide an enjoyable shopping experience.",
        tech: "REACT",
        source: "https://github.com/Pharez-Oyelade/e-commerce-project",
        view: "https://react-dvora-e-commerce.pages.dev/",
        image: "../images/portfolio/D'VORA E-Commerce Store - Google Chrome 12_4_2024 12_09_22 AM (2).png" 
    },
    {
        title: "Movie Search APP",
        description: "A React-based app utilizing an API to search for movies based on user input",
        tech: "React, API",
        source: " ",
        view: "https://movie-search-cgo.pages.dev/",
        image: "../images/portfolio/FrameRate Movies - Google Chrome 4_11_2024 12_33_39 PM.png" 
    },
    {
        title: "Brand Agency Landing Page",
        description: "A visually appealing landing page designed for a fictional brand agency, showcasing modern design principles and responsive layouts to enhance user engagement",
        tech: "HTML, CSS, JavaScript",
        source: "https://github.com/Pharez-Oyelade/brand-company_clone",
        view: "https://brand-company-clone.vercel.app/",
        image: "../images/portfolio/Brand Landing Page By Pharez Oyelade - Google Chrome 8_14_2024 11_31_12 AM.png" 
    },
    {
        title: "Food Delivery",
        description: "An interactive food delivery application built with React, featuring a user-friendly interface.",
        tech: "REACT",
        source: "https://github.com/Pharez-Oyelade/react-food-order",
        view: "https://food-order-react-two.vercel.app/",
        image: "../images/portfolio/Food Order Website - Google Chrome 4_10_2024 10_20_40 PM.png" 
    },
    {
        title: "GoDaddy Clone",
        description: "Creating a clone of an already successful website is more a proof that you can also do it; create a successful website. While adding features of my own, I was able to recreate this wonderful site.",
        tech: "HTML, CSS, JavaScript",
        view: "../websites/GoDaddy/index.html",
        image: "../images/portfolio/GoDaddy-clone.png" 
    },
    {
        title: "Elapse",
        description: "An animated login and signup form with css animations and JavaScript Interactivity",
        tech: "HTML, CSS, JavaScript",
        view: "../websites/Registration/index.html",
        image: "../images/portfolio/Elapse-TimePulse.png" 
    },
    {
        title: "In progress!!",
        description: "This project is a placeholder for future work. Check back later for innovative ideas and implementations!",
        tech: "",
        source: "",
        view: "",
        image: "../images/portfolio/construction-caution-area.jpg" 
    }
];

const projectList = document.getElementById('projectList');

projects.forEach(project => {
    const card = document.createElement('div');
    card.classList.add('project-card');
    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">
        <h3>${project.title}</h3>
    `;

    card.addEventListener('click', () => {
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').textContent = project.description;
        document.getElementById('modalTech').textContent = project.tech;

        const sourceBtn = document.getElementById('sourceBtn');
        if (project.source) {
            sourceBtn.href = project.source;
            sourceBtn.style.display = 'inline';
        } else {
            sourceBtn.style.display = 'none';
        }

        document.getElementById('viewBtn').href = project.view;
        document.getElementById('projectModal').style.display = 'flex';
    });

    projectList.appendChild(card);
});

const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('projectModal');

closeModal.addEventListener('click', () => {
    modal.style.display = 'none'
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});