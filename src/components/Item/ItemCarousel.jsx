import Carousel from 'react-bootstrap/Carousel';
import "./Item.scss"



const ItemCarousel = ({ producto }) => {
  return (
    <Carousel interval={null} className='ItemCarousel'>                     {/* Carousel */}
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen}
          alt="Imagen 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen2}
          alt="Imagen 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen3}
          alt="Imagen 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen4}
          alt="Imagen 4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen5}
          alt="Imagen 5"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen6}
          alt="Imagen 6"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen7}
          alt="Imagen 7"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen8}
          alt="Imagen 8"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen9}
          alt="Imagen 9"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="item-imagen"
          src={producto.imagen10}
          alt="Imagen 10"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default ItemCarousel;