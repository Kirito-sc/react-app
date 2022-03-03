

const ItemDetail = ({ item }) => {

  return (

    <>
      <div className="contieneDetail">

        <div>
          <img src={item.img} className="image-Detail" alt="..." />
          <img src={item.img} className="image-Detail" alt="..." />
          <img src={item.img} className="image-Detail" alt="..." />

        </div>

        <div className="d-flex justify-content-between align-items-center ">
          <div>
            <h1 className="text-center title">{item.nombre}</h1>
            <p className="description ">Descripcion: {item.descripcion}</p>
          </div>
          <img src={item.img} className="image" alt="..." />
          <button className="btn btn-primary buttonDetail">Agregar al carrito</button>
        </div>
      </div>
      <br />
      
      <div className="">
        <p className="text-center">Stock disponible: {item.stock} </p>
        <h5 className="text-center title">${item.precio} </h5>
      </div>

    </>
  )
}

export default ItemDetail