import React, { Fragment } from "react";
import food from "../../Assests/food.jpg";
import style from "./header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>React food ordering app</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={style["main-imag"]}>
        <img src={food} alt="really delicious meals your way" />
      </div>
    </Fragment>
  );
};

export default Header;
