import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function ReservationLead(){
  return(
    <section className="reservations-lead">
      <Container className='col-md-6 text-center py-5' >
        <h3 className='mb-3'>Table Reservation</h3>
        <p> Whether it's a special celebration or a casual get-together, our easy reservation process lets you secure the perfect spot for your occasion. Choose your preferred date, time, and seating preference, and let us take care of the rest</p>
      </Container>
    </section>
  )
}

function ReservationDetails(){
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      alert('All good')
    }

    setValidated(true);
  };

  return(
    <section className="reservation-details pt-5 mb-5">
      <Container className='col-md-9 d-flex align-items-center justify-content-center px-3'>
        <img
          src="/img/table.png"
          width='250px'
          max-width='25%'
          className='d-none d-md-inline ' 
          alt="" />
        <Form noValidate validated={validated} className='ms-md-5  col-12 col-md-9 col-lg-7' onSubmit={handleSubmit}>
          <h4 className='mb-4 text-center'>Reservation Details</h4>
          <Form.Group as={Row} className="mb-3" controlId="name">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control required type="text" placeholder="Your name" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="tel">
            <Form.Label column sm={2}>
              Tel
            </Form.Label>
            <Col sm={10}>
              <Form.Control required type="tel" placeholder="+256 7778454377" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="date">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control required type="date"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="time">
            <Form.Label column sm={2}>
              Time
            </Form.Label>
            <Col sm={10}>
              <Form.Control required type="time"  />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="guests">
            <Form.Label column sm={2}>
              Guests
            </Form.Label>
            <Col sm={10}>
              <Form.Control required type="number"  />
              <Form.Control.Feedback type="invalid">
                Please provide a valid number.
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="occasion">
            <Form.Label column sm={2}>
              Occasion
            </Form.Label>
            <Col sm={10}>
              <Form.Select required aria-label="Default select example">
                <option>Select occasion</option>
                <option value="1">Casual</option>
                <option value="2">Anniversary</option>
                <option value="3">Holiday</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" className='text-center w-100 py-2 mt-2'>Reserve</Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
    </section>
  )
}

export default function Reservations(){
  return(
    <>
      <ReservationLead/>
      <ReservationDetails/>
    </>
  )
}