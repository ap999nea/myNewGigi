import React from "react";
import Bucket from "./Bucket";
import Card from "./Card";
import { Form } from "./Form";

class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
// }
state = { cardName: "Inizio" };
  componentDidMount() {
    
    this.setState({ cardName: "La mia carta" });
    console.log("Sono montato1");
  }
  componentDidUpdate() {
    console.log("Sono aggiornato");
  }
  render() {
    console.log("Render");
    return (
      <div style={{padding : 50}} className="dashboard">
        <Bucket title={"To Do"}>
          {[1, 2, 3].map((el, index) => {
            return (
              <Card key={index} bio={el}>
                ciao
              </Card>
            );
          })}
        </Bucket>
        <Bucket title={"Doing"}>
          <Card />
          <Card>{this.state.cardName}</Card>
          <Card />
        </Bucket>
        <Bucket title={"Done"}>
          <Card />
          <Card />
          <Card />
        </Bucket>
      
      </div>
    );
  }
}
export default Dashboard;
