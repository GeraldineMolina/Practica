import React from 'react'
import '../utils/css/cu_estilos.css'
import manzanas from '../utils/images/manzanas.jpg'

function Cuerpo(){
    return(
        <div class="contenedor_cuerpo">
            <div class="texto"> 
                <h1> ¿Que nutrientes tiene? </h1>
                <h2> CContiene flavonoides y polifenoles por lo que es rica en antioxidantes, en vitaminas del grupo B (B1, B2 y B6), vitamina C, fósforo, potasio y calcio. Además, gracias a la presencia de ácido málico y tartárico facilita la digestión de aquellos alimentos que posean un alto contenido en grasas. </h2>
            </div>
            <div class="imagen">
                <img src={manzanas} alt="Es una manzana" />
            </div>
        </div>

    )
}

export default Cuerpo

