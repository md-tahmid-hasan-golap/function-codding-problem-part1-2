function noDublocate(duplicate){
      let array = []
    for(let string of duplicate){
        if(array.includes(string) === false){
            array.push(string)
        }
        
    }
    return array
}

const array = ["golap", "basar", "imrul", "golap", "basar", "tapos", "imrul", "tapos"];
const result = noDublocate(array);
console.log(result)