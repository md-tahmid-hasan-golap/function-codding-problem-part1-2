function oddAvareg (number){
    let odds = []

    for(let num of number){
        if(num % 2 === 1){
            odds.push(num)
        }



    }  

    let sum = 0
    for(let odd of odds){
        sum = sum + odd;
    
    }
    const size = odds.length;
    const avg = sum / size;
    return avg

   
    
  
    
}

const array = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 521, 975];
const result = oddAvareg(array);
console.log(result.toFixed())