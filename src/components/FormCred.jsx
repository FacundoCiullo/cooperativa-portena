import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';

function FormCred() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // Si el formulario es válido, muestra la alerta SweetAlert
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    }

    setValidated(true);
  };

  return (
    <div className="d-flex align-items-center justify-content-center py-2 CardService">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

        <h5 className='dasd'>PEDÍ TU PRÉSTAMO DE MANERA RÁPIDA Y SIMPLE</h5>
        <p>Necesitamos pocos datos para preaprobar tu crédito. ¡Sin compromiso!</p>

      <Row className="justify-content-center">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>DNI - (sólo números)</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>Teléfono - (sin 0 ni 15)</Form.Label>
          <Form.Control required type="text" />
        </Form.Group>
        

        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3 py-3">
          <Form.Label>Selecciona un género</Form.Label>
          <div className="d-flex">
            <Form.Check
              required
              type="radio"
              name="gender"
              id="male"
              label="Masculino"
              className="mr-4"
            />
            <Form.Check
              required
              type="radio"
              name="gender"
              id="female"
              label="Femenino"
            />
          </div>
        </div>
        ))}
      </Row>
      <Button as={Col} md="12" variant='dark' type="submit">Continuar</Button>
    </Form>
    </div>
  );
}
export default FormCred;