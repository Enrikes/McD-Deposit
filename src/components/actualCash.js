import React, { useEffect, useRef, useState } from "react";
export default function ActualCash({ actualTotal, onChange, index }) {
  return (
    <input
      type="number"
      name="actualCash"
      placeholder="Actual Cash"
      onChange={(event) => onChange(index, event)}
      value={actualTotal}
    ></input>
  );
}
