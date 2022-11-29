import logo from "./logo.svg";
import "./App.css";
import ProjectedCash from "./components/projectedCash";
import ActualCash from "./components/actualCash";
import { useState } from "react";
import Total from "./components/total";

function App() {
  const [projectedTotal, setProjectedTotal] = useState([]);
  const [actualTotal, setActualTotal] = useState([]);

  const [inputList, setInputList] = useState([]);

  function handleProjectedTotal() {}
  const Column = () => {
    return (
      <div className="deposit-column">
        <ProjectedCash setProjectedArray={setProjectedArray} />
        <ActualCash setActualArray={setActualArray} />
      </div>
    );
  };
  const onAddBtnClick = (event) => {
    setInputList(inputList.concat(<Column key={inputList.length} />));
  };
  function setProjectedArray(total) {
    setProjectedTotal((current) => [...current, total]);
  }
  function setActualArray(total) {
    setActualTotal((current) => [...current, total]);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div className="deposit-container">
      <button onClick={onAddBtnClick}>Add more?</button>
      <form onSubmit={handleSubmit}>
        <div className="deposit-column">
          <ProjectedCash setProjectedArray={setProjectedArray} />

          <ActualCash setActualArray={setActualArray} />
          <Total total={projectedTotal} />
        </div>
        <div className="deposit-column">
          <ProjectedCash setProjectedArray={setProjectedArray} />
          <ActualCash setActualArray={setActualArray} />
        </div>

        {inputList}
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
