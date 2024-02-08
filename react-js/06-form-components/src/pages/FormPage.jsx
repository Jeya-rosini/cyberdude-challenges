import { useState } from "react";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import SubmitButton from "../components/SubmitButton";

const FormPage = () => {
  const [form, setForm] = useState({
    fullName: "",
    location: "",
    songName: "",
      movieName: "",
      dedication: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
    };
    
    const submitForm = (e) => {
        e.preventDefault();
        console.log(form);
    }

  return (
    <div className="bg-slate-600 bg-opacity-50 max-w-3xl mx-auto rounded p-2 mb-8">
      <div className="bg-[url('https://www.pngkey.com/png/full/2-24489_musical-note-clip-art-border-clip-art-music.png')] bg-cover bg-no-repeat p-4">
        <form className="m-4 gap-y-6" action="" onSubmit={submitForm}>
          <FormInput
            id="fullName"
            label="Your name"
            placeholder="Enter your name"
            type="text"
            value={form.fullName}
                      handleOnSubmit={handleInput}
                      required
          />
          <FormInput
            id="location"
            label="Your location"
            placeholder="Enter your location"
            type="text"
            value={form.location}
            handleOnSubmit={handleInput}
          required
                  />
          <div className="grid grid-cols-2 gap-x-6 mt-2">
            <FormInput
              id="songName"
              label="Song you want to hear"
              placeholder="Song name"
              type="text"
              value={form.songName}
                          handleOnSubmit={handleInput}
                          required
            />
            <FormInput
              id="movieName"
              label="Movie name of the song"
              placeholder="Movie name"
              type="text"
              value={form.movieName}
                          handleOnSubmit={handleInput}
                          required
            />
          </div>
                  <FormTextArea
                      id="dedication"
                      label="Dedicated to with message"
                      placeholder="Dedication"
                      value={form.dedication}
                                  handleOnSubmit={handleInput}
                                  required
                  />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default FormPage;
