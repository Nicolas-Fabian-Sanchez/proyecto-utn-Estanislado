//import { useState } from "react"

export default function Comidas({info}){
    /*const[porcion,setPorciones]=useState(1)
    const sumar=()=>{
        setPorciones(porcion + 1)
        return setPorciones
    }
    const restar=()=>{
        setPorciones(porcion -1)
        return setPorciones
    }
    <button onFocus={restar}className="botones">-</button><p className="boton1">{porcion} </p >
    <button onFocus={sumar}  className="botones">+</button>
    */
    const valorInput={
            "pedido":info.variedad,
            "totalPagar":info.precio
        }
        
    let porcion = 1 
    return(
        <>
         
          
          <div className= "tarjeta">
            
            <label htmlFor={info._id}><input type="checkbox" id={info._id} name="pedido"  value={`${valorInput.pedido} , ${valorInput.totalPagar}` }>
            </input >{info.variedad} $ {info.precio}</label>
          </div>
          
       
        </>
       
       
    )
    
   
}
/*--- creo una lista previa usando localStorage
let listaPedido=[]
let lista= document.querySelector(".zonaPedido")

const pedidoActual=()=>{
    if(localStorage.getItem("listaPrevia") == null){
        lista.innerHTML=""
    }else{
        listaPedido.JSON.parse(localStorage.getItem("listaPrevia"));
        listaPedido.map((itemLista)=>{
            let item = document.createElement("li");
            item.innerText=itemLista;
            lista.appendChild(item)
        })
    }

}
//pedidoActual()

const suPedido= (evento)=>{//falta captar el evento 
    let imputSel = evento.target.value
    let item=document.createElement("li");
    item.innerText= `evento`;
    lista.appendChild(item);
    localStorage.setItem("listaPrevia",JSON.stringify(listaPedido))
}*/