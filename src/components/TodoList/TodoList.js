import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ tasks, onClickDone, onClickDelete}) => (
  <ul className={styles.list}>
    {tasks.map((item) => (
      <TodoItem text={item.value} isDone={item.isDone} key={item.id} onClickDone={onClickDone} id={item.id}  onClickDelete={onClickDelete} />
    ))}
  </ul>
);

export default TodoList;
