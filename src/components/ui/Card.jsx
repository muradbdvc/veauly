import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  padding = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'rounded-xl transition-all duration-200';
  
  const variantClasses = {
    default: 'bg-white shadow-md',
    outlined: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-lg'
  };
  
  const paddingClasses = {
    small: 'p-4',
    medium: 'p-6',
    large: 'p-8'
  };
  
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;
  
  return (
    <div className={finalClassName} {...props}>
      {children}
    </div>
  );
};

export default React.memo(Card);