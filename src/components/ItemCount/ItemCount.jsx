import { useContext, useState } from 'react'
import './ItemCountStyle.css'
import { cartContext } from '../../context/cartContext'

function ItemCount({detail}) {
    const [count, setCount] = useState(1)

    const handleAdd = () => setCount(count +1)
    const handleSub = () => setCount(count -1)

    const { addToCart } = useContext(cartContext)
    const handleAddToCart = () => addToCart({...detail, qty: count})

    return (
        <div className="item-count-container">
            <div className="counter-display">
                <button onClick={handleSub} className="counter-btn">-</button>
                <p className="counter-number">{count}</p>
                <button onClick={handleAdd} className="counter-btn">+</button>
            </div>
            <button onClick={handleAddToCart} className="add-to-cart-btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount