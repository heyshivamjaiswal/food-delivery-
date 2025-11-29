import type { RootState } from "../utils/appStore";

import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "./ItemList";
import { clearCart } from "../utils/cartSlice";

function Cart(){

    const cartItem = useSelector((state: RootState)=> state.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-2/4 m-auto">
                <button 
                className="bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItem.length === 0 && (
                    <h1>Cart is empty. Add items to the cart !</h1>
                )}
            </div>
           <ItemList item={cartItem}/>
        </div>
    )
}

export default Cart;