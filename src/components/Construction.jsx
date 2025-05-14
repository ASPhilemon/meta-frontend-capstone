import { Container } from "react-bootstrap";

export default function Construction({page}){
  return(
    <Container fluid className="construction-container d-flex flex-column align-items-center justify-content-center bg-body-tertiary px-3" >
      <h3 className="mb-4">{page} page</h3>
      <div className="construction d-flex align-items-center justify-content-center" >
        <img
          width='200px'
          height="200px"
          className="text-center"
          src="/img/construction.svg"
          alt="" 
          />
      </div>
      <p className="text-center lead col-sm-8 col-md-5 mt-2">This page is currently under construction. Please come back later.</p>
    </Container>
  )
}