import styled from "styled-components";

interface Props {
  title: string;
}

const ButtonStyle = styled.div`
  width: 100%;
  background-color: tomato;
  color: white;
`;

const Button = (props: Props) => {
  return <ButtonStyle>{props.title}</ButtonStyle>;
};

export default Button;
