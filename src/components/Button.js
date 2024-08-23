import "../Style/Button.css"
import { FaWhatsapp } from "react-icons/fa";



const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  );
};

const Button2 = ({ title, logo='', enlace='#' }) => {
  return (
    <a  className={logo?"btns2 con_logo":"btns2"} href={enlace}>
      {title}{logo}
    </a>
  );
};

const Button3 = () =>{
  const enlace = "https://wa.me/240222361146?text=Hola%2C%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20estas%20zapatillas"
  return(
    <div className="container_btns_slider">
        <a href={enlace} target="about_blank" className="btns_slider">Encargar </a> <FaWhatsapp />
    </div>
  )
}


export  {Button, Button2, Button3};
