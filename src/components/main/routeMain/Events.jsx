import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Events = () => {
  return (
    <Container>
      <Link to="/events"></Link>
      <Button variant="contained">
        {<Link to="/">возвращаться на главную</Link>}
      </Button>
    </Container>
  );
};
const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
  }
`;
