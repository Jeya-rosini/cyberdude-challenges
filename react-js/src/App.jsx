import TheNavbar from "./components/TheNavbar";
import React from "react";
import HomePage from "./pages/HomePage";
import TheFooter from "./components/TheFooter"


function App() {
    return (
        <>
            <div>
                <TheNavbar/>
            </div>
            
            <div className="mt-2">
            <TheFooter/>
     </div>
        </>
    );
}

export default App;