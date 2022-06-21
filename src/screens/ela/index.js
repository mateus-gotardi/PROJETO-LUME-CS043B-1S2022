import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import { Link } from 'react-router-dom'

const Ela = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.ela !== 'ok') {
            let tempList = searchList
            tempList.ela = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info textCenter'>
                        Crimes por vezes acabam sem solução.<br />
                        Em 14 de março de 2018 um crime aconteceu. Neste dia, uma vereadora e seu motorista foram mortos após um carro ter emparelhado com eles efetuando diversos tiros. Um miliciano e um vereador chegaram a ser apontados como suspeitos do crime. Uma denuncia anônima mudou o rumo das investigações. Um ano após o crime, dois homens foram presos, acusados de terem cometido os assassinatos, concluindo a primeira fase da investigação. A esperança era que com a prisão dos executores seria possível descobrir porque o crime aconteceu e quem estaria por trás disso. 3 anos se passaram desde então, ainda sem respostas. O caso segue em completo sigilo. Os fragmentos desta história são nebulosos e difíceis de rastrear.
                        Mas a pergunta, presente desde o começo dessa história, continua: <Link to='/finalcs043b1s2022' className='link bold'>quem mandou matar Marielle Franco?</Link>
                    </p>
                </div>
            </div>
            <BackButton to='/rumo' color='#C94545' done='96' />
        </div>
    )
}
export default Ela