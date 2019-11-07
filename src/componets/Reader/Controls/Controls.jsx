import React from "react";
import propTypes from "prop-types";

const Controls = ({ next, isActiveButtonNext, isActiveButtonPrev }) => (
  <section className="controls">
    <button
      type="button"
      className="button"
      onClick={next}
      disabled={isActiveButtonPrev}
      name = 'prev'
    >
      Назад
    </button>
    <button
      type="button"
      className="button"
      onClick={next}
      disabled={isActiveButtonNext}
      name = 'next'
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
