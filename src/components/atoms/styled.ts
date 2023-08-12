import { styled } from "styled-components";

// input
export const RegisterInput = styled.input`
  padding: 1rem;
  border-radius: 8px;
`;

// button
export const DefaultButton = styled.button<{
  colorType: "black" | "grey";
}>`
  background-color: ${(props) =>
    props.colorType === "black" ? "#222" : "#ddd"};
  color: ${(props) => (props.colorType === "black" ? "#fff" : "#222")};
  font-weight: 700;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
`;
