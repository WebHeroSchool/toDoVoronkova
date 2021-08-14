import React from "react";
import classnames from "classnames";
import styles from "./TodoItem.module.css";
import trash from "./trash.svg";

const TodoItem = ({ text, isDone, onClickDone, id }) => (
  <li
    className={classnames({
      [styles.item]: true,
      [styles.itemDone]: isDone,
    })}
  >
    <span
      className={classnames({
        [styles.round]: true,
        [styles.roundDone]: isDone,
      })}
      id={id}
      onClick={() => onClickDone(id)}
    ></span>
    {text}
    <img src={trash} alt="trash" className={styles.delete} />
  </li>
);

export default TodoItem;
