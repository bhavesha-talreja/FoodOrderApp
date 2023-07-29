import CartContext from "../../../Store/cart-context";
import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import style from "./Mealitem.module.css";

const MealItem = (props) => {
  const price = `$${props.price}`;

  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <ul className={style.meal}>
      <div>
        <h3>{props.name} </h3>
        <div className={style.description}>{props.description}</div>
        <div className={style.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </ul>
  );
};

export default MealItem;
