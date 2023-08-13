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
  onClick: any; // TODO
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  getValues?: UseFormGetValues<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
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
        <Button
          type={type}
          text={"중복확인"}
          bgColor={"grey"}
          onClick={checkValiable}
        />
      </S.InputAndButtonContainer>
    </>
  );
};

export default InputAndButton;
