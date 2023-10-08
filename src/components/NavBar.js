import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar() {
  return (
    <Navbar expand="md" >
      <Container className='col-md-9'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
          <img
            src="/img/logo.png"
            width='150px'
            height='38px'
            className="d-inline-block align-top"
            alt="Little Lemon logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="/" className='me-lg-3'>Home</Nav.Link>
            <Nav.Link href="about" className='me-lg-3'>About</Nav.Link>
            <Nav.Link href="menu" className='me-lg-3'>Menu</Nav.Link>
            <Nav.Link href="reservations" >Reservations</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
