/// imported the just validate package for validation process
import JustValidate from "just-validate";

// getting the input fields
const formEl = document.getElementById("vaccination-details-form");
const detailsEl = document.querySelector("#details");
const date = new Date();
const formatDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
console.log(formatDate);


// console.log(formEl);
const detailsKey = "vacination-details";

const validateForm = new JustValidate(formEl, {
  validateBeforeSubmitting: true,
});

validateForm.addField(
  "#name",
  [
    {
      rule: "required",
    },
    {
      rule: "maxLength",
      value: 20,
    },
    {
      rule: "minLength",
      value: 3,
    },
  ],
  {
    errorLabelCssClass: ["formError"],
  }
);
validateForm.addField(
  "#dob",
  [
    {
      rule: "required",
    },
  ],
  {
    errorLabelCssClass: ["formError"],
  }
);
validateForm.addField(
  "#hospitalName",
  [
    {
      rule: "required",
    },
    {
      rule: "maxLength",
      value: 40,
    },
    {
      rule: "minLength",
      value: 3,
    },
  ],
  {
    errorLabelCssClass: ["formError"],
  }
);
validateForm.addField(
  "#district",
  [
    {
      rule: "required",
    },
    {
      rule: "maxLength",
      value: 30,
    },
    {
      rule: "minLength",
      value: 5,
    },
  ],
  {
    errorLabelCssClass: ["formError"],
  }
);

validateForm.onSuccess((e) => {
  const formData = new FormData(formEl).entries();
//   console.log(formData);

  const entries = Object.fromEntries(formData);

//   console.log(entries);

  const newData = [];

  const getItemFromTheLocalStorage = localStorage.getItem(detailsKey);

  const parseThatLocalStorageArray = JSON.parse(getItemFromTheLocalStorage);

  if (parseThatLocalStorageArray) {
    parseThatLocalStorageArray.push(entries);

    localStorage.setItem(
      detailsKey,
      JSON.stringify(parseThatLocalStorageArray)
    );
  } else {
    newData.push(entries);

    localStorage.setItem(detailsKey, JSON.stringify(newData));
  }

  alert("The vaccination details received successfully");

  getDetails();
  formEl.reset();
});

function getDetails() {
  const getVaccinationData = localStorage.getItem(detailsKey);

  const getVaccinationArray = JSON.parse(getVaccinationData);

//   console.log(getVaccinationArray);

    const detailsTableEl = document.getElementById("detailsTable");
    
    // console.log(detailsTableEl);

    if (getVaccinationArray && getVaccinationArray.length > 0) {
      
        detailsEl.style.display = "hidden";

    const tableBodyEl = document.querySelector("#tableBody");
    
        tableBodyEl.innerHTML = " ";
    
        const finalData = [];

    getVaccinationArray.map((getVaccinationData, index) => {
      const trEl = document.createElement("tr");
      const tdEl = document.createElement("td");
      const tdSerailNoEl = document.createElement("td");
      const td2El = document.createElement("td");
      const pEl = document.createElement("p");
      const td4El = document.createElement("td");
      const td5El = document.createElement("td");
      const td6El = document.createElement("td");
      const deleteBtnEl = document.createElement("button");

      tdSerailNoEl.classList.add("tableClass");
      tdSerailNoEl.textContent = index + 1;

      tdEl.classList.add("tableClass");
      tdEl.textContent = getVaccinationData.name;

      td2El.classList.add("tableClass");
      td2El.textContent = getVaccinationData.hospitalName;

      pEl.classList.add("text-sm", "font-bold")
      pEl.textContent = `(${getVaccinationData.district})`;
      td2El.appendChild(pEl)

      td4El.classList.add("tableClass");
      td4El.textContent = getVaccinationData.dateOfDose;

      td5El.classList.add("tableClass");
      td5El.textContent = getVaccinationData.dateOfDose2;

      deleteBtnEl.className = "btn";
      deleteBtnEl.textContent = "Delete";

      deleteBtnEl.addEventListener("click", (e) => {
          deleteDetails(getVaccinationData);
      });

      td6El.classList.add("tableClass");
      td6El.append(deleteBtnEl);

      trEl.append(tdSerailNoEl, tdEl, td2El, td4El, td5El, td6El);

      finalData.push(trEl);
    //   console.log(finalData);

    });

      finalData.forEach((el) => tableBodyEl.append(el));
      detailsEl.style.display = "block";
  }
}

function deleteDetails(getVaccinationData) {
    const confirmMessage = confirm(`Do you want to delete this data?`);
    if (confirmMessage) {
        const vaccinationData = localStorage.getItem(detailsKey);
        const vaccinationDataArray = JSON.parse(vaccinationData);
        console.log(vaccinationDataArray);

        const deleteRecords = vaccinationDataArray.filter(value => value.name != getVaccinationData.name);
        localStorage.setItem(detailsKey, JSON.stringify(deleteRecords));
        alert("This record has been deleted");
        getDetails();
    }
}
getDetails();