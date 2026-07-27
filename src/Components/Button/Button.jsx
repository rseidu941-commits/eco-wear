import "./Button.scss";

function Button({ handleClick, onClick, children, className = "" }) {
  const handleButtonClick = onClick || handleClick;

  return (
    <button
      onClick={handleButtonClick}
      className={`button ${className}`.trim()}
    >
      {children}
    </button>
  );
}

export default Button;
