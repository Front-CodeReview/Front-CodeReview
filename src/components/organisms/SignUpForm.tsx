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

const SignUpForm = () => {
  return (
    <>
      <LabelText>{"이메일"}</LabelText>
      <InputAndButton />
      <Input />
      <Button text={"회원가입"} bgColor={"black"} />
    </>
  );
};

export default SignUpForm;
