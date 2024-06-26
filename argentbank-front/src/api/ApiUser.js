import { createAsyncThunk } from "@reduxjs/toolkit";
const urlFetchLogin = "http://localhost:3001/api/v1/user/login"
const urlFetchPofile = "http://localhost:3001/api/v1/user/profile"
// user login
export const userLogIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password, rememberMe }, thunkApi) => {
    try {
      const response = await fetch(urlFetchLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Wrong email or password!");
          }
        })
        .then((data) => {
          return data;
        });
      const user = await getUserInfos(response.body.token);
     
      if (rememberMe === true ){
        localStorage.setItem('user', JSON.stringify ({ email: email, password: password, token: response.body.token }))
      }
      return { email: email, data: user.body, token: response.body.token };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// edit username
export const editUserName = createAsyncThunk(
  "user/editUserName",
  async ({ userName, token }, thunkApi) => {
    try {
      const response = await fetch(
        urlFetchPofile,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ userName }),
        }
      ).then((response) => {
        if (response.ok) {
          return response.json();
        }
      });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// get user information
async function getUserInfos(token) {
  const response = await fetch(urlFetchPofile, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(
        "An error occurred while retrieving user information."
      );
    }
  });
  return response;
}

