import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("/users", async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (err) {
    return err.message;
  }
});

export const addNewUser = createAsyncThunk("users/add", async (newUser) => {
  try {
    const { data } = await axios.post("/api/users", newUser);
    return data;
  } catch (err) {
    return err.message;
  }
});

export const deleteUser = createAsyncThunk("user/delete", async (id) => {
  await axios.delete(`/api/users/${id}`);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      return state.filter((pet) => pet.id !== action.payload);
    });
  },
});

export const userList = (state) => {
  return state.users;
};

export default userSlice.reducer;
