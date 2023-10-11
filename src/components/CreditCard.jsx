import React from "react";

export default function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
      }}
      className="creditcard"
    >
      <div className="l1">
        <img src={type === "visa" ? "logovisa.png" : "logomastercard"} alt="" />
      </div>
      <div className="l2">
        <span className="dots">···· ···· ····</span>{" "}
        <span className="ccnumber">{number.slice(-4)}</span>
      </div>
      <div>
        <div className="l3">
          <div>
            Expires{" "}
            {expirationMonth.toString().length === 1
              ? "0" + expirationMonth
              : expirationMonth}
            /{expirationYear.toString().slice(2)}
          </div>
          <div>{bank}</div>
        </div>
        <div className="l4">{owner}</div>
      </div>
    </div>
  );
}
