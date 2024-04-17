

mystery1 = (lambda p1, p2, p3: (p1[0] if (len(p3)%2 > 0) else (p2[len(p2)-1])))

print(mystery1("Hello", "World", "Test"))
print(mystery1("CS2613", "Final", "Exam!"))


mystery2 = (lambda v1: (v1 if (v1 < 0) else v1 * -1))
vals = map(mystery2, [4, -2, 14, -13, 3])
for val in vals:
    print(val)
    
mystery3 = (lambda m1: True if (m1 < 40) else False)
filtered = filter(mystery3, [89, 15, 135, 156, 156])
for val in filtered:
    print(val)