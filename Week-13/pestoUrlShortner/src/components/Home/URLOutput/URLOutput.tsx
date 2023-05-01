import React from "react";
import "./index.css";

interface CopyButtonProps {
  enteredURL: string;
  shortenURL: string;
  isCopied: boolean;
  handleCopy: React.MouseEventHandler<HTMLButtonElement>;
}

const URLOutput: React.FC<CopyButtonProps> = ({
  enteredURL,
  shortenURL,
  handleCopy,
  isCopied,
}) => {
  return (
    <div className="conatiner">
      <text className="entered">{enteredURL}</text>
      <text className="shortened">{shortenURL}</text>
      <button onClick={handleCopy}>{isCopied ? "Copied!" : "Copy"}</button>
    </div>
  );
};

export default URLOutput;
