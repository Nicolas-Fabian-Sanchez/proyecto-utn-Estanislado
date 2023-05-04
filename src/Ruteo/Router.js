import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "../home/Home.js";
import Carta from "../Carta/Carta.js";
import PedidoCuenta from "../pedidoCuenta/PedidoCuenta.js";


export default function RouterComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/carta" element={<Carta/>}/>
                <Route  path="/pedido" element={<PedidoCuenta/>}/>
            </Routes>
        </BrowserRouter>
    )
}