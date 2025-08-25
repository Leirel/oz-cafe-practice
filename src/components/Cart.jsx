import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useCart();

  const remove = (id) => {
    setCart(prev => prev.filter(ci => ci.id !== id));
  };

  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.qty}
          <button onClick={() => remove(item.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
