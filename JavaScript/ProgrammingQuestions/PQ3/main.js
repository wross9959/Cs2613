const axios = require('axios');

const apiKey = "36c20b6862msh3a61c869af238b4p189226jsn846ba487663c";

async function getCityInfo(city, regionCode){

    try {
        const response = await axios({
            method: 'GET',
            url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
            params: {namePrefix: city, countryIds: 'CA', regionCode: regionCode, limit: '1'},
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });

        if (response.data.data.length === 0) {
            console.log("City not found.");
            return;
        }

        const cityInfo = response.data.data[0];
        const outputMessage = cityInfo.population > 0 ?
            `${cityInfo.name}, ${regionCode} (${cityInfo.latitude}, ${cityInfo.longitude}) has a population of ${cityInfo.population}` :
            `${cityInfo.name}, ${regionCode} (${cityInfo.latitude}, ${cityInfo.longitude}) does not have population data.`;
        
        console.log(outputMessage);
        return cityInfo;
    } catch (error) {
        console.error("An error occurred:", error.response.data.message);
    }
}

async function getCitiesNearby(wikiDataId, radius) {
    try {
        const response = await axios({
            method: 'GET',
            url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikiDataId}/nearbyCities`,
            params: {radius: radius, distanceUnit: 'KM', types: 'CITY', excludes: 'US', limit: '10'},
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });

        const cities = response.data.data.map(city => city.name);
        console.log("Some cities close are:", cities.join("\n"));
    } catch (error) {
        console.error("An error occurred:", error.response.data.message);
    }
}

// Example usage:
// You'll replace this with user input handling
const cityName = "Fredericton";
const regionCode = "NB";
const radius = 50; // Example radius

getCityInfo(cityName, regionCode).then(cityInfo => {
    if (cityInfo && cityInfo.wikiDataId) {
        getCitiesNearby(cityInfo.wikiDataId, radius);
    }
});
