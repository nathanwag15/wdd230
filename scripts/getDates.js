const copyrightdate = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastmodified');



const date = new Date().getFullYear();
console.log(date);
copyrightdate.textContent = date;

const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: "long", day: 'numeric' };
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString(undefined, options);


lastmodified.textContent = formattedLastModifiedDate;
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsDisplay.textContent = numVisits;
} else {
    visitsDisplay.textContent = `This is your first visit.`
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);