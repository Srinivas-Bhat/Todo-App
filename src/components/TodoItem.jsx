import React from "react";
import styles from "./todo.module.css";

const TodoItem = ({todo}) => {

  const [Status, setStatus] = React.useState(todo.Status)

  return (
    <div className="todo">
      <input type="checkbox" checked={Status} onChange={(e) => {
        // console.log(e.target.checked);
        setStatus(e.target.checked);
      }} />
      <div className={Status ? styles.striked : ""}>{todo.value}</div>
    </div>
  );
};

export default TodoItem;
