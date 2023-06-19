import './Home.css';
import{useEffect,useState} from "react";
import Comidas from "../Carta/Comidas";
import { useNavigate } from 'react-router-dom';

export default function Home(){

  let [datos,setDatos]=useState([]);
  const navigation = useNavigate();

  const traerInfo=async()=>{
        await fetch("https://api-estanislao.onrender.com/menuCompleto")
            .then((res)=>res.json())
            .then((dato)=>setDatos(dato))
            .catch((error)=>document.write(`se pordujo un error ${error}`))
    }
   useEffect(()=>{
        traerInfo();
        //setTimeout(()=>{console.log(datos)},5000)
    },[]);
  

  

  const ingresarMesa =async(evento)=>{
        evento.preventDefault();
        let pedido=[]
        let totalPagar=[]
        let mesa=""
        const inputSelecionados=document.querySelectorAll("input[type='checkbox']");
        inputSelecionados.forEach((checkbox)=>{
          if(checkbox.checked){
            let valor = checkbox.value
            let cambio = valor.split(",")
            pedido.push(cambio[0])
            totalPagar.push(parseInt(cambio[1]))
          }
          
        })
        console.log(pedido)

        const mesaSelecionada=document.querySelectorAll("input[type='radio']");
        mesaSelecionada.forEach((radio)=>{
          if(radio.checked){
             mesa = radio.value
          }
          
        })
      const form= JSON.stringify({
        "mesa":mesa,
        "pedido":pedido,
        "totalPagar":totalPagar,
      })
      //console.log(ingresarMesa)
      console.log(evento)
      console.log(form)
      const res =await fetch("https://api-estanislao.onrender.com/postmenu",{
        method:"POST",
        body:form,
        headers:{
          'Content-Type': 'application/json',
        }
      })
      if(res.ok){
        return navigation("/pedido")
      }
  }

  return(
      <>
           <h1>"Bienvenidos a Estanislao RetoBar"</h1>
           <form  onSubmit={(evento)=>{ingresarMesa(evento)}}>
              <legend>Por favor ingrese el numero de mesa donde se encuentra sentado</legend>
              <div className = "mesas">
                <label htmlFor='M1'><input type="radio" id="M1" name='mesa' value="1"></input>Mesa 1</label>
                <label htmlFor='M2'><input type="radio" id="M2" name='mesa' value="2"></input>Mesa 2</label>
                <label htmlFor='M3'><input type="radio" id="M3" name='mesa' value="3"></input>Mesa 3</label>
                <label htmlFor='M4'><input type="radio" id="Ma" name='mesa' value="4"></input>Mesa 4</label>
                <label htmlFor='M5'><input type="radio" id="Ma" name='mesa' value="5"></input>Mesa 5</label>
                <label htmlFor='M6'><input type="radio" id="Ma" name='mesa' value="6"></input>Mesa 6</label>
                <label htmlFor='M7'><input type="radio" id="Ma" name='mesa' value="7"></input>Mesa 7</label>
                <label htmlFor='M8'><input type="radio" id="Ma" name='mesa' value="8"></input>Mesa 8</label>
                <label htmlFor='M9'><input type="radio" id="Ma" name='mesa' value="9"></input>Mesa 9</label>
                <label htmlFor='M10'><input type="radio" id="Ma" name='mesa' value="10"></input>Mesa 10</label>
              </div>
              <legend>Carta de comidas Estanislao</legend>
              <div className="card">
                           {/*hamburguesas = datos.filter(dato => dato.tipo == "hamburguesa")}
                           {// console.log(hamburguesas)*/}
                           {datos.map(dato =>{
                               return <Comidas key={dato._id} info={dato} />
                            })} 
              </div>
              <input type="submit" value="Confirmar Pedido"  className="button"/>
           </form>
            
      </>
  )
   
}