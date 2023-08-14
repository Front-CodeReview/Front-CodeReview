import * as S from "./styled";

type TitleTextPropsType = {
  children: string;
};

const TitleTex = (props: TitleTextPropsType) => {
  const { children } = props;
  return <S.TitleBoldText>{children}</S.TitleBoldText>;
};

export default TitleTex;
