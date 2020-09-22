import React, { useState, useEffect } from "react";
import productsData from "../data";

import FormAddProducts from "../components/FormAddProducts";

function CartHooks() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [historyPurchase, setHistoryPurchase] = useState([]);

  useEffect(() => {
    setProducts([...productsData]);
  }, []);

  useEffect(() => {
    setHistoryPurchase([...cartItems]);
  }, [cartItems]);

  const handleAddToCart = (data) => {
    if (cartItems.find(({ id }) => id === data.id)) {
      alert("Item is already added");
    } else {
      setCartItems([data, ...cartItems]);
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems([...cartItems.filter((item) => item.id !== productId)]);
  };

  const handleCheckout = () => {
    setCartItems([]);
  };

  const handleAddProduct = (product) => {
    setProducts([product, ...products]);
  };

  return (
    <>
      {/* <FormAddProducts AddProduct={handleAddProduct} /> */}
      <div className="cart-container">
        <div className="cart-content">
          <div className="products-container">
            <h2>
              <strong>Products</strong>
            </h2>
            <div className="products-list">
              {products.length ? (
                products.map((item) => (
                  <div
                    className="product-item"
                    onClick={() => handleAddToCart(item)}
                  >
                    <h4>
                      <strong> {item.productName} </strong>
                    </h4>
                    <p>
                      <small> {item.description}</small>
                    </p>
                    <p>
                      <strong>USD {item.price}$</strong>{" "}
                    </p>
                  </div>
                ))
              ) : (
                <div>No Product</div>
              )}
            </div>
          </div>

          <div className="cart-items">
            <h2>
              <strong>Cart</strong>
            </h2>

            <div className="products-list">
              {cartItems.length ? (
                <>
                  {cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="product-item"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      <h4>
                        <strong> {item.productName} </strong>
                      </h4>
                      <h5>USD {item.price}$</h5>
                    </div>
                  ))}
                  <button
                    className="checkout-btn"
                    onClick={() => handleCheckout()}
                  >
                    Checkout
                  </button>
                </>
              ) : (
                <div>No item in shopping cart</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartHooks;
