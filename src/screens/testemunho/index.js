import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Testemunho = () => {
    const { searchList, setSearchList, progress, setProgress } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.testemunho !== 'ok') {
            setProgress(progress+2)
            let tempList = searchList
            tempList.testemunho = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className='container'>
                <div className='noImageBox'>
                    <p className='info first'>
                        “Segundo o jornal O Globo, duas pessoas que estavam no local do crime foram orientadas a se afastar
                        e não foram convocadas naquele momento para prestar depoimento. Foram convocadas pela polícia após a publicação da reportagem"
                    </p><br />
                    <p className='info second'>
                        “a repórter tentou obter alguma informação com as três pessoas em situação de rua que viu pelas redondezas.{' '}<span className='black'>||||||||||||||||||</span>
                        Depois de ouvir o que o homem em situação de rua presenciara na hora do ataque, a repórter lhe perguntou se havia mais alguém próximo naquele momento e ele então se lembrou de uma moça que atravessava a rua com um bebê no colo e mais duas crianças”
                    </p><br />
                    <p className='info first'>
                        “Os autores do crime sabem os <Link className='link' to='/metodos'>métodos</Link> investigativos da polícia, portanto parece haver um uso racional de testemunhas para <Link className='link' to='/confundir'>confundir</Link> e fazer os investigadores baterem cabeça”
                    </p>
                </div>
            </div>

            <BackButton to='/imagens' />
        </div>
    )
}
export default Testemunho 