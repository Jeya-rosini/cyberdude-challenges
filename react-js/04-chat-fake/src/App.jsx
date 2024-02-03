import "./App.css";
import { useState } from "react";

const App = () => {
  const [rName, setRname] = useState("Recipent Name");
  // console.log(rName, setRname);

  const setRnameMethod = (e) => {
    const rValue = e.target.value;
    if (rValue.length >= 3) {
      setRname(rValue)
    } else {
      setRname("Name")
   }
  }

  const [status, setStatus] = useState("status");
  const setStatusMethod = (e) => {
    const statusValue = e.target.value;
    setStatus(statusValue);
  }
  
  const [rText, setRtext] = useState("Recipent Text");
  const setRtextMethod = (e) => {
    const RtextValue = e.target.value;
    setRtext(RtextValue);
  }

  const [text, setText] = useState("Your Text");
  const setTextMethod = (e) => {
    const textValue = e.target.value;
    setText(textValue);
  }

  const [rTime, setRtime] = useState("time");
  const setRtimeMethod = (e) => {
    const rTimeValue = e.target.value;
    setRtime(rTimeValue);
  }

  const [time, setTime] = useState("time");
  const setTimeMethod = (e) => {
    const timeValue = e.target.value;
    setTime(timeValue);
  }

  const [image, setImage] = useState("https://static.vecteezy.com/system/resources/previews/026/306/400/original/user-icon-profile-social-account-person-man-character-member-contact-people-black-white-sign-symbol-illustration-artwork-graphic-clipart-eps-vector.jpg");
  const setImageMethod = (e) => {
    const imageValue = e.target.value;
    setImage(imageValue)
}

  return (
    <div className="grid grid-cols-2 p-4">
      <div>
        <div className="text-center m-4 p-2">
          <h3 className="text-2xl font-bold font-protest tracking-wide">
            Let's show your chat
          </h3>
        </div>
        <div className="bg-[#D8F3DC] rounded p-2 m-4 space-y-2">
          <div className="p-2 m-2 space-y-2">
            <label className="text-lg font-semibold">
              Enter your recipent Name
            </label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full p-2 rounded outline-none capitalize"
              autoFocus
              onChange={setRnameMethod}
            ></input>
          </div>
          <div className="p-2 m-2 space-y-2">
            <label className="text-lg font-semibold">Paste your photo</label>
            <input
              type="url"
              placeholder="Paste your image url"
              className="w-full p-2 rounded outline-none"
              onChange={setImageMethod}
            ></input>
          </div>
          <div className="p-2 m-2 space-y-2">
            <label className="text-lg font-semibold">Enter your status</label>
            <input
              type="text"
              placeholder="Enter your status"
              className="w-full p-2 rounded outline-none"
              onChange={setStatusMethod}
            ></input>
          </div>
          <div className="p-2 m-2 space-y-2">
            <label className="text-lg font-semibold">Enter your text</label>
            <input
              type="text"
              placeholder="Enter your text"
              className="w-full p-2 rounded outline-none"
              onChange={setTextMethod}
            ></input>
          </div>
          <div className="p-2 m-2 space-y-2">
            <label className="text-lg font-semibold">
              Enter your recipent text
            </label>
            <input
              type="text"
              placeholder="Enter your text"
              className="w-full p-2 rounded outline-none"
              onChange={setRtextMethod}
            ></input>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-2 m-2 space-y-2">
              <label className="text-lg font-semibold">Your time</label>
              <input
                type="time"
                placeholder="Enter your text"
                className="w-full p-2 rounded outline-none"
                onChange={setTimeMethod}
              ></input>
            </div>
            <div className="p-2 m-2 space-y-2">
              <label className="text-lg font-semibold">Recipent time</label>
              <input
                type="time"
                placeholder="Enter your text"
                className="w-full p-2 rounded outline-none"
                onChange={setRtimeMethod}
              ></input>
            </div>
          </div>
        </div>
      </div>
      {/* whatsapp chat page */}
      <div className="bg-slate-100 m-4 p-2">
        <div>
          <h3 className="text-2xl text-center font-bold">Preview</h3>
        </div>
        <div className="m-4 rounded">
          <div className="bg-[#2D6A4F] p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H109.3l105.3-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                />
              </svg>
              <div className="flex-col justify-start">
                <h4 className="text-xl text-white font-bold capitalize">{rName != "" ? rName : "Name"}</h4>
                <p className="text-md text-white">{ status }</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="m18 16l-4-3.2V16H6V8h8v3.2L18 8m2-4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  stroke="#ffffff"
                  strokeLinejoin="round"
                  strokeWidth="3.75"
                  d="M12 12h.01v.01H12zm0-7h.01v.01H12zm0 14h.01v.01H12z"
                />
              </svg>
            </div>
          </div>
          <div className="h-80 bg-gray-200">
            <div className="max-w-lg mx-auto pt-4 pl-2 pb-1">
              <div className="relative">
                <div className="border-none rounded-tr-lg rounded-br-lg rounded-bl-lg bg-[#B7E4C7] p-2 max-w-xs flex justify-start items-center">
                  <img
                    src={image}
                    alt="image"
                    className="rounded-full w-10 h-10 border-2"
                  ></img>
                  <div className="leading-0.9 flex-1 space-x-2 p-2">
                    <span>{rText }</span>
                  </div>
                  <div className="items-right justify-end">
                    <span className="text-xs text-gray-700">{rTime}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" max-w-lg mx-auto pt-4 pl-2 pb-1 flex justify-end items-end">
              <div className="relative m-1">
                <div className="border-none rounded-tl-lg rounded-bl-lg rounded-br-lg bg-green-300 p-2 max-w-xs flex justify-start items-center">
                  <div>
                    <span className="m-1">{ text}</span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  <span>{time }</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
