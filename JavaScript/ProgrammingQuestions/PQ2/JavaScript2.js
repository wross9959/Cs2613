 /*
        @author:        Will Ross #3734691
        Class:          Cs2613
        Assesment:      JavaScript 2
        Passed In as:   Programming Question 6
        Date:           January 31st, 2024
        Due:            February 13th, 2024  
        
        IN READ ME I HAVE MY TESTED OUTPUT AND IT MATCHED THE REQUIRED OUTPUT

        ***TESTS PASSED***
 */

//let varibles for the functions
const fileToRead = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataInput.txt'
const fs = require('fs');
//reads in the file with utf8
const file = fs.readFileSync(fileToRead, { encoding: 'utf8', flag: 'r' }).split("\n");

//clears any data on the output file
clearFile()
//three arrays filled with the data
const {operators, numberOfValues, values} = storeValues(file)



//gets the current operator
getCurrentOperation(operators, numberOfValues, values)


//clears the outputfile so its not duplicated
function clearFile(){
    const fileToAppend = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataOutput.txt'
    const fs = require('fs');
    fs.writeFileSync(fileToAppend, '');
}
//stores all the values on our three arrays
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

    for(let i of inputs){
        
        result += i
    }
    return result
}
function AVG(inputs){
    let result = SUM(inputs) / (inputs.length)
    return result
}
function MAX(inputs){
    let result = 0
    result = inputs[0]

    for(let i of inputs){
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
        
        for(let k = 0; k < 50; k++){
            curr.push((z ** k) /(factorial(k)))
        }
        result.push(SUM(curr))
    }
    return result
}
function FPO(inputs){
    let result = []
    
    for(z of inputs){
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
    for(z of inputs){
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
    for(z of inputs){
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
    fs.appendFileSync(fileToAppend,(command + " Results:\n"))

    //check if its an array
    if(Array.isArray(input)){
        for(let i = 0; i < input.length; i++){
            //writes the list values for our F functions
            fs.appendFileSync(fileToAppend, ((i+1) + ":\t" + (input[i]) + "\n"))
        }
    }
    else{
        //writes the single value function results
        fs.appendFileSync(fileToAppend, ("#:\t" + (input) + "\n"))
    }
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
        CommandSwitch(operators[i], (values.slice((start), (end))))

        //sets the starting elemets to the end of the list value for the next operator
        start = end
    }
        
        
}



