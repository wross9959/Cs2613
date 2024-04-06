def File(inputFile):
    #reads/writes the file inputted
    input = open(inputFile, 'r')
    return input


def given_length(sentance, num):
    #check the last letter to get
    wordList = sentance.split(" ")
    toReturn = []
    for i in wordList:
        if(len(i) == num):
            toReturn.append(i)

    return toReturn
def longest_word(sentance):
    wordList = sentance.split(" ")
    Greatest = []
    Greatest.append(wordList[0])

    #varible put in place just so we dont need to enter both for loops
    biggestCount = len(Greatest[0])

    for i in range(1, len(wordList), 1):
        if(biggestCount < len(wordList[i])):

            Greatest.clear()
            biggestCount = len(wordList[i])
            Greatest.append(wordList[i])
            
        elif(biggestCount == len(wordList[i])):
             
             Greatest.append(wordList[i])
    
    return Greatest
def most_common(sentance):
    sentance = sentance.lower()
    sentance.strip()
    mostLetter = []
    mostCount = 0
    for i in sentance:
        curr = sentance.count(i)
        if(mostCount < curr and i.isalpha()):

            mostLetter.clear()
            mostCount = curr
            mostLetter.append(i)

        elif(mostCount == curr and i.isalpha() and (not (i in mostLetter))):

            mostLetter.append(i)

    return mostLetter
def BasicDiver():
    #Test 1

    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    print("Input: given_length(The white cat and the red fox., 3)")

    print("Output:")
    print(given_length("The white cat and the red fox.", 3))

    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    #Test 2
    print("Input: longest_word(Hello CS2613! Python is fun.)")

    print("Output:")
    print(longest_word("Hello CS2613! Python is fun."))

    print("Input: glongest_word(Hello CS2613 - Python is fun.)")

    print("Output:")
    print(longest_word("Hello CS2613 - Python is fun.")) 
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


    #Test 3
    print("Input: most_common(My name is…)")
    
    print("Output:")
    print(most_common("My name is…"))


    print("Input: most_common (This is!)")

    print("Output:")
    print(most_common("This is!"))
    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
def Task3Driver(s):

    print("Five letter words:")
    print(len(given_length(s, 5)))

    print("Longest words:")
    print(longest_word(s))

    print("Most common words:")
    print(most_common(s))

def prepFile():
    fileToRead = "L6_T3_Text.txt"
    file = File(fileToRead).readlines()
    s = ' '.join(str(i) for i in file)
    s.strip()
    return s

s = prepFile()
#BasicDiver()
Task3Driver(s)


