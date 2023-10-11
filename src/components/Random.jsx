import React from "react";

export default function Random(props) {
  const { min, max } = props;
  return (
    <p>
      Random value between {min} and {max} =&gt;{" "}
      {Math.floor(Math.random() * (max - min + 1)) + min}
    </p>
  );
}
