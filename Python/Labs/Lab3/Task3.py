num1 = [8,10,7.5]
num2 = ["Hello!", "CompSci2613", "Lab-12"]
num3 = [-15, -4, 0, 4, 23, 64, 101, 104, 123]
num4 = ["alice", "bob", "Carl", "daisy", "Earl"]
#1
print(list(map(lambda x: x*2, num1)))

#2
print(list(map(lambda str: str[int (len(str) -1) // 2], num2)))

#3
print(list(filter(lambda num: True if num % 2 == 1 and num >= 0 else False , num3)))

#4
print(list(filter(lambda str: True if str[0].upper() in ["A","E","I","O","U"] else False, num4)))
