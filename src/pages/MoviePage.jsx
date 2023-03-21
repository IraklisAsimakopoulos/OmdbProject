import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apikey from "../apikey";
import { Card, Image, Text } from "@mantine/core";

export default function MoviePage() {
  const [movieData, setMovieData] = useState({});

  let { id } = useParams();

  useEffect(() => {
    getMovieInfo();
  }, []);

  const getMovieInfo = () => {
    let url = "http://www.omdbapi.com/?apikey=" + apikey + "&i=" + id;
    axios.get(url).then((res) => {
      console.log(typeof res.data, res.data);
      setMovieData(res.data);
      Object.keys(res.data).map((item, i) =>
        console.log("", item, res.data[item])
      );
    });
  };

  return (
    <div style={{ padding: "100px" }}>
      {movieData && movieData.Response !== "False" && (
        <Card
          style={{ padding: "25px" }}
          shadow="sm"
          padding="lg"
          radius="md"
          withBorder
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card.Section>
              {movieData.Poster && (
                <Image
                  src={movieData.Poster}
                  height={"600px"}
                  width={"auto"}
                  alt={movieData.Title}
                />
              )}
            </Card.Section>
            <div>
              {movieData &&
                Object.keys(movieData).map((item, i) => (
                  <Text
                    style={{ maxWidth: "50%", paddingLeft: "50px" }}
                    key={i}
                    size="sm"
                    color="dimmed"
                  >
                    {item}
                    {": "}
                    {JSON.stringify(movieData[item])}
                  </Text>
                ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
