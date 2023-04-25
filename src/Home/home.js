import './home.css';

export default function Home(){
  return(
      <header>
           <h1>"Bienvenidos a Estanislao"</h1>
           <form  action="http://localhost:4001/postmenu"  method="POST">
              <legend>Por favor ingrese el numero de mesa donde se encuentra sentado</legend>
              <div>
                <label><input type="radio"></input>Mesa 1</label>
                <label><input type="radio"></input>Mesa 2</label>
                <label><input type="radio"></input>Mesa 3</label>
                <label><input type="radio"></input>Mesa 4</label>
              </div>
              <button type="button">Ingresar</button>
           </form>
         
      </header>
  )
   
}