import React from "react";

export default function BoxColor(props) {
  const { r, g, b } = props;
  const color = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#ffffff";
  const styleColor = {
    backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
    color: color,
  };
  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  return (
    <div className="boxColor" style={styleColor}>
      <p>
        rgb({r},{g},{b})
        <br />
        {rgbToHex(r, g, b)}
      </p>
    </div>
  );
}
