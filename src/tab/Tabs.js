import React from "react";
import ReactDOM from "react-dom";
import { Tabs, Tab, TabContent } from "react-bootstrap";
import "./tab.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBTableBody, MDBTableHead, MDBTable } from "mdbreact";
import BasicTable from "../table/table";

function Tabbs() {
  return (
    <div className="tb">
      <Tabs fill defaultActiveKey="Overall" id="uncontrolled-tab-example">
        <Tab
          eventKey="Overall"
          title="Overall"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          {/* overall table content starts here  */}

          {/* overall table content ends here..^ */}
          <TabContent tabTitle="Overall" />
        </Tab>
        <Tab
          eventKey="Vehicle Summary"
          title="Vehicle Summary"
          mountOnEnter // <<<
          unmountOnExit={false} // <<<
        >
          <BasicTable />
          <TabContent tabTitle="Vehicle Summary" />
        </Tab>
      </Tabs>
    </div>
  );
}



const rootElement = document.getElementById("root");
ReactDOM.render(<Tabbs />, rootElement);



export default Tabbs;


// import React, { useState } from 'react';
// import {
//   MDBTabs,
//   MDBTabsItem,
//   MDBTabsLink,
//   MDBTabsContent,
//   MDBTabsPane
// } from 'mdb-react-ui-kit';

// export default function Tabbs() {
//   const [basicActive, setBasicActive] = useState('tab1');

//   const handleBasicClick = (value: string) => {
//     if (value === basicActive) {
//       return;
//     }

//     setBasicActive(value);
//   };

//   return (
//     <>
//       <MDBTabs className='mb-3'>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
//             Tab 1
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
//             Tab 2
//           </MDBTabsLink>
//         </MDBTabsItem>
//         <MDBTabsItem>
//           <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
//             Tab 3
//           </MDBTabsLink>
//         </MDBTabsItem>
//       </MDBTabs>

//       <MDBTabsContent>
//         <MDBTabsPane show={basicActive === 'tab1'}>Tab 1 content</MDBTabsPane>
//         <MDBTabsPane show={basicActive === 'tab2'}>Tab 2 content</MDBTabsPane>
//         <MDBTabsPane show={basicActive === 'tab3'}>Tab 3 content</MDBTabsPane>
//       </MDBTabsContent>
//     </>
//   );
// }