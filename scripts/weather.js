const currentTemp = document.querySelector('#current-temperature');
const weatherIcon = document.querySelector('#weather-icon');
const currentConditions = document.querySelector('#current-conditions')



const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.77061122412114&lon=-111.93605722635147&appid=458b8b75be2678884cf413babf7f56d0&units=imperial";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
            console.log(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResults(data) {
    currentTemp.textContent = data.main.temp + " F ";
    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    const description = data.weather[0].description;
    const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    currentConditions.textContent = "  " + capitalizedDescription;
};

apiFetch();