import JustValidate from "just-validate";

const upload = document.querySelector("#upload-form");
// console.dir(upload);

const validate = new JustValidate(upload, {
  validateBeforeSubmitting: true,
});
// console.log(validate);

validate.addField("#course-title", [
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
]);
validate.addField("#course-content", [
  {
    rule: "required",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 20,
  },
]);
validate.addField("#content-type", [
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
]);
validate.addField("#author-name", [
  {
    rule: "reqired",
  },
  {
    rule: "maxLength",
    value: 20,
  },
  {
    rule: "minLength",
    value: 3,
  },
]);
validate.addField("#time-length", [
  {
    rule: "required",
  },
]);
validate.addField("#notes", [
  {
    rule: "required",
  },
]);
