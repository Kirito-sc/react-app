import { Link } from "react-router-dom"


const Item = ({ item }) => {

  return (

    <>
        <div className="contiene">
          <div className="card" style={{ "width": "18rem" }}>
              <img src={item.img} className="tarjeta" alt="..." />
              <div className="card-header">
                  <h5 className="card-title ">{item.nombre}</h5>
                  <h5 className="card-subtitle">{item.precio} </h5>
                  <p className="card-text ">Descripcion: {item.descripcion}</p>
                  <p className="card-subtitle ">Stock disponible: {item.stock} </p>
                  <Link to={`/item/${item.id}`}className="linksNav barra">Detalles</Link>
                  <button className="btn btn-primary button">Agregar al carrito</button>
             
              </div>
          </div>
          </div>
    
    </>
  )
}
export default Item