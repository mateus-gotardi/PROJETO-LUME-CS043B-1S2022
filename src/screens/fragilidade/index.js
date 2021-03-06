import BackButton from '../../components/footer'
import '../../styles/pages.scss'
import { Link } from 'react-router-dom'
import React, {useEffect} from 'react'
import { SearchContext } from '../../providers/search'

const Fragilidade = () => {
    const {searchList, setSearchList}=React.useContext(SearchContext)
    useEffect(()=>{
        if (searchList.fragilidade!=='ok'){
            let tempList=searchList
            tempList.fragilidade='ok'
            setSearchList(tempList)
        }
    },[searchList, setSearchList])
    return (
        <div className='general'>
            <div className="container">
                <div className='noImageBox'>
                    <p className='info hoverable first'>“Não é fácil investigar um crime em que
                        foi premeditado por pessoas que escolheram o local e o momento de executá-lo"
                    </p><br />
                    <p className='info hoverable second'>“Infelizmente, foi um crime muito sofisticado,
                        muito bem elaborado, e a gente consegue
                        ter compreensão razoável sobre isso, mas também é preciso compreender que não há crime perfeito”
                    </p><br/>
                    <p className='info second'>“O profissionalismo dos executores
                        eleva o grau de dificuldade da elucidação do crime”
                    </p><br/>
                    <p className='info hoverable first'>“Nem o <Link className='link' to='/carro'>carro</Link> dos criminosos foram encontrados,
                        até hoje a rota de fuga usada pelos criminosos ainda é uma incógnita,
                        apesar das inúmeras <Link className='link' to='/camera'>câmeras</Link> de monitoramento espalhadas pela cidade”
                    </p>

                </div>
            </div>
            <BackButton to='/tiros' color='#F2CA39' done='48' />
        </div>
    )
}
export default Fragilidade 