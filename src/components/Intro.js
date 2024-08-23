// import { Button2 } from "./Button"

const Intro = ({text, img}) =>{



    return(
        <>
            <div className="container_intro"> 
                        <div className="intro_bts_txt">
                        <h2 className="intro_txt">{text}</h2>
                        <img src={img} alt={text}></img>
                        <div>
                        {/* <Button2 title="Ver coleccion"/> */}
                     </div>
                </div>
            </div>
        </>
    )
}

export default Intro

