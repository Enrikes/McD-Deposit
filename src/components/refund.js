import React from "react";
export default function Refunds({ refunds, redundAmount, onChange, index }) {
  return (
    <>
      <input
        type="number"
        name="refunds"
        placeholder="Refunds"
        onChange={(event) => onChange(index, event)}
        value={refunds}
      ></input>
      <input
        type="number"
        name="refundTotal"
        placeholder="Refund Amount"
        onChange={(event) => onChange(index, event)}
        value={redundAmount}
      ></input>
    </>
  );
}
