// Creating a primitive and reference data of an anrray and manipulate it
// Eg-1: Enquiring about the bus to travel to Chennai from Madurai - Primitive data type

const buses = ["IntrCity", "VKV", "Egloo", "SriSMS", "KNR"];
const buses2 = [ "MetturSuper", "Chandraprakash", "RPTours"];

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
const busesNumber = buses.join (", ");
console.log(busesNumber);

// forEach in array
const arrangeTheBuses = buses.forEach(function(value, index){
    console.log(index, value);
});


Eg-2: Enquiring about the bus to travel to Chennai from Madurai - Refrence data type

const buses = [
  { busName: "KNR", time: "23", availableNit: true },
  { busName: "Mercedes", time: "6", availableNit: false },
  { busName: "Parveen", time: "10", availableNit: false },
  { busName: "IntrCity", time: "20", availableNit: true },
];

// Testing an element in an array
// .every() and .some()
const available = buses.every(function (value) {
  return value.availableNit === true;
});

const available = buses.some(function (value) {
  return value.availableNit === true;
});

// Filtering and Finding of element in an array
// .filter() and .find()
const filterTime = buses
  .filter(function (value) {
    return value.time >= 20;
  })
  .find(function (value) {
    return value.busName === "IntrCity";
  });

// Sorting the element in an array
// .sort()
const sortTime = buses.sort(function(a,b){
    if (a.time < b.time) return -1;
    if (a.time > b.time) return 1;
    return 0;
})

console.log(sortTime);
