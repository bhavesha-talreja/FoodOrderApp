import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.labelname}</label>
      {/* <input type={props.type} /> see this is usually long way you will enter type, id, 
      other attributes another way is to use spread operator it will automatically add all the attributes 
       */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
