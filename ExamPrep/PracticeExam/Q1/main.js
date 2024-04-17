
const filtered = (a1, a2, fn) => {
    let a3 = [];
    for(let i = 0; i < a1.length; i++){
        a3[a3.length] = fn((a(a1[i], a2[i])));
    }
    return a3;
}
const higher = (v1, v2) =>{
    if(v1 > v2){
        return v1;
    }
    else{
        return v2;
    }
  }