const fs = require("fs");

function euclideanDist(la1, lo1, la2, lo2){
	// Error 1: to do this you need to squre both
	return Math.sqrt((la1 - la2)**2 + (lo1 - lo2)**2);

}



//Needed paths Error 2: (if you want to call it as that)paths for this
let filePath = `/home1/ugrads/q3d5k/Cs2613/Exam/Question3/Data.json`
let filePrintPath = `/home1/ugrads/q3d5k/Cs2613/Exam/Question3/PopData.txt`


//Error 3: not proper fileReading 
// let data = fs.readFileSync("Data.json", 'utf8');


const data = fs.readFileSync(filePath,
	{ encoding: 'utf8', flag: 'r' });

// Error 4: didnt parse it
let jsonData = JSON.parse(data).data

let highestLoc = 0;
let lowestLoc = 0;

//made these for comparing
let highValue = 0;
let lowestValue = 0;

for(let i = 1; i < jsonData.length; i++){
	
	// error 5: wasnt grabbing the spot on the json file
	let currPop = jsonData[0].population;

	//Error 6: was comparing population data to an index 
	if(currPop > highValue){
		
		highestLoc = i
		highValue = currPop
		
	}
	if(currPop < lowestValue){
		lowestLoc = i;
		lowestValue = currPop
	}
}

//Error 7: remove data off all the calls my parse varible does that for us
let msg = ("Highest: " + jsonData[highestLoc].name + " pop: " + jsonData[highestLoc].population + "\n");
msg += "Lowest: " + jsonData[lowestLoc].name + " pop: " + jsonData[lowestLoc].population + "\n";

//used for testing 
// console.log(msg)


//error 8: not proper write file statment
// fs.writeFile("PopData.txt", msg);
fs.writeFileSync(filePrintPath, msg);







let closestLoc = -1;
let closestDist = -1;
//Error 9: change and removed all .data
for(let i = 0; i < jsonData.length; i++){
	if(i != highestLoc){
		let lat1 = jsonData[highestLoc].latitude;
		let lat2 = jsonData[i].latitude;
		let long1 = jsonData[highestLoc].longitude;
		let long2 = jsonData[i].longitude;
		let distance = euclideanDist(lat1, lat2, long1, long2);

		// ERROR 10: NEEDS to have 3 === and or is ||
		if(closestLoc === -1 || closestDist > distance){
			closestLoc = i;
			closestDist = euclideanDist(lat1, lat2, long1, long2);
		}
	}
}

console.log("The closest city to the city with the max population is ");
console.log(jsonData[closestLoc].name);