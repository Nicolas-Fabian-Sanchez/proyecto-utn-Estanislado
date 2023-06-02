import{useEffect,useState} from "react";
import './Carta.css';
import Comidas from "./Comidas";
import BotonPedido from "./BotonPedido";


export default function Carta(){
    let [datos,setDatos]=useState([]);

    const traerInfo=async()=>{
        await fetch("http://localhost:4001/menuCompleto")
            .then((res)=>res.json())
            .then((dato)=>setDatos(dato))
            .catch((error)=>document.write(`se pordujo un error ${error}`))
    }

    useEffect(()=>{
        traerInfo();
        setTimeout(()=>{console.log(datos)},5000)
    },[])
    /*const filtradoDatos = (datos)=>{
        if(datos == "hamburguesa"){
            return datos.map((dato)=>{
                return <Comidas key={datos} info={dato}/>
            })
        }}*/
    return(
        <main>
            <h1>Carta de comidas Estanislao</h1>
            <section >
             <form  action="https://api-estanislao.onrender.com/postpedido">
                        <div className="card">
                           {datos.map(dato =>{
                               return<Comidas key={datos} info={dato}/>
                           })} 
                           
                        </div>
                        <legend>Su Pedido:</legend>
                        <ul className="zonaPedido">

                        </ul>
                        <BotonPedido dato="Confimar Pedido" infoPath="/pedido" />
                </form>
            </section>
        </main>
          )
    }
