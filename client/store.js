import { configureStore } from "@reduxjs/toolkit";

import tripReducer from "../reducers/tripSlice";
import userReducer from "../reducers/userSlice";
import singleTripReducer from "../reducers/singleTripSlice";
import singleUserReducer from "../reducers/singleUserSlice";

export const store = configureStore({
  reducer: {
    trips: tripReducer,
    users: userReducer,
    trip: singleTripReducer,
    user: singleUserReducer,
  },
});
