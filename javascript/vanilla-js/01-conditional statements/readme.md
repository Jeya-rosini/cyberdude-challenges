# If-Else Condition (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #1: Create a if-else condition with all possible  

```js
// If-else Condition

// eg-1:

// Check whether the 90s period cartoon are telecasted or not using if-else condition

const cartoonName = prompt('Cartoon pakalama?');
  
  if (cartoonName == "poppie") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "pokemon") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "ben10") {
    console.log(`The cartoon ${cartoonName} is not telecasted`);
  } else if (cartoonName == "doremon") {
    console.log(`The cartoon ${cartoonName} is telecasted`);
  } else {
    console.log(`${cartoonName} kadalayae ilayam`);
  };
 

// eg -2:

// using if-else in this current time period which cartoon show can we watch in pogo channel is checked here!!

const time = +prompt('What show can I watch now?');

if (time >= 15 && time <= 16){
    console.log("time to watch Little Singhan!");
} else if(time >= 16 && time <= 21){
    console.log("time to watch chotta bheem!")
} else{
    console.log("it is time to sleep, Good Night!!")
};

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

- [#27 - JavaScript If-Else (With Examples)](https://www.youtube.com/watch?v=WebG_D9-U80&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=28)  

- [#28 - JavaScript Switch-case (With Examples)](https://www.youtube.com/watch?v=xG5IUyZvbDk&list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa&index=29) 