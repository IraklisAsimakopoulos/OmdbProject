import { Card, Image, Button, Title } from "@mantine/core";
import React from "react";
import styled from "styled-components";

export default function MovieCard({ movieData, onMoreMovieInfo }) {
  const handleMoreMovieInfo = () => {
    if (movieData) {
      onMoreMovieInfo(movieData.imdbID);
    }
  };

  const StyledDiv = styled.div`
    h1,
    h2,
    h3 {
      padding: 10px;
      color: white;
    }
  `;

  return (
    movieData && (
      <StyledDiv>
        <Card
          style={{
            padding: "25px",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
          }}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <Card.Section>
            {movieData.Poster && (
              <Image
                src={movieData.Poster}
                height={"300px"}
                alt={movieData.Title}
              />
            )}
          </Card.Section>

          {movieData.Title && (
            <Title size="sm" color="dimmed">
              Title: {movieData.Title}
            </Title>
          )}
          {movieData.Year && (
            <Title size="sm" color="dimmed">
              Release Year: {movieData.Year}
            </Title>
          )}

          <Button
            onClick={() => handleMoreMovieInfo()}
            variant="light"
            color="blue"
            fullWidth
            mt="md"
            radius="md"
            style={{ color: "white", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            Watch more info...
          </Button>
        </Card>
      </StyledDiv>
    )
  );
}
