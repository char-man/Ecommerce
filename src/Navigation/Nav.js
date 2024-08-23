import {FaRegHeart, FaRegUser, FaRegEnvelope} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Nav.css";


const Nav = () => {
  const enlace = "https://wa.me/240222361146?text=Hola%2C%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20estas%20zapatillas"
  return (
    
    <div className="pm">
        <div className="pedido"> 
            <h4>Haz tu pedido ahora y recibelo el mismo día</h4>
        </div>
        <nav>
          <div className="logo_content">
            <h2 className="logo">AURA</h2>
          </div>
          <div className="profile-container">
          <div href="labalaski.com">
          <FaRegHeart />
          </div>
          <div href="facebook.com">
          <FaRegUser />
          </div>
          <a href="mailto: obamajuan20@gmail.com">
          <FaRegEnvelope />
          </a>
          <a href={enlace} target="about_blank">
          <FaWhatsapp />
          </a>
         </div>
      </nav>
  </div>
  );
};

export default Nav;
