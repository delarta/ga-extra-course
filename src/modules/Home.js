import React, {useEffect} from 'react'
import { Nav, NavItem, NavLink, Container, Button } from 'reactstrap';

import {useHistory} from "react-router-dom"

export default function Home(props) {

  const history = useHistory();

  useEffect(() => {
    
    !localStorage.getItem("token") && history.push("/login")
  }, [])

  return (
    <div>
      
      <Container>
        <Nav>
          <NavItem>
            <NavLink href="#">Todo Hooks</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Todo Class</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Login</NavLink>
          </NavItem>
        </Nav>
        <h1>Welcome</h1>
        <Button onClick={() => history.push("/heroes")}>
          To Heroes
        </Button>
      </Container>

    </div>
  )
}
