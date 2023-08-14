import { useEffect } from "react";

// Custom Hooks
import usePathMove from "@/hooks/usePathMove";

// CSS in JS
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const Home = () => {
  const pathMove = usePathMove();
  const userLogout = () => {
    pathMove("/signup");
  };

  return (
    <Wrapper>
      <div onClick={userLogout}>로그아웃</div>
    </Wrapper>
  );
};

export default Home;
