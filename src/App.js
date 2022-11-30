import logo from "./logo.svg";
import "./App.css";
import ProjectedCash from "./components/projectedCash";
import ActualCash from "./components/actualCash";
import { useState } from "react";
import Total from "./components/total";

function App() {
  const [projectedTotal, setProjectedTotal] = useState([]);
  const [actualTotal, setActualTotal] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputFields, setInputFields] = useState([
    { projectedCash: null, actualCash: null },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(!isSubmit);
    console.log(inputFields);
  };
  const addFields = () => {
    let newfield = { projectedCash: null, actualCash: null };
    setInputFields([...inputFields, newfield]);
  };
  const handleFormChange = (index, event) => {
    parseInt(event.target.value);
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };

  return (
    <div className="deposit-container">
      <button onClick={addFields}>Add more?</button>
      <form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div className="deposit-column" key={index}>
              <input
                type="number"
                name="projectedCash"
                placeholder="Projected Cash"
                value={input.projectedCash}
                onChange={(event) => handleFormChange(index, event)}
              ></input>
              <input
                type="number"
                name="actualCash"
                placeholder="Actual Cash"
                value={input.actualCash}
                onChange={(event) => handleFormChange(index, event)}
              ></input>
            </div>
          );
        })}

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
