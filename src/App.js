import React from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import Footer from './components/Footer/Footer';

const App = () => (<div>
  <h1>todos</h1>
  <TodoInput />
  <TodoList />
  <Footer />
</div>);

export default App;