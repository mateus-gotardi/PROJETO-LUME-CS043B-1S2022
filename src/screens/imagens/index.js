import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { SearchContext } from '../../providers/search'

const Imagens = () => {
    const { searchList, setSearchList } = React.useContext(SearchContext)
    useEffect(() => {
        if (searchList.imagens !== 'ok') {
            let tempList = searchList
            tempList.imagens = 'ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className='container'>
                <div className='sideText'>
                    <p className='info textCenter'>
                        “Tão logo a gente assumiu o caso, o primeiro passo foi arrecadar as imagens
                        havia uma chance de ter imagens do momento da execução. Mas vimos que [as câmeras]
                        foram desligadas, como parte do modus operandi dos criminosos”
                    </p>
                </div>
                <div className='noImageBox hoverable'>
                    <p className='info textCenter'>
                        “Pegamos todas as imagens do trajeto dos caras na ida, o tempo que permaneceram no local até o ponto de execução
                        {' '}<span className='black'>|||||||||||</span>{' '}
                        Nós já tínhamos, àquela altura, o local e a dinâmica – a perícia de local já havia desenhado isso”
                    </p><br />
                    <p className='info textCenter'>
                        “Sabíamos que os autores não desceram do veículo. Havia essa perspectiva de que foi tudo muito rápido.
                         Tínhamos o <Link className='link' to='/testemunho'>testemunho</Link> da Fernanda”
                    </p><br />
                    <p className='info textCenter'>
                        “Como sabíamos que os autores não desceram do carro, atiraram com o veículo em movimento, fomos buscar imagens de câmera”
                    </p>
                </div>
            </div>

            <BackButton to='/arquivo' color='#66CCFF' done='48'/>
        </div>
    )
}
export default Imagens 