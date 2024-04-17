


isCap = lambda x: True if x.split()[0][0] == x.split()[0][0].upper() and x.split()[1][0] == x.split()[1][0].upper() else False

isOneSpace = lambda x: x.count(' ') == 1

isSame = lambda x: x.split()[0][-1].lower() == x.split()[1][0].lower()


funcs = [isCap, isOneSpace, isSame]




