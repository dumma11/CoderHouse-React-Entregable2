import { useState } from "react"
import { cartContext } from "./cartContext"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addToCart = item => setCart([...cart, item])

    const clearCart = () => setCart([])

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const getQuantity = () => {
        const qtyOnly = cart.map(item => item.qty)
        const total = qtyOnly.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return total
    }

    const getTotal = () => {
        const priceOnly = cart.map(item => item.price*item.qty)
        const total = priceOnly.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return total
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart, getQuantity, getTotal, removeFromCart }}>
            {children}
        </cartContext.Provider>

    )
}

export default CartProvider

