import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  className = '', 
  onClick, 
  href,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-violet-600 text-white hover:bg-violet-700 focus:ring-violet-500',
    secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
    outline: 'border-2 border-violet-600 text-violet-600 hover:bg-violet-50 focus:ring-violet-500',
    ghost: 'text-violet-600 hover:bg-violet-50 focus:ring-violet-500'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg'
  };
  
  const finalClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${className}`;
  
  const Component = href ? 'a' : 'button';
  const componentProps = href 
    ? { href, onClick, ...props }
    : { onClick, type: 'button', ...props };

  return (
    <Component 
      className={finalClassName}
      disabled={disabled}
      {...componentProps}
    >
      {children}
    </Component>
  );
};

export default React.memo(Button);