import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";

class Reader extends Component {
  state = {
    currentPage: 1
  };
  indicution = {
    currentIdex: 0,
    isActiveButtonNext: false,
    isActiveButtonPrev: true
  };

  handleNextPage = e => {
    const name = e.target.name;
    if (name === "next") {
      if (this.state.currentPage >= 1) {
        this.indicution.isActiveButtonPrev = false;
      }
      if (this.state.currentPage === this.props.publications.length - 1) {
        this.indicution.isActiveButtonNext = true;
      }
      this.setState(prevState => {
        if (this.state.currentPage < this.props.publications.length) {
          this.indicution.currentIdex++;
          return {
            currentPage: prevState.currentPage + 1
          };
        }
      });
    }
    if (name === "prev") {
      if (this.state.currentPage <= 2) {
        this.indicution.isActiveButtonPrev = true;
      }
      if (this.state.currentPage !== this.props.publications.length - 1) {
        this.indicution.isActiveButtonNext = false;
      }
      this.setState(prevState => {
        this.indicution.currentIdex--;
        return {
          currentPage: prevState.currentPage - 1
        };
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    const { id, title, text } = this.props.publications[
      this.indicution.currentIdex
    ];

    return (
      <div className="reader">
        <Controls
          next={this.handleNextPage}
          isActiveButtonNext={this.indicution.isActiveButtonNext}
          isActiveButtonPrev={this.indicution.isActiveButtonPrev}
        />
        <Publication
          id={id}
          title={title}
          text={text}
          currentPage={currentPage}
        />
        <Counter
          publicationsLength={this.props.publications.length}
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
