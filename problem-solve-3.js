function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input"
    }
  let number = false
   for(let i = 0; i < name.length; i++){
    let char = name[i]
   
    if(!isNaN(char) && char !== " "){
        number = true;
        break
          
    } 
}
    return number


}
const names = "golap123";
const output = checkDigitsInName(names);
console.log(output)

// function checkDigitsInName(name) {
//     if (typeof name !== "string") {
//         return "Invalid Input";
//     }

//     let number = false;

//     for (let i = 0; i < name.length; i++) {
//         let char = name[i]; // Get each character

//         if (!isNaN(char) && char !== " ") { // Check if it's a digit
//             number = true;
//             break; // Exit loop as soon as we find a digit
//         }
//     }

//     return number; // Return true if a digit is found, otherwise false
// }

// const names2 = "golap123";
// const output2 = checkDigitsInName(names);
// console.log(output2); // Expected Output: true
