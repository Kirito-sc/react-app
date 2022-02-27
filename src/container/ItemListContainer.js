import ItemList from "./ItemList"


const ItemListContainer = ({saludo}) => {
  return (
    <>
   <h1 className='text-center'>{saludo}</h1>

    <ItemList/>
    </>
  )
}

export default ItemListContainer