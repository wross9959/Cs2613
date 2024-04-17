


rem = (lambda n: True if (n[0] == "K" or len(n) == 4) else False)
shortened = filter(rem, ["Anne", "Jeff", "Amy", "Kyle"])
for val in shortened:
    print(val)