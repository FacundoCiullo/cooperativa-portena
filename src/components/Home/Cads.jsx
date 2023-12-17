import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Cards.scss';

function Cards() {
  // Crear un array de objetos con la información de cada card
  const cardData = [
    {
      title: '| Viviendas en Argentina',
      text: '',
      imageUrl: '/images/argentina.png',
      link: '/category/Argentina',
    },
    {
      title: '| Viviendas en Brasil',
      text: '',
      imageUrl: '/images/brasil.png',
      link: '/category/Brasil',
    },
    {
      title: '| Poyecto de Viviendas',
      text: '',
      imageUrl: '/images/Proyectos.png',
      link: '/item/JC04ICNfxRmRf5tyTcVZ',
    },
    {
      title: '| Obras de las viviendas',
      text: '',
      imageUrl: '/images/obras.png',
      link: '/Obras', 
    },
  ];

  return (
    <Row xs={1} md={4} className="g-5">
      {cardData.map((card, idx) => (
        <Col key={idx}>
          <Link to={card.link} className="text-decoration-none">
            <Card className='cards'>
              
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
}

export default Cards;