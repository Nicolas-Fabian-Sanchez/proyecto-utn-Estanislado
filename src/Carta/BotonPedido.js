import {Link} from "react-router-dom";
import "./Carta.css"

export default function BotonPedido({dato,infoPath}){
    return(
        <Link className="button botones" to={infoPath}>{dato}</Link>
    )
}