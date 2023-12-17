import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Card from "react-bootstrap/Card";
import "./Item.scss"


const Contact = ()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <div className="d-flex justify-content-end my-4">
      <Card.Text className="d-flex align-items-center">
        <div className="item-contactos"> 
          <Button variant="">
            <a href="https://api.whatsapp.com/send?phone=5491139135224&text=Hola! me gustaría pedir información sobre las viviendas."> {/* 35897644 */}
            <img width="32" height="32" src="/images/wpp.png" alt="WhatsApp Logo"/>
            </a>
          </Button>
          <Button variant="">
            <a href="tel:+5491139135224">
              <img 
                src="/images/call.png" 
                width="32" 
                height="32" 
                className="d-inline-block align-top"
                alt="logo de llamada" 
              />
            </a>
          </Button>
          <Button variant="" onClick={handleShow}>
            <img 
            width="32" 
            height="32" 
            src="/images/email.png" 
            alt="logo de email"
            />
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Envianos un Mensaje</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>¿Tu nombre?</Form.Label>
                  <Form.Control 
                    autoFocus
                    placeholder="Juan Perez" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>¿Un telefono de contanto?</Form.Label>
                  <Form.Control
                    autocomplete="off"
                    type="phone"
                    placeholder="+54 9 11 5555-5555"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>¿Un Email?</Form.Label>
                  <Form.Control
                    autocomplete="off"
                    type="email"
                    placeholder="Juan@example.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Enviar
              </Button>
            </Modal.Footer>
          </Modal>   {/* Formulario de contacto*/}
        </div>     
      </Card.Text>
    </div>
  )
}
  
export default Contact