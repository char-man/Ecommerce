import { FaWhatsapp } from "react-icons/fa";

const Card = ({ img, title, star, newPrice, description, Talla,rojo,blanco, negro, azul}) => {
const enlace = "https://wa.me/240222361146?text=Hola%2C%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20estas%20zapatillas"
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <p className="description">{description}</p>
          <section className="colores">
            <span>Color:</span>  <div className={rojo?'general rojo':'null'}></div> <div className={negro?'general negro':'null'}></div><div className={azul?'general azul':'null'}></div> <div className={blanco?'general blanco':'null'}></div>
          </section>
          <section>
            <p className="Talla"><span>Talla:</span> {Talla}</p>
          </section>
          <section className="card-reviews">
            {star} {star} {star} {star}
          </section>
          <section className="card-price">
            <div className="price">
              {newPrice} XAF
            </div>
          </section>
          <section className="wst-bts">
            <div>
              <a href={enlace} target="about_blank">Encargar </a>
              <FaWhatsapp />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;
