import React, { useState } from "react";
import { Link } from "react-router-dom";
import lessa from '../../assets/images/RonnieLessa.png'
import '../../styles/pages.scss'

const P5 = () => {
    const [reveal, setReveal] = useState('hidden')
    return (
        <div className="general">
            <div className="container">
                <div className="box">
                    <p className="hint">
                        em sua ficha criminal, consta:<br />
                        homicídio 1<br />
                        homicídio 2<br />
                        homicídio 3<br />
                    </p>
                    <div className={reveal} onClick={(e)=>{setReveal('')}}>
                        <p>seria ele o responsável pelo nosso crime?</p>
                    </div>
                </div>
                <div className="imgcontainer">
                    <img alt='Ronnie Lessa' src={lessa} className='image' />
                </div>
            </div>
            <Link to='/p4' className="button">voltar</Link>
        </div>
    )
}

export default P5