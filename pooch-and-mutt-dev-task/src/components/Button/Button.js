import React from 'react';
import './Button.css';

const Button = ({ type = 'button', variant = 'primary', className = '', children, ...props }) => {
  const variantClass = `btn-${variant}`;

  return (
    <button
      type={type}
      className={`btn w-full md:w-auto ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
