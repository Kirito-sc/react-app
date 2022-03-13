import { createContext, useState } from "react"

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [itemsCart, setItemsCart] = useState([]);


    const addItem = (item, qty) => {

        if (isItemInCart(item.id)) {
            let index = itemsCart.findIndex(i => i.id ==item.id);
            let copyCart = [...itemsCart];
            copyCart[index].qty += qty;
            setItemsCart(copyCart);
        }
        else {

            const itemToAdd = { ...item, qty }

            setItemsCart([...itemsCart, itemToAdd]);

        }
    }


    const isItemInCart = (id) => { itemsCart.some(itemInCart => itemInCart.id == id) }





    const clearCart = () => {
        setItemsCart([]);
    }



    return (
        <CartContext.Provider value={{ addItem, itemsCart, clearCart }}>    {/*  es la funcion CartContext con el atributo provider que ya viene en react */}
            {children}

        </CartContext.Provider>
    )
}

export default CartContext;