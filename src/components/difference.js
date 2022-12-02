import React, { useEffect, useState } from "react";

export default function Difference({ rawDifference }) {
  console.log(rawDifference);
  const projectedTotal = rawDifference?.projectedCash;
  const actualTotal = rawDifference?.actualCash;
  console.log(projectedTotal, actualTotal);
  let difference = Math.abs(projectedTotal - actualTotal);
  console.log(Math.abs(projectedTotal - actualTotal));
  return (
    <input
      type="number"
      name="difference"
      value={difference}
      placeholder="Difference +/-"
    ></input>
  );
}
