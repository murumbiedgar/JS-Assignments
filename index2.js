// 1. string concatenation

// Dealer information variables
let dealerName = "Premium Auto Sales";
let location = "Mbarara";
let product = "Toyota Land Cruiser";
let price = 45000

// Example 1: Basic concatenation with + operator
// let basicMessage = "Dealer: " + dealerName 
// console.log(basicMessage)


// Example 2: concatenation with multiple strings

// let basicMessage = "Dealer " + dealerName + " " + location + " " + product

//  Example 3: coercion

let pricemessage = "Price: $" + price;
console.log(pricemessage)

// 2. template literal practice

let basicMessage = `Dealer: ${dealerName} ${location} ${product}`
console.log(basicMessage)

// 3.type checking and conversion
                  

console.log(`typeof "hello"`);
console.log(`typeof ${year}`);
console.log(`typeof ${price}`);
console.log(`Boolean("hello") → ${Boolean("hello")}`);

// to uppercase

const text1 = "hello world";
console.log(`Original: "${text1}"`);
console.log(`toUpperCase(): "${text1.toUpperCase()}"`);

// to lowercase

const text2 = "HELLO WORLD";
console.log(`Original: "${text2}"`);
console.log(`toLowerCase(): "${text2.toLowerCase()}"`);

// trimm

const text3 = "  hello world  ";
console.log(`Original: "${text3}" (length: ${text3.length})`);
console.log(`trim(): "${text3.trim()}" (length: ${text3.trim().length})`);

// trim

const text4 = "hello world programming";
console.log(`Original: "${text4}"`);
console.log(`split(" "): `, text4.split(" "));

// include
console.log(`\nProduct: "${product}"`);
console.log(`includes("toyota"): ${product.includes("toyota")}`);
console.log(`includes("honda"): ${product.includes("honda")}`);

// replace
const text5 = "hello world";
console.log(`Original: "${text5}"`);
console.log(`replace("world", "everyone"): "${text5.replace("world", "everyone")}"`);
