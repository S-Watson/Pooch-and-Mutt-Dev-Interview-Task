import React from 'react';
import './Input.css';

const Input = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  className = '',
}) => {
  const allowedTypes = ['text', 'email', 'password'];

  // Fallback to 'text' if an unsupported type is provided
  const inputType = allowedTypes.includes(type) ? type : 'text';

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-s2 text-primary pb-1">
          {label}
        </label>
      )}
      <input
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`custom-input block w-full p-6 border bg-surface-primary border-border-secondary rounded-md`}
      />
    </div>
  );
};

export default Input;
