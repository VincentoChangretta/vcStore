import { createAsyncThunk } from "@reduxjs/toolkit";
import { userDataURL } from "../config/types";

export const getUsers = createAsyncThunk(
  "users/getUsers", 
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch(userDataURL);
      if (!res.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await res.json();
      return data; 
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
