import { configureStore } from "@reduxjs/toolkit";
import roomSlice from "./feature/room/roomSlice";

export const store = configureStore({ reducer: roomSlice });
