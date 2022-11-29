import React, { useState } from "react";
export default function ProjectedCash({ setProjectedArray }) {
  function handleSubmit(input) {
    setProjectedArray(input);
  }
  return (
    <input
      type="number"
      onSubmit={(e) => {
        handleSubmit(e.target.value);
      }}
      name="Projected Cash"
      placeholder="Projected Cash"
    ></input>
  );
}
