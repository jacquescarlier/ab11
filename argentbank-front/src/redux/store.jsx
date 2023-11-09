import { configureStore } from "@reduxjs/toolkit";
import userLogIn from "./reducers/userSlice";

export default configureStore({
  reducer: {
    user :userLogIn
  },
});
