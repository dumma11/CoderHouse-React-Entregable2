import { serverTimestamp } from "firebase/firestore"
import { createOrder } from "../../firebase/db"
import { useCart } from "../../context/cartContext"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"
import "./CheckoutForm.css"

function CheckoutForm({ cart, total }) {
    const { clearCart } = useCart()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const form = e.target
        const [name, email, phone] = form

        const order = {
            buyer: { name: name.value, email: email.value, phone: phone.value },
            items: cart,
            date: serverTimestamp(),
            total: total,
        }

        try {
            const orderId = await createOrder(order)

            clearCart()

            Swal.fire({
                title: "¡Compra realizada con éxito!",
                text: `El ID de tu compra es: ${orderId}`,
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                navigate("/CoderHouse-React-ProyectoFinal/")
            })
        } catch (error) {
            console.error("Error al crear la orden:", error)
            Swal.fire({
                title: "Error",
                text: "Hubo un problema al procesar tu compra. Por favor, intenta nuevamente.",
                icon: "error",
                confirmButtonText: "OK",
            })
        }
    }

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
    )
}

export default CheckoutForm