import { configureStore } from "@reduxjs/toolkit";
import profileReducers from "./Components/adminReducer/adminSlice";
import { fetchProfilesThunk } from "./Components/adminReducer/adminThunk";

export const store = configureStore({
  reducer: {
    profile: profileReducers,
  },
});

store.dispatch(fetchProfilesThunk());
