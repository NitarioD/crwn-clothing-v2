import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CartDropdownConatiner,
  CartItems,
  EmptyMessage,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckouthandler = () => navigate("/checkout");

  return (
    <CartDropdownConatiner>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckouthandler}>CHECKOUT</Button>
    </CartDropdownConatiner>
  );
};

export default CartDropdown;
