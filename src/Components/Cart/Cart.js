import Modal from "../UI/Modal";
import { useContext, Fragment } from "react";
import CartItem from "./CartItem";
import CartTotalAmount from "./CartTotalAmount";
import classes from "./Cart.module.scss";
//import Card from "../UI/Card";
import CartContext from "../store/cart-context";
const Cart = (props) => {
  const CartCtx = useContext(CartContext);

  const hasItems = CartCtx.items.length > 0;

  const cartItemAddHandler = (item) => {
    console.log("add");
    CartCtx.addItem({ ...item, amount: 1 });
  };
  const cartItemRemoveHandler = (id) => {
    CartCtx.removeItem(id);
  };

  return (
    <Fragment>
      <Modal closeCart={props.closeCart} />
      <div className={classes.normal}>
        <div className={classes.cart}>
          {!hasItems && (
            <p style={{ textAlign: "center" }}>No items ordered!</p>
          )}
          {CartCtx.items.map((item) => {
            return (
              <CartItem
                name={item.name}
                key={item.id}
                amount={item.amount}
                price={item.price}
                addItemHandler={cartItemAddHandler.bind(null, item)}
                removeItemHandler={cartItemRemoveHandler.bind(null, item.id)}
              />
            );
          })}
        </div>
        <CartTotalAmount
          closeCart={props.closeCart}
          amount={CartCtx.totalAmount}
          hasItems={hasItems}
        />
      </div>
    </Fragment>
  );
};
export default Cart;
