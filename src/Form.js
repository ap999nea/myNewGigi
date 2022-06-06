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

  onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const {dashboardId} = this.props
      const resp = await httpCreateCard({text: this.state.title, id: dashboardId});
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
    this.setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  render() {
    const { submitted, title } = this.state;
    return (
      <>
        {!submitted ? (
          <form className="submit-card" onSubmit={this.onSubmitHandler}>
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