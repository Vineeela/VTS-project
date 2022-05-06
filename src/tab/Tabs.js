import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, TabContent } from "react-bootstrap";
import "./tab.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Tabbs() {
  return (
    <div className="tb">
      <Tabs fill defaultActiveKey="home" id="uncontrolled-tab-example">
        <Tab
          eventKey="home"
          title="Home"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <TabContent tabTitle="Home" />
        </Tab>
        <Tab
          eventKey="profile"
          title="Profile"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <TabContent tabTitle="Profile" />
        </Tab>
      </Tabs>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<Tabbs />, rootElement);



export default Tabbs;