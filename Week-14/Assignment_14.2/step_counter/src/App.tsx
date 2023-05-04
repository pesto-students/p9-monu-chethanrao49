import { useDispatch, useSelector } from "react-redux";
import StepCounter from "./Components/StepCounter";
import { increment, reset } from "./features/step/stepSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const steps = useSelector((state: any) => state.stepCounter.steps);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  return (
    <>
      <StepCounter
        steps={steps}
        handleIncrement={handleIncrement}
        handleReset={handleReset}
      />
    </>
  );
}

export default App;
