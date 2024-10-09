import React from 'react';

function Image({ src, alt, className = '', lazy = false, onClick, ...rest }) {
  return (
    <img
      src={src}  // Directly use the src prop, ensuring it updates with parent changes
      alt={alt}
      className={className + ' md:rounded-md'}
      loading={lazy ? 'lazy' : 'eager'}
      onClick={onClick}
      {...rest}  // Spread any additional props
    />
  );
}

export default Image;