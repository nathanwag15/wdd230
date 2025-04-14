const cards = document.querySelector('#cards-wrapper')

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayMembers(data);
}

getMembers();


function displayMembers(data) {
    const members = data.members;


    members.forEach((member) => {
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

    })

    // const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // weatherIcon.setAttribute('src', iconSrc);
    // const description = data.weather[0].description;
    // const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    // currentConditions.textContent = "  " + capitalizedDescription;
};