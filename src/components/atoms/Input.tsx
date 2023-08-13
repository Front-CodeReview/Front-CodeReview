import * as S from "./styled";

type InputPropsType = {
  type?: string;
  placeholder?: string;
};

const Input = (props: InputPropsType) => {
  const { type, placeholder } = props;
  return (
    <>
      <S.RegisterInput type={type} placeholder={placeholder}></S.RegisterInput>
    </>
  );
};

export default Input;
