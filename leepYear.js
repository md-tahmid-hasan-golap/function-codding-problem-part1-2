// function leepYear (year){
//     if(year % 4 === 0){
//         return true
//     }
//     else{
//         return false
//     }

// }
// const output = leepYear(2025);
// console.log(output)

function leepYear (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }
    else {
        return false
    }
}

// const output = leepYear(2567);
// console.log(output)

function leepYear (year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true
    }

    else if(year % 100 === 0 && year % 100 === 0){
        return true
    }

    else {
        return false
    }
}

const output = leepYear(2021);
console.log(output)
const output2 = leepYear(2022);
console.log(output2)
const output3 = leepYear(2023);
console.log(output3)
const output4 = leepYear(2024);
console.log(output4)