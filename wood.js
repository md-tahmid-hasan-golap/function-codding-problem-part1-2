function woodQuantity(shart, pant, gange){
    const perShartr = 500;
    const perPant = 1000;
    const pergange = 300;
    // const tottalShart = shart * perShartr;
    // const totalPant = pant * perPant;
    // const totalGange = gange * pergange;
    const tottalShart = perShartr * shart ;
    const totalPant =  perPant * pant;
    const totalGange =  pergange * gange;

    const total = tottalShart + totalPant + totalGange;
    return total;

}

const output = woodQuantity(2, 2, 2);
console.log(output)