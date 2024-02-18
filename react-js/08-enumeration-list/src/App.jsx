import { useForm } from "react-hook-form";
import FormInput from "./components/FormInput";
import TheNavbar from "./components/TheNavbar";
import { useRef, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const submitschema = z.object({
  dream: z.string().min(3).max(20),
});

const App = () => {
    const [addItems, setAddItems] = useState([]);
    const resetForm = useRef();

    const handleReset = (data) => {
        setAddItems([data, ...addItems])
        resetForm.current.reset();
}

    
    const handleDeleteItem = (index) => {
        const newItems = addItems.filter((i)=>{ return i != index});
        setAddItems(newItems);
    };

  const {
    register,
    formState: errros,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(submitschema),
  });

    
    const dataItems = addItems.map((item, index) => {
        return (
            <li
                key={index}
                className="flex items-center justify-around space-x-4"
            >
                <div>
                    <span>&bull;{item} </span>
                </div>
                <div>
                    <span onClick={() => handleDeleteItem(index)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            className="fill-white"
                     
                        >
                            <path
                                fill="currentColor"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5 11H7v-2h10z"
                            />
                        </svg>
                    </span>
                </div>
            </li>
        )
    });

  return (
    <div>
      <TheNavbar />
      <div className="grid grid-cols-2 gap-x-4 p-6 rounded m-6">
        <form
          onSubmit={handleSubmit(handleReset)}
                  className="m-4 p-2 h-64 space-y-4"
                  ref={resetForm}
        >
          <FormInput
            id={"dream"}
            name={"dream"}
            placeholder={"Enter your dream here"}
            type={"text"}
            value={addItems}
            register={register("dream")}
            error={errros.dream}
                      
          />
          <button
            type="submit"
            className=" flex items-center font-semibold p-2 rounded hover:cursor-pointer bg-[#121D20] hover:bg-gray-600 text-white"
          >
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
              <div className={`text-white bg-[#121D20] m-6 p-2 rounded ${addItems.length === 0 ? "hidden" : ""}`}>
          <ul
            className={`font-semibold text-lg list-disc p-6 ${
              addItems.length === 0 ? "hidden" : ""
            }`}
          >
            {dataItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
