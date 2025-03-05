import React from "react";
import { addItem, clearItem, removeItem } from "../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const cartItems = useSelector((store) => store.counter.items);
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItem("jeans"));
  };
  const removeFromCart = () => {
    dispatch(removeItem());
  };
  const clearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <h1>Counter Redux</h1>
      <h4>cart items {cartItems.length}</h4>
      <button onClick={addToCart}>+</button>
      <button onClick={removeFromCart}>-</button>
      <button onClick={clearCart}>clear</button>
    </div>
  );
};

export default Counter;
