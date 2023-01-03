import React, { useState } from "react";
import { colors } from "../constants/colors";
import styled from "styled-components";

export default function HomeDesktop() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Main>
      <div>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>
      <div>
        <form>
          <InputContainer
            type={"email"}
            placeholder={"email"}
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }></InputContainer>
          <InputContainer
            type={"password"}
            placeholder={"password"}
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }></InputContainer>
          <SubmitContainer type={"submit"} value={"Login"}></SubmitContainer>
        </form>
      </div>
    </Main>
  );
}

const Main = styled.div`
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

const InputContainer = styled.input`
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

const SubmitContainer = styled.input`
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
