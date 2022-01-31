import { useContext } from "react";
import { Fragment } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../store/cart-context";
import classes from "../Styles/MealItem.module.scss";
const MealItem = (props) => {
  const { item } = props;
  const price = `$${item.price}`;
  const CartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    CartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: amount,
      price: item.price,
    });
  };

  return (
    <Fragment>
      <div className={classes.mealitem}>
        <div className={classes["mealitem__row1"]}>
          <span className={classes["mealitem__row1--name"]}>{item.name}</span>
          <span className={classes["mealitem__row1--description"]}>
            {item.description}
          </span>
          <span className={classes["mealitem__row1--price"]}>{price}</span>
        </div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </Fragment>
  );
};
export default MealItem;
