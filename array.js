// function oddAvarge(number){
//   let sum = 0;
//   for(let num of number){
//     sum = sum + num
//   }
// return sum
// }

// const array = [10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20]

// const output = oddAvarge(array);
// console.log(output)
// function oddAvarge(number){
//   let sum = 0;
//   for(let num of number){
//     if(num % 2 === 0){
//         sum = sum + num
//     }
//   }
// return sum
// }

// const array = [10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20]

// const output = oddAvarge(array);
// console.log(output)
// function oddAvarge(number){
//   let sum = 0;
//   for(let num of number){
//     if(num % 2 === 1){
//         sum = sum + num
//     }
//   }
// return sum
// }

// const array = [10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20]

// const output = oddAvarge(array);
// console.log(output)



function oddNumber (number){
    let odd = []
    for (let num of number){
        if (num % 2 === 1){
            odd.push(num)
        }

    }
// return odd
let sum = 0;
   for(let odds of odd){
    sum = sum + odds
   }
   const sount =odd.length
  const avg = sum / sount
  return avg
}


const array = [10, 11,12, 13, 14, 15, 16, 17, 18, 19, 20]

const output = oddNumber(array);
console.log(output)