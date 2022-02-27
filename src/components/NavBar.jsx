import React from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Cardwidget from "./Cardwidget";



const NavBar = () => {

  return (
    <>
      <div className="navbar-nav mx-auto barra">

        <h1 className="text-center title">E-Commerece</h1>

        {/* Coloco el icono traido de Cartwidget */}

       

        <div className='navItems'>

        <p className="text-start">  <Cardwidget /></p>
          <a href="#" className="linksNav">Productos</a>
          <a href="#" className="linksNav">Contactos</a>
          <a href="#" className="linksNav">Talles</a>
          <a href="#" className="linksNav">Envios</a>

          {/* <Link to="/pages/Home" className="nav-link">Productos</Link> */}
       {/*    <NavLink to={'/contactos/'} className="nav-link">Contactos</NavLink>
          <NavLink to={'/talles/'} className="nav-link">Talles</NavLink>
          <NavLink to={'/envios/'} className="nav-link">Envios</NavLink> */}

        </div>

      </div>

    </>

  )
}

export default NavBar;