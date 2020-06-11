import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { toggleCarHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon
} from "./cart-icon.styles";

const CartIcon = ({ toggleCarHidden, itemCount }) => (
  <CartContainer onClick={toggleCarHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

const mapDispatchToProps = dispatch => ({
  toggleCarHidden: () => dispatch(toggleCarHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
