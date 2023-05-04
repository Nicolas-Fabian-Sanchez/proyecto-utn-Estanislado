/*export default function Comidas({info}){
    return(
        <label><input type="checkbox" onClick={suPedido}></input>{info}</label>
    )
}

//--- creo una lista previa usando localStorage
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
pedidoActual()

const suPedido= ()=>{//falta captar el evento 
    let item=document.createElement("li");
    item.innerText= `evento`;
    lista.appendChild(item);
    localStorage.setItem("listaPrevia",JSON.stringify(listaPedido))
}*/