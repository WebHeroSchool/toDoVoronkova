import React from 'react';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({ tasks }) => (<ul>
  { tasks.map(item => <li key={ item.value }><TodoItem text={ item.value } isDone={ item.isDone } /></li>) }
</ul>);

export default TodoList;