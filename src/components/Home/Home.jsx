import React from 'react';
import Cads from "./Cads"
import './Home.scss';


const Home = () => {
  return (
    <div className="container" >
      <div className="row py-4">
        <div className="col text-center">
          <img src="/images/logo-principal.png" 
            className="img-home" 
            style={{ width: '40%' }}
            alt="" 
          />
        </div>
      </div>
      <div className="row justify-content-center text-center g-mb-50">
                <div className="col-lg-9">
                    <h2 className="h3 g-color-black g-font-weight-600 text-uppercase mb-2 my-5">Servicios</h2>
                    <div className="d-inline-block g-width-35 g-height-2 g-bg-primary mb-2"></div>
                    <p className="lead mb-0">A continuación exponemos nuestros servicios más destacados, para más información te invitamos a contactarte con nosotros.</p>
                </div>
            </div>
      <div className="row">
        <div className="">
                <div className="row">
                    <div className="col-md-6 text-md-right g-mb-40">

                        <div className="media g-mb-15">
                            <div className="media-body mr-4">
                                <h3 className="h5 g-color-black mb-20">Asistencia Legal</h3>
                                <p className="g-color-gray-dark-v4">Asesoramiento y consultas con un profesional legal.</p>
                            </div>
                            <div className="d-flex">
                            <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                  <svg className='fa' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16"><path fill="currentColor" d="M14.63 7L13 3h1V2H9V1H8v1H3v1h1L2.38 7H2v1h.15c.156.498.473.93.9 1.23a2.47 2.47 0 0 0 2.9 0A2.44 2.44 0 0 0 6.86 8H7V7h-.45L4.88 3H8v8H6l-.39.18l-2 2.51l.39.81h9l.39-.81l-2-2.51L11 11H9V3h3.13l-1.67 4H10v1h.15a2.48 2.48 0 0 0 4.71 0H15V7h-.37zM5.22 8.51a1.52 1.52 0 0 1-.72.19a1.45 1.45 0 0 1-.71-.19A1.47 1.47 0 0 1 3.25 8h2.5a1.52 1.52 0 0 1-.53.51zM5.47 7h-2l1-2.4l1 2.4zm5.29 5L12 13.5H5L6.24 12h4.52zm1.78-7.38l1 2.4h-2l1-2.4zm.68 3.91a1.41 1.41 0 0 1-.72.19a1.35 1.35 0 0 1-.71-.19a1.55 1.55 0 0 1-.54-.53h2.5a1.37 1.37 0 0 1-.53.53z"/></svg>                                 
                                </span>
                            </div>
                        </div>

                        <div className="media g-mb-15">
                          <div className="media-body mr-4">
                              <h3 className="h5 g-color-black mb-20">Diseño Interiores</h3>
                              <p className="g-color-gray-dark-v4">Asesoramiento y consultas con un profesional de diseño de interiores.</p>
                          </div>
                          <div className="d-flex align-items-center"> {/* Utilizamos flexbox para centrar verticalmente */}
                              <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24">
                                      <path d="M14 20.95h6V10.78L8 7.34V3.05H4v17.9h6v-5.64h4v5.64z" fill="currentColor"/>
                                  </svg>
                              </span>
                          </div>
                        </div>

                    </div>

                    <div className="col-md-6 g-mb-40">

                        <div className="media g-mb-15">
                            <div className="d-flex mr-4">
                              <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M2 28h28v2H2zm25-17a1 1 0 0 0 1-1V7a1 1 0 0 0-.66-.94l-11-4a1 1 0 0 0-.68 0l-11 4A1 1 0 0 0 4 7v3a1 1 0 0 0 1 1h1v13H4v2h24v-2h-2V11zM6 7.7l10-3.64L26 7.7V9H6zM18 24h-4V11h4zM8 11h4v13H8zm16 13h-4V11h4z"/></svg>
                                </span>
                            </div>
                            <div className="media-body">
                            <h3 className="h5 g-color-black mb-20">Capacitación Financiera</h3>
                                <p className="g-color-gray-dark-v4">Capacitación en finanzas personales y para PyMEs.</p>
                            </div>
                        </div>


                        <div className="media g-mb-15">
                            <div className="d-flex mr-4">
                              <span className="u-icon-v2 g-color-gray-dark-v4 g-rounded-5 d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 166a38 38 0 1 0-38-38a38 38 0 0 0 38 38Zm0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26Zm112-44H16a6 6 0 0 0-6 6v128a6 6 0 0 0 6 6h224a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6ZM22 108.82A54.73 54.73 0 0 0 60.82 70h134.36A54.73 54.73 0 0 0 234 108.82v38.36A54.73 54.73 0 0 0 195.18 186H60.82A54.73 54.73 0 0 0 22 147.18Zm212-12.53A42.8 42.8 0 0 1 207.71 70H234ZM48.29 70A42.8 42.8 0 0 1 22 96.29V70ZM22 159.71A42.8 42.8 0 0 1 48.29 186H22ZM207.71 186A42.8 42.8 0 0 1 234 159.71V186Z"/></svg>
                                </span>
                            </div>
                            <div className="media-body">
                                <h3 className="h5 g-color-black mb-20">Créditos tasa preferencial</h3>
                                <p className="g-color-gray-dark-v4">Créditos especiales pensados para nuestros socio.</p>
                            </div>
                        </div>                        

                        

                    </div>
                </div>

            </div>
        <div className="col   text-center my-5">
          <Cads/>
        </div>
      </div>
    </div>
  );
}

export default Home;