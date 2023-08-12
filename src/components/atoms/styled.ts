import { styled } from "styled-components";

// input
export const RegisterInput = styled.input`
  width: 100%;
  padding: 1rem;
`;

// button
export const DefaultButton = styled.button<{
  colorType: "black" | "grey";
}>`
  width: 100%;
  background-color: ${(props) =>
    props.colorType === "black" ? "#222" : "#ddd"};
  color: #fff;
  font-weight: 700;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
`;
