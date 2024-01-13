/*
    Programming Question #2 
    
    Author: Will Ross 
    Student#: 3734692
    Git UserName: wross9959
    UNB Email: will.ross@unb.ca
    Date: January 13th, 2024
*/
/*
TEST CASES

        NOTE ALL TIME TESTS WERE PASSED THESE ARE JUST RIDE TESTS

        Test 1:
            Input:  16, 170, 46, Exciting, n/a

            Output: 
                    12:32 - The Amusement Park is CLOSED. Recommend Rides:
                        Rollercoaster
                        Bumper Cars
                        Tilt-A-Whirl

                    We hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th.

            Status: PASS

        Test 2:
            Input:  11, 162, 38, n/a, yes
            Output:  
                    12:33 - The Amusement Park is CLOSED. Recommend Rides:
                        Ferris Wheel
                        Rollercoaster

                    We hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th.

            Status: PASS

        Test 3:
            Input:  16, 170, 46, Exciting, n/a
            Output: 
                    12:35 - The Amusement Park is CLOSED. Recommend Rides:
                        Rollercoaster
                        Bumper Cars
                        Tilt-A-Whirl

                    We hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th.

            Status: PASS

        Test 4:
            Input:  2, 13, 45, Calm, Yes        --Should get no rides
            Output: 

                There are currently no rides at the park that are suitable for them

            Status: PASS

*/

//person object
let person = {age: 0, height: 0, weight: 0, mood: "", view: ""}

//ride requirements and recommend
let ferrisWheel = {ID: "Ferris Wheel", age: 10, height: 152.4, weight: 0, mood: "calm", view: "yes"}
let rollercoaster = {ID: "Rollercoaster", age: 10, height: 152.4, weight: 0, mood: "exciting", view: "yes"}
let bumperCars = {ID: "Bumper Cars", age: 14, height: 152.4, weight: 36.29, mood: "exciting", view: "n/a"}
let merryGoRound = {ID: "Merry-Go-Round", age: 4, height: 0, weight: 0, mood: "calm", view: "n/a"}
let tiltAWhirl = {ID: "Tilt-A-Whirl", age: 4, height: 152.4, weight: 36.29, mood: "exciting", view: "Yes"}

//array with all the rides
let rides = [ferrisWheel, rollercoaster, bumperCars, merryGoRound, tiltAWhirl]

//to store rides
let recommendRides = []

//for testing purposes 
let allowedRides = []

//just a array placeholder for moving data around
let data = []

//scan for input
const prompt = require('prompt-sync')();
console.log('Provide information about your self in this order(age, height, weight, mood, view, recommend)')
const input = prompt('Septerate by a comma. e.g. (", "): ');

//To fill the person object with all the inputs
function fillInfo(person, input){
    const inputValues = input.split(", ");
    person.age = parseInt(inputValues[0])
    person.height = parseFloat(inputValues[1])
    person.weight = parseFloat(inputValues[2])
    person.mood = inputValues[3]
    person.view = inputValues[4]

    return person
}

//turning inputs into lower case letters for ease of comparision later
function personPrep(person){

    person.mood = person.mood.toLowerCase()
    person.view = person.view.toLowerCase()    
    return person
}

//printing all the recommended rides for the user
function printRides(recommendRides){
    toReturn = ""
    for(let i = 0; i < recommendRides.length; i++){

        toReturn += ("\n"+"\t" + recommendRides[i])
    }
    return toReturn
}

//checking if the park is open and printing
function isParkOpen(recommendRides){
    const currDate = new Date()
    const currMonth = currDate.getMonth()
    const currHour = currDate.getHours()

    //getting minutes and adding padstart incase minutes is only a single digit number
    const currMin = currDate.getMinutes().toString().padStart(2, '0');

    //making sure there is at least one ride for them
    if(recommendRides.length <= 1){
        return("There are currently no rides at the park that are suitable for them")
    }
    //checks if the time is between may 1st to the end of sept and between hours of operation (11am - 11pm)
    if((currMonth >= 4 && currMonth <= 8) && (currHour >= 11) && (currHour <= 23)){
        park = "OPEN ", message = "Hope to see you soon!"

    }
    else{
        park = "CLOSED", message = "We hope to see you when our park opens, every day 11AM-11PM from May 1st to September 30th."

    }
    
    //setting up the final message for the user
    txt = "\n" + currHour + ":" + currMin + " - The Amusement Park is " + park + ". Recommend Rides:"
    return txt + printRides(recommendRides) + "\n\n" + message
}

//this function checks every ride and returns an array filled with an object with an ID of the ride and if the user meets requirements/recommend
function check(person, rides){
    let toReturn = []
    for(i = 0; i < rides.length; i++){

        let check = {
            ID: rides[i].ID, 
            requirements: false, 
            recommend: false
        }
        //checks if the persons age/weight/height are enough on every ride
        if((person.age >= rides[i].age) && (person.height >= rides[i].height) && (person.weight >= rides[i].weight)){
            check.requirements = true

        }

        //check if there mood and viewing is met for this ride and if they said n/a for view
        if((person.mood === rides[i].mood || person.mood === 'n/a') && (person.view === 'n/a' || person.view === rides[i].view)){
            check.recommend = true

        }

        check.ID = rides[i].ID
        toReturn.push(check)
    }

    return toReturn
}

//updates all data and feeds into our functions above
person = fillInfo(person, input)
person = personPrep(person)
data = check(person, rides)

//will check the data array and see which rides meet the users inputs
for(let i = 0; i < data.length; i++){

    //if both requirements and recommend are true then we will return it to the user
    if(data[i].requirements && data[i].recommend){        
        recommendRides.push(data[i].ID)
    }
    //NOTE we dont need this I just wanted to keep the users met requirments for testing reasons
    if(data[i].requirements){
        allowedRides.push(data[i].ID)
    }

}

//print the users output
console.log(isParkOpen(recommendRides))

