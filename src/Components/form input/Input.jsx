import React from "react";

import "./Input.scss";
const Input = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input
        type={otherProps.type}
        name={otherProps.name}
        value={otherProps.value}
        required={otherProps.required}
        onChange={handleChange}
        className="form-input"
        />
      
      {
        label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
      }
    </div>
  );
};

export default Input;
