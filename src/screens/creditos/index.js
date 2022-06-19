import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React from 'react'
import logoUnicamp from '../../assets/images/unicamp-logo.png'
import logoIA from '../../assets/images/ia-logo.png'

const Creditos = () => {
    return (
        <div className='general'>
            <style>{`.general { padding-top: 15vh }`}</style>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info left textCenter'>
                        O Projeto Lume foi criado por estudantes do curso de Comunicação Social - Midialogia da Universidade Estadual de Campinas (UNICAMP)
                    </p>
                    <p className='info left'>
                        <b>Orientação:</b> Prof. Dr. César Baio<br />
                        <b>Monitor:</b> Claudio de Melo Filho
                    </p>
                    <div className='creditsContainer'>
                        <p className='info left'>
                            <b>Realizadores:</b><br />
                            Pesquisa e curadoria:<br />
                            Gabriel Vinicius da Rosa<br />
                            Paula Cruz<br />
                            Programação:<br />
                            Mateus de Aguiar Gotardi
                        </p>
                        <div className='logos'>
                            <img alt='logo unicamp' src={logoUnicamp} className='logo' />
                            <img alt='logo IA' src={logoIA} className='logo' />
                        </div>

                    </div>

                </div>
            </div>
            <BackButton to='/finalcs043b1s2022' color='#fff' done='100' />
        </div>
    )
}
export default Creditos