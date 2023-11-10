import { createSlice } from "@reduxjs/toolkit";
import {userLogIn, editUserName} from "../ApiUser"

const initialState = {
    user: {
      email: "",
      token: "",
      firstName: "",
      lastName: "",
      userName: "",
      userId: "",
    },
    status: "unsuccess",
    error: "",
  };
  
const userLogInSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers(builder) {
      builder
        .addCase(userLogIn.fulfilled, (state, action) => {
          state.user = {
            email: action.payload.email,
            token: action.payload.token,
            firstName: action.payload.data.firstName,
            lastName: action.payload.data.lastName,
            userName: action.payload.data.userName,
            userId: action.payload.data.id
          };
          state.status = "success";
          state.error = "";
        })
        .addCase(userLogIn.rejected, (state, action) => {
          state.status = "error";
          state.error = action.payload;
        })
        .addCase("LOGOUT", (state) => {
          state.user = { token: "" };
          state.status = "unsuccess";
          state.error = "";
        })
        .addCase(editUserName.fulfilled, (state, action) => {
          let user = state.user;
          user.userName = action.payload.body.userName;
          state.user = user;
          state.status = "success";
        });
    },
  });
  
  export default userLogInSlice.reducer;
  