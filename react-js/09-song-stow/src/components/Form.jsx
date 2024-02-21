import FormInput from "../components/FormInput";
import ButtonShuffle from "./ButtonShuffle";
import ButtonUpload from "./ButtonUpload";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const songFormSchema = z.object({
  songName: z.string().min(3).max(120),
  movieName: z.string().min(1).max(120),
  songLink: z.string().url(),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(songFormSchema),
  });

  const submitInput = (data) => {
    console.log(data);
  };


  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitInput)}>
        <FormInput
          id="songName"
          name="songName"
          label="Enter your favourite song name"
          placeholder="Enter the song name"
          register={register("songName")}
          error={errors.songName}
          required
        />
        <FormInput
          id="movieName"
          name="movieName"
          label="Enter your name of the song"
          placeholder="Enter the movie name"
          register={register("movieName")}
          error={errors.movieName}
          required
        />
        <FormInput
          id="songLink"
          name="songLink"
          label="Enter YT link of the song"
          placeholder="Enter URL link here"
          type="url"
          register={register("songLink")}
          error={errors.songLink}
          required
        />
        <div className="flex items-center space-x-2 font-semibold">
          <ButtonUpload />
          <ButtonShuffle />
        </div>
      </form>
    </div>
  );
};

export default Form;
