// CSS In JS
import styled from "styled-components";

const LabelText = styled.label`
  color: red;
  font-size: 12px;
  padding-bottom: 5px;
`;

interface Props {
  text: string;
}

const Label = (props: Props) => {
  return <LabelText>{props.text}</LabelText>;
};

export default Label;
