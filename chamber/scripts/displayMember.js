export function displayMember(member, cards) {
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
