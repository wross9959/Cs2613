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

    let closest = Infinity;
    let trueValue = parseFloat(file[0].calc);
    let fileBestPerformer = "";

    for(let i = 1; i < file.length; i++){
        let current = parseFloat(file[i].calc);
        let difference = Math.abs(trueValue - current);
        pplCount[i] += (difference)

        if(difference < closest){ 
            fileBestPerformer = file[i].performer
            closest = difference;
            
            pplCountIndex = i;
        }
    }
    bestPerformers.push(fileBestPerformer)
}
function toPrint(){
    for(let i = 1; i < bestPerformers.length; i++){
        console.log(`${i}. Name: ${bestPerformers[i]} \tValue: ${pplCount[pplCountIndex]}`)

    }
    console.log(`${1}. Name: ${bestPerformers[0]} \tValue: ${pplCount[pplCountIndex]}`)
    // console.log(bestPerformers[0])
    // console.log(pplCount[pplCountIndex])

}

toPrint();
