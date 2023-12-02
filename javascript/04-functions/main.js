//  Create different ways of defining functions and explain it in detail with examples.
// (expression, return it, pass arguments, receive parameters, IIFE)

// Eg-1: ration shop/fair-price shop scenario

// const rationItems = [
//   {
//     id: 1,
//     items() {
//       return `You will have Sugar, rice, dhall, oil and wheat`;
//     },
//     price: 105,
//   },
//   {
//     id: 2,
//     items() {
//       return `You will have Sugar, rice, dhall, oil and wheat`;
//     },
//     price: 112,
//   },
//   {
//     id: 3,
//     items() {
//       return `You will have Sugar, rice, dhall, oil and wheat`;
//     },
//     price: 119,
//   },
//   {
//     id: 4,
//     items() {
//       return `You will have Sugar, rice, dhall, oil and wheat`;
//     },
//     price: 126,
//   },
// ];

// console.log(rationItems);

// Function Expression

// const itemsBought = function itemsBought(person) {
//   let findPerson = rationItems.find((value) => {      //! arrow function (flat arrow key) //
//     return value.id == person;                        //! return the value (return statement) //
//   });
//   if ((person = 1)) {
//     console.log(
//       `${findPerson.items()} for ${
//         findPerson.id
//       } person and the total cost is ${findPerson.price}`
//     );
//   } else {
//     console.log(
//       `${findPerson.items()} for ${
//         findPerson.id
//       } persons and the total cost is ${findPerson.price}`
//     );
//   }
// }
// itemsBought(2);

// Immediately Invoked Function Expression (IIFE)

// (function itemsBought(person) {
//     let findPerson = rationItems.find((value) => {
//       return value.id == person;
//     });
//     if ((person = 1)) {
//       console.log(
//         `${findPerson.items()} for ${
//           findPerson.id
//         } person and the total cost is ${findPerson.price}`
//       );
//     } else {
//       console.log(
//         `${findPerson.items()} for ${
//           findPerson.id
//         } persons and the total cost is ${findPerson.price}`
//       );
//     }
//   })(2);
    