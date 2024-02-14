import propTypes from "prop-types";

const FormTextArea = ({ id, placeholder, register, error, required }) => {
  return (
    <div className="mt-2">
      <label htmlFor="dedication" className="text-lg font-semibold text-white">
        Dedication to
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        {...register}
        className="outline-none p-2 w-full rounded mt-2"
      >
        {error && <small className="text-red-500"> {error.message}</small>}
      </textarea>
    </div>
  );
};

FormTextArea.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  placeholder: propTypes.string,
  type: propTypes.string,
  register: propTypes.object,
  error: propTypes.object,
};

export default FormTextArea;
