import Icon from './Cardwidget';


const NavBar = () => {

  return (
    <>
      <div className="navbar-nav mx-auto barra">

        <h1 className="text-center">E-Commerece</h1>

        {/* Coloco el icono traido de Cartwidget */}

        <p className="text-start"> <Icon></Icon> </p>


        <div className="container barra">
          <div className="navItems">
            <p> <a href="#" className="">Productos</a></p>
            <p><a href="#" className="">Contactos</a></p>
            <p><a href="#" className="">Talles</a></p>
            <p><a href="#" className="text-end">Envios</a></p>

          </div>
        </div>

      </div>

    </>

  )
}

export default NavBar;