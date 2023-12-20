# Create a Form (JS-DOM Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Netwroks Pvt. Ltd.](https://www.cyberdudenetworks.com/). You can find all the source code and live links below.

> Task #1: Create a form using js-dom through vite framework

```js
// getting form using document.form.formName

const formEl = document.forms.slamBook;
const resultEl = document.getElementById("result");

// callback function for all event listerners
const formSubmit = (event) => {
  // to prevent refresh the page
  event.preventDefault();

  // using formData (constructor) to get elements
     const formDataEl = new FormData(formEl);
     console.log(formDataEl);
  resultEl.style.display = "block";
};

// using formData access the output

const formData = (e) => {
     const formData = e.formData;
     const formJson = JSON.stringify(Object.fromEntries(formData));
     console.log(formJson);
     const formInfo = JSON.parse(formJson);
     resultEl.innerHTML = formInfo;
};

formEl.addEventListener("formdata", formData);

// submitting the form

formEl.addEventListener("submit", formSubmit);

```
### Live link

https://jeya-rosini.github.io/cyberdude-challenges/

## Screenshots:
- ![Draft Sketching](Sketching.jpeg)

## Acknowledgement:

I have to thank Mr. Anbuselvan Rocky [Mr.Anbuselvan Rocky](https://github.com/anburocky3) for the mentoring throughout this challenge

## Reference:

- [#41 - Accessing Forms and Elements](https://www.youtube.com/watch?v=8MibgZLbFRs&list=PL73Obo20O_7jhOOPDASWk0PVcRxGEyrm9&index=41)  

- [#42 - Javascript Form Submit and FormData Event](https://www.youtube.com/watch?v=RNvGJhNT2JM&list=PL73Obo20O_7jhOOPDASWk0PVcRxGEyrm9&index=42) 