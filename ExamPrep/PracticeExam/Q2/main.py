





# func one
lastDigit = lambda x: abs(x) % 10

# func two

inRange = lambda x: True if 0 <= x <= 100 else False

# func three

recur = lambda x: str(x[0]) + ("\t" + recur(x[1:])) if len(x) > 1 else ""




values = [155, 632, 0]

results = list(filter(inRange, map(lastDigit, values)))


print( recur(results))




