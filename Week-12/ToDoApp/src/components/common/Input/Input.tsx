import React from "react";
import { GrAdd } from "react-icons/gr";
import "./Input.css";

interface InputProps {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  label?: string;
  type?: "text" | "number" | "password" | "email" | "tel" | "url";
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  onClick,
  label,
  type = "text",
  placeholder,
  required,
  disabled,
}) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <div className="input-wrapper">
        <input
          className="input"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          type={type}
          required={required}
          disabled={disabled}
        />
        <button className="add-button" type="button" onClick={onClick}>
          <GrAdd size={20} />
        </button>
      </div>
    </div>
  );
};

export default Input;
