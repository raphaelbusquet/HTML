let family = {
    incomes: [2500, 500, 120, 12.232134567], 
    expenses: [1000, 1230, 82.4, 12.5]
}

function sum(array) {
    let total = 0;
    for (let value of array){
        total += value 
    }
    return total    
}

console.log(sum(family.incomes).toFixed(2))
