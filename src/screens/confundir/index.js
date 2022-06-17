import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Confundir = () => {
    const { searchList, setSearchList , progress, setProgress} = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.confundir !== 'ok') {
            setProgress(progress+2)
            let tempList = searchList
            tempList.confundir = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className='container'>
                <div className='noImageBox'>
                    <p className='info first'>
                        “Até chegar aos acusados, a investigação sofreu um grande desvio de rota e suspeita de fraude.
                        Por muitos meses, a principal linha de apuração buscava verificar se o assassinato teria sido
                        cometido pelo ex-policial Orlando Oliveira de Araújo, conhecido como Orlando de Curicica,
                        a mando do vereador Marcello Siciliano”
                    </p>
                    <p className='info second'>
                        “Essa linha começou a ser perseguida quando o policial militar Rodrigo Jorge Ferreira prestou depoimento à Polícia Civil dizendo que teria visto os dois conversando sobre o assassinato”
                    </p>
                    <p className='info first'>
                        “Essa linha não prosperou. Mais tarde, ele admitiu à Polícia Federal que o testemunho era falso”
                    </p>
                </div>
            </div>

            <BackButton to='/inicial' />
        </div>
    )
}
export default Confundir 