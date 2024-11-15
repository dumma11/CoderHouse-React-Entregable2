import './CartWidget.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/cartContext'

const CartWidget = () => {
  const { getQuantity } = useCart()
  return (
    <Link to='/CoderHouse-React-ProyectoFinal/cart'>
      <div className="cart-widget">
        <FaShoppingCart className="cart-icon" />
        <span className="cart-count">{getQuantity()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;