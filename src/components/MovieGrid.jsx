import React from "react";
import { Grid } from "@mantine/core";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    movies && (
      <Grid
        gutter={5}
        gutterXs="md"
        gutterMd="xl"
        gutterXl={50}
        justify={"center"}
      >
        {movies.map((movie) => (
          <Grid.Col key={movie.imdbID} sm={6} md={4} lg={3} xl={2.2}>
            <MovieCard movieData={movie} />
          </Grid.Col>
        ))}
      </Grid>
    )
  );
}
