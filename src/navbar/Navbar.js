import {
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import Tabbs from "../tab/Tabs";
import "./Navbar.css";
// import './index.html';

const NavbarVts = () => {
  return (

    <div className="nave">
      <Navbar collapseOnSelect expand="sm" bg="aliceblue" variant="light">
        <Container>
          {/* Screen Name */}
          <Navbar.Brand href="#home">
            <h5>Dashboard</h5>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">
            {/* search bar */}
            <Nav className="me-auto">
              <div className="srch">
                {/* <form>
                  <input type="search" placeholder="Search..." />
                  <button type="submit">Search</button>
                </form> */}
                <form class="nosubmit">
                  <input
                    class="nosubmit"
                    type="search"
                    placeholder="Search..."
                  />
              
                </form>
              </div>
            </Nav>

            {/* navbar icons */}
            <Nav className="icons">
              <Nav.Link href="#deets">
                Rohan Sharma<CgProfile />
              </Nav.Link>
              <Nav.Link href="#deets">
                <FiSettings />
              </Nav.Link>
              <Nav.Link href="#deets">
                {" "}
                <IoMdNotificationsOutline />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Tabbs/>
    </div>
  );
};

export default NavbarVts;
