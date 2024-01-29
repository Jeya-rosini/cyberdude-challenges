# If-Else Condition (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #5: Create different ways of defining functions and explain it in detail with examples.
- expression
- return it
- pass arguments, receive parameters
- IIFE

```js
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

```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge and my team mate [Mrs. Bearcin Sweety](https://github.com/bearcin46) for helping me to complete this challenges

## Reference:

- [#71 - Javascript Function Declaration vs Function Expression](https://www.youtube.com/watch?v=j4jO45mO5Cc&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=72)  

- [#73 - Javascript Self Invoking Functions - (IIFE)](https://www.youtube.com/watch?v=JuiiCYIojd4&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=74)