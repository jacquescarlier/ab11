import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import UserAccount from "./pages/UserAccount";
import Page404 from "./pages/Page404"
import Footer from "./containers/footer/Footer";

import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      <Router>
        <Routes>
          <Route path="" element={<Home />} exact />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
  </Provider>
);