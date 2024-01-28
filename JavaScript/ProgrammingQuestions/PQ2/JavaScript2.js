
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
let fileToAppend = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataOutput.txt'
const fileToRead = 'C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\JavaScript\\ProgrammingQuestions\\PQ2\\DataInput.txt'
var operators
var values
var numberOfValues
const fs = require('fs');
const file = fs.readFileSync(fileToRead, { encoding: 'utf8', flag: 'r' }).split("\n");




//lists for all stored values

//Operators in data
operators = []

//Number of values per operation
numberOfValues = []

//Values read in
values = []

//clears any data on the output file
//clearFile(fileToAppend)

//throws all the files data into file varible
//file = File(fileToRead, 'r').readlines()

//three lists filled with the data
operators, numberOfValues, values = storeValues(file)

for(i in operators){
    console.log(numberOfValues[i])
}
//gets the current operator
//getCurrentOperation()

//prints finished message with filePath with results
//print("Results were printed to \n\tfilePath: " + fileToAppend +"\n")

    
// function clearFile(pathToNewFile){
//     //clears the file to get ready to send new data
//     open(pathToNewFile, 'w').close()
// }
// //change or remove
// function openFile(){
//     filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
//                                           title="File to Read?",
//                                           filetypes=(("text files","*.txt"),
//                                                      ("all files", "*.*")))
//     //gets the file needed for input with data
//     return filePath
// }
// //change or remove
// function openFileToWrite(){
//     filePathOut = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
//                                           title="File to write to?",
//                                           filetypes=(("text files","*.txt"),
//                                                      ("all files", "*.*")))
//     //gets the filePath for the file needed
//     return filePathOut
// }
// //change
// function File(inputFile, func){
//     //reads/writes the file inputted
//     input = open(inputFile, func)
//     return input
// }



function storeValues(file){

    for(i in file){

        //checks for commands
        if(isLetter(i)){
            operators.push(i)
            console.log(i)
        }
        //checks for length of number of values
        else if(Number.isInteger(i)){
            numberOfValues.push(parseInt(i))
            console.log(i)
        }
        //gathers all the values needed    
        else if(isfloat(i)){
            values.push(parseFloat(i))
            console.log(i)
        }
    }
    return operators, numberOfValues, values
}
function isLetter(str){
    str = str.toUpperCase();
    return str.length === 1 && str.match(/[A-Z]/i);
}
function isfloat(num){
    //created this function to check if it was a float for input values
    try{
        parseFloat(num)
        return true
    }
    catch (error){
        return false
    }
}
// function SUM(inputs){
//     result = 0

//     for i in inputs{
//         result += i
//     }
//     return result
// }
// function AVG(inputs){
//     result = 0

//     result = SUM(inputs) / len(inputs)
//     return result
// }
// function MAX(inputs){
//     result = 0
//     result = inputs[0]

//     for i in inputs{
//         if(result < i){
//             result = i
//         }
//     }
//     return result
// }
// function MIN(inputs){
//     result = 0
//     result = inputs[0]
    
//     for i in inputs{
//         if(result > i){
//             result = i
//         }
//     }
//     return result
// }

// function FXP(inputs){
//     result = []
//     for z in inputs{
//         curr = []
//         for k in range(50){
//             curr.append((z**k) / math.factorial(k))
//         }
//         result.append(SUM(curr))
//     }
//     return result
// }

// function FPO(inputs){
//     result = []
    
//     for z in inputs{
//         curr = []
//         for k in range(50){
//             curr.append((k * ((z**k)/math.factorial(k))))
//         }
//         result.append(SUM(curr))
//     }
//     return result
// }

// function FSN(inputs){
//     result = []
//     for z in inputs{
//         curr = []
//         for k in range(50){
//             curr.append((((-1)**k) * ((z)**((2*k) + 1)))/(math.factorial((2*k) + 1)))
//         }
//         result.append(SUM(curr))
//     }
//     return result
// }

// function FCS(inputs){
//     result = []
//     for z in inputs{
//         curr = []
//         for k in range(50){
//             curr.append((((-1)**k) * ((z)**(2*k)))/(math.factorial(2*k)))
//         }
//         result.append(SUM(curr))
//     }
//     return result
// }

// function toString(input, command){
//     let fileToAppend
//     f = File(fileToAppend, 'a')

//     f.write(command + " Results:\n")

//     if(type(input) == list){
//         for i in range(len(input)){
//             //writes the list values for our F functions
//             f.write(str(i+1) + ":\t" + str(input[i]) + "\n")
//         }
//     }
//     else{
//         //writes the single value function results
//         f.write("#:\t" + str(input) + "\n")
//     }
//     f.close()
// }

// function CommandSwitch(command,inputs){
//     //checks which operator 
//     switch(command){
//         case "SUM":
//             toString(SUM(inputs), command)
        
//         case "AVG":
//             toString(AVG(inputs), command)
        
//         case "MAX":
//             toString(MAX(inputs), command)
        
//         case "MIN":
//             toString(MIN(inputs), command)
        
//         case "FXP":
//             toString(FXP(inputs), command)
        
//         case "FPO":
//             toString(FPO(inputs), command)
        
//         case "FSN":
//             toString(FSN(inputs), command)
        
//         case "FCS":
//             toString(FCS(inputs), command)
        
//         //incase an error happens 
//         default:
//             print("No function found")
        
//     }
// }  

// function getCurrentOperation(){
//     //used to pop the End operator off the list 
//     operators.pop()

//     //start is equal to the first value in values
//     start = 0
    
//     for i in range (len(operators)){
        
//         //used to get the elements needed in the values list
//         end = start + numberOfValues[i]

//         //switch to check the operator and what values are needed per operator
//         (CommandSwitch(operators[i], (values[start:end])))

//         //sets the starting elemets to the end of the list value for the next operator
//         start = end
//     }
// }


