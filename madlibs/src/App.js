import Madlibs from "./Madlibs";
import "./App.css";
import FAQ from "./imgs/FAQ.svg";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1 className="App-h1">Mad Libs</h1>
        <img className="App-svg" width={120} src={FAQ}></img>
        <Madlibs />
      </div>
    </div>
  );
}

export default App;
