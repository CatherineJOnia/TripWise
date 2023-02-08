import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleUser = createAsyncThunk(
  "users/fetchSingleUser",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/users/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/update",
  async ({ id, username, password, name }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, {
        username,
        password,
        name,
      });
      return data;
    } catch (err) {
      return err.message;
    }
  }
);

const singleUserSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSingleUser.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { updateName } = singleUserSlice.actions;

export const selectSingleUser = (state) => {
  return state.pet;
};

export default singleUserSlice.reducer;
