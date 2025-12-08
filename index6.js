
// let sum = 0
// let step = 1

// while (step <= 10) {
//     sum += step
//     step++
// }
// console.log(sum)

// let counter = 0

// do{
//     console.log(counter)
//     counter++
// }while (counter < 5)

const dailyProcurement = [1200, 850, 1000, 900];

let totalTonnage = 0;

for (let i = 0; i < dailyProcurement.length; i++) {
  totalTonnage += dailyProcurement[i];
}
const averageTonnage = totalTonnage / dailyProcurement.length;
console.log("Average daily tonnage:", averageTonnage);
