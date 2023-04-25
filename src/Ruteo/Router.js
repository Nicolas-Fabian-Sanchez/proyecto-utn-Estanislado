import {BrowserRouter,Routes,Route} from "react-router-dom";
import home from "../Home/home.js";
import carta from "../Carta/carta.js";
import pedidoCuenta from "./PedidoCuenta/pedidoCuenta.js";


export default function RouterComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<home/>}/>
                <Route  path="/carta" element={<carta/>}/>
                <Route  path="/pedido" element={<pedidoCuenta/>}/>
            </Routes>
        </BrowserRouter>
    )
}