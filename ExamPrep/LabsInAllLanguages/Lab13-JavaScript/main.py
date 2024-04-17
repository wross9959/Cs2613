


isCap = lambda x: x.split()[0][0] == x.split()[0][0].upper() and x.split()[1][0] == x.split()[1][0].upper() if len(x) > 0 else None


isOneSpace = lambda x: x.count(' ') == 1

isSame = lambda x: x.split()[0][-1].lower() == x.split()[1][0].lower()


funcs = [isCap, isOneSpace, isSame]





inputs = ["Test Test", "This is a test", "This Is A Test", "Catherine Elaine", "Catherine Elaine Guil", "",
"Does this pass?", "Question Node.js"]

func = [isCap, isOneSpace, isSame]

def filt(inputs, arrayFunctions):
    correct_strings = []

    for string in inputs:
        allows = True
        for funct in arrayFunctions:
            if not funct(string):
                allows = False
                break
        if allows:
            correct_strings.append(string)
    
    return correct_strings

print(filt(inputs, func))