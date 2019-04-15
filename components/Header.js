import { Layout, Row, Col, Menu, Dropdown, Icon } from "antd";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  Button,
  FormControl,
  Carousel
} from "react-bootstrap";

//import Carousel from "nuka-carousel";
const { Header } = Layout;
const menu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
  </Menu>
);

export default ({ centerColumn, rightColumn, leftColumn }) => (
  <Header
    theme="dark"
    style={{
      backgroundColor: "#FFF",
      position: "relative",
      top: "100px"
      //backgroundImage: `url(require("../static/main.jpg"))`
    }}
  >
    <Navbar bg="light" expand="sm" fixed="top">
      <Navbar.Brand href="/">ShoppingMall</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Shop" id="basic-nav-dropdown">
            <NavDropdown.Item href="/category/place">장소</NavDropdown.Item>
            <NavDropdown.Item href="/category/lunch">식사</NavDropdown.Item>
            <NavDropdown.Item href="/category/photo">사진</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/category/makeup">
              메이크업
            </NavDropdown.Item>
            <NavDropdown.Item href="/category/dresses">드레스</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav style={{ position: "relative", bottom: "30px" }}>
          {centerColumn}
          {leftColumn}
          {rightColumn}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Carousel fade="true">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.graphcms.com/cKKOUTRiQ5WL6epUu3MP"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.graphcms.com/3ckK0j6R3uPoCDvri0Zm"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.graphcms.com/DDvZegHhStiAMMK4nqEs"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Header>
);
