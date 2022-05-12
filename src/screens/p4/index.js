import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../providers/search";
import '../../styles/pages.scss'

const P4 = () => {
    const searchList=React.useContext(SearchContext)
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="hint">
                        chamavam eles de "cavalos corredores", pois entravam
                        correndo na favela atirando para todos os lados
                        <br /><br />
                        era o batalhão de elite, do qual fazia parte {searchList.searchList.lessa ? <Link className="link" to='/p5'>Ronnie Lessa</Link> : <span className="black">|||||||||||||||||||||||||</span>}

                    </p>
                </div>
            </div>
            <Link to='/p3' className="button">voltar</Link>
        </div>
    )
}
export default P4