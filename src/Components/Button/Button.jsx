import React from 'react'


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


  



  

