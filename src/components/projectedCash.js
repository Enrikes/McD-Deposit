import React, { useState } from "react";
export default function ProjectedCash({ projectedCash, onChange, index }) {
  return (
    <input
      type="number"
      name="projectedCash"
      placeholder="Projected Cash test"
      onChange={(event) => {
        onChange(index, event);
      }}
      value={projectedCash}
    ></input>
  );
}
