import { useEffect, useState } from "react";
import About from "./components/About";
import Form from "./components/Form";
import FormHeader from "./components/FormHeader";
import TheNavbar from "./components/TheNavbar";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import DeleteSong from "./components/DeleteSong";
import ButtonShuffle from "./components/ButtonShuffle";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [del, setDel] = useState(false);
  // const [shuffle, setShuffle] = useState();

  function shuffle() {
    if(songs.length > 0) {
    let array = songs.length, temp, index;
    while (array > 0) {
      index = Math.floor(Math.random() * array);
      array--;
      temp = songs[array];
      songs[array] = songs[index];
      songs[index] = temp;
    }
    console.log(songs);
    return songs
    
  }
  }
  shuffle();

  useEffect(() => {
    async function getInput() {
      const querySnapshot = await getDocs(collection(db, "Favorite songs"));
      // console.log(querySnapshot);
      const list = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const data = { ...getData, id: getId };
        return data;
      });
      setSongs(list);
      // console.log(list);
    //  console.log(songs);
      if (querySnapshot.docs.length === 0) {
        alert("No songs has been recorded");
      }
    }
    getInput();
  }, [del]);

  const mapSongs = songs.map((song, index) => {
    const delData = async () => {
      await deleteDoc(doc(db, "Favorite songs", song.id));
      setDel(!del);
    };
    return (
      <tbody key={index}>
        <tr>
          <td className="p-2 border-2 border-[#F25C54] rounded w-20">
            {index + 1}
          </td>
          <td className="p-2 border-2 border-[#F25C54] rounded">
            {song.songName}
          </td>
          <td className="p-2 border-2 border-[#F25C54] rounded">
            {song.movieName}
          </td>
          <td className="p-2 border-2 border-[#F25C54] rounded">
            {song.songLink}
          </td>
          <td className="p-2 border-2 border-[#F25C54] rounded">
            <DeleteSong onClick={delData} />
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <TheNavbar />
      <div className="max-w-4xl mx-auto m-4 bg-[#F4845F] rounded p-2">
        <About />
        <div className="bg-opacity-55 bg-slate-200 p-2 rounded m-2 mb-2">
          <FormHeader />
          <Form />
        </div>
      </div>
      <section className="mt-10 mb-5 bg-slate-200 max-w-4xl mx-auto rounded p-4 bg-opacity-55">
        <div className="p-2 m-2 text-center">
          <h2 className="font-bold text-xl text-[#000000]">
            List of Favorites
          </h2>
        </div>
        <table
          className="border-2 text-black border-[#F25C54] text-center table-auto max-w-4xl mx-auto bg-[#F7B267] bg-opacity-75 w-full"
          id="tableContent"
          name="tableContent"
        >
          <thead className="bg-[#F27059]">
            <tr className=" p-2 border-2 border-[#F25C54] rounded">
              <th className="p-2 border-2 border-[#F25C54] rounded w-20">
                S. No.
              </th>
              <th className="p-2 border-2 border-[#F25C54] rounded">
                Song Name
              </th>
              <th className="p-2 border-2 border-[#F25C54] rounded">
                Movie Name
              </th>
              <th className="p-2 border-2 border-[#F25C54] rounded">YT Link</th>
              <th className="p-2 border-2 border-[#F25C54] rounded">Options</th>
            </tr>
          </thead>
          {mapSongs}
        </table>
        <ButtonShuffle onClick={shuffle}/>
      </section>
    </div>
  );
};

export default App;
