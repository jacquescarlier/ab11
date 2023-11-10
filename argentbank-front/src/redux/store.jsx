
import { configureStore } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
 
import userLogIn from "./reducers/userSlice";

const reducers = combineReducers({
  user: userLogIn
})

const persistConfig = {
  key:'root' ,
  storage ,
  whitelist: ['user']
}
const persistedReducer = persistReducer ( persistConfig , reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export default store;

/*
import { configureStore } from "@reduxjs/toolkit";
import userLogIn from "./reducers/userSlice";

export default configureStore({
  reducer: {
    user :userLogIn
  },
});
*/