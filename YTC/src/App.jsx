import styled, { ThemeProvider } from "styled-components";

//Components
import Menu from "./Components/Menu";
import Navbar from "./Components/Navbar";
import { DarkTheme, LightTheme } from "./Utils/Themes";
import { useState } from "react";

import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./Pages/Home";
import Video from "./Pages/Video";

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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/video/:id",
    element: <Video />,
  },
]);

const App = () => {
  const [DarkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={DarkMode ? DarkTheme : LightTheme}>
      <Container>
        <Menu setDarkMode={setDarkMode} DarkMode={DarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <RouterProvider router={router} />
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export default App;
