import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  className = '', 
  onClick, 
  type = 'button',
  href,
  ...props 
}) => {
  const baseClasses = `btn btn--${variant} btn--${size} ${disabled ? 'btn--disabled' : ''} ${className}`;
  
  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      type={type}
      href={href}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  href: PropTypes.string,
};