// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)

// we declare the function with the exact name "fromEuroToDollar"
// const fromEuroToDollar = function(valueInEuro){
   
//     let valueInDollar = valueInEuro * 1.2;
    
//     return valueInDollar;
// }

function fromEuroToDollar(euros){
    let EurotoDollar = euros * 1.2;
    return EurotoDollar;
}

function fromDollarToYen(dollars){
    let DollarToEuro = dollars * 1.2;
    let DollarToYen = DollarToEuro * 127.9;
    return Math.floor(DollarToYen);
}

function fromYanToPound(yan){
    let yanToEuro = yan * 127.9;
    let euroToPound = yanToEuro * 0.8;
    return Math.floor(euroToPound)
}

module.exports = { sum, fromEuroToDollar, fromYanToPound, fromDollarToYen }