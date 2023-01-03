import React, { useState } from "react";
import { Main, InputContainer, SubmitContainer, LinkContainer } from "./styles";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [image, setImage] = useState<string>("");
  function signUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up",
      {
        email: email,
        password: password,
        username: username,
        pictureUrl: image,
      }
    );
    res.then((res) => console.log(res));
    res.catch((err) => console.log(err.res));
  }
  return (
    <Main>
      <div>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>
      <div>
        <form onSubmit={signUp}>
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
