import styled from "styled-components";

interface Props {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 35px;
  background-color: tomato;
  color: white;
  border: none;
  border-radius: 3px;
`;

const Button = (props: Props) => {
  return <ButtonStyle type={props.type}>{props.title}</ButtonStyle>;
};

export default Button;
