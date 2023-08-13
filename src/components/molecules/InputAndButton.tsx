import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./styled";

type InputAndButtonPropsType = {
  onClick: any; // TODO
};
// 버튼과 함께 쓰는 인풋 컴포넌트
const InputAndButton = (props: InputAndButtonPropsType) => {
  const { onClick: checkValiable } = props;
  return (
    <>
      <S.InputAndButtonContainer>
        <Input />
        <Button text={"중복확인"} bgColor={"grey"} onClick={checkValiable} />
      </S.InputAndButtonContainer>
    </>
  );
};

export default InputAndButton;
