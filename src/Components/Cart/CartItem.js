import classes from "./CartItem.module.scss";
const CartItem = (props) => {
  // const { item } = props;
  const price = `$${props.price}`;
  return (
    <div className={classes.cartItem}>
      <div className={classes["cartItem__row"]}>
        <div className={classes["cartItem__row--name"]}>{props.name}</div>
        <div className={classes["cartItem__row--amount"]}>
          <div className={classes["cartItem__row--amount-price"]}>{price}</div>
          <div className={classes["cartItem__row--amount-quantity"]}>
            x {props.amount}
          </div>
        </div>
      </div>
      <div className={classes["cartItem__button"]}>
        <button
          className={classes["cartItem__button--btn"]}
          onClick={props.removeItemHandler}
        >
          -
        </button>
        <button
          className={classes["cartItem__button--btn"]}
          onClick={props.addItemHandler}
        >
          +
        </button>
      </div>
    </div>
  );
};
export default CartItem;
