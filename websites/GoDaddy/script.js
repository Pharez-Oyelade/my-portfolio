const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
// const body = document.getElementsById('blur_body')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
        close.style.display = 'initial'
        // body.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        close.style.display = 'none';
    })
}