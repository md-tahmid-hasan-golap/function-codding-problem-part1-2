

const hights = [66, 35, 68, 55, 49, 88, 61, 72, 44];

function maxHight (numbers) {
    let num = numbers[0];
   for (let number of numbers){
    
    if(number >  num){
        num = number
    }
   }
return num
}

const max = maxHight(hights);
console.log(max)


