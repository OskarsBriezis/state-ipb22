import { useState } from "react";


function App() {
  const [ratio, setRatio] = useState(0);
  const [ratioChange, setRatioChange] = useState(1);
  function PlusRatio() {
    setRatio(ratio + 1);
    console.log("RATIO +1");
    console.log("ratio ir " + ratio);
  }
  const [nratio, setNratio] = useState(0);
  function NegativeRatio() {
    setNratio(nratio - ratioChange);
  }
  function handleRatioChange(event) {
    setRatioChange(event.target.value);
  }
  return ( 
  <div className="App">
    <input type="number" value={ratioChange} onChange={handleRatioChange}></input>
    <button onClick={PlusRatio}>RATIO +{ratioChange}</button>
  <button onClick={NegativeRatio}>RATIO -{ratioChange}</button>
    <h1>{ratio}</h1>
  </div>
  );
}

export default App;
