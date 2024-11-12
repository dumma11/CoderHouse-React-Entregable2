import './CartWidget.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/cartContext'

const CartWidget = () => {
  const { getQuantity } = useCart()
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-count">{getQuantity()}</span>
    </div>
  );
};

export default CartWidget;