import './Pedido.css'
import{useEffect,useState} from "react";

export default function PedidoCuenta(){
        let [datos,setDatos]=useState([]);

        const traerInfo=async()=>{
            await fetch("http://localhost:4001/postpedido")
                .then((res)=>res.json())
                .then((dato)=>setDatos(dato))
                .catch((error)=>document.write(`se pordujo un error ${error}`))
        }
    
        useEffect(()=>{
            traerInfo();
            setTimeout(()=>{console.log(datos)},5000)
        },[])
    
      
        return(
               <h1>soy pedido</h1>
        )
}