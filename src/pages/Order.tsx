import { useLocation } from "react-router-dom";


const Order = () => {
  const location = useLocation();
  const orderData = location.state;

  return (
    <div>
      Order
    </div>
  )
};

export default Order;