// React
import React, { useState } from "react";

// Custom Hooks
import usePathMove from "@/hooks/usePathMove";

// Compoennts
import AuthInput from "./InputList/AuthInput";

import styled from "styled-components";

// Util
import validateInputValue from "@/util/validateInputValue";
import inquireEmailValue from "@/util/inquireEmailValue";

const Form = styled.form`
  padding-top: 100px;
  max-width: 300px;
  margin: 0 auto;
  position: relative;
`;

interface Props {
  userLoginLogout: (prev: boolean) => void;
}

const AuthForm = (props: Props) => {
  const pathMove = usePathMove();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    tel: "",
  });

  // Input 입력값 State 업데이트
  const SignUpUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 회원가입 Form 전송
  const SingUpUserSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, tel } = inputValue;
    const db = {
      name,
      email,
      password,
      tel,
    };

    const data = validateInputValue(inputValue);

    if (data) {
      const userDatabase = JSON.parse(localStorage.getItem("join") || "[]");
      userDatabase.push(db);
      localStorage.setItem("join", JSON.stringify(userDatabase));
      pathMove("/");
      alert("회원가입이 완료 되었습니다.");
      props.userLoginLogout(true);
    }
  };

  // 이메일 중복인증
  const hasEmailCheck = () => inquireEmailValue(inputValue.email);

  return (
    <Form onSubmit={SingUpUserSubmit}>
      <AuthInput
        SignUpUserInfo={SignUpUserInfo}
        hasEmailCheck={hasEmailCheck}
      />
    </Form>
  );
};

export default AuthForm;
