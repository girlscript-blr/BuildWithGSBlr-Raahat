import React from "react";
import "./inputBox.css";

const InputBox = (props) => {
  const {
    label,
    id,
    error,
    onChange,
    value,
    type = "text",
    placeholder,
    width = "200px",
  } = props;

  let input;

  switch (type) {
    case "textarea":
      input = (
        <textarea
          className="input-field"
          name="label"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
      break;
    case "text":
      input = (
        <input
          className="input-field"
          type="text"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
      break;
    case "number":
      input = (
        <input
          className="input-field"
          type="number"
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      );
      break;
    default:
      return new Error('Unsupported parameter type: "type"');
  }

  return (
    <div className="InputBox" style={{ width }}>
      <label className="input-label" htmlFor={id}>
        {label}
      </label>
      {input}
      {error && <p className="error-label">{error}</p>}
    </div>
  );
};

export default InputBox;
