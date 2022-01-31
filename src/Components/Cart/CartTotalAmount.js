import classes from "./CartTotalAmount.module.scss";
import { Fragment } from "react";
const CartTotalAmount = (props) => {
  const OrderHandler = () => {
    console.log("Ordering...");
    alert("Thank you for Ordering!!! Visit again...");
  };
  return (
    <Fragment>
      <div className={classes.row}>
        <div className={classes["row__text"]}>Total Amount</div>
        <div className={classes["row__content"]}>
          <div className={classes["row__content--amount"]}>
            {" "}
            ${props.amount.toFixed(2)}
          </div>
          <div>
            <button
              className={classes["row__content--close"]}
              onClick={props.closeCart}
            >
              Close
            </button>
            {props.hasItems && (
              <button
                className={classes["row__content--order"]}
                onClick={OrderHandler}
              >
                Order
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default CartTotalAmount;
