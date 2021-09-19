import React from "react";
import classnames from "classnames";
import styles from "./TodoItem.module.css";
import trash from "./trash.svg";
import PropTypes from "prop-types";

class TodoItem extends React.Component {
  render() {
    const { text, isDone, onClickDone, id, onClickDelete } = this.props;

    return (
      <li
        className={classnames({
          [styles.item]: true,
          [styles.itemDone]: isDone,
        })}
      >
        <span
          className={classnames({
            [styles.round]: true,
            [styles.roundDone]: isDone,
          })}
          id={id}
          onClick={() => onClickDone(id)}
        ></span>
        {text}
        <img src={trash} alt="trash" className={styles.delete} onClick={() => onClickDelete(id)} id={id} />
      </li>
    )
  }
}

TodoItem.dafaultProps = {
  id: Math.floor(Math.random() * (40 - 20) + 20),
  text: 'Some kind of task',
  isDone: false
}

TodoItem.propTypes = {
  text: PropTypes.string,
  isDone: PropTypes.bool,
  onClickDone: PropTypes.func,
  id: PropTypes.number,
  onClickDelete: PropTypes.func
}

export default TodoItem;
