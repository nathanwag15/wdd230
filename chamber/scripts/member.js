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

        card.setAttribute('class', 'card');

        name.textContent = `${member.company}`;
        card.appendChild(name);
        // week.links.forEach((link) => {
        //     console.log(link);
        //     let newAnchor = document.createElement('a');
        //     let newListItem = document.createElement('li');
        //     newAnchor.setAttribute('href', link.url);
        //     newAnchor.appendChild(document.createTextNode(`${link.title}`));
        //     newListItem.appendChild(newAnchor);
        //     card.appendChild(newListItem);
        // })

        cards.appendChild(card);

    })

    // const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // weatherIcon.setAttribute('src', iconSrc);
    // const description = data.weather[0].description;
    // const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    // currentConditions.textContent = "  " + capitalizedDescription;
};