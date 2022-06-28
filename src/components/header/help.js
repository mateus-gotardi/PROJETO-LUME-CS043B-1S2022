import React from "react";
import '../../styles/header.scss'
import { BiStopwatch, BiMap, BiSearch, BiFileFind } from 'react-icons/bi'

const Help = () => {
    return (
        <div className="help">
            <div>
                <div>
                    <BiStopwatch className="icon" />
                </div>
                <p>O cronômetro indica quanto tempo você ainda tem para resolver o caso.</p>
            </div>
            <div>
                <div>
                    <BiMap className="icon" />
                </div>
                <p>Para voltar ao mapa clique no cronômetro a qualquer momento.</p>
            </div>
            <div>
                <div>
                    <BiFileFind className="icon" />
                </div>
                <p>Procure por pistas nas páginas.</p>
            </div>
            <div>
                <div>
                    <BiSearch className="icon" />
                </div>
                <p>Utilize a caixa de pesquisa para procurar por palavras-chave.</p>
            </div>
        </div>
    )
}
export default Help