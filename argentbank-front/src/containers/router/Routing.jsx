import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import SignIn from "../../pages/SignIn";
import UserAccount from "../../pages/UserAccount"
import Page404 from "../../pages/Page404"
import Footer from "../footer/Footer";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/accounts/:userId" element={<UserAccount />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/accounts/*" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default Routing;