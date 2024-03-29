//  @Author:        Will Ross
//  Student ID:     3734692
//  Class:          Cs2613
//  Assesment:      JavaScript 3
//  Handed in as:   Programming Question 10
//  Completed:      March 2nd, 2024



const readline = require("readline");
const promt = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//need to access all apis
const axios = require('axios');

//Remove before submit
//https://rapidapi.com/wirefreethought/api/geodb-cities get the api key here (Note im removing this now so we can push to github - Will)
const key = "36c20b6862msh3a61c869af238b4p189226jsn846ba487663c";

//asks the user for input and plugs into our cityInformation
promt.question("City, Province/Territory: ", function(input) {
    cityInformation(input);
});

async function cityInformation(input){
    
    //Split the two inputs for later use
    inputList = (input.split(","));
    let city = inputList[0].trim();
    let province = inputList[1].trim();

    const options = {
      method: 'GET',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/CA/regions/${province}/cities`,
      params: {
        //input the city name as a required parameter
        namePrefix: city
      },
      headers: {
        'X-RapidAPI-Key': key,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };
    
    try {
        //wait on the api for data about the city
        const response = await axios.request(options)
        //access the data provided and save to a object varible 
        let cityInfo = response.data.data[0]

        //if the city has a population in the api database
        if(cityInfo.population > 0){
            console.log(`${city}, ${province} (${cityInfo.latitude}, ${cityInfo.longitude}) has a population of ${cityInfo.population}`)
        }
        else{
            //Fixed my spelling mistake on lat 2024-03-29
            console.log(`${city}, ${province} (${cityInfo.latitude}, ${cityInfo.longitude}) does not have population data`)
        }
        
        //asks the user for the range of near by cities for the next function
        promt.question("Radius in kilometres: ", function(input) {
            nearCities(input, cityInfo.id)
        });
    } catch (error) {
        console.error("City not avaiable. Make sure spelling is correct and you do the format(City, Province/Territory)")
        process.exit(1)
    }   

}

async function nearCities(input, id){

    const options = {
        method: 'GET',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${id}/nearbyCities`,
        params: {
            radius: input,
            
            // added units of KM and Canadas ID for params as feedback said 2024-03-29
            distanceUnit: 'KM',
            countryIds: 'CA'
        },
        headers: {
            'X-RapidAPI-Key': key,
            'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
    };

    try {
        //wait on api
        const response = await axios.request(options);
        closeCities = response.data.data

        console.log("Some cities close are:")
        //print all the near by cities from api
        //NOTE when testing i notice that you couldnt have a range more then 100 the api would throw and error also it wont ever provide more then 5 cities
        for (let i = 0; i < closeCities.length; i++) {

            console.log(`\t${i+1}. ${closeCities[i].city}`)
        }
        process.exit(1)

    } catch (error) {
        console.log("No nearby cities")
        process.exit(1)
    }
}