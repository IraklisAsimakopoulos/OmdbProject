import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apikey from "../apikey";
import { Card, Divider, Image, Loader, Title } from "@mantine/core";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  padding: 100px;
  h1,
  h2,
  h3 {
    padding: 10px;
  }
`;

export default function MoviePage() {
  const navigate = new useNavigate();
  const [movieData, setMovieData] = useState();

  let { id } = useParams();

  useEffect(() => {
    getMovieInfo();
  }, []);

  const getMovieInfo = () => {
    let url = "http://www.omdbapi.com/?apikey=" + apikey + "&i=" + id;
    axios.get(url).then((res) => {
      if (res.data.Response === "False") {
        setTimeout(() => navigate("/"), 3000);
      } else {
        setMovieData(res.data);
      }
    });
  };

  return (
    <StyledDiv>
      {movieData && movieData.Response === "False" && (
        <div>
          <Title color={"white"} order={1}>
            The id is not correct!
          </Title>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loader align={"center"} style={{ marginTop: "100px" }} />
          </div>
        </div>
      )}
      {movieData && movieData.Response !== "False" && (
        <Card
          style={{
            background: "rgba(0,0,0,0.5)",
            color: "white",
            padding: "100px",
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
                height={"600px"}
                width={"auto"}
                align={"center"}
                alt={movieData.Title}
              />
            )}
          </Card.Section>
          <div>
            {movieData && (
              <div>
                <Title
                  style={{ fontSize: "3rem" }}
                  underline={"true"}
                  align={"center"}
                  order={1}
                >
                  {movieData.Title}
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.Plot}
                </Title>
                <Divider size="md" />
                <Title align={"start"} underline={"true"} order={2}>
                  Stars
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.Actors}
                </Title>
                <Divider size="md" />
                <Title align={"start"} underline={"true"} order={2}>
                  Creators
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.Writer}
                </Title>
                <Divider size="md" />
                <Title align={"start"} underline={"true"} order={2}>
                  Genre
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.Genre}
                </Title>

                <Divider size="md" />
                <Title align={"start"} underline={"true"} order={2}>
                  Language
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.Language}
                </Title>
                <Divider size="md" />
                <Title align={"start"} underline={"true"} order={2}>
                  IMDB Rating
                </Title>
                <Title align={"start"} order={3}>
                  {movieData.imdbRating}
                </Title>
                <Divider size="md" />
              </div>
            )}
          </div>
        </Card>
      )}
    </StyledDiv>
  );
}
