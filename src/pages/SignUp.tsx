import React, { useState } from "react";
import { Main, InputContainer, SubmitContainer, LinkContainer } from "./styles";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [image, setImage] = useState<string>("");
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
          <InputContainer
            type={"name"}
            placeholder={"username"}
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }></InputContainer>
          <InputContainer
            type={"url"}
            placeholder={"picture url"}
            value={image}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setImage(e.target.value)
            }></InputContainer>
          <SubmitContainer type={"submit"} value={"Sign Up"}></SubmitContainer>
          <LinkContainer to={"/"}>
            <h3>Switch back to log in</h3>
          </LinkContainer>
        </form>
      </div>
    </Main>
  );
}
