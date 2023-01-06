import "./App.css";
import ProjectedCash from "./components/projectedCash";
import ActualCash from "./components/actualCash";
import { useEffect, useState } from "react";
import Total from "./components/total";
import ReactTable, { useTable } from "react-table";
import Difference from "./components/difference";
import Refunds from "./components/refund";
import Promos from "./components/promo";

function App() {
  let [projectedTotal, setProjectedTotal] = useState();
  const [actualTotal, setActualTotal] = useState([]);
  const [refunds, setRefunds] = useState([]);
  const [refundAmount, setRefundAmount] = useState([]);

  const [isSubmit, setIsSubmit] = useState(false);
  const [inputFields, setInputFields] = useState([
    { projectedCash: "", actualCash: "", refunds: "", refundTotal: "" },
  ]);
  const [difference, setDifference] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(!isSubmit);
    let sum = 0;
    let actualCashSum = 0;
    inputFields.map((rawProjectedTotal) => {
      console.log(rawProjectedTotal);
      let convertedProjectedTotal = parseFloat(rawProjectedTotal.projectedCash);
      let convertedActualTotal = parseFloat(rawProjectedTotal.actualCash);
      let convertedRefund = parseFloat(rawProjectedTotal.refunds);
      let convertedRefundTotal = parseFloat(rawProjectedTotal.refundTotal);
      console.log(convertedRefund);
      actualCashSum += convertedActualTotal;

      sum += convertedProjectedTotal;
      setProjectedTotal(sum);
      setActualTotal(actualCashSum);
    });
    setDifference();
  };
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });

  const addFields = () => {
    let newfield = {
      projectedCash: "",
      actualCash: "",
      refunds: "",
      refundTotal: "",
    };
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
      <form className="form-container" onSubmit={handleSubmit}>
        <div>
          <h4>Projected Cash</h4>
          <h4>Actual Cash</h4>
          <h4>Difference +/-</h4>
        </div>
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
              <Difference rawDifference={inputFields} index={index} />
              <Refunds
                refunds={input.refunds}
                redundAmount={input.refundTotal}
                onChange={handleFormChange}
                index={index}
              />
              <Promos />
            </div>
          );
        })}
        <div>
          <div className="total">Projected Deposit:{projectedTotal}</div>
          <div className="total">Actual Deposit:{actualTotal}</div>
          <div className="total">Total Difference:{difference}</div>
          <div className="total">Refunds:{refunds}</div>
          <div className="total">Refund Amount:{refundAmount}</div>
        </div>

        <input type="submit" value="Submit"></input>
      </form>
      <div className="total">Projected Deposit:{projectedTotal}</div>
      <div className="total">Actual Deposit:{actualTotal}</div>
    </div>
  );
}

export default App;
