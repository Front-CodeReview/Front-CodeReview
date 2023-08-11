// Custom Hooks
import usePathMove from "@/hooks/usePathMove";

// CSS in JS
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
`;

const Home = () => {
  const pathMove = usePathMove();
  return (
    <Wrapper>
      <div onClick={() => pathMove("/signup")}>로그인 하기</div>
    </Wrapper>
  );
};

export default Home;
