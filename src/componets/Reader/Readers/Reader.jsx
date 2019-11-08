import React, { Component } from "react";
import Publication from "../Publication/Publication";
import Controls from "../Controls/Controls";
import Counter from "../Counter/Counter";
import propTypes from "prop-types";

class Reader extends Component {
  state = {
    currentPage: 1
  };
  currentIdex = 0;
  pubLength = this.props.publications.length;
  handleClick = e => {
    const name = e.target.name;
    const { currentPage } = this.state;
    if (name === "next") {
      this.setState(prevState => {
        if (currentPage < this.pubLength) {
          this.currentIdex++;
          return {
            currentPage: prevState.currentPage + 1
          };
        }
      });
    }
    if (name === "prev") {
      this.setState(prevState => {
        this.currentIdex--;
        return {
          currentPage: prevState.currentPage - 1
        };
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    const { id, title, text } = this.props.publications[this.currentIdex];
    return (
      <div className="reader">
        <Controls
          handleClick={this.handleClick}
          currentPage={currentPage}
          pubLength={this.pubLength}
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
