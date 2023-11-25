# Switch-case Condition (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #1: Create a switch case condition with all the possibilities

```js
// Switch-case

// using the offers affordable, which type of saree can be bought is checked using swtich case!!

const offers = +prompt('Wanna know about offers available for sarees?');

switch(true){
   case (offers >= 50):
       console.log("go for handloom saree");
       break;
   case (offers >= 25 && offers < 50):
       console.log("go for semi-cotton saree");
       break;
   case (offers >= 10 && offers < 25):
       console.log("go for cotton-silk saree"); 
       break;
   default:
       console.log("buy a grape saree");
};
```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge

## Reference:

- [#28 - JavaScript Switch-case (With Examples)](https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29)  