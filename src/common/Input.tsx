import React from "react";
import styled from "styled-components";

interface Props {
  id?: string;
  className?: string;
  name?: string;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputStyle = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid grey;

  &:focus {
    outline: none;
  }
`;

const Input = (props: Props) => {
  return (
    <InputStyle
      id={props.id}
      className={props.className}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
    />
  );
};

export default Input;
