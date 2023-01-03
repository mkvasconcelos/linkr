import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImageContext, TokenContext } from "../contexts/contexts";
import { Main, InputContainer, SubmitContainer, LinkContainer } from "./styles";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setImage } = useContext(ImageContext);
  const { setToken } = useContext(TokenContext);
  const navigate = useNavigate();
  function login(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const res = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-in",
      {
        email: email,
        password: password,
      }
    );
    res.then((res) => {
      navigate("/timeline");
      setImage(res.data.user.avatar);
      setToken(res.data.token);
    });
    res.catch((err) => console.log(err.res));
  }
  return (
    <Main>
      <div>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>
      <div>
        <form onSubmit={login}>
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
