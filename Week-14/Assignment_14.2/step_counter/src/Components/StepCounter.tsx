import React from "react";
import "./StepCounter.css";

interface IProps {
  steps: number;
  handleIncrement: React.MouseEventHandler<HTMLButtonElement>;
  handleReset: React.MouseEventHandler<HTMLButtonElement>;
}

const StepCounter: React.FC<IProps> = ({
  steps,
  handleIncrement,
  handleReset,
}) => {
  return (
    <div className="step-counter">
      <h2>Step Counter</h2>
      <p>Steps: {steps}</p>
      <button onClick={handleIncrement}>Add Step</button>
      <button onClick={handleReset}>Reset Steps</button>
    </div>
  );
};

export default StepCounter;
