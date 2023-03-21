import { Loader } from "@mantine/core";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: center;
  padding: 100px;
  p,
  span {
    color: white;
    font-size: 3rem;
  }
`;

export default function NoPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => navigate("/"), 3000);
  }, []);

  return (
    <StyledDiv>
      <p>404 Page not Found!</p>
      <p>You will be redirected to home in:</p>
      <Loader />
    </StyledDiv>
  );
}
