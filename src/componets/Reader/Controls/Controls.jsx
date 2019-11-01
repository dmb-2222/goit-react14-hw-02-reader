import React from "react";
import propTypes from "prop-types";

const Controls = ({ next, prev, isActiveButtonNext, isActiveButtonPrev }) => {
  return (
    <section className="controls">
      <button
        type="button"
        className="button"
        onClick={prev}
        disabled={isActiveButtonPrev}
      >
        Назад
      </button>
      <button
        type="button"
        className="button"
        onClick={next}
        disabled={isActiveButtonNext}
      >
        Вперед
      </button>
    </section>
  );
};
export default Controls;

Controls.propTypes = {
  next: propTypes.func,
  prev: propTypes.func,
  isActiveButtonNext:propTypes.bool,
  isActiveButtonPrev:propTypes.bool
};
