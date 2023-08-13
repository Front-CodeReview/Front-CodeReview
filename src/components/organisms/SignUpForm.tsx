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
import { useEffect } from "react";

const SignUpForm = () => {
  const { getValues, watch, register, setValue } = useForm();
  const checkEmailValiable = () => {
    // 이메일 check
    const emailData = watch("userEmail");
    console.log(emailData);
  };

  const submitFormData = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // 전체 데이터 체크
    if (getValues("userName").length < 3) {
      return alert("이름을 3자이상 입력해주세요.");
    }
  };

  useEffect(() => {
    console.log(getValues());
  }, [watch]);
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
          onClick={checkEmailValiable}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
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
            onClick={(e) => submitFormData(e)}
          />
        </S.SignUpButtonContainer>
      </form>
    </S.Container>
  );
};

export default SignUpForm;
