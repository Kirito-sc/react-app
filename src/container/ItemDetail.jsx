import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import CartContext from "../context/CartContext"
import ItemCount from "../components/ItemCount"


const ItemDetail = ({ item }) => {


  const { addItem, clearCart, getItemInCart } = useContext(CartContext);

  let newStock = item.stock;

  const [isInCart, setIsInCart] = useState(false);

  const addToCart = (qty) => {
    addItem(item, qty);
    setIsInCart(true);
  }

  let itemInCart = getItemInCart(item.id);

  if (itemInCart){newStock=item.stock-itemInCart.qty}

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

        </div>
      </div>
      <br />

      <div className="">

        <p className="text-center">Stock disponible: {newStock} </p>
        <h5 className="text-center title">${item.precio} </h5>


        <button onClick={clearCart} className="btn btn-primary">Vaciar Carrito</button>

        {isInCart ? <Link to="/cart"  className="buttonCount"><button className="btn btn-primary">Terminar Compra</button> </Link> :
          <p className="card-subtitle"> < ItemCount addToCart={addToCart} stock={newStock} /></p>
        }

      </div>
    </>
  )
}

export default ItemDetail