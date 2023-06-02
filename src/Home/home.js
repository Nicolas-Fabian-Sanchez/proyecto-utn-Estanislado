import './Home.css';
import BotonIng from './Boton';
export default function Home(){
  return(
      <header>
           <h1>"Bienvenidos a Estanislao"</h1>
           <form  action="https://api-estanislao.onrender.com/postmenu"  method="POST">
              <legend>Por favor ingrese el numero de mesa donde se encuentra sentado</legend>
              <div className = "mesas">
                <label htmlFor='M1'><input type="radio" id="M1" name='mesa' value="1"></input>Mesa 1</label>
                <label htmlFor='M2'><input type="radio" id="M2" name='mesa' value="2"></input>Mesa 2</label>
                <label htmlFor='M3'><input type="radio" id="M3" name='mesa' value="3"></input>Mesa 3</label>
                <label htmlFor='M4'><input type="radio" id="Ma" name='mesa' value="4"></input>Mesa 4</label>
              </div>
              <BotonIng dato="INGRESAR" infoPath="/carta"/>
           </form>
         
      </header>
  )
   
}