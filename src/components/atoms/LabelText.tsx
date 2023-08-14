import * as S from "./styled";

const LabelText = (props: { children: string }) => {
  const { children } = props;
  return <S.InputLabelText>{children}</S.InputLabelText>;
};

export default LabelText;
