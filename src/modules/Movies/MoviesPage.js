import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Table, Container, Button } from "reactstrap";

import axios from "axios";

export default function MoviesPage() {
  const urlAPI = "https://ghibliapi.herokuapp.com";

  const [films, setFilms] = useState([]);

  const history = useHistory();

  useEffect(() => {
    axios({
      url: `${urlAPI}/films`,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setFilms(res.data);
    });
  }, []);

  return (
    <div>
      <Container>
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Director</th>
              <th>Release Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {films.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.director}</td>
                <td>{item.release_date}</td>
                <td>
                  <Button
                    color="primary"
                    onClick={() =>
                      history.push({
                        pathname: `/movies/detail?id=${item.id}`,
                      })
                    }
                  >
                    View More
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
