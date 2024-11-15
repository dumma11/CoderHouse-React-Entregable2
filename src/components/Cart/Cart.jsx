import { useCart } from "../../context/cartContext";
import { createOrder } from "../../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import "./Cart.css";

function Cart() {
    const { cart, getTotal } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const [name, email, phone] = form;

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: getTotal(),
        };
        createOrder(order);
    };

    return (
        <div className="cart-container">
            <h1 className="cart-title">Carrito de Compras</h1>

            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((prod) => (
                        <div className="cart-item" key={prod.id}>
                            <h2>{prod.title}</h2>
                            <p>Cantidad: {prod.qty}</p>
                        </div>
                    ))
                ) : (
                    <p className="cart-empty">Tu carrito está vacío.</p>
                )}
            </div>

            <div className="cart-form-container">
                <h2>Finalizar Compra</h2>
                <form className="cart-form" onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Nombre" required />
                    <input type="email" name="email" placeholder="ejemplo@gmail.com" required />
                    <input type="text" name="phone" placeholder="Teléfono" required />
                    <button type="submit" className="cart-submit-btn">
                        Finalizar compra
                    </button>
                </form>
                <p className="cart-total">Total: ${getTotal()}</p>
            </div>
        </div>
    );
}

export default Cart;