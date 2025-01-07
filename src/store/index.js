import { configureStore } from "@reduxjs/toolkit";
import statge from "./slice";
const store = configureStore({
  reducer: { statge },
});
export default store;
