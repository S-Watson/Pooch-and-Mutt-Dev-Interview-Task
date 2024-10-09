import React from 'react';
import './Radio.css';
import iconRadioActive from '../../assets/icons/icon-radio-active.svg';
import iconRadioInactive from '../../assets/icons/icon-radio-inactive.svg';

const Radio = ({ id, value, label, name, checked, onChange, className = '' }) => {
  return (
    <div className={`radio-option ${className}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        className="hidden peer"
        checked={checked}
        onChange={() => onChange(value)}
      />
      <label
        htmlFor={id}
        onClick={() => onChange(value)}
        className={`radio-label ${checked ? 'active' : ''}`}
      >
        <span className="text-p2">{label}</span>
        <img
          src={checked ? iconRadioActive : iconRadioInactive}
          alt={`${label} Radio button icon`}
          className="w-7 h-7"
        />
      </label>
    </div>
  );
};

export default Radio;