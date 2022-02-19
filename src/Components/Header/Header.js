import HeaderInfo from "./HeaderInfo";
import HeaderCartButton from "./HeaderCartButton";
import classes from "../Styles/Header.module.scss";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes["header__name"]}>ReactMeals</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={classes["main-image"]}></div>
      <HeaderInfo />
    </>
  );
};
export default Header;
