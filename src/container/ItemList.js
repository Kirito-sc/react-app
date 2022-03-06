import { useEffect, useState } from "react";
import Item from "../components/Item";
import Spinner from "../components/Spinner";


const ItemList = ({categoryId }) => {

    const url = "https://run.mocky.io/v3/94cf59fe-5883-42e5-9c80-3e14ffa228f6"

    const [products, setProducts] = useState([]);

    useEffect(() => {

        getProducts()

    }, [categoryId])

    const getProducts = () => {
        /*uso de fetch API*/
        fetch(url)
            .then(resp => resp.json())
            .then(data => { 
                (categoryId)?setProducts(data.filter(item => item.categoria ===categoryId)): setProducts(data )
            }) //filtra las categorias del array cuando carga la API
           
    }


    return (
        <>
            {
                //  si el array tiene algo lo muestra sino muestra cargando
                products.length > 0 ? products.map(item => <Item key={item.id} item={item} />) : <Spinner/>

            }

        </>
    )
}
export default ItemList
