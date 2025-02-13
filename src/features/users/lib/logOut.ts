import {
  addActiveUser,
  LOCALSTORE_ACTIVE_USER,
} from "app/store/slices/activeUserSlice";
import { AppDispatch } from "app/store/store";

export const userLogOut = (dispatch: AppDispatch) => {
  dispatch(addActiveUser(null));
  localStorage.removeItem(LOCALSTORE_ACTIVE_USER);
};
