import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = `card card--${variant} card--padding-${padding} ${className}`;
  
  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'elevated']),
  padding: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default React.memo(Card);