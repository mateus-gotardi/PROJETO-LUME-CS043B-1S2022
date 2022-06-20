import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Metodos = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.metodos !== 'ok') {
            let tempList = searchList
            tempList.metodos = 'ok'
            setSearchList(tempList)
        }
    }, [searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='box hoverable'>
                    <p className='info textLeft'>
                        “Tudo era monitorado naquele momento. Sabia que meu alvo tinha muitas relações dentro da Polícia Civil e Militar.
                        Não era qualquer <Link className='link' to='/alvo'>alvo</Link> e não era possível fazer qualquer movimentação ali sem que ele percebesse.
                        Eu não podia mandar uma viatura lá para perguntar que horas ele saiu no dia do crime eu sabia que não podia errar”
                    </p>
                </div>
                <div className='box hoverable'>
                    <p className='info textRight marginTop5'>
                        “Pedimos que essa diligência fosse feita pelo serviço de inteligência em conjunto com a Polícia Federal. Precisávamos que tirassem do condomínio essa informação muito valiosa: a movimentação de entrada e saída de visitantes, sem que se chamasse atenção de ninguém”
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='noImageBox marginTop5'>
                    <p className='info textCenter'>
                        “Agradeço a Deus até hoje por essa informação não ter vazado na época. Talvez a gente tivesse perdido algo, ou nem tivesse conseguido prender”
                    </p>
                </div>
            </div>

            <BackButton to='/testemunho' color='#66CCFF' done='72'/>
        </div>
    )
}
export default Metodos 