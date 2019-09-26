const paintHouse = (prices) => {

    for(let i = 1; i < prices.length; i++){

        for(let j = 0; j < prices[i].length; j++){
            prices[i][j] += findLowestPrice(j, prices[i-1]);
        }

    }

    let n = prices.length - 1;
    return prices[n].sort( (a,b) => a - b)[0];


    function findLowestPrice(idxToExclude, priceArr){
        let min = Infinity;
        priceArr.forEach( (price, idx) => { if(price < min && idx !== idxToExclude) min = price;} );
        return min;
    }
    


}


let prices = [[17,2,17,14,4], [16,16,5,99,4], [14,3,19,3,5], [5,6,7,88,35]];

let res = paintHouse(prices) //Expected outcome: 14

console.log(`Min Price: ${res}`);


