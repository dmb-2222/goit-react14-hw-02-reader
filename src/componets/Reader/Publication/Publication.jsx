import React from "react";
import styles from "../../../common/css/Reader.module.css";
import propTypes from "prop-types";
const Publication = ({ id, title, text, currentPage }) => (
  <article className={styles.publication} data-id={id}>
    <h2>
      {currentPage}.{title}
    </h2>
    <p>{text}</p>
  </article>
);

export default Publication;

Publication.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  currentPage: propTypes.number,
  id: propTypes.string
};
