import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const {categoryId} = useParams()  

  return (
      <>
        
        <ItemList categoryId={categoryId}></ItemList>
      </>
  )
}
export default ItemListContainer