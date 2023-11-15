import React from "react";
import ReactDOM from "react-dom/client";

import Routing from "./containers/router/Routing";
import store from "./app/store";
import { Provider } from "react-redux";
import { persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Routing />
    </PersistGate>
  </Provider>
);
