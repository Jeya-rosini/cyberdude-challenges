# Loops (Javascript Challenges)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #5: Create a Array of Objects and loop through it. Discuss about various looping options

```js
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
```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge.
And I have to thank Mr. Mohammad Shajid Shafee [Mohammad Shajid Shafee](https://github.com/mshajid) for helping me with his code and ideas.

## Reference:

- [#29 - JavaScript For Loops (With Example)](https://www.youtube.com/watch?v=tMgXbOs0jLc&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=30)  

- [#30 - JavaScript While Loop](https://www.youtube.com/watch?v=biD_kt-ynao&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=31) 

- [#31 - JavaScript Do-While Loop](https://www.youtube.com/watch?v=q7XpUlkgfnY&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=32)

- [#32 - JavaScript For..in Loop](https://www.youtube.com/watch?v=sVv5agTxoUE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=33)

- [#33 - JavaScript For..of Loop](https://www.youtube.com/watch?v=b3M0BTzgr98&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=34)