import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const LOCALSTORE_NEW_USER = "newUser";

export interface userDataTypes {
  name: string | number;
  lastName: string | number;
  email: string | number;
  login: string | number;
  password: string | number;
}

interface initialStateType {
  newUser: userDataTypes | null;
}

const initialState: initialStateType = {
  newUser: JSON.parse(localStorage.getItem(LOCALSTORE_NEW_USER)) || null,
};

const newUserReducer = createSlice({
  name: "newUserReducer",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<userDataTypes>) => {
      state.newUser = action.payload;
    },
  },
});

export const { addNewUser } = newUserReducer.actions;
export default newUserReducer.reducer;
