import React from "react";
import { httpGetDashboards } from "./api.http";
import Bucket from "./Bucket";

class Dashboard extends React.Component {
  state = { cardName: "Inizio", myDashboard : [] };
  componentDidMount() {
    this.setState({
      cardName: "La mia carta",
    });
    this.getMyDashboards();
  }
  async getMyDashboards() {  
    try {
      const {data: myDashboard} = await httpGetDashboards();
      this.setState((prev) => {
      return {
        ...prev,
        myDashboard
      };
    });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate() {
    console.log("Sono aggiornato");
  }
  render() {
    console.log("Render");
    const { myDashboard } = this.state;
    
    return (
      <div style={{ padding: 50 }} className="dashboard">
          {
          (myDashboard.length > 0) ? 
      myDashboard.map(({contents, name, id}) => {
        return <Bucket contents={contents} title={name} key={id} id={id}></Bucket>;
      })
    :
      <h1>Non ci sono risultati</h1>
      }
        </div>
    );
  }
}
export default Dashboard;
