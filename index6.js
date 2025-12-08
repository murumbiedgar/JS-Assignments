
// 1 Tonnage calculation

const dailyProcurement = [1200, 850, 1000, 900];

let totalTonnage = 0;

for (let i = 0; i < dailyProcurement.length; i++) {
  totalTonnage += dailyProcurement[i];
}
const averageTonnage = totalTonnage / dailyProcurement.length;
console.log("Average daily tonnage:", averageTonnage);

// 2 Credit checck

const credits = ['paid', 'due', 'paid', 'due'];

// Loop through each credit status
for (const status of credits) {
  // Skip 'paid' records
  if (status === 'paid') {
    continue;
  }
  
  // Only 'due' records reach this point
  console.log(status);
}

// 3 Manager alert

// Simulate bean inventory
let beanQuantity = 5; // Starting quantity

console.log("Starting inventory check...");

// Inventory check loop
while (true) {
  console.log(`Current bean stock: ${beanQuantity}`);
  
  // Simulate finding and using beans
  if (beanQuantity > 0) {
    console.log("Beans found! Reducing quantity...");
    beanQuantity--;
  }
  
  // Check if we're out of stock
  if (beanQuantity === 0) {
    break; // Exit immediately
  }
}

// Alert the manager
console.log("Manager: Beans are now out of stock.");
