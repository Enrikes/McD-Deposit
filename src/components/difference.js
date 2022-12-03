import React, { useEffect, useState } from "react";

export default function Difference({ rawDifference, index }) {
  console.log(rawDifference);
  const projectedTotal = rawDifference[index]?.projectedCash;
  const actualTotal = rawDifference[index]?.actualCash;
  console.log(projectedTotal, actualTotal);
  function diff(num1, num2) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
  console.log(409.35 - 410.46);
  let difference = projectedTotal - actualTotal;
  let fixedDifference = difference.toFixed(2);
  console.log(difference);
  return (
    <input
      type="text"
      name="difference"
      value={fixedDifference}
      placeholder="Difference +/-"
    ></input>
  );
}
