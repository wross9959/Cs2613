var bestPerformers = [];
var bestPerformersValues = [];
var pplCount = [0.0, 0.0, 0.0];
var pplCountIndex = 0;
var startFilePath = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\Labs\\Lab2\\'
// var filePath = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\Labs\\Lab2\\calculations1.json'

let accuracy = { "Abby": 0, "Tyson": 0, "Zack": 0 };

const fs = require('node:fs');

let index = 1;
try{
    while(true){
        let filePath = `${startFilePath}calculations${index}.json`;
        if (!fs.existsSync(filePath)) break; // Check if file exists to avoid unnecessary error

        let data = fs.readFileSync(filePath, 'utf8');
        let curr = JSON.parse(data).data.calculations;
        calculate(curr)
        index++
    }

}catch(err){
    console.error("Error processing files:", err.message);
}


function calculate(file){

    let currPersonMath = []
    let currPpl = []

    for(let a = 0; a <  file.length; a++){
        currPersonMath[a] = parseFloat(file[a].calc)
    }
    for(let a = 1; a <  file.length; a++){
        currPpl[a] = file[a].performer
    }

    let closest = Infinity;
    let trueValue = currPersonMath[0];
    let fileBestPerformer = "";
    let currDiff = []

    
    
    //Abby amounts
    pplCount[0] = (currPersonMath[0] - trueValue) + pplCount[0]
    currDiff[0] = (Math.abs(currPersonMath[0] - trueValue))
    //tyson amounts
    pplCount[1] = (currPersonMath[1]- trueValue) + pplCount[1]
    currDiff[1] = (Math.abs(currPersonMath[1]- trueValue ))
    //zack amounts
    pplCount[2] += (currPersonMath[2] - trueValue) //+ pplCount[2]
    currDiff[2] = (Math.abs(currPersonMath[2] - trueValue))

    /*
    for(let i = 1; i < currPpl.length; i++){

        if(currDiff[i] <= closest){ 
            fileBestPerformer = currPpl[i]
            closest = currDiff[i];
            pplCountIndex = i;
        }
    }
    bestPerformers.push(fileBestPerformer)
    */
}
function toPrint(){
    // for(let i = 1; i < bestPerformers.length; i++){
    //     console.log(`${i}. Name: ${bestPerformers[i]} \tValue: ${pplCount[pplCountIndex]}`)

    // }
    // console.log(`${1}. Name: ${bestPerformers[0]} \tValue: ${pplCount[pplCountIndex]}`)
    // // console.log(bestPerformers[0])
    // // console.log(pplCount[pplCountIndex])
    for(i of pplCount){
        console.log(i)
    }
    for(i of currDiff){
        console.log(i)
    }
    
    

}

toPrint();
