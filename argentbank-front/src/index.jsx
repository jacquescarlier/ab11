
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserAccount from "./pages/UserAccount";
import Page404 from "./pages/Page404"
import Footer from "./containers/footer/Footer";

import store from "./app/store";
import { Provider } from "react-redux";
import { persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="" element={<Home />} exact />
          <Route path="/login" element={<SignIn />} />
          <Route path="/profile/:userId" element={<UserAccount />} />
          <Route path="*" element={<Page404 />} />
          <Route path="/profile/*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </PersistGate>
  </Provider>
);
