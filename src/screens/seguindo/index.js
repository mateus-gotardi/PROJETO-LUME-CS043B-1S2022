import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import BackButton from '../../components/footer'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Seguindo = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.seguindo!=='ok'){
            let tempList=searchList
            tempList.seguindo='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>
                    “Depois da arma, entra na cena digital o <Link to='/rastreamento' className='link'>rastreamento</Link> da vítima. No dia 23 de novembro de 2017, o acusado adquiriu por um site de compras um "rastreador veicular sem fio com bateria de longa duração”
                    </p><br />
                    <p className='info second hoverable'>
                    “Na segunda-feira anterior ao crime, os assassinos passaram pelo endereço onde ela morou com o ex-marido{' '}<span className='black'>||||||||||||||</span>{' '}no mesmo horário em que os dois haviam marcado uma conversa. 
                    </p>
                </div>
            </div>
            <div className='container marginTop5'>
                <p className='info hoverable'>
                “Eles sabiam, né? Ou tiveram acesso à agenda dela digitalmente, ou receberam essa
                 informação de alguém{' '}<span className='black'>||||||||||||||||||||</span>{' '}outro detalhe curioso foi levado em consideração pela polícia. Ele diz respeito ao carro usado no dia do crime - um Cobalt com placa clonada. A partir do levantamento de imagens de câmeras de trânsito foi possível detectar indícios de que em 1º, 2 e 7 de fevereiro de 2018, o veículo já havia realizado o mesmo trajeto feito no dia do crime. O que levanta suspeitas sobre o monitoramento{' '}<span className='black'>||||||||||||||</span>{' '}ou um ensaio do que estaria por vir”
                </p>
            </div>
            <BackButton to='/cameras' color='#F2CA39' done='72' />
        </div>
    )
}
export default Seguindo