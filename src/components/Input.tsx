import React from "react";
import styled from "styled-components";
import { colors } from "../constants/colors";

interface ParametersInput {
  type: string;
  placeholder: string;
  value: string;
  onChange(): void;
}

export default function Input({
  type,
  placeholder,
  value,
  onChange,
}: ParametersInput) {
  return (
    <InputContainer
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}></InputContainer>
  );
}

const InputContainer = styled.input`
  width: 90%;
  font-family: "Oswald", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 27px;
  color: ${colors.dark.secondaryColorText};

  ::placeholder {
    color: ${colors.dark.secondaryColorText};
    font-size: 27px;
  }
`;
