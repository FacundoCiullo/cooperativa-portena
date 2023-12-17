import "./Widget.scss"

const Widget = () => {
  return (
    <div className="container">
      <div className="whatsapp">
        <a href="https://api.whatsapp.com/send?phone=5491139135224&text=Hola! me gustaría pedir información sobre las viviendas."> {/* 35897644 */}
          <img
            src="/images/widget-whatsapp.svg"
            width="100"
            height="50"
            className="d-inline-block align-top"
            alt="logo de whatsapp"
          />
        </a>
      </div>
    </div>
  );
}

export default Widget;

