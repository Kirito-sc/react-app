import { Link } from "react-router-dom"


const Item = ({ item }) => {

  return (

    <>

   
      <div className="contiene">
        <div className="card" style={{ "width": "18rem" }}>
          <Link to={`/item/${item.id}`} className=""> <img src={item.img} className="tarjeta" alt="..." /> </Link>
          <div className="card-header">
            <h5 className="card-title ">{item.nombre}</h5>
            <h5 className="card-subtitle">{item.precio} </h5>
            <p className="card-text ">Descripcion: {item.descripcion}</p>
            
            <Link to={`/item/${item.id}`} className="btn btn-primary btn-lg btn-block">Ver detalles</Link>
          

          </div>
        </div>
      </div>

    </>
  )
}
export default Item