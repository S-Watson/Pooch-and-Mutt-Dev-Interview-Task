import React, { useState } from 'react';
import './Select.css';

const Select = ({ id, label, options = [], disabled = false, className = '', ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseDown = () => {
    setIsOpen(true);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  const handleChange = () => {
    setIsOpen(false);
  };

  return (
    <div className="mt-6">
      <label htmlFor={id} className={`block text-s2 ${disabled ? 'text-disabled' : 'text-primary'}`}>
        {label}
      </label>
      <select
        id={id}
        onMouseDown={handleMouseDown}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`custom-select ${isOpen ? 'open' : ''} ${disabled ? 'disabled-select' : ''} ${className}`}
        disabled={disabled}
        {...props}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
