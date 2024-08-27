import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';


export default function NavBar() {
  return (
    <Navbar expand="md" >
      <Container className='col-md-9'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <LinkContainer to ="/" >
          <Navbar.Brand href="/">
            <img
              src="/img/logo.png"
              width='150px'
              height='38px'
              className="d-inline-block align-top"
              alt="Little Lemon logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <LinkContainer to="/" >
              <Nav.Link className='me-lg-3'> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about" >
              <Nav.Link className='me-lg-3'>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/menu" >
              <Nav.Link className='me-lg-3'>Menu</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/reservations" >
              <Nav.Link  >Reservations</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
