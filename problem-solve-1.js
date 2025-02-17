function calculateTax(income, expance){

    if(typeof income !== "number" || income < 0 || typeof expance !== "number" || expance < 0){
        return "Invalid Input" 
    }
    const monthIncome = 10000;
    monthExpance = 3000;
    const diff = monthIncome - monthExpance;
    const result = diff * 0.2
    return result

    

}

    
const output = calculateTax(10000, 3000)
console.log(output)