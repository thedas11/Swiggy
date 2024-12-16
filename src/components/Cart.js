import { useSelector } from "react-redux";
import ItemCat from "./ItemsCat";
import { useDispatch } from "react-redux";

import { clearCart } from "../util/cartSlice";

const Cart = () => {
  const cartItemsCheckout = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };

  if (cartItemsCheckout.length === 0) {
    return (
      <div className=" flex justify-center bg-slate-400 h-[100vh]">
        <div>You cart is Empty!!</div>
      </div>
    );
  }

  return (
    <div className="text-center bg-cyan-50 h-[300px]">
      <h1 className="text-black text-3xl bold">Your cart</h1>

      <button
        className="border border-l-amber-100 rounded-md"
        onClick={handleClear}
      >
      </button>
      <ItemCat menu={cartItemsCheckout} />
    </div>
  );
};

export default Cart;
