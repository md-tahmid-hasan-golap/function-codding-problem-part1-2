const price = [12000, 43000, 10000, 3400, 22200, 4432];

function maxPrice (numbers){
    let num = numbers[0]
    for(let number of numbers){
       
        if(number >  num){
            num  = number 
        }
        
    }
return num
}

const output = maxPrice(price);
console.log(output)



// const price = [12000, 43000, 10000, 3400, 22200, 4432];

// function maxPrice(numbers) {
//     let num = numbers[0]; // Start with the first element
//     for (let number of numbers) {
//         if (number > num) {  // Remove the incorrect semicolon
//             num = number;     // Update num if a larger number is found
//         }
//     }
//     return num;
// }

// const output = maxPrice(price);
// console.log(output);
