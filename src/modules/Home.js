import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';

import {useHistory} from "react-router-dom"

export default function Home(props) {

  const history = useHistory();

  console.log(history)
  return (
    <div>
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

        <h1>Welcome {history.location.state.username}</h1>
    </div>
  )
}
