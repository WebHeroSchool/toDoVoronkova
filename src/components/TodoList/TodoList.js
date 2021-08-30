import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";
import PropTypes from 'prop-types';

const TodoList = ({ tasks, onClickDone, onClickDelete }) => (
  <ul className={styles.list}>
    {tasks.map((item) => (
      <TodoItem text={item.value} isDone={item.isDone} key={item.id} onClickDone={onClickDone} id={item.id} onClickDelete={onClickDelete} />
    ))}
  </ul>
);
TodoList.defaultProps = {
  tasks: [
    {
      value: 'Oops, tasks not found',
      isDone: false
    }
  ]
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    isDone: PropTypes.bool,
    id: PropTypes.number
  })),
  onClickDone: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default TodoList;
