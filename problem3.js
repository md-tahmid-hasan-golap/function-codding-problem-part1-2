function checkDigitsInName(name){
    if(typeof name !== "string"){
          return "Invalid Input"
    }
    let num = false
    for(let i = 0; i < name.length; i++){
        let char = name[i];
        if(!isNaN (char) && char !== " "){
           num = true;
           continue
        }
    }
    return num

}

const output = checkDigitsInName("golap123");
console.log(output)