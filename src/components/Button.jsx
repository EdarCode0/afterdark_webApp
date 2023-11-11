// Button.jsx
import React from 'react';

const Button = ({ navigate, text }) => {
  return <button className="button button1" onClick={navigate}>{text}</button>;
};

export default Button;
