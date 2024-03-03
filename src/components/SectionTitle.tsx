import styled from "styled-components";

export const SectionTitle = styled.h2`
  &::before{
    content: '#';
    /* display: block; */
    width: 50px; /* Ширина решетки */
    height: 5px; /* Высота решетки */
    color: #eb2ac1; /* Цвет решетки */
    margin-bottom: 0.5em; /* Расстояние между решеткой и заголовком */
  }
  &::after{
    content: '----------------';
    /* display: block; */
    width: 50px; /* Ширина решетки */
    height: 5px; /* Высота решетки */
    color: #eb2ac1; /* Цвет решетки */
    margin-bottom: 0.5em; /* Расстояние между решеткой и заголовком */
  }
`;