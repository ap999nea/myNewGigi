import React from "react";
import { httpGetDashboards } from "./api.http";
import Bucket from "./Bucket";
import Card from "./Card";
import { Form } from "./Form";

class Dashboard extends React.Component {
  //   constructor(props) {
  //     super(props);
  // }
  state = { cardName: "Inizio" };
  componentDidMount() {
    this.setState({
      cardName: "La mia carta",
    });
    this.getMyDashboards();
  }
  async getMyDashboards() {
    let myDashboard = {};
    try {
      const resp = await httpGetDashboards();
      console.log(resp.data);
      myDashboard = resp.data;
    } catch (err) {
      console.log(err);
    }
    this.setState((prev) => {
      return {
        ...prev,
        myDashboard: myDashboard,
      };
    });
  }

  componentDidUpdate() {
    console.log("Sono aggiornato");
  }
  render() {
    console.log("Render");
    const { myDashboard } = this.state;
    console.log(myDashboard);
    let appoggio;
    if (myDashboard) {
      appoggio = myDashboard.map((el) => {
        return <Bucket title={el.name}></Bucket>;
      });
    } else {
      appoggio = <h1>Cacca</h1>;
    }
    return (
      <>
        <div style={{ padding: 50 }} className="dashboard">
          {appoggio}
        </div>
      </>
    );
  }
}
export default Dashboard;
