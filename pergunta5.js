function inverterString(string){

    let novaString = "";
    for(let i= string.length-1;i>=0;i--){
        novaString+=string[i];
    }
    
    return novaString
}


let stringParaInverter = "sucrilhos"

let stringInvertida = inverterString(stringParaInverter)

console.log(stringInvertida);
