import { FaWhatsapp } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"


function Footer(){

    return(
        <div className="container-footer">
            <h2 className="footer_logo">Aura</h2>
            <div className="footer_socialmedia">
                <FaLinkedin />
                <FaWhatsapp />
                <FaTwitter />
            </div>
            <h3>Contactanos</h3>
            <div>
                <p> <span>Email:</span> EG_Market@gmail.com</p>
                <p> <span>Movil:</span> 222 36 11 46</p>
                <p> <span>Whatsapp:</span> 222 36 11 46</p>
            </div>
        </div>
    )
}


export default Footer