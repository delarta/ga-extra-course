import React, { useEffect, useState } from 'react'
import { Container, Jumbotron, Table } from 'reactstrap';
import axios from "axios"

export default function HeroesPage() {
  const [ heroes, setHeroes ] = useState([])

  useEffect(()=>{
    axios({
      url: "http://localhost:8000/heroes/get",
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
        // getItem method is to get the item in localStorage with key as parameter
        "authorization" : localStorage.getItem("token")
      }
    })
    .then(res => {
      // 200, 201 etc
      setHeroes(res.data.data)
    })
    .catch(err => 
      // 400, 401, 500 etc
      console.log(err))
  },[])

  return (
    <>
      <Jumbotron>
        <h1>Heroes</h1>
      </Jumbotron>
      <Container>
        <Table>
          <thead>
            <th>Name</th>
            <th>Born</th>
            <th>Description</th>
          </thead>
          <tbody>
            {heroes.length !== 0 && heroes.map(item => 
            
              <tr>
                <td>{item.name}</td>
                <td>{item.born}</td>
                <td>{item.description}</td>
              </tr>
            )
            }
          </tbody>
        </Table>
      </Container>
    </>
  )
}
