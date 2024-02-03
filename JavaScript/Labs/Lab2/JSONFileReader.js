 /*
        @author:        Will Ross #3734691
        Class:          Cs2613
        Assesment:      Lab 7 JavaScript 2
        Passed In as:   Lab 7 JavaScript 2
        Date:           February 1st, 2024
        Due:            February 1st, 2024  
        
        IN READ ME I HAVE MY TESTED OUTPUT AND IT MATCHED THE REQUIRED OUTPUT

        ***TESTS PASSED***
 */


//needed for reading values
const fs = require('node:fs');


//MAYBE CHANGE TO OBJECT AT LATER DATE TO HAVE LOWER FOR LOOPS
//jsonStats = {Name: ____,  Count: ____}
//set a varible to the names (Document said names would always be the same and in the same order)
let performers = ["Abby", "Tyson", "Zack"];

//set there difference in counts with the three names
//goes Abby Tyson, Zack
let totalCount = [0.0, 0.0, 0.0];


/*
    My startFilePath used becuase I only use my github directory 
    so when i swap between my desktop and laptop

    **REMOVE OR CHANGE WHEN USING LAB MACHINE**

*/
    var startFilePath = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\Labs\\Lab2\\';


function readJSON() {

    //To tell the while loop to stop when there is no more json files to read
    let fileExists = true;

    try {

        //i is used for getting calculations{n#}
        let i = 1;


        while (fileExists) {
            
            // finds the file with the json name V
            let file = `${startFilePath}calculations${i}.json`;

            // Read file
            const data = fs.readFileSync(file,
                { encoding: 'utf8', flag: 'r' });
            
            //all the formated json data and gets the calculations(calc and performer)
            formatted_data = JSON.parse(data).data.calculations;

            //gets the true value
            let true_val = parseFloat(formatted_data[0].calc);

            // current perfomers value away from the true value
            let current_score = 0;

            for (let i = 1; i < formatted_data.length; i++){

                //gets the absolute value of the performers value - true value and gets the abs value
                current_score = Math.abs(true_val - (parseFloat(formatted_data[i].calc)));
                
                /*gets the the difference and adds it to :
                totalCount[0] = Abby
                totalCount[1] = Tyson
                totalCount[2] = Zack
                */
                //since the forloop starts at one we need to access 0 so i-1
                totalCount[i-1] +=  current_score;
            }

            i += 1;
        } 
    }
    catch(err) {
        //if no file just stop the while loop
        fileExists = false;
    }
}

//calls our json file to read in and get all values
readJSON();

// positions for our stats from the json files
let highIndex = 0;
let lowIndex = 0;
let midIndex = 0;

//just used the INF key to make sure that there is no value higher nor lower
//used to find the lowest and the highest person away
let lowest = Infinity;
let highest = -Infinity

//gets our person closes to the true value 
for (let i = 0; i < totalCount.length; i++) {

    //gets our person closes to the true value 
    if (totalCount[i] < lowest) {
        lowest = totalCount[i];
        lowIndex = i;
    }

    //gets our person farthest to the true value 
    if (totalCount[i] > highest) {
        highest = totalCount[i];
        highIndex = i;
    }
}

//gets our middle index
/*
    ***NOTE***
    tried to remove but it was causeing issues with abby and tysons 
    positions being swapped

    Look into a better way before EXAM time

*/
for (let i = 0; i < totalCount.length; i++) {
    if (i !== lowIndex && i !== highIndex) {
        midIndex = i;
    }
}

//Prints the data we have gotten from n# of json files
console.log(`1: ${performers[lowIndex]} - ${totalCount[lowIndex]}`);
console.log(`2: ${performers[midIndex]} - ${totalCount[midIndex]}`);
console.log(`3: ${performers[highIndex]} - ${totalCount[highIndex]}`);