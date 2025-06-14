import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 16px",
        margin: "0 4px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
