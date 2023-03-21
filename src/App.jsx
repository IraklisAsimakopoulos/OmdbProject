import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Favorites from "./pages/Favorites";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import MoviePage from "./pages/MoviePage";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div``;

function App() {
  return (
    <StyledContainer>
      <Navbar />
      <StyledDiv>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/movie/:id" element={<MoviePage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </StyledDiv>
    </StyledContainer>
  );
}

export default App;
