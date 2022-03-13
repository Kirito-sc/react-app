
import { useParams } from "react-router-dom"

import ItemList from "./ItemList"

const ItemListContainer = () => {

    const { categoryId } = useParams()

    return (

        <div className="container">
            <ItemList categoryId={categoryId} > </ItemList>
        </div>
    )}
export default ItemListContainer
