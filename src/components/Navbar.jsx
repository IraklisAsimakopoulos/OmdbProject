import { Link } from "react-router-dom";
import { IconHeart } from "@tabler/icons-react";
import styled from "styled-components";

const StyledDiv = styled.div`
  .nav {
    background-color: #333;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 2rem;
    min-height: 100px;
  }

  .site-title {
    font-size: 4rem;
  }
  .favorites {
    font-size: 3rem;
  }
  .nav a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
  }
`;

export default function Navbar() {
  return (
    <StyledDiv>
      <nav className="nav">
        <Link to="/" className="site-title">
          OMDB Search
        </Link>
        <Link to="/favorites" className="favorites">
          <span>
            <IconHeart color="red" />
          </span>
          Favorites
        </Link>
      </nav>
    </StyledDiv>
  );
}
