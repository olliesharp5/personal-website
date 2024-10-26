import React from 'react';

const InputField = ({ type, name, placeholder, value, onChange, error }) => (
  <div className="form-group">
    {type === 'textarea' ? (
      <textarea name={name} placeholder={placeholder} value={value} onChange={onChange} />
    ) : (
      <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    )}
    {error && <div className="error-message">{error}</div>}
  </div>
);

export default InputField;
