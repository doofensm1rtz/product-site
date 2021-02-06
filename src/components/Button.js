import React from "react";
import "./Button.css";

const STYLE = ["btn--primary", "btn--outline"];

const SIZE = ["btn--medium", "btn--large", "btn--wide", "btn--mobile"];

const COLOR = ["primary", "blue", "red", "green"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0];

  const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
