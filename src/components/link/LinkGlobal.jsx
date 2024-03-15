import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkGlobal = () => {
  return (
    <Container>
      <MainContainer>
        <Link to="/aboutMe">Обо мне</Link>
        <Link to="/mentoring">Наставничество</Link>
        <Link to="/events">Мероприятия</Link>
        <Link to="/cases">Кейсы</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/contacts">Контакты</Link>
      </MainContainer>
    </Container>
  );
};
const MainContainer = styled("div")`
  display: flex;
  gap: 2rem;
`;

const Container = styled("div")`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 0.8rem;
  }
`;
