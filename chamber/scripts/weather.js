const weather = document.querySelector('.weather');

const forecastWrapper = document.querySelector('.forecast-wrapper');



const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.7370&lon=-111.8338&appid=458b8b75be2678884cf413babf7f56d0&units=imperial";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=41.7370&lon=-111.8338&appid=458b8b75be2678884cf413babf7f56d0&units=imperial"
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

async function forecastFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            // displayResults(data);
            console.log(data);
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    let currentTemp = document.createElement('span');
    let weatherIcon = document.createElement('img');
    let currentConditions = document.createElement('span');

    currentTemp.textContent = data.main.temp + " F ";

    const iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;


    weatherIcon.setAttribute('alt', data.weather[0].description);
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('width', 100);


    const description = data.weather[0].description;
    const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);
    currentConditions.textContent = " " + capitalizedDescription;
    // currentConditions.textContent = "  " + capitalizedDescription;

    weather.appendChild(currentTemp);
    weather.appendChild(weatherIcon);
    weather.appendChild(currentConditions);

};

function displayForecast(data) {
    let currentDate = new Date();
    currentDate = currentDate.getDate();
    console.log(data.list)
    // let dayOne =
    //     console.log(currentDate);
    const nextNoonForecasts = data.list
        .filter(entry => {
            const date = entry.dt_txt;
            const day = date.slice(8, 10);
            const hour = date.slice(11, 13);
            const isAfterNow = day > currentDate;
            const isWithinThreeHoursOfNoon = hour >= 11 && hour <= 13;

            return isAfterNow && isWithinThreeHoursOfNoon
        })
        .slice(0, 3);




    // firstDay.textContent = nextNoonForecasts[0].dt_txt.slice(5, 10);
    // secondDay.textContent = nextNoonForecasts[1].dt_txt.slice(5, 10);
    // thirdDay.textContent = nextNoonForecasts[2].dt_txt.slice(5, 10);

    for (let i = 0; i < nextNoonForecasts.length; i++) {
        let dayWrapper = document.createElement('div');
        dayWrapper.setAttribute('class', 'day-wrapper');

        let forecastDate = document.createElement('h2');
        forecastDate.textContent = `${nextNoonForecasts[i].dt_txt.slice(5, 10)}`;

        let forecastIcon = document.createElement('img');
        const iconSrc = `https://openweathermap.org/img/w/${nextNoonForecasts[i].weather[0].icon}.png`;
        forecastIcon.setAttribute('alt', nextNoonForecasts[i].weather[0].description);
        forecastIcon.setAttribute('src', iconSrc);
        forecastIcon.setAttribute('width', 100);

        let highLowWrapper = document.createElement('div');
        highLowWrapper.setAttribute('div', "high-low-wrapper");

        highLowWrapper.textContent = `${nextNoonForecasts[i].main.temp_max}/${nextNoonForecasts[i].main.temp_min}`;








        dayWrapper.appendChild(forecastDate);
        dayWrapper.appendChild(forecastIcon);
        dayWrapper.appendChild(highLowWrapper);
        forecastWrapper.appendChild(dayWrapper);

    }
    console.log(nextNoonForecasts);


};

apiFetch();
forecastFetch();