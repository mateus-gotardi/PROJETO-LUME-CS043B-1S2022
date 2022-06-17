import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Arquivo = () => {
    const { searchList, setSearchList, progress, setProgress } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.arquivo !== 'ok') {
            setProgress(progress+2)
            let tempList = searchList
            tempList.arquivo = 'ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container">
                <div className='box'>
                    <p className='info textCenter'>“Desde o início, estávamos cumprindo o protocolo. Nós trabalhávamos com a seguinte ideia:
                        precisamos preservar tudo o que pode ser perdido. E as <Link className='link' to='/imagens'>imagens</Link> poderiam ser perdidas”
                    </p>
                </div>
                <div className='box'>
                    <p className='info'>“Era um codec com defeito que pulava a imagem, e o ideal era ele ter passado isso para um técnico
                        {' '}<span className='black'>||||||||||||||||||||||||</span>{' '}Foi um equívoco, um <Link className='link' to='/erro'>erro</Link> de procedimento”
                    </p>
                </div>
            </div>
            <div className='container marginTop5'>
                <div className='noImageBox'>
                    <p className='info textCenter'>
                        “Essa perspectiva de imagem é uma coisa que, para o investigador, é muito cara e precisa ser realizada o mais rapidamente possível,
                        porque podemos perdê-las. Divido as equipes, e elas passam a buscar imagens{' '}<span className='black'>|||||||||||||||||||||||||||||||||||||||||||||</span>{' '}
                        Foram arrecadando e analisando as imagens. Só que houve um problema nesse trabalho, que foi não perceber um equívoco de captura de codec”
                    </p>
                </div>
            </div>
            <BackButton to='/tempo' />
        </div>
    )
}
export default Arquivo 