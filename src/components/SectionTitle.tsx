import styled from "styled-components";

export const SectionTitle = styled.h2`
  &::before{
    content: '#';
    /* display: block; */
    width: 50px; /* Ширина решетки */
    height: 5px; /* Высота решетки */
    color: #C778DD; /* Цвет решетки */
    margin-right: 0.3em; /* Расстояние между решеткой и заголовком */
  }
  &::after{
    content: '----------------';
    /* display: block; */
    width: 50px; /* Ширина решетки */
    height: 5px; /* Высота решетки */
    color: #C778DD; /* Цвет решетки */
    margin-left: 0.5em; /* Расстояние между решеткой и заголовком */
  }
`;