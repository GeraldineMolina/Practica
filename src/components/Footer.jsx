import React from 'react'
import '../utils/css/fo_estilos.css'
import durazno from '../utils/images/Durazno.jpg'
const Footer = () => {
    return (
        <div class="contenedor_footer">
            <div class="texto3"> 
                <h1> ¿Que nutrientes tiene? </h1>
                <h2> Gracias a su elevado contenido en fibra dietética, resulta muy aconsejable para combatir el estreñimiento tiene vitaminas E y K. </h2>
            </div>
            <div class="imagen3">
                <img src={durazno} alt="Es una durazno" />
            </div>
        </div>
    )
}

export default Footer



