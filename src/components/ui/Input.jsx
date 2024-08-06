/* eslint-disable react/prop-types */


const Input = ({ 
  type = 'text', 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = false,
  minLength,
  maxLength,
  ...props 
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      {...props}
    />
  );
};

export default Input;