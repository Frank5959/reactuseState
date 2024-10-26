// import { useState } from "react";
import React, { useState } from "react";
function MyOnChangeL() {
  const [payment, setPayment] = useState("");
  const [refreshTime, setrefreshTime] = useState(0);

  function PaymentMethod(event) {
    setPayment(event.target.value);
  }

  function RefreshTimef(event) {
    setrefreshTime(event.target.value);
  }

  return (
    <>
      <h1>Kindly Input Payment Method</h1>
      <select value={payment} onChange={PaymentMethod}>
        <option value="">Select an option</option>
        <option value="Mpesa">Mpesa</option>
        <option value="PayPal">PayPal</option>
        <option value="Airtel">Airtel</option>
      </select>
      <br />
      <h1>Again select the refresh time</h1>
      <label>
        <input
          type="radio"
          value={10}
          checked={refreshTime == 10}
          onChange={RefreshTimef}
        />
        10 sec
      </label>
      <br />
      <label>
        <input
          type="radio"
          value={30}
          checked={refreshTime == 30}
          onChange={RefreshTimef}
        />
        30 sec
      </label>
      <h2>Refresh time is:{refreshTime}</h2>
      <></>
    </>
  );
}
export default MyOnChangeL;
