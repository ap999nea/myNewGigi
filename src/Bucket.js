import { Component } from "react";
import Form from "./Form"
import Popup from "reactjs-popup";
import Card from "./Card"

class Bucket extends Component {
  state = {
    contents: this.props.contents
  }

  onCreateCardHandler = async (text, e) => {
    try {
      e.preventDefault();
      const {id} = this.props
      const resp = await httpCreateCard({text, id: id});
      this.setState({
        contents: [...this.state.contents, resp.data],
      })
      return resp.data;
    } catch (err) {
      console.log(err);
    }
  };


  render() {
    const {title, contents, id} = this.props
    return (
      <div className="bucket">
        <div className="title">
          <h2>{title}</h2>
        </div>
        
        <div className="cards">
        {
          contents.map(({id, text}) => {
            return <Card className="card" key={id}>{text}</Card>
          })
        }
        </div>
        <Popup trigger={<button> Add Card</button>}>
        <Form onSubmitHandler={this.onCreateCardHandler} dashboardId={id}/>
        </Popup>
      </div>
    );
  }
}
export default Bucket;
