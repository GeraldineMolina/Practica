import React from 'react'
import '../utils/css/fo_estilos.css'
import durazno from '../utils/images/Durazno.jpg'
const Footer = () => {
    return (
        <div class="contenedor_footer">
            <div class="texto3"> 
                <h1> ¿Que nutrientes tiene? </h1>
                <h2> Dentro de sus propiedades destacan las vitaminas A, B1, B2, E, K y C, además de minerales como fósforo, potasio, sodio, luteína, calcio, magnesio, tiamina, bioflavonoides, niacina o selenio, antioxidantes que ayudan a estimular el sistema inmunológico y a prevenir ciertas enfermedades. </h2>
            </div>
            <div class="imagen3">
                <img src={durazno} alt="Es una durazno" />
            </div>
        </div>
    )
}

export default Footer



