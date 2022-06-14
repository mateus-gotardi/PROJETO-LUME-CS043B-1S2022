import { Link } from 'react-router-dom'
import '../../styles/pages.scss'
import BackButton from '../../components/backButton'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Execucao = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.assassinato!=='ok'){
            let tempList=searchList
            tempList.assassinato='ok'
            setSearchList(tempList)
        }
    })
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info first'>
                    “Segundo as primeiras informações da polícia, bandidos em um carro emparelharam ao lado do veículo
                    {' '}<span className='black'>|||||||||||||||||||||||||</span>{' '}foi atingida com pelo menos quatro
                    tiros na cabeça. A perícia encontrou nove cápsulas de tiros no local.
                    Os criminosos fugiram sem levar nada.”
                    </p><br />
                    <p className='info second'>
                    “Apenas uma rajada de tiros foi disparada a partir de uma submetralhadora contra o carro
                    {' '}<span className='black'>||||||||||||||||||||||||||||</span>{' '}O veículo do assassino
                    imprensou o carro branco”
                    </p>
                    <p  className='info first'>“O homem que deu os tiros estava sentado no banco de trás e era <Link className='link' to='/negro'>negro</Link>. Eu vi o braço
                     dele quando apontou a arma, que parecia ter <Link className='link' to='/silenciador'>silenciador”</Link></p>
                    
                </div>
            </div>
            <BackButton to='/local' />
        </div>
    )
}
export default Execucao