import FormInput from "../components/FormInput";
import ButtonUpload from "./ButtonUpload";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const songFormSchema = z.object({
  songName: z.string().min(3).max(120),
  movieName: z.string().min(1).max(120),
  songLink: z.string().url(),
});

const Form = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(songFormSchema),
  });

  const submitInput = async (data) => {
    // console.log(data);
    try {
      const docRef = await addDoc(collection(db, "Favorite songs"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    reset();
  };

  // const getVideoId = () => {
  //   const regex =
  //     /(?<=v=|\/v\/|\/embed\/|youtu.be\/|\/v=|\/embed=|youtu.be=|\/v\/|\/e\/|watch\?v=|v%3D|^youtu.be\/|embed\/|watch\?v=|\?v=)([^#\\&\\?]+).*/;
  //   const match = url.match(regex);
  //   return match && match[1];
  //   // console.log(match && match[1]);
  // };
  // console.log(getVideoId);
  // // const thumbnailUrl = `https://i3.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  // const handleChange = (e) => {
  //   setUrl(e.target.value);
  //   console.log(e.target.value);
  // };

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
          type="text"
          register={register("songLink")}
          error={errors.songLink}
          required
        />

        <div className="flex items-center space-x-2 font-semibold">
          <ButtonUpload />
        </div>
      </form>
    </div>
  );
};

export default Form;
