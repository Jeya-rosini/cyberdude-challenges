import propTypes from "prop-types";

const FormInput = ({ id, label, type = "text", placeholder,register, error, required }) => {
  // console.log(value);
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-lg font-semibold text-white">
        {label}
        {required ? <span className="text-red-500 ml-1">*</span> : ""}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        {...register}
        className="outline-none p-2 w-full rounded mt-2"
      />
      {error && <small className="text-red-500 ">{ error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  register: propTypes.object,
  required: propTypes.bool,
  error: propTypes.object
};

export default FormInput;
