import { Link } from "react-router-dom";
import propTypes from "prop-types"

const Interns = ({name, des, gitHubName}) => {
    return (
        <div>
        <div className="flex justify-between items-center space-x-6 bg-[#ffb703] max-w-4xl mx-auto p-4 rounded">
          <div className="flex items-center space-x-6">
          <img src={`https://github.com/${gitHubName}.png`} alt="profile-pic" className="object-contain rounded-full border-4 border-[#219ebc] w-32 h-32"></img>
          <div className="flex flex-col items-center space-y-2 text-xl font-semibold">
              <span>{ name}</span>
              <span>{ des}</span>
          </div>
         </div>
          <div>
            <span className="bg-[#219ebc] p-2 rounded font-semibold hover:cursor-pointer hover:bg-[#023047] hover:text-white"><Link to={`https://github.com/${gitHubName}`} target="blank">GitHub</Link></span>
          </div>
        </div>
     </div>
    )
}

Interns.propTypes = {
  name: propTypes.string,
  designation: propTypes.string,
  gitHubName: propTypes.string
}

export default Interns