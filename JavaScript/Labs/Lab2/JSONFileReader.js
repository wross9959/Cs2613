const fs = require('node:fs');

function readJSON(file) {
    try {
        let data = fs.readFileSync(file, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return null;
    }
}
function calculateAccuracy() {
    const performers = ["Abby", "Tyson", "Zack"];
    let accuracy = { "Abby": 0, "Tyson": 0, "Zack": 0 };
    let i = 1;

    while (true) {
        const file = `calculations${i}.json`;
        const jsonData = readJSON(file);

        if (!jsonData) {
            break;
        }

        const calculations = jsonData.data.calculations;
        const trueValue = parseFloat(calculations[0].calc);

        for (let j = 0; j < performers.length; j++) {
            const performerValue = parseFloat(calculations[j + 1].calc);
            accuracy[performers[j]] += Math.abs(trueValue - performerValue);
        }

        i++;
    }

    return Object.entries(accuracy).sort((a, b) => a[1] - b[1]);
}
// Usage
const sortedPerformers = calculateAccuracy();

console.log("Ranking:");
sortedPerformers.forEach((performer, index) => {
    console.log(`${index + 1}. ${performer[0]}: ${performer[1]}`);
});