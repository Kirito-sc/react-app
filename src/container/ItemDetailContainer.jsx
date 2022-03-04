import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ItemDetail from './ItemDetail';





const ItemDetailContainer = () => {


    const {id } = useParams()

    const url = "https://run.mocky.io/v3/94cf59fe-5883-42e5-9c80-3e14ffa228f6"

    const [products, setProducts] = useState([]);


    useEffect(() => {

        getProducts()



    }, [id])

    const getProducts = () => {
        /*uso de fetch API*/
        fetch(url)
            .then(resp => resp.json())
            
            .then(data => setProducts(data.filter(item => item.id == id)))// filtra los id de producto
            .catch(err => console.log(err))


    }
    return (
        <>
            {
                //  si el array tiene algo lo muestra sino muestra cargando
                products.length > 0 ? products.map(item => <ItemDetail key={item.id} item={item} />) : <Spinner/>
              


            }

        </>
    )

}


export default ItemDetailContainer
