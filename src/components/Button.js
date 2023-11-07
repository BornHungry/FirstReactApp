import React from "react";

function Button({ title, onClick }) {
  return (
    <>
      <button className="normal-button" onClick={onClick}>
        {title}
      </button>
    </>
  );
}

export default Button;
