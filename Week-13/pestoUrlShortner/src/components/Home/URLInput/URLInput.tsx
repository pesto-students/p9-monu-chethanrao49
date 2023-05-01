import React from "react";
import "./index.css";

interface URLInputProps {
  value: string;
  placeholder: string;
  buttonText: string;
  disabled: boolean;
  style?: React.CSSProperties;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const URLInput: React.FC<URLInputProps> = ({
  value,
  placeholder,
  buttonText,
  disabled,
  onChange,
  style,
  onClick,
}) => {
  return (
    <div style={style} className="conatiner">
      <input
        disabled={disabled || false}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="submit" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default URLInput;
