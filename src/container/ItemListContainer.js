import Item from '../components/Item.js'
import { useEffect ,useState} from "react";


const ItemListContainer = () => {

 

  const url ="https://run.mocky.io/v3/94cf59fe-5883-42e5-9c80-3e14ffa228f6"

  const [products, setProducts] = useState([]);

  useEffect(() => {

       getProducts()
     
  }, [])

  const getProducts=()=>{
       /*uso de fetch API*/
      fetch(url)
      .then(resp => resp.json())
      .then(data =>setProducts(data))
  }

  return (
      <>
          {
              //  si el array tiene algo lo muestra sino muestra cargando
              products.length > 0 ? products.map(item => <Item key={item.id} item={item} />) : <h2>Loading...</h2>

          }

      </>
  )

}

export default ItemListContainer