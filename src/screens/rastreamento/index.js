import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Rastreamento = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.rastreamento!=='ok'){
            let tempList=searchList
            tempList.rastreamento='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>
                    “<span className='black'>|||||||||||||||||||||||||||</span>{' '}
                    passou a planejar como não dar sinais, literalmente, de sua participação no crime.
                     No dia 21 de janeiro, ele procurou se informar sobre como 'desfazer a sincronização
                      do Google Chrome'{' '}<span className='black'>|||||||||||||||||||||||||</span>{' '}
                      Ou seja: fazer desaparecer todo o caminho virtual trilhado até o assassinato.
                      {' '}<span className='black'>||||||||||||||</span>{' '}
                      Depois de se informar sobre como sumir do mapa, o policial ainda pesquisou, 
                      no dia do crime, sobre a legalidade da utilização de um equipamento chamado Jammer”
                    </p><br />
                    <p className='info second'>
                    “O aparelho, que não tem amparo legal para seu uso, bloqueia sinais de celulares
                     e qualquer atividade feita a partir de um telefone. Pela investigação, a ideia
                      seria usar o Jammer no carro, o que impossibilitaria o rastreio e a identificação
                       de dados de qualquer conta telefônica manipulada dentro do veículo”
                    </p>
                </div>
            </div>
            <BackButton to='/inicial' color='#F2CA39' done='84' />
        </div>
    )
}
export default Rastreamento