import logo from "./logo.svg";
import "./App.css";
import ProjectedCash from "./components/projectedCash";
import ActualCash from "./components/actualCash";
import { useState } from "react";
import Total from "./components/total";

function App() {
  const [projectedTotal, setProjectedTotal] = useState([]);
  const [inputList, setInputList] = useState([]);

  function handleProjectedTotal() {}
  const Column = () => {
    return (
      <div className="deposit-column">
        <ProjectedCash setProjectedArray={setProjectedArray} />
        <ActualCash setProjectedArray={setProjectedArray} />
      </div>
    );
  };
  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Column key={inputList.length} />));
  };
  function setProjectedArray(total) {
    setProjectedTotal((current) => [...current, total]);
  }

  return (
    <div className="deposit-container">
      <button onClick={onAddBtnClick}>Add more?</button>
      <form>
        <div className="deposit-column">
          <ProjectedCash setProjectedArray={setProjectedArray} />

          <ActualCash setProjectedArray={setProjectedArray} />
          <Total total={projectedTotal} />
        </div>
        <div className="deposit-column">
          <ProjectedCash setProjectedArray={setProjectedArray} />
          <ActualCash setProjectedArray={setProjectedArray} />
        </div>
        {inputList}
      </form>
    </div>
  );
}

export default App;
