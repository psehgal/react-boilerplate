import React from 'react';

const Input = (props) => (
  <div className="form-group">
    <label htmlFor={props.label}>{props.text}</label>
    <input
      type={props.type}
      className="form-control"
      id={props.id}
      value={props.value}
      onChange={props.handleChange}
      required
    />
  </div>
);

export default Input;