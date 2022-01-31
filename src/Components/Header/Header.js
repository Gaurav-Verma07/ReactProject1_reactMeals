import HeaderInfo from "./HeaderInfo";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";
import classes from "../Styles/Header.module.scss";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes["header__name"]}>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}></div>
      <HeaderInfo />
    </Fragment>
  );
};
export default Header;
