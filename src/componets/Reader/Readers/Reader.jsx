import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";
import styles from './Reader.module.css';

class Reader extends Component {
  state = {
    currentPage: 1
  };
  handleClick = ({ target: { name } }) => {

    this.setState(prevState => {
      return {
        currentPage:
          name === "next"
            ? prevState.currentPage + 1
            : prevState.currentPage - 1
      };
    });
  };
  render() {
    const { currentPage } = this.state;
    const { id, title, text } = this.props.publications[this.state.currentPage-1];
    const {publications} = this.props
    return (
      <div className={styles.reader}>
        <Controls
          handleClick={this.handleClick}
          currentPage={currentPage}
          pubLength={publications.length}
        />
        <Publication
          id={id}
          title={title}
          text={text}
          currentPage={currentPage}
        />
        <Counter
          publicationsLength={publications.length}
          currentPage={currentPage}
        />
      </div>
    );
  }
}
export default Reader;
Reader.propTypes = {
  props: propTypes.arrayOf(propTypes.object)
};
