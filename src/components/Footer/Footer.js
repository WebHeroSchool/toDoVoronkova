import React from "react";
import classnames from "classnames";
import styles from "./Footer.module.css";
import PropTypes from "prop-types";

const Footer = ({ count, btn }) => (
  <footer className={styles.footer}>
    <p className={styles.title}>{count} item left</p>
    <div className={styles.btnList}>
      {btn.map((item) => {
        return (
          <button
            key={item.text}
            className={classnames({
              [styles.item]: true,
              [styles.itemActive]: item.isActive,
            })}
          >
            {item.text}
          </button>
        );
      })}
    </div>
    <button className={styles.clear}>Clear completed</button>
  </footer>
);

Footer.defaultProps = {
  count: 0
}

Footer.propTypes = {
  count: PropTypes.number,
  btn: PropTypes.arrayOf(PropTypes.shape({
    isActive: PropTypes.bool,
    text: PropTypes.string
  }))
}

export default Footer;
