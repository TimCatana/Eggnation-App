import React, { useState } from "react";
import { FBAuth } from "../firebase-config.js";
import { onAuthStateChanged } from "firebase/auth";

import Login from "../pages/login/Login.js";
import Home from "../pages/home/Home.js";
import { Route, Routes } from "react-router-dom";

const RRoutes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  onAuthStateChanged(FBAuth, (currentUser) => {
    setUser(currentUser);
    if (initializing) setInitializing(false);
  });

  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Login />} />
    </Routes>
  );
};

export default RRoutes;
