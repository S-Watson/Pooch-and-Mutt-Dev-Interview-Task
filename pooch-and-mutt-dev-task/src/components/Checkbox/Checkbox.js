import React from 'react';
import './Checkbox.css';

const Checkbox = ({ 
  id, 
  checked, 
  onChange, 
  label,
  className = '' 
}) => {
  return (
    <div className={`checkbox ${className}`}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="custom-checkbox"
      />
      <label htmlFor={id} className="custom-checkbox-label">
        <span className="text-p2 text-secondary">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
