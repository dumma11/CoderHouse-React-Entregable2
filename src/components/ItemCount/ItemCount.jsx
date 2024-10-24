import './ItemCountStyle.css'

function ItemCount() {
    return (
        <div className="item-count-container">
            <div className="counter-display">
                <button className="counter-btn">-</button>
                <p className="counter-number">0</p>
                <button className="counter-btn">+</button>
            </div>
            <button className="add-to-cart-btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount