// css in js
import styled from "styled-components";

// Components
import Label from "@/common/Label";
import Input from "@/common/Input";
import Button from "@/common/Button";

interface Props {
  SignUpUserInfo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasEmailCheck: () => void;
}

const EamilAuthBtn = styled.div`
  width: 60px;
  height: 40px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  right: 2px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const AuthInput = (props: Props) => {
  return (
    <>
      <Label text="닉네임" />
      <Input
        type="text"
        placeholder="닉네임"
        required={true}
        name="name"
        onChange={props.SignUpUserInfo}
      />
      <EamilAuthBtn onClick={props.hasEmailCheck}>인증버튼</EamilAuthBtn>
      <Label text="이메일" />
      <Input
        type="text"
        placeholder="이메일"
        required={true}
        name="email"
        onChange={props.SignUpUserInfo}
      />
      <Label text="비밀번호" />
      <Input
        type="password"
        placeholder="비밀번호"
        required={true}
        name="password"
        onChange={props.SignUpUserInfo}
      />
      <Label text="비밀번호 재확인" />
      <Input
        type="password"
        placeholder="비밀번호 재확인"
        required={true}
        name="password2"
        onChange={props.SignUpUserInfo}
      />
      <Label text="휴대폰 번호" />
      <Input
        type="tel"
        placeholder="휴대폰 번호"
        required={true}
        name="tel"
        onChange={props.SignUpUserInfo}
      />
      <Button type="submit" title="회원가입" />
    </>
  );
};

export default AuthInput;
