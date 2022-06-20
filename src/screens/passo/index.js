import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'
import { Link } from 'react-router-dom'

const Passo = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.passo !== 'ok') {
            let tempList = searchList
            tempList.passo = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='noImageBox'>
                    <p className='info first'>
                        “Segundo o delegado, as apurações não se encerram nas prisões do sargento reformado Ronnie Lessa
                        e do ex-policial militar Élcio Vieira de Queiroz. As investigações permanecem sob <Link className='link' to='/sigilo'>sigilo</Link> para identificar o mando do crime”
                    </p>
                    <p className='info second hoverable'>
                        “Em entrevista coletiva, Giniton disse que a prisão dos executores finalizava a primeira parte da investigação. 'O caso ainda está em aberto. Estamos entregando a primeira fase, e a segunda ainda está em andamento.
                        <br />O fato é que os dois estão presos. Se o terceiro está no banco do carona ou não, a segunda fase cuidará dele”
                    </p><br/>
                    <p className='info second hoverable'>
                        “No mesmo dia, Lages soube que seria afastado do caso”
                    </p>
                </div>
            </div>

            <BackButton to='/alvo' color='#66CCFF' done='96'/>
        </div>
    )
}
export default Passo 