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

    count: 3,

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
    ],

    countFooter: 1
  }

  onClickDone = id => {
    const newItemList = this.state.tasks.map(item => {
      if (item.id === id) {
        item.isDone = !item.isDone;
      }
      return item;
    })

    this.setState({
      tasks: newItemList,
      countFooter: newItemList.filter(item => !item.isDone).length
    });
  }

  onClickDelete = id => {
    const newTasks = this.state.tasks.filter(item => item.id !== id);

    this.setState({
      tasks: newTasks,
      countFooter: newTasks.filter(item => !item.isDone).length
    });
  }

  onClickAdd = value => this.setState(state => ({
    tasks: [
      ...state.tasks,

      {
        value,
        isDone: false,
        id: state.count + 1
      }
    ],

    count: state.count + 1,
    countFooter: state.countFooter + 1
  }))

  render() {
    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>todos</h1>
        <div className={styles.content}>
          <TodoInput onClickAdd={this.onClickAdd} />
          <TodoList tasks={this.state.tasks} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete} />
          <Footer count={this.state.countFooter} btn={this.state.valueFooter} />
        </div>
      </div>
    );
  }
}



export default App;
