// задача 1

function capitalize (string) {
    return string.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}
console.log(capitalize('heLLO worlD'));




// задача 2

let numbers = [54,3,76,37,999,43,18,2]
function sum (numbers) {
    let sumOdd = 0;
    let sumEven = 0;
    for (let number of numbers) {
        if (number % 2 === 0) {
            sumEven+=number;
        }else {
            sumOdd+=number;
        }
    }
    return [ sumEven,sumOdd];
}

console.log(sum(numbers));

