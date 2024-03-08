import styled from "styled-components";
import { myTheme } from "../styles/Theme.styled";

export const SectionTitle = styled.h2`
  &::before {
    content: "#";
    /* display: block; */
    width: 50px; /* Ширина решетки */
    height: 5px; /* Высота решетки */
    color: ${myTheme.colors.colorAccent}; /* Цвет решетки */
    margin-right: 0.3em; /* Расстояние между решеткой и заголовком */
  }
  &::after {
    content: "----------------";
    /* display: block; */
    width: 50px;
    height: 5px;
    color: ${myTheme.colors.colorAccent}; /* Цвет линии */
    margin-left: 0.5em; /* Расстояние между линией и заголовком */
  }
`;
