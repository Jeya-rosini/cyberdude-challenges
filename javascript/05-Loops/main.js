// Creating an array of the objects and loop through it. Discuss about various looping options

// Eg-1: Stock Check

const stock = [
    {id: 1, items: "boost", isAvailable: true},
    {id: 2, items: "horlicks", isAvailable: false},
    {id: 3, items: "Complan", isAvailable: true},
    {id: 4, items: "bonvita", isAvailable: false},
    {id: 5, items: "milo", isAvailable: false},
];

// For-of Loop

// for (let key of stock){
//     console.log(key);
// }

// forEach Loop

// stock.forEach((stock) => {
//         console.log(`The items in our shop are ${stock.items}`);
//     })

// for loop

// for (let i = 0; i < stock.length; i++){
//     if (stock[i].isAvailable === true){
//         console.log(`The item ${stock[i].items} is available`);
//     } else if (stock[i].isAvailable === false){
//         console.log(`The item ${stock[i].items} is not available`);
//     }
// }


// for-in Loop
// (function() {
//     for (let key in stock){ 
//         console.log(key, stock[key].items, stock[key].isAvailable);
//     }
//     const stockItems = {id: 6, items: "Pediacure", isAvailable: true};
//     stock.push(stockItems);
//     console.log (stock);
// })();








