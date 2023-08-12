// React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";
import Login from "./Login";

const Router = () => {
  const [isInLogged, setisInLogged] = useState(false);

  return (
    <>
      {isInLogged ? (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </>
  );
};

export default Router;
