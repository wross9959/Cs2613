const func1 = (x) => {
    return x * 2
}

const func2 = (x) => {
    return x[Math.floor(x.length / 2)]
}

const func3 = (x) => {
    if (x % 2 === 1) {
        return true
    }
    else {
        return false
    }
}

const func4 = (x) => {
    switch(x[0]) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
            return true;
        default:
            return false;
    }
}


result = [8,10,7.5].map(func1)

result = ["Hello!", "CompSci2613", "Lab-12"].map(func2)

result = [-15, -4, 0, 4, 23, 64, 101, 104, 123].filter((x) => x > 0 && func3(x))

result = ["alice", "bob", "Carl", "daisy", "Earl"].filter(func4)