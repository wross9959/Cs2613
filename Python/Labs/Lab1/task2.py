import math

def calculate(a,b):
    return ( math.sqrt(absValue((a - 1)**5) - absValue(b + 1)))

def absValue(num):
    curr = num * 2
    return (curr/2)

def isNum(input):
    if(input.replace(".", "").isnumeric()):
        return True
    else:
        return False
       
valid = True
while(valid):
    a = input("Input two values:\n")
    b = input()
    if(isNum(a)):
        a = float(a)
        b = float(b)
        result = calculate(a,b)
        print("Result: " + str(result))
    else:
        valid = False
    
    

    
    


