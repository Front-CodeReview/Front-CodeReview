// React
import React, { useState } from "react";

// Custom Hooks
import usePathMove from "@/hooks/usePathMove";

// Compoennts
import Input from "@/common/Input";
import Button from "@/common/Button";
import Label from "@/common/Label";

// Util
import validateInputValue from "@/util/validateInputValue";

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
      localStorage.setItem("join", JSON.stringify(db));
      alert("회원가입이 완료 되었습니다.");
      pathMove("/");
    }
  };

  return (
    <form
      onSubmit={SingUpUserSubmit}
      style={{ paddingTop: "100px", maxWidth: "300px", margin: "0 auto" }}
    >
      <Label text="닉네임" />
      <Input
        type="text"
        placeholder="닉네임"
        required={true}
        name="name"
        onChange={SignUpUserInfo}
      />
      <Label text="이메일" />
      <Input
        type="text"
        placeholder="이메일"
        required={true}
        name="email"
        onChange={SignUpUserInfo}
      />
      <Label text="비밀번호" />
      <Input
        type="password"
        placeholder="비밀번호"
        required={true}
        name="password"
        onChange={SignUpUserInfo}
      />
      <Label text="비밀번호 재확인" />
      <Input
        type="password"
        placeholder="비밀번호 재확인"
        required={true}
        name="password2"
        onChange={SignUpUserInfo}
      />
      <Label text="휴대폰 번호" />
      <Input
        type="tel"
        placeholder="휴대폰 번호"
        required={true}
        name="tel"
        onChange={SignUpUserInfo}
      />
      <Button type="submit" title="회원가입" />
    </form>
  );
};

export default AuthForm;
