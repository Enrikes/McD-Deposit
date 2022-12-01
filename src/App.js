import logo from "./logo.svg";
import "./App.css";
import ProjectedCash from "./components/projectedCash";
import ActualCash from "./components/actualCash";
import { useEffect, useState } from "react";
import Total from "./components/total";

function App() {
  let [projectedTotal, setProjectedTotal] = useState();
  const [actualTotal, setActualTotal] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputFields, setInputFields] = useState([
    { projectedCash: "", actualCash: "" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    let sum = 0;
    inputFields.map((rawProjectedTotal) => {
      let convertedTotal = parseFloat(rawProjectedTotal.projectedCash);
      sum += convertedTotal;
      setProjectedTotal(sum);
    });
  };

  const addFields = () => {
    let newfield = { projectedCash: "", actualCash: "" };
    setInputFields([...inputFields, newfield]);
  };
  const handleFormChange = (index, event) => {
    parseInt(event.target.value);
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const projectedDeposit = (index) => {
    const projectedCash = parseFloat(inputFields[index].projectedCash);
    const nextProjectedCash = parseFloat(inputFields[index + 1]?.projectedCash);

    return projectedCash + nextProjectedCash;
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
              <div className="total">
                Projected Deposit:{projectedDeposit(index)}
              </div>
            </div>
          );
        })}
        <div className="total">Projected Deposit:{projectedTotal}</div>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
