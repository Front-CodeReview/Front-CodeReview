import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./styled";

// 버튼과 함께 쓰는 인풋 컴포넌트
const InputAndButton = () => {
  return (
    <>
      <S.InputAndButtonContainer>
        <Input />
        <Button text={"중복확인"} bgColor={"grey"} />
      </S.InputAndButtonContainer>
    </>
  );
};

export default InputAndButton;
