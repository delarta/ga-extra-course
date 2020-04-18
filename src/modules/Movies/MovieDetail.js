import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";

export default function MovieDetail() {
  const urlAPI = "https://ghibliapi.herokuapp.com";

  const [film, setFilm] = useState([]);

  const history = useHistory();

  const query = new URLSearchParams(history.location.search);
  const movieId = query.get("id");

  useEffect(() => {
    axios({
      url: `${urlAPI}/films/${movieId}`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setFilm(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <h1>{film.title}</h1>
        <p>{film.description}</p>
      </Container>
    </div>
  );
}
