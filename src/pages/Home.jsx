import { Pagination } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import apikey from "../apikey";
import MovieGrid from "../components/MovieGrid";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  p {
    color: white;
    font-size: 3rem;
  }
  button {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [activePage, setPage] = useState(1);
  const [searchData, setSearchData] = useState({});
  const [totalPages, setTotalPages] = useState(0);
  const [searchResult, setSearchResult] = useState("Search to find results!");
  const navigate = useNavigate();

  const handleMoreMovieInfo = (id) => {
    const url = "/movie/" + id;
    navigate(url);
  };
  const handleSearch = (searchData, page) => {
    let url = "http://www.omdbapi.com/?apikey=" + apikey;
    if (searchData.search && searchData.search !== "") {
      url += "&s=" + searchData.search;

      if (searchData.type && searchData.type !== "") {
        url += "&type=" + searchData.type;
      }
      if (searchData.year && searchData.year !== "") {
        url += "&y=" + searchData.year;
      }
      if (page && page > 0) {
        url += "&page=" + page;
      }
      console.log(url);
      axios.get(url).then((res) => {
        console.log(res);
        if (res.data.totalResults) {
          setTotalPages(findTotalPages(res.data.totalResults));
          setSearchResult("");
        } else {
          setTotalPages(0);
          if (res.data.Error === "Movie not found!")
            setSearchResult(" No titles found! Try Again");
          if (res.data.Error === "Too many results.")
            setSearchResult(res.data.Error + " Be more specific");
        }
        setMovies(res.data.Search);
        setPage(page);
      });
    } else {
      setSearchResult("Search to find results! Search field is required");
    }
  };

  const handleSubmit = (searchData) => {
    console.log(searchData);

    if (searchData) {
      setSearchData(searchData);
      handleSearch(searchData, 1);
    }
  };

  const handlePagination = (page) => {
    handleSearch(searchData, page);
  };

  return (
    <div style={{ width: "100%", padding: "50px", paddingBottom: "0" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Search onSubmit={handleSubmit} />
      </div>
      <div style={{ padding: "50px" }}>
        {movies !== [] && (
          <MovieGrid onMoreMovieInfo={handleMoreMovieInfo} movies={movies} />
        )}
      </div>
      {totalPages !== 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          <Pagination
            color={"rgba(0,0,0,0.5)"}
            value={activePage}
            onChange={handlePagination}
            total={totalPages}
          />
        </div>
      )}
      {searchResult !== "" && (
        <StyledDiv>
          <p>{searchResult}</p>
        </StyledDiv>
      )}
    </div>
  );
}

const findTotalPages = (totalResults) => {
  let pages = totalResults / 10;
  if (totalResults % 10 !== 0) {
    pages++;
  }
  return pages;
};
