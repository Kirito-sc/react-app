import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Cardwidget= ()=>{

    return <div className="icon" style={{fontSize:"3em"}}>  {<FontAwesomeIcon icon={faShoppingCart}/>}</div>
  
}

export default Cardwidget