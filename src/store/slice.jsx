import { createSlice } from "@reduxjs/toolkit";
import actstatge from "./actstatge";

const initialState = {
  loading: "idle",
  error: null,
  info: [],
};
const sliceStatge = createSlice({
  name: "statge",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actstatge.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actstatge.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.info = action.payload;
    });
    builder.addCase(actstatge.rejected, (state, action) => {
      state.loading = "failed";
      state.error = action.payload;
    });
  },
});

export { actstatge };
export default sliceStatge.reducer;
