import React, { useContext } from "react";
import { BiDownArrow } from "react-icons/bi";
import styled from "styled-components";
import { colors } from "../constants/colors";
import { ImageContext } from "../contexts/contexts";

export default function NavBar() {
  const { image } = useContext(ImageContext);
  return (
    <Main>
      <h1>linkr</h1>
      <div>
        <BiDownArrow />
        <img src={image} alt={"logo-profile"} />
      </div>
    </Main>
  );
}

const Main = styled.div`
  position: fixed;
  width: 100vw;
  height: 72px;
  background-color: ${colors.dark.primaryColor};
  color: ${colors.dark.primaryColorText};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5% 0 1.5%;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 49px;
  }
  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
    margin-left: 5px;
  }
`;
