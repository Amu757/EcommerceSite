const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const closebtn = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => nav.classList.add('active'));
}
if (closebtn) {
    closebtn.addEventListener('click', () => nav.classList.remove('active'));
}
