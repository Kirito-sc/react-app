import React, { useState, useEffect } from 'react'
import Item from '../components/Item'


const ItemList = () => {

    const [products, setProducts] = useState([])


    useEffect(() => {
        getListProducts()
        console.log("se cargo mi efecto")
    }, [])


    const listProducts = [
        { id: 1, categoria: 'remera', nombre: 'remera', stock: 10, descripcion: 'remera negra Hinata', precio: `$ ${2100}`, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/hinata-remera1-35311df78d11db6b4a16286509355548-320-0.jpg' },
        { id: 2, categoria: 'chaqueta', nombre: 'chaqueta', stock: 6, descripcion: 'chaqueta beige, Shingeki no Kyojin', precio: `$ ${2900}`, img: "https://www.koi-nya.net/img/subidos_posts/2013/03/survey-corps-4.jpg" },
        { id: 3, categoria: 'gorra', nombre: 'gorra', stock: 15, descripcion: 'gorra negra, Shingeki no Kyojin', precio: `$ ${1100}`, img: 'https://static.wixstatic.com/media/0e4cd5_1d9f93c98bfd4ec78cc20a7db718a27e~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85/0e4cd5_1d9f93c98bfd4ec78cc20a7db718a27e~mv2.jpg' },
        { id: 4, categoria: 'remera', nombre: 'remera', stock: 10, descripcion: 'remera negra, Hitachi', precio: `$ ${2100}`, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/mangekyou1-b000614800a766b86316458923525421-320-0.jpg' },
        { id: 5, categoria: 'chaqueta', nombre: 'chaqueta', stock: 6, descripcion: 'chaqueta 4 hokage', precio: `$ ${2900}`, img: "data:image/jpeg;base64,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" },
        { id: 6, categoria: 'gorra', nombre: 'gorra', stock: 15, descripcion: 'gorra violeta, one piece', precio: `$ ${1100}`, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELhsS9PNUeex7MAT2-gO7wSBpoHUJF_TKDw&usqp=CAU' },
        { id: 7, categoria: 'remera', nombre: 'remera', stock: 10, descripcion: 'remera negra, Nezuko', precio: `$ ${2100}`, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/nezuko-21-0514ef2e0b232aceaf16372643380861-320-0.jpg' },
        { id: 8, categoria: 'chaqueta', nombre: 'chaqueta', stock: 6, descripcion: 'chaqueta negra y blanca, Naruto Sabio de los Seis Caminos', precio: `$ ${2900}`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQa7VLl00qpG7Ofjr__gzQG3q4XxVrqPjdMQ&usqp=CAU" },
        { id: 9, categoria: 'remera', nombre: 'remera', stock: 10, descripcion: 'remera negra Eren', precio: `$ ${2100}`, img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/eren-3-remera11-8b7d20709192c3f46516445098126772-320-0.jpg' },
        { id: 10, categoria: 'chaqueta', nombre: 'chaqueta', stock: 6, descripcion: 'chaqueta Naruto naranja con negro', precio: `$ ${2900}`, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROGc7hOP2foOMxI-ZDYZ0c7JDqlx0g-mb3g&usqp=CAU" },
        { id: 11, categoria: 'gorra', nombre: 'gorra', stock: 15, descripcion: 'gorra roja, Kimetsu no Yaiba', precio: `$ ${1100}`, img: 'data:image/jpeg;base64,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' },
        { id: 12, categoria: 'remera', nombre: 'remera', stock: 10, descripcion: 'remera negra Tanjiro', precio: `$ ${2100}`, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQbNjBzseqwaUv3sb7iBAVl6iqnWEzxDtvA&usqp=CAU' },
    ]

    const getListProducts = () => {


        const getListPromise = new Promise((res, rej) => {
            setTimeout(() => {
                res(listProducts)
            }, 2000)
        })

        getListPromise.then(
            data => {
                setProducts(data)
                console.log(data)
            }
        )
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


export default ItemList
