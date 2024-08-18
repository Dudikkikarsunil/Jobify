// import React from 'react'

const FormRow = ({ handleChange, type, value, name, LableText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {LableText || name}
      </label>
      <input
        type={type}
        value={value}
        name="name"
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};

export default FormRow;
