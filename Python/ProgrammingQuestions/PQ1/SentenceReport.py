#   PQ1 (Python)

#   Author Will Ross (#3734692)
#   Date: Jan 10th 2023   
#Test Cases
#   Test case 1:
#       Input: This is a sentence.
#       Expected: 
#               Total number of alphabetic characters: 15
#               Total number of words with repeated alphabetic characters: 1
#               Total number of end-start letter matches: 0 
#       Output: 
#               Total number of alphabetic characters: 15
#               Total number of words with repeated alphabetic characters: 1
#               Total number of end-start letter matches: 0 
#       Status
#               PASS
#
#   Test case 2:
#       Input: I order a Total of 21 Fiddleheads. :)) I thought they were exquisite.
#       Expected: 
#               Total number of alphabetic characters: 50
#               Total number of words with repeated alphabetic characters: 6
#               Total number of end-start letter matches: 2
#       Output: 
#               Total number of alphabetic characters: 50
#               Total number of words with repeated alphabetic characters: 6
#               Total number of end-start letter matches: 3
#       Status
#               Notice that i have 3 and the actual data is 2 i counted how many there is and there should 3 not 2

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
    for i in range(len(currWord) - 1):
        for j in range(i+1,(len(currWord))):
            if(currWord[i] == currWord[j]):
                return True
                
    return False

#How many times does a word end with the same letter of the alphabet that the next word begins with? Ignore case.
def end_start_char(input1 , input2):

    if(input1[-1].lower() == input2[0].lower()):
        return True
    
    return False

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
    if((i+1) < len(sentList) and (end_start_char(sentList[i], sentList[i + 1]))):
        end_start += 1
        #checks if end and start are the same if true then adds one
        
           
        

print("Total number of alphabetic characters: " +  str(alpha_Char))
print("Total number of words with repeated alphabetic characters: " + str(repeated))
print("Total number of end-start letter matches: " + str(end_start))