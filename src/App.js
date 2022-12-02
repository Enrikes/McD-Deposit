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
    setIsSubmit(!isSubmit);
    let sum = 0;
    let actualCashSum = 0;
    inputFields.map((rawProjectedTotal) => {
      let convertedTotal = parseFloat(rawProjectedTotal.projectedCash);
      sum += convertedTotal;
      let convertedProjectedTotal = parseFloat(rawProjectedTotal.projectedCash);
      let convertedActualTotal = parseFloat(rawProjectedTotal.actualCash);
      actualCashSum += convertedActualTotal;

      sum += convertedProjectedTotal;
      setProjectedTotal(sum);
      setActualTotal(actualCashSum);
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
      <form className="form-container" onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div className="deposit-column" key={index}>
              <ProjectedCash
                projectedCash={input.projectedCash}
                onChange={handleFormChange}
                index={index}
              />
              <ActualCash
                actualTotal={input.actualCash}
                onChange={handleFormChange}
                index={index}
              />
            </div>
          );
        })}
        <div className="total">Projected Deposit:{projectedTotal}</div>
        <div className="total">Actual Deposit:{actualTotal}</div>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default App;
