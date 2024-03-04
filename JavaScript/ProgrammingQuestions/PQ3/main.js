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

// async function getCitiesNearby(wikiDataId, radius) {
//     try {
//         const response = await axios({
//             method: 'GET',
//             url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikiDataId}/nearbyCities`,
//             params: {radius: radius, distanceUnit: 'KM', types: 'CITY', excludes: 'US', limit: '10'},
//             headers: {
//                 'X-RapidAPI-Key': apiKey,
//                 'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//             }
//         });

//         const cities = response.data.data.map(city => city.name);
//         console.log("Some cities close are:", cities.join("\n"));
//     } catch (error) {
//         console.error("An error occurred:", error.response.data.message);
//     }
// }

// Example usage:
// You'll replace this with user input handling
const cityName = "Fredericton";
const regionCode = "NB";
const radius = 50; // Example radius
getCityInfo(cityName, regionCode);
// getCityInfo(cityName, regionCode).then(cityInfo => {
//     if (cityInfo && cityInfo.wikiDataId) {
//         getCitiesNearby(cityInfo.wikiDataId, radius);
//     }
// });


/*
Things needed
1. The latitude and longitude of the city
code{
    const axios = require('axios');
    const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q65/locatedIn',
    headers: {
        'X-RapidAPI-Key': '36c20b6862msh3a61c869af238b4p189226jsn846ba487663c',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
    };
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
2. The population of the city
code{
    const axios = require('axios');

    const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60',
    headers: {
        'X-RapidAPI-Key': '36c20b6862msh3a61c869af238b4p189226jsn846ba487663c',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

3. The wikiDataId for the city Used to look up the city for the next step of the program


COUNTRY REGION CITIES
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/%7Bcountryid%7D/regions/%7Bregioncode%7D/cities',
  headers: {
    'X-RapidAPI-Key': '36c20b6862msh3a61c869af238b4p189226jsn846ba487663c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

CITIES NEAR CITY
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities/%7Bcityid%7D/nearbyCities',
  headers: {
    'X-RapidAPI-Key': '36c20b6862msh3a61c869af238b4p189226jsn846ba487663c',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

*/