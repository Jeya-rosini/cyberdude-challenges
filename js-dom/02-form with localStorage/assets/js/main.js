          /// imported the just validate package for validation process
import JustValidate from 'just-validate';

// getting the input fields 
const formEl = document.getElementById("vaccination-details-form");

const validateForm = new JustValidate(formEl);

validateForm.addField('#name', [
    {
        rule:'required',
    },
    {
        rule: 'maxLength',
        value: 20,
    },
    {
        rule: 'minlength',
        value: 3,
    }
])
validateForm.addField('#dob', [
    {
        rule: 'required',
    }
])
validateForm.addField('#hospitalName', [
    {
        rule:'required',
    },
    {
        rule: 'maxLength',
        value: 40,
    },
    {
        rule: 'minLength',
        value: 3
    }
])
validateForm.addField('#district', [
    {
        rule:'required',
    },
])


