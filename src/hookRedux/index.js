import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./store";

export default configureStore({
  reducer: counterReducer
});