import React from "react";
import propTypes from "prop-types";

const Counter = ({ currentPage, publicationsLength }) => {
  return (
    <p className="counter">
      {currentPage}/{publicationsLength}
    </p>
  );
};
export default Counter;


Counter.propTypes = {
  currentPage: propTypes.number,
  publicationsLength: propTypes.number,
};