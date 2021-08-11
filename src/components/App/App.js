import React from "react";
import styles from "./App.module.css";
import "./Fonts/Fonts.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";

const App = () => {
  const tasks = [
    {
      value: "Помыть посуду",
      isDone: true,
    },
    {
      value: "Погладить белье",
      isDone: false,
    },
    {
      value: "Выгулять собаку",
      isDone: true,
    },
  ];

  const valueFooter = [
    {
      isActive: true,
      text: "All",
    },
    {
      isActive: false,
      text: "Active",
    },
    {
      isActive: false,
      text: "Completed",
    },
  ];

  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>todos</h1>
      <div className={styles.content}>
        <TodoInput />
        <TodoList tasks={tasks} />
        <Footer count={3} btn={valueFooter} />
      </div>
    </div>
  );
};

export default App;
