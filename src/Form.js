import React from "react";
import { httpCreateCard } from "./api.http";
import Button from "./Button";
import InputText from "./InputText";

export class Form extends React.Component {
  state = {
    submitted: false,

    title: "",
  };

  onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const resp = await httpCreateCard(this.state.title);
      this.setState({
        submitted: true,
      });
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };

  onChangeHandler = (e) => {
    const { value, name } = e.target;
    //console.log(value);
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  render() {
    console.log(this.state.submitted);
    const { submitted, title } = this.state;
    return (
      <>
        {!submitted ? (
          <form onSubmit={this.onSubmitHandler}>
            <InputText
              name={"title"}
              id={"title"}
              value={title}
              onChange={this.onChangeHandler}
            ></InputText>
            <Button type={"submit"}>Submit</Button>
          </form>
        ) : (
          <h1>Ci siamo</h1>
        )}
      </>
    );
  }
}
