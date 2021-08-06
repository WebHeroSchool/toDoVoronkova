import React from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

const tasks = [ { value: 'Помыть посуду' }, 
                { value: 'Погладить белье' }, 
                { value: 'Выгулять собаку' }];

const App = () => (<div>
  <h1>todos</h1>
  <TodoInput />
  <TodoList tasks={tasks} />
  <Footer count={3} />
</div>);

export default App;