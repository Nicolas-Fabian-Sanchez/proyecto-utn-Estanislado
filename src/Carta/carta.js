import './carta.css'

export default function Carta(){
    return(
        <main>
            <h1>Carta de comidas Estanislao</h1>
            <section>
                <div class="card">
                    <h3>Comidas al Plato</h3>
                    <form class="card1">
                        <label><input type="radio"></input>Lomo con papas fritas</label>
                        <label><input type="radio"></input>Milanesa a la Napolitana</label>
                        <label><input type="radio"></input>Parrillada completa</label>
                        <label><input type="radio"></input>Bife a la Española</label>
                    </form>
                </div>
                <div class="card">
                    <h3>Picadas</h3>
                    <form>
                        <label><input type="radio"></input>Tabla milanesa,papas fritas y picles(comen 4)</label>
                        <label><input type="radio"></input>Tabla Estanislao,milanesa,papas fritas,picles,fiambre,enpanadas (comen 4)</label>
                        <label><input type="radio"></input>Cazuelas</label>
                        <label><input type="radio"></input>Tabla de Fiambres</label>
                    </form>
                </div>
                <div class="card">
                    <h3>Bebidas con Alcohol</h3>
                    <form>
                        <label><input type="radio"></input>Coca-Cola</label>
                        <label><input type="radio"></input>Sprite</label>
                        <label><input type="radio"></input>Agua</label>
                        <label><input type="radio"></input>Limonada</label>
                    </form>
                </div>
                <div class="card">
                    <h3>Bebidas con Alcohol</h3>
                    <form>
                        <label><input type="radio"></input>Vino tinto Santa Julia malbet</label>
                        <label><input type="radio"></input>Vino blanco Tardio malbet</label>
                        <label><input type="radio"></input>Fernet Branca</label>
                        <label><input type="radio"></input>Gancia</label>
                    </form>
                </div>
            </section>
        </main>
    )
}