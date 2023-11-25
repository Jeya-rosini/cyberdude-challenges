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