import React from "react";

import { connect } from "react-redux";

import { toggleCarHidden } from "../../redux/cart/cart.action";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCarHidden }) => (
  <div
    className="cart-icon"
    onClick={toggleCarHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCarHidden: () => dispatch(toggleCarHidden())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);