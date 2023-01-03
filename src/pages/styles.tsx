import styled from "styled-components";
import { colors } from "../constants/colors";
import { Link } from "react-router-dom";

export const Main = styled.div`
  height: 100vh;
  color: ${colors.dark.primaryColorText};
  display: flex;
  h1 {
    font-size: 106px;
  }
  h2 {
    font-size: 43px;
    width: 60%;
  }
  div:first-child {
    background-color: ${colors.dark.primaryColor};
    width: 60%;
    padding: 25vh 0 0 5vw;
  }
  div:last-child {
    background-color: ${colors.dark.secondaryColor};
    width: 40%;
  }
  form {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputContainer = styled.input`
  width: 90%;
  height: 65px;
  font-family: "Oswald", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 27px;
  color: ${colors.dark.secondaryColorText};
  padding-left: 10px;
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
  ::placeholder {
    color: ${colors.dark.secondaryColorText};
    font-size: 27px;
  }
`;

export const SubmitContainer = styled.input`
  width: 90%;
  height: 65px;
  font-family: "Oswald", sans-serif, Arial, Helvetica, sans-serif;
  font-size: 27px;
  background-color: ${colors.dark.buttonColor};
  color: ${colors.dark.primaryColorText};
  margin-bottom: 10px;
  border-radius: 6px;
  border: none;
`;

export const LinkContainer = styled(Link)`
  color: ${colors.dark.primaryColorText};
  h3 {
    font-size: 20px;
    font-weight: 400;
  }
`;
