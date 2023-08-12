import { styled } from "styled-components";

export const DefaultButton = styled.button<{
  colorType: "black" | "white" | "grey";
}>`
  background-color: ${(props) =>
    props.colorType === "black"
      ? "#222"
      : props.colorType === "grey"
      ? "#ddd"
      : "#fff"};
  color: #fff;
  font-weight: 700;
`;
