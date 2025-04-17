import { displayMember } from './displayMember.js';

const cards = document.querySelector('#cards-wrapper')

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/chamber/data/members.json";

const copyrightdate = document.querySelector('#currentyear');
const lastmodified = document.querySelector('#lastmodified');



const date = new Date().getFullYear();

copyrightdate.textContent = date;

const lastModifiedDate = new Date(document.lastModified);
const options = { year: 'numeric', month: "long", day: 'numeric' };
const formattedLastModifiedDate = lastModifiedDate.toLocaleDateString(undefined, options);


lastmodified.textContent = formattedLastModifiedDate;


function randomGoldMemberCardGenerator(members) {
    const goldMembers = [];

    members.forEach((member) => {
        if (member.membershipLevel == "Gold Membership" || member.membershipLevel == "Silver Membership") {
            goldMembers.push(member);

        }
    })

    console.log(goldMembers);
}