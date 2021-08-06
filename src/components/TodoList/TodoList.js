import React from 'react';
import TodoItem from '../TodoItem/TodoItem';


const TodoList = ({ tasks }) => (<div>
  <li><TodoItem text={ tasks.one } /></li>
  <li><TodoItem text={ tasks.two } /></li>
  <li><TodoItem text={ tasks.three } /></li>
</div>);

export default TodoList;