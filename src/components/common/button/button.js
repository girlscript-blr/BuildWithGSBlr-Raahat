import React from "react";
import "./button.css";

const Button = (props) => {
  let sec;
  if (props.variant === "secondary") sec = true;
  else sec = false;

  return (
    <div>
      <button
        class={
          "button " +
          (sec ? "secondary " : "primary ") +
          (props.isLarge ? "larger " : "smaller ")
        }
        onClick={props.onClick}
        type={props.type}
        disabled={props.disabled}
      >
        {props.label}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: "button",
  variant: "secondary",
  isLarge: false,
  disabled: false,
};

export default Button;
