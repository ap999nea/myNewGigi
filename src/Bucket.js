import { Component } from "react";
import Form from "./Form"
import Popup from "reactjs-popup";
import Card from "./Card"

class Bucket extends Component {
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
        <Form dashboardId={id}/>
        </Popup>
      </div>
    );
  }
}
export default Bucket;
