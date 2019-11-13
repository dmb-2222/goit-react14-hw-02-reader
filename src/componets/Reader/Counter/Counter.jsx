import React from "react";
import propTypes from "prop-types";
import styles from './Counter.module.css';
const Counter = ({ currentPage, publicationsLength }) => {
  return (
    <p className={styles.counter}>
      {currentPage}/{publicationsLength}
    </p>
  );
};
export default Counter;


Counter.propTypes = {
  currentPage: propTypes.number,
  publicationsLength: propTypes.number,
};