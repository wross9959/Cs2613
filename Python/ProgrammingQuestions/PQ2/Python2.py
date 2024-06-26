from tkinter import *
from tkinter import filedialog
import math  

def clearFile(pathToNewFile):
    #clears the file to get ready to send new data
    open(pathToNewFile, 'w').close()

def openFile():
    filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
                                          title="File to Read?",
                                          filetypes=(("text files","*.txt"),
                                                     ("all files", "*.*")))
    #gets the file needed for input with data
    return filePath

def openFileToWrite():
    filePathOut = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
                                          title="File to write to?",
                                          filetypes=(("text files","*.txt"),
                                                     ("all files", "*.*")))
    #gets the filePath for the file needed
    return filePathOut

def File(inputFile, func):
    #reads/writes the file inputted
    input = open(inputFile, func)
    return input

def isfloat(num):

    #created this function to check if it was a float for input values
    try:
        float(num)
        return True
    except ValueError:
        return False

def storeValues(file):

    for i in file:

        #removes the white space in the data
        stripped_line = i.strip()

        #checks for commands
        if(stripped_line.isalpha()):
            operators.append(stripped_line)

        #checks for length of number of values
        elif(stripped_line.isdigit()):
            numberOfValues.append(int(stripped_line))

        #gathers all the values needed    
        elif(isfloat(stripped_line)):
            values.append(float(stripped_line))
            

    return operators, numberOfValues, values

def SUM(inputs):
    result = 0

    for i in inputs:
        result += i

    return result

def AVG(inputs):
    result = 0

    result = SUM(inputs) / len(inputs)
    return result

def MAX(inputs):
    result = 0
    result = inputs[0]

    for i in inputs:
        if(result < i):
            result = i

    return result

def MIN(inputs):
    result = 0
    result = inputs[0]
    
    for i in inputs:
        if(result > i):
            result = i

    return result

def FXP(inputs):
    result = []
    for z in inputs:
        curr = []
        for k in range(50):
            curr.append((z**k) / math.factorial(k))
        result.append(SUM(curr))
    return result

def FPO(inputs):
    result = []
    
    for z in inputs:
        curr = []
        for k in range(50):
            curr.append((k * ((z**k)/math.factorial(k))))
        result.append(SUM(curr))

    return result

def FSN(inputs):
    result = []
    for z in inputs:
        curr = []
        for k in range(50):
            curr.append((((-1)**k) * ((z)**((2*k) + 1)))/(math.factorial((2*k) + 1)))
        result.append(SUM(curr))
    return result

def FCS(inputs):
    result = []
    for z in inputs:
        curr = []
        for k in range(50):
            curr.append((((-1)**k) * ((z)**(2*k)))/(math.factorial(2*k)))
        result.append(SUM(curr))
    return result

def toWrite(input, command):
    global fileToAppend
    f = File(fileToAppend, 'a')

    f.write(command + " Results:\n")

    if(type(input) == list):
        for i in range(len(input)):
            #writes the list values for our F functions
            f.write(str(i+1) + ":\t" + str(input[i]) + "\n")
    else:
        #writes the single value function results
        f.write("#:\t" + str(input) + "\n")

    f.close()

def switch(command,inputs):
    #checks which operator 
    if command == "SUM":
        toWrite(SUM(inputs), command)
        
    elif command == "AVG":
        toWrite(AVG(inputs), command)

    elif command == "MAX":
        toWrite(MAX(inputs), command)

    elif command == "MIN":
        toWrite(MIN(inputs), command)

    elif command == "FXP":
        toWrite(FXP(inputs), command)

    elif command == "FPO":
        toWrite(FPO(inputs), command)

    elif command == "FSN":
        toWrite(FSN(inputs), command)

    elif command == "FCS":
        toWrite(FCS(inputs), command)
    #incase an error happens 
    else:
        print("No function found")

def getCurrentOperation():
    #used to pop the End operator off the list 
    operators.pop()

    #start is equal to the first value in values
    start = 0
    
    for i in range (len(operators)):
        
        #used to get the elements needed in the values list
        end = start + numberOfValues[i]

        #switch to check the operator and what values are needed per operator
        (switch(operators[i], (values[start:end])))

        #sets the starting elemets to the end of the list value for the next operator
        start = end

def main():
    
    #global varibles for the functions
    global fileToAppend
    global fileToRead
    global operators
    global values
    global numberOfValues

    #lists for all stored values
    
    #Operators in data
    operators = []
    
    #Number of values per operation
    numberOfValues = []

    #Values read in
    values = []

    #checks if the user wants to select a file or pre-stored data that was supplied on d2l
    option = input("Would you like to use Pre-Stored files or would you like to select you own?\n\to: Pre-Stored Files\n\tn: Select your own file\nInput: ")

    if(option == "n"):
        #opens the files in the users directory
        fileToRead = openFile()
        fileToAppend = openFileToWrite()

    else:
        #Pre-stored files from d2l
        fileToRead = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataInput.txt'
        fileToAppend = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataOutput.txt'
    
    #clears any data on the output file
    clearFile(fileToAppend)

    #throws all the files data into file varible
    file = File(fileToRead, 'r').readlines()

    #three lists filled with the data
    operators, numberOfValues, values = storeValues(file)
    
    #gets the current operator
    getCurrentOperation()

    #prints finished message with filePath with results
    print("Results were printed to \n\tfilePath: " + fileToAppend +"\n")
    
main()
