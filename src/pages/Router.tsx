// React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";
import SignUp from "./SignUp";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(true);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignUp />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
