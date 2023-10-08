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
        {/* <div className="account d-flex order-md-1 align-items-center">
          <a href="/profile" className='text-decoration-none me-3 me-md-4'>
            <img
              src="/img/dp.png"
              width='45px'
              height='45px'
              className='me-2'
              alt="profile picture"
            />
            <Navbar.Text>Philemon</Navbar.Text>
          </a>
          <a href="/logout" className='text-decoration-none'>
            <img
              src="img/logout.svg"
              width='20px'
              height='20px'
              className='me-2'
              alt="logout button" />
            <Navbar.Text>Log Out</Navbar.Text>
          </a>
        </div> */}
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
