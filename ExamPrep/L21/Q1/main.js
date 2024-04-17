const mystery1 = (message, fun) => {
    if(message.length > 6){
        let t = message.split(",");
        let s = 0;
        for(let i = 0; i < t.length; i++){
            s = s + parseInt(t[i])
        }
        return s;
    }

    else if(message.length >= 3){
        let m = message.substring(2) + 1 + "hello";
        return m;
    }
    else if(message.length >= 1){
        let m = fun(parseInt(message));
        return m;
    }

    return 0;
}
const mystery2 = (num) => {
    return num * num
}
console.log(mystery1("1,3,7,1,4,9", mystery2))
console.log(mystery1("608", mystery2))
console.log(mystery1("2", mystery2))
    