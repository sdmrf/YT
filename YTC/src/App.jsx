import styled, { ThemeProvider } from "styled-components";

//Components
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { DarkTheme, LightTheme } from "./Utils/Themes";
import { useState } from "react";

//Styles
const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.LightBgColor};
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

const App = () => {
  const [DarkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={DarkMode ? DarkTheme : LightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} DarkMode={DarkMode} />
        <Main>
          <Navbar />
          <Wrapper>YTC</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
