import {Link} from "react-router-dom";
import "./Home.css"

export default function BotonIng ({dato,infoPath}){
    return(
        <Link className="button botones" to={infoPath}>{dato}</Link>
    )
}