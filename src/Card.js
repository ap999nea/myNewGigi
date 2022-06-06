import React from "react";

class Card extends React.Component {
  render() {
    const {bio, children} = this.props
    return (
      <div className="card">
        <div>{bio}</div>
        <div>{children}</div>
      </div>
    );
  }
}
export default Card;
