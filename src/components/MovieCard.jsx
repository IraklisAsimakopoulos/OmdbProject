import { Card, Image, Text, Button } from "@mantine/core";
import React from "react";

export default function MovieCard({ movieData, onMoreMovieInfo }) {
  const handleMoreMovieInfo = () => {
    if (movieData) {
      onMoreMovieInfo(movieData.imdbID);
    }
  };

  return (
    movieData && (
      <Card
        style={{ padding: "25px" }}
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
          <Text size="sm" color="dimmed">
            Title: {movieData.Title}
          </Text>
        )}
        {movieData.Year && (
          <Text size="sm" color="dimmed">
            Release Year: {movieData.Year}
          </Text>
        )}

        <Button
          onClick={() => handleMoreMovieInfo()}
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
        >
          Watch more info...
        </Button>
      </Card>
    )
  );
}
