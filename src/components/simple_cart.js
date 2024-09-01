import { Button2 } from "./Button"
import Sp from '../Recursos/Simple product/air force one.jpg'
import Sp1 from '../Recursos/Simple product/Air max 270.jpg'
import Sp2 from '../Recursos/Simple product/AllStartDior.jpg'
import Sp4 from '../Recursos/Simple product/LV.jpg'
import Sp6 from '../Recursos/Simple product/Airmax290.jpg'
import Sp7 from '../Recursos/Simple product/Puma 180 .jpg'
import Sp8 from '../Recursos/Simple product/Vans.jpg'
import Sp9 from '../Recursos/Simple product/LV X Air Force.jpg';
import sp10 from '../Recursos/Simple product/botas_lousvutton.jpg'
import sp11 from '../Recursos/Simple product/botas_luis.jpg'
import { FaWhatsapp } from "react-icons/fa";

let lista = [
    {
        img: Sp,
        title:'Air force one',
        price: '16.500'
    },
    {
        img: Sp1,
        title:'Air max 270',
        price: '16.500'
    },
    {
        img: Sp2,
        title:'Dior All star',
        price: '16.500'
    },
    {
        img: Sp4,
        title:'Louis vuitton',
        price: '22.500'
    },
    {
        img: Sp6,
        title:'Air max 298',
        price: '18.500'
    },
    {
        img: Sp7,
        title:'puma 18',
        price: '20.500'
    },    
    {
        img: Sp8,
        title:'Vans',
        price: '16.500'
    },
    {
        img: Sp9,
        title:'Vans',
        price: '16.500'
    },
    {
        img:sp10,
        title: 'Botas Louis Vuitton',
        price: '18.500'
    },
    {
        img:sp11,
        title: 'Botas Louis Vuitton',
        price: '18.500'
    }
]

const enlace = "https://wa.me/240222361146?text=Hola%2C%20me%20gustaria%20saber%20m%C3%A1s%20sobre%20estas%20zapatillas"

const SimpleCart = ({text, img, price}) =>{

    
    return(
        <>
            <div className="container_intro"> 
                        <div className="intro_bts_txt">
                        <h2 className="intro_txt">{text}</h2>
                        <img src={img} alt={text}></img>
                        <div>
                        <h3 className="price_simple">{price} XAF</h3>
                        <Button2 title="Encargar" enlace={enlace} logo={<FaWhatsapp/>}/>
                     </div>
                </div>
            </div>
        </>
    )
}


function SimpleCartDad(){



    return(
        <div>
            {lista.map((el) =>{ return(<SimpleCart text={el.title} img={el.img} price={el.price} />)})}
        </div>
    )
}

export default SimpleCartDad