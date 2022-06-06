import React from "react";
import PropTypes from "prop-types";

class Button extends React.Component {
  render() {
    const { type } = this.props;
    return (
      <button
        type={type}
        className="add-card"
        onClick={this.props.onClickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}
Button.propTypes = {
  onClickHandler: PropTypes.func,
};
export default Button;
