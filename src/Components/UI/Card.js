import classes from "../Styles/Card.module.scss";
const Card = (props) => {
  //const classn = "card " + props.className;
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
