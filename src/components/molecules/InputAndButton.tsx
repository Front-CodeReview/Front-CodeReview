import {
  UseFormRegister,
  FieldValues,
  UseFormWatch,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./styled";

type InputAndButtonPropsType = {
  type: "button" | "submit" | "reset";
  name: string;
  onClick: () => void;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  getValues?: UseFormGetValues<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
  isEmailPass?: boolean;
};

// 버튼과 함께 쓰는 인풋 컴포넌트
const InputAndButton = (props: InputAndButtonPropsType) => {
  const {
    onClick: checkValiable,
    type,
    name,
    register,
    getValues,
    setValue,
    watch,
    isEmailPass,
  } = props;
  return (
    <>
      <S.InputAndButtonContainer>
        <Input
          name={name}
          register={register}
          getValues={getValues}
          setValue={setValue}
          watch={watch}
        />
        {isEmailPass ? (
          <Button text={"중복 확인 완료"} type={"button"} bgColor={"hidden"} />
        ) : (
          <Button
            type={type}
            text={"중복 확인하기"}
            bgColor={"grey"}
            onClick={checkValiable}
          />
        )}
      </S.InputAndButtonContainer>
    </>
  );
};

export default InputAndButton;
