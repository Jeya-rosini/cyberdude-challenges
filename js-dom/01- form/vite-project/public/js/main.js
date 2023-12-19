// getting form using document.form.formName

const formEl = document.forms.slamBook;

// callback function for all event listerners
const formSubmit = (event) => {
    // to prevent refresh the page
    event.preventDefault();
  
    // getting elements of the forms (using name in the input field) using object destructuring method (ES-6)
   
    //   const {
    //     name,
    //     dob,
    //     photo,
    //     nickName,
    //     petName,
    //     favColor,
    //     favMovie,
    //     favFood,
    //     favPlace,
    //     phNumber,
    //     emailId,
    //     address,
    //   } = formEl.elements;
   
    // using formData (constructor) to get elements
    const formDataEl = new FormData(formEl);

    // JSON format - data transfer in the object
  const formJson =  JSON.stringify(Object.fromEntries(formDataEl));
     console.log(formJson);
};

     // submitting the form

formEl.addEventListener("submit", formSubmit)

  

