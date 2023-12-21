# Create a Form (JS-DOM Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #1: Create a form using js-dom through vite framework

```js
// getting form using document.form.formName

const formEl = document.forms.slamBook;
const responseEl = document.getElementById("response");
const fullNameEl = document.getElementById("nameHomie");
const dobEl = document.getElementById("dobHomie");
const nickNameEl = document.getElementById("nickNameHomie");
const petNameEl = document.getElementById("petNameHomie");
const favcolorEl = document.getElementById("favColor");
const favMovieEl = document.getElementById("favMovie");
const favFoodEl = document.getElementById("favFood");
const favPlaceEl = document.getElementById("favPlace");
const numberEl = document.getElementById("numberHomie");
const mailEl = document.getElementById("mailHomie");
const addressEl = document.getElementById("addressHomie");
const outputEl = document.getElementById("output")

// callback function for all event listerners
const formSubmit = (event) => {
  // to prevent refresh the page
  event.preventDefault();
  outputEl.style.display = "block";
     responseEl.style.display = "block";
  const response = (`
Full Name : ${fullNameEl.value}
<br>
DOB : ${dobEl.value}
<br>
Nick Name : ${nickNameEl.value}<br>
Pet Name : ${petNameEl.value}<br>
Favorite Color : ${favcolorEl.value}<br>
Favorite Movie : ${favMovieEl.value}<br>
Favorite Food : ${favFoodEl.value}<br>
Favorite Place : ${favPlaceEl.value}<br>
Phone Number : ${numberEl.value}<br>
Mail Id : ${mailEl.value}<br>
Address : ${addressEl.value}<br>
`);
  
  responseEl.innerHTML = response;
};


// submitting the form

formEl.addEventListener("submit", formSubmit);
```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Screenshots:
- ![Draft Sketching](Sketching.jpeg)

-[Slam Book](public/images/Stay%20in%20Touch%20Homie!!%20-%20Google%20Chrome%202023-12-21%2010-55-33.mp4)

## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge

## Reference:

- [#41 - Accessing Forms and Elements](https://www.youtube.com/watch?v=8MibgZLbFRs&list=PL73Obo20O_7jhOOPDASWk0PVcRxGEyrm9&index=41)  

- [#42 - Javascript Form Submit and FormData Event](https://www.youtube.com/watch?v=RNvGJhNT2JM&list=PL73Obo20O_7jhOOPDASWk0PVcRxGEyrm9&index=42) 