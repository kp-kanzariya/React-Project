import React, { useState } from "react";
import { Container, Table, Button } from "react-bootstrap";

function Cart() {
  // Initial cart items
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", img:"/img/img1.jpg", price: 50, quantity: 1 },
    { id: 2, name: "Product 2", img:"/img/img1.jpg", price: 30, quantity: 2 },
    { id: 3, name: "Product 3", img:"/img/img1.jpg", price: 20, quantity: 1 },
  ]);

  // Function to calculate the total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to increase the quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  // Function to decrease the quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <Container>
      <h2 className="mt-4 mb-4">Shopping Cart</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Product img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.img}</td>
              <td>${item.price}</td>
              <td>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => decreaseQuantity(item.id)}
                  className="me-2"
                >
                  -
                </Button>
                {item.quantity}
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => increaseQuantity(item.id)}
                  className="ms-2"
                >
                  +
                </Button>
              </td>
              <td>${item.price * item.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total: ${calculateTotal()}</h4>
      <Button variant="primary" className="mt-3">
        Proceed to Checkout
      </Button>
    </Container>
  );
}

export default Cart;
