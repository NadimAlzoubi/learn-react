import {React, Component, Fragment} from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../img/starbucks1.png';
import {Link, NavLink} from "react-router-dom";
class Nav1 extends Component{
  render(){
    return (
      <Fragment>
        <nav className="nav">
          <div className="navLogo">
            <img className="logo" src={logo} title="logo" alt="logo"/>
            <span className='sp1'>starbucks</span>
          </div>
          <div className="navList">            
              <NavLink exact="true" to="/">Home</NavLink>
              <NavLink to="/Menu">Menu</NavLink>
              <NavLink to="/Curd">Curd</NavLink>
              <NavLink to="/Serveices">Services</NavLink>
              <NavLink to="/About">About</NavLink>
              <NavLink to="/FAQ">FAQ</NavLink>
              <NavLink to="/Phone" className="phoneN">+971505050</NavLink>
          </div>
        </nav>
      </Fragment>
    );  
  }
} 

export default Nav1;
