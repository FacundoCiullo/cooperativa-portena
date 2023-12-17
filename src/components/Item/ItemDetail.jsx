import { Link } from "react-router-dom";
import React from "react";
import "./Item.scss";
import Contact from "./Contact";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCarousel from "./ItemCarousel";

const ItemDetail = ({ producto }) => {
  return (
    <Card className="my-4">
      <Card.Body className=" ">
        <Row>
          <Col className="ItemDetail-Carousel">
            {producto.categoria === "proyectos" ? (
              // Mostrar el video solo si la categoría es "Proyectos"
              <video controls src="/images/PalmBeach.mp4"></video>
            ) : (
              // Mostrar el carrusel en caso contrario
              <ItemCarousel producto={producto} />
            )}
          </Col>
          <Col>
            <Card.Header className="item-Card-Header">
              <Link className="nav-link" activeClassName="text-danger" to={`/category/${producto.pais}`}>
                <p className="">
                  {producto.pais} / {producto.provincia} / {producto.localidad}
                </p>
              </Link>
            </Card.Header>
            <h2>| {producto.titulo}</h2>
            <h4><b>U$S {producto.precio}</b></h4>
            <p>{producto.descripcion}</p>
            <p>{producto.descripcion2}</p>
          </Col>
        </Row>
        <Row>
          <p>{producto.descripcion3}</p>
          <p>{producto.descripcion4}</p>
        </Row>
        <Card.Footer className="item-Card-footer">
          <Contact />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
