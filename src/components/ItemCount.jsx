
import React, {useState} from "react"


const ItemCount = ({stock, addToCart})=>{
    
    const [contador, setContador] = useState (1);
   

    const aumentar = () => {
        if (contador < stock) {setContador(contador + 1)}
    }

    const restar = () => {
        if (contador >1){setContador(contador-1)}
    }

    return(
    <>
     <div className="buttonCount">
    <button onClick={restar} className ="btn btn-outline-info">-</button>
    < h1 className="btn btn-primary btn-lg btn-block">{contador}</h1>
    <button onClick ={aumentar} className ="btn btn-outline-info">+</button>
    <button onClick={()=>addToCart(contador)} className="btn btn-primary">Agregar al carrito</button>
     </div>
      
     </>

    )


}

export default ItemCount