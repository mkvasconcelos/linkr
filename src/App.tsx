import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ImageContext, TokenContext } from "./contexts/contexts";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline";

function App() {
  const [image, setImage] = useState<string>("");
  const [token, setToken] = useState<string>("");
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <ImageContext.Provider value={{ image, setImage }}>
        <BrowserRouter>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </BrowserRouter>
      </ImageContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
