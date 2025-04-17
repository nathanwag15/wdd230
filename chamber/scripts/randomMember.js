import { displayMember } from './displayMember.js';

const randomCards = document.querySelector('.company-spotlight');

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    randomGoldMemberCardGenerator(data.members);
}

function randomGoldMemberCardGenerator(members) {
    const premiumMembers = [];

    members.forEach((member) => {
        if (member.membershipLevel == "Gold Membership" || member.membershipLevel == "Silver Membership") {
            premiumMembers.push(member);

        }
    })


    const shuffled = premiumMembers.sort(() => 0.5 - Math.random());
    const consolidatedShuffle = shuffled.slice(0, 3);
    console.log(consolidatedShuffle);
    consolidatedShuffle.forEach((member) => {
        displayMember(member, randomCards);
    })


};

getMembers();