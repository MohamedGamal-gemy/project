import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actstatge = createAsyncThunk("statge/actstatge", async (_, thunkAPI) => {
  try {
    const res = await axios.get("http://localhost:5000/data");
    if (res.data && res.data.obj_workflow) {
      return res.data.obj_workflow;
    } else {
      throw new Error("Data structure is not as expected.");
    }
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export default actstatge;
