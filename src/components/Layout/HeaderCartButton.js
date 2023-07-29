import CartIcon from "../Cart/CartIcon";
import style from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/cart-context";

const HeaderCartButton = (props) => {
  const cartCTX = useContext(CartContext);

  const numberOfCartItems = cartCTX.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={style.button} onClick={props.onClick}>
      <span className={style.icon}>
        <CartIcon />
      </span>
      <span>Your Basket</span>
      <span className={style.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCartButton;
