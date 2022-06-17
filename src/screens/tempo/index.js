import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Tempo = () => {
    const {searchList, setSearchList, progress, setProgress}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.tempo!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.tempo='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“Dessa vez, a conclusão sobre os assassinos levaria mais tempo.
                    {' '}<span className='black'>|||||||||||||</span>{' '}
                    Delegacia de Homicídios da Capital (DHC) levou mais de três anos para encaminhar ao
                     Ministério Público cerca de 1,3 mil <Link className='link' to='/arquivo '>arquivos</Link> de fotos e vídeos do caso, que completa 4 anos”
                    </p><br />
                    <p className='info second'>“Ao longo dos anos, houve troca-troca no comando das investigações. 
                    Três grupos de promotores diferentes ficaram à frente do caso no Ministério Público. 
                    Na Polícia Civil, o quinto <Link className='link' to='/delegado'>delegado</Link> assumiu há pouco mais de um mês”
                    </p><br/>
                    <p className='info first'>“Por que demorou tanto tempo para as promotoras tomarem conhecimento da foto? Porque os
                    peritos da Polícia Civil levaram sete meses – entre março de 2019, quando o telefone foi apreendido,
                     e outubro – para conseguirem quebrar a senha do celular”
                    </p>
                </div>
            </div>
            <BackButton to='/investigacao' />
        </div>
    )
}
export default Tempo 