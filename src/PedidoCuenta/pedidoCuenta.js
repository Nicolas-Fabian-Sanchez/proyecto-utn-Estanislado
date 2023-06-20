import { Link } from 'react-router-dom'
import './Pedido.css'

export default function PedidoCuenta(){
        return(
               <>
                <h1>"Estanislao Resto-Bar"</h1>
                <p>Su pedido ya fue ingresado correctamente!!!</p>
                <p className='margin'>Pronto se acercara un mozo ha atenderlo</p>
                <Link to="/" className='button'>Regresar al menu</Link>
               </>
            )
}