import React from 'react'
import '../utils/css/to_estilos.css'
import mango from '../utils/images/mango.jpg'
const Todo = () => {
    return(
        <div class="contenedor_todo">
            <div class="texto2"> 
              <h1> ¿Que nutrientes tiene? </h1>
                <h2> Es una fruta rica en fibra y con una aportación calórica baja (65 kilocalorías por cada 100 gramos) tiene vitaminas como A y C. </h2>
            </div>
            <div class="imagen2">
                <img src={mango} alt="Es un mango" />
            </div>
        </div>
    )
}

export default Todo