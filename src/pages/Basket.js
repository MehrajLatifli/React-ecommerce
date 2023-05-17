import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../stores/cartSlice";

const Basket = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div className="productsWrapper">
      {cartItems.map((item) => (
        <div key={item.id} className="card">
          <div>
            <img src={item.image} alt="product photo" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
          <div>
            <label>Quantity: {item.quantity}</label>
          </div>
          <button className="btn" onClick={() => handleRemove(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Basket;
