from tkinter import *
from tkinter import filedialog


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
operators = []
values = []
numberOfValues = []


inputFile = r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataInput.txt'
outputFile =r'C:\Users\willr\Documents\GitHub\Cs2613\Python\ProgrammingQuestions\PQ2\DataOutput.txt'

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
    num = 0

    for i in file:
        stripped_line = i.strip()
        if(stripped_line.isalpha()):

            operators.append(stripped_line)
            if(i < 0):
                numberOfValues.append(num)
            num = 0

        elif(stripped_line.isdigit()):
            values.append(int(stripped_line))
            num += 1
        elif(isfloat(stripped_line)):
            values.append(float(stripped_line))
            num += 1

    return operators, numberOfValues, values

 
file = readFile(inputFile).readlines()
operators, numberOfValues, values = storeValues(file)



def testOutput():
    print(operators)
    print(numberOfValues)
    print(values)
testOutput()
    


def SUM(inputs):
    result = 0

    for i in inputs:
        result += inputs[i]

    return result

def AVG(inputs):
    result = 0

    result = SUM(inputs) / len(inputs)
    return result

def MAX(inputs):
    result = 0
    result = inputs[0]

    for i in inputs:
        if(result < input[i]):
            result = input[i]

    return result

def MIN(inputs):
    result = 0
    result = inputs[0]
    
    for i in inputs:
        if(result > input[i]):
            result = input[i]

    return result

def FXP(inputs):
    result = 0

    return result

def FPO(inputs):
    result = 0

    return result

def FSN(inputs):
    result = 0

    return result

def FCS(inputs):
    result = 0

    return result

def switch(command,inputs):

    if command == "SUM":
        return SUM(inputs)
    elif command == "AVG":
        return AVG(inputs)
    elif command == "MAX":
        return MAX(inputs)
    elif command == "MIN":
        return MIN(inputs)
    elif command == "FXP":
        return FXP(inputs)
    elif command == "FPO":
        return FPO(inputs)
    elif command == "FSN":
        return FSN(inputs)
    elif command == "FCS":
        return FCS(inputs)
    else:
        print("No function found")


def getCurrentOperation():

    for i in operators:
        start = numberOfValues[i]
        end = numberOfValues[i + 1]    
        switch(operators, (values))