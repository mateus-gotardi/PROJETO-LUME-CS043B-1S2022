import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import uzz18 from '../../assets/images/uzz18.png'
import '../../styles/pages.scss'

const P2 = () => {
    useEffect(() => {
        sessionStorage.setItem('dica1',Date.now())
      }, []);
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="hint">
                        lote UZZ-18<br />
                        comprado em 2006 pela polícia federal<br />
                        mais de 1,859 milhão
                        <br /><br />
                        já foram usadas na chacina em são paulo em 2015, com 18 mortos.
                    </p>

                </div>
                <img alt='projétil lote uzz18/7,62' src={uzz18} className='image' />
            </div>
            <Link to='/p1' className="button">voltar</Link>
        </div>
    )
}

export default P2