import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = ({ tasks }) => (
  <ul className={styles.list}>
    {tasks.map((item) => (
      <TodoItem text={item.value} isDone={item.isDone} key={item.value} />
    ))}
  </ul>
);

export default TodoList;
