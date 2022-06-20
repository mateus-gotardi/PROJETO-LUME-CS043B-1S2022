import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Erro = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.erro !== 'ok') {
            let tempList = searchList
            tempList.erro = 'ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“Mas, por ser crime político,
                        a complexidade de sua investigação vai além dos problemas típicos de solução de mortes no Rio”
                    </p>
                </div>
            </div>
            <div className='container marginTop5 hoverable'>
                <div className='box'>
                    <p className='info textCenter'>“Especialistas apontam que as autoridades cometeram erros básicos na investigação em seu primeiro ano, o que prejudicou o trabalho”</p>
                </div>
                <div className='box'>
                    <p className='info textCenter'>
                        “Também houve problemas relativos à coleta e processamento de imagens de câmeras de segurança”
                    </p>
                </div>
            </div>
            <div className='container marginTop5'>
                <div className='noImageBox hoverable'>
                    <p className='info textCenter'>
                        “Revisitaram o banco de imagens, reprocessaram a imagem, descobriram que tinha um problema,
                        colocaram numa ferramenta que era capaz de ler aquela tecnologia, que era ultrapassada,
                        ela leu e o carro se revelou{' '}<span className='black'>|||||||||||||||</span>{' '}Quando os agentes se deram conta disso,
                        voltaram ao Quebra-Mar{' '}<span className='black'>|||||||||||||||</span>{' '}mas as câmeras não tinham mais as imagens do dia do assassinato”
                    </p>
                    <p className='info second marginTop5'>
                        “Muito provavelmente nós íamos pegar o momento em que entraram no carro
                        {' '}<span className='black'>|||||||||</span>{' '}Isso é um fato, não há como negar isso”
                    </p>
                </div>
            </div>
            <BackButton to='/inicial' color='#66CCFF' done='48'/>
        </div>
    )
}
export default Erro 