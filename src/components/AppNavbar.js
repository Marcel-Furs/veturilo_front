import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
import { Fragment, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';


function AppNavbar() {
  const [token, setToken] = useContext(LoginContext)

  const urls = [
    {url: "/login", name: "Login", auth: false},
    {url: "/register", name: "Register", auth: false},
    {url: "/stations", name: "Stations", auth: true},
    {url: "/logout", name: "Logout", auth: true}
  ]

  const isVisible = (auth) => {
      if(token == null && !auth) {
        return true;
      }
      if(token != null && auth) {
        return true;
      }
      return false;
  }

  return (
    <nav>
      <div>
        LOGO
      </div>
      <ul className='menu'>
        {urls.map(x => isVisible(x.auth) ? <li><Link className="nav-link" to={x.url}>{x.name}</Link></li> : "")}       
      </ul>
    </nav>
  )
}

export default AppNavbar;