import { useCart } from "../context/CartContext";

function OrderModal ({selectedItem}) {
    const [ cart, setCart ] = useCart();
    const [ quantity, setQuantity ] = useState(1)

    const addToCart = () => {
        setCart(prev => {
            const exist = prev.find(ci => ci.id === selectedItem.id);
            return exist
                ? prev.map(ci =>
                    ci.id === selectedItem.id ? {...ci, quantity: ci.quantity + quantity} : ci
                )
                : [...prev, {...selectedItem, quantity}]
        });
    };

    return (
        <div>
            <button onClick={addToCart}>장바구니 담기</button>
        </div>
    );
}

export default OrderModal;