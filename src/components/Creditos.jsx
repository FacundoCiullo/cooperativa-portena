import FormCred from "./FormCred";
import Card from 'react-bootstrap/Card';

const Creditos = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center py-5">
        <div className="d-flex flex-column align-items-center">
          <Card style={{ width: '36rem', maxHeight: "34rem" }} className="mb-3">
            <Card.Body>
              <FormCred />
            </Card.Body>
          </Card>
          <Card style={{ width: '36rem', maxHeight: "34rem" }} className="mb-3">
            <Card.Body>
              <div className="row">
                <div className="col-md-12 g-mb-40">
                  <div className="media g-mb-15">
                    <div className="d-flex mr-4">
                      <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 15 15"><path fill="currentColor" d="M2 12.5v.5h1v-.5H2Zm5 0v.5h1v-.5H7Zm-4 0V12H2v.5h1Zm4-.5v.5h1V12H7Zm-2-2a2 2 0 0 1 2 2h1a3 3 0 0 0-3-3v1Zm-2 2a2 2 0 0 1 2-2V9a3 3 0 0 0-3 3h1Zm2-8a2 2 0 0 0-2 2h1a1 1 0 0 1 1-1V4Zm2 2a2 2 0 0 0-2-2v1a1 1 0 0 1 1 1h1ZM5 8a2 2 0 0 0 2-2H6a1 1 0 0 1-1 1v1Zm0-1a1 1 0 0 1-1-1H3a2 2 0 0 0 2 2V7ZM1.5 3h12V2h-12v1Zm12.5.5v8h1v-8h-1Zm-.5 8.5h-12v1h12v-1ZM1 11.5v-8H0v8h1Zm.5.5a.5.5 0 0 1-.5-.5H0A1.5 1.5 0 0 0 1.5 13v-1Zm12.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1ZM13.5 3a.5.5 0 0 1 .5.5h1A1.5 1.5 0 0 0 13.5 2v1Zm-12-1A1.5 1.5 0 0 0 0 3.5h1a.5.5 0 0 1 .5-.5V2ZM9 6h3V5H9v1Zm0 3h3V8H9v1Z"/></svg>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 g-color-black mb-20">DOCUMENTO</h3>
                      <p className="g-color-gray-dark-v4">Contar con DNI.</p>
                    </div>
                  </div>

                  <div className="media g-mb-15">
                    <div className="d-flex mr-4">
                      <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="-2 -2 24 24"><path fill="currentColor" d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414l.707.707z"/></svg>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 g-color-black mb-20">RELACION DE DEPENDENCIA</h3>
                      <p className="g-color-gray-dark-v4">Estar contratado en relación de dependencia.</p>
                    </div>
                  </div> 

                  <div className="media g-mb-15">
                    <div className="d-flex mr-4">
                      <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M17.25 18H6.75V4h10.5M14 21h-4v-1h4m2-19H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z" fill="currentColor"/></svg>
                      </span>
                    </div>
                    <div className="media-body">
                      <h3 className="h5 g-color-black mb-20">TELEFONO/MAIL</h3>
                      <p className="g-color-gray-dark-v4">Tener número de celular y mail.</p>
                    </div>
                  </div> 
                  
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Creditos;