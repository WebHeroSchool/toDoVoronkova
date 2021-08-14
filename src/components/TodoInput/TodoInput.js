import React from "react";
import styles from "./TodoInput.module.css";

const TodoInput = () => (
  <form className={styles.form}>
    <input
      type="text"
      className={styles.input}
      placeholder="What needs to be done?"
    />

    {/* //кнопка будет появляться, когда что-то написали в форме */}
    <button type="button" className={styles.btn}>
      +
    </button>
  </form>
);

export default TodoInput;
