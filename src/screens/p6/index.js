import React,{useState} from "react";
import { Link } from "react-router-dom";
import mapa from '../../assets/images/mapa rio.png'
import '../../styles/pages.scss'

const P6 = () => {
    const [reveal, setReveal] = useState('hidden')
    return (
        <div className="general">
            <div className="container">
                <div className="imgcontainer">
                    <img alt='mapa do Rio de Janeiro' src={mapa} className='image' />
                </div>
                <div id="rj" className={reveal} onClick={(e)=>{setReveal('box')}}>
                    <p className="hint">
                        Cidade maravilhosa<br/>
                        Cheia de encantos mil<br/>
                        Cidade maravilhosa<br/>
                        Coração do meu Brasil
                    </p>
                </div>

            </div>
            <Link to='/p1' className="button">voltar</Link>
        </div>
    )
}

export default P6 