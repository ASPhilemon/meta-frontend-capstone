import Container from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import NavBar from "../components/NavBar";

//Hero
function Hero(){
  return(
    <section className='hero'>
      <Container className='col-md-9'  >
        <Row className=' align-items-end justify-content-between py-5 gx-0'>
          <Col>
            <h1 class='little-lemon'>Little Lemon</h1>
            <h4 className='mb-4'>Chicago</h4>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <Button variant="primary" className='mt-3 btn-reserve'>Reserve a Table</Button>
          </Col>
          <Col className='d-none d-sm-inline text-end'>
            <img 
              src="/img/hero.jpg"
              width='300px'
              
              alt="" />
          </Col>
        </Row>
      </Container>
    </section>
   
  )
}

//MenuItem
function MenuItem({name, price, description, imgUrl}) {
  return (
    <Card className='px-0'>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body className=' d-flex flex-column bg-body-tertiary'>
        <div className="d-flex justify-content-between">
          <Card.Text className='menu-name' as={'h6'}> {name} </Card.Text>
          <Card.Text className='menu-price' as={'h6'}> {price} </Card.Text>
        </div>
        <Card.Text className='text-lead'>
          {description}
        </Card.Text>
        <a href='/menu' className='card-link stretched-link mt-auto'>
          Order for delivery 
          <img
            src="/img/bicycle.png"
            width='20px'
            height='13.4px'
            className='ms-2' 
            alt="bicycle" />
          </a>
      </Card.Body>
    </Card>
  );
}

//Weekly Specials
function Specials(){
  let specials = [
    {
      id:1,
      name:'Beef',
      price:"UGX 35, 000",
      description: "From slow-cooked roasts to sizzling steaks, each bite is a flavor-packed journey.",
      imgUrl: "/img/beef.png"
    },
    {
      id:2,
      name:'Chicken',
      price:"UGX 50, 000",
      description: "Whether it's grilled or in savory curries, our chicken is juicy and full of flavor.",
      imgUrl: "/img/chicken.png"
    },
    {
      id:3,
      name:'Fish',
      price:"UGX 40, 000",
      description: "From crispy fish and chips to seafood platters, it's a symphony of maritime flavors.",
      imgUrl: "/img/fish.png"
    },
    {
      id:4,
      name:'Peas',
      price:"UGX 20, 000",
      description: "From creamy purees to vibrant salads, our peas bring a touch of freshness to every plate.",
      imgUrl: "/img/peas.png"
    },
  ]
  return(
    <section className='weekly-specials mt-3'>
      <Container className='col-md-9 px-3'>
        <div className='d-flex align-items-center mb-4'>
          <h5 className='me-5'>Weekly Specials</h5>
          <Button variant='primary' className='px-4'>Menu
          </Button>
        </div>
        <Row className=' justify-content-center gx-3 gy-4 row-cols-1 row-cols-sm-2 row-cols-lg-4'>
          {specials.map((menuItem)=>{
            return (
            <Col key={menuItem.id}> 
              <MenuItem  {...menuItem}> </MenuItem>
            </Col> 
            )
          }) }
        </Row>
      </Container>
    </section>
  
  )
}

//Testimonial
function Testimonial({name, rating, comment, imgUrl}){
  let stars = []
  for(let i=0; i < rating; i++) stars.push(<img src='img/star.png' width='15px'/>)
  return(
    <>
      <div className="d-flex align-items-center">
        <img
          src={imgUrl}
          width='35px'
          className='me-2'
          alt="" 
        />
        <h6 className='mb-0'>{name}</h6>
        <span className='ms-3'>
          { stars}
        </span>
      </div>
      <div className="comment mt-2">
        {comment}
      </div>
    </>
  
  )
}

//Testimonials
function Testimonials(){
  let testimonials = [
    {
      id:1,
      name:"Anna",
      rating :5,
      comment:"We celebrated our anniversary at Little Lemon, and it was truly magical. The atmosphere was romantic, the service was attentive, and the special touches from the chef made it an unforgettable experience. The menu offered a perfect blend of indulgence and sophistication. Highly recommended for special occasions!",
      imgUrl:'/img/anna.png'
    },
    {
      id:2,
      name:"James",
      rating :4,
      comment:"I stumbled upon Little Lemon and what a find! The ambiance is cozy, and the menu is a delightful mix of classics and inventive creations. The staff is incredibly knowledgeable and passionate about the food they serve. A gem that deserves to be on every foodie's radar!",
      imgUrl:'/img/james.png'
    },
    {
      id:3,
      name:"Grace",
      rating :5,
      comment:"The team at Little Lemon goes above and beyond to make your dining experience memorable. From the warm welcome to the expert recommendations, the service is truly exceptional. Combine that with a menu boasting bold and delicious flavors, and you've got a winning combination. Can't wait to return!",
      imgUrl:'/img/grace.png'
    },
  ]
  return(
    <section className='testimonies'>
      <Container className='col-md-9 px-3'>
        <h4 className='text-center mb-3 mt-3'>Testimonials</h4>
        <Row className='row-cols-1 row-cols-md-3 g-4'>
          { 
            testimonials.map((testimonial)=>{
              return(
                <Col key={testimonial.id}>
                  <Testimonial {...testimonial} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}
//Footer
function Footer(){
  return(
    <footer className='mt-5 py-4'>
      <Container className='col-md-9'>
        <Row className='justify-content-center row-cols-1 row-cols-md-4'>
          <Col xs={1} className='align-self-center mb-3'>
            <img src="img/lemon.png" alt="lemon logo" width='30px' />
          </Col>
          <Col>
            <h5 className='text-center text-muted text-md-start mb-1'>Navigation</h5>
            <ul className='col-10 col-md-12 mx-auto d-flex justify-content-between d-md-block'>
              <li className='mb-2'><a href="/">Home</a></li>
              <li className='mb-2'><a href="/about">About</a></li>
              <li className='mb-2'><a href="/menu">Menu</a></li>
              <li className='mb-2'><a href="/reservations">Reservations</a></li>
            </ul>
          </Col>
          <Col>
            <h5 className='text-center text-muted text-md-start mb-1'>Contact</h5>
            <div className='d-flex justify-content-center col-10 col-md-12 mx-auto d-md-block'>
              <p className='mb-2 me-2'>Bukoto &mdash; Kampala</p>
              {/* <p className='mb-2'>info@littlelemon</p> */}
              <p className='mb-2'>+256 789123459</p>
            </div >
          </Col>
          <Col>
            <h5 className='text-center text-muted text-md-start mt-2'>Social Media</h5>
          
            <ul className='d-flex col-11 col-md-12 mx-auto justify-content-between d-md-block text-center text-md-start' >
              <li className='mb-2 '> 
                <a href="facebook.com" >
                <img src="/img/fb.png" width='20px' className='me-2' alt="" />
                Facebook
                </a>
              </li>
              <li className='mb-2'>
                <a href="twitter.com" >
                <img src="/img/twitter.png" width='20px' className='me-2' alt="" />
                Twitter
                </a>
              </li>
              
              <li className='mb-2 '>
                <a href="whatsapp.com" >
                <img src="/img/whatsapp.png" width='20px' className='me-2' alt="" />
                Whatsapp
                </a>
              </li>
              <li className='mb-2'>
                <a href="twitter.com">
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

export default function Home(){
  return(
    <>
      <NavBar/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <Footer/>
    </>
  )
}