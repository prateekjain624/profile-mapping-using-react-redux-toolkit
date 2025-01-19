import { createSlice } from "@reduxjs/toolkit";
import {
  addProfileThunk,
  fetchProfilesThunk,
  deleteProfileThunk,
  updateProfileThunk,
} from "./adminThunk";

const initialState = {
  profiles: [],
  loading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProfileThunk.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addProfileThunk.fulfilled, (state, action) => {
        state.profiles = [...state.profiles, action.payload];
        state.loading = false;
      })
      .addCase(addProfileThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProfileThunk.fulfilled, (state, action) => {
        const index = state.profiles.findIndex(
          (profile) => profile.id === action.payload.id
        );
        if (index !== -1) {
          state.profiles[index] = action.payload;
        }
      })
      .addCase(fetchProfilesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProfilesThunk.fulfilled, (state, action) => {
        state.profiles = action.payload;
        state.loading = false;
      })
      .addCase(fetchProfilesThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteProfileThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProfileThunk.fulfilled, (state, action) => {
        state.profiles = state.profiles.filter(
          (profile) => profile.id !== action.payload
        );
      });
  },
});

export default profileSlice.reducer;
export const Profiles = (state) => state.profile.profiles;
