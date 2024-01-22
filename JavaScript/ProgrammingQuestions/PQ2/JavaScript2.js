

function clearFile(pathToNewFile){
    //clears the file to get ready to send new data
    open(pathToNewFile, 'w').close()
}
function openFile(){
    filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
                                          title="File to Read?",
                                          filetypes=(("text files","*.txt"),
                                                     ("all files", "*.*")))
    //gets the file needed for input with data
    return filePath
}
function openFileToWrite(){
    filePathOut = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
                                          title="File to write to?",
                                          filetypes=(("text files","*.txt"),
                                                     ("all files", "*.*")))
    //gets the filePath for the file needed
    return filePathOut
}
function File(inputFile, func){
    //reads/writes the file inputted
    input = open(inputFile, func)
    return input
}
function isfloat(num){

    //created this function to check if it was a float for input values
    try{
        float(num)
        return True
    }
    catch (error){
        return False
    }
}
function storeValues(file){

    for i in file{

        //removes the white space in the data
        stripped_line = i.strip()

        //checks for commands
        if(stripped_line.isalpha()){
            operators.append(stripped_line)
        }
        //checks for length of number of values
        elif(stripped_line.isdigit()){
            numberOfValues.append(int(stripped_line))
        }
        //gathers all the values needed    
        elif(isfloat(stripped_line)){
            values.append(float(stripped_line))
        }
    }
    return operators, numberOfValues, values
}
function SUM(inputs){
    result = 0

    for i in inputs{
        result += i
    }
    return result
}
function AVG(inputs){
    result = 0

    result = SUM(inputs) / len(inputs)
    return result
}
function MAX(inputs){
    result = 0
    result = inputs[0]

    for i in inputs{
        if(result < i){
            result = i
        }
    }
    return result
}
function MIN(inputs){
    result = 0
    result = inputs[0]
    
    for i in inputs{
        if(result > i){
            result = i
        }
    }
    return result
}

function FXP(inputs){
    result = []
    for z in inputs{
        curr = []
        for k in range(50){
            curr.append((z**k) / math.factorial(k))
        }
        result.append(SUM(curr))
    }
    return result
}

function FPO(inputs){
    result = []
    
    for z in inputs{
        curr = []
        for k in range(50){
            curr.append((k * ((z**k)/math.factorial(k))))
        }
        result.append(SUM(curr))
    }
    return result
}

function FSN(inputs){
    result = []
    for z in inputs{
        curr = []
        for k in range(50){
            curr.append((((-1)**k) * ((z)**((2*k) + 1)))/(math.factorial((2*k) + 1)))
        }
        result.append(SUM(curr))
    }
    return result
}

function FCS(inputs){
    result = []
    for z in inputs{
        curr = []
        for k in range(50){
            curr.append((((-1)**k) * ((z)**(2*k)))/(math.factorial(2*k)))
        }
        result.append(SUM(curr))
    }
    return result
}

function toString(input, command){
    let fileToAppend
    f = File(fileToAppend, 'a')

    f.write(command + " Results:\n")

    if(type(input) == list){
        for i in range(len(input)){
            //writes the list values for our F functions
            f.write(str(i+1) + ":\t" + str(input[i]) + "\n")
        }
    }
    else{
        //writes the single value function results
        f.write("#:\t" + str(input) + "\n")
    }
    f.close()
}

function CommandSwitch(command,inputs){
    //checks which operator 
    switch(command){
        case "SUM":
            toString(SUM(inputs), command)
        
        case "AVG":
            toString(AVG(inputs), command)
        
        case "MAX":
            toString(MAX(inputs), command)
        
        case "MIN":
            toString(MIN(inputs), command)
        
        case "FXP":
            toString(FXP(inputs), command)
        
        case "FPO":
            toString(FPO(inputs), command)
        
        case "FSN":
            toString(FSN(inputs), command)
        
        case "FCS":
            toString(FCS(inputs), command)
        
        //incase an error happens 
        default:
            print("No function found")
        
    }
}  

function getCurrentOperation(){
    //used to pop the End operator off the list 
    operators.pop()

    //start is equal to the first value in values
    start = 0
    
    for i in range (len(operators)){
        
        //used to get the elements needed in the values list
        end = start + numberOfValues[i]

        //switch to check the operator and what values are needed per operator
        (CommandSwitch(operators[i], (values[start:end])))

        //sets the starting elemets to the end of the list value for the next operator
        start = end
    }
}
    
//let varibles for the functions
let fileToAppend
let fileToRead
let operators
let values
let numberOfValues

//lists for all stored values

//Operators in data
operators = []

//Number of values per operation
numberOfValues = []

//Values read in
values = []

//checks if the user wants to select a file or pre-stored data that was supplied on d2l
option = input("Would you like to use Pre-Stored files or would you like to select you own?\n\to: Pre-Stored Files\n\tn: Select your own file\nInput: ")

if(option == "n"){
    //opens the files in the users directory
    fileToRead = openFile()
    fileToAppend = openFileToWrite()
}
else{
    //Pre-stored files from d2l
    fileToRead = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataInput.txt'
    fileToAppend = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataOutput.txt'
}
//clears any data on the output file
clearFile(fileToAppend)

//throws all the files data into file varible
file = File(fileToRead, 'r').readlines()

//three lists filled with the data
operators, numberOfValues, values = storeValues(file)

//gets the current operator
getCurrentOperation()

//prints finished message with filePath with results
print("Results were printed to \n\tfilePath: " + fileToAppend +"\n")
    

