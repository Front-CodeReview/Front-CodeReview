import * as S from "./styled";

const Button = (props: { text: string; bgColor: "black" | "grey" }) => {
  const { text, bgColor } = props;
  return (
    <>
      <S.DefaultButton colorType={bgColor}>{text}</S.DefaultButton>
    </>
  );
};

export default Button;
