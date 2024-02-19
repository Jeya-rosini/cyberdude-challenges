import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput";
import TheNavbar from "./components/TheNavbar";
import { useState } from "react";

// get the form input using register to store it in server and can view in console log
// get the input value using useState hook
// handle it with setValue of the hook
// display it in list form

const App = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [value, setValue] = useState([]);

  const submit = (data) => {
    setValue([data, ...value]);
  };

  const deleteInput = (data) => {
    const updatedData = value.filter((list) => {
      return list !== data;
    });
    setValue(updatedData);
  };

  const dreamList = value.map((list, index) => {
    return (
      <li
        key={index}
        className="p-2 mt-2 text-white font-semibold flex items-center space-x-4 justify-between bg-slate-400 rounded "
      >
        <div className="flex items-center space-x-2">
          <span>{index + 1}</span>
          <span>{list.dream}</span>
        </div>
        <div>
          <button
            onClick={() => {
              deleteInput(list);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"
              />
            </svg>
          </button>
        </div>
      </li>
    );
  });

  return (
    <div>
      <TheNavbar />
      <div className="grid grid-cols-2 gap-x-4 p-6 rounded m-6">
        <form
          className="m-4 p-2 h-64 space-y-4"
          onSubmit={handleSubmit(submit)}
        >
          <FormInput
            id={"dream"}
            name={"dream"}
            placeholder={"Enter your dream here"}
            type={"text"}
            register={register("dream")}
            required
          />
          <button className=" flex items-center font-semibold p-2 rounded hover:cursor-pointer bg-[#121D20] hover:bg-gray-600 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-white"
            >
              <path d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z" />
            </svg>
            Add
          </button>
        </form>
        <div className="text-white bg-[#121D20] m-6 p-2 rounded ">
          <ul className="font-semibold text-lg text-center list-disc">
            <span className="underline underline-offset-4">
              Dreams to Achieve
            </span>
            <div className="p-2">
              {value.length > 0 ? <div>{dreamList}</div> : "No dreams yet☹"}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
