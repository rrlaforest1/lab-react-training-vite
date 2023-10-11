import React from "react";

export default function Greetings(props) {
  const { lang, children } = props;
  console.log(props.lang);
  let greetingWord = "";
  switch (lang) {
    case "de":
      greetingWord = "Hallo";
      break;
    case "en":
      greetingWord = "Hello";
      break;
    case "es":
      greetingWord = "Hola";
      break;
    case "fr":
      greetingWord = "Bonjour";
      break;
    default:
      greetingWord = "Hello";
  }

  return (
    <p>
      {greetingWord} {children}
    </p>
  );
}
