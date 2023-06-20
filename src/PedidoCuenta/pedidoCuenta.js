import { Link } from 'react-router-dom'
import './Pedido.css'
//import{useEffect,useState} from "react";

export default function PedidoCuenta(){
        /*let [datos,setDatos]=useState([]);

        const traerInfo=async()=>{
            await fetch("http://localhost:4001/postpedido")
                .then((res)=>res.json())
                .then((dato)=>setDatos(dato))
                .catch((error)=>document.write(`se pordujo un error ${error}`))
        }
    
        useEffect(()=>{
            traerInfo();
            setTimeout(()=>{console.log(datos)},5000)
        },[])*/
    
      
        return(
               <>
                <h1>"Estanislao Resto-Bar"</h1>
                <p>Su pedido ya fue ingresado correctamente!!!</p>
                <p className='margin'>Pronto se acercara un mozo ha atenderlo</p>
                <Link to="/" className='button'>Regresar al menu</Link>
               </>
               
              
        )
}