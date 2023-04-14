import { useState, useEffect } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import star from '../assets/rating-star.svg';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';


export default function DevicePage() {
  const {id} = useParams();
  const [device, setDevice] = useState({info : []});
  console.log(device)

  useEffect(() => {
      fetchOneDevice(id)
          .then(data => setDevice(data));
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image style={{objectFit: 'contain'}} width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>       
          <Col md={4}>
            <Row className="d-flex flex-column align-items-center" >
              <h2>{device.name}</h2>
              <div
                className="d-flex align-items-center justify-content-center"
                style={{background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 65}}

              >
                {device.rating}
              </div>
            </Row>
        </Col>      
        <Col md={4}>   
          <Card 
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: '2px solid lightgray'}}  
          >
            <h3>From: {device.price} euro</h3>
            <Button variant="secondary">Add to cart</Button>    
          </Card>   
        </Col>
      </Row>

      <Row className='d-flex flex-column m-4'>
        <h1  style={{textAlign: 'center'}}>Technical Specifications</h1>
        {device.info.map((info, index) =>
          <Row 
            key={info.id}
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
          >
            <h4>{info.title} : {info.description}</h4>
          </Row>
        )}
      </Row>
    </Container>
  )
}
