import { Link } from 'react-router-dom'
import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React from 'react'


const Crime = () => {

    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“Já estamos chegando a 4 anos, se fosse fácil já teria sido solucionado”</p>
                    <br/>
                    <p className='info hoverable second'>“Nós estamos trabalhando de forma ininterrupta, e assim trabalharemos, até o total esclarecimento de todas as circunstâncias que envolvem o crime” </p>
                    <br/>
                    <p className='info hoverable first'>“Nem a <Link to='/arma' className='link'>arma</Link> de onde
                        partiram os tiros <span className="black">||||||||||||</span> foram encontrados”</p>
                </div>
            </div>
            <BackButton to='/inicial' />
        </div>
    )
}
export default Crime