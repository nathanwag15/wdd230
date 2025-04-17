const banner = document.querySelector('#banner-wrapper');
const close = document.querySelector('#close');


const today = new Date();
const dayOfWeek = today.getDay();



if (dayOfWeek == "Monday" || dayOfWeek == "Tuesday" || dayOfWeek == "Wednesday") {
    banner.style.display = 'flex';
} else {
    banner.style.display = 'none'; // Hide it on other days
}

close.addEventListener('click', () => {
    banner.style.display = 'none';
});