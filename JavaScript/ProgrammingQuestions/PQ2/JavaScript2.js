
//All information below is from https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
/*
~~~~~~~~~~~~~~~~~~~~~~~~~
MOVE TO READ ME when done
~~~~~~~~~~~~~~~~~~~~~~~~~

required for opening files
var fs = require("fs");

~~~~~~~~~~~~~~~~~~~~~~~~~~

getting info about file 
fs.stat(path, callback)

~~~~~~~~~~~~~~~~~~~~~~~~~~
info

path:
This is the string having file name including path

callback:
This is the callback function which gets two arguments 
(err, stats) where stats is an object of fs.Stats type which is 
printed below in the example

~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Methods we can use

1
stats.isFile()
Returns true if file type of a simple file.

2
stats.isDirectory()
Returns true if file type of a directory.

3	
stats.isBlockDevice()
Returns true if file type of a block device.

4	
stats.isCharacterDevice()
Returns true if file type of a character device.

5	
stats.isSymbolicLink()
Returns true if file type of a symbolic link.

6	
stats.isFIFO()
Returns true if file type of a FIFO.

7	
stats.isSocket()
Returns true if file type of asocket.

~~~~~~~~~~~~~~~~~~~~~~~~
For writing to a file

fs.writeFile(filename, data[, options], callback)


info 
path:
This is the string having the file name including path.

data: 
This is the String or Buffer to be written into the file.

options:
The third parameter is an object which will hold 
{encoding, mode, flag}. By default. encoding is utf8, mode is 
octal value 0666. and flag is 'w'

callback:
This is the callback function which gets a single 
parameter err that returns an error in case of any writing error.


*/


//let varibles for the functions
const fileToRead = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataInput.txt'
const fs = require('fs');
const file = fs.readFileSync(fileToRead, { encoding: 'utf8', flag: 'r' }).split("\n");

//three arrays filled with the data
const {operators, numberOfValues, values} = storeValues(file)
for(i in values){
    console.log(values[i])
}
//clears any data on the output file
clearFile()

//gets the current operator
getCurrentOperation(operators, numberOfValues, values)

//prints finished message with filePath with results
//print("Results were printed to \n\tfilePath: " + fileToAppend +"\n")

    
function clearFile(){
    const fileToAppend = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataOutput.txt'
    const fs = require('fs');
    fs.writeFileSync(fileToAppend, '');
}




function storeValues(file){
    //Operators in data
    let operators = []
    //Values read in
    let values = []
    //amount of values 
    let numberOfValues = []

    for(let i = 0; i < file.length; i++){
        if(file[i] === "END"){
            break
        }
        //checks for commands
        
        let currOperator = (file[i])
        operators.push(currOperator.trim())
        //grab the amount of nums per operator
        let num = parseInt((file[++i]).trim())
        numberOfValues.push(num)
        
        for(let j = 1; j <= num; j++){

            //creating a curr varible cuase when trying to push on the same line it was causing the floats to become undefined
            let curr = (parseFloat((file[j + i]).trim()))
            values.push(curr)
        }
        i += num
    }
    return {operators, numberOfValues, values}
}
function SUM(inputs){
    let result = 0

    for(i in inputs){
        
        result += parseFloat(i)
    }
    return result
}
function AVG(inputs){
    let result = SUM(inputs) / (inputs.length -1)
    return result
}
function MAX(inputs){
    let result = 0
    result = inputs[0]

    for(i in inputs){
        if(result < i){
            result = i
        }
    }
    return result
}
function MIN(inputs){
    let result = inputs[0]
    
    for(let i = 1; i < inputs.length; i++){
        if(result > inputs[i]){
            result = inputs[i]
        }
    }
    return result
}
function FXP(inputs){
    let result = []
    for(let z of inputs){
        let curr = []
        z = parseFloat(z)
        for(let k = 0; k <= 50; k++){
            curr.push((z ** k) /(factorial(k)))
        }
        result.push(SUM(curr))
    }
    return result
}
function FPO(inputs){
    let result = []
    
    for(z in inputs){
        let curr = []
        for(let k = 0; k <= 50; k++){
            curr.push((k * ((z**k)/(factorial(k)))))
        }
        result.push(SUM(curr))
    }
    return result
}
function FSN(inputs){
    let result = []
    for(z in inputs){
        let curr = []
        for(let k = 0; k <= 50; k++){
            curr.push((((-1)**k) * ((z)**((2*k) + 1)))/(factorial((2*k) + 1)))
        }
        result.push(SUM(curr))
    }
    return result
}
function FCS(inputs){
    let result = []
    for(z in inputs){
        let curr = []
        for(let k = 0; k <= 50; k++){
            curr.push((((-1)**k) * ((z)**(2*k)))/(factorial(2*k)))
        }
        result.push(SUM(curr))
    }
    return result
}
function factorial(input){
    if(input <= 1){
        return 1
    }
    else{
        return input * factorial(input -1)
    }
}

function toWrite(input, command){
    const fileToAppend = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataOutput.txt'
    const fs = require('fs')
    let dataToWrite = (command + " Results:\n")

    if(Array.isArray(input)){
        for(let i = 0; i < input.length; i++){
            //writes the list values for our F functions
            dataToWrite += ((i+1) + ":\t" + (input[i]) + "\n")
        }
    }
    else{
        //writes the single value function results
        dataToWrite += ("#:\t" + (input) + "\n")
    }
    fs.appendFileSync(fileToAppend, dataToWrite)
}

function CommandSwitch(command,inputs){
    //checks which operator 
    command = command.trim()
    switch(command){
        case "SUM":
            toWrite(SUM(inputs), command)
            break
        case "AVG":
            toWrite(AVG(inputs), command)
            break
        case "MAX":
            toWrite(MAX(inputs), command)
            break
        case "MIN":
            toWrite(MIN(inputs), command)
            break
        case "FXP":
            toWrite(FXP(inputs), command)
            break
        case "FPO":
            toWrite(FPO(inputs), command)
            break
        case "FSN":
            toWrite(FSN(inputs), command)
            break
        case "FCS":
            toWrite(FCS(inputs), command)
            break
        //incase an error happens 
        default:
            console.log("No function found")
            break
        
    }
}  

function getCurrentOperation(operators, numberOfValues, values){
    //start is equal to the first value in values
    let start = 0
    let end = 0
    for(let i = 0; i < operators.length; i++){
        //used to get the elements needed in the values list
        end = start + numberOfValues[i]
        //switch to check the operator and what values are needed per operator
        CommandSwitch(operators[i], (values.slice((start), (end+1))))

        //sets the starting elemets to the end of the list value for the next operator
        start = end
    }
        
        
}



