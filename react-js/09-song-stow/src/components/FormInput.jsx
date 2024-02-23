import propTypes from "prop-types";

const FormInput = ({ label, value, type = "text", placeholder, id, register, error }) => {
  return (
    <div className="space-y-2 p-2">
      <label className="font-semibold">{label}</label>
      <input
        name={id}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        {...register}
        className="p-2 rounded bg-slate-100 w-full outline-none"
          ></input>
          {error && <small className="text-red-700">{ error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  label: propTypes.string,
  id: propTypes.string,
  type: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
};

export default FormInput;
