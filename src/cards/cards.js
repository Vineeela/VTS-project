import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Progressbar from "./progress";
import { FiList } from "react-icons/fi";
import { FaMapMarkedAlt } from "react-icons/fa";

//changes
function Cards() {
  return (
    <div>
      <Card responsive>
        <Card.Header>
          <Form style={{ padding: 1, paddingLeft: 0 }}>
            <Row>
              <Row xs={4} md={6} className="g-2">
                <Card>
                  <Card.Body>
                        <div className="tltl">
                      <Card.Title>
                        Moving Vehicle <FiList /> <FaMapMarkedAlt />
                      </Card.Title>
                      </div>

                      <div  className="pgrs"> <Progressbar /></div>

                     <div  className="nmbr"> <Card.Text> 327  </Card.Text> </div>
                      
                      
                  </Card.Body>
                </Card>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Card>
                  <Card.Body>
                    <h5>
                      {" "}
                      <Card.Title>
                        Idle Vehicle <FiList /> <FaMapMarkedAlt />
                      </Card.Title>
                      <Card.Text>3</Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Card>
                  <Card.Body>
                    <h5>
                      {" "}
                      <Card.Title>
                        Stopped Vehicle <FiList /> <FaMapMarkedAlt />
                      </Card.Title>
                      <Card.Text>4</Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Card>
                  <Card.Body>
                    <h5>
                      {" "}
                      <Card.Title>
                        Other Vehicle <FiList /> <FaMapMarkedAlt />
                      </Card.Title>
                      <Card.Text>5</Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Card>
                  <Card.Body>
                    <h5>
                      {" "}
                      <Card.Title>
                        Inactive Vehicle
                        <FiList />
                        <FaMapMarkedAlt />
                      </Card.Title>
                      <Card.Text>5</Card.Text>
                    </h5>
                  </Card.Body>
                </Card>
              </Row>
              <Container xs={2}>
                <Row>
                  <div class="hstack gap-3"></div>
                </Row>
              </Container>
            </Row>
          </Form>
        </Card.Header>
      </Card>
    </div>
  );
}

export default Cards;
