import React, { useState } from "react";
import { Input, Button, Select } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import styled from "styled-components";

const years = [];
for (let i = 0; i <= 123; i++) {
  years.push(2023 - i + "");
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  gap: 20px;
  min-width: 80%;
  input {
    min-height: 60px !important;
    border-radius: 0.5rem;
  }
  button {
    min-height: 60px !important;
    align-self: end;
    border-radius: 0.5rem;
  }
`;

export default function Search({ onSubmit }) {
  const [searchData, setSearchData] = useState({
    search: "",
    type: "",
    year: "",
  });

  const handleChange = (e, key) => {
    let value = "";
    if (key === "search") {
      value = e.target.value;
    } else {
      value = e;
    }
    let newSearchData = { ...searchData };
    newSearchData[key] = value;
    setSearchData(newSearchData);
  };
  const handleClick = () => {
    onSubmit(searchData);
  };

  return (
    <StyledDiv>
      <Input.Wrapper withAsterisk label="Search by Text">
        <Input
          size="xl"
          onChange={(e) => handleChange(e, "search")}
          placeholder="Search"
        />
      </Input.Wrapper>
      <Select
        size="md"
        label="Movie Type"
        placeholder="Pick one"
        onChange={(e) => handleChange(e, "type")}
        data={[
          { value: "movie", label: "Movies" },
          { value: "series", label: "Series" },
          { value: "episode", label: "Episodes" },
        ]}
      />
      <Select
        size="md"
        label="Year"
        placeholder="Pick one"
        onChange={(e) => handleChange(e, "year")}
        data={years}
      />
      <Button onClick={() => handleClick()}>
        <IconSearch />
      </Button>
    </StyledDiv>
  );
}
