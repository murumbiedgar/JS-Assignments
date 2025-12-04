// //1 Tonnage validation

// // example 1

let procurementTonnage = 1200; 
let meetsRequirement = procurementTonnage >= 1000;
console.log(meetsRequirement); 


// //2 Strictness check

let costStr = '5000';
let costNum = 5000;

console.log(costStr == costNum);
console.log(costStr === costNum); 

// // 3 compplex validation

let sellerrName = "ABC Motors";
let costKsh = 15000;

let isValid = sellerName.length >= 2 && costKsh >= 10000;
console.log(isValid); 


// let dealerName = "ABC Motors";
// let costUgX = 15000;

// let isValid = dealerName.length >= 2 && costUgX >= 20000;
// console.log(isValid); 

// 4 date logging

let saleDate = new Date();

let day = saleDate.getDate();
let month = saleDate.getMonth() + 1; 
let year = saleDate.getFullYear() + 1;

console.log(`*Sale on: ${month}/${day}/${year}*`);
