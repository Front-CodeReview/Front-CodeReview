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

  const submitData = () => {
    // 등록 후
    if (!isEmailPass) {
      return alert("이메일을 확인해주세요.");
    }
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

    if (localStorage.getItem("userEmail")?.includes(getValues("userEmail"))) {
      return alert("중복된 이메일입니다. 다시 입력해주세요.");
    }

    return setIsEmailPass(true);
  };

  const checkUserData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (getValues("userName").length < 3) {
      return alert("이름을 3자이상 입력해주세요.");
    }

    if (!checkPwdVariable()) {
      return false;
    }

    if (!checkPwdVariable()) {
      return false;
    }

    return submitData();
  };

  return (
    <S.Container>
      <form>
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
      </form>
    </S.Container>
  );
};

export default SignUpForm;
