import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import template from '../assets/template-img.jpg';
import star from '../assets/rating-star.svg';
import {iphonePro12} from '../utils/tempDescr';

export default function DevicePage() {
  const device = {id: 1, name: 'Iphone 12 pro', price: '1500', rating: 5, img: template};

  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
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
        {Object.entries(iphonePro12).map(([info, description], index) =>
          <Row 
            key={description}
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
          >
            <h4>{info} : {description}</h4>
          </Row>
        )}
      </Row>
    </Container>
  )
}
