const linksCard = document.querySelector('#links-card');

const baseURL = "https://nathanwag15.github.io/wdd230/";

const linksURL = "https://nathanwag15.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

getLinks();


function displayLinks(data) {
    const weeks = data.weeks;


    weeks.forEach((week) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');

        card.setAttribute('class', 'card');

        name.textContent = `${week.week}`;
        card.appendChild(name);
        week.links.forEach((link) => {
            console.log(link);
            let newAnchor = document.createElement('a');
            let newListItem = document.createElement('li');
            newAnchor.setAttribute('href', link.url);
            newAnchor.appendChild(document.createTextNode(`${link.title}`));
            newListItem.appendChild(newAnchor);
            card.appendChild(newListItem);
        })

        linksCard.appendChild(card);

    })

    // const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    // weatherIcon.setAttribute('src', iconSrc);
    // const description = data.weather[0].description;
    // const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    // currentConditions.textContent = "  " + capitalizedDescription;
};

