import React from "react";
import { Link } from "react-router-dom";
import '../../styles/pages.scss'
import { SearchContext } from "../../providers/search";

const P1 = () => {
    const searchList=React.useContext(SearchContext)
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="hint">as <Link to='/p2' className="link">balas</Link> utilizadas pertenciam a um lote distribuído
                        por todo o brasil. para São Paulo, foram enviados 217 mil cartuchos.
                        <br/>
                        {searchList.searchList.rj ? <Link to='/p6' className="link">para Rio de Janeiro</Link> : <span className="black">||||||||||||||||||||||||||||||||||</span>}, foram enviados 200 mil.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default P1