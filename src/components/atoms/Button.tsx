import * as S from "./styled";

const Button = (props: {
  text: string;
  bgColor: "black" | "grey";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { text, bgColor, onClick } = props;
  return (
    <>
      <S.DefaultButton onClick={onClick} colorType={bgColor}>
        {text}
      </S.DefaultButton>
    </>
  );
};

export default Button;
