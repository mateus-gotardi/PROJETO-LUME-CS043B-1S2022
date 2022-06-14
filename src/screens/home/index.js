import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.scss'

const Home =()=>{
    return(
        <div className="homeContainer">
            <div className="title">
                <h1>um crime aconteceu.</h1>
                <h2>histórias por vezes se perdem no esquecimento. com o passar do tempo, memórias, arquivos e fragmentos vão se tornando cada vez mais nebulosos e difíceis de rastrear. esta é uma destas histórias. um crime aconteceu, um crime que deseja permanecer em silêncio. suas rotas e suas origens parecem cada vez mais distantes e sem futuro. na sua pilha infinita de partes, seria possível descobrir o que aconteceu?</h2>
            </div>
            
            <Link to='/inicial' className="buttonHome">investigar</Link>
        </div>
    )
}

export default Home