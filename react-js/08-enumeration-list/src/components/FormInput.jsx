import propTypes from "prop-types";

const FormInput = ({ type, id, placeholder, value, register, error }) => {
  return (
    <div>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
      value={value}
        {...register}
        className="bg-[#C8AFA8] text-black w-full placeholder:text-black p-2 rounded outline-none font-semibold"
      />
       {error && <small className="text-red-500 ">{ error.message}</small>}
    </div>
  );
};

FormInput.propTypes = {
  type: propTypes.string,
  name: propTypes.string,
  id: propTypes.string,
  placeholder: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
};

export default FormInput;
