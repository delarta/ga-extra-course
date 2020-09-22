import React, { Component } from "react";
import productsData from "../data";

class CartClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      cartItems: [],
      historyPurchase: [],
    };
  }

  componentDidMount() {
    this.setState({ products: [...productsData] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartItems !== this.state.cartItems) {
      this.setState({ historyPurchase: [...this.state.cartItems] });
    }
  }

  handleAddToCart = (data) => {
    if (this.state.cartItems.find(({ id }) => id === data.id)) {
      alert("Item is already added");
    } else {
      this.setState({ cartItems: [data, ...this.state.cartItems] });
    }
  };

  handleRemoveFromCart = (productId) => {
    this.setState({
      cartItems: [
        ...this.state.cartItems.filter((item) => item.id !== productId),
      ],
    });
  };

  handleCheckout = () => {
    this.setState({
      cartItems: [],
    });
  };

  render() {
    return (
      <div className="cart-container">
        <div className="cart-content">
          <div className="products-container">
            <h2>
              <strong>Products (CLASS)</strong>
            </h2>
            <div className="products-list">
              {this.state.products.length ? (
                this.state.products.map((item) => (
                  <div
                    className="product-item"
                    onClick={() => this.handleAddToCart(item)}
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
              {this.state.cartItems.length ? (
                <>
                  {this.state.cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="product-item"
                      onClick={() => this.handleRemoveFromCart(item.id)}
                    >
                      <h4>
                        <strong> {item.productName} </strong>
                      </h4>
                      <h5>USD {item.price}$</h5>
                    </div>
                  ))}
                  <button
                    className="checkout-btn"
                    onClick={() => this.handleCheckout()}
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
    );
  }
}

export default CartClass;
