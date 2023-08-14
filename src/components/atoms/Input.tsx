import {
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
  useForm,
} from "react-hook-form";
import * as S from "./styled";
import { useEffect } from "react";

type InputPropsType = {
  type?: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  getValues?: UseFormGetValues<FieldValues>;
  setValue?: UseFormSetValue<FieldValues>;
};

const Input = (props: InputPropsType) => {
  const { type, placeholder, name, register } = props;

  return (
    <>
      <S.RegisterInput
        type={type}
        placeholder={placeholder}
        {...register(name)}
      ></S.RegisterInput>
    </>
  );
};

export default Input;
