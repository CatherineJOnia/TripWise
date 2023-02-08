import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleTrip = createAsyncThunk(
  "trips/fetchSingleTrip",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/trips/${id}`);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
export const unregisterUser = createAsyncThunk(
  "users/unregister",
  async ({ id, user }) => {
    try {
      const { data } = await axios.put(`/api/users/${id}`, user);
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
export const updateTrip = createAsyncThunk(
  "trips/update",
  async ({ id, destination, imageUrl, description }) => {
    try {
      const { data } = await axios.put(`/api/trips/${id}`, {
        destination,
        description,
        imageUrl,
      });
      return data;
    } catch (err) {
      return err.message;
    }
  }
);
const singleTripSlice = createSlice({
  name: "trip",
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSingleTrip.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(updateTrip.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectSingleTrip = (state) => {
  return state.trip;
};
export default singleTripSlice.reducer;
