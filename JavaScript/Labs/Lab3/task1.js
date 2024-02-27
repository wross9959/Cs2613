


let function1 = (sentence) =>{
    if(sentence === ""){
        return false;
    }
    let toReturn = false;
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        if(words[i][0] === words[i][0].toUpperCase()){
            toReturn = true;
        }
        else{
            return false;
        }
    }
    return toReturn;
    
}

let function2 = (sentence) =>{
    let toReturn = false;
    let spaceCount = 0;
    
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
            spaceCount++;
            if(spaceCount <= 1){
                toReturn = true;
            }
            else{
                return false;
            }
        }
    }
    return toReturn;
    
}
let function3 = (sentence) =>{
    
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] === " "){
            if(sentence[i-1].toUpperCase() === sentence[i+1].toUpperCase()){
                return true;
            }
            else{
                return false;
            }
        }
    }
    
}

let functionTask2 = (inputs, func) =>{
    let toReturn = [];
    for(let i = 0; i < inputs.length; i++){
        let count = 0
        for(let j = 0; j < func.length; j++){
            if(func[j](inputs[i]) === true){
                count ++;
            }
            if(count === 3){
                toReturn.push(inputs[i])
            }
        }
        
    }
    return toReturn;
}

const tests = ["Test Test", "This is a test", "This Is A Test", "Catherine Elaine", "Catherine Elaine Guil", "","Does this pass?", "Question Node.js"];
const func = [function1, function2, function3];
const results = functionTask2(tests, func);
console.log(results);
console.log(function1("This Is A Test"));
console.log(function2("This Is Test"));
console.log(function3("Catherine Elaine Guil"));