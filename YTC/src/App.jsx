import styled, { ThemeProvider } from "styled-components";

//Components
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { DarkTheme, LightTheme } from "./Utils/Themes";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Video from "./Pages/Video";
import SignIn from "./Pages/SignIn";

//Styles
const Container = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.LightBgColor};
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div`
  padding: 20px;
`;

// Main

//Routes

const App = () => {
  const [DarkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={DarkMode ? DarkTheme : LightTheme}>
      <Container>
        <BrowserRouter>
          <Menu setDarkMode={setDarkMode} DarkMode={DarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video">
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
};

export default App;
