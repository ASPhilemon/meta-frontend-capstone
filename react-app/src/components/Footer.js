import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

//Footer
export default function Footer(){
  return(
    <footer className=' py-4'>
      <Container className='col-md-9'>
        <Row className='justify-content-center row-cols-1 row-cols-md-4'>
          <Col xs={1} className='align-self-center mb-3'>
            <img src="img/lemon.png" alt="lemon logo" width='30px' />
          </Col>
          <Col>
            <h5 className='footer-heading text-center text-muted text-md-start mb-1'>Navigation</h5>
            <ul className='col-10 col-md-12 mx-auto d-flex justify-content-center d-md-block'>
              <li className='mb-2 me-2'>
                <Link to="/" ><a>Home</a></Link>
              </li>
              <li className='mb-2 me-2'>
                <Link to="/about" ><a>About</a></Link>
              </li>
              <li className='mb-2 me-2'>
                <Link to="/menu" ><a>Menu</a></Link>
              </li>
              <li className='mb-2 me-2'>
                <Link to="/reservations" ><a>Reservations</a></Link>
              </li>
            </ul>
          </Col>
          <Col>
            <h5 className='footer-heading text-center text-muted text-md-start mb-1 mt-2 mt-md-0'>Contact</h5>
            <div className='d-flex justify-content-center col-10 col-md-12 mx-auto d-md-block'>
              <p className='mb-2 me-2'>Bukoto &mdash; Kampala</p>
              <p className='mb-2'>+256 789123459</p>
            </div >
          </Col>
          <Col>
            <h5 className='footer-heading text-center text-muted text-md-start mt-4 mt-md-0'>Social Media</h5>
          
            <ul className='d-flex col-11 col-md-12 mx-auto justify-content-center d-md-block text-center text-md-start' >
              <li className='mb-2 me-2'> 
                <a href="https://facebook.com" target='blank'>
                <img src="/img/fb.png" width='20px' className='me-2' alt="" />
                Facebook
                </a>
              </li>
              <li className='mb-2 me-2'>
                <a href="https://twitter.com" target='_blank'>
                <img src="/img/twitter.png" width='20px' className='me-2' alt="" />
                Twitter
                </a>
              </li>
              <li className='mb-2 me-2 '>
                <a href="https://whatsapp.com" target='_blank' >
                <img src="/img/whatsapp.png" width='20px' className='me-2' alt="" />
                Whatsapp
                </a>
              </li>
              <li className='mb-2 me-2'>
                <a href="https://instagram.com" target='_blank'>
                <img src="/img/instagram.png" width='20px'className='me-2' alt="" />
                Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}