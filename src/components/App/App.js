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
      id: 1
    },
    {
      value: "Погладить белье",
      isDone: false,
      id: 2
    },
    {
      value: "Выгулять собаку",
      isDone: true,
      id: 3
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
  }

  onClickDone = id => {
    const newItemList = this.state.tasks.map(item => {
      if(item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    })

    this.setState({tasks: newItemList})
  } 


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
