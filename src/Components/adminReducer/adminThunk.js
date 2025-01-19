import { createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../../firebaseinit";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export const addProfileThunk = createAsyncThunk(
  "profile/addProfile",
  async ({ profile }, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "users", profile.id);
      await setDoc(docRef, profile);
      return profile;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const updateProfileThunk = createAsyncThunk(
  "profile/updateProfile",
  async (updatedProfile, { rejectWithValue }) => {
    try {
      const docRef = doc(db, "users", updatedProfile.id);
      await updateDoc(docRef, updatedProfile);
      return updatedProfile;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchProfilesThunk = createAsyncThunk(
  "profile/fetchProfiles",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const profiles = querySnapshot.docs.map((doc) => doc.data());
      return profiles;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const deleteProfileThunk = createAsyncThunk(
  "profile/deleteProfile",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const docRef = doc(db, "users", id);
      await deleteDoc(docRef);
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
