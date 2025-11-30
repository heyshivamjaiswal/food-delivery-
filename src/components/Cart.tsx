import type { RootState } from "../utils/appStore";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart() {
  const cartItem = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h1>

      {/* Clear Button & Empty Message */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-xl shadow hover:bg-red-700 transition-all duration-300"
          onClick={handleClearCart}
          disabled={cartItem.length === 0}
        >
          Clear Cart
        </button>

        {cartItem.length === 0 && (
          <span className="text-gray-600 text-lg">
            Cart is empty. Add items to the cart!
          </span>
        )}
      </div>

      {/* Cart Items */}
      {cartItem.length > 0 && (
        <div className="grid gap-4">
          <ItemList item={cartItem} />
        </div>
      )}
    </div>
  );
}

export default Cart;
