// src/components/Cart.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './cartSlice';

const CartItem = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);
  const cartItems = useSelector((state) => state.cart.cart[user?.id] || []);

  const handleRemove = (itemId) => {
    // dispatch(removeItem({ userId: user.id, itemId }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItem;
