import React from "react";
import classnames from "classnames";
import styles from "./TodoItem.module.css";
import trash from "./trash.svg";

const TodoItem = ({ text, isDone, onClickDone, id,
  onClickDelete }) => (
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
    <img src={trash} alt="trash" className={styles.delete} onClick={() => onClickDelete(id)} id={id} />
  </li>
);

TodoItem.dafaultProps = {
  id: Math.floor(Math.random() * (40 - 20) + 20),
  text: 'Some kind of task',
  isDone: false
}

export default TodoItem;
