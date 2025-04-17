const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
const today = new Date();
let lastVisit = Number(window.localStorage.getItem("lastVisitDate")) || "2025-04-15";

// if (numVisits !== 0) {
//     visitsDisplay.textContent = numVisits;
// } else {
//     visitsDisplay.textContent = `This is your first visit.`
// }





const givenDate = new Date(lastVisit);

givenDate.setHours(0, 0, 0, 0);
today.setHours(0, 0, 0, 0);

const diffTime = today - givenDate;
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

if (numVisits == 0) {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions"
} else if (diffDays < 1) {
    visitsDisplay.textContent = "Back so soon! Awesome!";
} else {
    visitsDisplay.textContent = `You last visited ${diffDays} days ago.`;
};

numVisits++;
localStorage.setItem("lastVisitDate", today.toISOString());
localStorage.setItem("numVisits-ls", numVisits); 
