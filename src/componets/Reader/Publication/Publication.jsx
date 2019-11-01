import React from "react";
import propTypes from "prop-types";
const Publication = ({ id, title, text, currentPage }) => {
  return (
    <article className="publication" data-id={id}>
      <h2>
        {currentPage}.{title}
      </h2>
      <p>{text}</p>
    </article>
  );
};
export default Publication;

Publication.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  currentPage: propTypes.number,
  id: propTypes.string
};
