import { Link } from "react-router-dom";

const TheNavbar = () => {

  return (
    <div className="bg-[#F25C54] p-6 ">
      <div className="flex justify-between items-center space-x-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
          viewBox="0 0 24 24"
          className="hover:cursor-pointer hover:fill-[#F7B267] fill-black"
          >
            <path
              fillRule="evenodd"
              d="M20.707 1.293A1 1 0 0 0 19 2v4.17A3 3 0 1 0 21 9V4.414l.293.293a1 1 0 1 0 1.414-1.414zM12 4a8 8 0 1 0 7.72 10.105a1 1 0 1 1 1.93.524C20.497 18.876 16.615 22 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2c1.3 0 2.545.249 3.687.702a1 1 0 0 1-.738 1.859A7.976 7.976 0 0 0 12 4m0 7a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0"
              clipRule="evenodd"
            />
          </svg>
          <h2 className="text-4xl text-center font-bold">SongStow</h2>

        <div className="space-x-4">
          <span className="border-2 border-[#F7B267] p-2 rounded font-semibold bg-[#F7B267] hover:bg-[#F4845F] hover:border-[#F4845F] hover:cursor-pointer">
            <Link
              to="https://github.com/Jeya-rosini/cyberdude-challenges"
              target="blank"
            >
              GitHub
            </Link>
          </span>
          <span className="border-2 border-[#F7B267] p-2 rounded font-semibold bg-[#F7B267] hover:bg-[#F4845F] hover:border-[#F4845F] hover:cursor-pointer">
            <Link
              to="https://www.linkedin.com/in/jeya-rosini-a4255421a/"
              target="blank"
            >
              LinkedIn
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TheNavbar;
