import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./styled";

// 버튼과 함께 쓰는 인풋 컴포넌트
const InputAndButton = () => {
  return (
    <>
      <S.InputAndButtonContainer>
        <S.InputContainer>
          <Input />
        </S.InputContainer>
        <S.ButtonContainer>
          <Button text={"중복확인"} bgColor={"grey"} />
        </S.ButtonContainer>
      </S.InputAndButtonContainer>
    </>
  );
};

export default InputAndButton;
