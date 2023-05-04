import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLight } from "../feature/room/roomSlice";

import "./index.css";

const Room = () => {
  const isLightOn = useSelector((state) => state.isLightOn);
  const dispatch = useDispatch();
  const flipLight = () => {
    dispatch(toggleLight());
  };
  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
};

export default Room;
