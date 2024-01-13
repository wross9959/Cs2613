#   PQ1 (Python)

#   Author Will Ross (#3734692)
#   Date: Jan 10th 2023   

#char count, repeated chars, number of end & starts with same char
alpha_Char = 0
repeated = 0 
end_start = 0

#list to store sentence
sentList = []

#list of allowed chars
allowedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

sentence = input("Input a sentence for statistics:\n")

#Remove whitespace function
def clean_token(input, listIn, allowedChars): 
    toReturn = []
    input = input.lower()
    listIn = input.split(" ")
    for word in listIn:
        currWord = ""
        for letter in word:
            if(letter in allowedChars):
                currWord += letter
        
        if(currWord):
            toReturn.append(currWord)
            
    return toReturn 



#How many words have repeated alphabetic characters?
def repeat_letter(currWord):

    met = False
    for i in range(len(currWord)):
        for j in range(1,len(currWord),1):
            
            if(currWord[i] == currWord[j]):
                met = True
                #if match is found break
                break

            else:
                #if no match on letter continue and skip the break
                continue
        break
    return met

#How many times does a word end with the same letter of the alphabet that the next word begins with? Ignore case.
def end_start_char(input1 , input2):
    met = False

    if(input1[len(input1)-1] == input2[0]):
        met = True
    return met

#function calls to prep the sentence to meet requirements
sentList = clean_token(sentence, sentList, allowedChars)

#for loop in range of input words
for i in range(len(sentList)):

    #counts number of chars
    alpha_Char += len(sentList[i])

    #checks if repeated is true then adds one
    if(repeat_letter(sentList[i])):
        repeated += 1

    #checks to make sure not out of index bound
    if((i+1) < len(sentList)):
        
        #checks if end and start are the same if true then adds one
        if(end_start_char(sentList[i], sentList[i + 1])):
            end_start += 1
        



print("Total number of alphabetic characters: " +  str(alpha_Char))
print("Total number of words with repeated alphabetic characters: " + str(repeated))
print("Total number of end-start letter matches: " + str(end_start))
