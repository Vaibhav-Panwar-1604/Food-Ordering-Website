import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md animate-fade-in-up">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 animate-fade-in-up">
          🛒 Your Cart
        </h1>

        <div className="flex justify-center mb-6 animate-fade-in-up">
          <button
            onClick={handleClearCart}
            className="bg-green-400 hover:bg-green-500 text-black px-6 py-2 rounded-lg transition duration-200"
          >
            Clear Cart
          </button>
        </div>

        {cartItems.length === 0 ? (
          <h2 className="text-center text-gray-500 text-lg animate-fade-in-up">
            Cart is Empty. Add items to your cart 🛍️
          </h2>
        ) : (
          <div className="space-y-4 animate-fade-in-up">
            <ItemList list={cartItems} showAddButton = {false} showRemoveButton={true}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
