import Tracker from "./components/Tracker"
import { useState } from "react";

function App() {

  const [ showWW, setShowWW ] = useState(true)

  function toggleShow() {
    setShowWW(prevShow=>!prevShow)
  }

  return (
    <div className="containerBody">
      <button className="toggle" onClick={toggleShow}>Toggle Window Tracker</button>
      <Tracker 
        toggleWidth={showWW}
      />
    </div>
  );
}

export default App;
