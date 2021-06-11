import React from 'react'
import '../utils/css/to_estilos.css'
import mango from '../utils/images/mango.jpg'
const Todo = () => {
    return(
        <div class="contenedor_todo">
            <div class="texto2"> 
              <h1> ¿Que nutrientes tiene? </h1>
                <h2>Las principales vitaminas que contiene son vitamina A, específicamente betacarotenos y vitamina C. Estas vitaminas actúan en conjunto con otras sustancias y le confieren al mango un papel antioxidante importante, protegiendo así a las células del envejecimiento y diferentes enfermedades. </h2>
            </div>
            <div class="imagen2">
                <img src={mango} alt="Es un mango" />
            </div>
        </div>
    )
}

export default Todo