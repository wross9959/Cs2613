inputFile = 'DataInput.txt'
outputFile = 'DataOutput.txt'



def readFile(inputFile):
    f = open("DataInput.txt", "r")
    for x in f:
        print(x)

#def writeFile();

readFile(inputFile)