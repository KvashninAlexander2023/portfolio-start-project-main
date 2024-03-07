import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { AboutMe } from "./layout/sections/about-me/About-me";
import { Quote } from "./layout/sections/quote/Quote";
import { Contacts } from "./layout/sections/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Quote />
      <Works />
      <Skills />
      <AboutMe />
      <Contacts />
    </div>
  );
}

export default App;

{
  /* <Title>Welcome to IT-INCUBATOR</Title> */
}
// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;
