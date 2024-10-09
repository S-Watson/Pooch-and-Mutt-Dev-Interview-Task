import React from 'react';
import './Button.css';

const Button = ({ type = 'button', variant = 'primary', className = '', children, ...props }) => {
  const baseClass = 'btn w-full md:w-auto';
  const variantClass = `btn-${variant}`; // Dynamically apply the appropriate variant class

  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
