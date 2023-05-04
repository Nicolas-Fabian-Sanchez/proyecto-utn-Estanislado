import{useEffect,useState} from "react";
import './Carta.css';
import Comidas from "./Comidas";
import BotonPedido from "./BotonPedido";


export default function Carta(){
    let [datos,setDatos]=useState([]);

    const traerInfo=async()=>{
        await fetch("http://localhost:4001/postmenu")
            .then((res)=>res.json())
            .then((dato)=>setDatos(dato))
            .catch((error)=>document.write(`se pordujo un error ${error}`))
    }

    useEffect(()=>{
        traerInfo();
        setTimeout(()=>{console.log(datos)},5000)
    },[])

    return(
        <main>
            <h1>Carta de comidas Estanislao</h1>
            <section className="card">
                <h3>Comidas al Plato</h3>
                <form className="card1" action="http://localhost:4001/postpedido">
                        {datos.map((dato)=>{
                            return <Comidas key={datos.indexOf(dato)} info={dato}/>
                        })}
                        <legend>Su Pedido:</legend>
                        <ul className="zonaPedido">

                        </ul>
                        <BotonPedido dato="Confimar Pedido" infoPath="/pedido" />
                </form>
            </section>
        </main>
)
}
