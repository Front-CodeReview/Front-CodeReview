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
import InputAndButton from "../molecules/InputAndButton";
import * as S from "./styled";

const SignUpForm = () => {
  return (
    <S.SignUpFormContainer>
      <LabelText>{"이름"}</LabelText>
      <Input type={"text"} />
      <LabelText>{"이메일"}</LabelText>
      <InputAndButton />
      <LabelText>{"비밀번호"}</LabelText>
      <Input type={"password"} />
      <LabelText>{"비밀번호 확인"}</LabelText>
      <Input type={"password"} />
      <S.SignUpButtonContainer>
        <Button text={"회원가입"} bgColor={"black"} />
      </S.SignUpButtonContainer>
    </S.SignUpFormContainer>
  );
};

export default SignUpForm;
