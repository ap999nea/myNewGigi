import React from "react";
import PropTypes from "prop-types";

class InputText extends React.Component {
  constructor(props) {
    super(props);
    //this.input = React.createRef();
  }

  state = {};

  /*handleChange = (e) => {
    //console.log(e.target.value);
    //console.log(this.input.current.value) // non controllata.
    /*.setState({ // controllata
      value: e.target.value,
    });
  };*/
    

  render() {
    return (
      <input
        //ref={this.input}
        type={"text"}
        name={this.props.name}
        id={this.props.id}
        value={this.props.value}
        onChange={this.props.onChange}
      ></input>
    );
  }
}
InputText.propTypes = {
  name: PropTypes.string,
};

export default InputText;
