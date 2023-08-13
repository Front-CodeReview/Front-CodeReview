import * as S from "./styled";

const TextContents = () => {
  const userName = localStorage.getItem("name");

  return (
    <S.TextContentsGreatingContainer>
      <S.GreetingNameContainer>
        <S.TextContentsGreatingName>{userName}</S.TextContentsGreatingName>
        <S.TextContentsGreatingDescription>
          {"님,"}
        </S.TextContentsGreatingDescription>
      </S.GreetingNameContainer>
      <S.TextContentsGreatingDescription>
        {"환영합니다."}
      </S.TextContentsGreatingDescription>
    </S.TextContentsGreatingContainer>
  );
};

export default TextContents;
