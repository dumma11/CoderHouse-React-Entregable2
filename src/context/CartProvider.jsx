import { useState } from "react";
import { cartContext } from "./cartContext";

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addToCart = item => setCart([...cart, item])

    const clearCart = () => setCart([])

    const getQuantity = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart, getQuantity }}>
            {children}
        </cartContext.Provider>

    )
}

export default CartProvider

