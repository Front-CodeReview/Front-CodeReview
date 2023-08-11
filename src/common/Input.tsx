import styled from "styled-components";

interface Props {
  id?: string;
  className?: string;
  name?: string;
  type: string;
  placeholder: string;
  required: boolean;
  onChange: () => void;
}

const InputStyle = styled.input`
  width: 100%;
  height: 45px;
`;

const Input = (props: Props) => {
  return (
    <InputStyle
      id={props.id}
      className={props.className}
      name={props.className}
      type={props.type}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
    />
  );
};

export default Input;
