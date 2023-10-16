import { useState } from "react";


function App() {
  const [ratio, setRatio] = useState(0);
  function PlusRatio() {
    setRatio(ratio + 1);
    console.log("RATIO +1");
    console.log("ratio ir " + ratio);
  }
  const [nratio, setNratio] = useState(0);
  function NegativeRatio() {
    setNratio(nratio - 1);
    console.log("NRATIO - 1");
    console.log("nratio ir" + nratio);
  }
  const [gratio, setGratio] = useState(0);
  function GuestRatio() {
    
  }
  return ( 
  <div className="App">
    <button onClick={PlusRatio}>RATIO +1</button>
    <button onClick={NegativeRatio}>RATIO -1</button>
    <h1>{ratio}</h1>
    <h2>{nratio}</h2>
  </div>
  );
}

export default App;
