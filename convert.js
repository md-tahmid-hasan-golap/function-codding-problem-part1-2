// function inchFeet (inch){
//     const feet = inch / 12;
//     const result = parseInt(feet);
//     const feet2 = inch % 12;
//     const result3 =  result + " ft " + feet2 + " inch "
//     return result3
    

// }

// const output = inchFeet(75);
// console.log(output)



function inchFeet (inch){
    const feet = inch / 12;
    const feet2 = parseInt(feet)
   const feetrremaning = inch % 12;
   const result = feet2 + " fit " +  feetrremaning + " inch ";
   return result

}
const output = inchFeet(75);
console.log(output)