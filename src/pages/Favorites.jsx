import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Favorites() {
  const [data, setData] = useState([]);

  useEffect(() => {
    jsonObjects().then((res) => {
      console.log(typeof res.data.Search);
      setData(res.data.Search);
    });
  }, []);

  return (
    <div>
      {data.map((movie) => (
        <div key={String(movie.Title)}>{movie.Title}</div>
      ))}
    </div>
  );
}

const jsonObjects = () => {
  return axios.get("http://www.omdbapi.com/?apikey=3f927343&s=whale&t=comedy");
};
