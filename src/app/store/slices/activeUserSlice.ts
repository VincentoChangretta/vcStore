import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const LOCALSTORE_ACTIVE_USER = "activeUser";

export interface userDataTypes {
  name: string | number;
  lastName: string | number;
  email: string | number;
  login: string | number;
  password: string | number;
}

interface initialStateType {
  activeUser: userDataTypes | null;
}

const initialState: initialStateType = {
  activeUser: JSON.parse(localStorage.getItem(LOCALSTORE_ACTIVE_USER)) || null,
};

const activeUserReducer = createSlice({
  name: "activeUserReducer",
  initialState,
  reducers: {
    addActiveUser: (state, action: PayloadAction<userDataTypes>) => {
      state.activeUser = action.payload;
    },
  },
});

export const { addActiveUser } = activeUserReducer.actions;
export default activeUserReducer.reducer;
