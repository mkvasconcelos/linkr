import React, { useState } from "react";
import { Main, InputContainer, SubmitContainer, LinkContainer } from "./styles";

export default function Home() {
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
          <LinkContainer to={"/signup"}>
            <h3>First time? Create an account!</h3>
          </LinkContainer>
        </form>
      </div>
    </Main>
  );
}
