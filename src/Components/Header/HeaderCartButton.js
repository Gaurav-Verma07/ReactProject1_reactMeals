import classes from "../Styles/HeaderCartButton.module.scss";
import { Fragment, useContext } from "react";
import CartContext from "../store/cart-context";
const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);
  return (
    <Fragment>
      <button className={classes.cartButton} onClick={props.onClick}>
        <i className="fas fa-shopping-cart"> </i>
        <span className={classes["cartButton__text"]}>Your Cart</span>
        <span className={classes["cartButton__amount"]}>
          {CartCtx.totalAmount.toFixed(2)}
        </span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
