import { createAsyncThunk } from "@reduxjs/toolkit";

// user login
export const userLogIn = createAsyncThunk(
  "user/logIn",
  async ({ email, password }, thunkApi) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
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
            throw new Error("Incorrect information!");
          }
        })
        .then((data) => {
          return data;
        });
      const user = await getUserInfos(response.body.token);
      sessionStorage.setItem("token", JSON.stringify(response.body.token))
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
        "http://localhost:3001/api/v1/user/profile",
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
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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


// Logout 
export const logout = () => {
  localStorage.removeItem("token")
  sessionStorage.removeItem("token")
}
