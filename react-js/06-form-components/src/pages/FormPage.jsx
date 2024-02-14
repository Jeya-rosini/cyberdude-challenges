import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import SubmitButton from "../components/SubmitButton";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


const formschema = z.object({
  fullName: z.string().min(3).max(30),
  location: z.string().min(2).max(40),
  songName: z.string().min(3).max(60),
movieName: z.string().min(1)
})

const FormPage = () => {

  const { register,
    formState: { errors },
    handleSubmit }
    = useForm({
      resolver: zodResolver(formschema)
    });
  
  const onSubmit = (data) => {
    console.log("The input of the form is pushed to the server :", data);
  }
   
  return (
    <div className="bg-slate-600 bg-opacity-50 max-w-3xl mx-auto rounded p-2 mb-8">
      <div className="bg-[url('https://www.pngkey.com/png/full/2-24489_musical-note-clip-art-border-clip-art-music.png')] bg-cover bg-no-repeat p-4">
        <form className="m-4 gap-y-6" action="" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            id="fullName"
            label="Your name"
            placeholder="Enter your name"
            register={register("fullName")}
            error={errors.fullName}
            required
          />
          <FormInput
            id="location"
            label="Your location"
            placeholder="Enter your location"
            register={register("location")}
            error={errors.location}
            required
          />
          <div className="grid grid-cols-2 gap-x-6 mt-2">
            <FormInput
              id="songName"
              label="Song you want to hear"
              placeholder="Song name"
              register={register("songName")}
              error={errors.songName}
              required
            />
            <FormInput
              id="movieName"
              label="Movie name of the song"
              placeholder="Movie name"
              register={register("movieName")}
              error={errors.movieName}
              required
            />
          </div>
          <FormTextArea
            id="dedication"
            label="Dedicated to with message"
            placeholder="Dedication"
            register={register("dedication")}
            error={errors.dedication}
            required
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default FormPage;
