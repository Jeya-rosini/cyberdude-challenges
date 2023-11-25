# Object creation and manipulation (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #2: Create a object about ur self with all datatype values. And try to manipulate it 

```js
 // create object about Jeya-rosini and manipulate it
 
 const person = {
    firstName : "Jeya",
    middleName : "rosini",
    lastName : "Sudhan",
    age : 26,
    workExperiece : true,
    languageKnown : ["Tamil", "English", "Hindi"],
    fullName() {
       console.log(`${this.firstName} ${this.middleName} ${this.lastName}`);
    } ,
    eligibility(workExperiece) {
      if(workExperiece === true){
         console.log(`You are is eligible for the intership`);
      }else{
         console.log(`Sorry, You are is not eligible!
      Try again some other time`)
      };
    }
 };
// add or update data

// person.fullName = "Hari";

//delete the data

//  delete person.lastName;

//check if the data exists
// console.log(location in person);

person.eligibility();
console.log(person.eligibility());
```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Acknowledgement:

- I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge

- Mohammed Shajid Shafee [Shajid Shafee](https://github.com/mshajid)

## Reference:

- [#35 - JavaScript Object & OOP(Object Oriented Programming)](https://www.youtube.com/watch?v=iKD8RZoXrLQ&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=36) 

- [#37 - JavaScript Constructor Functions](https://www.youtube.com/watch?v=vlB25TG2wIA&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=38)

- [#40 - JavaScript Functions are Objects](https://www.youtube.com/watch?v=j8JcqCTQIfw&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=41)