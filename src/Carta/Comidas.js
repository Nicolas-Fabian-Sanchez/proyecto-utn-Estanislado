export default function Comidas({info}){
    return(
        <>
        {info.filter((tipo)=> tipo === "hamburguesa")}//seguir de aca
        <label><input type="checkbox" /*onClick={suPedido}*/></input>{info.variedad} $ {info.precio}</label>
        </>
        
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
//pedidoActual()

const suPedido= (evento)=>{//falta captar el evento 
    let imputSel = evento.target.value
    let item=document.createElement("li");
    item.innerText= `evento`;
    lista.appendChild(item);
    localStorage.setItem("listaPrevia",JSON.stringify(listaPedido))
}