import React from "react";
import { Link } from "react-router-dom";
import '../../styles/home.scss'

const GameOver = () => {
    return (
        <div className="homeContainer">
            <div className="title">
                <h1>O Tempo Acabou</h1>
                <h2>Ao investigar um caso o tempo é fundamental. Quanto mais se demora para chegar à uma conclusão mais difícil é entender o que realmente aconteceu. Informações se perdem e entram em conflito com novas, às vezes criadas para distrair e atrapalhar a investigação. Infelizmente, seu tempo acabou, mas isto não significa que você não possa começar de novo. Sabendo por onde começar, fica mais fácil continuar a busca.</h2>
            </div>

            <Link to='/inicial' className="buttonHome">investigar</Link>
        </div>
    )
}

export default GameOver