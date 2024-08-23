import slider1  from "../db/Slider1"
import { Button3 } from "../components/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Arrow from "./Arrow";


const Sub1 =  ({img, title, zapatos='', price, descrip=''}) => {


    return(
        <div className="content-slider1">
            <div className="slider1-img">
                <img src={img} alt={title}></img>
            </div>
            <div className="slider1-txt">
                <h3>{title}</h3> 
                {/* <p><span>{zapatos? 'Talla: ':'Num: '}</span>{descrip}</p> */}
                <p className="price">{price} XAF</p>
                <Button3/>
            </div>
        </div>
    )
}

function Slider1(){
    let settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div >
            <h2 className="slider_title">Tendencias de semana</h2>
            <div className="container-slider1">
            <Arrow/>
            <Slider {...settings} key={Math.random()}>
                {  slider1.map((el) =>{
                        return(
                            <Sub1 title={el.title} descrip={el.descrip} img={el.img} zapatos={el.zapatos} price={el.price} key={el.id}/>
                            )
                        })
                    }
            </Slider>
            </div>
        </div>
    )
}

export default Slider1