// // objects

// let product = {
//     "name" : "milk",
//     "weight":50,
//     "price":2300,
//     "purchasedBy" : "kitsa",
//     "purchaseDate" : new Date,
//     "currency" : "UGX",
//     "isAvailable" : true
// }
// console.log(product.name)
// console.log(product)

// console.log(product["price"])

// for(const keysOfProduct in product){
//     console.log(product[keysOfProduct])
// }

let salesRecord = {
    "produceName": "tomatoes",
    "tonnageINKgs":80,
    "amountPaid": 15000,
    "buyersName": "Eddy"
}

salesRecord.isCrediSale = true,
salesRecord.dueDate = new Date,

let .AllKeys = Object.keys(salesRecord)

for (let key in salesRecordKeys){
    console.log(key)
}

console.log(salesRecord)


