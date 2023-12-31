#  Array creation and manipulation (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #3:  Create a primitive & reference array with all the CRUD operations. (Manipulations)

```js
// Creating a primitive and reference data of an anrray and manipulate it
// Eg-1: Enquiring about the bus to travel to Chennai from Madurai - Primitive data type

const buses = ["IntrCity", "VKV", "Egloo", "SriSMS", "KNR"];
const buses2 = ["MetturSuper", "Chandraprakash", "RPTours"];

// Adding an element in array
// .push()
buses.push("Lion", "Sasi");

// Finding an element in array
// .includes()
console.log(buses.includes("KNR"));

// Removing an element in array
// .splice()
buses.splice(5, 2);

// Empyting an array
buses.length = 0;
buses = [];

// Combining or Extracting element in array
const totalBuses = [...buses, ...buses2];
console.log(totalBuses);

const availableBuses = buses.slice(2, 5);
console.log(availableBuses);

// Join the element in array
// .join()
const busesNumber = buses.join(", ");
console.log(busesNumber);

// forEach in array
const arrangeTheBuses = buses.forEach(function (value, index) {
  console.log(index, value);
});

// Eg-2: Enquiring about the bus to travel to Chennai from Madurai - Refrence data type

const buses = [
  { 
    busName: "KNR", 
    time: "23", 
    availableNit: true, 
    pickUp1: "Mattuthavani"
  },
  {
    busName: "Mercedes",
    time: "6",
    availableNit: false,
    pickUp2: "Aarapalayam"
  },
  {
    busName: "Parveen",
    time: "10",
    availableNit: false,
    pickUp2: "Aarapalayam"
  },
  {
    busName: "IntrCity",
    time: "20",
    availableNit: true,
    pickUp1: "Mattuthavani"
  },
];

// Testing an element in an array
// .every() and .some()
const available = buses.every(function (value) {
  return value.availableNit === true;
});

const available2 = buses.some(function (value) {
  return value.availableNit === true;
});

// Filtering and Finding of element in an array
// .filter() and .find()

const filterTime = buses
  .filter(function (value) {
    const time = value.time;
    const pickUp1 = value.pickUp1;
    const pickUp2 = value.pickUp2;
    if (time >= 18 && time < 24) {
      console.log(`The pick up location is ${pickUp1}`);
    } else {
      console.log(`The pickup location is ${pickUp2}`);
    }
  return value;
  })
  .find((value) => value.busName === "IntrCity");
 
console.log(filterTime);

// Sorting the element in an array
// .sort()
const sortTime = buses.sort(function (a, b) {
  if (a.time < b.time) return -1;
  if (a.time > b.time) return 1;
  return 0;
});

console.log(sortTime);

// Mapping the element in an array
// .map()
 
const mapTime = buses.map((value) => {
  return (`${value.busName} arrives at ${value.time} hrs`);
});

console.log(mapTime);

```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/


## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge 


## Reference:

- [#50 - Adding element to an JavaScript Array](https://www.youtube.com/watch?v=4W13qhHFSRE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=51)  

- [#51 - Finding an element in a JavaScript Array (Primitives)](https://www.youtube.com/watch?v=7AIMdzNQtkY&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=52)

- [#54 - Removing an element in an JavaScript Array](https://www.youtube.com/watch?v=zF273qlctfQ&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=55)

- [#55 - Emptying an JavaScript Array](https://www.youtube.com/watch?v=Ux7oPByuoWE&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=56)

- [#56 - Combining & Extracting elements in JavaScript Arrays](https://www.youtube.com/watch?v=Nj7Y_faSr7c&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=57)