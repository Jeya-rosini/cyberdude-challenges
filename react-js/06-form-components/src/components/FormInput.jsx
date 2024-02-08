import propTypes from "prop-types";

const FormInput = ({ id, label, type, placeholder, value, handleOnSubmit,required }) => {
    // console.log(value);
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-lg font-semibold text-white">
              {label} 
              {required ? <span className="text-red-500 ml-1">*</span>: ""}
      </label>
      <input
              id={id}
              name={id}
        type={type}
        placeholder={placeholder}
        value={value}
              onChange={handleOnSubmit}
              required
        className="outline-none p-2 w-full rounded mt-2"
      />
    </div>
  );
};

FormInput.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  handleOnSubmit: propTypes.func,
};

export default FormInput;
