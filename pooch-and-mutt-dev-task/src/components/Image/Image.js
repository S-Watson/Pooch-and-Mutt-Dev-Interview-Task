import React from 'react';

function Image({ src, alt, className = '', lazy = false, onClick, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className + ' md:rounded-md'}
      loading={lazy ? 'lazy' : 'eager'}
      onClick={onClick}
      {...props}
    />
  );
}

export default Image;