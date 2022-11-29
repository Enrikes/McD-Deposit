import React, { useEffect, useState } from "react";
export default function ActualCash({ setProjectedArray }) {
  function handleSubmit(input) {
    setProjectedArray(input);
  }
  return (
    <input
      type="number"
      onSubmit={(e) => {
        handleSubmit(e.target.value);
      }}
      name="Actual Cash"
      placeholder="Actual Cash"
    ></input>
  );
}
