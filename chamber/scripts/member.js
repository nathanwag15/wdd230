const cards = document.querySelector('#cards-wrapper')

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayMembers(data);
    randomGoldMemberCardGenerator(data.members);
}

getMembers();


function displayMembers(data) {
    const members = data.members;

    members.forEach((member) => {
        displayMember(member);
    })
};


function randomGoldMemberCardGenerator(members) {
    const goldMembers = [];

    members.forEach((member) => {
        if (member.membershipLevel == "Gold Membership" || member.membershipLevel == "Silver Membership") {
            goldMembers.push(member);

        }
    })

    console.log(goldMembers);
}

function displayMember(member) {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let info = document.createElement('p');
    let image = document.createElement('img');
    let phoneNumber = document.createElement('p');
    let link = document.createElement('a');
    let membershipLevel = document.createElement('p');
    let address = document.createElement('p');


    let imageWrapper = document.createElement('div');
    let companyInfo = document.createElement('div')



    card.setAttribute('class', 'card');
    image.setAttribute('src', member.image);
    image.setAttribute('alt', `${name} image`);
    imageWrapper.setAttribute('class', "image-wrapper");
    companyInfo.setAttribute('class', "info-wrapper");
    link.setAttribute("href", member.url);


    link.appendChild(document.createTextNode("Visit Us"));
    membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
    name.textContent = `${member.company}`;
    info.textContent = `${member.information}`;
    phoneNumber.textContent = `Contact Us: ${member.phoneNumber}`;
    address.textContent = `Our Address: ${member.address}`;

    card.appendChild(imageWrapper);
    card.appendChild(companyInfo);

    imageWrapper.appendChild(image);
    companyInfo.appendChild(name);
    companyInfo.appendChild(info);
    companyInfo.appendChild(phoneNumber);
    companyInfo.appendChild(address);
    companyInfo.appendChild(membershipLevel);
    companyInfo.appendChild(link);

    cards.appendChild(card);


};

