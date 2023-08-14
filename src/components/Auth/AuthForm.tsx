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

const AuthForm = () => {
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
      alert("회원가입이 완료 되었습니다.");
      pathMove("/");
    }
  };

  const hasEmailCheck = () => {
    inquireEmailValue(inputValue.email);
    // const db = localStorage.getItem("join");
    // if (db !== null) {
    //   const dbData = JSON.parse(db);
    //   dbData.forEach((data: DBtype) => {
    //     if (data.email === inputValue.email)
    //       return alert("중복된 이메일이 있습니다.");
    //   });
    // }
    // return alert("사용 가능한 메일 입니다.");
  };

  return (
    <Form
      onSubmit={SingUpUserSubmit}
      style={{ paddingTop: "100px", maxWidth: "300px", margin: "0 auto" }}
    >
      <AuthInput
        SignUpUserInfo={SignUpUserInfo}
        hasEmailCheck={hasEmailCheck}
      />
    </Form>
  );
};

export default AuthForm;
