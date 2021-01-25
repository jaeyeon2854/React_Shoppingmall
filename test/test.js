const inventory = {
    sibal: [
        { name: 'apples', quantity: 2 },
        { name: 'bananas', quantity: 4 },
        { name: 'cherries', quantity: 9 }
    ]
}


const result = inventory.find(fruit => fruit.name === 'cherries');
const what = inventory.find({},{ sibal: { $elemMatch: { quantity: 2 } } })

// db.schools.find( { zipcode: "63109" },
//                  { students: { $elemMatch: { school: 102, age: { $gt: 10} } } } )
console.log(result);
console.log(what);