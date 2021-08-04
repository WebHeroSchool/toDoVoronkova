import React from 'react';

const tasks = {
  'one': 'Помыть посуду',
  'two': 'Погладить белье',
  'three': 'Выгулять собаку'
};

const TodoList = ({props}) => (<div>
  <label htmlFor="1">
    <input type="radio" id="1"></input>
    {props.one}
  </label>
  <label htmlFor="2">
    <input type="radio" id="2"></input>
    {props.two}
  </label>
  <label htmlFor="3">
    <input type="radio" id="3"></input>
    {props.three}
  </label>
</div>);

export { TodoList, tasks };