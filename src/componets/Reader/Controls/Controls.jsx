import React from "react";
import propTypes from "prop-types";
import styles from '../../../common/css/Reader.module.css';

const Controls = ({ handleClick, currentPage, pubLength }) => (
  <section className={styles.controls}>
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={currentPage === 1}
      name="prev"
    >
      Назад
    </button>
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      disabled={currentPage >= pubLength}
      name="next"
    >
      Вперед
    </button>
  </section>
);
export default Controls;

Controls.propTypes = {
  next: propTypes.func,
  prev: propTypes.func,
  isActiveButtonNext: propTypes.bool,
  isActiveButtonPrev: propTypes.bool
};
