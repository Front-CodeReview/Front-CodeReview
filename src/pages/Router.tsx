// React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";
import SignUp from "./SignUp";

const Router = () => {
  const [isInLogged, setIsInLogged] = useState(false);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home setIsInLogged={setIsInLogged} />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<SignUp setIsInLogged={setIsInLogged} />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
