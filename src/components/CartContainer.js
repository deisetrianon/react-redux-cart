import React, {useEffect} from 'react';
import { connect } from 'react-redux';

import CartItem from "./CartItem";
import { ACTIONS_TYPES } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: ACTIONS_TYPES.GET_TOTALS
    })
  }, [dispatch, cart]);

  const clearCart = () => dispatch({
    type: ACTIONS_TYPES.CLEAR_CART
  });

  if (cart.length === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Cart</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Cart</h2>
      </header>
      <article>
        {cart.map(item => {
          return <CartItem key={item.id} {...item} />;
        })}
      </article>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={clearCart}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

const mapStateToProps = store => {
  const { cart, total } = store;
  return {
    cart,
    total
  }
};

export default connect(mapStateToProps)(CartContainer);
