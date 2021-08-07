import React from 'react';
import styles from './App.module.css';
import './Fonts/Fonts.css';
import TodoInput from '..//TodoInput/TodoInput';
import TodoList from '..//TodoList/TodoList';
import Footer from '../Footer/Footer';

const App = () => {
  const tasks = [ { value: 'Помыть посуду' }, 
                  { value: 'Погладить белье' }, 
                  { value: 'Выгулять собаку' }];


  return (
  <div className={styles.content}>
    <h1 className={styles.title}>todos</h1>
    <TodoInput />
    <TodoList tasks={tasks} />
    <Footer count={3} />
  </div>);
}

export default App;