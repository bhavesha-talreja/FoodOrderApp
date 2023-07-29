import Modal from "../UI/Modal";
import style from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import Cartcontext from "../../Store/cart-context";

const Cart = (props) => {
  const ctx = useContext(Cartcontext);

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
  const hasItems = ctx.items.length > 0;

  const cartItemRemoveHandler = (id) => {};

  const cartItemAddHandler = (item) => {
    ctx.addItem(item);
    ctx.addItem({ ...item, amount: 1 });
  };

  const cartitems = (
    <ul className={style["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className={style.total}>
        <span>Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={style.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
