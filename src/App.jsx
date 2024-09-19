import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import reactLogo from "./assets/react.svg";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/NavBar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Skills from "./components/Skills/Skills.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Router>
          <Navbar />
          <Body>
            <Hero />
            <Wrapper>
              <Skills />
            </Wrapper>
          </Body>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
