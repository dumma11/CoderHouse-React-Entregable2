import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../firebase/db";
import "./CheckoutForm.css";

function CheckoutForm({ cart, total }) {
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const [name, email, phone] = form;

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: total,
        };
        createOrder(order);
    };

    return (
        <div className="checkout-form-container">
            <h2 className="checkout-form-title">Finalizar Compra</h2>
            <form className="checkout-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" required />
                <input type="email" name="email" placeholder="ejemplo@gmail.com" required />
                <input type="text" name="phone" placeholder="Teléfono" required />
                <button type="submit" className="checkout-submit-btn">
                    Finalizar compra
                </button>
            </form>
            <p className="checkout-total">Total: ${total}</p>
        </div>
    );
}

export default CheckoutForm;