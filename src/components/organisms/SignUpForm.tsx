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
import { useForm } from "react-hook-form";
import * as S from "./styled";
import { CONSTANTS } from "../../constants";
import { useState } from "react";

type SignUpFormPropsType = {
  setIsInLogged: React.Dispatch<React.SetStateAction<boolean>>;
};
const SignUpForm = (props: SignUpFormPropsType) => {
  const { setIsInLogged } = props;
  const [isEmailPass, setIsEmailPass] = useState(false);
  const {
    REGEXP: { EMAIL_CHECK, PASSWORD_CHECK },
  } = CONSTANTS;

  const { getValues, watch, register, setValue } = useForm();

  const emailRegex = EMAIL_CHECK;
  const pwdRegex = PASSWORD_CHECK;

  const setLocalData = () => {
    const userData = {
      name: getValues("userName"),
      phone: getValues("userPhoneNumber"),
      password: getValues("userPwd"),
      email: getValues("userEmail"),
    };

    const jsonUserData = JSON.stringify(userData);

    return localStorage.setItem("loginData", jsonUserData);
  };

  const submitData = () => {
    // 등록 후
    if (!isEmailPass) {
      return alert("이메일을 확인해주세요.");
    }

    alert("회원가입을 축하합니다.");
    setLocalData();
    return setIsInLogged(true);
  };

  const checkPwdVariable = () => {
    const userPwd = getValues("userPwd") as string;
    if (userPwd.length < 2 || userPwd.length > 20) {
      return alert(
        "비밀번호는 특수문자 1개 포함하여 작성해주세요(최소 2자~최대20자)"
      );
    }

    if (!pwdRegex.test(userPwd)) {
      return alert(
        "비밀번호는 특수문자 1개 포함하여 작성해주세요(최소 2자~최대20자)"
      );
    }

    if (!(getValues("checkUserPwd") === userPwd)) {
      return alert("비밀번호 확인이 일치하지 않습니다. 다시 입력해주세요.");
    }

    return true;
  };

  const checkEmailVariable = () => {
    // 이메일 check
    if (!getValues("userEmail")) {
      return alert("이메일을 입력해주세요.");
    }

    if (!emailRegex.test(getValues("userEmail"))) {
      return alert("올바른 이메일을 입력해주세요.");
    }

    const localUserEmail = JSON.parse(
      localStorage.getItem("loginData") || ""
    ).email;

    if (localUserEmail === getValues("userEmail")) {
      return alert("중복된 이메일입니다. 다시 입력해주세요.");
    }
    setIsEmailPass(true);
    return true;
  };

  const checkUserData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (getValues("userName").length < 3) {
      return alert("이름을 3자이상 입력해주세요.");
    }

    if (!getValues("userPhoneNumber")) {
      return alert("휴대폰 번호를 입력해주세요.");
    }

    if (!checkEmailVariable()) {
      return false;
    }

    if (!checkPwdVariable()) {
      return false;
    }

    return submitData();
  };

  return (
    <S.Container>
      <S.Form>
        <TitleTex>{"회원가입"}</TitleTex>
        <LabelText>{"이름"}</LabelText>
        <Input
          type={"text"}
          name={"userName"}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
        <LabelText>{"휴대폰 번호"}</LabelText>
        <Input
          type={"number"}
          name={"userPhoneNumber"}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
        <LabelText>{"이메일"}</LabelText>
        <InputAndButton
          type={"button"}
          name={"userEmail"}
          onClick={checkEmailVariable}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
          isEmailPass={isEmailPass}
        />
        <LabelText>{"비밀번호"}</LabelText>
        <Input
          type={"password"}
          name={"userPwd"}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
        <LabelText>{"비밀번호 확인"}</LabelText>
        <Input
          type={"password"}
          name={"checkUserPwd"}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
        <S.SignUpButtonContainer>
          <Button
            type={"submit"}
            text={"회원가입"}
            bgColor={"black"}
            onClick={(e) => checkUserData(e)}
          />
        </S.SignUpButtonContainer>
      </S.Form>
    </S.Container>
  );
};

export default SignUpForm;
