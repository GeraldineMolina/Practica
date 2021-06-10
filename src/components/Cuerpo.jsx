import React from 'react'
import '../utils/css/cu_estilos.css'
import manzanas from '../utils/images/manzanas.jpg'

function Cuerpo(){
    return(
        <div class="contenedor_cuerpo">
            <div class="texto"> 
                <h1> ¿Que nutrientes tiene? </h1>
                <h2> Contiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B y C. </h2>
            </div>
            <div class="imagen">
                <img src={manzanas} alt="Es una manzana" />
            </div>
        </div>

    )
}

export default Cuerpo

