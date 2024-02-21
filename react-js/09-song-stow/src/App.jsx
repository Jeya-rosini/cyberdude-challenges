import About from "./components/About";
import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import TheNavbar from "./components/TheNavbar";

const App = () => {

  return (
    <div>
      <TheNavbar />
      <div className="max-w-4xl mx-auto m-4 bg-[#F4845F] rounded p-2">
        <About />
        <div className="bg-opacity-55 bg-slate-200 p-2 rounded m-2 mb-2">
         <FormHeader/>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
