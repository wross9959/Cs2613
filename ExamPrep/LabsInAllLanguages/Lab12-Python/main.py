#1
num = 2
result = (lambda x: x*2)(num)
print(result)

#2
lis = "Helao"
val = (lambda string: string[int((len(string) -1) // 2)])(lis)
print(val)


#3
fun = 5
w = (lambda num: True if num % 2 == 1 and num >= 0 else False)(fun)
print(w)


#4
test = "Abc"
val = (lambda str: True if str[0] in ["A","E","I","O","U"] else False)(test)
print(val)





val = (lambda num1, num2: num1 if(num1 > num2) else num2)
print(val(2,1))
print(val(3,52))



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
