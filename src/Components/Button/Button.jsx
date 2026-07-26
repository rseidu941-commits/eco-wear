import React from 'react'
import "./Button.scss";

function Button({ handleClick, children, className = "", type = "button" }) {
  return (
    <button
      type={type}
      className={`button ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;


  



  

