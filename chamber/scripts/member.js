import { displayMember } from './displayMember.js';

const cards = document.querySelector('#cards-wrapper');
const randomCards = document.querySelector('.company-spotlight');

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data, cards);
    randomGoldMemberCardGenerator(data.members);
}

getMembers();


function displayMembers(data, cards) {
    const members = data.members;

    members.forEach((member) => {
        displayMember(member, cards);
    })
};






