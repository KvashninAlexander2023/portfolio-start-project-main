import "./App.css";
import styled from "styled-components";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/skills/Skills";
import { Works } from "./layout/sections/works/Works";
import { AboutMe } from "./layout/sections/about-me/About-me";
import { Quote } from "./layout/sections/quote/Quote";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import background from "../src/assets/images/background.svg"
import { myTheme } from "./styles/Theme.styled";

function App() {
  return (
    <MainPageWrapper className="App">
      <Header />
      <Main />
      <Quote />
      <Works />
      <Skills />
      <AboutMe />
      <Contacts />
      <Footer/>
    </MainPageWrapper>
  );
}

export default App;



// пробовал поставить фон на все приложение

const MainPageWrapper = styled.div`
  /* width: 100%;
  height: 100%; */
  background-color: #282c33;
  background-image: url(${background});
 //background-position: 50% 60%; /* Определяет положение фонового изображения */
  background-position: 50% 96vh; /* Определяет положение фонового изображения */
  background-size: 113%; /* Масштабирует изображение до заполнения области */
  background-repeat: no-repeat; /* Отключает повторение фонового изображения*/
  

  @media screen and (max-width: 860px) {
    background-image: none;
  }
 

`

  


  /* <Title>Welcome to IT-INCUBATOR</Title> */

// const Title = styled.h1`
//     font-size: 1.5em;
//     text-align: center;
//     color: #e91e63;
// `;
