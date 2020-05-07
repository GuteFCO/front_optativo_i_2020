import React from 'react';


export default function InputLine(props){
  const { label, type, placeholder, required } = props;
  /*
  const label = props.label;
  const type = props.type;
  const placeholder = props.placeholder;
  const required = props.required;
  */

  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required={required} />
    </div>
  );
}
