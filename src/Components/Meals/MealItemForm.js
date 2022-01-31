import { useRef, useState } from "react";
import classes from "../Styles/MealtemForm.module.scss";
//import { Fragment } from "react";
const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setamountIsValid] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = parseInt(amountInputRef.current.value);

    if (enteredAmount < 1 || enteredAmount > 5) {
      setamountIsValid(true);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="text" className={classes["form__label"]}>
        Amount:
      </label>
      <input
        type="number"
        max="5"
        min="1"
        defaultValue="1"
        step="1"
        name="text"
        className={classes["form__input"]}
        ref={amountInputRef}
      />
      <br />
      <button className={classes["form__button"]}>+Add</button>
      {amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
};

export default MealItemForm;
