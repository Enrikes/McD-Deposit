import React from "react";
export default function Promos({ actualTotal, redundAmount, onChange, index }) {
  return (
    <>
      <input
        type="number"
        name="promo"
        placeholder="Promos"
        onChange={(event) => onChange(index, event)}
        value={actualTotal}
      ></input>
      <input
        type="number"
        name="promoAmount"
        placeholder="Promos Amount"
        onChange={(event) => onChange(index, event)}
        value={redundAmount}
      ></input>
    </>
  );
}
