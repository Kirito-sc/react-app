import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const Icon= ()=>{

    return <div className="App" style={{fontSize:"3em"}}>  {<FontAwesomeIcon icon={faShoppingCart}/>}</div>
  
}

export default Icon