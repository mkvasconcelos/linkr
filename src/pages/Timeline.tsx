import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import { TokenContext } from "../contexts/contexts";

export default function Timeline() {
  const { token } = useContext(TokenContext);
  console.log(token);
  return (
    <div>
      <NavBar />
    </div>
  );
}
