import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import chacina from '../../assets/images/vigario chacina.jpg'
import '../../styles/pages.scss'

const P3 = () => {
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="hint">
                        chacina de vigário geral (1993)<br />
                        21 pessoas executadas
                        <br /><br />
                        autores: <Link className="link" to='/p4'>9° BPM</Link>
                    </p>

                </div>
                <div className="imgcontainer">
                    <img alt='fotos da chacina de vigário geral, 1993' src={chacina} className='image' />
                </div>
            </div>
            <Link to='/p2' className="button">voltar</Link>
        </div>
    )
}

export default P3