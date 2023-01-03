import React, { useState } from "react";
import { colors } from "../constants/colors";
import Input from "../components/Input";
import styled from "styled-components";

export default function HomeDesktop() {
  const [email, setEmail] = useState<string>("");
  return (
    <Main>
      <div>
        <h1>linkr</h1>
        <h2>save, share and discover the best links on the web</h2>
      </div>
      <div>
        <form>
          <label>
            <Input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
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
`;
