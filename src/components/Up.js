import { FaArrowCircleUp } from "react-icons/fa"

function Up(){

    let w = window

        
    const Scrolly = () =>{
        w.scrollTo({
            behavior: "smooth",
            top: 800 })
    }    

    return(
        <div className="up" onClick={Scrolly}>
            <FaArrowCircleUp/>
        </div>
    )
}

export default Up