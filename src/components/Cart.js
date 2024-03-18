import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  return (
    <div className="w-8/12 mx-auto border border-gray-400 my-2">
      <h1 className="font-bold text-center  py-2 text-2xl border-b-2">Cart</h1>
      <button
        className="px-4 py-2 border border-black bg-gray-50 hover:bg-gray-300 w-40 mx-auto block my-2"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
      {cartItems.length != 0 ? (
        <MenuItem items={cartItems} />
      ) : (
        <h1>Your cart is empty..!</h1>
      )}
    </div>
  );
};

export default Cart;
