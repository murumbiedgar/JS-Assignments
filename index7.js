// // // Functions

// function returnSumOfTwoNumber(number1,number2){
//     let sum = number1 + number2
//     return sum
// }

// // let sum = returnSumOfTwoNumber(10,20)

// console.log(sum)

// // // tax calculation

// function calculateTax(amount, taxRate=0.18){
//     let tax = amount * taxRate
//     return tax
// }

// console.log(calculateTax(5000))

// // sum of arrays

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// let sum =0
// function sumArray(numbers){
//     for(let index=0;index<numbers.length;index++){
//         sum += numbers[index]
//     }
//     return sum
// }
// console.log(sumArray(numbers))

function checkTonnage(weight) {
    return weight >= 1000;
  }
  
  const dailyProcurement = [1200, 850, 1000, 900];
  
  for (let i = 0; i < dailyProcurement.length; i++) {
    const weight = dailyProcurement[i];
    const meetsThreshold = checkTonnage(weight);
    console.log(`Day ${i + 1}: ${weight}kg - Meets threshold: ${meetsThreshold}`);
  }


