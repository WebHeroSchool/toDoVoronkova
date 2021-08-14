import React from "react";
import styles from "./App.module.css";
import "./Fonts/Fonts.css";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import Footer from "../Footer/Footer";


class App extends React.Component {
  state = {
    tasks: [
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
    }
    ],

    valueFooter: [
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
    ]
  };

  onClickDone = (isDone) => console.log(isDone);

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.content}>
          <TodoInput />
          <TodoList tasks={this.state.tasks} onClickDone={this.onClickDone} />
          <Footer count={3} btn={this.state.valueFooter} />
        </div>
      </div>
    );
  }
}


export default App;
