import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'
import BackButton from '../../components/footer'
import '../../styles/pages.scss'


const Bombeiro = () => {
    const {searchList, setSearchList, progress, setProgress}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.bombeiro!=='ok'){
            setProgress(progress+2)
            let tempList=searchList
            tempList.bombeiro='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList, progress, setProgress])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>“Pouco depois das 6h, agentes da Delegacia de Homicídios da Capital,
                        promotores do Ministério Público, agentes da Coordenadoria de Segurança
                        e Inteligência e representantes da Corregedoria do Corpo de Bombeiros
                        chegaram à casa do bombeiro em um condomínio de luxo” </p>
                    <div className='noPadding row'>
                        <p className='info hoverable'>“Eles são parceiros em diversas atividades ilícitas"</p>
                        <p className='info hoverable'>“A prisão de <span className='black'>Maxwell</span> tem muitas relações com quem hoje responde pelo assassinato”
                        </p>
                    </div>
                    <p className='info hoverable second'>“Ele escondeu várias armas que foram lançadas ao mar. Se a arma do crime, de fato estava lá, não podemos afirmar. O que sabemos é que ele ocultou várias armas. Chegamos a ele após várias provas que estão no processo mostram que ele participou da ocultação” </p>

                </div>
            </div>
            <BackButton to='/inicial' />
        </div>
    )
}
export default Bombeiro 