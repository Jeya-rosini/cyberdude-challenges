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


