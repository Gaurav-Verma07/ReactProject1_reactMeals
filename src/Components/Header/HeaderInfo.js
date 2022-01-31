import classes from "../Styles/HeaderInfo.module.scss";
import Card from "../UI/Card";
//import { Fragment } from "react";
const HeaderInfo = () => {
  return (
    <div className={classes.headerinfo}>
      <div className={classes.headerinfo__inside}>
        <Card>
          <h3>Delicious Food, Delivered TO You </h3>
          <p>
            Choose your favourite meal from our broad selection of aailable
            meals and enjoy a delicious lunck at home.
          </p>
          <p>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </Card>
      </div>
    </div>
  );
};
export default HeaderInfo;
