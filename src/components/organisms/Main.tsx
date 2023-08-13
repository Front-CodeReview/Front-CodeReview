import Button from "../atoms/Button";
import TextContents from "../atoms/TextContents";
import TitleTex from "../atoms/TitleText";
import * as S from "./styled";

type MainPropsType = {
  setIsInLogged: React.Dispatch<React.SetStateAction<boolean>>;
};

const Main = (props: MainPropsType) => {
  return (
    <S.Container>
      <TitleTex>{"홈"}</TitleTex>
      <TextContents />
      <S.SignUpButtonContainer>
        <Button
          text={"로그아웃"}
          bgColor={"black"}
          type={"button"}
          onClick={() => props.setIsInLogged(false)}
        />
      </S.SignUpButtonContainer>
    </S.Container>
  );
};

export default Main;
