import { AiFillStar } from "react-icons/ai";
import AirMax2090 from '../Recursos/Normal/Air max 2090.jpg'
import AirMax270 from '../Recursos/Normal/Air max 270 (2).jpg' 
import AirMax270B from '../Recursos/Normal/Air max 270Black.jpg' 
import LV from '../Recursos/Normal/LOUIS VUITTON  .jpg' 
import LV2 from '../Recursos/Normal/LV (3).jpg' 
import LV3 from '../Recursos/Normal/Lousi Vuitton.jpg' 
import Nb from '../Recursos/Normal/New Balance core.jpg'
import Nike129 from '../Recursos/Normal/Nike 129 (2).jpg'
import Nike1292 from '../Recursos/Normal/Nike 129.jpg'
import Airmaxplus from '../Recursos/Normal/Air max plus.jpg'
import Pumasmash from '../Recursos/Normal/Puma smash (2).jpg'
import Pumasmash2 from '../Recursos/Normal/Puma smash.jpg'
import DeportivasNike from '../Recursos/Normal/Sport Nike.jpg'
import Yezy450 from '../Recursos/Normal/Yezy 450.jpg'
// import camiseta from "../Recursos/cami.jpg"


const data = [
  {
    img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
    // img: camiseta,
    title: "Nike Monarch",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: AirMax2090,
    title: "Air max 2090",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 40,
    newPrice: "16.500",
    company: "",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },

  {
    img: AirMax270,
    // img: camiseta,
    title: "Air Max 140",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 5,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  
  {
    img: LV,
    title: "Louis Vuitton",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "20.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: AirMax270B,
    title: "Air max 270",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: LV2,
    title: "Louis Vuitton",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "20.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },

  {
    img: "https://i.pinimg.com/originals/0c/6d/88/0c6d8852761823a52106bfe445dc5f1a.jpg",
    // img: camiseta,
    title: "Nike jordan",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 7,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/5c/f9/98/5cf9986c8ffbdd919e7437b87a53edda.jpg",
    // img: camiseta,
    title: "Nike jordan",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 6,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Nike129,
    title: "Nike 129",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "17.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Nike1292,
    title: "Nike 129",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "17.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: LV3,
    title: "Louis Vuitton",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "20.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },

  {
    img: "https://i.pinimg.com/originals/c9/69/32/c96932fa29a84378a5beadc5228ed6fe.jpg",
    // img: camiseta,
    title: "Nike jordan",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 10,
    newPrice: "17.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Nb,
    title: "New Balance",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.000",
    company: "Otr",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/08/eb/2d/08eb2d6ae624dc78de07ab08b76bc6d3.jpg",
    // img: camiseta,
    title: "Sneskers",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 23,
    newPrice: "16.500",
    company: "Puma",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/29/cd/80/29cd808a9efe6df07be04c36da3cf229.jpg",
    // img: camiseta,
    title: "Sneakers",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 12,
    newPrice: "16.500",
    company: "Puma",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  
  {
    img: Airmaxplus,
    title: "Air max plus",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "18.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/d6/e0/e8/d6e0e80ac2531b4918218cc88b75bfc5.jpg",
    // img: camiseta,
    title: "Rainbow Chex",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 12,
    newPrice: "15.500",
    company: "Puma",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Pumasmash,
    title: "Puma smash",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Pumasmash2,
    title: "Nike Monarch",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.000",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/f2/a0/e6/f2a0e67734085e3ba81f4cf4aa58ce02.jpg",
    // img: camiseta,
    title: "Air max plus",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 14,
    newPrice: "17.500",
    company: "Puma",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
    // img: camiseta,
    title: "Vans",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 15,
    newPrice: "16.500",
    company: "Puma",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
    // img: camiseta,
    title: "Bandana",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 16,
    newPrice: "15.500",
    company: "Otras",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/8b/96/66/8b9666cfced4976c56fcdae56f8a8e36.jpg",
    // img: camiseta,
    title: "All start",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 17,
    newPrice: "15.500",
    company: "Otras",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: "https://i.pinimg.com/originals/dc/a1/2b/dca12b82678f025f687339b6ea6490dc.jpg",
    // img: camiseta,
    title: "Yezzy rojo",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 19,
    newPrice: "16.500",
    company: "Otras",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: Yezy450,
    title: "Yezzy 450",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },

  {
    img: "https://i.pinimg.com/originals/56/22/ea/5622ea6f7ebdacc6cdd45ab5d48e31a1.jpg",
    // img: camiseta,
    title: "Yezzy azul",
    // description: "Descripcion temporal",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 20,
    newPrice: "16.500",
    company: "Otras",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  {
    img: DeportivasNike,
    title: "Deportivas Nike",
    Talla: 40,
    star: <AiFillStar className="rating-star" />,
    id: 1,
    newPrice: "16.500",
    company: "Nike",
    rojo: false,
    negro: false,
    azul: false, 
    blanco: false
  },
  
  
];

export default data;
