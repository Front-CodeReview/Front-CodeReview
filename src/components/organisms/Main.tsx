import Button from "../atoms/Button";
import TextContents from "../atoms/TextContents";
import TitleTex from "../atoms/TitleText";
import * as S from "./styled";

const Main = () => {
  return (
    <S.Container>
      <TitleTex>{"홈"}</TitleTex>
      <TextContents />
      <S.SignUpButtonContainer>
        <Button text={"로그아웃"} bgColor={"black"} />
      </S.SignUpButtonContainer>
    </S.Container>
  );
};

export default Main;