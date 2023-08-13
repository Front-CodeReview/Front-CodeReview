/**
 *
 * 이름
 * 이메일 (중복 확인 버튼)
 * 비밀번호
 * 비밀번호 재확인
 * 회원가입 버튼
 *
 */

import Button from "../atoms/Button";
import Input from "../atoms/Input";
import LabelText from "../atoms/LabelText";
import TitleTex from "../atoms/TitleText";
import InputAndButton from "../molecules/InputAndButton";
import * as S from "./styled";

type SignUpFromPropsType = {
  checkValiable?: any; // TODO
  submitRegister: any; // TODO
};

const SignUpForm = (props: SignUpFromPropsType) => {
  const { submitRegister, checkValiable } = props;
  return (
    <S.Container>
      <TitleTex>{"회원가입"}</TitleTex>
      <LabelText>{"이름"}</LabelText>
      <Input type={"text"} />
      <LabelText>{"이메일"}</LabelText>
      <InputAndButton onClick={checkValiable} />
      <LabelText>{"비밀번호"}</LabelText>
      <Input type={"password"} />
      <LabelText>{"비밀번호 확인"}</LabelText>
      <Input type={"password"} />
      <S.SignUpButtonContainer>
        <Button text={"회원가입"} bgColor={"black"} onClick={submitRegister} />
      </S.SignUpButtonContainer>
    </S.Container>
  );
};

export default SignUpForm;
