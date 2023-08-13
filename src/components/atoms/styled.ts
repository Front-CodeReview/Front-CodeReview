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

// titleText
export const TitleBoldText = styled.div`
  width: 100%;
  padding-top: 1rem;
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
  color: #222;
`;

// text contents
export const TextContentsGreatingContainer = styled.div`
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #222;
  text-align: center;
`;

export const TextContentsGreatingName = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: blueviolet;
`;

export const TextContentsGreatingDescription = styled.div`
  font-size: 24px;
`;

export const GreetingNameContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
