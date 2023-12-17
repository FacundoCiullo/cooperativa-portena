import './Obras.scss';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


function Obras() {
  // Crear un array de objetos con la información de cada card
  const cardData = [
    {
      title: '| Obras de las viviendas',
      text: '',
      imageUrl: '/images/obras.png',
      link: '', 
    },
    {
      title: '| Instalaciones de agua',
      text: '',
      imageUrl: '/images/agua.jpeg',
      link: '/',
    },
    {
      title: '| Instalaciones de luz',
      text: '',
      imageUrl: '/images/luz.jpg',
      link: '',
    },
    {
      title: '| Instalaciones de gas',
      text: '',
      imageUrl: '/images/gas.jpg',
      link: '',
    },
  ];

  return (
    <Container>
      <Row xs={1} md={4} className="g-4 my-4">
        {cardData.map((card, idx) => (
          <Col key={idx}>
            <Link to={card.link} className="text-decoration-none">
              <Card className='cards'>
              <Card.Img variant="top" src={card.imageUrl} className='img-obras'/>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Obras;

