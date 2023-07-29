import { useRef, useState } from "react";
import Input from "../../UI/Input";
import style from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  console.log(amountInputRef);

  const submitHandler = (event) => {
    event.preventDefault();

    const eneteredAmount = amountInputRef.current.value;
    console.log(eneteredAmount);
    const eneteredAmountNumber = +eneteredAmount; //converts string to number

    if (
      eneteredAmount.length === 0 ||
      eneteredAmountNumber < 1 ||
      eneteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(eneteredAmountNumber);
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          ref: { amountInputRef },
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>
  );
};

export default MealItemForm;
