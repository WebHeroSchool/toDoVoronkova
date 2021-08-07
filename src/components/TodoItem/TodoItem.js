import React from 'react';
import classnames from 'classnames';
import styles from './TodoItem.module.css';

const TodoItem = ({ text, isDone }) => (<span className= {
  classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
}>{ text }</span>);

export default TodoItem;