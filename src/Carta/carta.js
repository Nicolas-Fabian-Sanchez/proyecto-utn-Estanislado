import{useEffect,useState} from "react";
import './carta.css'
//import porciones from '../ResumenPedido/Pedido'

export default function carta(){
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
        pass // falta hacer
    )
}

/*export default function menu(){
    return(
        <main>
            <h1>Carta de comidas Estanislao</h1>
            <section>
                <div className="card">
                    <h3>Comidas al Plato</h3>
                    <form className="card1" action="http://localhost:4001/postpedido">
                        <label><input type="checkbox"></input>Lomo con papas fritas<porciones/>
                        </label>
                        <label><input type="checkbox"></input>Milanesa a la Napolitana</label>
                        <label><input type="checkbox"></input>Parrillada completa</label>
                        <label><input type="checkbox"></input>Bife a la Española</label>
                    </form>
                </div>
                <div class="card">
                    <h3>Picadas</h3>
                    <form>
                        <label><input type="checkbox"></input>Milanesa,papas fritas y picles(comen 4)</label>
                        <label><input type="checkbox"></input>Milanesa,papas fritas,picles,fiambre,enpanadas(comen 4)</label>
                        <label><input type="checkbox"></input>Cazuelas</label>
                        <label><input type="checkbox"></input>Tabla de Fiambres</label>
                    </form>
                </div>
                <div class="card">
                    <h3>Bebidas con Alcohol</h3>
                    <form>
                        <label><input type="checkbox"></input>Coca-Cola</label>
                        <label><input type="checkbox"></input>Sprite</label>
                        <label><input type="checkbox"></input>Agua</label>
                        <label><input type="checkbox"></input>Limonada</label>
                    </form>
                </div>
                <div className="card">
                    <h3>Bebidas con Alcohol</h3>
                    <form>
                        <label><input type="checkbox"></input>Vino tinto Santa Julia malbet</label>
                        <label><input type="checkbox"></input>Vino blanco Tardio malbet</label>
                        <label><input type="checkbox"></input>Fernet Branca</label>
                        <label><input type="checkbox"></input>Gancia</label>
                    </form>
                </div>
            </section>
            <section>
                <h2>SU PEDIDO:</h2>
                <ul>
                   
                </ul>
            </section>
        </main>
    )
}*/