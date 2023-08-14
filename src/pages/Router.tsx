// React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./Home";
import SignUp from "./Auth/SignUp";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  const userLoginLogout = () => setisInLogged((prev) => !prev);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route
            path="/"
            element={<Home userLoginLogout={userLoginLogout} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/signup"
            element={<SignUp userLoginLogout={userLoginLogout} />}
          />
        </Routes>
      )}
    </>
  );
};

export default Router;
