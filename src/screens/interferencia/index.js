import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Interferencia = () => {
    const { searchList, setSearchList , progress, setProgress} = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.interferencia !== 'ok') {
            setProgress(progress+2)
            let tempList = searchList
            tempList.interferencia = 'ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“Tudo bem que a sociedade também precisa e quer saber, mas precisa confiar em suas instituições.
                        Essa é a relação que talvez, em alguns momentos, a gente observa: a ausência de confiança”
                    </p><br />
                    <p className='info second'>“Em setembro daquele ano, a então Procuradora Geral da República, Raquel Dodge,
                        apresentou denúncia ao Superior Tribunal de Justiça (STJ) contra cinco pessoas por interferência nas investigações do assassinato”
                    </p><br />
                    <p className='info textCenter'>“Segundo Dodge, houve 'desvirtuamento da investigação{' '}<span className='black'>|||||||||</span>{' '}
                        o que acabou paralisando a investigação ou conduzindo-a para um rumo desvirtuado por mais de um ano{' '}<span className='black'>|||||||||||||</span>{' '}
                        “Ela ainda informou que solicitou a federalização da investigação dos mandantes do crime, 
                        o que posteriormente foi negado pelo Superior Tribunal de Justiça em maio de 2020”
                    </p>
                </div>
            </div>
            <BackButton to='/inicial' />
        </div>
    )
}
export default Interferencia 