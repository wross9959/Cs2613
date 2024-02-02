var bestPerformers = [];
var bestPerformersValues = [];
var pplCount = [0.0, 0.0, 0.0];
var ppl = ["Abby", "Tyson", "Zack"];

function readJSON(file) {
    const fs = require('node:fs');
    let data = fs.readFileSync(file, 'utf8');

    let curr = JSON.parse(data).data.calculations;
    let trueValue = parseFloat(curr[0].calc);

    let lowestDifference = Number.MAX_VALUE;
    let bestPerformerIndex = -1;

    // Calculate differences for Abby, Tyson, and Zack
    for (let i = 1; i <= 3; i++) {
        let current = parseFloat(curr[i].calc);
        let difference = Math.abs(trueValue - current);
        
        if (difference < lowestDifference) {
            lowestDifference = difference;
            bestPerformerIndex = i - 1;
        }

        pplCount[i - 1] += difference; // Accumulate differences
    }

    bestPerformers.push(ppl[bestPerformerIndex]);
    bestPerformersValues.push(pplCount[bestPerformerIndex]);
}

var cont = true;
for (let i = 1; cont; i++) {
    try {
        let file = `calculations${i}.json`;
        readJSON(file);
    } catch (err) {
        cont = false;
        console.log("Finished reading files.");
    }
}

function toPrint() {
    for (let i = 0; i < bestPerformers.length; i++) {
        console.log(`${i + 1}:\t ${bestPerformers[i]}\t (${bestPerformersValues[i]})`);
    }
}

toPrint();
