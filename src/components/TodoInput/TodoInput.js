import React from "react";
import styles from "./TodoInput.module.css";
import classnames from "classnames";

class TodoInput extends React.Component {
  state = {
    inputValue: '',
    isChange: false,
    isError: false
  }

  onBtnClick = () => {
    this.setState({
      inputValue: '',
      isChange: false
    });

    if (this.state.inputValue == false) {
      this.setState({ isError: true });

      return;

    } else {
      this.props.onClickAdd(this.state.inputValue);
      this.setState({ isError: false });
    }
  }

  render() {
    return (
      <form className={styles.form}>
        <p className={styles.err}>{this.state.isError && 'Enter the task'}</p>
        <input
          type="text"
          className={classnames({
            [styles.input]: true,
            [styles.inputErr]: this.state.isError
          })}
          placeholder="What needs to be done?"
          value={this.state.inputValue}
          onChange={event => this.setState({
            inputValue: event.target.value.toUpperCase(),
            isChange: true
          })}
        />
        <button
          type="button"
          className={classnames({
            [styles.btn]: true,
            [styles.btnDone]: this.state.isChange
          })}
          onClick={this.onBtnClick}>
          +
        </button>
      </form>
    )
  }
}

export default TodoInput;
