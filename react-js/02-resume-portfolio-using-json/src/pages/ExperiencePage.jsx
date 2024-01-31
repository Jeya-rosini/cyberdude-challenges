import TheSidebar from "../components/TheSideBar";
import resume from "../data/resume.json";

const ExperiencePage = () => {
  return (
    <div>
      <div className="w-6xl flex space-x-4">
        <TheSidebar />
        <div>
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ee9b00"
                d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"
              />
            </svg>
            <h4 className="font-bold text-[#ee9b00] underline underline-offset-4 text-xl">Experience</h4>
                  </div>
                  <div className="m-2 p-2 bg-gray-400 bg-opacity-55 rounded w-100">
                      <ul>
                          <li className="flex items-center space-x-2">
                              <p className="font-semibold text-white text-lg">Title : </p>
                              <span className="font-medium text-lg italic text-[#001219] p-1 rounded">{resume[0].Experience.Title}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                              <p className="font-semibold text-white text-lg">Job : </p>
                              <span className="font-medium text-lg italic text-[#001219] p-1 rounded">{resume[0].Experience.Job}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                              <p className="font-semibold text-white text-lg">Company : </p>
                              <span className="font-medium text-lg italic text-[#001219] p-1 rounded">{resume[0].Experience.Place}</span>
                          </li>
                          <li className="flex items-center space-x-2">
                              <p className="font-semibold text-white text-lg">Period : </p>
                              <span className="font-medium text-lg italic text-[#001219] p-1 rounded">{resume[0].Experience.Period}</span>
                          </li>
                      </ul>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
