import React from 'react';
import './button.css';

function Button(props) {
  const { icon, name, bgColor ='#ff3700', color='#fffffff' } = props;
  return (
    <a href="#" className="mainBtn" style={{ backgroundColor: bgColor, color: color }}>
      {icon} {name}
    </a>
  );
}

export default Button;