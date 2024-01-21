from tkinter import *
from tkinter import filedialog
import math  

def openFile():
    filePath = filedialog.askopenfilename(initialdir="C:\\Users\\willr\\Documents\\GitHub\\Cs2613\\Python\\ProgrammingQuestions\\PQ2",
                                          title="File?",
                                          filetypes=(("text files","*.txt"),
                                                     ("all files", "*.*")))
    file = open(filePath, 'r')
    #print(file.read())
    return file
    #file.close
#window = Tk()
#button = Button(text="open",command=openFile)
#button.pack()
#window.mainloop()
#file = openFile()

def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

def readFile(inputFile):
    input = open(inputFile, 'r')
    return input

def storeValues(file):

    for i in file:
        stripped_line = i.strip()
        if(stripped_line.isalpha()):

            operators.append(stripped_line)

        elif(stripped_line.isdigit()):
            numberOfValues.append(int(stripped_line))
            
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

def toString(input, command):
    print(command + " Results:")

    if(type(input) == list):
        for i in range(len(input)):
            print(str(i+1) + ":\t" + str(input[i]))
    else:
        print("#:\t" + str(input))

def switch(command,inputs):

    if command == "SUM":
        toString(SUM(inputs), command)
        
    elif command == "AVG":
        toString(AVG(inputs), command)

    elif command == "MAX":
        toString(MAX(inputs), command)

    elif command == "MIN":
        toString(MIN(inputs), command)

    elif command == "FXP":
        toString(FXP(inputs), command)

    elif command == "FPO":
        toString(FPO(inputs), command)

    elif command == "FSN":
        toString(FSN(inputs), command)

    elif command == "FCS":
        toString(FCS(inputs), command)

    else:
        print("No function found")

def getCurrentOperation():
    operators.pop()
    start = 0
    
    for i in range (len(operators)):
        end = start + numberOfValues[i]

        (switch(operators[i], (values[start:end])))

        start = end


operators = []
values = []
numberOfValues = []

inputFile = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataInput.txt'
outputFile =r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataOutput.txt'

file = readFile(inputFile).readlines()
operators, numberOfValues, values = storeValues(file)

getCurrentOperation()



