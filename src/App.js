import Tracker from "./components/Tracker"
import { useState } from "react";

function App() {

  const [ showWW, setShowWW ] = useState(true)

  function toggleShow() {
    setShowWW(prevShow=>!prevShow)
  }

  return (
    <div className="container">
      <button className="toggle bg-white px-10 py-4 text-lg mx-auto block mt-20 mb-10 hover:bg-red-500 hover:text-white hover:transition rounded-lg" onClick={toggleShow}>Toggle Window Tracker</button>
      <Tracker 
        toggleWidth={showWW}
      />
    </div>
  );
}

export default App;
