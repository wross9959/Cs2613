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