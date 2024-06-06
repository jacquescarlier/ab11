import React from "react";
import ReactDOM from "react-dom/client";

import Routing from "./containers/router/Routing"
import store from "./app/store";
import { Provider } from "react-redux";
import { persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {userLogIn} from "../src/api/ApiUser"
let persistor = persistStore(store);
// Vérifier les données utilisateur sauvegardées dans le localStorage ou sessionStorage pour rememberMe
const user = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
if (user) {
  store.dispatch( userLogIn (user, true));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routing />
    </PersistGate>
  </Provider>
);
