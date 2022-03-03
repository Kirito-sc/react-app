import React from "react";
import { Link } from 'react-router-dom';
import {NavDropdown} from   "react-bootstrap"
import Cardwidget from "./Cardwidget";



const NavBar = () => {

  return (
    <>
      <div className="navbar-nav mx-auto barra">

        <h1 className="text-center title">E-Commerece</h1>

     



        <div className='navItems'>
             
          <Link to='/' className=""><Cardwidget /></Link>  {/* Coloco el icono traido de Cartwidget */}
          <Link to='/' className="nav-link linksNav">Inicio</Link>
          <NavDropdown className="nav-link linksNav" title="Productos" id="nav-dropdown" >
            <NavDropdown.Item eventKey="4.1"><Link to="category/remera" className="">Remeras</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2"><Link to="category/chaqueta"className="">Chaquetas</Link></NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3"><Link to="category/gorra" className="">Gorras</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Otros</NavDropdown.Item>
          </NavDropdown>

          <Link to="Contactos" className="nav-link linksNav">Contactos</Link>
          <Link to="contactos" className="nav-link linksNav">Talles</Link>
          <Link to="contactos" className="nav-link linksNav">Envios</Link>
          {/*    <NavLink to={'/contactos/'} className="nav-link">Contactos</NavLink>
          <NavLink to={'/talles/'} className="nav-link">Talles</NavLink>
          <NavLink to={'/envios/'} className="nav-link">Envios</NavLink> */}

        </div>

      </div>

    </>

  )
}

export default NavBar;