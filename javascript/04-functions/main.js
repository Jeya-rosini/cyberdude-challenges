//  Create different ways of defining functions and explain it in detail with examples.
// (expression, return it, pass arguments, receive parameters, IIFE)

// Eg-1: ration shop/fair-price hsop scenario

const rationItems = [
  {
    id: 1,
    items() {
      return `You will have Sugar, rice, dhall, oil and wheat`;
    },
    price: 105,
  },
  {
    id: 2,
    items() {
      return `You will have Sugar, rice, dhall, oil and wheat`;
    },
    price: 140,
  },
  {
    id: 3,
    items() {
      return `You will have Sugar, rice, dhall, oil and wheat`;
    },
    price: 200,
  },
  {
    id: 4,
    items() {
      return `You will have Sugar, rice, dhall, oil and wheat`;
    },
    price: 240,
  },
];

// Function Expression

const itemsBought = function itemsBought(person) {
  let findPerson = rationItems.find((value) => {
    return value.id == person;
  });
  if ((person = 1)) {
    console.log(
      `${findPerson.items()} for ${
        findPerson.id
      } person and the total cost is ${findPerson.price}`
    );
  } else {
    console.log(
      `${findPerson.items()} for ${
        findPerson.id
      } persons and the total cost is ${findPerson.price}`
    );
  }
}
itemsBought(4);

// Immediately Invoked Function Expression(IIFE)

(function itemsBought(person) {
    let findPerson = rationItems.find((value) => {
      return value.id == person;
    });
    if ((person = 1)) {
      console.log(
        `${findPerson.items()} for ${
          findPerson.id
        } person and the total cost is ${findPerson.price}`
      );
    } else {
      console.log(
        `${findPerson.items()} for ${
          findPerson.id
        } persons and the total cost is ${findPerson.price}`
      );
    }
  })(4);
