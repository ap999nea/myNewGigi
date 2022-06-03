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
    return <div style={{ padding: 50 }} className="dashboard"></div>;
  }
}
export default Dashboard;
