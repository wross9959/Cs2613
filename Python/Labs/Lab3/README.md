For Lab3

```py
# 1. Write a Python program to triple all numbers in a given list of integers. Use Python map. 

def triple (n):
    return n * 3

nums = [1, 2, 3, 4, 5]
result = map(triple, nums)

print(list(result))

# 2. Write a Python program to add three given lists using Python map and lambda
num1 = [1, 2, 3, 4, 5]
num2 = [1, 2, 3, 4, 5]
num3 = [1, 2, 3, 4, 5]
result = map(lambda x, y, z: x + y + z, num1, num2, num3)

print(list(result))

# 3. Write a Python program to listify the list of given strings individually using Python map.
# Original list: 
# ['Red', 'Blue', 'Black', 'White', 'Pink']

# After listify the list of strings are:
# [['R', 'e', 'd'], ['B', 'l', 'u', 'e'], ['B', 'l', 'a', 'c', 'k'], ['W', 'h', 'i', 't', 'e'], ['P', 'i', 'n', 'k']]
stuff = ['Red', 'Blue', 'Black', 'White', 'Pink']
result = map(lambda x: list(x), stuff)

print(list(result))

```