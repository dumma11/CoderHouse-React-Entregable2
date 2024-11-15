import "./CartItem.css";

function CartItem({ prod, removeFromCart }) {
    return (
        <div className="cart-item">
            <h2 className="cart-item-title">{prod.title}</h2>
            <p className="cart-item-quantity">Cantidad: {prod.qty}</p>
            <button
                className="cart-item-remove-btn"
                onClick={() => removeFromCart(prod.id)}
            >
                Eliminar
            </button>
        </div>
    );
}

export default CartItem;