// let ages = [23,12,43,23,1,4,534,23,43,12,23,54,21]

// letfilteredAges = ages.filter((age)=>ages<=25)

// let sum = ages.reduce((sum,currentAge)=>{
//     return sum+currentAge
// }, 0)

// console.log(sum)

// let donations = [
//     {donor: "Paul", ampount:900}
//     {donor: "Jack", ampount:800}
//     {donor: "Charles", ampount:400}
//     {donor: "Jules", ampount:1000}
//     {donor: "Arsene", ampount:7800}
// ]
//  let receivedDonatioins = donations.reduce((totalDonations, donor) =>{
//     return sum+totalDonations
//  }, 5000)


 let sales = [
    { item: "Laptop", amountPaid: 1200 },
    { item: "Mouse", amountPaid: 25 },
    { item: "Keyboard", amountPaid: 75 },
    { item: "Monitor", amountPaid: 350 },
  ];
  
  let totalRevenue = sales.reduce((total, sale) => total + sale.amountPaid, 0);
  console.log(totalRevenue);
