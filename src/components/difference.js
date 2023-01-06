import React, { useEffect, useState } from "react";

export default function Difference({ rawDifference, index }) {
  const projectedTotal = rawDifference[index]?.projectedCash;
  const actualTotal = rawDifference[index]?.actualCash;
  function diff(num1, num2) {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  }
  let difference = projectedTotal - actualTotal;
  let fixedDifference = difference.toFixed(2);
  return (
    <input
      type="text"
      name="difference"
      value={fixedDifference}
      placeholder="Difference +/-"
    ></input>
  );
}
