import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTrips = createAsyncThunk("/trips", async () => {
  try {
    const { data } = await axios.get("/api/trips");
    return data;
  } catch (err) {
    return err.message;
  }
});

export const addNewTrip = createAsyncThunk("trips/add", async (room) => {
  try {
    const { data } = await axios.post("/api/trips", room);
    return data;
  } catch (err) {
    return err.message;
  }
});

export const deleteTrip = createAsyncThunk("trips/delete", async (id) => {
  try {
    await axios.delete(`/api/tripd/${id}`);
    return id;
  } catch (err) {
    return err.message;
  }
});
const tripSlice = createSlice({
  name: "trips",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTrips.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addNewTrip.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(deleteTrip.fulfilled, (state, action) => {
      return state.filter((room) => room.id !== action.payload);
    });
  },
});

export const tripList = (state) => {
  return state.trips;
};

export default tripSlice.reducer;
