import React from "react";
import { httpCreateCard } from "./api.http";
import Button from "./Button";
import InputText from "./InputText";
import Card from "./Card"

export class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    submitted: false,
    title: "",
  };


  onChangeHandler = (e) => {
    const { value, name } = e.target;
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  onSubmit = async (e)=>{
    const { onSubmitHandler } = this.props;
    await onSubmitHandler(title, e)
    this.setState({
      submitted: true,
    });
  }

  render() {
    const { submitted, title } = this.state;
    return (
      <>
        {!submitted ? (
          <form className="submit-card" onSubmit={this.onSubmit}>
            <InputText
              name={"title"}
              id={"title"}
              value={title}
              onChange={this.onChangeHandler}
            ></InputText>
            <Button type={"submit"}>Submit</Button>
          </form>
        ) : (
          <Card bio={title} />
        )}
      </>
    );
  }
}

export default Form