import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React from 'react'
import { Link } from 'react-router-dom'

const Final = () => {
    return (
        <div className='general'>
            <style>{`body { background-color: #C94545; }`}</style>
            <div className="container">
                <div className='noImageBox'>
                    <h1 className='finalTitle textCenter'>Quem mandou matar <Link to='/fontescs043b1s2022' className='finalTitle'>Marielle Franco?</Link></h1>
                    <p className='finalInfo textCenter'>
                        O <Link to='/creditoscs043b1s2022' className='finalInfo'>Projeto Lume</Link> surgiu com uma inquietação: dar luz a arquivos de uma história cada vez mais complicada.
                        O caso Marielle Franco é tão complexo quanto triste, como a investigação corre em sigilo muito pouco se sabe sobre o que realmente aconteceu ou anda acontecendo;
                        ao mesmo tempo, se alguém for tentar buscar sobre o caso irá se deparar com uma pilha infinita de <Link to='/fontescs043b1s2022' className='finalInfo'>informações</Link>: notícias, reportagens, vídeos, áudios, fake news,
                        e assim por diante. Na tentativa de não deixar que esta história se perca, e no pior dos casos seja esquecida, este projeto tenta estabelecer uma nova relação
                        com aquilo que foi produzido sobre o caso até os dias de hoje. Todos os textos e imagens aqui presentes fazem parte de alguma fonte jornalística, são pilhas
                        e pilhas de informações que a mídia produziu e distribuiu ao longo dos anos. Ao remontá-las de uma nova maneira dentro deste site, nosso objetivo é instigar
                        uma reflexão para o usuário que aceita o desafio de investigar esta história: seria possível concluir algo através dos fatos, até então, presentes para nós?
                        Quem mandou matar Marielle, e o motivo por trás disso, ainda continua um mistério. Mesmo assim, isto não significa que nada possa ser concluído.
                        Esperamos que um dia este caso tenha seu devido fim, mas até lá, o que podemos fazer é preservar e refletir sobre o que existe desta história.
                    </p>
                </div>
            </div>
            <BackButton to='/ela' color='#C94545' done='100' background='#C94545' />
        </div>
    )
}
export default Final