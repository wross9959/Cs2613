name = input("Hello! Please input a name: ")

age = 0

valid = False

while(not valid):
    age = int(input("Please input an age: "))
    if((age >= 0) and (age <= 122 )):
        valid = True
    else:
        print("Error with age, please input a new age: ")


if(age <= 15):
    print(name + " must wait " + str(16 - age) + " more years to get a driver’s license!")
elif(age == 16):
    print("Congrats! "+ name + " can get their driver’s license now!")
else:
    print(name + " has been eligible for a driver’s license for " + str(age - 16) + " years!")
