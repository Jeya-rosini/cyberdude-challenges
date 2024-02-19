import TheNavbar from "./components/TheNavbar";
import Interns from "./components/InternsDisplay";
import { useEffect, useState } from "react";

const App = () => {
  const [interns, setInterns] = useState([]);
  
  useEffect(() => {
     async function fetchList() {
       const fetchData = await fetch("/api");
       const data = await fetchData.json();
       console.log(data);
       setInterns(data)
     }
    fetchList();
  }, [])

  const mapData = interns.map((intern) => {
    return (
      <div className="p-2 font-anta tracking-widest">
        <Interns
          key={intern.id}
          name={intern.name}
          des={intern.designation}
          gitHubName={intern.gitHubName}
        />
      </div>
    );
  });

  return (
    <div className="mb-6">
      <TheNavbar />
      
      <h4 className="m-4 p-2 text-white font-anta tracking-wider text-center font-bold text-3xl">List of Interns</h4>
          {mapData}
    </div>
  );
};

export default App;
