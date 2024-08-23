import slider4 from "../db/Slider4";
import { Button3 } from "../components/Button";
import Slider from "react-slick";
import Arrow from "./Arrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Subslider4 = ({price, title, img, zapatos, descrip})=> {


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

function Slider4(){
    let settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <div>
            <h2 className="slider_title" >  Tendencias </h2>
            <div className="container-slider1">
            <Arrow/>
            <Slider {...settings}>
                {  slider4.map((el) =>{
                        return(
                            <Subslider4 title={el.title} descrip={el.descrip} zapatos={el.zapatos} img={el.img} price={el.price} key={el.id}/>
                            )
                        })
                    }
            </Slider>
            </div>
        </div>
    )
}

export default Slider4