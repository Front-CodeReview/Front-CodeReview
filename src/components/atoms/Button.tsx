import * as S from "./styled";

const Button = (props: {
  text: string;
  type: "button" | "submit" | "reset";
  bgColor: "black" | "grey" | "hidden";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { type, text, bgColor, onClick } = props;
  return (
    <>
      <S.DefaultButton type={type} onClick={onClick} colortype={bgColor}>
        {text}
      </S.DefaultButton>
    </>
  );
};

export default Button;
