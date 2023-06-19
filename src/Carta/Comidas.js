import { useState } from "react"

export default function Comidas({info}){
    /*const[porcion,setPorciones]=useState(1)
    const sumar=()=>{
        setPorciones(porcion + 1)
        return setPorciones
    }
    const restar=()=>{
        setPorciones(porcion -1)
        return setPorciones
    }*/
    const valorInput={
            "pedido":info.variedad,
            "precio":info.precio
        }
        
    let porcion = 1 
    return(
        <div className= "tarjeta">
          <label htmlFor="pedido"><input type="checkbox" id="pedido" name="pedido" value={`${valorInput.pedido} , ${valorInput.precio}`}>
          </input >{info.variedad} $ {info.precio}</label>
          {/*</div><button onClick={restar}className="botones">-</button><p className="boton1">{porcion} </p >
          <button onClick={sumar}  className="botones">+</button>*/}
        </div>
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