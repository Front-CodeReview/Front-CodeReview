// React
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Home from "./Home";

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
          <Route />
        </Routes>
      )}
    </>
  );
};

export default Router;
