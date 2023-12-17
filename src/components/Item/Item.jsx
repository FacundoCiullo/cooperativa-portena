import { Link } from "react-router-dom";
import "./Item.scss"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Contact from "./Contact";
import ItemCarousel from "./ItemCarousel";



const Item = ({ producto }) => {
  return (
    <Col xs={12} lg={12} className=" my-2"> {/* Col centrada con margen en todas las pantallas */}
      <Card className="item-Card" border="secondary"> {/* item-detalles */}
        <Row className="align-items-space-between"> {/* Columnas alineadas verticalmente */}

          <Col lg={4} className="Col-item-Card-Left" variant="left"> {/* Columna izquierda para Imagenes */}
          <Link className="text-dark text-decoration-none" to={"/item/" + producto.id}> {/* Link a ItemDetail*/}
            <ItemCarousel producto={producto}/> {/* Carousel */}
            </Link>
          </Col>

          <Col lg={8} className="Col-item-Card-Right">  {/* Columna derecha para el texto */}
            <Link className="text-dark text-decoration-none" to={"/item/" + producto.id}> {/* Link a ItemDetail*/}
              <Card.Header className="item-Card-Header" >
                {/* Categorias y Ubicacion */}
                <p className=""> {producto.pais} / {producto.provincia} / {producto.localidad}</p> 
              </Card.Header>
              <Card.Body >
                <h4 className="item-Card-titulo">| {producto.titulo}</h4> {/* titulo del producto*/}
                <p className="item-Card-Body">{producto.descripcion}</p> {/* descripcion del producto*/}
              </Card.Body>
            </Link>
            <Card.Footer className="item-Card-footer ">
              <Link className="text-dark text-decoration-none" to={"/item/" + producto.id}> {/* Link a ItemDetail*/}
                <h5 className="">U$S {producto.precio}</h5> {/* Precio del producto*/}
              </Link>
              <Contact />{/* Iconos de Contacto*/}
            </Card.Footer>
          </Col>

        </Row>
      </Card>
    </Col>
  );
}

export default Item;



