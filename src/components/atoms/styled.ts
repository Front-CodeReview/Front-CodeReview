import { styled } from "styled-components";

// input
export const RegisterInput = styled.input`
  padding: 1rem;
  border-radius: 8px;
`;

// label text
export const InputLabelText = styled.div`
  padding: 1rem 0;
  font-weight: 600;
  font-size: 16px;
  color: #222;
`;

// button
export const DefaultButton = styled.button<{
  colorType: "black" | "grey";
}>`
  width: 100%;
  background-color: ${(props) =>
    props.colorType === "black" ? "#222" : "#ddd"};
  color: ${(props) => (props.colorType === "black" ? "#fff" : "#222")};
  font-weight: 700;
  padding: 1rem;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
`;
